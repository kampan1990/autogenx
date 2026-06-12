"""
ส่งคำสั่งโพสไปยัง TikTok ผ่าน Chrome Extension
Extension รับ message แล้วกดโพสบนหน้าเว็บแทนผู้ใช้
"""
import asyncio
from models import PostJob


async def post_to_tiktok(job: PostJob) -> dict:
    """
    ส่ง job ไปเก็บใน queue — Extension จะ poll มารับแล้วโพสบนหน้าเว็บ
    ฟังก์ชันนี้ return ทันที ไม่รอผล
    """
    from pathlib import Path
    import json, uuid
    from datetime import datetime

    queue_file = Path(__file__).parent / "data" / "post_queue.json"
    queue_file.parent.mkdir(exist_ok=True)

    queue = []
    if queue_file.exists():
        queue = json.loads(queue_file.read_text(encoding="utf-8"))

    entry = {
        "id": str(uuid.uuid4()),
        "caption": job.caption,
        "image_urls": job.image_urls,
        "product_id": job.product_id,
        "status": "pending",
        "created_at": datetime.now().isoformat(),
    }
    queue.append(entry)
    queue_file.write_text(json.dumps(queue, ensure_ascii=False, indent=2), encoding="utf-8")

    return {"queued": True, "queue_id": entry["id"]}


# ── Extension poll endpoints (เรียกจาก content script) ──

from fastapi import APIRouter
router = APIRouter(prefix="/queue")


@router.get("")
def get_queue():
    from pathlib import Path
    import json
    queue_file = Path(__file__).parent / "data" / "post_queue.json"
    if not queue_file.exists():
        return []
    queue = json.loads(queue_file.read_text(encoding="utf-8"))
    # ส่งแค่ที่ยัง pending
    return [q for q in queue if q["status"] == "pending"]


@router.post("/{queue_id}/done")
def mark_done(queue_id: str):
    from pathlib import Path
    import json
    from datetime import datetime
    queue_file = Path(__file__).parent / "data" / "post_queue.json"
    queue = json.loads(queue_file.read_text(encoding="utf-8"))
    for q in queue:
        if q["id"] == queue_id:
            q["status"] = "done"
            q["finished_at"] = datetime.now().isoformat()
    queue_file.write_text(json.dumps(queue, ensure_ascii=False, indent=2), encoding="utf-8")
    return {"ok": True}


@router.post("/{queue_id}/fail")
def mark_fail(queue_id: str, reason: str = ""):
    from pathlib import Path
    import json
    from datetime import datetime
    queue_file = Path(__file__).parent / "data" / "post_queue.json"
    queue = json.loads(queue_file.read_text(encoding="utf-8"))
    for q in queue:
        if q["id"] == queue_id:
            q["status"] = "failed"
            q["reason"] = reason
            q["finished_at"] = datetime.now().isoformat()
    queue_file.write_text(json.dumps(queue, ensure_ascii=False, indent=2), encoding="utf-8")
    return {"ok": True}

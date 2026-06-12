"""
AutoGenX Local Backend Server — port 41789
รับคำสั่งจาก Chrome Extension แล้วจัดการ:
 - โพสสินค้า TikTok
 - ตั้งเวลาโพสอัตโนมัติ
 - จัดการข้อมูลสินค้า
 - สร้างคำบรรยายด้วย AI
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.date import DateTrigger
from apscheduler.triggers.cron import CronTrigger
import uvicorn
import json
import uuid
from datetime import datetime
from pathlib import Path

from models import Product, PostJob, GenerateCaptionRequest, ScheduleRequest
from ai_caption import generate_caption
from tiktok_poster import post_to_tiktok, router as queue_router

app = FastAPI(title="AutoGenX Backend", version="1.0.0")
scheduler = AsyncIOScheduler()

app.include_router(queue_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = Path(__file__).parent / "data" / "products.json"
JOBS_FILE = Path(__file__).parent / "data" / "jobs.json"
DATA_FILE.parent.mkdir(exist_ok=True)


def load_json(path: Path) -> list:
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return []


def save_json(path: Path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


# ── สินค้า ──────────────────────────────────────────────

@app.get("/products")
def list_products():
    return load_json(DATA_FILE)


@app.post("/products")
def add_product(product: Product):
    products = load_json(DATA_FILE)
    item = product.model_dump()
    item["id"] = str(uuid.uuid4())
    item["created_at"] = datetime.now().isoformat()
    products.append(item)
    save_json(DATA_FILE, products)
    return item


@app.put("/products/{product_id}")
def update_product(product_id: str, product: Product):
    products = load_json(DATA_FILE)
    for i, p in enumerate(products):
        if p["id"] == product_id:
            updated = product.model_dump()
            updated["id"] = product_id
            updated["created_at"] = p.get("created_at")
            updated["updated_at"] = datetime.now().isoformat()
            products[i] = updated
            save_json(DATA_FILE, products)
            return updated
    raise HTTPException(status_code=404, detail="ไม่พบสินค้า")


@app.delete("/products/{product_id}")
def delete_product(product_id: str):
    products = load_json(DATA_FILE)
    products = [p for p in products if p["id"] != product_id]
    save_json(DATA_FILE, products)
    return {"ok": True}


# ── AI สร้างคำบรรยาย ────────────────────────────────────

@app.post("/generate-caption")
async def api_generate_caption(req: GenerateCaptionRequest):
    caption = await generate_caption(req.product_name, req.description, req.price, req.hashtags)
    return {"caption": caption}


# ── โพสทันที ────────────────────────────────────────────

@app.post("/post-now")
async def post_now(job: PostJob):
    result = await post_to_tiktok(job)
    return result


# ── ตั้งเวลาโพส ──────────────────────────────────────────

@app.post("/schedule")
def schedule_post(req: ScheduleRequest):
    job_id = str(uuid.uuid4())

    async def run():
        job = PostJob(
            product_id=req.product_id,
            caption=req.caption,
            image_urls=req.image_urls,
        )
        await post_to_tiktok(job)
        _update_job_status(job_id, "done")

    if req.cron:
        trigger = CronTrigger.from_crontab(req.cron)
    else:
        trigger = DateTrigger(run_date=req.run_at)

    scheduler.add_job(run, trigger=trigger, id=job_id)

    jobs = load_json(JOBS_FILE)
    jobs.append({
        "id": job_id,
        "product_id": req.product_id,
        "run_at": req.run_at.isoformat() if req.run_at else None,
        "cron": req.cron,
        "status": "pending",
        "created_at": datetime.now().isoformat(),
    })
    save_json(JOBS_FILE, jobs)
    return {"job_id": job_id, "status": "scheduled"}


@app.get("/schedule")
def list_jobs():
    return load_json(JOBS_FILE)


@app.delete("/schedule/{job_id}")
def cancel_job(job_id: str):
    try:
        scheduler.remove_job(job_id)
    except Exception:
        pass
    jobs = load_json(JOBS_FILE)
    jobs = [j for j in jobs if j["id"] != job_id]
    save_json(JOBS_FILE, jobs)
    return {"ok": True}


def _update_job_status(job_id: str, status: str):
    jobs = load_json(JOBS_FILE)
    for j in jobs:
        if j["id"] == job_id:
            j["status"] = status
            j["finished_at"] = datetime.now().isoformat()
    save_json(JOBS_FILE, jobs)


# ── Health check ─────────────────────────────────────────

@app.get("/ping")
def ping():
    return {"status": "ok", "time": datetime.now().isoformat()}


@app.on_event("startup")
async def startup():
    scheduler.start()


@app.on_event("shutdown")
async def shutdown():
    scheduler.shutdown()


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=41789, reload=True)

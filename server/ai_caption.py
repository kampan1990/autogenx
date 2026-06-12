"""
สร้างคำบรรยายสินค้าด้วย Claude AI
"""
import os
import anthropic


async def generate_caption(
    product_name: str,
    description: str,
    price: float,
    hashtags: list[str],
) -> str:
    api_key = os.getenv("ANTHROPIC_API_KEY", "")
    if not api_key:
        return _fallback_caption(product_name, price, hashtags)

    client = anthropic.Anthropic(api_key=api_key)
    tags = " ".join(f"#{t.lstrip('#')}" for t in hashtags) if hashtags else ""

    prompt = f"""เขียนคำบรรยายสินค้า TikTok ภาษาไทย สั้นกระชับ ดึงดูด น่าซื้อ ไม่เกิน 150 คำ

สินค้า: {product_name}
รายละเอียด: {description}
ราคา: {price:,.0f} บาท
แฮชแท็ก: {tags}

ให้เขียนเฉพาะคำบรรยาย + แฮชแท็กเท่านั้น ไม่ต้องมีคำนำ"""

    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=300,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text.strip()


def _fallback_caption(product_name: str, price: float, hashtags: list[str]) -> str:
    tags = " ".join(f"#{t.lstrip('#')}" for t in hashtags) if hashtags else "#ของดี #แนะนำ"
    return f"🔥 {product_name} ราคาพิเศษ {price:,.0f} บาท!\nสั่งได้เลย ส่งเร็ว ของแท้ 100%\n{tags}"

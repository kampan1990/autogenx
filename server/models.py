from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class Product(BaseModel):
    name: str
    description: str
    price: float
    image_urls: list[str] = []
    hashtags: list[str] = []
    category: str = ""


class PostJob(BaseModel):
    product_id: Optional[str] = None
    caption: str
    image_urls: list[str] = []


class GenerateCaptionRequest(BaseModel):
    product_name: str
    description: str
    price: float
    hashtags: list[str] = []


class ScheduleRequest(BaseModel):
    product_id: str
    caption: str
    image_urls: list[str] = []
    run_at: Optional[datetime] = None   # โพสครั้งเดียวตามเวลา
    cron: Optional[str] = None          # โพสซ้ำ เช่น "0 9 * * *" = ทุกวัน 9 โมง

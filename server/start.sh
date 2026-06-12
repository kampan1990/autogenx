#!/bin/bash
# รัน AutoGenX Backend Server
cd "$(dirname "$0")"

# ติดตั้ง dependencies ถ้ายังไม่มี
pip install -r requirements.txt -q

# ตั้งค่า API key (แก้ไขได้ที่นี่)
# export ANTHROPIC_API_KEY="your-key-here"

echo "🚀 AutoGenX Backend กำลังเริ่มต้น port 41789..."
python main.py

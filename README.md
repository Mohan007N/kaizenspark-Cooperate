# KaizenSpark Tech - Enterprise Website

Modern, ultra-premium enterprise website featuring a futuristic dark-tech UI with advanced animations, live dashboards, and a full-stack careers portal.

## ✨ Features

- **Premium UI/UX** - Glassmorphism, dynamic animations, dark theme
- **Interactive Elements** - Animated backgrounds, magnetic buttons, live dashboards
- **Advanced Animations** - GSAP, Framer Motion, 3D effects
- **Careers Portal** - Full job listings with application system
- **FastAPI Backend** - Resume upload and email notifications

## 🛠️ Tech Stack

**Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP, Chart.js  
**Backend:** FastAPI, Python 3.8+, Resend API

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Python (3.8+)

### Start Development

**Windows:**
```bash
start-dev.bat
```

**Linux/Mac:**
```bash
chmod +x start-dev.sh
./start-dev.sh
```

**Manual Setup:**

1. **Install dependencies:**
```bash
npm install
cd backend && pip install -r requirements.txt
```

2. **Start backend:**
```bash
cd backend
python main.py
```

3. **Start frontend (new terminal):**
```bash
npm run dev
```

### Access
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

## 📧 Configuration

Email notifications use Resend API. Configure in `.env`:
```
RESEND_API_KEY=your_api_key_here
```

Applications are sent to: `hr@kaizensparktech.com`

## 📦 Build

```bash
npm run build
```

## 🚀 Deployment

**Frontend:** Deploy `dist` folder to Vercel/Netlify  
**Backend:** Deploy `backend` folder to Railway/Render

## 📝 License

© 2026 KaizenSpark Tech. All rights reserved.

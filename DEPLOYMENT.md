# 🚀 KaizenSpark Deployment Guide

## ✅ Backend Deployment (Render) - COMPLETED

Your FastAPI backend is live at: **https://kaizenspark-cooperate-1.onrender.com**

### Backend Environment Variables on Render

Make sure these are set in your Render dashboard:

```
RESEND_API_KEY=re_jQPTUgQH_Q3rxFTexd144cZEgsaY538yX
RECIPIENT_EMAIL=hr@kaizensparktech.com
```

**⚠️ Security Note:** The API key is currently exposed in your local files. After confirming it's set in Render's environment variables, remove it from all local files.

---

## 📦 Frontend Deployment (Vercel)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Configure for production deployment"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### Step 3: Add Environment Variables in Vercel

In Vercel project settings → Environment Variables, add:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://kaizenspark-cooperate-1.onrender.com` |

### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete.

---

## 🔧 Local Development

### Frontend (Port 8080)
```bash
cd kaizenspark-enterprise-main
npm install
npm run dev
```

### Backend (Port 8000)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🌐 CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:8080` (local dev)
- `http://localhost:5173` (Vite default)
- `http://localhost:3000` (alternative)
- `https://kaizenspark-cooperate-1.onrender.com` (backend)
- `https://*.vercel.app` (Vercel deployments)
- `https://kaizensparktech.com` (production domain)

**Note:** Vercel wildcard (`*.vercel.app`) may not work. After deployment, update `backend/main.py` with your exact Vercel URL:

```python
allow_origins=[
    # ... other origins
    "https://your-app-name.vercel.app",  # Replace with actual URL
]
```

Then redeploy the backend on Render.

---

## 🔐 Security Checklist

- [x] Backend API key moved to environment variables
- [x] Frontend .env cleaned (no sensitive keys)
- [x] CORS configured for production domains
- [ ] Update Render environment variables
- [ ] Remove exposed API key from git history (if committed)
- [ ] Add exact Vercel URL to CORS after deployment
- [ ] Test all API endpoints from production frontend

---

## 🧪 Testing Production Setup

### Test Backend
```bash
curl https://kaizenspark-cooperate-1.onrender.com/
# Should return: {"message":"KaizenSpark Careers API is running"}
```

### Test Frontend API Connection
After Vercel deployment, open browser console and check:
```javascript
console.log(import.meta.env.VITE_API_URL)
// Should show: https://kaizenspark-cooperate-1.onrender.com
```

---

## 📝 Post-Deployment Tasks

1. **Update CORS with exact Vercel URL** (replace wildcard)
2. **Test job application form** from production site
3. **Test contact form** from production site
4. **Verify emails are received** at hr@kaizensparktech.com
5. **Set up custom domain** (optional)
6. **Enable Vercel analytics** (optional)
7. **Set up monitoring** for backend uptime

---

## 🆘 Troubleshooting

### CORS Errors
- Check browser console for exact error
- Verify Vercel URL is in backend CORS list
- Ensure no trailing slashes in URLs

### API Not Responding
- Check Render logs for errors
- Verify environment variables are set
- Test backend health endpoint: `/health`

### Email Not Sending
- Verify RESEND_API_KEY is set in Render
- Check Render logs for email errors
- Verify Resend account is active

---

## 📞 Support

For issues, check:
- Render logs: [Render Dashboard](https://dashboard.render.com)
- Vercel logs: [Vercel Dashboard](https://vercel.com/dashboard)
- GitHub repo: Your repository URL

---

**Last Updated:** May 19, 2026

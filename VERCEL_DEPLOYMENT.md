# 🚀 Vercel Frontend Deployment Guide

## Prerequisites

- GitHub account with your repository
- Vercel account (sign up at [vercel.com](https://vercel.com))

## Step-by-Step Deployment

### 1. Prepare Your Code

Make sure all changes are committed and pushed:

```bash
git add .
git commit -m "Configure for production deployment"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Click **"Import"**

### 3. Configure Build Settings

Vercel should auto-detect Vite, but verify these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Root Directory** | `./` (or `kaizenspark-enterprise-main` if needed) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### 4. Add Environment Variables

In the **Environment Variables** section, add:

**Key:** `VITE_API_URL`  
**Value:** `https://kaizenspark-cooperate-1.onrender.com`

**Important:** 
- No trailing slash in the URL
- Make sure to add this for all environments (Production, Preview, Development)

### 5. Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll get a URL like: `https://your-project.vercel.app`

### 6. Update Backend CORS

After deployment, you need to update your backend to allow requests from your Vercel URL.

**Option A: Use exact URL (Recommended)**

Edit `backend/main.py` and replace the wildcard:

```python
allow_origins=[
    "http://localhost:5173",
    "http://localhost:3000",
    "http://localhost:8080",
    "https://kaizenspark-cooperate-1.onrender.com",
    "https://your-actual-project.vercel.app",  # ← Add your exact Vercel URL
    "https://kaizensparktech.com",
],
```

**Option B: Keep wildcard (Less secure)**

The current wildcard `https://*.vercel.app` should work, but some browsers may not support it.

### 7. Redeploy Backend

After updating CORS:

1. Commit and push changes to your backend repository
2. Render will automatically redeploy
3. Wait for deployment to complete

### 8. Test Your Deployment

1. Visit your Vercel URL
2. Open browser DevTools (F12) → Console
3. Check the API URL:
   ```javascript
   console.log(import.meta.env.VITE_API_URL)
   // Should show: https://kaizenspark-cooperate-1.onrender.com
   ```
4. Test the job application form
5. Test the contact form
6. Verify emails arrive at hr@kaizensparktech.com

## Custom Domain (Optional)

### Add Custom Domain to Vercel

1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `kaizensparktech.com`)
4. Follow Vercel's DNS configuration instructions

### Update Backend CORS for Custom Domain

Add your custom domain to the CORS list:

```python
allow_origins=[
    # ... existing origins
    "https://kaizensparktech.com",
    "https://www.kaizensparktech.com",
],
```

## Troubleshooting

### Build Fails

**Error:** `Module not found` or `Cannot find package`

**Solution:**
```bash
# Locally test the build
npm run build

# If it works locally, check Vercel build logs
# Make sure all dependencies are in package.json, not just devDependencies
```

### CORS Errors in Production

**Error:** `Access to fetch at '...' from origin '...' has been blocked by CORS policy`

**Solution:**
1. Check your exact Vercel URL
2. Add it to backend CORS list
3. Redeploy backend
4. Clear browser cache and test again

### Environment Variable Not Working

**Error:** API calls go to `undefined` or `localhost`

**Solution:**
1. Verify `VITE_API_URL` is set in Vercel
2. Redeploy the project (environment changes require redeployment)
3. Check browser console: `console.log(import.meta.env.VITE_API_URL)`

### API Returns 404

**Error:** `404 Not Found` when calling API

**Solution:**
1. Verify backend is running: `https://kaizenspark-cooperate-1.onrender.com/`
2. Check the API endpoint path (should be `/api/apply` or `/api/contact`)
3. Ensure no double slashes in URL

## Continuous Deployment

Vercel automatically redeploys when you push to your main branch:

```bash
git add .
git commit -m "Update feature"
git push origin main
# Vercel will automatically build and deploy
```

## Monitoring

- **Vercel Analytics:** Enable in project settings
- **Vercel Logs:** Check real-time logs in dashboard
- **Render Logs:** Monitor backend logs for API errors

---

## Quick Reference

| Service | URL | Purpose |
|---------|-----|---------|
| **Backend** | https://kaizenspark-cooperate-1.onrender.com | FastAPI server |
| **Frontend** | https://your-project.vercel.app | React app |
| **Local Dev** | http://localhost:8080 | Development server |

---

**Last Updated:** May 19, 2026

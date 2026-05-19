# 🔐 Render Environment Variables Setup

## Required Environment Variables

Go to your Render dashboard → Your service → Environment tab

Add these environment variables:

### 1. RESEND_API_KEY
```
RESEND_API_KEY=re_jQPTUgQH_Q3rxFTexd144cZEgsaY538yX
```

### 2. RECIPIENT_EMAIL (Optional)
```
RECIPIENT_EMAIL=hr@kaizensparktech.com
```

## Steps to Add Environment Variables

1. Log in to [Render Dashboard](https://dashboard.render.com)
2. Select your service: **kaizenspark-cooperate-1**
3. Go to **Environment** tab
4. Click **Add Environment Variable**
5. Add each variable:
   - Key: `RESEND_API_KEY`
   - Value: `re_jQPTUgQH_Q3rxFTexd144cZEgsaY538yX`
6. Click **Save Changes**
7. Render will automatically redeploy your service

## Verify Setup

After adding the variables and redeployment completes:

```bash
curl https://kaizenspark-cooperate-1.onrender.com/health
```

Should return:
```json
{
  "status": "healthy",
  "timestamp": "2026-05-19T...",
  "upload_dir": "/opt/render/project/src/uploads/resumes"
}
```

## Security Note

⚠️ **IMPORTANT:** After confirming the environment variables are set in Render:

1. Remove the API key from your local `.env` file
2. Never commit `.env` files to git
3. Only use `.env.example` as a template

## Testing Email Functionality

Test the email sending from your deployed backend:

```bash
curl -X POST https://kaizenspark-cooperate-1.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

Check if email arrives at: **hr@kaizensparktech.com**

---

**Last Updated:** May 19, 2026

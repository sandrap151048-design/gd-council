# ⚡ Vercel Only Setup - Quick Guide

## You Need 2 Vercel Projects:

### 1️⃣ Frontend Project (Already exists)
- Repository: sandra11223/GD-
- Root Directory: **Leave empty** (uses root)
- Environment Variables: **1 variable**

### 2️⃣ Backend Project (Need to create)
- Repository: sandra11223/GD- (same repo!)
- Root Directory: **backend**
- Environment Variables: **5 variables**

---

## Create Backend Project:

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Select repository: **sandra11223/GD-**
4. **IMPORTANT:** Set Root Directory to: `backend`
5. Add these 5 environment variables:

```
MONGODB_URI=mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=global_education_council_super_secret_jwt_key_2024

NODE_ENV=production

PORT=5000

FRONTEND_URL=https://gd-sandra11223.vercel.app
```

6. Click **Deploy**

---

## Update Frontend Project:

After backend deploys, you'll get a URL like: `https://gd-backend-abc123.vercel.app`

1. Go to your **frontend** project in Vercel
2. Settings → Environment Variables
3. Update or add:

```
NEXT_PUBLIC_API_URL=https://gd-backend-abc123.vercel.app/api
```

(Replace with your actual backend URL)

4. Redeploy frontend

---

## That's It!

Both frontend and backend will be on Vercel. No Render needed! 🎉

Test by visiting:
- Frontend: https://gd-sandra11223.vercel.app
- Backend: https://gd-backend-abc123.vercel.app/api/auth/test
- Registration should work!

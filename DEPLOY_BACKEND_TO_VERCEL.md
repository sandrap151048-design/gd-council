# 🚀 Deploy Backend to Vercel

## Step-by-Step Guide

---

## Step 1: Push Backend Changes

The backend is now configured for Vercel deployment. Changes have been pushed to your repository.

---

## Step 2: Create New Vercel Project for Backend

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your repository: **sandra11223/GD-**
4. Click **"Import"**

---

## Step 3: Configure Backend Project

### Project Settings:

**Framework Preset:** Other

**Root Directory:** Click **"Edit"** → Enter: `backend`

**Build Command:** Leave empty or use: `npm install`

**Output Directory:** Leave empty

**Install Command:** `npm install`

---

## Step 4: Add Environment Variables

Click **"Environment Variables"** and add these 5 variables:

| Variable Name | Value |
|--------------|-------|
| `MONGODB_URI` | `mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0` |
| `JWT_SECRET` | `global_education_council_super_secret_jwt_key_2024` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |
| `FRONTEND_URL` | `https://gd-sandra11223.vercel.app` |

**Important:** Select all 3 environments (Production, Preview, Development) for each variable.

---

## Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for deployment to complete
3. You'll get a URL like: `https://gd-backend-xyz.vercel.app`

---

## Step 6: Update Frontend Environment Variable

1. Go to your **frontend** project in Vercel
2. Settings → Environment Variables
3. Find `NEXT_PUBLIC_API_URL`
4. Update the value to: `https://your-backend-url.vercel.app/api`
   - Replace `your-backend-url` with your actual backend Vercel URL
5. Click **Save**
6. Go to Deployments → Redeploy

---

## Step 7: Test Backend

Open in browser:
```
https://your-backend-url.vercel.app/
```

You should see:
```json
{
  "message": "Global Education Council API",
  "status": "running",
  "timestamp": "2026-02-23T...",
  "environment": "production"
}
```

Test auth endpoint:
```
https://your-backend-url.vercel.app/api/auth/test
```

Should return:
```json
{
  "status": "ok",
  "message": "Backend is running!",
  "timestamp": "2026-02-23T...",
  "environment": "production"
}
```

---

## Step 8: Test Registration

1. Go to your frontend: `https://gd-sandra11223.vercel.app/register`
2. Try to register a new account
3. Should work without "Cannot connect to server" error ✅

---

## Important Notes:

### ✅ What Changed:
- Backend now works as Vercel serverless function
- No need for Render anymore
- Both frontend and backend on Vercel
- Easier to manage in one platform

### ⚠️ Vercel Limitations:
- Serverless functions have 10-second timeout on Hobby plan
- If you need longer timeouts, consider upgrading or using Render for backend

### 🔧 If Deployment Fails:
1. Check Vercel deployment logs
2. Make sure Root Directory is set to `backend`
3. Verify all environment variables are set
4. Check MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

---

## Quick Checklist:

- [ ] Backend pushed to GitHub
- [ ] New Vercel project created for backend
- [ ] Root Directory set to `backend`
- [ ] All 5 environment variables added
- [ ] Backend deployed successfully
- [ ] Backend URL test works
- [ ] Frontend NEXT_PUBLIC_API_URL updated to backend URL
- [ ] Frontend redeployed
- [ ] Registration works

---

## Environment Variables Summary:

### Backend Vercel Project (5 variables):
```
MONGODB_URI=mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://gd-sandra11223.vercel.app
```

### Frontend Vercel Project (1 variable):
```
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app/api
```

Replace `your-backend-url` with the actual URL Vercel gives you for the backend project.

---

## After Everything Works:

You can delete the Render project if you created one. Everything will be on Vercel now! 🎉

# Complete Vercel Setup Guide - Fix Network Errors

## Problem
The app shows "Network Error" or "Server Error" on Vercel because:
1. Frontend is trying to connect to `http://localhost:5000/api` which doesn't exist in production
2. Backend is not deployed or not accessible from Vercel

## Solution: Deploy Backend First, Then Configure Frontend

---

## STEP 1: Deploy Backend to Render (Free)

### 1.1 Create Render Account
- Go to https://render.com
- Sign up with GitHub

### 1.2 Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository: `sandra11223/GD-`
3. Configure:
   - **Name**: `global-education-backend` (or any name)
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free

### 1.3 Add Environment Variables in Render
Click "Environment" tab and add:

```
MONGODB_URI=mongodb+srv://your-mongodb-connection-string
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-vercel-app.vercel.app
```

**Important**: You need a MongoDB Atlas account (free):
- Go to https://www.mongodb.com/cloud/atlas
- Create free cluster
- Get connection string
- Replace `your-mongodb-connection-string` above

### 1.4 Deploy
- Click "Create Web Service"
- Wait for deployment (5-10 minutes)
- Your backend URL will be: `https://global-education-backend.onrender.com`

### 1.5 Test Backend
Visit: `https://global-education-backend.onrender.com/api/newsletter`
- Should return JSON (empty array or subscribers list)
- If you see JSON, backend is working! ✅

---

## STEP 2: Configure Vercel Frontend

### 2.1 Go to Vercel Dashboard
- Visit https://vercel.com
- Select your project

### 2.2 Add Environment Variable
1. Go to **Settings** → **Environment Variables**
2. Add new variable:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://global-education-backend.onrender.com/api`
   - **Environment**: Production, Preview, Development (select all)
3. Click "Save"

### 2.3 Redeploy
1. Go to **Deployments** tab
2. Click on latest deployment
3. Click "..." menu → "Redeploy"
4. Wait for deployment to complete

---

## STEP 3: Update Backend CORS for Vercel

After deploying, you need to update backend to allow Vercel domain:

### 3.1 Update Backend .env on Render
In Render dashboard → Environment:
- Update `FRONTEND_URL` to your actual Vercel URL
- Example: `https://gd-sandra.vercel.app`

### 3.2 Redeploy Backend
- In Render dashboard, click "Manual Deploy" → "Deploy latest commit"

---

## STEP 4: Test Everything

### 4.1 Test Backend
```bash
curl https://global-education-backend.onrender.com/api/newsletter
```
Should return JSON ✅

### 4.2 Test Frontend
1. Visit your Vercel app
2. Open browser console (F12)
3. Check for API URL: Should show your Render URL
4. Try newsletter subscription
5. Should work! ✅

---

## Alternative: Deploy Backend to Railway

If Render doesn't work, try Railway (also free):

### Railway Setup
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select `sandra11223/GD-`
5. Configure:
   - **Root Directory**: `/backend`
   - Add same environment variables as above
6. Deploy
7. Get your Railway URL
8. Use it in Vercel's `NEXT_PUBLIC_API_URL`

---

## Troubleshooting

### Error: "Network Error"
**Cause**: Frontend can't reach backend
**Fix**: 
1. Check `NEXT_PUBLIC_API_URL` is set in Vercel
2. Verify backend is running (visit backend URL)
3. Check backend CORS allows Vercel domain

### Error: "Server Error"
**Cause**: Backend is running but has errors
**Fix**:
1. Check Render/Railway logs
2. Verify MongoDB connection string is correct
3. Check all environment variables are set

### Error: "This email is already subscribed"
**Cause**: Email already in database
**Fix**: This is normal! Try a different email

### Newsletter subscription works locally but not on Vercel
**Cause**: `NEXT_PUBLIC_API_URL` not set or wrong
**Fix**:
1. Verify environment variable in Vercel
2. Must start with `NEXT_PUBLIC_` prefix
3. Must be full URL with `/api` at end
4. Redeploy after adding variable

---

## Quick Reference

### Local Development
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Production (Vercel)
```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
```

### Backend URLs
- Render: `https://your-app-name.onrender.com`
- Railway: `https://your-app-name.up.railway.app`
- Heroku: `https://your-app-name.herokuapp.com`

---

## Summary

1. ✅ Deploy backend to Render/Railway
2. ✅ Get MongoDB Atlas connection string
3. ✅ Set environment variables on backend
4. ✅ Set `NEXT_PUBLIC_API_URL` on Vercel
5. ✅ Redeploy both frontend and backend
6. ✅ Test newsletter subscription

After following these steps, your app will work perfectly on Vercel! 🎉

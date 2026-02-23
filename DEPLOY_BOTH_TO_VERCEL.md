# 🚀 Deploy Both Frontend and Backend to Vercel

## Step-by-Step Guide

### Part 1: Deploy Backend to Vercel

#### 1. Go to Vercel Dashboard
https://vercel.com/dashboard

#### 2. Add New Project
- Click **"Add New"** → **"Project"**

#### 3. Import Backend Repository
- Click **"Import Git Repository"**
- Select: **`sandra11223/GD-back`**
- Click **"Import"**

#### 4. Configure Project Settings

**Framework Preset:** Other

**Root Directory:** `.` (leave as default)

**Build Command:** Leave empty

**Output Directory:** Leave empty

**Install Command:** `npm install`

#### 5. Add Environment Variables

Click **"Environment Variables"** section and add these FOUR variables:

**Variable 1:**
```
Key:   MONGODB_URI
Value: mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@sandraap745_db_here.mongodb.net/global-education-council?retryWrites=true&w=majority
```

**Variable 2:**
```
Key:   JWT_SECRET
Value: global-education-secret-key-2024
```

**Variable 3:**
```
Key:   NODE_ENV
Value: production
```

**Variable 4:**
```
Key:   FRONTEND_URL
Value: https://gd-73zs.vercel.app
```

#### 6. Deploy
- Click **"Deploy"**
- Wait 2-3 minutes for deployment
- You'll get a URL like: `https://gd-back-xxx.vercel.app`
- **COPY THIS URL!**

---

### Part 2: Update Frontend Configuration

#### 1. Go to Frontend Project in Vercel
- Go to: https://vercel.com/dashboard
- Click on your frontend project (gd-73zs)

#### 2. Update Environment Variable
- Go to: **Settings** → **Environment Variables**
- Find: `NEXT_PUBLIC_API_URL`
- Click **"Edit"**
- Change value to: `https://your-backend-url.vercel.app/api`
  (Replace with YOUR actual backend Vercel URL + `/api`)
- Select all environments (Production, Preview, Development)
- Click **"Save"**

#### 3. Redeploy Frontend
- Go to **"Deployments"** tab
- Click (...) on latest deployment
- Click **"Redeploy"**
- Wait 2-3 minutes

---

### Part 3: Delete Render Deployment (Optional)

If you want to completely remove Render:

1. Go to: https://dashboard.render.com
2. Click on your backend service (GD-back)
3. Go to **Settings** tab
4. Scroll to bottom
5. Click **"Delete Web Service"**
6. Confirm deletion

---

## Summary

After completing these steps:

✅ **Frontend:** `https://gd-73zs.vercel.app`
✅ **Backend:** `https://gd-back-xxx.vercel.app` (your new URL)
✅ **Database:** MongoDB Atlas (no change)

Both are now on Vercel!

---

## Testing

1. Visit: `https://gd-73zs.vercel.app/register`
2. Try to register
3. Should work! ✅

---

## Important Notes

- Make sure backend URL in frontend includes `/api` at the end
- Example: `https://gd-back-xxx.vercel.app/api`
- Both deployments are on Vercel's free tier
- Backend will have serverless functions (not always-on server)

---

## If You Get Errors

1. Check backend is deployed: Visit `https://your-backend.vercel.app`
2. Check environment variables are set in both projects
3. Make sure you redeployed frontend after updating the variable
4. Check browser console (F12) for error messages

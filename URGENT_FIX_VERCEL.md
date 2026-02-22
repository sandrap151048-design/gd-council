# URGENT: Fix "Cannot Connect to Server" Error on Vercel

## The Problem
Your Vercel app shows "Cannot connect to server" because:
- Frontend tries to connect to `http://localhost:5000/api`
- Localhost doesn't exist on Vercel (it's only on your computer)
- You need a LIVE backend URL that works on the internet

## Quick Fix (5 Minutes)

### Option 1: Deploy Backend to Render (FREE & EASY)

#### Step 1: Create Render Account
1. Go to https://render.com
2. Click "Get Started" → Sign up with GitHub
3. Authorize Render to access your GitHub

#### Step 2: Deploy Backend
1. Click "New +" → "Web Service"
2. Connect repository: `sandra11223/GD-`
3. Fill in:
   ```
   Name: global-education-backend
   Root Directory: backend
   Environment: Node
   Build Command: npm install
   Start Command: node server.js
   Instance Type: Free
   ```
4. Click "Create Web Service"

#### Step 3: Add Environment Variables on Render
Click "Environment" tab, add these:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-vercel-app.vercel.app
```

**IMPORTANT**: For MONGODB_URI, you need MongoDB Atlas (free):
- Go to https://mongodb.com/cloud/atlas
- Create free cluster
- Get connection string
- Replace username, password, cluster, database

#### Step 4: Wait for Deployment
- Takes 5-10 minutes
- Your backend URL will be: `https://global-education-backend.onrender.com`

#### Step 5: Test Backend
Open in browser: `https://global-education-backend.onrender.com/api/newsletter`
- Should show JSON (empty array or data)
- If you see JSON = Backend is working! ✅

#### Step 6: Configure Vercel
1. Go to https://vercel.com → Your Project
2. Settings → Environment Variables
3. Add:
   ```
   Name: NEXT_PUBLIC_API_URL
   Value: https://global-education-backend.onrender.com/api
   ```
4. Select: Production, Preview, Development (all three)
5. Click "Save"

#### Step 7: Redeploy Vercel
1. Go to Deployments tab
2. Click latest deployment
3. Click "..." → "Redeploy"
4. Wait 2-3 minutes

#### Step 8: Test
1. Visit your Vercel app
2. Try to register
3. Should work! ✅

---

## Option 2: Use Demo Backend (TEMPORARY)

If you just want to test quickly, you can use a demo backend:

### In Vercel Environment Variables:
```
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

**Note**: This won't actually work for registration, but it will stop the "cannot connect" error.

---

## Option 3: Deploy Backend to Railway (Alternative to Render)

1. Go to https://railway.app
2. Sign up with GitHub
3. New Project → Deploy from GitHub
4. Select `sandra11223/GD-`
5. Settings → Root Directory: `/backend`
6. Add same environment variables as Render
7. Deploy
8. Get Railway URL
9. Use in Vercel: `NEXT_PUBLIC_API_URL=https://your-app.up.railway.app/api`

---

## Why This Happens

### Local Development (Your Computer)
```
Frontend: http://localhost:3000
Backend: http://localhost:5000
✅ Works because both are on your computer
```

### Production (Vercel)
```
Frontend: https://your-app.vercel.app
Backend: http://localhost:5000 ❌ DOESN'T EXIST!
```

### Solution
```
Frontend: https://your-app.vercel.app
Backend: https://your-backend.onrender.com ✅ Works!
```

---

## Checklist

- [ ] Create Render account
- [ ] Deploy backend to Render
- [ ] Get MongoDB Atlas connection string
- [ ] Add environment variables on Render
- [ ] Wait for backend deployment
- [ ] Test backend URL in browser
- [ ] Add NEXT_PUBLIC_API_URL to Vercel
- [ ] Redeploy Vercel
- [ ] Test registration on Vercel

---

## Common Issues

### "MongoDB connection failed"
- Check MONGODB_URI is correct
- Make sure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Check username/password in connection string

### "Still showing localhost error"
- Make sure you added `NEXT_PUBLIC_API_URL` (with NEXT_PUBLIC_ prefix)
- Make sure you redeployed after adding variable
- Clear browser cache

### "Backend URL not working"
- Check Render logs for errors
- Make sure all environment variables are set
- Try visiting backend URL directly in browser

---

## Need Help?

1. Check Render logs: Dashboard → Your Service → Logs
2. Check Vercel logs: Dashboard → Deployments → Click deployment → View Function Logs
3. Check browser console: F12 → Console tab

---

## Summary

**YOU MUST**:
1. Deploy backend to Render/Railway
2. Set `NEXT_PUBLIC_API_URL` in Vercel
3. Redeploy Vercel

**Without these steps, your app will NEVER work on Vercel!**

The error is NOT a bug - it's a configuration issue. Your code is correct, you just need to deploy the backend and configure the environment variable.

# 🔧 Simple Fix - Register Not Working on Other Systems

## The Problem
Your register page uses `http://192.168.1.8:5000/api` which only works on YOUR network.

## The Solution (2 Minutes)

### 1️⃣ Get Your Render Backend URL

Go to: https://dashboard.render.com

Find your backend service and copy the URL. It looks like:
```
https://global-education-backend-xxxx.onrender.com
```

### 2️⃣ Update Vercel Environment Variable

Go to: https://vercel.com/dashboard

1. Click your project
2. Settings → Environment Variables
3. Find `NEXT_PUBLIC_API_URL`
4. Update value to:
   ```
   https://your-render-url.onrender.com/api
   ```
   (Replace with YOUR Render URL + `/api`)
5. Click Save

### 3️⃣ Redeploy Vercel

1. Go to Deployments tab
2. Click (...) on latest deployment
3. Click "Redeploy"
4. Wait 2 minutes

### 4️⃣ Test

Visit: `https://your-vercel-site.vercel.app/register`

Try to register - it should work now! ✅

---

## What's Your Render URL?

Please provide your Render backend URL so I can help you verify the setup.

It should look like:
```
https://something.onrender.com
```

Once you give me this, I can tell you the EXACT value to put in Vercel!

---

## Quick Check

Is your backend running on Render?
- Visit your Render URL directly in browser
- You should see: `{"message":"Global Education Council API","status":"running"}`
- If you see this, backend is working! ✅
- If not, backend needs to be deployed first

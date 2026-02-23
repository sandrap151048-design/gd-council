# Fix: Register Page Not Working on Other Systems

## Problem
✅ Register works on YOUR system (localhost/local network)
❌ Register DOESN'T work on OTHER systems (Vercel, other computers)

## Root Cause
Your frontend is configured to use `http://192.168.1.8:5000/api` which is your LOCAL network IP. Other systems cannot access this IP address.

---

## Solution: Use Render Backend URL

You mentioned you've already set up Render and Vercel. Here's what you need to do:

### Step 1: Get Your Render Backend URL

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click on your backend service (e.g., `global-education-backend`)
3. At the top, you'll see your URL like:
   ```
   https://global-education-backend-xxxx.onrender.com
   ```
4. **COPY THIS URL**

### Step 2: Update Local Environment (Optional - for testing)

If you want to test with Render backend locally:

1. Open `frontend/.env.local`
2. Replace the current line with your Render URL:
   ```
   NEXT_PUBLIC_API_URL=https://your-render-url.onrender.com/api
   ```
3. Restart frontend: Stop server (Ctrl+C) and run `npm run dev`

### Step 3: Verify Vercel Environment Variable

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Check if `NEXT_PUBLIC_API_URL` exists
5. The value should be: `https://your-render-url.onrender.com/api`
6. If it's wrong or missing, update it
7. **IMPORTANT:** After updating, go to **Deployments** → Click (...) → **Redeploy**

---

## Current Configuration Issues

### Your Local Setup (Works only on your network):
```
NEXT_PUBLIC_API_URL=http://192.168.1.8:5000/api
```
- ✅ Works on your computer
- ✅ Works on devices connected to your WiFi
- ❌ Doesn't work on Vercel
- ❌ Doesn't work on other networks

### Correct Setup (Works everywhere):
```
NEXT_PUBLIC_API_URL=https://your-render-backend.onrender.com/api
```
- ✅ Works on your computer
- ✅ Works on Vercel
- ✅ Works on any device anywhere
- ✅ Works on other networks

---

## Quick Fix Checklist

- [ ] Backend is deployed and running on Render
- [ ] You have copied your Render URL
- [ ] Vercel environment variable `NEXT_PUBLIC_API_URL` is set to Render URL
- [ ] Vercel has been redeployed after setting the variable
- [ ] You've tested registration on Vercel site

---

## Testing

### Test on Vercel (Production):
1. Go to your Vercel URL: `https://your-site.vercel.app/register`
2. Try to register
3. Should work now! ✅

### Test Locally (Optional):
1. Update `frontend/.env.local` with Render URL
2. Restart frontend server
3. Go to `http://localhost:3000/register`
4. Try to register
5. Should work! ✅

---

## Common Issues

### Issue 1: "Backend not configured" error on Vercel
**Solution:** 
- Check Vercel environment variable is set correctly
- Redeploy Vercel after setting variable

### Issue 2: Backend URL returns 404
**Solution:**
- Make sure you added `/api` at the end of the URL
- Correct: `https://xxx.onrender.com/api`
- Wrong: `https://xxx.onrender.com`

### Issue 3: Render backend is sleeping
**Solution:**
- Free Render services sleep after 15 minutes of inactivity
- First request takes 30-60 seconds to wake up
- Visit your Render URL directly to wake it up
- Then try registration again

---

## What You Need to Provide

To help you further, please provide:

1. **Your Render backend URL** (e.g., `https://xxx.onrender.com`)
2. **Your Vercel frontend URL** (e.g., `https://xxx.vercel.app`)
3. **Screenshot of Vercel environment variables** (Settings → Environment Variables)

Then I can verify your setup and fix any issues!

---

## Alternative: Keep Using Local Backend

If you want to keep using your local backend for now:

1. Keep `frontend/.env.local` as: `http://192.168.1.8:5000/api`
2. Other devices on your WiFi can access: `http://192.168.1.8:3000`
3. But Vercel and external systems won't work
4. This is fine for development, but not for production

**For production (Vercel), you MUST use Render backend URL.**

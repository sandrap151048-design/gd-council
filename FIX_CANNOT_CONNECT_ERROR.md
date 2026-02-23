# 🔧 FIX: "Cannot connect to server" Error

## This error means your frontend can't reach your backend. Here's how to fix it:

---

## Step 1: Test Your Connection

Visit this page after deploying: **https://your-vercel-app.vercel.app/test-connection**

This will show you:
- ✅ If NEXT_PUBLIC_API_URL is set correctly
- ✅ If backend is responding
- ✅ What the actual error is

---

## Step 2: Check Vercel Environment Variable

### Go to Vercel:
1. https://vercel.com/dashboard
2. Click your project
3. Settings → Environment Variables
4. Look for: `NEXT_PUBLIC_API_URL`

### It should be:
```
NEXT_PUBLIC_API_URL=https://gd-back.onrender.com/api
```

### If it's NOT there or shows localhost:
1. Click "Add New"
2. Key: `NEXT_PUBLIC_API_URL`
3. Value: `https://gd-back.onrender.com/api`
4. Check all 3 boxes (Production, Preview, Development)
5. Click Save
6. Go to Deployments → Click ... → Redeploy

---

## Step 3: Check Backend on Render

### Go to Render:
1. https://dashboard.render.com
2. Click your service
3. Check the status - should show "Live" with green dot

### If it shows "Deploy failed" or "Build failed":
1. Click on the service
2. Go to Settings
3. Check **Root Directory** - MUST be: `backend`
4. Check **Build Command** - should be: `npm install`
5. Check **Start Command** - should be: `node server.js`
6. Go to Environment tab
7. Make sure these 5 variables are set:
   - `MONGODB_URI` (your Atlas connection)
   - `JWT_SECRET`
   - `PORT=5000`
   - `NODE_ENV=production`
   - `FRONTEND_URL` (your Vercel URL)
8. Click "Manual Deploy" → "Deploy latest commit"

---

## Step 4: Check Backend Logs

### In Render:
1. Click your service
2. Click "Logs" tab
3. Look for errors

### Common errors:

**"Cannot find module '/opt/render/project/src/server.js'"**
- Fix: Set Root Directory to `backend` in Settings

**"MongooseServerSelectionError"**
- Fix: Check MONGODB_URI is correct
- Fix: Check MongoDB Atlas Network Access allows 0.0.0.0/0

**"Port 5000 is already in use"**
- This is normal, Render handles this automatically

---

## Step 5: Test Backend Directly

Open this URL in your browser:
```
https://gd-back.onrender.com/api/auth/test
```

### You should see:
```json
{
  "status": "ok",
  "message": "Backend is running!",
  "timestamp": "2026-02-23T...",
  "environment": "production"
}
```

### If you see an error or nothing:
- Your backend is not deployed correctly
- Go back to Step 3

---

## Step 6: Common Mistakes

### ❌ WRONG - Adding backend variables to Vercel:
```
MONGODB_URI=...  ← NO! This goes to Render
JWT_SECRET=...   ← NO! This goes to Render
```

### ✅ CORRECT - Only this goes to Vercel:
```
NEXT_PUBLIC_API_URL=https://gd-back.onrender.com/api
```

### ❌ WRONG - Using localhost in production:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api  ← Won't work!
```

### ✅ CORRECT - Using your Render URL:
```
NEXT_PUBLIC_API_URL=https://gd-back.onrender.com/api
```

---

## Step 7: After Fixing

1. Redeploy Vercel (if you changed environment variables)
2. Wait 2-3 minutes for deployment
3. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Try registering again
5. Check /test-connection page to verify

---

## Still Not Working?

### Check these:

1. **Render service URL** - Is it really `https://gd-back.onrender.com`?
   - Go to Render → Your service → Copy the URL at the top
   - Make sure it ends with `/api` in Vercel environment variable

2. **Vercel redeployed?** - Environment variables only apply after redeployment
   - Go to Vercel → Deployments → Check timestamp
   - Should be AFTER you added the environment variable

3. **Browser cache** - Old code might be cached
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

4. **MongoDB Atlas** - Is it allowing connections?
   - Go to MongoDB Atlas → Network Access
   - Should have 0.0.0.0/0 (allow from anywhere)

---

## Quick Checklist:

- [ ] Backend deployed on Render with Root Directory = `backend`
- [ ] Backend shows "Live" status on Render
- [ ] Backend has all 5 environment variables
- [ ] Backend URL test works: https://gd-back.onrender.com/api/auth/test
- [ ] Vercel has NEXT_PUBLIC_API_URL environment variable
- [ ] Vercel environment variable points to Render backend
- [ ] Vercel redeployed after adding environment variable
- [ ] Browser cache cleared

If all checked ✅, registration should work!

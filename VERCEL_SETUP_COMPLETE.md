# ✅ Vercel Setup - Your Configuration

## Your Render Backend URL
```
https://gd-back.onrender.com
```

## Environment Variable for Vercel

Add this in **Vercel Dashboard → Settings → Environment Variables**:

**Name:**
```
NEXT_PUBLIC_API_URL
```

**Value:**
```
https://gd-back.onrender.com/api
```

---

## Complete Setup Steps

### 1. Add Environment Variable in Vercel

1. Go to: https://vercel.com/dashboard
2. Click your project
3. Settings → Environment Variables
4. Click "Add New"
5. Enter:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://gd-back.onrender.com/api`
   - **Environments:** ✅ Production ✅ Preview ✅ Development
6. Click **Save**

### 2. Redeploy Vercel

1. Go to **Deployments** tab
2. Click (...) on latest deployment
3. Click **Redeploy**
4. Wait 2-3 minutes

### 3. Test

Visit your Vercel site and try to register:
```
https://your-vercel-site.vercel.app/register
```

Should work now! ✅

---

## For Local Development (Optional)

If you want to use Render backend locally too:

Update `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=https://gd-back.onrender.com/api
```

Then restart your dev server:
```
npm run dev
```

---

## Summary

✅ Backend URL: `https://gd-back.onrender.com`
✅ API URL: `https://gd-back.onrender.com/api`
✅ Vercel Variable: `NEXT_PUBLIC_API_URL=https://gd-back.onrender.com/api`

After setting this in Vercel and redeploying, your register page will work on all systems!

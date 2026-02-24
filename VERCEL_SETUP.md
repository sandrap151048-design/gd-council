# Deploy to Vercel - Complete Guide

## Current Repository
**GitHub**: https://github.com/sandrap151048-design/gd-council

## Step-by-Step Deployment

### 1. Go to Vercel
Visit: https://vercel.com/new

### 2. Sign In
- Sign in with your GitHub account (`sandrap151048-design`)
- Or create a new Vercel account if you don't have one

### 3. Import Your Repository
1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Find and select: **`sandrap151048-design/gd-council`**
4. Click **"Import"**

### 4. Configure Project Settings

#### Framework Preset
- Should auto-detect as: **Next.js**

#### Root Directory ⚠️ CRITICAL!
- Click **"Edit"** next to Root Directory
- Type: **`frontend`**
- This is REQUIRED because your Next.js app is in the frontend folder!

#### Build Settings (Leave as default)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 5. Add Environment Variables

Click **"Environment Variables"** and add these THREE variables:

**Variable 1:**
- Name: `MONGODB_URI`
- Value: `mongodb+srv://sandrapp745_db_user:Education123@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority`

**Variable 2:**
- Name: `JWT_SECRET`
- Value: `global_education_council_super_secret_jwt_key_2024`

**Variable 3:**
- Name: `NODE_ENV`
- Value: `production`

### 6. Deploy!
1. Click the big **"Deploy"** button
2. Wait 2-3 minutes for the build to complete
3. You'll get a live URL like: `https://gd-council.vercel.app`

## After Deployment

### Test Your Site
1. Visit your Vercel URL
2. Try logging in with any email/password (it will auto-create account)
3. Test all features

### Common Issues

**Build Failed?**
- Check build logs in Vercel dashboard
- Make sure Root Directory is set to `frontend`

**MongoDB Connection Error?**
- Verify MONGODB_URI is correct
- Check MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

**404 Errors on Pages?**
- Make sure Root Directory is `frontend`
- Redeploy if needed

## Auto-Deploy

After initial deployment, Vercel automatically deploys when you push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push https://github.com/sandrap151048-design/gd-council.git main
```

Vercel will detect the push and deploy automatically!

## Your Current Setup

✅ Code pushed to: https://github.com/sandrap151048-design/gd-council
✅ All features working locally
✅ MongoDB connection configured
✅ Environment variables documented

**Now go to https://vercel.com/new and follow the steps above!**

## Need Help?

If deployment fails:
1. Check Vercel build logs
2. Verify Root Directory = `frontend`
3. Verify all 3 environment variables are set
4. Make sure MongoDB allows all IPs

## Important Notes

- The 404 NOT_FOUND error means no deployment exists yet
- You MUST create the deployment manually first time
- After that, it auto-deploys on every push
- Root Directory MUST be set to `frontend`

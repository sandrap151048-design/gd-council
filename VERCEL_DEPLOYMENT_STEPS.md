# Deploy to Vercel - Step by Step Guide

## Your Repository
**GitHub**: https://github.com/sandra11223/GD

## Deployment Steps

### 1. Go to Vercel
Visit: https://vercel.com

### 2. Sign In
- Click "Sign In" or "Sign Up"
- Use your GitHub account (`sandra11223`)

### 3. Import Project
1. Click **"Add New..."** → **"Project"**
2. Select **"Import Git Repository"**
3. Find and select: `sandra11223/GD`
4. Click **"Import"**

### 4. Configure Project

**Framework Preset**: Next.js (should auto-detect)

**Root Directory**: `frontend` ⚠️ IMPORTANT!
- Click "Edit" next to Root Directory
- Type: `frontend`
- This tells Vercel where your Next.js app is located

**Build Settings**: (Leave as default)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 5. Add Environment Variables

Click **"Environment Variables"** and add these:

| Name | Value |
|------|-------|
| `MONGODB_URI` | `mongodb+srv://sandrapp745_db_user:YOUR_PASSWORD@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority` |
| `JWT_SECRET` | `global_education_council_super_secret_jwt_key_2024` |
| `NODE_ENV` | `production` |

⚠️ Replace `YOUR_PASSWORD` with your actual MongoDB password!

### 6. Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://your-project.vercel.app`

## After Deployment

### Test Your Deployment
1. Visit your Vercel URL
2. Try logging in with:
   - Email: `admin@globaledu.com`
   - Password: `admin123`

### If You Get Errors

**MongoDB Connection Error:**
- Check MONGODB_URI is correct
- Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

**404 Errors:**
- Make sure Root Directory is set to `frontend`
- Redeploy if needed

**Build Errors:**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in package.json

## Update Deployment

When you push new changes to GitHub:
1. Vercel automatically detects the push
2. Builds and deploys automatically
3. No manual action needed!

## Your Current Setup

✅ Code pushed to: https://github.com/sandra11223/GD
✅ Latest changes include:
- Serverless Next.js architecture
- All API routes in `/api`
- MongoDB integration
- Fixed button blur effects
- Brown partnership icon

## Need Help?

If deployment fails, check:
1. Vercel build logs
2. Environment variables are set correctly
3. Root directory is `frontend`
4. MongoDB connection string is valid

## Quick Commands

To push new changes:
```bash
git add .
git commit -m "Your message"
git push gd main
```

Vercel will auto-deploy!

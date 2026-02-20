# Deployment Guide

## Frontend Deployment (Vercel)

### Step 1: Configure Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add the following variable:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: Your backend API URL (e.g., `https://your-backend.railway.app/api`)
   - **Environment**: Production, Preview, Development (select all)

### Step 2: Redeploy

After adding the environment variable, redeploy your application.

## Backend Deployment Options

### Option 1: Railway (Recommended)

1. Go to https://railway.app
2. Create a new project
3. Connect your GitHub repository
4. Select the `backend` folder as root directory
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `PORT`: 5000
   - `NODE_ENV`: production
   - `FRONTEND_URL`: Your Vercel frontend URL

### Option 2: Render

1. Go to https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Set root directory to `backend`
5. Add environment variables (same as above)

### Option 3: Heroku

1. Install Heroku CLI
2. Run: `heroku create your-app-name`
3. Set buildpack: `heroku buildpacks:set heroku/nodejs`
4. Add environment variables using Heroku dashboard
5. Deploy: `git push heroku main`

## MongoDB Setup

### Option 1: MongoDB Atlas (Recommended)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Add it to your backend environment variables

### Option 2: Local MongoDB

Only for development. Not recommended for production.

## Testing the Deployment

1. Visit your frontend URL
2. Try subscribing to the newsletter
3. Check if the subscription works
4. Test login/register functionality
5. Verify all API endpoints are working

## Troubleshooting

### Newsletter Subscription Fails

- **Error**: "Service temporarily unavailable"
- **Solution**: Make sure `NEXT_PUBLIC_API_URL` is set in Vercel environment variables
- **Solution**: Verify your backend is deployed and running

### 404 Errors on Vercel

- **Solution**: Set Root Directory to `frontend` in Vercel project settings

### Backend Connection Issues

- **Solution**: Check MongoDB connection string
- **Solution**: Verify all environment variables are set correctly
- **Solution**: Check backend logs for errors

## Current Status

✅ Frontend deployed on Vercel
⚠️ Backend needs to be deployed
⚠️ MongoDB needs to be set up
⚠️ Environment variables need to be configured

## Next Steps

1. Deploy backend to Railway/Render/Heroku
2. Set up MongoDB Atlas
3. Configure environment variables in Vercel
4. Test all functionality

# ✅ CORRECT ENVIRONMENT VARIABLES SETUP

## 🚨 IMPORTANT: You Mixed Backend and Frontend Variables!

You provided ALL variables to ONE place. They need to be SEPARATED:

---

## 📦 BACKEND (Render) - Environment Variables

Go to Render Dashboard → Your Service → Environment → Add these 5 variables:

```
MONGODB_URI=mongodb+srv://sandraa745_db_user:fHih3vl4D4VM7EJp@cluster0.8rw8g2z.mongodb.net/global-education-council?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=global_education_council_super_secret_jwt_key_2024

PORT=5000

NODE_ENV=production

FRONTEND_URL=https://gd-sandra11223.vercel.app
```

### ⚠️ IMPORTANT Backend Settings:
- **Root Directory**: `backend` (MUST SET THIS!)
- **Build Command**: `npm install`
- **Start Command**: `node server.js`

---

## 🌐 FRONTEND (Vercel) - Environment Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables → Add this 1 variable:

```
NEXT_PUBLIC_API_URL=https://gd-back.onrender.com/api
```

### ⚠️ IMPORTANT:
- Apply to: **Production, Preview, and Development**
- After adding, click **Redeploy** in Deployments tab

---

## ❌ WHAT YOU DID WRONG:

You gave these to ONE place (probably Render):
```
MONGODB_URI=mongodb://localhost:27017/global-education-council  ❌ WRONG - localhost won't work in production
JWT_SECRET=global_education_council_super_secret_jwt_key_2024   ✅ OK for backend
PORT=5000                                                        ✅ OK for backend
NODE_ENV=development                                             ❌ WRONG - should be "production"
FRONTEND_URL=http://localhost:3000                               ❌ WRONG - should be Vercel URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api                    ❌ WRONG - this goes to VERCEL, not Render
```

---

## ✅ CORRECT SETUP:

### Backend (Render) gets 5 variables:
1. `MONGODB_URI` - Your Atlas connection (already correct in backend/.env)
2. `JWT_SECRET` - Your secret key
3. `PORT` - 5000
4. `NODE_ENV` - **production** (not development!)
5. `FRONTEND_URL` - Your Vercel URL (https://gd-sandra11223.vercel.app)

### Frontend (Vercel) gets 1 variable:
1. `NEXT_PUBLIC_API_URL` - Your Render backend URL (https://gd-back.onrender.com/api)

---

## 🔧 STEP-BY-STEP FIX:

### Step 1: Fix Render (Backend)
1. Go to https://dashboard.render.com
2. Click your service
3. Go to **Settings** → Scroll to **Root Directory**
4. Set Root Directory to: `backend`
5. Go to **Environment** tab
6. Delete any wrong variables
7. Add the 5 backend variables listed above
8. Click **Manual Deploy** → **Deploy latest commit**

### Step 2: Fix Vercel (Frontend)
1. Go to https://vercel.com/dashboard
2. Click your project
3. Go to **Settings** → **Environment Variables**
4. Add: `NEXT_PUBLIC_API_URL` = `https://gd-back.onrender.com/api`
5. Select: Production, Preview, Development
6. Click **Save**
7. Go to **Deployments** tab
8. Click **...** on latest deployment → **Redeploy**

---

## 🎯 WHAT WILL HAPPEN:

1. Backend on Render will connect to MongoDB Atlas ✅
2. Backend will accept requests from Vercel ✅
3. Frontend on Vercel will connect to Render backend ✅
4. Registration will work ✅
5. Newsletter subscription will work ✅

---

## 📝 NOTES:

- **localhost URLs NEVER work in production** - they only work on your computer
- Backend variables go to Render
- Frontend variables go to Vercel
- `NEXT_PUBLIC_` prefix means it's a frontend variable
- After changing environment variables, you MUST redeploy

---

## 🆘 IF STILL NOT WORKING:

1. Check Render logs: Dashboard → Your Service → Logs
2. Check Vercel logs: Dashboard → Your Project → Deployments → Click deployment → View Function Logs
3. Make sure Root Directory is set to `backend` in Render
4. Make sure you redeployed both services after adding variables

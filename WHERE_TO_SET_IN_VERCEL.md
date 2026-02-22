# Exactly Where to Set Environment Variable in Vercel

## Step-by-Step with Screenshots Description

### Step 1: Go to Vercel Dashboard
1. Open your browser
2. Go to: **https://vercel.com**
3. Log in to your account

### Step 2: Find Your Project
You'll see a list of your projects. Click on your project name (the one for this app).

### Step 3: Click "Settings" Tab
At the top of the page, you'll see tabs:
```
Overview | Deployments | Analytics | Settings | ...
```
Click on **"Settings"**

### Step 4: Click "Environment Variables" in Sidebar
On the left side, you'll see a menu:
```
General
Domains
Git
Environment Variables  ← CLICK THIS
Functions
...
```
Click on **"Environment Variables"**

### Step 5: Add New Variable
You'll see a button that says **"Add New"** or **"Add Environment Variable"**

Click it.

### Step 6: Fill in the Form
You'll see a form with these fields:

**Field 1 - Name (Key):**
```
NEXT_PUBLIC_API_URL
```
Type this EXACTLY as shown (case-sensitive!)

**Field 2 - Value:**
```
https://your-backend-url.onrender.com/api
```
Replace with YOUR actual backend URL

**IMPORTANT**: 
- Must start with `https://`
- Must end with `/api`
- Example: `https://global-education-backend.onrender.com/api`

**Field 3 - Environments:**
Select ALL three checkboxes:
- ✅ Production
- ✅ Preview
- ✅ Development

### Step 7: Save
Click the **"Save"** button

### Step 8: Redeploy
1. Click **"Deployments"** tab (at the top)
2. Find the latest deployment (first one in the list)
3. Click on it
4. Click the **"..."** (three dots) button
5. Click **"Redeploy"**
6. Wait 2-3 minutes

---

## Visual Navigation Path

```
vercel.com
  → Login
  → Click Your Project Name
  → Click "Settings" (top tabs)
  → Click "Environment Variables" (left sidebar)
  → Click "Add New" button
  → Fill in:
     Name: NEXT_PUBLIC_API_URL
     Value: https://your-backend.onrender.com/api
     Environments: ✅ All three
  → Click "Save"
  → Go to "Deployments" tab
  → Click latest deployment
  → Click "..." → "Redeploy"
```

---

## What You Need Before Starting

### You MUST have a backend URL first!

If you don't have a backend URL yet, you need to deploy your backend first:

1. Go to https://render.com
2. Deploy your backend (see DEPLOY_NOW.md)
3. Get the URL (looks like: `https://something.onrender.com`)
4. Then come back and set it in Vercel

---

## Common Mistakes to Avoid

❌ **Wrong variable name:**
- Must be: `NEXT_PUBLIC_API_URL`
- NOT: `API_URL`
- NOT: `NEXT_API_URL`
- NOT: `PUBLIC_API_URL`

❌ **Missing `/api` at the end:**
- Correct: `https://backend.onrender.com/api`
- Wrong: `https://backend.onrender.com`

❌ **Not selecting all environments:**
- Must check all three: Production, Preview, Development

❌ **Forgetting to redeploy:**
- Environment variables only take effect after redeployment

---

## How to Check if It Worked

After redeploying:

1. Visit your Vercel app
2. Open browser console (Press F12)
3. Look for: `API URL configured: https://your-backend.onrender.com/api`
4. Try to register or subscribe
5. Should work! ✅

If you still see "Backend not configured":
- Check the variable name is exactly: `NEXT_PUBLIC_API_URL`
- Check you redeployed after adding it
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private window

---

## Still Can't Find It?

### Alternative Way to Access:

1. Go to: `https://vercel.com/[your-username]/[your-project-name]/settings/environment-variables`
2. Replace `[your-username]` with your Vercel username
3. Replace `[your-project-name]` with your project name

### Or Use Vercel CLI:

```bash
vercel env add NEXT_PUBLIC_API_URL
```
Then paste your backend URL when prompted.

---

## Summary

**Location in Vercel:**
```
Dashboard → Your Project → Settings → Environment Variables → Add New
```

**What to add:**
```
Name: NEXT_PUBLIC_API_URL
Value: https://your-backend.onrender.com/api
Environments: All three ✅
```

**Don't forget:**
- Redeploy after adding
- Must have backend deployed first
- Must end with `/api`

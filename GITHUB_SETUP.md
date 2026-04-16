# GitHub & Vercel Deployment Guide

This guide will walk you through pushing your DelightPen Publishing website to GitHub and deploying to Vercel.

## ✅ Prerequisites

- **Git** installed on your system ([Download Git](https://git-scm.com/downloads))
- **GitHub account** at https://github.com
- Your GitHub repository: https://github.com/adeyejesuolaoluwa/Delight-publishing
- **Node.js** (already installed ✓)
- **npm** (already installed ✓)

---

## 📦 Step 1: Install Git (if not already installed)

### Windows
Download and install from: https://git-scm.com/downloads

Verify installation in PowerShell:
```powershell
git --version
```

---

## 🔐 Step 2: Configure Git (First Time Only)

Run these commands in PowerShell to set up your Git identity:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 📂 Step 3: Initialize Git Repository

If your project doesn't have a `.git` folder:

```powershell
cd "c:\Users\USER 2\Delight publishing"
git init
git add .
git commit -m "Initial commit: Premium DelightPen Publishing website with luxury UI/UX design"
```

---

## 🔗 Step 4: Add Remote Repository

Link your local project to your GitHub repo:

```powershell
git remote add origin https://github.com/adeyejesuolaoluwa/Delight-publishing.git
git branch -M main
git push -u origin main
```

---

## 📤 Step 5: Push Changes to GitHub

After making changes, use these commands:

```powershell
# Check status
git status

# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Improve portfolio section and optimize for Vercel deployment"

# Push to GitHub
git push origin main
```

---

## 🚀 Step 6: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```powershell
npm install -g vercel
```

2. **Login to Vercel:**
```powershell
vercel login
```

3. **Deploy:**
```powershell
cd "c:\Users\USER 2\Delight publishing"
vercel
```

Follow the prompts and link to your GitHub repository.

### Option B: Vercel Dashboard (Web UI)

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select "Import Git Repository"
4. Enter your GitHub repo URL: `https://github.com/adeyejesuolaoluwa/Delight-publishing`
5. Configure build settings (should auto-detect):
   - **Framework:** Vite (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click "Deploy"

---

## ✨ Deployment Checklist

- [ ] Git installed and configured
- [ ] GitHub repository initialized
- [ ] All changes committed
- [ ] Pushed to GitHub main branch
- [ ] Vercel project created
- [ ] Environment variables set (if any)
- [ ] Domain configured (optional)
- [ ] Deployment successful
- [ ] Lighthouse audit passed (90+)
- [ ] Site accessible at Vercel URL

---

## 🔄 Automatic Deployments (After First Deploy)

Once deployed to Vercel:
- **Every push to `main` branch** → Automatic production deployment
- **Pull requests** → Automatic preview deployments
- **Rollbacks** → Easy via Vercel dashboard

---

## 📊 Monitoring

Monitor your deployment at:
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Actions:** https://github.com/adeyejesuolaoluwa/Delight-publishing/actions
- **Vercel Analytics:** Built-in performance metrics

---

## 🆘 Troubleshooting

### Git Command Not Found
- Reinstall Git from https://git-scm.com/downloads
- Restart PowerShell after installation

### Vercel Deployment Fails
1. Check build logs in Vercel dashboard
2. Verify `npm run build` works locally
3. Ensure `dist/` folder is created

### GitHub Authentication
- Use personal access token instead of password
- Generate at: https://github.com/settings/tokens

---

## 📝 Current Project Status

**Files Ready for Deployment:**
- ✅ `index.html` - Clean, optimized HTML (389 lines)
- ✅ `css/` - 8 modular CSS files with premium design
- ✅ `js/` - 5 ES6 modules, no infinite loops
- ✅ `dist/` - Production-ready optimized files
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - npm scripts configured

**Build Stats:**
- HTML: 29.74 KB (gzip: 5.84 KB)
- CSS: 28.73 KB (gzip: 5.91 KB)
- JS: 8.45 KB (gzip: 2.41 KB)
- **Total:** 66.92 KB (< 100 KB! ✨)

---

## 🎉 Next Steps

Once deployed, you can:
1. View live site at your Vercel URL
2. Connect custom domain
3. Set up analytics
4. Enable caching and CDN
5. Configure email notifications

For more info: https://vercel.com/docs

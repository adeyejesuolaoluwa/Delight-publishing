# Deployment Guide - DelightPen Publishing

Complete guide for deploying the DelightPen Publishing website to production environments.

## 📋 Pre-Deployment Checklist

### Quality Assurance
- [ ] All links tested and working
- [ ] Forms submit successfully
- [ ] Mobile menu functions properly
- [ ] Carousel slides work
- [ ] Animations are smooth
- [ ] Images load correctly
- [ ] No console errors
- [ ] SEO meta tags verified
- [ ] Lighthouse score 90+
- [ ] No broken external links

### Performance
- [ ] Run `npm run build` successfully
- [ ] Check bundle size (should be <500kb)
- [ ] Test on slow 4G connection
- [ ] Verify lazy loading works
- [ ] Check Core Web Vitals
- [ ] Minification confirmed
- [ ] Cache headers configured

### Security
- [ ] No hardcoded API keys
- [ ] Environment variables set
- [ ] HTTPS enforced
- [ ] CSP headers configured
- [ ] No vulnerable dependencies

---

## 🚀 Deployment Methods

### Method 1: Vercel (Recommended - Easiest)

**Best for:** Static sites, fastest deployment, automatic SSL

#### Quick Deploy
1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Configure (first time):**
   - Answer deployment questions
   - Set project name: `delight-publishing`
   - Set root directory: `.`
   - Vercel auto-detects framework

5. **Access production:**
   - Visit URL provided by Vercel
   - Custom domain: Add in Vercel settings

#### Automatic Deployments
Connect GitHub repository to Vercel:
1. Push code to GitHub
2. Connect repository in Vercel dashboard
3. Every push to `main` auto-deploys

**Cost:** Free tier available, $20/month for Pro features

---

### Method 2: Netlify

**Best for:** Git integration, form handling, edge functions

#### Deploy via Netlify UI
1. **Go to:** https://app.netlify.com
2. **Click:** "Add new site" → "Import an existing project"
3. **Select:** GitHub repository
4. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy:** Click "Deploy site"

#### Deploy from Command Line
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

**Cost:** Free tier, $19/month Pro

---

### Method 3: GitHub Pages

**Best for:** Free hosting, version control integration

#### Setup
1. **Create GitHub repository:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/delight-publishing.git
git push -u origin main
```

2. **Configure GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: "GitHub Actions"
   - Choose workflow: Node.js (or create custom)

3. **Create workflow file:** `.github/workflows/deploy.yml`
```yaml
name: Deploy to Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Cost:** Free

---

### Method 4: Traditional Web Hosting (cPanel, Bluehost, etc.)

**Best for:** Full server control, existing hosting provider

#### FTP Upload
1. **Build locally:**
```bash
npm run build
```

2. **Connect via FTP:**
   - Use FileZilla, WinSCP, or cPanel File Manager
   - Username & password from hosting provider
   - Host: Your domain name

3. **Upload `/dist` folder contents:**
   - Upload all files from `dist/` to `public_html/`
   - Maintain folder structure
   - Set `index.html` as default

4. **Configure .htaccess** (if using Apache):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### SSH Deployment (Advanced)
```bash
# From local machine
npm run build
scp -r dist/* user@yourserver.com:/home/user/public_html/

# Or via SSH for automation
ssh user@yourserver.com 'cd /path/to/site && git pull && npm install && npm run build'
```

---

### Method 5: AWS S3 + CloudFront

**Best for:** Scalability, global CDN, high traffic

#### Steps
1. **Create S3 Bucket:**
   - AWS Console → S3 → Create bucket
   - Name: `delight-publishing`
   - Uncheck "Block public access"

2. **Upload built files:**
```bash
npm run build
aws s3 sync dist/ s3://delight-publishing --delete --cache-control "max-age=31536000"
```

3. **Enable Static Website Hosting:**
   - Bucket → Properties → Static website hosting
   - Index document: `index.html`
   - Error document: `index.html`

4. **Setup CloudFront (CDN):**
   - CloudFront → Create distribution
   - Origin: S3 bucket URL
   - Enable HTTPS
   - Custom domain (optional)

5. **Route 53 (DNS):**
   - Create hosted zone
   - Point domain to CloudFront distribution

**Cost:** $0.50-$3/month for storage + data transfer

---

## 🔧 Environment Configuration

### Environment Variables
Create `.env.production` in root:
```
VITE_API_URL=https://api.delightpublishing.com
VITE_GA_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://delightpublishing.com
```

Reference in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Build Variables (package.json)
```json
"scripts": {
  "build:prod": "NODE_ENV=production npm run build",
  "build:staging": "NODE_ENV=staging npm run build",
  "deploy": "npm run build:prod && vercel --prod"
}
```

---

## 📊 Post-Deployment Testing

### Automated Checks
```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse https://delightpublishing.com --view

# Check broken links
npm install -g broken-link-checker
blc https://delightpublishing.com -r
```

### Manual Testing
1. **Desktop browsers:** Chrome, Firefox, Safari, Edge
2. **Mobile browsers:** iOS Safari, Chrome Android
3. **Devices:** Desktop, tablet, mobile (landscape & portrait)
4. **Network:** Test on 4G, 3G, slow connection
5. **Functionality:**
   - All links navigate correctly
   - Forms submit successfully
   - Navigation menu works
   - Carousel slides
   - Animations render smoothly
   - Images load
   - Fonts display correctly
   - Mobile menu opens/closes

### Analytics Verification
1. Google Analytics loads (check Console)
2. Events fire correctly
3. Page views tracked

### Performance Monitoring
1. **Core Web Vitals:**
   - Largest Contentful Paint (LCP) < 2.5s
   - First Input Delay (FID) < 100ms
   - Cumulative Layout Shift (CLS) < 0.1

2. **PageSpeed Insights:** https://pagespeed.web.dev/

3. **WebPageTest:** https://www.webpagetest.org/

---

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Build and Deploy
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint:css
      - run: npm run lint:js
      - run: npm run build
      - name: Upload to S3
        if: github.ref == 'refs/heads/main'
        run: |
          aws s3 sync dist/ s3://delight-publishing --delete
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

---

## 🚨 Rollback Procedures

### Rollback on Vercel
```bash
vercel rollback
```

### Rollback on Netlify
- Netlify Dashboard → Deploys → Click previous successful deploy → Restore

### Rollback on GitHub Pages
```bash
git revert HEAD
git push
# Automatic redeploy triggered
```

### Rollback on Traditional Hosting
```bash
# Keep backup of current site
scp -r user@server:/public_html backup_$(date +%Y%m%d)

# Restore from backup
scp -r backup_20231225/* user@server:/public_html/
```

---

## 🆘 Troubleshooting Deployment

### Issue: Build Fails
**Solution:**
```bash
# Clear cache
npm ci  # instead of npm install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: 404 Errors on Page Refresh
**Cause:** SPA routing not configured
**Solution:** Set up redirect rules:

**Vercel:** Auto-configured
**Netlify:** Create `_redirects` file:
```
/*    /index.html   200
```

**GitHub Pages:** Not ideal for SPAs without workarounds

### Issue: Styles Not Loading
**Cause:** Incorrect CSS paths
**Solution:**
- Check `vite.config.js` publicDir setting
- Verify CSS file paths in HTML
- Check browser Console for 404 errors

### Issue: JavaScript Not Running
**Cause:** Module errors
**Solution:**
```bash
npm run build
# Check dist folder structure
# Verify all JS files copied correctly
# Check browser Console for errors
```

### Issue: Slow Performance
**Cause:** Large bundles, unoptimized images
**Solution:**
```bash
# Analyze bundle
npm install --save-dev rollup-plugin-visualizer

# Optimize images
npx imagemin assets/images/* --out-dir=assets/images/optimized
```

---

## 📞 Support Contacts

**Vercel Support:** https://vercel.com/support
**Netlify Support:** https://www.netlify.com/support/
**GitHub Pages:** https://docs.github.com/en/pages
**AWS Support:** https://console.aws.amazon.com/support

---

## 🔐 Security Checklist

- [ ] HTTPS enabled on all domains
- [ ] Security headers configured
- [ ] Content Security Policy (CSP) set
- [ ] No API keys in code
- [ ] Environment variables used for secrets
- [ ] Dependency vulnerabilities checked
- [ ] Website scanned for malware
- [ ] SSL certificate valid and auto-renewing
- [ ] Backups automated and tested
- [ ] Monitoring and alerts configured

---

**Last Updated:** March 23, 2026
**Status:** Production Ready

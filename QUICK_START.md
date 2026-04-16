# Quick Start Guide - 5 Minutes to Running

Get the DelightPen Publishing website running locally in under 5 minutes.

---

## ⚡ Super Quick (No Build Tools)

**Just want to view the site locally?**

### Option 1: Open in Browser
```
1. Navigate to: c:\Users\USER 2\Delight publishing\
2. Double-click: index.html
3. Done! Website opens in your default browser
```

### Option 2: Python Simple Server
```bash
# If you have Python installed
cd "c:\Users\USER 2\Delight publishing"
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 3: Node.js Simple Server
```bash
# If you have Node.js installed
cd "c:\Users\USER 2\Delight publishing"
npx serve .

# Then open: http://localhost:3000
```

---

## 🚀 Full Development Setup (5 Minutes)

**Want to develop and make changes?**

### Prerequisites
- Node.js 16+ installed ([download here](https://nodejs.org/))
- Git (optional, for version control)
- Text editor (VS Code recommended)

### Step 1: Install Dependencies (2 minutes)
```bash
cd "c:\Users\USER 2\Delight publishing"
npm install
```

This installs:
- Vite (development server)
- ESLint (code quality)
- Prettier (code formatter)
- Stylelint (CSS linter)

### Step 2: Start Development Server (1 minute)
```bash
npm run dev
```

Output will show:
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 3: Open in Browser (10 seconds)
- Click the Local URL: `http://localhost:5173/`
- Or manually open: http://localhost:5173/
- Website loads with all features active!

### Step 4: Make Changes & See Them Live (ongoing)
- Edit any CSS file in `css/`
- Edit any JavaScript file in `js/`
- Edit HTML in `index.html`
- Browser auto-refreshes automatically!

### Step 5: Stop Development Server
Press `Ctrl+C` in terminal to stop

---

## 📋 Common Commands

```bash
# Start development server (http://localhost:5173/)
npm run dev

# Check code quality
npm run lint:js          # JavaScript linting
npm run lint:css        # CSS linting

# Auto-format code
npm run format

# Build for production
npm run build           # Creates /dist folder

# Preview production build locally
npm run preview

# Check for security vulnerabilities
npm audit
```

---

## 📂 File Structure Quick Reference

```
c:\Users\USER 2\Delight publishing\
├── index.html              ← Main website file
├── css/                    ← All stylesheets
│   ├── variables.css       (design tokens)
│   ├── base.css            (resets & typography)
│   ├── animations.css      (keyframes)
│   ├── components.css      (buttons, cards)
│   ├── navbar.css          (navigation)
│   ├── sections.css        (page sections)
│   ├── footer.css          (footer)
│   └── responsive.css      (mobile & media queries)
├── js/                     ← All JavaScript
│   ├── main.js             (app bootstrap)
│   ├── utils.js            (helper functions)
│   ├── mobile-menu.js      (hamburger menu)
│   ├── carousel.js         (testimonial slider)
│   └── animations.js       (scroll animations)
├── assets/                 ← Images & media (empty)
├── README.md               ← Full documentation
├── ARCHITECTURE.md         ← Technical deep-dive
├── CONTRIBUTING.md         ← Developer guidelines
├── DEPLOYMENT.md           ← Deployment instructions
├── package.json            ← Project configuration
├── vite.config.js          ← Build configuration
├── .eslintrc.json          ← JavaScript linting rules
├── .stylelintrc.json       ← CSS linting rules
└── .gitignore              ← Git ignore rules
```

---

## 🎨 Editing CSS

**Change colors:**
1. Edit `css/variables.css`
2. Find: `--color-primary-green: #0F3D2F;`
3. Change the hex value
4. Refresh browser - change applies everywhere!

**Change spacing:**
1. Edit `css/variables.css`
2. Find: `--spacing-md: 16px;`
3. Change the pixel value
4. Refresh browser

**Add new styles:**
1. Create `.my-button { }` in `css/components.css`
2. Use in HTML: `<button class="my-button">`
3. Save file, browser auto-refreshes

---

## 🔧 Editing JavaScript

**Example: Change auto-slide delay (testimonials)**
1. Edit `js/carousel.js`
2. Find: `const DELAY = 6000;` (6 seconds)
3. Change to: `const DELAY = 5000;` (5 seconds)
4. Save file, browser auto-refreshes

**Example: Add console message when page loads:**
1. Edit `js/main.js`
2. Find: `console.log('Initializing app...');`
3. Add: `console.log('Website loaded!');`
4. Save file, check browser Console

---

## 📱 Testing Responsive Design

### In Chrome DevTools
1. Press `F12` to open DevTools
2. Click device icon (mobile view): `Ctrl+Shift+M`
3. Select device: iPhone 12, iPad, Galaxy Fold, etc.
4. Rotate view: `Ctrl+Shift+M` again to toggle landscape

### Test Breakpoints
- **Mobile:** 320px, 480px (small phones)
- **Tablet:** 768px, 1024px (iPad, large phones landscape)
- **Desktop:** 1440px+ (laptops, desktops)
- **Ultra-wide:** 2560px+ (4K monitors)

---

## 🐛 Troubleshooting

### npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Delete and reinstall
rm -r node_modules package-lock.json
npm install
```

### Port 5173 already in use
Windows: 
```powershell
# Find process using port
netstat -ano | findstr :5173

# Kill process (note PID from above)
taskkill /PID [PID] /F
```

### Styles not updating
- Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Clear browser cache settings
- Check CSS file is linked in HTML

### JavaScript console errors
- Open DevTools: `F12`
- Check Console tab for error messages
- Check file paths are correct
- Verify JavaScript syntax

---

## 🌐 Deployment Quick Links

### Deploy to the Internet (Free Options)

**Vercel (Easiest):**
```bash
npm install -g vercel
vercel
# Follow prompts, site live in 1 minute
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
# Site live in 1 minute
```

**GitHub Pages:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/delight-publishing
git push -u origin main
# Enable Pages in repo settings
```

See `DEPLOYMENT.md` for detailed instructions.

---

## 📚 Learn More

- **Full documentation:** See `README.md`
- **Technical architecture:** See `ARCHITECTURE.md`
- **Contributor guidelines:** See `CONTRIBUTING.md`
- **Deployment guide:** See `DEPLOYMENT.md`

---

## ❓ Quick Q&A

**Q: Can I use this without Node.js?**
A: Yes! Just open `index.html` in your browser. You won't have the dev server auto-reload, but the site works perfectly.

**Q: Do I need to know about Vite?**
A: No. Just run `npm run dev` and it handles everything.

**Q: Can I edit the HTML directly?**
A: Yes! Edit `index.html` and the browser auto-refreshes.

**Q: Where are my changes saved?**
A: Locally on your computer. To share, commit to Git or upload to a server.

**Q: How do I add a new page?**
A: This is a single-page site, but you can create multiple HTML files. See `README.md` for instructions.

**Q: Is my data secure?**
A: This is a static site with no server. Forms won't submit without a backend. See `DEPLOYMENT.md` for form integration.

---

## 🚀 Next Steps

1. **Run it:** `npm run dev`
2. **Explore:** Open `index.html` in your editor and look at the HTML structure
3. **Edit CSS:** Try changing a color in `css/variables.css`
4. **Edit JavaScript:** Try changing animation delays in `js/carousel.js`
5. **Read docs:** Open `README.md` for complete guide
6. **Deploy:** Follow `DEPLOYMENT.md` when ready to go live

---

## 💡 Pro Tips

**Tip 1:** Use VS Code with "Live Sass Compiler" or "Live Preview" extensions for even faster development

**Tip 2:** Check your changes with browser DevTools (F12):
- Inspector for HTML/CSS
- Console for JavaScript errors
- Network tab to see file sizes
- Responsive design mode (Ctrl+Shift+M)

**Tip 3:** Terminal shortcuts:
- `Clear` - Clear terminal
- `Ctrl+C` - Stop server
- `Up Arrow` - Re-run last command
- `Ctrl+L` - Clear screen

**Tip 4:** Keep `ARCHITECTURE.md` open for reference while developing

---

**Ready?** Run `npm run dev` and start coding! 🎉

---

**Last Updated:** March 23, 2026

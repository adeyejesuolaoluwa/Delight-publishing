# Contributing Guide - Delight Pen Publishing

Welcome to the Delight Pen Publishing website development team! This guide outlines standards and practices for contributing to this project.

## 🎯 Our Mission

Build a world-class digital presence for DelightPen Publishing that reflects premium publishing excellence while maintaining code quality, performance, and accessibility.

---

## 📋 Code of Conduct

- Be respectful and professional in all interactions
- Welcome diverse perspectives and ideas
- Focus on the code, not the person
- Help others when possible
- Report issues through proper channels

---

## 🚀 Getting Started

### 1. Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/delightpublishing/website.git
cd "c:\Users\USER 2\Delight publishing"

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Understand the Architecture

Read these files first:
- `README.md` - Project overview
- `DEPLOYMENT.md` - Deployment procedures
- Architecture comments in key files:
  - `css/variables.css` - Design token system
  - `js/main.js` - Module initialization pattern

### 3. Check Existing Issues

Before starting work:
- Review GitHub Issues for related tasks
- Comment to claim an issue
- Discuss approach with maintainers

---

## 📝 Coding Standards

### JavaScript Standards (ES6+ Modules)

**File Structure:**
```javascript
// 1. Imports at top
import { scrollToSection } from './utils.js';

// 2. Constants
const ANIMATION_DELAY = 300;

// 3. Class definition
export class MyModule {
  constructor(options = {}) {
    this.element = options.element;
    this.timeout = options.timeout || 500;
  }

  // Class methods
  init() {
    this.setupListeners();
  }

  setupListeners() {
    // Implementation
  }

  destroy() {
    // Cleanup
  }
}

// 4. Export named functions
export function myUtilFunction(param) {
  return param;
}
```

**Naming Conventions:**
- Classes: PascalCase (`MyModule`, `AnimationObserver`)
- Functions: camelCase (`scrollToSection`, `initAnimations`)
- Constants: UPPER_SNAKE_CASE (`MAX_WIDTH`, `DELAY_MS`)
- Private methods: prefix with `_` (`_setupListeners`)

**Best Practices:**
- Always use `const` by default, `let` only when reassignment needed
- Never use `var`
- Use arrow functions for callbacks
- Add JSDoc comments for public methods:
```javascript
/**
 * Initialize animation observer for scroll triggers
 * @param {Object} options - Configuration object
 * @param {string} options.selector - CSS selector for elements
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @returns {AnimationObserver} - Observer instance
 */
export function initAnimations(options = {}) {
  // Implementation
}
```

**Error Handling:**
```javascript
try {
  // Operation
} catch (error) {
  console.error('Module initialization failed:', error);
  // Graceful fallback
}
```

---

### CSS Standards

**File Organization:**
```css
/* 1. CSS Variables (at top of file) */
:root {
  --color-primary: #0F3D2F;
  --spacing-md: 16px;
}

/* 2. Base element styles */
div {
  margin: 0;
  padding: 0;
}

/* 3. Component classes */
.card {
  /* Properties organized: positioning, display, dimensions, spacing, colors, typography, effects */
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--spacing-md);
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

/* 4. Component variants */
.card.primary {
  background-color: var(--color-primary);
  color: white;
}

/* 5. Component interactions */
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

/* 6. Modifier classes */
.card.highlighted {
  border: 2px solid var(--color-accent-orange);
}

/* 7. Responsive overrides at bottom */
@media (max-width: 768px) {
  .card {
    padding: var(--spacing-sm);
  }
}
```

**Naming Conventions:**
- Classes: kebab-case (`.card-header`, `.button-primary`)
- CSS variables: kebab-case (`--color-primary-green`, `--spacing-lg`)
- BEM for modifiers: `.block__element--modifier`
- Avoid ID selectors in CSS

**CSS Properties Order:**
1. Position (position, top, left, z-index)
2. Display (display, flex-direction, justify-content)
3. Box model (width, height, padding, margin)
4. Border & outline
5. Background & color
6. Typography
7. Shadows & effects
8. Transitions & animations

**Colors:**
Always use CSS variables from `variables.css`:
```css
/* ✅ Good */
color: var(--color-primary-green);
background: var(--color-accent-orange);

/* ❌ Avoid */
color: #0F3D2F;
background: #FF7A00;
```

**Spacing:**
Use the spacing scale:
```css
/* ✅ Good */
padding: var(--spacing-md);        /* 16px */
margin: var(--spacing-lg) 0;       /* 24px top/bottom, 0 sides */
gap: var(--spacing-sm);            /* 8px */

/* ❌ Avoid */
padding: 15px;
margin: 24px;
```

---

### HTML Standards

**Semantic Markup:**
```html
<!-- ✅ Good -->
<section id="services" class="services section" role="region" aria-label="Our Services">
  <div class="container">
    <h2 class="section-title">Services</h2>
    <article class="card">
      <h3>Service Name</h3>
      <p>Description</p>
    </article>
  </div>
</section>

<!-- ❌ Avoid -->
<div class="services">
  <div class="container">
    <div class="title">Services</div>
    <div class="card">
      <div>Service Name</div>
    </div>
  </div>
</div>
```

**Accessibility:**
- Always use semantic HTML (`<button>`, `<nav>`, `<main>`, `<article>`)
- Add alt text to all images
- Include ARIA labels for complex components
- Ensure 4.5:1 color contrast ratio
- Support keyboard navigation
- Test with screen readers

**ID Usage:**
- Use IDs for form inputs and major sections only
- Prefix with 3-char identifier: `#form-email`, `#main-content`
- Never duplicate IDs

---

## ✅ Testing Checklist Before Pull Request

### Code Quality
```bash
npm run lint:css      # Check CSS
npm run lint:js       # Check JavaScript
npm run format        # Auto-format code
```

### Functionality
- [ ] Feature works as designed
- [ ] No console errors
- [ ] No console warnings (unless justified)
- [ ] Mobile responsive (320px, 768px, 1024px)
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Keyboard navigation works
- [ ] Screen reader compatible

### Performance
- [ ] Images optimized
- [ ] No unused CSS loaded
- [ ] No blocking JavaScript
- [ ] Lighthouse score 90+
- [ ] No CLS (layout shift)
- [ ] LCP < 2.5 seconds

### Accessibility
- [ ] Color contrast 4.5:1 minimum
- [ ] Focus indicators visible
- [ ] All buttons keyboard accessible
- [ ] Form labels associated with inputs
- [ ] No keyboard traps
- [ ] Semantic HTML used

---

## 🔄 Workflow: Making Changes

### 1. Create a Feature Branch
```bash
# Update main branch first
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/short-description
# or
git checkout -b fix/short-description
```

### 2. Make Changes
```bash
# Edit files, test locally
npm run dev

# Keep commits small and focused
git add file.js
git commit -m "feat: add carousel auto-play feature"
```

### 3. Follow Commit Message Format

Format: `type(scope): description`

Types:
- `feat` - New feature
- `fix` - Bug fix
- `style` - CSS or formatting changes
- `refactor` - Code restructuring
- `perf` - Performance improvements
- `docs` - Documentation updates
- `test` - Test changes
- `chore` - Build/dependency changes

Examples:
```
feat(carousel): add auto-play with pause on hover
fix(navbar): mobile menu not closing on resize
style(buttons): update primary button color
docs(readme): add installation instructions
refactor(animations): simplify scroll observer pattern
```

### 4. Push and Create Pull Request
```bash
git push origin feature/short-description
```

Then on GitHub:
- Create Pull Request
- Fill in description with:
  - What changed
  - Why it changed
  - How to test
  - Screenshots/videos for UI changes

### 5. Code Review
- Respond to feedback
- Make requested changes
- Re-request review when ready
- Maintain respectful discussion

### 6. Merge
Once approved:
- Squash commits if requested
- Delete feature branch after merge
- Close related issues

---

## 📦 Adding Dependencies

### When to Add a Dependency
- Avoid adding dependencies unless necessary
- Prefer vanilla JavaScript/CSS
- Check if functionality exists in standard libraries
- Evaluate package size and performance impact

### Process
```bash
# Evaluate package
npm info package-name

# Add to dev dependencies
npm install --save-dev package-name

# Or add to production dependencies (rare)
npm install --save package-name

# Commit the change
git add package.json package-lock.json
git commit -m "chore: add package-name dependency"
```

### Do Not
- Commit `node_modules/`
- Use beta or unstable versions
- Add unnecessary "convenience" packages
- Ignore security warnings

---

## 🐛 Bug Reporting

Found a bug? Please report it:

### Create an Issue with:
1. **Clear title:** Describe the bug in a few words
2. **Environment:** Browser, OS, device
3. **Steps to reproduce:** Numbered steps
4. **Expected behavior:** What should happen
5. **Actual behavior:** What actually happens
6. **Screenshots/video:** Visual evidence
7. **Additional context:** Any other relevant info

**Example:**
```
Title: Mobile menu doesn't close on link click

Environment: iOS Safari 16.0

Steps:
1. Open site on mobile
2. Click hamburger menu
3. Click any navigation link
4. Close menu

Expected: Menu closes after clicking link
Actual: Menu remains open

Additional: This only happens on iOS
```

---

## 📚 Documentation Standards

### Comments
```javascript
// Use for explaining why, not what
// ✅ Good
// Wait 300ms before auto-sliding to prevent jarring motion
const ANIMATION_DELAY = 300;

// ❌ Avoid
// Set animation delay to 300
const ANIMATION_DELAY = 300;
```

### JSDoc
Required for public functions:
```javascript
/**
 * Smoothly scroll to a section by ID
 * @param {string} id - Element ID to scroll to
 * @param {number} offset - Optional vertical offset in pixels
 * @returns {void}
 * @example
 * scrollToSection('services');
 */
export function scrollToSection(id, offset = 0) {
  // Implementation
}
```

### File Headers
Add to top of each CSS/JS file:
```javascript
/**
 * animations.js - Scroll-triggered animations and effects
 * Manages AnimationObserver, ParallaxEffect, and CounterAnimation
 * Exported: initAnimations(), initParallax(), initCounters()
 */
```

---

## 🎓 Learning Resources

**CSS:**
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [A List Apart](https://alistapart.com/)

**JavaScript:**
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [You Don't Know JS Yet](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript.info](https://javascript.info/)

**Web Standards:**
- [WCAG 2.1 Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)
- [HTTP Status Codes](https://http.cat/)

**Tools:**
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [Prettier](https://prettier.io/) - Code formatter
- [ESLint](https://eslint.org/) - JavaScript linter
- [Stylelint](https://stylelint.io/) - CSS linter

---

## 🤝 Getting Help

1. **Check documentation:** README.md, comments in code
2. **Search issues:** Look for similar problems reported
3. **Ask in discussions:** Start a GitHub discussion
4. **Email maintainers:** Check MAINTAINERS.md for contact

---

## ⭐ Recognition

We celebrate contributions! Contributors are:
- Recognized in CONTRIBUTORS.md
- Thanked in release notes
- Invited to team discussions

---

**Last Updated:** March 23, 2026
**Version:** 2.0

# Code Citations

## License: unknown
https://github.com/musakui/npodice/blob/1df4ca40cb85dc446c7188cadc1841bdeeda9884/docs/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8
```


## License: unknown
https://github.com/musakui/npodice/blob/1df4ca40cb85dc446c7188cadc1841bdeeda9884/docs/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8
```


## License: unknown
https://github.com/musakui/npodice/blob/1df4ca40cb85dc446c7188cadc1841bdeeda9884/docs/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8
```


## License: unknown
https://github.com/konradrenner/websitetfleck/blob/56608967bebd1f964afcddd2756fd5713c52e44c/WebsiteNeu/smartphone/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (
```


## License: unknown
https://github.com/konradrenner/websitetfleck/blob/56608967bebd1f964afcddd2756fd5713c52e44c/WebsiteNeu/smartphone/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (
```


## License: unknown
https://github.com/acasaprogramming/The-Agency-Portfolio/blob/cc064fd3de64fb5fc2001a3b583cc7e3a8671ba4/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32
```


## License: unknown
https://github.com/konradrenner/websitetfleck/blob/56608967bebd1f964afcddd2756fd5713c52e44c/WebsiteNeu/smartphone/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (
```


## License: unknown
https://github.com/acasaprogramming/The-Agency-Portfolio/blob/cc064fd3de64fb5fc2001a3b583cc7e3a8671ba4/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32
```


## License: unknown
https://github.com/TuanDinh140194/Lys-ecommerce/blob/8f3e1d858f5cf44ce97c36352c91d027d2f1611d/src/components/LYSNav.tsx

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32px rgba(...
```


## License: unknown
https://github.com/konradrenner/websitetfleck/blob/56608967bebd1f964afcddd2756fd5713c52e44c/WebsiteNeu/smartphone/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (
```


## License: unknown
https://github.com/acasaprogramming/The-Agency-Portfolio/blob/cc064fd3de64fb5fc2001a3b583cc7e3a8671ba4/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32
```


## License: unknown
https://github.com/TuanDinh140194/Lys-ecommerce/blob/8f3e1d858f5cf44ce97c36352c91d027d2f1611d/src/components/LYSNav.tsx

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32px rgba(...
```


## License: unknown
https://github.com/konradrenner/websitetfleck/blob/56608967bebd1f964afcddd2756fd5713c52e44c/WebsiteNeu/smartphone/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32
```


## License: unknown
https://github.com/acasaprogramming/The-Agency-Portfolio/blob/cc064fd3de64fb5fc2001a3b583cc7e3a8671ba4/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32
```


## License: unknown
https://github.com/TuanDinh140194/Lys-ecommerce/blob/8f3e1d858f5cf44ce97c36352c91d027d2f1611d/src/components/LYSNav.tsx

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32px rgba(...
```


## License: unknown
https://github.com/konradrenner/websitetfleck/blob/56608967bebd1f964afcddd2756fd5713c52e44c/WebsiteNeu/smartphone/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32px rgba(...
```


## License: unknown
https://github.com/acasaprogramming/The-Agency-Portfolio/blob/cc064fd3de64fb5fc2001a3b583cc7e3a8671ba4/index.html

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32px rgba(...
```


## License: unknown
https://github.com/TuanDinh140194/Lys-ecommerce/blob/8f3e1d858f5cf44ce97c36352c91d027d2f1611d/src/components/LYSNav.tsx

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delight Pen Publishing | Transform Your Manuscript Into a Bestseller</title>
    <meta name="description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing for Amazon KDP, IngramSpark, and wide distribution. Trusted by 1,200+ authors.">
    <meta name="keywords" content="book publishing, self-publishing, author editing, kindle publishing, indie publishing, manuscript editing">
    <meta name="author" content="Delight Pen Publishing">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://delightpublishing.com">
    <meta property="og:title" content="Delight Pen Publishing | Transform Your Manuscript Into a Bestseller">
    <meta property="og:description" content="Award-winning publishing solutions for authors. Professional editing, formatting, and marketing.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Twitter Card -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://delightpublishing.com">
    <meta property="twitter:title" content="Delight Pen Publishing">
    <meta property="twitter:description" content="Transform Your Manuscript Into a Bestseller">
    <meta property="twitter:image" content="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1200&h=630&fit=crop">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='serif' fill='%230F3D2F'>D</text></svg>">
</head>
<body>
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <!-- Navbar -->
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar-container">
            <a href="#" class="logo">
                <span class="logo-text">Delight</span>
                <span class="logo-subtext">Publishing House</span>
            </a>

            <div class="nav-menu hide-mobile">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#process" class="nav-link">Process</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
            </div>

            <div class="navbar-cta hide-mobile">
                <button class="btn btn-primary" onclick="scrollToSection('cta')">Get Your Free Quote</button>
            </div>

            <button class="hamburger show-mobile" id="hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close mobile menu">✕</button>
        <a href="#hero" onclick="toggleMobileMenu()">Home</a>
        <a href="#services" onclick="toggleMobileMenu()">Services</a>
        <a href="#process" onclick="toggleMobileMenu()">Process</a>
        <a href="#portfolio" onclick="toggleMobileMenu()">Portfolio</a>
        <a href="#about" onclick="toggleMobileMenu()">About</a>
        <a href="#testimonials" onclick="toggleMobileMenu()">Testimonials</a>
        <button class="btn btn-primary" onclick="toggleMobileMenu(); scrollToSection('cta')">Get Your Free Quote</button>
    </div>

    <main id="main-content">
        <!-- Hero Section -->
        <section id="hero" class="hero" role="region" aria-label="Hero">
            <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&h=900&fit=crop" alt="Publishing" class="hero-bg" loading="lazy">
            <div class="container hero-content animate-fade-in-up">
                <h1>Turning Manuscripts into Bestsellers</h1>
                <p class="hero-subtitle">Transform your literary vision into a market-ready book. From developmental editing to global distribution, we handle every step of your publishing journey with precision and care.</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="scrollToSection('cta')">Start Your Journey</button>
                    <button class="btn btn-secondary-white" onclick="scrollToSection('portfolio')">See Our Work</button>
                </div>
                <div class="trust-box animate-slide-in-left">
                    <div class="trust-item">✓ Trusted by 1,200+ authors</div>
                    <div class="trust-item">✓ 98% author satisfaction rate</div>
                    <div class="trust-item">✓ Amazon KDP Platinum Partner</div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services section" role="region" aria-label="Services">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Our Premium Services</h2>
                <div class="services-grid">
                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 6h24v20H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 10h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 15h16" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 20h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Editing</h3>
                            <p>Developmental, line & copy editing that elevates your voice. Our editors refine your manuscript to publication-ready standards.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <rect x="4" y="4" width="24" height="24" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 8h16M8 16h16M8 24h8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Formatting</h3>
                            <p>Flawless Kindle, EPUB & print-ready layouts. Perfect typography and design for every platform.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M16 2c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 8v8l6 3.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Publishing</h3>
                            <p>End-to-end Amazon KDP, IngramSpark & wide distribution. Get your book to readers globally in days.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>

                    <article class="card service-card animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="card-content">
                            <div class="icon-box">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF7A00" stroke-width="2" aria-hidden="true">
                                    <path d="M4 8h24v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 4v28M16 4v28M24 4v28" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 12h28M2 20h28" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3>Marketing</h3>
                            <p>Launch campaigns that turn readers into buyers. Strategic visibility on Amazon, social media & beyond.</p>
                        </div>
                        <a href="#" class="link">Learn more →</a>
                    </article>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section id="process" class="process section" role="region" aria-label="Publishing Process">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Your Publishing Journey</h2>
                <div class="timeline">
                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.1s">
                        <div class="timeline-circle" aria-label="Step 1">1</div>
                        <div class="timeline-content">
                            <h3>Manuscript Review & Consultation</h3>
                            <p>We'll evaluate your manuscript, discuss your goals, and create a customized publishing roadmap tailored to your vision.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="timeline-circle" aria-label="Step 2">2</div>
                        <div class="timeline-content">
                            <h3>Professional Editing & Formatting</h3>
                            <p>Our award-winning editors refine your prose. Designers create stunning layouts for print and digital formats.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="timeline-circle" aria-label="Step 3">3</div>
                        <div class="timeline-content">
                            <h3>Publishing Setup & Distribution</h3>
                            <p>We handle all technical uploads, ISBN registration, and distribution setup across Amazon KDP, IngramSpark, and global retailers.</p>
                        </div>
                    </div>

                    <div class="timeline-item animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="timeline-circle" aria-label="Step 4">4</div>
                        <div class="timeline-content">
                            <h3>Strategic Marketing & Launch</h3>
                            <p>Coordinated book launches with targeted campaigns, media outreach, and ongoing marketing support to maximize your reach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio section" role="region" aria-label="Featured Books">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Featured Success Stories</h2>
                <div class="portfolio-grid">
                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.1s">
                        <img src="https://images.unsplash.com/photo-1447521505157-44489f6f58f4?w=500&h=700&fit=crop" alt="The Art of Beginning book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Art of Beginning</div>
                            <div class="portfolio-author">by Margaret Chen</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.2s">
                        <img src="https://images.unsplash.com/photo-1543002588-d0a40ff7ffb1?w=500&h=700&fit=crop" alt="Echoes of Tomorrow book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Echoes of Tomorrow</div>
                            <div class="portfolio-author">by James Mitchell</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.3s">
                        <img src="https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&h=700&fit=crop" alt="Pathways to Purpose book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Pathways to Purpose</div>
                            <div class="portfolio-author">by Dr. Amelia Rodriguez</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.4s">
                        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=700&fit=crop" alt="Whispers of Change book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Whispers of Change</div>
                            <div class="portfolio-author">by Sofia Bergström</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.5s">
                        <img src="https://images.unsplash.com/photo-1508018220247-8dfb6f7a2a59?w=500&h=700&fit=crop" alt="The Forgotten Archive book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">The Forgotten Archive</div>
                            <div class="portfolio-author">by Robert Hutchins</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>

                    <article class="portfolio-item animate-scale-in" style="animation-delay: 0.6s">
                        <img src="https://images.unsplash.com/photo-1519167218048-af2151b36f45?w=500&h=700&fit=crop" alt="Golden Horizons book cover" class="portfolio-image" loading="lazy">
                        <div class="overlay portfolio-overlay">
                            <div class="portfolio-title">Golden Horizons</div>
                            <div class="portfolio-author">by Elena Westwood</div>
                            <a href="#" class="link">View Success Story</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about section" role="region" aria-label="About Delight">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Why Authors Choose Delight</h2>
                <div class="about-content animate-fade-in-up" style="animation-delay: 0.1s">
                    <p class="about-intro">Since 2019, Delight Pen Publishing has been the trusted partner for authors who refuse to compromise on quality. We combine editorial excellence with strategic marketing to create books that sell—and stories that matter.</p>
                </div>

                <div class="pillars">
                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.2s">
                        <div class="icon-box icon-box-large">📚</div>
                        <h4>Award-Winning Editors</h4>
                        <p>Our team includes International Book Award winners and bestselling authors who understand what makes great literature.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.3s">
                        <div class="icon-box icon-box-large">🌍</div>
                        <h4>Global Distribution</h4>
                        <p>Your book reaches readers across 180+ countries through Amazon, IngramSpark, and premium independent retailers.</p>
                    </article>

                    <article class="pillar animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="icon-box icon-box-large">📈</div>
                        <h4>Results-Driven</h4>
                        <p>Our authors average 1,500+ copies sold in their first year. We don't just publish books—we launch careers.</p>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials section" role="region" aria-label="Testimonials">
            <div class="container">
                <h2 class="section-title animate-fade-in-up">Author Voices</h2>
                <div class="carousel">
                    <article class="testimonial-card active animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah Williams" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Delight transformed my manuscript into a polished, market-ready book. Their editors caught things I'd missed a hundred times. Within three months, I was #1 in my category on Amazon."</p>
                        <div class="testimonial-author">Sarah Williams</div>
                        <div class="testimonial-book">The Last Lighthouse</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Marcus Johnson" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"I've worked with several publishers. Delight's attention to detail and genuine partnership approach is unmatched. My book launched flawlessly, and their marketing support exceeded expectations."</p>
                        <div class="testimonial-author">Marcus Johnson</div>
                        <div class="testimonial-book">Blueprint for Success</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="Emma Rodriguez" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"As a first-time author, I was overwhelmed. Delight guided me through every step with professionalism and kindness. They didn't just publish my book—they believed in it as much as I did."</p>
                        <div class="testimonial-author">Emma Rodriguez</div>
                        <div class="testimonial-book">Whispers in the Garden</div>
                    </article>

                    <article class="testimonial-card animate-fade-in-up">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Victor Chen" class="testimonial-avatar">
                        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                        <p class="testimonial-text">"Their formatting is flawless across all platforms. The Kindle version, EPUB, and print edition all look incredible. Delight's artistry shines through in every design choice."</p>
                        <div class="testimonial-author">Victor Chen</div>
                        <div class="testimonial-book">Digital Minds</div>
                    </article>
                </div>
                
                <div class="carousel-controls">
                    <button class="carousel-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">←</button>
                    <div style="display: flex; gap: var(--spacing-md);">
                        <span class="carousel-indicator active" onclick="goToTestimonial(0)" aria-label="Testimonial 1"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(1)" aria-label="Testimonial 2"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(2)" aria-label="Testimonial 3"></span>
                        <span class="carousel-indicator" onclick="goToTestimonial(3)" aria-label="Testimonial 4"></span>
                    </div>
                    <button class="carousel-btn" onclick="nextTestimonial()" aria-label="Next testimonial">→</button>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <section id="cta" class="final-cta section" role="region" aria-label="Call to action">
            <div class="container">
                <h2>Ready to Publish Your Book in 2025?</h2>
                <div class="final-cta-buttons">
                    <button class="btn btn-primary">Start Your Publishing Journey</button>
                    <button class="btn btn-secondary-white">Book a Free Discovery Call</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer role="contentinfo">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-logo">
                    <div class="footer-logo-text">Delight</div>
                    <div class="footer-tagline">Publishing House</div>
                </div>
                <p class="footer-description">Transforming manuscripts into bestsellers since 2019. Award-winning editing, flawless design, global distribution.</p>
            </div>

            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="#">Professional Editing</a></li>
                    <li><a href="#">Book Formatting</a></li>
                    <li><a href="#">Publishing Setup</a></li>
                    <li><a href="#">Marketing Campaigns</a></li>
                    <li><a href="#">Distribution</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get in Touch</h4>
                <ul class="footer-contact">
                    <li><span class="emoji">📧</span> <a href="mailto:hello@delightpublishing.com">hello@delightpublishing.com</a></li>
                    <li><span class="emoji">📱</span> <a href="tel:+2348012345678">+234 801 234 5678</a></li>
                    <li>Follow us:</li>
                </ul>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="Facebook">f</a>
                    <a href="#" class="social-icon" aria-label="X (Twitter)">𝕏</a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">in</a>
                    <a href="#" class="social-icon" aria-label="TikTok">♪</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Delight Pen Publishing. All rights reserved. | Made with precision in Lagos 🇳🇬</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## ✅ Premium UI/UX Transformation Complete

### **Design Upgrades Applied Across Modular CSS**

**typography-refinement**
- Enhanced font hierarchy with improved letter-spacing: --letter-spacing-tight (-0.02em), --letter-spacing-normal, --letter-spacing-wide (0.03em)
- Increased line-height for luxury feel: --line-height-normal (1.65), --line-height-relaxed (1.85)
- Better text contrast: darker --color-text-dark (#1A1A1A), more refined --color-text-secondary (#666666)
- Refined heading margins and spacing for editorial excellence

**spacing-layout-system**
- Enforced 8px spacing system throughout with refined token values
- Increased section padding: --spacing-5xl now optimized with alternating backgrounds
- Better vertical rhythm: --spacing-4xl, --spacing-5xl used strategically
- Reduced cramped spacing in cards, testimonials, and buttons

**color-visual-balance**
- Reduced orange overuse: strategic placement in CTAs, icons, accents only
- Added --color-border and --color-overlay-soft for sophisticated subtle hints
- Improved background contrast: --color-bg-light changed to #FAFAF8 (more refined)
- Gradient overlays on footer and hero now blend elegantly

**component-redesign**

*Buttons*
- Premium padding: 14px 32px (softer, more spacious)
- Gradient backgrounds: linear-gradient(135deg, #FF7A00, #FF8A20)
- Enhanced hover: scale + glow effect + 4px lift + improved shadows
- Smooth micro-interactions with shine effect on hover

*Cards*
- Softer shadows: --shadow-glass (0 8px 32px rgba(...
```


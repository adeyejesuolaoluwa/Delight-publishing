/**
 * Main Application Entry Point
 * Initializes all modules and components
 */

import { initMobileMenu } from './mobile-menu.js';
import { initCarousel } from './carousel.js';
import { initAnimations, initParallax } from './animations.js';
import { scrollToSection } from './utils.js';

class App {
    constructor() {
        this.modules = {};
        this.init();
    }

    init() {
        // Initialize modules
        this.modules.mobileMenu = initMobileMenu();
        this.modules.carousel = initCarousel({
            autoSlideDelay: 6000
        });
        this.modules.animations = initAnimations();
        this.modules.parallax = initParallax({
            selector: '.hero-bg',
            speed: 0.5
        });

        // Setup global functions for inline event handlers
        this.setupGlobalFunctions();

        // Setup intersection observer for lazy loading
        this.setupLazyLoading();

        // Log initialization
        console.log('Application initialized successfully');
    }

    setupGlobalFunctions() {
        // Make scroll function globally available for HTML onclick handlers
        window.scrollToSection = scrollToSection;

        // Mobile menu toggle
        window.toggleMobileMenu = () => {
            this.modules.mobileMenu.toggle();
        };

        // Carousel controls
        window.nextTestimonial = () => {
            this.modules.carousel.next();
        };

        window.prevTestimonial = () => {
            this.modules.carousel.prev();
        };

        window.goToTestimonial = (index) => {
            this.modules.carousel.goTo(index);
        };
    }

    setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load image if it has loading="lazy" attribute
                    if (img.loading === 'lazy') {
                        // Image is already lazy-loaded by browser
                        // This handles custom lazy loading if needed
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    destroy() {
        // Cleanup modules
        Object.values(this.modules).forEach(module => {
            if (module && typeof module.destroy === 'function') {
                module.destroy();
            }
        });
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new App();
    });
} else {
    new App();
}

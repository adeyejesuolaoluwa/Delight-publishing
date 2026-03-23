/**
 * Mobile Menu Module
 * Handles mobile menu toggle and interaction
 */

import { getElement, toggleClass, addClass, removeClass } from './utils.js';

export class MobileMenu {
    constructor() {
        this.hamburger = getElement('#hamburger');
        this.menu = getElement('#mobileMenu');
        this.menuLinks = this.menu?.querySelectorAll('a') || [];
        this.overlay = null;
        this.boundHandlers = new Map();
        this.isInitialized = false;

        this.init();
    }

    init() {
        if (!this.hamburger || !this.menu || this.isInitialized) return;

        // Create and insert overlay only once
        if (!this.overlay) {
            this.overlay = document.createElement('div');
            this.overlay.className = 'mobile-menu-overlay';
            this.menu.parentNode?.insertBefore(this.overlay, this.menu.nextSibling);
        }

        // Store handler references for cleanup
        const toggleHandler = () => this.toggle();
        const closeHandler = () => this.close();
        const keydownHandler = (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        };
        const resizeHandler = () => {
            if (window.innerWidth > 768 && this.isOpen()) {
                this.close();
            }
        };

        this.boundHandlers.set('toggle', toggleHandler);
        this.boundHandlers.set('close', closeHandler);
        this.boundHandlers.set('keydown', keydownHandler);
        this.boundHandlers.set('resize', resizeHandler);

        // Event listeners
        this.hamburger.addEventListener('click', toggleHandler);
        this.overlay.addEventListener('click', closeHandler);

        // Close menu when a link is clicked
        this.menuLinks.forEach((link, index) => {
            const linkCloseHandler = () => this.close();
            this.boundHandlers.set(`link-${index}`, linkCloseHandler);
            link.addEventListener('click', linkCloseHandler);
        });

        // Close menu on escape key
        document.addEventListener('keydown', keydownHandler);

        // Close menu when resizing to desktop
        window.addEventListener('resize', resizeHandler);

        this.isInitialized = true;
    }

    toggle() {
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        addClass(this.menu, 'active');
        addClass(this.hamburger, 'active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        removeClass(this.menu, 'active');
        removeClass(this.hamburger, 'active');
        document.body.style.overflow = '';
    }

    isOpen() {
        return this.menu?.classList.contains('active') || false;
    }

    destroy() {
        if (!this.isInitialized) return;

        // Remove hamburger listener
        if (this.hamburger && this.boundHandlers.has('toggle')) {
            this.hamburger.removeEventListener('click', this.boundHandlers.get('toggle'));
        }

        // Remove overlay listener
        if (this.overlay && this.boundHandlers.has('close')) {
            this.overlay.removeEventListener('click', this.boundHandlers.get('close'));
        }

        // Remove menu link listeners
        this.menuLinks.forEach((link, index) => {
            const key = `link-${index}`;
            if (this.boundHandlers.has(key)) {
                link.removeEventListener('click', this.boundHandlers.get(key));
            }
        });

        // Remove document keydown listener
        if (this.boundHandlers.has('keydown')) {
            document.removeEventListener('keydown', this.boundHandlers.get('keydown'));
        }

        // Remove window resize listener
        if (this.boundHandlers.has('resize')) {
            window.removeEventListener('resize', this.boundHandlers.get('resize'));
        }

        this.boundHandlers.clear();
        this.isInitialized = false;
    }
}

// Initialize on page load
export function initMobileMenu() {
    return new MobileMenu();
}

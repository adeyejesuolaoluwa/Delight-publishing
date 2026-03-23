/**
 * Animations Module
 * Handles scroll-triggered animations using Intersection Observer
 */

export class AnimationObserver {
    constructor(options = {}) {
        this.selector = options.selector || '[class*="animate-"]';
        this.rootMargin = options.rootMargin || '0px 0px -50px 0px';
        this.threshold = options.threshold || 0.1;

        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: this.threshold,
                rootMargin: this.rootMargin
            }
        );

        this.init();
    }

    init() {
        const elements = document.querySelectorAll(this.selector);
        elements.forEach(element => {
            // Skip elements that already have animations applied
            if (!element.style.opacity || element.style.opacity === '1') {
                this.observer.observe(element);
            }
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation by setting opacity to 1
                entry.target.style.opacity = '1';
                
                // Stop observing this element
                this.observer.unobserve(entry.target);
            }
        });
    }

    observe(element) {
        if (element) {
            this.observer.observe(element);
        }
    }

    unobserve(element) {
        if (element) {
            this.observer.unobserve(element);
        }
    }

    disconnect() {
        this.observer.disconnect();
    }
}

/**
 * Parallax effect handler
 */
export class ParallaxEffect {
    constructor(options = {}) {
        this.selector = options.selector || '.hero-bg';
        this.speed = options.speed || 0.5;
        this.element = document.querySelector(this.selector);
        this.scrollHandler = null;

        if (this.element) {
            this.init();
        }
    }

    init() {
        // Store handler reference for proper cleanup
        this.scrollHandler = () => this.update();
        window.addEventListener('scroll', this.scrollHandler);
    }

    update() {
        const scrollPosition = window.scrollY;
        
        // Only apply parallax if element is visible
        if (scrollPosition < window.innerHeight) {
            this.element.style.transform = `translateY(${scrollPosition * this.speed}px)`;
        }
    }

    destroy() {
        if (this.scrollHandler) {
            window.removeEventListener('scroll', this.scrollHandler);
            this.scrollHandler = null;
        }
    }
}

/**
 * Counter animation for stats
 */
export class CounterAnimation {
    constructor(element, options = {}) {
        this.element = element;
        this.target = parseInt(element.textContent) || options.target || 0;
        this.duration = options.duration || 2000;
        this.easing = options.easing || 'easeOutQuad';
        this.hasAnimated = false;

        this.observeElement();
    }

    observeElement() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animate();
                    this.hasAnimated = true;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(this.element);
    }

    animate() {
        const startTime = performance.now();
        const startValue = 0;

        const animationFrame = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / this.duration, 1);

            const easeProgress = this.ease(progress, this.easing);
            const currentValue = Math.floor(easeProgress * (this.target - startValue) + startValue);

            this.element.textContent = currentValue.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(animationFrame);
            }
        };

        requestAnimationFrame(animationFrame);
    }

    ease(progress, easing) {
        switch (easing) {
            case 'easeInQuad':
                return progress * progress;
            case 'easeOutQuad':
                return progress * (2 - progress);
            case 'easeInOutQuad':
                return progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
            case 'easeOutCubic':
                return 1 + (--progress) * progress * progress;
            default:
                return progress;
        }
    }
}

// Initialize animations
export function initAnimations(options = {}) {
    return new AnimationObserver(options);
}

// Initialize parallax
export function initParallax(options = {}) {
    return new ParallaxEffect(options);
}

// Initialize counters
export function initCounters(selector = '.counter') {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => new CounterAnimation(element));
}

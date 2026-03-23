/**
 * Carousel Module
 * Handles testimonial carousel functionality
 */

import { getElement, getElements, addClass, removeClass } from './utils.js';

export class Carousel {
    constructor(options = {}) {
        this.selector = options.selector || '.testimonial-card';
        this.indicatorSelector = options.indicatorSelector || '.carousel-indicator';
        this.prevBtnSelector = options.prevBtnSelector || '.carousel-btn:nth-of-type(1)';
        this.nextBtnSelector = options.nextBtnSelector || '.carousel-btn:nth-of-type(2)';
        this.autoSlideDelay = options.autoSlideDelay || 6000;

        this.cards = getElements(this.selector);
        this.indicators = getElements(this.indicatorSelector);
        this.prevBtn = getElement(this.prevBtnSelector);
        this.nextBtn = getElement(this.nextBtnSelector);

        this.currentIndex = 0;
        this.autoSlideInterval = null;
        this.boundHandlers = new Map();

        if (this.cards.length > 0) {
            this.init();
        }
    }

    init() {
        // Store handler references for cleanup
        const prevHandler = () => this.prev();
        const nextHandler = () => this.next();
        this.boundHandlers.set('prev', prevHandler);
        this.boundHandlers.set('next', nextHandler);

        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', prevHandler);
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', nextHandler);
        }

        // Indicator click listeners with stored handlers
        this.indicators.forEach((indicator, index) => {
            const handler = () => this.goTo(index);
            this.boundHandlers.set(`indicator-${index}`, handler);
            indicator.addEventListener('click', handler);
        });

        // Auto-slide
        this.startAutoSlide();

        // Pause auto-slide on interaction
        this.cards.forEach((card, cardIndex) => {
            const mouseEnterHandler = () => this.pauseAutoSlide();
            const mouseLeaveHandler = () => this.startAutoSlide();
            const touchStartHandler = () => this.pauseAutoSlide();
            const touchEndHandler = () => this.startAutoSlide();

            this.boundHandlers.set(`card-mouseenter-${cardIndex}`, mouseEnterHandler);
            this.boundHandlers.set(`card-mouseleave-${cardIndex}`, mouseLeaveHandler);
            this.boundHandlers.set(`card-touchstart-${cardIndex}`, touchStartHandler);
            this.boundHandlers.set(`card-touchend-${cardIndex}`, touchEndHandler);

            card.addEventListener('mouseenter', mouseEnterHandler);
            card.addEventListener('mouseleave', mouseLeaveHandler);
            card.addEventListener('touchstart', touchStartHandler);
            card.addEventListener('touchend', touchEndHandler);
        });

        // Show first card
        this.show(0);
    }

    show(index) {
        // Validate index
        if (index < 0 || index >= this.cards.length) return;

        // Remove active class from all
        this.cards.forEach(card => removeClass(card, 'active'));
        this.indicators.forEach(indicator => removeClass(indicator, 'active'));

        // Add active class to current
        addClass(this.cards[index], 'active');
        if (this.indicators[index]) {
            addClass(this.indicators[index], 'active');
        }

        this.currentIndex = index;
    }

    next() {
        const nextIndex = (this.currentIndex + 1) % this.cards.length;
        this.show(nextIndex);
        this.resetAutoSlide();
    }

    prev() {
        const prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.show(prevIndex);
        this.resetAutoSlide();
    }

    goTo(index) {
        this.show(index);
        this.resetAutoSlide();
    }

    startAutoSlide() {
        if (this.autoSlideInterval) return;
        this.autoSlideInterval = setInterval(() => this.next(), this.autoSlideDelay);
    }

    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    resetAutoSlide() {
        this.pauseAutoSlide();
        this.startAutoSlide();
    }

    destroy() {
        this.pauseAutoSlide();

        // Remove all stored event listeners
        if (this.prevBtn && this.boundHandlers.has('prev')) {
            this.prevBtn.removeEventListener('click', this.boundHandlers.get('prev'));
        }

        if (this.nextBtn && this.boundHandlers.has('next')) {
            this.nextBtn.removeEventListener('click', this.boundHandlers.get('next'));
        }

        // Remove indicator listeners
        this.indicators.forEach((indicator, index) => {
            const key = `indicator-${index}`;
            if (this.boundHandlers.has(key)) {
                indicator.removeEventListener('click', this.boundHandlers.get(key));
            }
        });

        // Remove card listeners
        this.cards.forEach((card, cardIndex) => {
            const keys = [`card-mouseenter-${cardIndex}`, `card-mouseleave-${cardIndex}`, `card-touchstart-${cardIndex}`, `card-touchend-${cardIndex}`];
            const handlers = [this.boundHandlers.get(keys[0]), this.boundHandlers.get(keys[1]), this.boundHandlers.get(keys[2]), this.boundHandlers.get(keys[3])];
            
            if (handlers[0]) card.removeEventListener('mouseenter', handlers[0]);
            if (handlers[1]) card.removeEventListener('mouseleave', handlers[1]);
            if (handlers[2]) card.removeEventListener('touchstart', handlers[2]);
            if (handlers[3]) card.removeEventListener('touchend', handlers[3]);
        });

        this.boundHandlers.clear();
    }
}

// Initialize carousel
export function initCarousel(options = {}) {
    return new Carousel(options);
}

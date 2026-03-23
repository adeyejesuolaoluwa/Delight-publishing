/**
 * Utility functions for general use
 */

/**
 * Smoothly scroll to a specific section
 * @param {string} id - Element ID to scroll to
 */
export function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        element.focus();
    }
}

/**
 * Add event listener with cleanup
 * @param {HTMLElement} element - Target element
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 * @returns {Function} Cleanup function
 */
export function addEventListener(element, event, handler) {
    if (!element) return () => {};
    element.addEventListener(event, handler);
    return () => element.removeEventListener(event, handler);
}

/**
 * Toggle class on element
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name to toggle
 */
export function toggleClass(element, className) {
    if (!element) return;
    element.classList.toggle(className);
}

/**
 * Add class to element
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name to add
 */
export function addClass(element, className) {
    if (!element) return;
    element.classList.add(className);
}

/**
 * Remove class from element
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name to remove
 */
export function removeClass(element, className) {
    if (!element) return;
    element.classList.remove(className);
}

/**
 * Check if element has class
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name to check
 * @returns {boolean}
 */
export function hasClass(element, className) {
    if (!element) return false;
    return element.classList.contains(className);
}

/**
 * Debounce function to limit execution frequency
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in ms
 * @returns {Function} Debounced function
 */
export function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Throttle function to limit execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} delay - Delay in ms
 * @returns {Function} Throttled function
 */
export function throttle(func, delay = 300) {
    let lastRun = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastRun >= delay) {
            func(...args);
            lastRun = now;
        }
    };
}

/**
 * Get element(s) safely
 * @param {string} selector - CSS selector
 * @param {HTMLElement} parent - Parent element (defaults to document)
 * @returns {HTMLElement|NodeList} Element or NodeList
 */
export function getElement(selector, parent = document) {
    return parent.querySelector(selector);
}

export function getElements(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean}
 */
export function isInViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
    );
}

/**
 * Append element with HTML
 * @param {HTMLElement} element - Target element
 * @param {string} html - HTML string
 */
export function setHTML(element, html) {
    if (!element) return;
    element.innerHTML = html;
}

/**
 * Get computed style value
 * @param {HTMLElement} element - Target element
 * @param {string} property - CSS property
 * @returns {string}
 */
export function getComputedStyle$(element, property) {
    if (!element) return '';
    return window.getComputedStyle(element).getPropertyValue(property);
}

/**
 * Format number with thousand separators
 * @param {number} num - Number to format
 * @returns {string}
 */
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Create element shorthand
 * @param {string} tag - HTML tag
 * @param {object} attrs - Attributes
 * @param {string} html - Inner HTML
 * @returns {HTMLElement}
 */
export function createElement(tag, attrs = {}, html = '') {
    const element = document.createElement(tag);
    Object.assign(element, attrs);
    if (html) element.innerHTML = html;
    return element;
}

/**
 * Log analytics event (placeholder for actual tracking)
 * @param {string} event - Event name
 * @param {object} data - Event data
 */
export function logEvent(event, data = {}) {
    if (window.gtag) {
        window.gtag('event', event, data);
    } else {
        console.log(`Event: ${event}`, data);
    }
}

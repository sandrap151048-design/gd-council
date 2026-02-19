/**
 * Animation Configuration & Utilities
 * Production-ready animation system for smooth, professional interactions
 * Inspired by Dribbble & Awwwards best practices
 */

// ============================================
// ANIMATION CONSTANTS
// ============================================

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
};

export const EASING = {
  // Smooth, professional easing curves
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  smoothIn: 'cubic-bezier(0.4, 0, 1, 1)',
  smoothOut: 'cubic-bezier(0, 0, 0.2, 1)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
};

export const STAGGER_DELAY = {
  fast: 50,
  normal: 100,
  slow: 150,
};

// ============================================
// SCROLL REVEAL OBSERVER
// ============================================

/**
 * Initialize scroll-based reveal animations
 * Uses Intersection Observer for performance
 */
export const initScrollReveal = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Skip animations if user prefers reduced motion
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const delay = element.dataset.delay || 0;
        
        setTimeout(() => {
          element.classList.add('animate-in');
        }, delay);
        
        // Unobserve after animation to improve performance
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// ============================================
// STAGGER ANIMATION UTILITY
// ============================================

/**
 * Apply staggered animation delays to child elements
 * @param {string} parentSelector - Parent element selector
 * @param {number} delayIncrement - Delay between each child (ms)
 */
export const applyStagger = (parentSelector, delayIncrement = 100) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;

  const children = parent.querySelectorAll('[data-animate]');
  children.forEach((child, index) => {
    child.dataset.delay = index * delayIncrement;
  });
};

// ============================================
// PARALLAX SCROLL EFFECT
// ============================================

/**
 * Subtle parallax effect for backgrounds
 * @param {string} selector - Element selector
 * @param {number} speed - Parallax speed (0.1 - 0.5 recommended)
 */
export const initParallax = (selector, speed = 0.3) => {
  const elements = document.querySelectorAll(selector);
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      
      // Only apply parallax when element is in viewport
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    });
  };

  // Use requestAnimationFrame for smooth 60fps
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
};

// ============================================
// NAVBAR SCROLL BEHAVIOR
// ============================================

/**
 * Smart navbar hide/show on scroll
 */
export const initNavbarScroll = () => {
  let lastScroll = 0;
  const navbar = document.querySelector('nav');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navbar.classList.add('scroll-down');
      navbar.classList.remove('scroll-up');
    } else if (currentScroll < lastScroll) {
      // Scrolling up
      navbar.classList.remove('scroll-down');
      navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
  });
};

// ============================================
// PAGE TRANSITION
// ============================================

/**
 * Smooth page transition effect
 */
export const pageTransition = {
  enter: () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.3s ease-in-out';
      document.body.style.opacity = '1';
    }, 10);
  },
  
  exit: (callback) => {
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    document.body.style.opacity = '0';
    setTimeout(callback, 300);
  },
};

// ============================================
// CURSOR FOLLOW EFFECT (OPTIONAL)
// ============================================

/**
 * Premium cursor follow effect for interactive elements
 */
export const initCursorFollow = () => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursor = () => {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  };
  
  animateCursor();

  // Expand cursor on hover over interactive elements
  document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
};

// ============================================
// COUNTER ANIMATION
// ============================================

/**
 * Animate numbers counting up
 * @param {HTMLElement} element - Element containing the number
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
export const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

// ============================================
// FLOATING SHAPES ANIMATION
// ============================================

/**
 * Create floating background shapes
 */
export const createFloatingShapes = (container, count = 5) => {
  const containerEl = document.querySelector(container);
  if (!containerEl) return;

  for (let i = 0; i < count; i++) {
    const shape = document.createElement('div');
    shape.className = 'floating-shape';
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.animationDelay = `${Math.random() * 5}s`;
    shape.style.animationDuration = `${15 + Math.random() * 10}s`;
    containerEl.appendChild(shape);
  }
};

// ============================================
// EXPORT ALL UTILITIES
// ============================================

const animations = {
  ANIMATION_DURATION,
  EASING,
  STAGGER_DELAY,
  initScrollReveal,
  applyStagger,
  initParallax,
  initNavbarScroll,
  pageTransition,
  initCursorFollow,
  animateCounter,
  createFloatingShapes,
};

export default animations;

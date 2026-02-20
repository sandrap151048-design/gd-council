'use client';

import { useEffect, useRef } from 'react';

/**
 * AnimatedSection Component
 * Wrapper component for scroll-based reveal animations
 * 
 * @param {string} animation - Animation type: 'fade', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale', 'zoom'
 * @param {number} delay - Animation delay in milliseconds
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Child elements
 */
export default function AnimatedSection({ 
  animation = 'fade-up', 
  delay = 0, 
  className = '',
  children 
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      data-animate={animation}
      className={className}
    >
      {children}
    </div>
  );
}

/**
 * AnimatedText Component
 * Character-by-character text reveal animation
 */
export function AnimatedText({ text, delay = 0, className = '' }) {
  const characters = text.split('');
  
  return (
    <span className={className}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: 'smoothFadeIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
            animationDelay: `${delay + index * 30}ms`,
            opacity: 0,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

/**
 * AnimatedCounter Component
 * Animated number counter
 */
export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = '' 
}) {
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element || hasAnimated.current) return;

    const animateCounter = (element, target, duration) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          element.textContent = `${prefix}${Math.floor(current)}${suffix}`;
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = `${prefix}${target}${suffix}`;
        }
      };

      updateCounter();
    };

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounter(element, end, duration);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end, duration, prefix, suffix]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

/**
 * StaggeredList Component
 * List with staggered animation for children
 */
export function StaggeredList({ 
  children, 
  staggerDelay = 100, 
  animation = 'fade-up',
  className = '' 
}) {
  return (
    <div className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <AnimatedSection
            key={index}
            animation={animation}
            delay={index * staggerDelay}
          >
            {child}
          </AnimatedSection>
        ))
      ) : (
        <AnimatedSection animation={animation}>
          {children}
        </AnimatedSection>
      )}
    </div>
  );
}

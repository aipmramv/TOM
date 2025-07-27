/**
 * Smooth scrolling utilities for better performance and user experience
 */

// Easing functions for smooth animations
export const easing = {
  easeInOut: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  spring: [0.25, 0.46, 0.45, 0.94] as const,
};

// Optimized animation configurations
export const optimizedTransitions = {
  fast: {
    duration: 0.3,
    ease: easing.easeOut,
  },
  medium: {
    duration: 0.5,
    ease: easing.easeInOut,
  },
  slow: {
    duration: 0.8,
    ease: easing.spring,
  },
};

// Scroll behavior configurations
export const scrollConfig = {
  smooth: {
    behavior: 'smooth' as ScrollBehavior,
    block: 'start' as ScrollLogicalPosition,
    inline: 'nearest' as ScrollLogicalPosition,
  },
  instant: {
    behavior: 'instant' as ScrollBehavior,
    block: 'start' as ScrollLogicalPosition,
    inline: 'nearest' as ScrollLogicalPosition,
  },
};

// Performance-optimized intersection observer options
export const observerOptions = {
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.1,
};

// Smooth scroll to element
export const smoothScrollTo = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Optimized scroll listener with throttling
export const createOptimizedScrollListener = (callback: () => void, throttleMs: number = 16) => {
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  return handleScroll;
};

// Performance monitoring for animations
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Animation variants for different scenarios
export const animationVariants = {
  // For elements that appear on scroll
  fadeInOnScroll: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: optimizedTransitions.medium,
  },
  
  // For page transitions
  pageTransition: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: optimizedTransitions.fast,
  },
  
  // For hover effects
  hoverScale: {
    whileHover: { 
      scale: 1.02,
      transition: { duration: 0.2, ease: easing.easeOut }
    },
    whileTap: { 
      scale: 0.98,
      transition: { duration: 0.1, ease: easing.easeOut }
    },
  },
  
  // For stagger animations
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  
  // For loading states
  skeleton: {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: easing.easeInOut,
      },
    },
  },
};
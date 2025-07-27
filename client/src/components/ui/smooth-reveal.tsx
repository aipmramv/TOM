import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animationVariants, shouldReduceMotion } from "@/lib/smooth-scroll";

interface SmoothRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

export const SmoothReveal = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  once = true 
}: SmoothRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    margin: "0px 0px -100px 0px",
    amount: 0.3
  });

  // Respect user's motion preferences
  const reduceMotion = shouldReduceMotion();

  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
  };

  const variants = {
    hidden: reduceMotion ? { opacity: 0 } : directionVariants[direction],
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0.2 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`will-change-transform ${className}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

interface SmoothStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const SmoothStagger = ({ 
  children, 
  className = "", 
  staggerDelay = 0.1 
}: SmoothStaggerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -100px 0px",
    amount: 0.3
  });

  const reduceMotion = shouldReduceMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: reduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`will-change-transform ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
};
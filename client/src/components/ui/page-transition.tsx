import { motion } from "framer-motion";
import { shouldReduceMotion } from "@/lib/smooth-scroll";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  const reduceMotion = shouldReduceMotion();

  const variants = {
    initial: reduceMotion 
      ? { opacity: 0 } 
      : { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: reduceMotion 
      ? { opacity: 0 } 
      : { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      className={`gpu-optimized ${className}`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
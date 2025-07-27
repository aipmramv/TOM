import { motion } from "framer-motion";

interface FloatingShapesProps {
  className?: string;
}

export default function FloatingShapes({ className = "" }: FloatingShapesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-amber-400/20 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -2,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400/20 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -4,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-400/20 rounded-full"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -1,
        }}
      />
    </div>
  );
}

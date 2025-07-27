import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-blue-400/20 rounded-full"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-full"
        animate={{
          y: [20, -20, 20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-8 h-8 bg-amber-400/20 rounded-full"
        animate={{
          y: [-15, 15, -15],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-6 h-6 bg-green-400/20 rounded-full"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
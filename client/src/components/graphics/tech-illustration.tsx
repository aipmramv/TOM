import { motion } from "framer-motion";

export default function TechIllustration() {
  return (
    <div className="relative w-full h-96">
      {/* Background geometric shapes */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-3xl"
        initial={{ rotate: 6, opacity: 0 }}
        animate={{ rotate: 6, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div
        className="absolute inset-4 bg-gradient-to-br from-amber-400/40 to-orange-500/40 rounded-3xl"
        initial={{ rotate: -3, opacity: 0 }}
        animate={{ rotate: -3, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.div
        className="absolute inset-8 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Central rocket icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1,
          }}
        >
          <svg
            className="w-16 h-16 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-12 right-8 w-3 h-3 bg-blue-400 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-16 left-12 w-2 h-2 bg-amber-400 rounded-full"
        animate={{
          y: [0, -10, 0],
          x: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -2,
        }}
      />
    </div>
  );
}

import { motion } from "framer-motion";

export default function TeamIllustration() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center overflow-hidden">
      {/* Floating team member representations */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 bg-blue-400 rounded-full opacity-80"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-12 right-12 w-12 h-12 bg-amber-400 rounded-full opacity-80"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -1,
        }}
      />
      
      <motion.div
        className="absolute bottom-12 left-12 w-20 h-20 bg-purple-400 rounded-full opacity-80"
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -2,
        }}
      />
      
      <motion.div
        className="absolute bottom-8 right-8 w-14 h-14 bg-green-400 rounded-full opacity-80"
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -3,
        }}
      />

      {/* Central team icon */}
      <motion.div
        className="text-center z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-16 h-16 text-slate-600 mx-auto mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 4C18.2091 4 20 5.79086 20 8C20 10.2091 18.2091 12 16 12C13.7909 12 12 10.2091 12 8C12 5.79086 13.7909 4 16 4ZM8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6ZM8 13C10.67 13 16 14.33 16 17V20H0V17C0 14.33 5.33 13 8 13ZM16 13.43C16.5 13.43 17.41 13.54 18.5 13.77C20.66 14.26 22 15.22 22 17V20H18V17C18 15.9 17.5 14.9 16.64 14.1C16.43 13.72 16.21 13.56 16 13.43Z"/>
          </svg>
        </motion.div>
        <div className="text-slate-600 font-semibold">Our Expert Team</div>
      </motion.div>

      {/* Connecting lines animation */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 100 100 Q 200 50 300 100"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.path
          d="M 300 300 Q 200 250 100 300"
          stroke="rgba(168, 85, 247, 0.3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

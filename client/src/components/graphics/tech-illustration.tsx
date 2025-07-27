import { motion } from "framer-motion";

export default function TechIllustration() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <motion.circle
          cx="200"
          cy="150"
          r="120"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Laptop */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <rect
            x="140"
            y="130"
            width="120"
            height="80"
            rx="8"
            fill="rgba(255,255,255,0.9)"
            stroke="rgba(59,130,246,0.5)"
            strokeWidth="2"
          />
          <rect
            x="150"
            y="140"
            width="100"
            height="60"
            rx="4"
            fill="rgba(59,130,246,0.1)"
          />
          {/* Screen lines */}
          <line x1="160" y1="150" x2="240" y2="150" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
          <line x1="160" y1="160" x2="220" y2="160" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
          <line x1="160" y1="170" x2="230" y2="170" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
        </motion.g>

        {/* Mobile Phone */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <rect
            x="100"
            y="100"
            width="40"
            height="70"
            rx="8"
            fill="rgba(255,255,255,0.9)"
            stroke="rgba(168,85,247,0.5)"
            strokeWidth="2"
          />
          <rect
            x="108"
            y="110"
            width="24"
            height="40"
            rx="2"
            fill="rgba(168,85,247,0.1)"
          />
          <circle cx="120" cy="160" r="4" fill="rgba(168,85,247,0.3)" />
        </motion.g>

        {/* Cloud */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ellipse cx="280" cy="80" rx="25" ry="15" fill="rgba(255,255,255,0.8)" />
          <ellipse cx="290" cy="85" rx="20" ry="12" fill="rgba(255,255,255,0.8)" />
          <ellipse cx="270" cy="90" rx="30" ry="18" fill="rgba(255,255,255,0.8)" />
        </motion.g>

        {/* Floating Elements */}
        <motion.circle
          cx="320"
          cy="120"
          r="8"
          fill="rgba(245,158,11,0.6)"
          animate={{
            y: [-5, 5, -5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.rect
          x="85"
          y="220"
          width="12"
          height="12"
          rx="2"
          fill="rgba(16,185,129,0.6)"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.polygon
          points="300,200 310,220 290,220"
          fill="rgba(239,68,68,0.6)"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Connection Lines */}
        <motion.g
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <path
            d="M 140 150 Q 100 120 120 100"
            stroke="rgba(59,130,246,0.4)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <path
            d="M 260 150 Q 300 120 280 90"
            stroke="rgba(59,130,246,0.4)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </motion.g>
      </svg>
    </div>
  );
}
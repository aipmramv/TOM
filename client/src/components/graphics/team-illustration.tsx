import { motion } from "framer-motion";

export default function TeamIllustration() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        className="w-full h-full"
      >
        {/* Background */}
        <motion.rect
          x="50"
          y="50"
          width="300"
          height="200"
          rx="20"
          fill="rgba(59,130,246,0.1)"
          stroke="rgba(59,130,246,0.2)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Team Members */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Person 1 */}
          <circle cx="130" cy="130" r="20" fill="rgba(59,130,246,0.8)" />
          <rect x="120" y="150" width="20" height="40" rx="10" fill="rgba(59,130,246,0.6)" />
          
          {/* Person 2 */}
          <circle cx="200" cy="120" r="22" fill="rgba(168,85,247,0.8)" />
          <rect x="188" y="142" width="24" height="45" rx="12" fill="rgba(168,85,247,0.6)" />
          
          {/* Person 3 */}
          <circle cx="270" cy="135" r="18" fill="rgba(16,185,129,0.8)" />
          <rect x="262" y="153" width="16" height="35" rx="8" fill="rgba(16,185,129,0.6)" />
        </motion.g>

        {/* Meeting Table */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="80"
          ry="20"
          fill="rgba(71,85,105,0.2)"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Laptops on table */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <rect x="150" y="190" width="30" height="20" rx="2" fill="rgba(71,85,105,0.6)" />
          <rect x="220" y="185" width="25" height="18" rx="2" fill="rgba(71,85,105,0.6)" />
        </motion.g>

        {/* Speech Bubbles */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <ellipse cx="110" cy="100" rx="20" ry="12" fill="rgba(255,255,255,0.9)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
          <polygon points="115,108 120,115 110,112" fill="rgba(255,255,255,0.9)" />
          <text x="110" y="105" textAnchor="middle" fontSize="8" fill="rgba(59,130,246,0.8)">Ideas</text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <ellipse cx="280" cy="90" rx="25" ry="15" fill="rgba(255,255,255,0.9)" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
          <polygon points="270,102 265,110 275,108" fill="rgba(255,255,255,0.9)" />
          <text x="280" y="95" textAnchor="middle" fontSize="8" fill="rgba(168,85,247,0.8)">Solutions</text>
        </motion.g>

        {/* Floating Icons */}
        <motion.g
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle cx="320" cy="80" r="6" fill="rgba(245,158,11,0.6)" />
          <path d="M318,78 L322,78 M320,76 L320,80 M318,82 L322,82" stroke="white" strokeWidth="1" />
        </motion.g>

        <motion.g
          animate={{
            y: [3, -3, 3],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <rect x="85" y="75" width="12" height="12" rx="2" fill="rgba(239,68,68,0.6)" />
          <circle cx="91" cy="81" r="2" fill="white" />
        </motion.g>
      </svg>
    </div>
  );
}
import { motion } from "framer-motion";

export default function AITechIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        className="w-full h-full max-w-lg"
      >
        {/* Background Glow */}
        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.2)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
          </radialGradient>
          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background Glow Effect */}
        <motion.circle
          cx="250"
          cy="250"
          r="200"
          fill="url(#glowGradient)"
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central AI Brain */}
        <motion.g
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <motion.circle
            cx="250"
            cy="250"
            r="60"
            fill="url(#aiGradient)"
            filter="url(#glow)"
            animate={{ r: [60, 65, 60] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Neural Network Pattern */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
              <motion.line
                key={angle}
                x1="250"
                y1="250"
                x2={250 + 45 * Math.cos(angle * Math.PI / 180)}
                y2={250 + 45 * Math.sin(angle * Math.PI / 180)}
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            ))}
          </motion.g>
        </motion.g>

        {/* Orbiting Tech Nodes */}
        {[
          { angle: 0, icon: "🧠", label: "AI", radius: 120 },
          { angle: 72, icon: "🤖", label: "ML", radius: 120 },
          { angle: 144, icon: "☁️", label: "Cloud", radius: 120 },
          { angle: 216, icon: "📱", label: "Mobile", radius: 120 },
          { angle: 288, icon: "💻", label: "Web", radius: 120 }
        ].map((node, index) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 120 * Math.cos((node.angle + 360) * Math.PI / 180),
              y: 120 * Math.sin((node.angle + 360) * Math.PI / 180)
            }}
            transition={{ 
              duration: 2, 
              delay: 0.5 + index * 0.2,
              x: { duration: 8, repeat: Infinity, ease: "linear" },
              y: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          >
            <motion.circle
              cx="250"
              cy="250"
              r="25"
              fill="rgba(255,255,255,0.9)"
              stroke="url(#aiGradient)"
              strokeWidth="3"
              filter="url(#glow)"
              whileHover={{ scale: 1.2 }}
            />
            <text
              x="250"
              y="255"
              textAnchor="middle"
              className="text-sm font-bold fill-slate-700"
            >
              {node.icon}
            </text>
          </motion.g>
        ))}

        {/* Data Flow Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {/* Animated data packets */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              r="3"
              fill="#10B981"
              initial={{ 
                cx: 250 + 120 * Math.cos(i * 72 * Math.PI / 180),
                cy: 250 + 120 * Math.sin(i * 72 * Math.PI / 180)
              }}
              animate={{
                cx: [
                  250 + 120 * Math.cos(i * 72 * Math.PI / 180),
                  250,
                  250 + 120 * Math.cos(((i + 1) % 5) * 72 * Math.PI / 180)
                ],
                cy: [
                  250 + 120 * Math.sin(i * 72 * Math.PI / 180),
                  250,
                  250 + 120 * Math.sin(((i + 1) % 5) * 72 * Math.PI / 180)
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>

        {/* Outer Ring Elements */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[
            { angle: 0, symbol: "⚡", color: "#F59E0B" },
            { angle: 60, symbol: "🔒", color: "#EF4444" },
            { angle: 120, symbol: "📊", color: "#8B5CF6" },
            { angle: 180, symbol: "🌐", color: "#3B82F6" },
            { angle: 240, symbol: "💡", color: "#10B981" },
            { angle: 300, symbol: "🚀", color: "#F97316" }
          ].map((item, index) => (
            <motion.g
              key={item.angle}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 + index * 0.1 }}
            >
              <motion.circle
                cx={250 + 180 * Math.cos(item.angle * Math.PI / 180)}
                cy={250 + 180 * Math.sin(item.angle * Math.PI / 180)}
                r="20"
                fill="rgba(255,255,255,0.1)"
                stroke={item.color}
                strokeWidth="2"
                animate={{ 
                  r: [20, 25, 20],
                  strokeOpacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
              <text
                x={250 + 180 * Math.cos(item.angle * Math.PI / 180)}
                y={250 + 180 * Math.sin(item.angle * Math.PI / 180) + 5}
                textAnchor="middle"
                className="text-xs font-bold"
                fill={item.color}
              >
                {item.symbol}
              </text>
            </motion.g>
          ))}
        </motion.g>

        {/* Binary Code Animation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 3 }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.text
              key={i}
              x={50 + (i % 10) * 40}
              y={50 + Math.floor(i / 10) * 30}
              className="text-xs font-mono"
              fill="rgba(59, 130, 246, 0.4)"
              animate={{ 
                opacity: [0, 1, 0],
                y: [50 + Math.floor(i / 10) * 30, 30 + Math.floor(i / 10) * 30]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.text>
          ))}
        </motion.g>

        {/* Connection Lines Between Nodes */}
        <motion.g
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.line
              key={i}
              x1={250 + 120 * Math.cos(i * 72 * Math.PI / 180)}
              y1={250 + 120 * Math.sin(i * 72 * Math.PI / 180)}
              x2={250 + 120 * Math.cos(((i + 1) % 5) * 72 * Math.PI / 180)}
              y2={250 + 120 * Math.sin(((i + 1) % 5) * 72 * Math.PI / 180)}
              stroke="url(#aiGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, -10] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
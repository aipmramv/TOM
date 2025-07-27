import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      viewport={{ once: true }}
    >
      <Card className={`transition-shadow hover:shadow-xl ${className}`}>
        <CardContent className="p-0">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}

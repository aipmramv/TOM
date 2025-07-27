import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import TechIllustration from "@/components/graphics/tech-illustration";
import FloatingShapes from "@/components/ui/floating-shapes";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-90" />
      <FloatingShapes />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Business through{" "}
              <span className="text-amber-400">Digital Innovation</span>
            </motion.h1>
            
            <motion.p
              className="text-xl mb-8 text-blue-100 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We are your trusted partner for Web & Mobile Development, Digital
              Marketing, ITES-BPO, Custom Software, Data Analytics, and IT
              Consulting. Let's build the future of your business.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Consultation
                </Button>
              </Link>
              
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm border-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TechIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

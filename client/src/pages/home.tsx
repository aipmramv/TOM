import { motion } from "framer-motion";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import AboutSection from "@/components/sections/about-section";
import IndustriesSection from "@/components/sections/industries-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <IndustriesSection />
      <TechStackSection />
      <ContactSection />
    </motion.div>
  );
}

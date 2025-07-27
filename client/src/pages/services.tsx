import { motion } from "framer-motion";
import { Globe, Smartphone, Megaphone, Headphones, Settings, BarChart3, Brain } from "lucide-react";
import AnimatedCard from "@/components/ui/animated-card";
import { staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Globe,
    title: "Website & Web Application Development",
    description: "Create stunning, responsive websites and powerful web applications that drive your business forward.",
    features: [
      "Responsive Website Design",
      "Custom Web Portals",
      "CMS Development (WordPress, Drupal)",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "Modern Tech Stack (React, Node.js, Laravel)",
    ],
    color: "from-blue-50 to-blue-100",
    iconColor: "bg-blue-500",
    borderColor: "border-blue-200",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS App Development (Swift)",
      "Android App Development (Kotlin)",
      "Cross-platform Apps (Flutter, React Native)",
      "Enterprise Mobile Solutions",
      "Customer-facing Applications",
      "App Store Optimization",
    ],
    color: "from-purple-50 to-purple-100",
    iconColor: "bg-purple-500",
    borderColor: "border-purple-200",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
    features: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing",
      "Pay-Per-Click Advertising (PPC)",
      "Email Marketing Campaigns",
      "Content Strategy & Creation",
      "Brand Management",
      "Online Reputation Management",
    ],
    color: "from-amber-50 to-amber-100",
    iconColor: "bg-amber-500",
    borderColor: "border-amber-200",
  },
  {
    icon: Headphones,
    title: "ITES & BPO Services",
    description: "Professional outsourcing services to streamline your operations and reduce costs.",
    features: [
      "Customer Support (Voice & Non-Voice)",
      "Technical Support Services",
      "Data Entry & Processing",
      "Image Tagging & Content Moderation",
      "Form Processing & Documentation",
      "Virtual Assistant Services",
      "Order Processing & Management",
      "Back Office Operations",
    ],
    color: "from-green-50 to-green-100",
    iconColor: "bg-green-500",
    borderColor: "border-green-200",
  },
  {
    icon: Settings,
    title: "Custom Application Development",
    description: "Tailored software solutions designed to meet your specific business requirements.",
    features: [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Inventory Management Systems",
      "Human Resource Management (HRMS)",
      "Workflow Automation Tools",
      "API Development & Integration",
      "Cloud-based Solutions",
      "Legacy System Modernization",
    ],
    color: "from-red-50 to-red-100",
    iconColor: "bg-red-500",
    borderColor: "border-red-200",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description: "Transform your data into actionable insights for better decision-making.",
    features: [
      "Interactive Dashboards (Power BI, Tableau)",
      "Business Intelligence Solutions",
      "Predictive Analytics & Forecasting",
      "Data Visualization & Reporting",
      "Data Engineering & ETL Processes",
      "Data Cleaning & Preparation",
      "Performance Analytics",
      "Real-time Monitoring Systems",
    ],
    color: "from-indigo-50 to-indigo-100",
    iconColor: "bg-indigo-500",
    borderColor: "border-indigo-200",
  },
  {
    icon: Brain,
    title: "IT Consulting",
    description: "Strategic IT guidance to help you navigate digital transformation and technology adoption.",
    features: [
      "IT Strategy & Roadmapping",
      "Digital Transformation Consulting",
      "Cloud Adoption (AWS, Azure, GCP)",
      "Cybersecurity Assessment",
      "Infrastructure Planning",
      "Technology Architecture Design",
      "IT Project Management",
      "Vendor Selection & Management",
    ],
    color: "from-teal-50 to-teal-100",
    iconColor: "bg-teal-500",
    borderColor: "border-teal-200",
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive digital solutions designed to accelerate your business growth
            and drive innovation across all aspects of your operations.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <AnimatedCard key={service.title} delay={index * 0.1}>
                <div className={`bg-gradient-to-br ${service.color} p-8 rounded-xl border ${service.borderColor} h-full`}>
                  <motion.div
                    className={`w-16 h-16 ${service.iconColor} rounded-xl mb-6 flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <service.icon className="text-white text-2xl" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-600">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our services can help transform your business and drive growth.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.a>
            <motion.a
              href="/portfolio"
              className="bg-white hover:bg-gray-50 text-slate-800 px-8 py-4 rounded-lg font-semibold border border-slate-300 transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

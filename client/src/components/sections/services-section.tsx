import { motion } from "framer-motion";
import { Globe, Smartphone, Megaphone, Headphones, Settings, BarChart3 } from "lucide-react";
import AnimatedCard from "@/components/ui/animated-card";
import { staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Globe,
    title: "Website & Web Application Development",
    description: "Responsive Websites, Portals, CMS (WordPress, Drupal, etc.)",
    details: "Custom Web Apps using modern tech stacks (React, Node.js, Laravel)",
    color: "from-blue-50 to-blue-100",
    iconColor: "bg-blue-500",
    borderColor: "border-blue-200",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native & Cross-platform (iOS/Android)",
    details: "Flutter, React Native, Swift, Kotlin",
    color: "from-purple-50 to-purple-100",
    iconColor: "bg-purple-500",
    borderColor: "border-purple-200",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, SEM, Social Media Marketing",
    details: "PPC Ads, Email Campaigns, Content Strategy",
    color: "from-amber-50 to-amber-100",
    iconColor: "bg-amber-500",
    borderColor: "border-amber-200",
  },
  {
    icon: Headphones,
    title: "ITES & BPO Services",
    description: "Customer Support (Voice/Non-Voice)",
    details: "Data Entry, Virtual Assistants, Order Processing",
    color: "from-green-50 to-green-100",
    iconColor: "bg-green-500",
    borderColor: "border-green-200",
  },
  {
    icon: Settings,
    title: "Custom Application Development",
    description: "ERP, CRM, Inventory, HRMS, Workflow Automation",
    details: "Integration with APIs and Cloud Services",
    color: "from-red-50 to-red-100",
    iconColor: "bg-red-500",
    borderColor: "border-red-200",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description: "Dashboards & Reports (Power BI, Tableau)",
    details: "Predictive Analytics & Data Engineering",
    color: "from-indigo-50 to-indigo-100",
    iconColor: "bg-indigo-500",
    borderColor: "border-indigo-200",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <p className="text-slate-600">{service.details}</p>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

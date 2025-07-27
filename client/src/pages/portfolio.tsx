import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Smartphone, Database, Cloud } from "lucide-react";
import AnimatedCard from "@/components/ui/animated-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { staggerContainer } from "@/lib/animations";

const itProjects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A comprehensive e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    features: ["Multi-vendor support", "Real-time inventory", "Payment gateway", "Admin dashboard"],
    icon: Monitor,
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
  },
  {
    title: "Healthcare Management System",
    category: "Custom Software",
    description: "HIPAA-compliant healthcare management system for patient records, appointments, and billing.",
    technologies: ["Angular", "Django", "MySQL", "Docker", "Azure"],
    features: ["Patient portal", "Appointment scheduling", "Billing integration", "Report generation"],
    icon: Database,
    color: "from-green-50 to-green-100",
    borderColor: "border-green-200",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    technologies: ["React Native", "Firebase", "Redux", "Biometric API"],
    features: ["Biometric login", "Fund transfers", "Bill payments", "Transaction history"],
    icon: Smartphone,
    color: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
  },
  {
    title: "Supply Chain Analytics",
    category: "Data Analytics",
    description: "Advanced analytics platform for supply chain optimization with predictive insights.",
    technologies: ["Python", "TensorFlow", "Power BI", "Apache Kafka", "GCP"],
    features: ["Predictive analytics", "Real-time tracking", "Cost optimization", "Performance metrics"],
    icon: Cloud,
    color: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
  },
];

const bpoProjects = [
  {
    title: "Customer Support Operations",
    category: "Voice Support",
    description: "24/7 multilingual customer support for a leading telecommunications company.",
    metrics: ["500+ agents", "95% satisfaction", "24/7 operations", "8 languages"],
    services: ["Inbound support", "Technical assistance", "Billing inquiries", "Account management"],
    icon: Monitor,
    color: "from-indigo-50 to-indigo-100",
    borderColor: "border-indigo-200",
  },
  {
    title: "Data Processing Center",
    category: "Data Entry",
    description: "High-volume data processing and digitization services for financial institutions.",
    metrics: ["1M+ records/month", "99.9% accuracy", "48-hour TAT", "ISO certified"],
    services: ["Document digitization", "Data validation", "Quality assurance", "Secure processing"],
    icon: Database,
    color: "from-teal-50 to-teal-100",
    borderColor: "border-teal-200",
  },
  {
    title: "E-commerce Order Fulfillment",
    category: "Order Processing",
    description: "Complete order management and fulfillment services for online retailers.",
    metrics: ["10K+ orders/day", "Same-day processing", "Multi-channel", "Real-time tracking"],
    services: ["Order processing", "Inventory management", "Customer communication", "Returns handling"],
    icon: Smartphone,
    color: "from-rose-50 to-rose-100",
    borderColor: "border-rose-200",
  },
  {
    title: "Virtual Assistant Services",
    category: "Business Support",
    description: "Comprehensive virtual assistant services for small and medium businesses.",
    metrics: ["200+ clients", "40 hours/week", "Multi-skilled", "Cost savings 60%"],
    services: ["Administrative tasks", "Email management", "Appointment scheduling", "Research support"],
    icon: Cloud,
    color: "from-cyan-50 to-cyan-100",
    borderColor: "border-cyan-200",
  },
];

export default function Portfolio() {
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
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing our expertise through successful IT projects and comprehensive
            BPO operations that have driven business growth for our clients.
          </motion.p>
        </div>
      </section>

      {/* IT Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">IT Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Custom software solutions, web applications, and mobile platforms
              that showcase our technical expertise and innovation.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {itProjects.map((project, index) => (
              <AnimatedCard key={project.title} delay={index * 0.1}>
                <div className={`bg-gradient-to-br ${project.color} p-8 rounded-xl border ${project.borderColor} h-full`}>
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <project.icon className="text-slate-600 text-2xl" />
                    </motion.div>
                    <Badge variant="secondary" className="bg-white/50">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-600">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-white/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="bg-white/50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/50">
                      <Github className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BPO Portfolio Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">ITES & BPO Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive business process outsourcing operations that have helped
              clients reduce costs while maintaining high-quality service delivery.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {bpoProjects.map((project, index) => (
              <AnimatedCard key={project.title} delay={index * 0.1}>
                <div className={`bg-gradient-to-br ${project.color} p-8 rounded-xl border ${project.borderColor} h-full`}>
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <project.icon className="text-slate-600 text-2xl" />
                    </motion.div>
                    <Badge variant="secondary" className="bg-white/50">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Key Metrics:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-white/50 rounded-lg p-3 text-center">
                          <div className="font-semibold text-slate-800">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Services Provided:</h4>
                    <ul className="space-y-2">
                      {project.services.map((service, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-600">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full bg-white/50">
                    Learn More
                  </Button>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Track Record</h2>
            <p className="text-xl text-slate-600">
              Delivering measurable results across all our engagements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Active Clients" },
              { number: "24/7", label: "Support Availability" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-4xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how we can help bring your vision to life with our
            comprehensive IT and BPO services.
          </motion.p>
          <motion.a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </div>
      </section>
    </div>
  );
}

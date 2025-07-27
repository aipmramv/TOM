import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Smartphone, Database, Cloud, Star, Award, Users, Zap, ArrowRight, Sparkles, Rocket } from "lucide-react";
import AnimatedCard from "@/components/ui/animated-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import logoPath from "@assets/tom-high-resolution-logo-transparent_1753645116528.png";

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

const portfolioStats = [
  { number: "500+", label: "Projects Delivered", icon: Rocket },
  { number: "98%", label: "Client Satisfaction", icon: Star },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "24/7", label: "Support Available", icon: Zap },
];

export default function Portfolio() {
  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
        {/* Enhanced Background with Multiple Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 via-transparent to-pink-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            {/* Logo with Enhanced Glow */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-xl opacity-75 animate-pulse" />
                <img 
                  src={logoPath} 
                  alt="TotalOM Logo" 
                  className="relative h-20 w-auto"
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Our Success
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Stories
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our portfolio of innovative IT solutions and comprehensive BPO services 
              that have transformed businesses and delivered exceptional results across industries.
            </motion.p>

            {/* Portfolio Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {portfolioStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:text-pink-400 transition-colors" />
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-xl relative overflow-hidden"
                  onClick={() => document.getElementById('it-portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View IT Projects
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg font-bold rounded-xl backdrop-blur-sm border-white/30 hover:border-white/50 transition-all"
                  onClick={() => document.getElementById('bpo-portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center gap-2">
                    View BPO Services
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* IT Portfolio Section */}
      <section id="it-portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Monitor className="w-4 h-4" />
              IT Solutions
            </div>
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
      <section id="bpo-portfolio" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              BPO Services
            </div>
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

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/50 via-transparent to-amber-600/30" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
          <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p
              className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our portfolio of successful clients. Let's discuss how we can help 
              bring your vision to life with our comprehensive IT and BPO services.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                className="group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-bold rounded-xl shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.a>
              
              <motion.a
                href="/contact"
                className="group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg font-bold rounded-xl backdrop-blur-sm border-white/30 hover:border-white/50 transition-all"
                >
                  <span className="flex items-center gap-2">
                    Get Free Consultation
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-blue-100 mb-4">Ready to get started? Reach out to us today!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-blue-100">
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  ISO Certified Quality
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  24/7 Support Available
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  98% Client Satisfaction
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

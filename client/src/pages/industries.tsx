import { motion } from "framer-motion";
import { 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Plane, 
  Factory, 
  Building2,
  Stethoscope,
  BookOpen,
  CreditCard,
  MapPin,
  Wrench,
  Users
} from "lucide-react";
import AnimatedCard from "@/components/ui/animated-card";
import { staggerContainer } from "@/lib/animations";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    description: "Comprehensive digital solutions for healthcare providers, hospitals, and medical practices.",
    features: [
      "Electronic Health Records (EHR) Systems",
      "Telemedicine Platforms",
      "Patient Management Solutions",
      "Medical Billing & Claims Processing",
      "Healthcare Analytics & Reporting",
      "HIPAA Compliant Applications",
    ],
    color: "from-blue-50 to-blue-100",
    iconColor: "bg-blue-500",
    borderColor: "border-blue-200",
    stats: { projects: "25+", clients: "Healthcare Providers" },
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Innovative EdTech solutions for educational institutions and online learning platforms.",
    features: [
      "Learning Management Systems (LMS)",
      "Student Information Systems",
      "Online Assessment Platforms",
      "Virtual Classroom Solutions",
      "Educational Content Management",
      "Mobile Learning Applications",
    ],
    color: "from-green-50 to-green-100",
    iconColor: "bg-green-500",
    borderColor: "border-green-200",
    stats: { projects: "30+", clients: "Educational Institutions" },
  },
  {
    icon: ShoppingCart,
    name: "eCommerce & Retail",
    description: "End-to-end eCommerce solutions and retail management systems.",
    features: [
      "Custom eCommerce Platforms",
      "Inventory Management Systems",
      "Payment Gateway Integration",
      "Order Management Solutions",
      "Customer Loyalty Programs",
      "Multi-channel Retail Solutions",
    ],
    color: "from-purple-50 to-purple-100",
    iconColor: "bg-purple-500",
    borderColor: "border-purple-200",
    stats: { projects: "40+", clients: "Retail Businesses" },
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    description: "Comprehensive solutions for travel agencies, hotels, and hospitality businesses.",
    features: [
      "Booking & Reservation Systems",
      "Hotel Management Solutions",
      "Travel Portal Development",
      "Customer Loyalty Programs",
      "Revenue Management Systems",
      "Mobile Travel Applications",
    ],
    color: "from-amber-50 to-amber-100",
    iconColor: "bg-amber-500",
    borderColor: "border-amber-200",
    stats: { projects: "20+", clients: "Travel Companies" },
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Digital transformation solutions for manufacturing and industrial operations.",
    features: [
      "Enterprise Resource Planning (ERP)",
      "Supply Chain Management",
      "Quality Control Systems",
      "Production Planning Tools",
      "Asset Management Solutions",
      "IoT Integration & Analytics",
    ],
    color: "from-red-50 to-red-100",
    iconColor: "bg-red-500",
    borderColor: "border-red-200",
    stats: { projects: "15+", clients: "Manufacturing Units" },
  },
  {
    icon: Building2,
    name: "Government & Public Sector",
    description: "Secure and compliant solutions for government agencies and public institutions.",
    features: [
      "Citizen Service Portals",
      "Document Management Systems",
      "Compliance & Audit Tools",
      "Public Information Systems",
      "E-governance Solutions",
      "Data Security & Privacy Tools",
    ],
    color: "from-indigo-50 to-indigo-100",
    iconColor: "bg-indigo-500",
    borderColor: "border-indigo-200",
    stats: { projects: "10+", clients: "Government Agencies" },
  },
];

export default function Industries() {
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
            Industries We Serve
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized digital solutions tailored to meet the unique challenges
            and requirements of diverse industry sectors.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <AnimatedCard key={industry.name} delay={index * 0.1}>
                <div className={`bg-gradient-to-br ${industry.color} p-8 rounded-xl border ${industry.borderColor} h-full`}>
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 ${industry.iconColor} rounded-xl flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <industry.icon className="text-white text-2xl" />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-800">{industry.stats.projects}</div>
                      <div className="text-sm text-slate-600">Projects Completed</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    {industry.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800 mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-slate-600">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-600">
                      <strong>Serving:</strong> {industry.stats.clients}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Cross-Industry Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our deep understanding of industry-specific challenges enables us to
              deliver solutions that address real business needs and drive measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard>
              <div className="text-center p-8 bg-white rounded-xl h-full">
                <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Domain Knowledge
                </h3>
                <p className="text-slate-600">
                  Deep understanding of industry regulations, compliance requirements,
                  and business processes specific to each sector.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <div className="text-center p-8 bg-white rounded-xl h-full">
                <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Best Practices
                </h3>
                <p className="text-slate-600">
                  Implementation of industry best practices and proven methodologies
                  to ensure optimal performance and results.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="text-center p-8 bg-white rounded-xl h-full">
                <CreditCard className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Scalable Solutions
                </h3>
                <p className="text-slate-600">
                  Flexible and scalable solutions designed to grow with your business
                  and adapt to changing industry demands.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Don't See Your Industry?
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We work with businesses across all sectors. Let's discuss how we can
            help solve your specific industry challenges.
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
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}

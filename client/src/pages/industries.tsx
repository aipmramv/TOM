import { motion } from "framer-motion";
import { 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Plane, 
  Factory, 
  Building2,
  Truck,
  Home,
  Banknote
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    description: "Digital solutions for hospitals, clinics, and healthcare providers",
    solutions: [
      "Hospital Management Systems",
      "Patient Portal Development",
      "Telemedicine Platforms",
      "Medical Records Management",
      "Appointment Scheduling Systems",
      "Healthcare Analytics & Reporting"
    ],
    caseStudy: "Developed a comprehensive telemedicine platform that increased patient consultations by 300% during the pandemic.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Learning management systems and educational technology solutions",
    solutions: [
      "Learning Management Systems (LMS)",
      "Student Information Systems",
      "Online Examination Platforms",
      "Virtual Classroom Solutions",
      "Educational Mobile Apps",
      "Student Performance Analytics"
    ],
    caseStudy: "Built an LMS platform that supported 10,000+ students during remote learning transition.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: ShoppingCart,
    name: "eCommerce & Retail",
    description: "Complete digital commerce solutions and retail management systems",
    solutions: [
      "eCommerce Website Development",
      "Multi-vendor Marketplaces",
      "Inventory Management Systems",
      "Point of Sale (POS) Systems",
      "Customer Loyalty Programs",
      "Supply Chain Management"
    ],
    caseStudy: "Launched an eCommerce platform that achieved $2M+ in sales within the first year.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    description: "Booking systems and customer management for travel industry",
    solutions: [
      "Hotel Booking Systems",
      "Travel Booking Platforms",
      "Property Management Systems",
      "Customer Review Platforms",
      "Mobile Travel Apps",
      "Revenue Management Systems"
    ],
    caseStudy: "Created a hotel management system that improved booking efficiency by 40%.",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Industrial automation and process management solutions",
    solutions: [
      "Manufacturing Execution Systems",
      "Quality Management Systems",
      "Supply Chain Optimization",
      "Inventory Tracking Systems",
      "Production Planning Software",
      "Equipment Maintenance Systems"
    ],
    caseStudy: "Implemented an MES system that reduced production costs by 25%.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Building2,
    name: "Government & Public Sector",
    description: "Digital governance and citizen service platforms",
    solutions: [
      "Citizen Service Portals",
      "Document Management Systems",
      "Public Information Systems",
      "Digital Identity Solutions",
      "Workflow Automation",
      "Transparency & Reporting Tools"
    ],
    caseStudy: "Developed a citizen portal that reduced processing time for government services by 60%.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Banknote,
    name: "Finance & Banking",
    description: "Secure financial software and payment solutions",
    solutions: [
      "Banking Management Systems",
      "Payment Gateway Integration",
      "Loan Management Systems",
      "Financial Analytics Platforms",
      "Mobile Banking Apps",
      "Compliance & Risk Management"
    ],
    caseStudy: "Built a digital banking platform serving 50,000+ customers with 99.9% uptime.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Truck,
    name: "Logistics & Transportation",
    description: "Fleet management and logistics optimization systems",
    solutions: [
      "Fleet Management Systems",
      "Route Optimization Software",
      "Warehouse Management Systems",
      "Delivery Tracking Platforms",
      "Transport Management Systems",
      "Logistics Analytics"
    ],
    caseStudy: "Optimized delivery routes resulting in 30% reduction in fuel costs.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Property management and real estate platforms",
    solutions: [
      "Property Management Systems",
      "Real Estate Marketplaces",
      "CRM for Real Estate",
      "Virtual Property Tours",
      "Rental Management Platforms",
      "Property Analytics Tools"
    ],
    caseStudy: "Created a property marketplace that connected 1,000+ buyers and sellers.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Delivering specialized solutions across diverse sectors with deep industry expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className={`${industry.bgColor} rounded-3xl p-8 lg:p-12`}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Industry Info */}
                  <div className="lg:col-span-1">
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl mb-6 flex items-center justify-center`}>
                      <industry.icon className="text-white text-2xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                      {industry.name}
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="bg-white p-4 rounded-xl">
                      <h4 className="font-semibold text-slate-800 mb-2">Success Story</h4>
                      <p className="text-sm text-slate-600 italic">
                        {industry.caseStudy}
                      </p>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-slate-800 mb-6">Our Solutions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <motion.div
                          key={solution}
                          className="flex items-start bg-white p-4 rounded-xl shadow-sm"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: solutionIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${industry.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                          <span className="text-slate-700 font-medium">{solution}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We work with businesses across all sectors. Let's discuss your specific needs.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
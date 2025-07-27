import { motion } from "framer-motion";
import { Globe, Smartphone, Megaphone, Headphones, Settings, BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Globe,
    title: "Website & Web Application Development",
    description: "Custom web solutions built with modern technologies",
    features: [
      "Responsive Website Design",
      "E-commerce Platforms",
      "Content Management Systems (WordPress, Drupal)",
      "Custom Web Applications (React, Angular, Vue)",
      "Progressive Web Apps (PWA)",
      "API Development & Integration"
    ],
    technologies: ["React", "Node.js", "Laravel", "WordPress", "Shopify"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS App Development (Swift)",
      "Android App Development (Kotlin/Java)",
      "Cross-platform Development (Flutter, React Native)",
      "UI/UX Design for Mobile",
      "App Store Optimization",
      "Mobile App Testing & QA"
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Xamarin"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies",
    features: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing",
      "Pay-Per-Click Advertising (PPC)",
      "Email Marketing Campaigns",
      "Content Marketing Strategy"
    ],
    technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp"],
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Headphones,
    title: "ITES & BPO Services",
    description: "Comprehensive business process outsourcing solutions",
    features: [
      "Customer Support (Voice & Non-Voice)",
      "Technical Support Services",
      "Data Entry & Processing",
      "Virtual Assistant Services",
      "Order Processing & Management",
      "Lead Generation & Qualification"
    ],
    technologies: ["CRM Systems", "Helpdesk Software", "VoIP", "Chat Support", "Ticketing Systems"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Settings,
    title: "Custom Application Development",
    description: "Tailored software solutions for your business",
    features: [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Inventory Management Systems",
      "Human Resource Management (HRMS)",
      "Workflow Automation",
      "Third-party API Integration"
    ],
    technologies: [".NET", "Java", "Python", "PHP", "SQL Server", "MySQL"],
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description: "Transform data into actionable insights",
    features: [
      "Business Intelligence Dashboards",
      "Data Visualization (Power BI, Tableau)",
      "Predictive Analytics",
      "Data Engineering & ETL",
      "Custom Reports & KPI Tracking",
      "Data Warehouse Solutions"
    ],
    technologies: ["Power BI", "Tableau", "Python", "R", "SQL", "Azure", "AWS"],
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-3xl p-8 lg:p-12`}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 flex items-center justify-center`}>
                      <service.icon className="text-white text-2xl" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
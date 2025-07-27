import { motion } from "framer-motion";
import { 
  Heart, 
  GraduationCap, 
  ShoppingCart, 
  Plane, 
  Factory, 
  Building2 
} from "lucide-react";
import { staggerContainer } from "@/lib/animations";

const industries = [
  { icon: Heart, name: "Healthcare", color: "text-blue-600", bgColor: "bg-blue-100", hoverColor: "group-hover:bg-blue-500" },
  { icon: GraduationCap, name: "Education", color: "text-green-600", bgColor: "bg-green-100", hoverColor: "group-hover:bg-green-500" },
  { icon: ShoppingCart, name: "eCommerce", color: "text-purple-600", bgColor: "bg-purple-100", hoverColor: "group-hover:bg-purple-500" },
  { icon: Plane, name: "Travel", color: "text-amber-600", bgColor: "bg-amber-100", hoverColor: "group-hover:bg-amber-500" },
  { icon: Factory, name: "Manufacturing", color: "text-red-600", bgColor: "bg-red-100", hoverColor: "group-hover:bg-red-500" },
  { icon: Building2, name: "Government", color: "text-indigo-600", bgColor: "bg-indigo-100", hoverColor: "group-hover:bg-indigo-500" },
];

export default function IndustriesSection() {
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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Industries We Serve</h2>
          <p className="text-xl text-slate-600">
            Delivering specialized solutions across diverse sectors
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`w-20 h-20 ${industry.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all ${industry.hoverColor}`}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <industry.icon className={`text-2xl ${industry.color} group-hover:text-white transition-colors`} />
              </motion.div>
              <div className="text-slate-700 font-medium">{industry.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

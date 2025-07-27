import { motion } from "framer-motion";
import { Users, Clock, Shield } from "lucide-react";
import TeamIllustration from "@/components/graphics/team-illustration";

const stats = [
  { number: "Experienced", label: "Teams in Global Outsourcing" },
  { number: "20+", label: "Clients Served" },
];

const features = [
  { icon: Users, label: "Dedicated Teams" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Shield, label: "Data Security" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Total Outsource Management</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Total Outsource Management is a next-gen IT & BPO services company based in Thanjavur, Tamil Nadu, India. 
              We combine deep technical expertise with strong industry knowledge to deliver 
              digital solutions that drive business growth, reduce cost, and enhance customer experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="text-3xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="text-2xl text-blue-600 mb-2 mx-auto" />
                  </motion.div>
                  <div className="text-sm text-slate-600">{feature.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TeamIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
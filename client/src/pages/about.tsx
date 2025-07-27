import { motion } from "framer-motion";
import { Users, Clock, Shield, Award, Globe, Target } from "lucide-react";
import TeamIllustration from "@/components/graphics/team-illustration";
import AnimatedCard from "@/components/ui/animated-card";

const stats = [
  { number: "10+", label: "Years in Global Outsourcing", icon: Award },
  { number: "100+", label: "Clients Served Worldwide", icon: Globe },
  { number: "24/7", label: "Support Available", icon: Clock },
  { number: "99%", label: "Client Satisfaction Rate", icon: Target },
];

const values = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Skilled professionals committed to your project's success",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable project completion within agreed timelines",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Comprehensive security measures and NDA compliance",
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">About TotalOM</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We are a next-generation IT & BPO services company that combines
                deep technical expertise with strong industry knowledge to deliver
                transformative digital solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TeamIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold text-slate-800 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Based in Tamil Nadu, India, TotalOM was founded with a vision to bridge
              the gap between innovative technology and business success. Over the years,
              we have evolved from a small team of passionate developers to a comprehensive
              digital solutions provider serving clients across the globe.
            </motion.p>
            <motion.p
              className="text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our focus on quality, agility, and transparency has enabled us to build
              long-lasting partnerships with businesses across various industries,
              helping them navigate digital transformation and achieve sustainable growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-slate-800 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={stat.label} delay={index * 0.1}>
                <div className="text-center p-8 bg-white rounded-xl shadow-sm h-full">
                  <motion.div
                    className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="text-2xl text-blue-600" />
                  </motion.div>
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
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-slate-800 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose TotalOM
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} delay={index * 0.1}>
                <div className="text-center p-8 h-full">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <value.icon className="text-white text-3xl" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedCard>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To empower businesses worldwide through innovative digital solutions
                  that drive growth, enhance efficiency, and create lasting value.
                  We are committed to delivering excellence while maintaining the
                  highest standards of quality and customer satisfaction.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To become the global leader in providing comprehensive IT and BPO
                  services, recognized for our innovation, reliability, and ability
                  to transform businesses through technology-driven solutions that
                  shape the future of digital enterprise.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
}

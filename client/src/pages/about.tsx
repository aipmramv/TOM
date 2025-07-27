import { motion } from "framer-motion";
import { Users, Target, Award, Clock, Shield, Globe2 } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import TeamIllustration from "@/components/graphics/team-illustration";

const stats = [
  { number: "Experienced", label: "Teams", icon: Clock },
  { number: "50+", label: "Projects Completed", icon: Award },
  { number: "20+", label: "Happy Clients", icon: Users },
  { number: "24/7", label: "Support Available", icon: Shield },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses through innovative digital solutions that drive growth, efficiency, and customer satisfaction.",
  },
  {
    icon: Globe2,
    title: "Vision",
    description: "To be the leading IT & BPO services partner, recognized for excellence, innovation, and transformative business solutions.",
  },
  {
    icon: Users,
    title: "Values",
    description: "Quality, Innovation, Integrity, Customer-centricity, and Continuous Learning guide everything we do.",
  },
];

const team = [
  {
    name: "Technical Team",
    description: "Expert developers, designers, and architects with deep expertise in modern technologies.",
    skills: ["Full-stack Development", "Mobile App Development", "Cloud Architecture", "DevOps"],
  },
  {
    name: "BPO Team",
    description: "Dedicated professionals providing exceptional customer service and business support.",
    skills: ["Customer Support", "Data Processing", "Virtual Assistance", "Quality Assurance"],
  },
  {
    name: "Marketing Team",
    description: "Creative strategists focused on digital marketing and brand growth.",
    skills: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics"],
  },
];

export default function About() {
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
            <h1 className="text-5xl font-bold mb-6">About Total Outsource Management</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner for digital transformation and business process excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Who We Are</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Total Outsource Management is a next-generation IT & BPO services company based in Thanjavur, Tamil Nadu, India. 
                Founded with a vision to bridge the gap between technology and business success, 
                we specialize in delivering comprehensive digital solutions that drive growth and efficiency.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our team combines deep technical expertise with strong industry knowledge to deliver 
                solutions that not only meet current needs but also position our clients for future success. 
                We pride ourselves on understanding each client's unique challenges and crafting tailored solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From startups to enterprise organizations, we've helped businesses across various industries 
                leverage technology to reduce costs, improve efficiency, and enhance customer experiences.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <TeamIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
                <stat.icon className="text-3xl text-blue-600 mb-4 mx-auto" />
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Foundation</h2>
            <p className="text-xl text-slate-600">The principles that guide our work and relationships</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <value.icon className="text-4xl text-blue-600 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Team</h2>
            <p className="text-xl text-slate-600">Dedicated professionals committed to your success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((teamGroup, index) => (
              <motion.div
                key={teamGroup.name}
                className="bg-white p-8 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{teamGroup.name}</h3>
                <p className="text-slate-600 mb-6">{teamGroup.description}</p>
                <div className="space-y-2">
                  {teamGroup.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      <span className="text-slate-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help you achieve your goals
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { motion } from "framer-motion";
import ContactSection from "@/components/sections/contact-section";

export default function Contact() {
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
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your business with innovative digital solutions?
            Let's start a conversation about your project requirements.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Office Hours & Additional Info */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-white rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Office Hours</h3>
              <div className="space-y-2 text-slate-600">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 1:00 PM</div>
                <div>Sunday: Closed</div>
                <div className="text-sm text-blue-600 mt-2">IST (Indian Standard Time)</div>
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Response Time</h3>
              <div className="space-y-2 text-slate-600">
                <div>Email Inquiries: Within 4 hours</div>
                <div>Project Quotes: Within 24 hours</div>
                <div>Support Requests: Within 2 hours</div>
                <div className="text-sm text-green-600 mt-2">Guaranteed Response Times</div>
              </div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Emergency Support</h3>
              <div className="space-y-2 text-slate-600">
                <div>24/7 Critical Issues</div>
                <div>Weekend Emergency Line</div>
                <div>Dedicated Support Manager</div>
                <div className="text-sm text-red-600 mt-2">For Active Projects Only</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

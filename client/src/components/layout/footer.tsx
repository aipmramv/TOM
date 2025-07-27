import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const services = [
    "Web Development",
    "Mobile Apps",
    "Digital Marketing",
    "ITES & BPO",
    "Custom Software",
    "Data Analytics",
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.div 
              className="text-2xl font-bold text-blue-400 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              TotalOM
            </motion.div>
            <p className="text-slate-300 mb-4">
              Empowering Business through Digital Innovation
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <div key={service} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              {company.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.a
                    className="block text-slate-300 hover:text-white transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <div className="font-medium text-white">Address</div>
                <div className="text-sm">
                  F2, First Floor, ENPEE Arcade,<br />
                  Thanjavur - 613004, Tamil Nadu, India
                </div>
              </div>
              <div>
                <div className="font-medium text-white">Email</div>
                <div className="text-sm">totalom.ind@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2024 TotalOM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

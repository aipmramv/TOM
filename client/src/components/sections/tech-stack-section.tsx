import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

const techStacks = [
  {
    category: "Frontend",
    color: "text-blue-400",
    technologies: ["React, Angular, Vue", "Tailwind CSS"],
  },
  {
    category: "Backend",
    color: "text-green-400",
    technologies: ["Node.js, Laravel", "Django, .NET Core"],
  },
  {
    category: "Mobile",
    color: "text-purple-400",
    technologies: ["Flutter, React Native", "Swift, Kotlin"],
  },
  {
    category: "Cloud & Tools",
    color: "text-amber-400",
    technologies: ["AWS, Azure, GCP", "Power BI, Tableau"],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Tech Stack Expertise</h2>
          <p className="text-xl text-slate-300">
            Cutting-edge technologies for modern solutions
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              className="bg-slate-800 p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${stack.color}`}>
                {stack.category}
              </h3>
              <div className="space-y-2">
                {stack.technologies.map((tech) => (
                  <div key={tech} className="text-slate-300">
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
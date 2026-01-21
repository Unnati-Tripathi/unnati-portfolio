import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const categories = [
  {
    title: "Frontend",
    icon: <Layout className="text-blue-500" />,
    items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"]
  },
  {
    title: "Backend",
    icon: <Database className="text-green-500" />,
    items: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"]
  },
  {
    title: "Core & Tools",
    icon: <Terminal className="text-purple-500" />,
    items: ["C/C++", "Java Swing", "Docker", "Git/GitHub"]
  },
  {
    title: "Data Science",
    icon: <Code2 className="text-red-500" />,
    items: ["Python", "Pandas", "Scikit-learn", "ML"]
  }
];

const Skills = () => (
  <section id="skills" className="py-20 border-t border-gray-900">
    <motion.h3 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-4xl font-black text-white mb-16 uppercase tracking-tighter"
    >
      Technical_Arsenal
    </motion.h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, index) => (
        <motion.div 
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 bg-[#0d1117] border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all"
        >
          <div className="mb-4">{cat.icon}</div>
          <h4 className="text-white font-bold mb-4">{cat.title}</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {cat.items.map(item => <li key={item}>• {item}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
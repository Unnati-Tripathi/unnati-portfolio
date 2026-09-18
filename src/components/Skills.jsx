import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layout, Server, Wrench, BookOpen, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Cpu className="text-purple-400" size={22} />,
    description: "Core algorithms and language proficiency",
    skills: ["C/C++", "Python", "JavaScript (ES6+)", "Java", "SQL"],
    gridClass: "md:col-span-2 lg:col-span-2",
    accent: "from-purple-500/20 to-indigo-500/10",
  },
  {
    title: "Backend & Databases",
    icon: <Server className="text-cyan-400" size={22} />,
    description: "Scalable APIs, authentication & databases",
    skills: ["Python (FastAPI)", "Node.js", "Express.js", "REST APIs", "JWT Auth", "MongoDB", "PostgreSQL"],
    gridClass: "md:col-span-2 lg:col-span-2",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Frontend Development",
    icon: <Layout className="text-indigo-400" size={22} />,
    description: "Modern, responsive UI/UX & component logic",
    skills: ["React.js", "HTML5 & CSS3", "Tailwind CSS", "React Router", "Responsive UI", "Nivo Visualizations"],
    gridClass: "md:col-span-2 lg:col-span-1",
    accent: "from-indigo-500/20 to-purple-500/10",
  },
  {
    title: "Data Science & ML",
    icon: <Sparkles className="text-emerald-400" size={22} />,
    description: "Data analysis & machine learning tools",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "EDA", "Machine Learning"],
    gridClass: "md:col-span-1 lg:col-span-1",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Developer Tools & CS",
    icon: <Wrench className="text-amber-400" size={22} />,
    description: "Workflow tools & computer science foundations",
    skills: ["Git & GitHub", "VS Code & PyCharm", "Postman", "MongoDB Compass", "Vite", "DSA", "OOP & OS", "DBMS"],
    gridClass: "md:col-span-1 lg:col-span-2",
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Cpu size={14} /> Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            A comprehensive breakdown of my engineering toolkit across full-stack, data science, and CS fundamentals.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`glass-card glass-card-hover p-7 rounded-3xl flex flex-col justify-between relative overflow-hidden group ${cat.gridClass}`}
            >
              {/* Top ambient glow gradient inside card */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${cat.accent} blur-3xl opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`} />

              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-normal">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-500/40 text-gray-200 hover:text-white text-xs font-medium transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
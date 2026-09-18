import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, ShoppingBag, Terminal, CheckSquare, Building2, Utensils } from "lucide-react";

const projectList = [
  {
    title: "InstantMart",
    subtitle: "Scalable E-Commerce Platform",
    desc: "Full-stack MERN e-commerce application featuring JWT-based Role-Based Access Control (RBAC), full inventory CRUD Admin Dashboard, and a real-time shopping cart with dynamic discount code validation.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT RBAC"],
    icon: <ShoppingBag className="text-purple-400" size={24} />,
    github: "https://github.com/Unnati-Tripathi",
    live: null,
    featured: true,
  },
  {
    title: "Codify",
    subtitle: "Full-Stack Online IDE",
    desc: "Cloud-based code execution environment securing 15 RESTful APIs with JWT authentication. Integrated Monaco Editor and a responsive React frontend for real-time code rendering and remote execution.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Monaco Editor", "JWT"],
    icon: <Terminal className="text-cyan-400" size={24} />,
    github: "https://github.com/Unnati-Tripathi",
    live: null,
    featured: true,
  },
  {
    title: "TaskFlow",
    subtitle: "React Productivity Tracker",
    desc: "Modern React task management app built with sleek glassmorphism UI, inline editing, live statistics dashboard (Total, Completed, Pending), custom CSS micro-animations, and keyboard shortcuts.",
    tech: ["React.js", "Vite", "JavaScript (ES6+)", "Glassmorphism UI", "CSS Animations"],
    icon: <CheckSquare className="text-emerald-400" size={24} />,
    github: "https://github.com/Unnati-Tripathi/todo",
    live: null,
    featured: false,
  },
  {
    title: "College Management System",
    subtitle: "FastAPI Backend Architecture",
    desc: "High-performance backend API built with Python & FastAPI featuring modular routers, PyDantic schemas, JWT authentication, paginated database queries, and custom exception handling middlewares.",
    tech: ["Python", "FastAPI", "PostgreSQL", "PyDantic", "JWT Auth", "Middlewares"],
    icon: <Building2 className="text-indigo-400" size={24} />,
    github: "https://github.com/Unnati-Tripathi",
    live: null,
    featured: false,
  },
  {
    title: "PantryChef",
    subtitle: "Smart Recipe Recommendation App",
    desc: "Intuitive web application suggesting recipes based on user's available pantry ingredients to reduce food waste, featuring real-time API searching and dynamic filtering.",
    tech: ["React.js", "REST API", "Tailwind CSS", "JavaScript"],
    icon: <Utensils className="text-amber-400" size={24} />,
    github: "https://github.com/Unnati-Tripathi/pantryChef",
    live: "https://soft-nasturtium-971b16.netlify.app/",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Code2 size={14} /> Portfolio & Code
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Production-ready web applications, backend APIs, and developer tools engineered for performance.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card glass-card-hover p-7 rounded-3xl flex flex-col justify-between relative group ${
                project.featured ? "md:col-span-1 lg:col-span-1 border-purple-500/30" : ""
              }`}
            >
              <div>
                {/* Header: Icon & Links */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono font-medium text-cyan-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                  {project.desc}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-mono font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

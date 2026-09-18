import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles } from "lucide-react";

const experiences = [
  {
    role: "Associate Software Developer",
    company: "UsefulBi Corporation",
    period: "May 2026 – Present",
    location: "India",
    link: null,
    points: [
      "Developed and maintained scalable backend services using Python, FastAPI, and PostgreSQL for enterprise applications.",
      "Designed & implemented RESTful APIs, optimized database queries, and improved backend reliability and maintainability.",
      "Contributed to Generative AI solutions through LLM integration, prompt engineering, and AI-enabled workflows.",
      "Collaborated with cross-functional teams using Git, Agile methodologies, and code reviews to deliver production software.",
    ],
    skills: ["Python", "FastAPI", "PostgreSQL", "Generative AI", "LLMs", "REST APIs", "Agile"],
    current: true,
  },
  {
    role: "Full Stack Developer Intern",
    company: "FloNeo Technologies",
    period: "April 2026 – May 2026",
    location: "India",
    link: null,
    points: [
      "Developed and enhanced backend features using Node.js and Express, boosting API response speed and reliability.",
      "Collaborated on integrating frontend workflows with backend APIs to maintain consistent, real-time data flow.",
    ],
    skills: ["Node.js", "Express.js", "REST APIs", "JavaScript", "Frontend Integration"],
    current: false,
  },
  {
    role: "Frontend Developer Intern",
    company: "Mobiqliq Global",
    period: "June 2025 – Sep 2025",
    location: "India",
    link: null,
    points: [
      "Engineered a responsive Hospital Management System using React.js & Tailwind CSS for patient, doctor, and appointment management.",
      "Integrated 10+ secure RESTful APIs and implemented real-time data visualization with Nivo, boosting admin efficiency by 15%.",
    ],
    skills: ["React.js", "Tailwind CSS", "Nivo Charts", "REST APIs", "State Management"],
    current: false,
  },
  {
    role: "Certified Data Science Learner",
    company: "Infosys Springboard",
    period: "Online Certification",
    location: "Online",
    link: null,
    points: [
      "Mastered core Python programming, Machine Learning classification/regression algorithms, and Exploratory Data Analysis (EDA).",
    ],
    skills: ["Python", "Machine Learning", "EDA", "Data Science"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Briefcase size={14} /> Career Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            My professional software development roles, internships, and technical achievements.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500/40 to-cyan-500/10 sm:-translate-x-[1px]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.company + exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-10">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? "border-purple-400 bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                        : "border-purple-500/50 bg-[#0d0e21]"
                    }`}>
                      {exp.current && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                    <div className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl relative group">
                      
                      {/* Current role tag */}
                      {exp.current && (
                        <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-purple-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                          Current Role
                        </span>
                      )}

                      {/* Header */}
                      <div className="mb-4">
                        <span className="text-xs font-mono font-semibold text-purple-400 flex items-center gap-1.5 mb-1">
                          <Calendar size={13} /> {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-base font-semibold text-cyan-400 flex items-center gap-2 mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2 mb-5 text-xs sm:text-sm text-gray-300">
                        {exp.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-purple-400 mt-1 font-mono text-xs">▸</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-purple-300 text-[11px] font-mono font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

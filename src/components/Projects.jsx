// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, ExternalLink, Terminal, User, HeartPulse, Droplets } from 'lucide-react';

// const projectList = [
//   {
//     title: "Codify (Code Editor)",
//     desc: "Full-stack code execution platform with JWT and Monaco Editor integration.",
//     tech: ["MERN", "Docker", "JWT"],
//     icon: <Terminal />,
//     color: "blue"
//   },
//   {
//     title: "Student Welfare Portal",
//     desc: "Management system featuring OCR verification and ML placement insights.",
//     tech: ["React", "Node.js", "ML"],
//     icon: <User />,
//     color: "green"
//   },
//   {
//     title: "Heart Disease Detection",
//     desc: "ML classification model with 90% accuracy using Scikit-learn.",
//     tech: ["Python", "Pandas", "Sklearn"],
//     icon: <HeartPulse />,
//     color: "red"
//   },
//   {
//     title: "Blood Donation System",
//     desc: "C++ console application applying core OOP principles for inventory tracking.",
//     tech: ["C++", "OOP"],
//     icon: <Droplets />,
//     color: "purple"
//   }
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="mb-40">
//       <motion.h3 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-4xl font-black text-white uppercase tracking-tighter mb-16"
//       >
//         Selected_Works
//       </motion.h3>

//       <div className="grid md:grid-cols-2 gap-10">
//         {projectList.map((project, index) => (
//           <motion.div 
//             key={project.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className={`group bg-[#0d1117] border border-gray-800 p-8 rounded-3xl hover:bg-${project.color}-600/5 transition-all`}
//           >
//             <div className="flex justify-between items-start mb-10">
//               <div className={`p-4 bg-${project.color}-600 rounded-2xl text-white`}>{project.icon}</div>
//               <div className="flex gap-4">
//                 <Github size={20} className="text-gray-500 hover:text-white cursor-pointer" />
//                 <ExternalLink size={20} className="text-gray-500 hover:text-white cursor-pointer" />
//               </div>
//             </div>
//             <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
//             <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
//             <div className="flex flex-wrap gap-2 uppercase text-[10px] font-bold">
//               {project.tech.map(t => (
//                 <span key={t} className={`text-${project.color}-500`}>#{t}</span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;






















// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Github, ExternalLink, Terminal, User, 
//   HeartPulse, Droplets, ChevronLeft, ChevronRight 
// } from 'lucide-react';

// const projectList = [
//   {
//     title: "Codify (Code Editor)",
//     desc: "Full-stack code execution platform with JWT and Monaco Editor integration.",
//     tech: ["MERN", "Docker", "JWT"],
//     icon: <Terminal />,
//     color: "blue"
//   },
//   {
//     title: "Student Welfare Portal",
//     desc: "Management system featuring OCR verification and ML placement insights.",
//     tech: ["React", "Node.js", "ML"],
//     icon: <User />,
//     color: "green"
//   },
//   {
//     title: "Heart Disease Detection",
//     desc: "ML classification model with 90% accuracy using Scikit-learn.",
//     tech: ["Python", "Pandas", "Sklearn"],
//     icon: <HeartPulse />,
//     color: "red"
//   },
//   {
//     title: "Blood Donation System",
//     desc: "C++ console application applying core OOP principles for inventory tracking.",
//     tech: ["C++", "OOP"],
//     icon: <Droplets />,
//     color: "purple"
//   }
// ];

// const Projects = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (current) {
//       const scrollAmount = direction === 'left' ? -400 : 400;
//       current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="projects" className="mb-40 relative">
//       <div className="flex justify-between items-end mb-12">
//         <motion.h3 
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-black text-white uppercase tracking-tighter"
//         >
//           Selected_Works
//         </motion.h3>

//         {/* Navigation Arrows */}
//         <div className="flex gap-4 mb-2">
//           <button 
//             onClick={() => scroll('left')}
//             className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-400 shadow-lg active:scale-95"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button 
//             onClick={() => scroll('right')}
//             className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-400 shadow-lg active:scale-95"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>

//       {/* Horizontal Slider Container */}
//       <div 
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto pb-10 scroll-smooth snap-x snap-mandatory scrollbar-hide"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         {projectList.map((project, index) => (
//           <motion.div 
//             key={project.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className={`min-w-[320px] md:min-w-[500px] snap-center bg-[#0d1117] border border-gray-800 p-8 rounded-3xl hover:border-${project.color}-500/50 transition-all shadow-xl flex flex-col`}
//           >
//             <div className="flex justify-between items-start mb-10">
//               <div className={`p-4 bg-${project.color}-600/20 text-${project.color}-500 rounded-2xl`}>
//                 {project.icon}
//               </div>
//               <div className="flex gap-4">
//                 <Github size={20} className="text-gray-500 hover:text-white transition cursor-pointer" />
//                 <ExternalLink size={20} className="text-gray-500 hover:text-white transition cursor-pointer" />
//               </div>
//             </div>

//             <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
//             <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
//               {project.desc}
//             </p>

//             <div className="flex flex-wrap gap-2 mt-auto">
//               {project.tech.map(t => (
//                 <span key={t} className={`text-[10px] font-black uppercase tracking-widest text-${project.color}-500 bg-${project.color}-500/5 px-2 py-1 rounded`}>
//                   #{t}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;














































































import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Terminal,
  User,
  HeartPulse,
  Droplets,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------- COLOR MAP (Tailwind Safe) ---------------- */
const colorMap = {
  blue: {
    border: "hover:border-blue-500/50",
    iconBg: "bg-blue-600/20",
    iconText: "text-blue-500",
    tagText: "text-blue-500",
    tagBg: "bg-blue-500/5",
  },
  green: {
    border: "hover:border-green-500/50",
    iconBg: "bg-green-600/20",
    iconText: "text-green-500",
    tagText: "text-green-500",
    tagBg: "bg-green-500/5",
  },
  red: {
    border: "hover:border-red-500/50",
    iconBg: "bg-red-600/20",
    iconText: "text-red-500",
    tagText: "text-red-500",
    tagBg: "bg-red-500/5",
  },
  purple: {
    border: "hover:border-purple-500/50",
    iconBg: "bg-purple-600/20",
    iconText: "text-purple-500",
    tagText: "text-purple-500",
    tagBg: "bg-purple-500/5",
  },
};

/* ---------------- PROJECT DATA ---------------- */
const projectList = [
  {
    title: "PantryChef",
    desc:
      "Recipe recommendation web app that suggests dishes based on available ingredients, reducing food waste.",
    tech: ["React", "API", "Tailwind"],
    icon: <Terminal />,
    color: "blue",
    github: "https://github.com/Unnati-Tripathi/pantryChef",
    live: "https://soft-nasturtium-971b16.netlify.app/",
  },
  {
    title: "Codify (Code Editor)",
    desc:
      "Full-stack online code editor with secure authentication and code execution support.",
    tech: ["MERN", "JWT"],
    icon: <User />,
    color: "green",
    github: "https://github.com/Unnati-Tripathi/pantryChef",
  },
  {
    title: "Heart Disease Prediction",
    desc:
      "Machine learning model that predicts heart disease using medical parameters with high accuracy.",
    tech: ["Python", "Pandas", "Sklearn"],
    icon: <HeartPulse />,
    color: "red",
    github: "https://github.com/Unnati-Tripathi/HeartDesease_Prediction",
    live:
      "https://github.com/Unnati-Tripathi/HeartDesease_Prediction/blob/main/ProjectHeart.ipynb",
  },
  {
    title: "Blood Donation System",
    desc:
      "C++ based system for managing donors and blood inventory using OOP concepts.",
    tech: ["C++", "OOP"],
    icon: <Droplets />,
    color: "purple",
    github:
      "https://github.com/Unnati-Tripathi/Blood-Donation-Management-System",
  },
];

/* ---------------- COMPONENT ---------------- */
const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="mb-40 relative">
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-white uppercase tracking-tighter"
        >
          Selected_Works
        </motion.h3>

        {/* Arrows */}
        <div className="flex gap-4 mb-2">
          <button
            onClick={() => scroll("left")}
            className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-400 shadow-lg active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-400 shadow-lg active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-10 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projectList.map((project, index) => {
          const colors = colorMap[project.color];

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`min-w-[320px] md:min-w-[500px] snap-center bg-[#0d1117] 
              border border-gray-800 ${colors.border} p-8 rounded-3xl 
              transition-all shadow-xl flex flex-col`}
            >
              {/* Top */}
              <div className="flex justify-between items-start mb-10">
                <div
                  className={`p-4 ${colors.iconBg} ${colors.iconText} rounded-2xl`}
                >
                  {project.icon}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github
                        size={20}
                        className="text-gray-500 hover:text-white transition"
                      />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink
                        size={20}
                        className="text-gray-500 hover:text-white transition"
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">
                {project.desc}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-[10px] font-black uppercase tracking-widest 
                    ${colors.tagText} ${colors.tagBg} px-2 py-1 rounded`}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

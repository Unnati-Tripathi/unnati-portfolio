// import React from 'react';
// import {
//   Terminal,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   Code,
// } from 'lucide-react';
// import { motion } from 'framer-motion';

// function App() {
//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono p-4 md:p-10 selection:bg-blue-500/30">

//       {/* Navigation */}
//       <nav className="flex justify-between items-center mb-16 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           className="flex items-center gap-2 text-blue-500"
//         >
//           <Terminal size={20} />
//           <span className="font-bold tracking-widest uppercase">
//             Unnati_Dev
//           </span>
//         </motion.div>

//         <div className="hidden md:flex gap-8 text-sm">
//           <a href="#projects" className="hover:text-blue-400 transition">
//             ./projects
//           </a>
//           <a href="#skills" className="hover:text-blue-400 transition">
//             ./skills
//           </a>
//           <a
//             href="#connect"
//             className="px-4 py-1 border border-blue-500/50 rounded text-blue-500 hover:bg-blue-500/10 transition"
//           >
//             ./connect
//           </a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <motion.header {...fadeIn} className="max-w-4xl mx-auto mb-20">
//         <p className="text-blue-500 font-bold mb-2">
//           {">"} INITIALIZING_IDENTITY...
//         </p>

//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
//           Unnati Tripathi
//         </h1>

//         <h2 className="text-xl md:text-2xl text-gray-400 mb-8 flex items-center gap-3">
//           <Code className="text-blue-500" size={24} />
//           Full-Stack Developer
//         </h2>

//         <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-8 shadow-2xl">
//           <div className="flex gap-2 mb-6">
//             <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
//             <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
//             <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
//           </div>

//           <div className="space-y-3 border-l-2 border-blue-500/30 pl-4">
//             <p>
//               <span className="text-blue-400">Current:</span> Frontend Intern @
//               Mobiqliq Global
//             </p>
//             <p>
//               <span className="text-blue-400">Education:</span> B.Tech CSE, IET
//               Lucknow (CGPA: 9.0)
//             </p>
//             <p>
//               <span className="text-blue-400">Competitive:</span> CodeChef (1622)
//               | Codeforces (1450)
//             </p>
//           </div>
//         </div>
//       </motion.header>

//       {/* Projects */}
//       <section id="projects" className="max-w-6xl mx-auto py-20">
//         <h3 className="text-2xl font-bold text-white mb-10">
//           <span className="text-blue-500">01.</span> Featured_Projects
//         </h3>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="border border-gray-800 bg-[#0d1117] p-6 rounded-xl hover:border-blue-500/50 transition">
//             <h4 className="text-xl font-bold text-white mb-2">
//               Codify (Full-Stack Editor)
//             </h4>
//             <p className="text-sm text-gray-400 mb-4">
//               Secure MERN-based code execution platform with Monaco Editor.
//             </p>
//             <div className="text-xs text-blue-400">#React #Node #Docker</div>
//           </div>

//           <div className="border border-gray-800 bg-[#0d1117] p-6 rounded-xl hover:border-blue-500/50 transition">
//             <h4 className="text-xl font-bold text-white mb-2">
//               Student Welfare Portal
//             </h4>
//             <p className="text-sm text-gray-400 mb-4">
//               OCR-based student verification & ML-powered placement insights.
//             </p>
//             <div className="text-xs text-green-400">#MERN #ML #OCR</div>
//           </div>
//         </div>
//       </section>

//       {/* Skills */}
//       <section id="skills" className="max-w-6xl mx-auto py-20 border-t border-gray-900">
//         <h3 className="text-2xl font-bold text-white mb-10">
//           <span className="text-blue-500">02.</span> Technical_Skills
//         </h3>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[
//             'React',
//             'Node.js',
//             'MongoDB',
//             'Express',
//             'Docker',
//             'C/C++',
//             'Java',
//             'Python',
//           ].map((skill) => (
//             <div
//               key={skill}
//               className="bg-[#161b22] p-4 rounded border border-gray-800 text-center hover:border-blue-500/50"
//             >
//               {skill}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Connect */}
//       <section id="connect" className="max-w-4xl mx-auto py-20 text-center">
//         <h3 className="text-4xl font-bold text-white mb-6">
//           Get In Touch
//         </h3>

//         <a
//           href="mailto:unnatitripathi670@gmail.com"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
//         >
//           <Mail size={18} /> Say Hello
//         </a>
//       </section>

//       <footer className="text-center py-10 text-xs text-gray-600 border-t border-gray-900">
//         Designed & Built by Unnati Tripathi
//       </footer>

//     </div>
//   );
// }

// export default App;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Terminal, Github, Linkedin, Mail, ExternalLink, 
//   Code, Award, Cpu, User, MessageSquare 
// } from 'lucide-react';

// function App() {
//   // Animation Variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6, ease: "easeOut" }
//   };

//   const staggerContainer = {
//     initial: {},
//     whileInView: { transition: { staggerChildren: 0.1 } }
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono selection:bg-blue-500/30">
      
//       {/* 1. NAVIGATION */}
//       <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-900">
//         <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
//           <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             className="flex items-center gap-2 text-blue-500"
//           >
//             <Terminal size={20} />
//             <span className="font-bold tracking-widest underline decoration-blue-500/50">UNNATI_TRIPATHI</span>
//           </motion.div>
//           <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
//             <a href="#about" className="hover:text-blue-400 transition">/About</a>
//             <a href="#projects" className="hover:text-blue-400 transition">/Projects</a>
//             <a href="#skills" className="hover:text-blue-400 transition">/Skills</a>
//             <a href="#connect" className="text-blue-500 hover:text-blue-400 transition">/Connect</a>
//           </div>
//         </div>
//       </nav>

//       <main className="pt-32 px-6 max-w-6xl mx-auto">
        
//         {/* 2. HERO SECTION */}
//         <section id="about" className="mb-32">
//           <motion.div {...fadeInUp}>
//             <p className="text-blue-500 font-bold mb-4 flex items-center gap-2">
//               <span className="animate-pulse">●</span> system.init()
//             </p>
//             <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
//               Full-Stack <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Developer.</span>
//             </h1>
            
//             <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
//               <div className="space-y-6">
//                 <p className="text-lg text-gray-400 leading-relaxed">
//                   I am a <span className="text-white font-bold">B.Tech CSE student at IET Lucknow</span> with a <span className="text-blue-400">9.0 CGPA</span>. 
//                   I specialize in building scalable web applications using the <span className="text-white">MERN stack</span> and Docker.
//                 </p>
//                 <div className="flex gap-4">
//                   <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-bold">View Projects</a>
//                   <a href="#connect" className="px-6 py-3 border border-gray-700 rounded hover:bg-gray-800 transition">Contact Me</a>
//                 </div>
//               </div>

//               {/* Terminal Window Card */}
//               <div className="bg-[#0d1117] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
//                 <div className="bg-gray-900 px-4 py-2 flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
//                 </div>
//                 <div className="p-6 text-sm md:text-base space-y-2 font-mono">
//                   <p><span className="text-green-400">➜</span> <span className="text-blue-400">status</span>: Interning @ Mobiqliq Global</p>
//                   <p><span className="text-green-400">➜</span> <span className="text-blue-400">competitive</span>: CodeChef 1622 | Codeforces 1450</p>
//                   <p><span className="text-green-400">➜</span> <span className="text-blue-400">rank</span>: Global 808 @ CodeChef Starters 115</p>
//                   <p><span className="text-green-400">➜</span> <span className="text-blue-400">location</span>: Lucknow, India</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* 3. PROJECTS SECTION */}
//         <section id="projects" className="mb-32">
//           <motion.div {...fadeInUp} className="mb-12">
//             <h3 className="text-3xl font-bold text-white flex items-center gap-4">
//               <Code className="text-blue-500" /> Featured_Work
//             </h3>
//           </motion.div>

//           <motion.div 
//             variants={staggerContainer} 
//             initial="initial" 
//             whileInView="whileInView" 
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 gap-8"
//           >
//             {/* Codify Project */}
//             <motion.div variants={fadeInUp} className="group p-8 border border-gray-800 bg-[#0d1117] rounded-2xl hover:border-blue-500/50 transition-all">
//               <div className="flex justify-between mb-6">
//                 <Cpu className="text-blue-500" size={32} />
//                 <div className="flex gap-4 text-gray-500 group-hover:text-white transition">
//                   <Github size={20} />
//                   <ExternalLink size={20} />
//                 </div>
//               </div>
//               <h4 className="text-2xl font-bold text-white mb-3">Codify: Full-Stack Editor</h4>
//               <p className="text-gray-400 mb-6 text-sm leading-relaxed">
//                 MERN stack application featuring Monaco Editor for real-time coding. 
//                 Secured with JWT and containerized for consistent deployment.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {["React", "Node.js", "MongoDB", "Docker"].map(t => (
//                   <span key={t} className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-400 rounded uppercase font-bold">{t}</span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Student Welfare Project */}
//             <motion.div variants={fadeInUp} className="group p-8 border border-gray-800 bg-[#0d1117] rounded-2xl hover:border-blue-500/50 transition-all">
//               <div className="flex justify-between mb-6">
//                 <User className="text-green-500" size={32} />
//                 <div className="flex gap-4 text-gray-500 group-hover:text-white transition">
//                   <Github size={20} />
//                   <ExternalLink size={20} />
//                 </div>
//               </div>
//               <h4 className="text-2xl font-bold text-white mb-3">Student Welfare Portal</h4>
//               <p className="text-gray-400 mb-6 text-sm leading-relaxed">
//                 Management portal with OCR verification and ML-based placement insights. 
//                 Streamlines volunteer management and student tracking.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {["MERN", "ML", "OCR", "Cloud"].map(t => (
//                   <span key={t} className="text-[10px] px-2 py-1 bg-green-500/10 text-green-400 rounded uppercase font-bold">{t}</span>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* 4. SKILLS SECTION */}
//         <section id="skills" className="mb-32">
//           <motion.div {...fadeInUp} className="text-center mb-16">
//             <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter uppercase">Tech_Stack</h3>
//             <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { name: "Frontend", items: ["React.js", "Tailwind", "Next.js"] },
//               { name: "Backend", items: ["Node.js", "Express", "JWT"] },
//               { name: "Core", items: ["C/C++", "Java Swing", "Python"] },
//               { name: "Tools", items: ["Git", "Docker", "Postman"] }
//             ].map((cat) => (
//               <motion.div {...fadeInUp} key={cat.name} className="space-y-4">
//                 <h5 className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em]">{cat.name}</h5>
//                 <ul className="space-y-2">
//                   {cat.items.map(skill => (
//                     <li key={skill} className="text-gray-400 hover:text-white cursor-default transition-colors">{skill}</li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* 5. CONNECT SECTION */}
//         <section id="connect" className="mb-32 text-center py-20 bg-blue-600/5 rounded-3xl border border-blue-500/10">
//           <motion.div {...fadeInUp}>
//             <MessageSquare className="mx-auto text-blue-500 mb-6" size={48} />
//             <h3 className="text-4xl font-bold text-white mb-6">Let's build something.</h3>
//             <p className="max-w-xl mx-auto text-gray-400 mb-10">
//               I'm open to full-stack opportunities and collaborative projects. Reach out via email or WhatsApp!
//             </p>
//             <div className="flex flex-col md:flex-row justify-center gap-6">
//               <a href="mailto:unnatitripathi670@gmail.com" className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition">
//                 <Mail size={18} /> unnatitripathi670@gmail.com
//               </a>
//               <a href="https://wa.me/917355530805" className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 rounded hover:bg-gray-800 transition">
//                 WhatsApp: +91 7355530805
//               </a>
//             </div>
//           </motion.div>
//         </section>

//       </main>

//       <footer className="py-10 border-t border-gray-900 text-center text-xs text-gray-600 uppercase tracking-widest">
//         © 2026 Unnati Tripathi // Engineered for Performance
//       </footer>
//     </div>
//   );
// }

// export default App;


























// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import HireMe from './components/HireMe';
// import Connect from './components/Connect';

// function App() {
//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono">
//       <Navbar />
      
//       <main className="max-w-6xl mx-auto px-6 pt-40">
//         <Hero />
//         <Projects />
//         <Skills />
//         <HireMe />
//         <Connect />
//       </main>

//       <footer className="py-12 text-center text-[10px] text-gray-700 uppercase tracking-widest border-t border-gray-900">
//         © 2026 UNNATI TRIPATHI // Built with React & Tailwind
//       </footer>
//     </div>
//   );
// }

// export default App;







































// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import HireMe from "./components/HireMe";
// import Connect from "./components/Connect";
// import Achievements from "./components/Achievements";

// function App() {
//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono overflow-x-hidden">
//       <Navbar />

//       {/* MAIN CONTENT */}
//       <main className="w-full px-6 md:px-20  space-y-32">
//         <Hero />
//         <Projects />
//         <Skills />
//         <Achievements/>
//         <HireMe />
//         <Connect />
//       </main>

//       {/* FOOTER */}
//       <footer className="mt-32 py-12 text-center text-[10px] text-gray-700 uppercase tracking-widest border-t border-gray-900">
//         © 2026 UNNATI TRIPATHI // Built with React & Tailwind
//       </footer>
//     </div>
//   );
// }

// export default App;





















// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import HireMe from "./components/HireMe";
// import Connect from "./components/Connect";
// import Achievements from "./components/Achievements";
// import Extracurricular from "./components/Extracurricular";

// function App() {
//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono overflow-x-hidden">
//       <Navbar />

//       {/* MAIN CONTENT */}
//       <main className="w-full px-6 md:px-20 pt-24 space-y-20">
//         <Hero />
//         <Projects />
//         <Skills />
//         <Achievements />
//         <Extracurricular/>
//         <HireMe />
//         <Connect />
//       </main>

//       {/* FOOTER */}
//       <footer className="mt-24 py-12 text-center text-[10px] text-gray-700 uppercase tracking-widest border-t border-gray-900">
//         © 2026 UNNATI TRIPATHI // Built with React & Tailwind
//       </footer>
//     </div>
//   );
// }

// export default App;









































// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import HireMe from "./components/HireMe";
// import Connect from "./components/Connect";
// import Achievements from "./components/Achievements";
// import Extracurricular from "./components/Extracurricular";
// import CustomCursor from "./components/CustomCursor";

// function App() {
//   const revealVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono overflow-x-hidden selection:bg-blue-500/30">
      
//       {/* Global UI */}
//       <CustomCursor />
//       <Navbar />

//       {/* MAIN — full width */}
//       <main className="w-full pt-28 space-y-24">

//         {/* HERO — full width */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={revealVariants}
//         >
//           <Hero />
//         </motion.div>

//         {/* CONTENT SECTIONS — centered */}
//         <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">

//           <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <Projects />
//           </motion.div>

//           <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <Skills />
//           </motion.div>

//           <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <Achievements />
//           </motion.div>

//           <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <Extracurricular />
//           </motion.div>

//           <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <HireMe />
//           </motion.div>

//           <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <Connect />
//           </motion.div>

//         </div>
//       </main>

//       {/* FOOTER */}
//       <footer className="mt-24 py-10 text-center text-[10px] text-gray-600 uppercase tracking-widest border-t border-gray-900">
//         © 2026 UNNATI TRIPATHI // ENGINEERED WITH REACT & TAILWIND
//       </footer>
//     </div>
//   );
// }

// export default App;

































































import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import HireMe from "./components/HireMe";
import Connect from "./components/Connect";
import Achievements from "./components/Achievements";
import Extracurricular from "./components/Extracurricular";
import CustomCursor from "./components/CustomCursor";

function App() {
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono overflow-x-hidden selection:bg-blue-500/30">
      
      {/* Global */}
      <CustomCursor />
      <Navbar />

      {/* MAIN CONTENT — full width, no extra X padding */}
      <main className="w-full pt-28 space-y-20">
        
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
        >
          <Hero />
        </motion.section>

        <motion.section variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Projects />
        </motion.section>

        <motion.section variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Skills />
        </motion.section>

        <motion.section variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Achievements />
        </motion.section>

        <motion.section variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Extracurricular />
        </motion.section>

        <motion.section variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <HireMe />
        </motion.section>

        <motion.section variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Connect />
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="mt-24 py-12 text-center text-[10px] text-gray-600 uppercase tracking-widest border-t border-gray-900">
        © 2026 UNNATI TRIPATHI // ENGINEERED WITH REACT & TAILWIND
      </footer>
    </div>
  );
}

export default App;

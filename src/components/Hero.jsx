// import React from 'react';
// import { motion } from 'framer-motion';
// import { Terminal, Cpu, Sparkles, Code2 } from 'lucide-react';

// const Hero = () => {
//   // Floating animation variant
//   const float = {
//     animate: {
//       y: [0, -20, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section id="about" className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
//       {/* Background Decorative Element */}
//       <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
//         {/* Left Side: Content */}
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
//             <Sparkles size={14} /> Available for full-stack roles
//           </div>
          
//           <h1 className="text-7xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8">
//             UNNATI <br /> 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 uppercase italic">
//               Tripathi
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-lg border-l-4 border-blue-600 pl-6">
//             Transforming complex logic into seamless digital experiences with the 
//             <span className="text-white font-semibold"> MERN Stack</span> and 
//             <span className="text-white font-semibold"> Docker</span>.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <div className="p-4 bg-[#0d1117] border border-gray-800 rounded-2xl flex items-center gap-4 group hover:border-blue-500/50 transition-all">
//               <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
//                 <Cpu size={24} />
//               </div>
//               <div>
//                 <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Global Rank</p>
//                 <p className="text-white font-black">#808</p>
//               </div>
//             </div>

//             <div className="p-4 bg-[#0d1117] border border-gray-800 rounded-2xl flex items-center gap-4 group hover:border-blue-500/50 transition-all">
//               <div className="p-3 bg-green-500/10 rounded-xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
//                 <Code2 size={24} />
//               </div>
//               <div>
//                 <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Education</p>
//                 <p className="text-white font-black">IET Lucknow</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Right Side: Animated Character/Visual */}
//         <motion.div 
//           variants={float}
//           animate="animate"
//           className="relative flex justify-center items-center"
//         >
//           {/* Animated Glow behind the visual */}
//           <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-75" />
          
//           {/* Main Visual: Terminal with floating elements */}
//           <div className="relative z-10 w-full max-w-[450px]">
//             <div className="bg-[#161b22] border-2 border-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden relative group">
//               {/* Fake Terminal Header */}
//               <div className="flex gap-2 mb-8">
//                 <div className="w-3 h-3 rounded-full bg-red-500/50" />
//                 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
//                 <div className="w-3 h-3 rounded-full bg-green-500/50" />
//               </div>

//               {/* Terminal Body Content */}
//               <div className="space-y-6 font-mono">
//                 <div className="flex gap-3">
//                   <span className="text-blue-500 font-bold tracking-tighter">root@unnati:~$</span>
//                   <span className="text-gray-300">fetch info</span>
//                 </div>
                
//                 <div className="grid gap-4 pl-4 border-l-2 border-gray-800">
//                   <div className="flex flex-col">
//                     <span className="text-[10px] text-gray-500 uppercase">Current Role</span>
//                     <span className="text-blue-400 font-bold">Frontend Intern @ Mobiqliq</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[10px] text-gray-500 uppercase">Competitive</span>
//                     <span className="text-cyan-400 font-bold">CF: 1450 | CC: 1622</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-[10px] text-gray-500 uppercase">Academic</span>
//                     <span className="text-purple-400 font-bold">CGPA: 9.0/10.0</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 text-green-500 text-xs animate-pulse">
//                   <Terminal size={14} /> System Ready...
//                 </div>
//               </div>

//               {/* Floating Decorative Icon Inside Card */}
//               <motion.div 
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 className="absolute -bottom-6 -right-6 p-8 bg-blue-600/10 rounded-full border border-blue-500/20 text-blue-500 opacity-20"
//               >
//                 <Code2 size={80} />
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

































































// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Terminal,
//   Cpu,
//   Sparkles,
//   Binary,
//   Globe,
//   ChevronRight,
// } from 'lucide-react';

// // Rotating roles
// const roles = ["Tripathi", "Developer", "Programmer", "Innovator"];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   // Cycle roles every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % roles.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   const floatingAnimation = {
//     animate: {
//       y: [0, -20, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const orbitAnimation = (duration = 5, delay = 0) => ({
//     animate: {
//       y: [0, -15, 0],
//       x: [0, 10, 0],
//       rotate: [0, 5, -5, 0],
//       transition: {
//         duration,
//         delay,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   });

//   return (
//     <section
//       id="about"
//       className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0a0a0a]"
//     >
//       {/* Background glow */}
//       <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
//       <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 px-6">

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="flex items-center gap-2 mb-6">
//             <span className="h-[1px] w-12 bg-blue-500" />
//             <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase font-bold">
//               system.status(online)
//             </span>
//           </div>

//           <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter">
//             UNNATI
//           </h1>

//           <div className="h-[90px] md:h-[120px] flex items-center">
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={roles[index]}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 uppercase italic"
//               >
//                 {roles[index]}
//               </motion.span>
//             </AnimatePresence>
//           </div>

//           <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-lg border-l-4 border-blue-600 pl-6">
//             Building high-performance <span className="text-white">Full-Stack applications</span> using
//             the MERN stack and Docker. Computer Science undergraduate at
//             <span className="text-white font-semibold"> IET Lucknow</span>.
//           </p>

//           <div className="flex items-center gap-6">
//             <a
//               href="#projects"
//               className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition"
//             >
//               View Work
//               <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//             </a>

//             <div>
//               <span className="text-white font-black text-xl">1622</span>
//               <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
//                 CodeChef Rating
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <div className="relative flex justify-center items-center">
//           <motion.div
//             variants={floatingAnimation}
//             animate="animate"
//             className="relative z-10 w-full max-w-[480px]"
//           >
//             <div className="bg-[#0d1117] border-2 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
//               <div className="bg-[#161b22] rounded-[2rem] p-8 border border-gray-800">
//                 <div className="flex justify-between items-center mb-10">
//                   <div className="flex gap-2">
//                     <div className="w-3 h-3 rounded-full bg-red-500/40" />
//                     <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
//                     <div className="w-3 h-3 rounded-full bg-green-500/40" />
//                   </div>
//                   <Globe className="text-blue-500 animate-pulse" size={20} />
//                 </div>

//                 <div className="space-y-4 text-sm font-mono">
//                   <p className="text-blue-400 font-bold">
//                     ➜ Frontend Intern @ Mobiqliq Global
//                   </p>
//                   <p className="text-blue-400 font-bold">
//                     ➜ CGPA: 9.0 / 10
//                   </p>
//                   <p className="text-blue-400 font-bold">
//                     ➜ Global Rank: 808
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Icons */}
//             <motion.div
//               variants={orbitAnimation(6, 0.5)}
//               animate="animate"
//               className="absolute -top-10 -right-6 p-4 bg-gray-900 border border-blue-500/30 rounded-2xl text-blue-400"
//             >
//               <Cpu size={32} />
//             </motion.div>

//             <motion.div
//               variants={orbitAnimation(4, 1)}
//               animate="animate"
//               className="absolute -bottom-6 -left-10 p-4 bg-gray-900 border border-purple-500/30 rounded-2xl text-purple-400"
//             >
//               <Sparkles size={28} />
//             </motion.div>

//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute top-1/2 -right-16 opacity-10 text-white"
//             >
//               <Binary size={120} />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;













































// import React from 'react';
// import AnimatedName from './AnimatedName';
// import FloatingVisual from './FloatingVisual';

// const Hero = () => {
//   return (
//     <section
//       id="about"
//       className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0a0a0a]"
//     >
//       {/* Background glow effects */}
//       <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
//       <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 px-6">
//         <AnimatedName />
//         <FloatingVisual />
//       </div>
//     </section>
//   );
// };

// export default Hero;















































import React from "react";
import AnimatedName from "./AnimatedName";
import FloatingVisual from "./FloatingVisual";
import profile from "../assets/profile.png"; 

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 px-6">
        
        {/* LEFT SIDE: Name, Roles, and Summary */}
        <div className="order-2 lg:order-1">
          <AnimatedName />
        </div>

        {/* RIGHT SIDE: Photo + Floating Components */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center h-[500px]">
          
          {/* 1. Background Glow */}
          <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />

          {/* 2. Profile Image (Middle Layer) */}
          <div className="relative z-20">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <img
                src={profile}
                alt="Unnati Tripathi"
                className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* 3. Floating Components (Top Layer) */}
          <FloatingVisual />
        </div>

      </div>
    </section>
  );
};

export default Hero;
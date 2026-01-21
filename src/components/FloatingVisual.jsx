// import React from 'react';
// import { motion } from 'framer-motion';
// import { Cpu, Sparkles, Binary, Globe } from 'lucide-react';

// const FloatingVisual = () => {
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
//     <div className="relative flex justify-center items-center">
//       <motion.div
//         variants={floatingAnimation}
//         animate="animate"
//         className="relative z-10 w-full max-w-[480px]"
//       >
//         <div className="bg-[#0d1117] border-2 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
//           <div className="bg-[#161b22] rounded-[2rem] p-8 border border-gray-800">
//             <div className="flex justify-between items-center mb-10">
//               <div className="flex gap-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500/40" />
//                 <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
//                 <div className="w-3 h-3 rounded-full bg-green-500/40" />
//               </div>
//               <Globe className="text-blue-500 animate-pulse" size={20} />
//             </div>

//             <div className="space-y-4 text-sm font-mono">
//               <p className="text-blue-400 font-bold">
//                 ➜ Frontend Intern @ Mobiqliq Global 
//               </p>
//               <p className="text-blue-400 font-bold">
//                 ➜ CGPA: 9.0 / 10 
//               </p>
//               <p className="text-blue-400 font-bold">
//                 ➜ Global Rank: 808 
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Floating Icons */}
//         <motion.div
//           variants={orbitAnimation(6, 0.5)}
//           animate="animate"
//           className="absolute -top-10 -right-6 p-4 bg-gray-900 border border-blue-500/30 rounded-2xl text-blue-400"
//         >
//           <Cpu size={32} />
//         </motion.div>

//         <motion.div
//           variants={orbitAnimation(4, 1)}
//           animate="animate"
//           className="absolute -bottom-6 -left-10 p-4 bg-gray-900 border border-purple-500/30 rounded-2xl text-purple-400"
//         >
//           <Sparkles size={28} />
//         </motion.div>

//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/2 -right-16 opacity-10 text-white pointer-events-none"
//         >
//           <Binary size={120} />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default FloatingVisual;
























































// import React from "react";
// import { motion } from "framer-motion";
// import { Cpu, Sparkles, Binary, Globe } from "lucide-react";
// import profile from "../assets/profile.png";

// const FloatingVisual = () => {
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
//     <div className="relative flex justify-center items-center">
//       {/* PHOTO (BACKGROUND IDENTITY ELEMENT) */}
//       <motion.img
//         src={profile}
//         alt="Unnati Tripathi"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 0.18, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="absolute w-[420px] md:w-[460px] rounded-full
//                    object-cover blur-[2px]
//                    pointer-events-none select-none"
//       />

//       {/* MAIN FLOATING CARD */}
//       <motion.div
//         variants={floatingAnimation}
//         animate="animate"
//         className="relative z-10 w-full max-w-[480px]"
//       >
//         <div className="bg-[#0d1117] border-2 border-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
//           <div className="bg-[#161b22] rounded-[2rem] p-8 border border-gray-800">
//             <div className="flex justify-between items-center mb-10">
//               <div className="flex gap-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500/40" />
//                 <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
//                 <div className="w-3 h-3 rounded-full bg-green-500/40" />
//               </div>
//               <Globe className="text-blue-500 animate-pulse" size={20} />
//             </div>

//             <div className="space-y-4 text-sm font-mono">
//               <p className="text-blue-400 font-bold">
//                 ➜ Frontend Intern @ Mobiqliq Global
//               </p>
//               <p className="text-blue-400 font-bold">
//                 ➜ CGPA: 9.0 / 10
//               </p>
//               <p className="text-blue-400 font-bold">
//                 ➜ Global Rank: 808
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* FLOATING ICONS */}
//         <motion.div
//           variants={orbitAnimation(6, 0.5)}
//           animate="animate"
//           className="absolute -top-10 -right-6 p-4 bg-gray-900 border border-blue-500/30 rounded-2xl text-blue-400"
//         >
//           <Cpu size={32} />
//         </motion.div>

//         <motion.div
//           variants={orbitAnimation(4, 1)}
//           animate="animate"
//           className="absolute -bottom-6 -left-10 p-4 bg-gray-900 border border-purple-500/30 rounded-2xl text-purple-400"
//         >
//           <Sparkles size={28} />
//         </motion.div>

//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/2 -right-16 opacity-10 text-white pointer-events-none"
//         >
//           <Binary size={120} />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default FloatingVisual;













































// import React from "react";
// import { motion } from "framer-motion";
// import { Cpu } from "lucide-react";

// const FloatingVisual = () => {
//   return (
//     <motion.div
//       animate={{ y: [0, -12, 0] }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className="relative w-72"
//     >
//       {/* Glass Card */}
//       <div
//         className="
//           relative
//           rounded-2xl
//           bg-white/5
//           backdrop-blur-xl
//           border border-white/10
//           p-5
//           shadow-[0_0_40px_rgba(59,130,246,0.15)]
//         "
//       >
//         {/* Header dots */}
//         <div className="flex gap-2 mb-4">
//           <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
//           <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
//           <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
//         </div>

//         {/* Content */}
//         <div className="space-y-3 text-sm font-mono">
//           <p className="text-blue-400 font-semibold">
//             → Frontend Intern
//           </p>
//           <p className="text-gray-300">
//             Mobiqiq Global
//           </p>

//           <p className="text-blue-400 font-semibold">
//             → CGPA: <span className="text-white">9.0 / 10</span>
//           </p>

//           <p className="text-blue-400 font-semibold">
//             → Global Rank: <span className="text-white">808</span>
//           </p>
//         </div>
//       </div>

//       {/* Floating Icon */}
//       <motion.div
//         animate={{ rotate: [0, 10, -10, 0] }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           -top-6
//           -right-6
//           p-3
//           rounded-xl
//           bg-blue-500/10
//           border border-blue-500/30
//           text-blue-400
//           backdrop-blur-md
//         "
//       >
//         <Cpu size={22} />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default FloatingVisual;




















































































// import React from 'react';
// import { motion } from 'framer-motion';
// import { Cpu, Trophy, Star } from 'lucide-react';

// const FloatingVisual = () => {
//   return (
//     <div className="absolute inset-0 z-30 pointer-events-none">
      
//       {/* Card 1: Internship Status (Top Right) */}
//       <motion.div 
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 right-0 md:right-10 bg-[#161b22]/90 backdrop-blur-md border border-gray-800 p-4 rounded-2xl shadow-2xl pointer-events-auto"
//       >
//         <div className="flex items-center gap-3">
//           <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
//             <Cpu size={20} />
//           </div>
//           <div>
//             <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Status</p>
//             <p className="text-white text-xs font-bold">Intern @ Mobiqliq</p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Card 2: Academic & Rank (Bottom Left) */}
//       <motion.div 
//         animate={{ y: [0, 15, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//         className="absolute bottom-10 left-0 md:left-10 bg-[#161b22]/90 backdrop-blur-md border border-gray-800 p-4 rounded-2xl shadow-2xl pointer-events-auto"
//       >
//         <div className="space-y-3">
//           <div className="flex items-center gap-2">
//             <Trophy size={14} className="text-yellow-500" />
//             <span className="text-white text-xs font-bold font-mono">Rank: #808</span>
//           </div>
//           <div className="flex items-center gap-2 border-t border-gray-800 pt-2">
//             <Star size={14} className="text-blue-500" />
//             <span className="text-white text-xs font-bold font-mono">CGPA: 9.0</span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Decorative Floating Element: Technical Icon */}
//       <motion.div 
//         animate={{ rotate: 360 }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//         className="absolute top-1/2 left-0 opacity-20 text-blue-500 hidden md:block"
//       >
//         <div className="border border-dashed border-blue-500/30 rounded-full p-8">
//            <Cpu size={40} />
//         </div>
//       </motion.div>

//     </div>
//   );
// };

// export default FloatingVisual;

























































import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Trophy, Star, Github, Globe, Code2 } from 'lucide-react';

const FloatingVisual = () => {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      
      {/* 1. INTERNSHIP BADGE (Top Right) */}
      <motion.div 
        animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-0 md:right-5 bg-[#161b22]/80 backdrop-blur-xl border border-blue-500/20 p-4 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)] pointer-events-auto hover:border-blue-500 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
            <Cpu size={18} />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Experience</p>
            <p className="text-white text-xs font-bold">Frontend Intern @ Mobiqliq</p>
          </div>
        </div>
      </motion.div>

      {/* 2. COMPETITIVE STATS CARD (Bottom Left) */}
      <motion.div 
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-10 left-0 md:left-5 bg-[#0d1117]/90 backdrop-blur-xl border border-purple-500/20 p-5 rounded-3xl shadow-2xl pointer-events-auto group hover:border-purple-500 transition-all"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Trophy size={16} className="text-yellow-500" />
            <div>
              <p className="text-[9px] text-gray-500 uppercase font-bold">Global Rank</p>
              <p className="text-white text-xs font-black">#808 @ Starters 115</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-gray-800 pt-3">
            <Code2 size={16} className="text-purple-500" />
            <div>
              <p className="text-[9px] text-gray-500 uppercase font-bold">CodeChef Rating</p>
              <p className="text-white text-xs font-black">1622 (Div 3)</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. FLOATING SOCIAL ORB (Top Left) */}
      <motion.a
        href="https://github.com/Unnati-Tripathi"
        target="_blank"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-0 p-4 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full text-white pointer-events-auto hover:bg-blue-600 transition-colors shadow-lg"
      >
        <Github size={20} />
      </motion.a>

      {/* 4. ACADEMIC BADGE (Bottom Right) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-4 bg-green-500/10 backdrop-blur-md border border-green-500/20 px-4 py-2 rounded-full pointer-events-auto"
      >
        <span className="text-green-400 text-[10px] font-black tracking-widest flex items-center gap-2">
          <Star size={12} fill="currentColor" /> CGPA: 9.0
        </span>
      </motion.div>

    </div>
  );
};

export default FloatingVisual;
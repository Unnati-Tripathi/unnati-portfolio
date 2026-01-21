// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// const roles = ["Tripathi", "Developer", "Programmer", "Innovator"];

// const AnimatedName = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % roles.length);
//     }, 2800);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -40 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* SYSTEM STATUS */}
//       <div className="flex items-center gap-2 mb-6">
//         <span className="h-[1px] w-12 bg-blue-500" />
//         <span className="text-blue-500 font-mono text-xs tracking-[0.35em] uppercase font-bold">
//           system.status(online)
//         </span>
//       </div>

//       {/* NAME */}
//       <h1 className="font-display text-7xl md:text-9xl font-extrabold text-white leading-[0.85] tracking-tight">
//         UNNATI
//       </h1>

//       {/* ROTATING ROLE */}
//       <div className="h-[90px] md:h-[120px] flex items-center">
//         <AnimatePresence mode="wait">
//           <motion.span
//             key={roles[index]}
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -24 }}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//             className="font-display text-6xl md:text-8xl font-extrabold
//                        text-transparent bg-clip-text
//                        bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500
//                        uppercase tracking-tight italic"
//           >
//             {roles[index]}
//           </motion.span>
//         </AnimatePresence>
//       </div>

//       {/* DESCRIPTION */}
//       <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl border-l-4 border-blue-600 pl-6">
//         Building high-performance{" "}
//         <span className="text-white font-semibold">Full-Stack applications</span>{" "}
//         using the MERN stack and Docker. Computer Science undergraduate at{" "}
//         <span className="text-white font-semibold">IET Lucknow</span>.
//       </p>

//       {/* CTA */}
//       <div className="flex items-center gap-6">
//         <a
//           href="#projects"
//           className="group flex items-center gap-2 px-8 py-4
//                      bg-blue-600 text-white rounded-full font-bold
//                      hover:bg-blue-700 transition shadow-lg"
//         >
//           View Work
//           <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//         </a>

//         <div>
//           <span className="text-white font-black text-xl">1622</span>
//           <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
//             CodeChef Rating
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AnimatedName;













import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Code2, Trophy } from "lucide-react";

const roles = [
    "Full Stack Developer",
    "Competitive Programmer",
    "ML Enthusiast",
    "Problem Solver",
];

const AnimatedName = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2600);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
        >
            {/* SYSTEM STATUS */}
            <div className="flex items-center gap-3 mb-8">
                <span className="h-[1px] w-14 bg-blue-500 animate-pulse" />
                <span className="text-blue-500 font-mono text-xs tracking-[0.35em] uppercase font-bold">
                    system.status(online)
                </span>
            </div>

            {/* NAME */}
            <h1 className="font-display text-7xl md:text-9xl font-extrabold text-white leading-[0.85] tracking-tight">
                UNNATI
            </h1>

            {/* ROTATING ROLE */}
            <div className="h-[90px] md:h-[120px] flex items-center">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={roles[index]}
                        initial={{ opacity: 0, y: 28, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -28, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="font-display text-5xl md:text-7xl font-extrabold
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500
                       uppercase tracking-tight italic drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                    >
                        {roles[index]}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* DESCRIPTION */}
<p className="pt-10 text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl border-l-4 border-blue-600 pl-6">
                Computer Science undergraduate at{" "}
                <span className="text-white font-semibold">IET Lucknow</span> (CGPA{" "}
                <span className="text-white font-semibold">9.0</span>).
                Passionate about building{" "}
                <span className="text-white font-semibold">
                    scalable MERN applications
                </span>{" "}
                and solving real-world problems using{" "}
                <span className="text-white font-semibold">Machine Learning</span>.
            </p>

            {/* CTA + STATS */}
            <div className="flex flex-wrap items-center gap-10">
                {/* CTA */}
                <a
                    href="#projects"
                    className="group flex items-center gap-3 px-8 py-4
                     bg-blue-600 text-white rounded-full font-bold
                     hover:bg-blue-700 transition shadow-xl"
                >
                    <Code2 size={18} />
                    View Projects
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-8">
                    
                    <a
                        href="https://www.codechef.com/users/utripathi_22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-center hover:underline"
                    >
                        <span className="text-white font-black text-xl group-hover:text-blue-500 transition">
                            1622
                        </span>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                            CodeChef
                        </p>
                    </a>

                    <a
                        href="https://codeforces.com/profile/Unati"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-center hover:underline"
                    >
                        <span className="text-white font-black text-xl group-hover:text-blue-500 transition">
                            1450
                        </span>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                            Codeforces
                        </p>
                    </a>

                    <a
                        href="https://leetcode.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-center hover:underline"
                    >
                        <span className="text-white font-black text-xl group-hover:text-blue-500 transition">
                            1614
                        </span>
                        <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                            LeetCode
                        </p>
                    </a>



                    <div className="flex items-center gap-2 text-blue-500">
                        <Trophy size={18} />
                        <p className="text-[11px] font-bold uppercase tracking-wider">
                            Hackathon SemiFinalist
                        </p>
                    </div>
                </div>
            </div>

            {/* BACKGROUND GLOW */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full -z-10" />
        </motion.div>
    );
};

export default AnimatedName;

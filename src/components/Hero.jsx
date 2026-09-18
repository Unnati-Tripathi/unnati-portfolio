import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Sparkles, Terminal, Trophy, Code, Award, CheckCircle2 } from "lucide-react";
import profileImg from "../assets/Pasted image.png";

const roles = [
  "Associate Software Developer",
  "Full-Stack MERN Engineer",
  "Python & FastAPI Developer",
  "Codeforces Specialist",
];

const RESUME_URL = "https://drive.google.com/file/d/1JTClsyFi4pJrcjnP3zK341VXdTa4HLdW/view?usp=sharing";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Associate Software Developer @ UsefulBi</span>
            </motion.div>

            {/* Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                Unnati <br />
                <span className="text-gradient">Tripathi</span>
              </h1>
            </motion.div>

            {/* Rotating Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 flex items-center"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-mono text-xl sm:text-2xl font-bold text-cyan-400 flex items-center gap-2"
                >
                  <Terminal size={22} className="text-purple-400" />
                  <span>{roles[roleIndex]}</span>
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal border-l-2 border-purple-500/40 pl-5"
            >
              Aspiring Full-Stack & Backend Engineer with a strong foundation in the <span className="text-white font-medium">MERN stack</span> and <span className="text-white font-medium">Python/FastAPI</span>. Top <span className="text-purple-300 font-semibold">8.2% global ranking</span> on CodeChef and <span className="text-purple-300 font-semibold">Codeforces Specialist</span> (Rating: 1450). Passionate about scalable microservices, Generative AI workflows, and high-performance user interfaces.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all hover:scale-105 active:scale-95"
              >
                <FileText size={16} className="text-purple-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Outer Decorative Glow Rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-3xl blur-2xl opacity-30 animate-pulse" />

              {/* Main Image Frame */}
              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-400 shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-[#0d0e21] rounded-[22px] overflow-hidden relative group">
                  <img
                    src={profileImg}
                    alt="Unnati Tripathi"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060611] via-transparent to-transparent opacity-60" />
                  
                  {/* Quick Badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0d0e21]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-200">IET Lucknow ('26)</span>
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold font-mono">CGPA 9.0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl glass-card border-white/10"
        >
          <a
            href="https://codeforces.com/profile/Unati"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-all text-center group"
          >
            <div className="flex items-center justify-center gap-1.5 text-purple-400 text-xs font-mono font-bold uppercase mb-1">
              <Trophy size={14} /> Codeforces
            </div>
            <div className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors">1450</div>
            <div className="text-[11px] text-gray-400 font-medium">Specialist (Top 11%)</div>
          </a>

          <a
            href="https://www.codechef.com/users/utripathi_22"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-all text-center group"
          >
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 text-xs font-mono font-bold uppercase mb-1">
              <Award size={14} /> CodeChef
            </div>
            <div className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">1622</div>
            <div className="text-[11px] text-gray-400 font-medium">3-Star (Top 8.2%)</div>
          </a>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-indigo-400 text-xs font-mono font-bold uppercase mb-1">
              <Code size={14} /> LeetCode
            </div>
            <div className="text-2xl font-black text-white">1614</div>
            <div className="text-[11px] text-gray-400 font-medium">260+ Problems Solved</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 text-xs font-mono font-bold uppercase mb-1">
              <CheckCircle2 size={14} /> B.Tech CSE
            </div>
            <div className="text-2xl font-black text-white">9.0 / 10</div>
            <div className="text-[11px] text-gray-400 font-medium">IET Lucknow (2022-26)</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
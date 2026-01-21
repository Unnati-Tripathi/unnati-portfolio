import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md h-20 px-6 border-b border-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        {/* Brand Identity */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <Terminal size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter text-white">UNNATI.TRIPATHI</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-[10px] uppercase font-bold tracking-[0.2em]">
          <a href="#about" className="text-gray-400 hover:text-blue-500 transition">/Root</a>
          <a href="#projects" className="text-gray-400 hover:text-blue-500 transition">/Work</a>
          <a href="#skills" className="text-gray-400 hover:text-blue-500 transition">/Skills</a>
          <a href="#connect" className="text-blue-500 hover:text-blue-400 transition">/Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
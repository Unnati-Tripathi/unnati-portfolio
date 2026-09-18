import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Connect from "./components/Connect";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="min-h-screen bg-[#060611] text-gray-200 font-sans relative selection:bg-purple-500/30 selection:text-purple-200">
      {/* Global Interactive Cursor */}
      <CustomCursor />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Connect />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-xs font-mono text-gray-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Unnati Tripathi. Engineered with React & Tailwind CSS.</p>
          <div className="flex items-center gap-4 text-gray-300">
            <a href="https://github.com/Unnati-Tripathi" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/unnati-tripathi-3b66ab25b/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="https://codeforces.com/profile/Unati" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Codeforces</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

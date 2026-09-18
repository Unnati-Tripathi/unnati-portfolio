import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageSquare, Send, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    value: "unnatitripathi670@gmail.com",
    href: "mailto:unnatitripathi670@gmail.com",
    icon: <Mail className="text-purple-400" size={20} />,
  },
  {
    name: "Phone / WhatsApp",
    value: "+91 7355530805",
    href: "https://wa.me/917355530805",
    icon: <Phone className="text-cyan-400" size={20} />,
  },
  {
    name: "LinkedIn Profile",
    value: "Unnati Tripathi",
    href: "https://www.linkedin.com/in/unnati-tripathi-3b66ab25b/",
    icon: <Linkedin className="text-indigo-400" size={20} />,
  },
  {
    name: "GitHub Repositories",
    value: "Unnati-Tripathi",
    href: "https://github.com/Unnati-Tripathi",
    icon: <Github className="text-emerald-400" size={20} />,
  },
];

const Connect = () => {
  return (
    <section id="connect" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Main CTA Container */}
        <div className="glass-card p-8 md:p-14 rounded-3xl border border-purple-500/20 relative overflow-hidden text-center shadow-2xl">
          {/* Decorative ambient lighting */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-2xl mx-auto relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest">
              <Send size={14} /> Get In Touch
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's Build <span className="text-gradient">Something Great</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
              Whether you have an exciting software role, a project collaboration, or just want to discuss competitive coding and system architectures—my inbox is always open!
            </p>

            <div className="pt-4 flex justify-center">
              <a
                href="mailto:unnatitripathi670@gmail.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95 group"
              >
                <Mail size={18} />
                <span>Say Hello</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-10 border-t border-white/10 relative z-10">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-purple-500/30 transition-all flex items-center justify-between group text-left"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono font-medium">{item.name}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Connect;

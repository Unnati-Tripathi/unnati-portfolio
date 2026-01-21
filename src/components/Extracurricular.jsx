import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Trophy, Heart } from 'lucide-react';

const activities = [
  {
    role: "Branch Supervisor",
    org: "PARMARTH: The Social Club",
    detail: "Mentored 200+ underprivileged students for competitive government exams.",
    icon: <Heart className="text-red-500" />,
    date: "May 2023 - May 2024"
  },
  {
    role: "Media Lead",
    org: "Robotics Club, IET Lucknow",
    detail: "Managed digital presence and event documentation for the technical club.",
    icon: <Camera className="text-blue-500" />,
    date: "2023 - 2024"
  },
  {
    role: "1st Runner-up",
    org: "Kanpur District Chess Championship",
    detail: "Ranked 2nd in the U-18 Girls category in the district-level tournament.",
    icon: <Trophy className="text-yellow-500" />,
    date: "2018"
  }
];

const Extracurricular = () => {
  return (
    <section id="extra" className="py-24 border-t border-gray-900">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-black text-white mb-16 uppercase tracking-tighter"
      >
        Life_Beyond_Code
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activities.map((item, idx) => (
          <motion.div
            key={item.org}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-[#0d1117] border border-gray-800 rounded-[2rem] hover:bg-blue-600/5 transition-all group"
          >
            <div className="mb-6 p-4 bg-gray-900 w-fit rounded-2xl group-hover:rotate-12 transition-transform">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
            <p className="text-blue-500 text-xs font-bold mb-4 uppercase tracking-widest">{item.org}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.detail}</p>
            <span className="text-[10px] text-gray-600 font-mono italic">{item.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Extracurricular;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: "Global Rank 808",
    detail: "CodeChef Starters 115 (Division 4)",
    icon: <Trophy className="text-yellow-500" />,
    category: "Competitive Programming"
  },
  {
    title: "1622 Rating",
    detail: "CodeChef Division 3 Professional",
    icon: <Star className="text-blue-500" />,
    category: "Competitive Programming"
  },
  {
    title: "1450 Rating",
    detail: "Codeforces Specialist Track",
    icon: <Award className="text-purple-500" />,
    category: "Competitive Programming"
  },
  {
    title: "Google Girls Hackathon 2025",
    detail: "Semifinalist Status",
    icon: <ShieldCheck className="text-green-500" />,
    category: "Hackathons"
  }
];

const certifications = [
  {
    name: "Amazon ML Summer School 2024 Selected Attendee",
    org: "Amazon Scientists",
    date: "July 2024 - Aug 2024",
    skills: ["Machine Learning", "Data Science"],
    link: "https://drive.google.com/file/d/1I3WMuokQs49DLs9986v0iH0-4w310586/view?usp=sharing"
  },
  {
    name: "Data Science Certification",
    org: "Infosys Springboard",
    skills: ["Python", "EDA", "Data Visualization"],
    link: "https://drive.google.com/file/d/181a9NjikMeDkPohStIoXNzC337UPjLzY/view"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 border-t border-gray-900">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-black text-white mb-16 uppercase tracking-tighter"
      >
        Accolades_&_Certificates
      </motion.h3>

      {/* Competitive Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-[#0d1117] border border-gray-800 rounded-3xl hover:border-blue-500/50 transition-all group"
          >
            <div className="mb-4 p-3 bg-gray-900 w-fit rounded-2xl group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">{item.category}</p>
            <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
            <p className="text-gray-400 text-xs">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications List */}
      <div className="space-y-4">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-[#0d1117] border border-gray-800 rounded-3xl hover:bg-blue-600/5 transition-all"
          >
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
              <p className="text-blue-500 text-sm font-bold mb-4">{cert.org} • {cert.date || "Online"}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-400 text-[10px] rounded-full uppercase font-bold tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <a 
              href={cert.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 p-4 bg-gray-900 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl"
            >
              <ExternalLink size={20} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
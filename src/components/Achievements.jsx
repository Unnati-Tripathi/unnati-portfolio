import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, ShieldCheck, Target, ExternalLink } from "lucide-react";

const achievementsList = [
  {
    title: "Codeforces Specialist",
    stat: "1450 Rating",
    detail: "Ranked 847 / 7,800+ (Top 11% globally) in Round 1017 (Div. 4).",
    icon: <Trophy className="text-purple-400" size={24} />,
    category: "Competitive Programming",
    link: "https://codeforces.com/profile/Unati",
  },
  {
    title: "CodeChef 3-Star",
    stat: "1622 Rating",
    detail: "Global Rank 113 in Starters 188 Division 3 (Top 8.2% global ranking).",
    icon: <Award className="text-cyan-400" size={24} />,
    category: "Competitive Programming",
    link: "https://www.codechef.com/users/utripathi_22",
  },
  {
    title: "LeetCode 260+ Problems",
    stat: "1614 Rating",
    detail: "Top 21% globally in LeetCode contest rankings with 260+ problems solved.",
    icon: <Star className="text-indigo-400" size={24} />,
    category: "Data Structures & Algo",
    link: null,
  },
  {
    title: "Google Girls Hackathon 2025",
    stat: "Semifinalist",
    detail: "Recognized as a Semifinalist after rigorous technical and algorithmic challenges.",
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    category: "Hackathons",
    link: null,
  },
  {
    title: "TCS CodeVita 2025",
    stat: "3 Rounds Cleared",
    detail: "Successfully cleared 2 Online Coding Rounds and 1 Offline Regional Round.",
    icon: <Target className="text-amber-400" size={24} />,
    category: "Coding Competitions",
    link: null,
  },
  {
    title: "Kanpur District Chess",
    stat: "1st Runner-up",
    detail: "Secured 2nd rank in the Kanpur District Chess Championship (U-18 Girls).",
    icon: <Trophy className="text-rose-400" size={24} />,
    category: "Extracurricular & Strategy",
    link: null,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Trophy size={14} /> Milestones & Ranks
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Competitive programming ratings, hackathon accomplishments, and tournament accolades.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card glass-card-hover p-7 rounded-3xl flex flex-col justify-between group relative"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="text-sm font-mono font-bold text-cyan-400 mb-3">
                  {item.stat}
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              {/* Optional Link */}
              {item.link && (
                <div className="mt-5 pt-4 border-t border-white/5 flex justify-end">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>View Profile</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
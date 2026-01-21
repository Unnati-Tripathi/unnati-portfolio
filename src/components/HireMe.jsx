import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Award, Download } from 'lucide-react';

const HireMe = () => {
    return (
        <section className="py-20">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 text-white">
                <h3 className="text-4xl font-black mb-10 tracking-tighter uppercase">Why Hire Me?</h3>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Zap className="text-yellow-300" />
                        <h4 className="text-xl font-bold">Fast Learner</h4>
                        <p className="text-blue-100 text-sm">Maintaining a 9.0 CGPA at IET Lucknow while interning as a Frontend Developer.</p>
                    </div>

                    <div className="space-y-4">
                        <Target className="text-green-300" />
                        <h4 className="text-xl font-bold">Problem Solver</h4>
                        <p className="text-blue-100 text-sm">Proven logic with a 1622 CodeChef rating and Global Rank 808 in Starters 115.</p>
                    </div>

                    <div className="space-y-4">
                        <Award className="text-red-300" />
                        <h4 className="text-xl font-bold">Full-Stack Capability</h4>
                        <p className="text-blue-100 text-sm">Experienced in MERN, Docker, and ML—bridging the gap between design and data.</p>
                    </div>
                </div>


                <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="font-bold text-xl uppercase tracking-widest">
                        Ready to collaborate?
                    </p>

                    <a
                        href="https://drive.google.com/file/d/1JTClsyFi4pJrcjnP3zK341VXdTa4HLdW/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-black hover:bg-gray-100 transition-transform active:scale-95 shadow-xl"
                    >
                        <Download size={20} />
                        View Resume
                    </a>
                </div>

            </div>
        </section>
    );
};

export default HireMe;
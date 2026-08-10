import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Calendar } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function AboutSection() {
  const techOrbs = [
    { name: 'React.js', icon: '⚛️', color: '#00f0ff', bg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' },
    { name: 'Node.js', icon: '🟢', color: '#22c55e', bg: 'bg-green-500/10 border-green-500/30 text-green-400' },
    { name: 'Express.js', icon: 'ex', color: '#e2e8f0', bg: 'bg-slate-500/10 border-slate-500/30 text-slate-200' },
    { name: 'MongoDB', icon: '🍃', color: '#10b981', bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' }
  ];

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 bg-[#06070a] bg-noise overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="font-mono text-xs text-purple-400 font-bold tracking-widest uppercase mb-2">
            03 / ABOUT ME
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            Who Am <span className="text-purple-400 italic">I?</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Alok's Real Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-64 sm:w-72 h-80 sm:h-[410px] rounded-3xl overflow-hidden glass-card-purple p-2.5 group shadow-neon-purple">
              {/* Outer Neon Glow Rim */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-transparent to-orange-500/40 pointer-events-none rounded-3xl group-hover:opacity-100 transition-opacity" />

              {/* Photo Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/15 bg-slate-950">
                <img
                  src={profilePhoto}
                  alt="Alok Choudhary - Full Stack Developer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Bottom Gradient Overlay for Name Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-transparent to-transparent opacity-90" />

                {/* Name Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-panel border border-white/10 text-center font-mono">
                  <span className="font-syne font-bold text-sm text-white block">ALOK CHOUDHARY</span>
                  <span className="text-[10px] text-purple-400 font-semibold block mt-0.5">FULL STACK MERN DEVELOPER</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Tech Orbs, & Credible Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            <p className="text-slate-300 font-mono text-sm sm:text-base leading-relaxed font-light">
              B.Tech Computer Science student and Full Stack Developer focused on building modern web applications using the MERN stack. Passionate about clean code architecture, scalable RESTful APIs, and building high-performance digital products.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Tech Stack Orbs Row */}
              <div className="sm:col-span-8 grid grid-cols-4 gap-3">
                {techOrbs.map((orb, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base mb-1 ${orb.bg}`}>
                      {orb.icon}
                    </div>
                    <span className="font-mono text-[10px] text-slate-300 font-medium text-center">
                      {orb.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bullet Stats Row */}
              <div className="sm:col-span-4 pl-0 sm:pl-4 border-l-0 sm:border-l border-white/10 flex flex-col gap-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>3+ Projects Built</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>150+ LeetCode Solved</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>JAVA + DSA Practitioner</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

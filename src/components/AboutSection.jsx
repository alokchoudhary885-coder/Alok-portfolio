import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function AboutSection() {
  const techPills = [
    { name: 'React', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
    { name: 'Node', color: 'border-green-500/30 text-green-400 bg-green-500/10' },
    { name: 'Express', color: 'border-slate-500/30 text-slate-200 bg-slate-500/10' },
    { name: 'MongoDB', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
    { name: 'Java', color: 'border-orange-500/30 text-orange-400 bg-orange-500/10' }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 md:px-8 bg-[#030712] border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs mb-2 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>03 / ABOUT ME</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-6xl font-black text-white tracking-tight">
            Who Am <span className="text-gradient-purple">I?</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-52 h-64 sm:w-68 sm:h-[360px] rounded-3xl overflow-hidden glass-card-purple p-2 group shadow-neon-purple">
              <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/15 bg-slate-950">
                <img
                  src={profilePhoto}
                  alt="Alok Choudhary"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl glass-panel border border-white/10 text-center font-mono">
                  <span className="font-syne font-bold text-[11px] sm:text-xs text-white block">ALOK CHOUDHARY</span>
                  <span className="text-[9px] sm:text-[10px] text-cyan-400 font-semibold block mt-0.5">FULL STACK DEVELOPER</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Single Crisp Statement & 5 Tech Pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center gap-5 sm:gap-6 text-center lg:text-left"
          >
            <p className="text-slate-200 font-syne font-semibold text-base sm:text-2xl leading-relaxed px-2">
              I build modern full-stack applications with React, Node.js and MongoDB — focused on clean architecture, scalable APIs and polished user experiences.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {techPills.map((pill, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-mono text-[11px] sm:text-xs font-bold border ${pill.color}`}
                >
                  {pill.name}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

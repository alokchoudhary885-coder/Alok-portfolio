import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function AboutSection() {
  const techBadges = ['React', 'Node', 'Express', 'MongoDB', 'Java'];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-5 md:px-8 lg:px-12 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-[11px] sm:text-xs mb-3 bg-[#CCFF00]/5">
            <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>03 / BACKGROUND &amp; IDENTITY</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
            Who Am I?
          </h2>
        </div>

        {/* Editorial 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          
          {/* Left Column: Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-sm overflow-hidden border border-[#CCFF00]/30 bg-[#121212] shadow-[0_0_40px_rgba(204,255,0,0.1)] group">
              <img
                src={profilePhoto}
                alt="Alok Choudhary"
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85" />
              
              {/* Bottom Card Identity Strip */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-sm border border-white/10 bg-[#141414]/90 backdrop-blur-md font-mono text-center">
                <span className="font-display font-extrabold text-sm text-white block tracking-wide">ALOK CHOUDHARY</span>
                <span className="text-[10px] text-[#CCFF00] font-semibold block mt-1 uppercase tracking-wider">
                  FULL STACK DEVELOPER
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {/* Sub-role Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm self-start bg-[#161616] border border-[#CCFF00]/30">
              <span className="font-mono text-xs text-[#CCFF00] uppercase tracking-widest font-bold">
                FULL STACK DEVELOPER
              </span>
            </div>

            {/* Exact Body Text (100% Preserved) */}
            <p className="text-slate-100 font-display font-semibold text-xl sm:text-2xl md:text-3xl leading-relaxed">
              "I build modern full-stack applications with{' '}
              <span className="text-[#CCFF00]">React</span>,{' '}
              <span className="text-[#CCFF00]">Node.js</span> and{' '}
              <span className="text-[#CCFF00]">MongoDB</span> — focused on clean architecture, scalable APIs and polished user experiences."
            </p>

            {/* Tech Badges */}
            <div className="pt-2">
              <span className="text-stone-400 font-mono text-[11px] uppercase tracking-wider block mb-3 font-semibold">
                TECH BADGES:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-sm font-mono text-xs font-semibold border border-[#CCFF00]/30 bg-[#CCFF00]/8 text-white hover:border-[#CCFF00] transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block">ROLE FOCUS</span>
                <span className="text-white font-semibold mt-1 block">Full-Stack &amp; Systems</span>
              </div>
              <div>
                <span className="text-stone-400 text-[10px] uppercase tracking-wider block">LOCATION / TIMEZONE</span>
                <span className="text-[#CCFF00] font-semibold mt-1 block">Jaipur, Rajasthan, India</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

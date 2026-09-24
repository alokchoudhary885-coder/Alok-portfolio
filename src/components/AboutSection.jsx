import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Code } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function AboutSection() {
  const techBadges = ['React', 'Node', 'Express', 'MongoDB', 'Java'];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs mb-3 bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / Background &amp; Identity</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Who Am I?
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          
          {/* Left Column: Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <img
                src={profilePhoto}
                alt="Alok Choudhary"
                className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Bottom Identity Strip */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/90 backdrop-blur-md text-center">
                <span className="font-bold text-sm text-white block">Alok Choudhary</span>
                <span className="text-[11px] text-blue-400 font-medium block mt-0.5">
                  Full-Stack MERN Developer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Sub-role Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg self-start bg-slate-900 border border-slate-800">
              <Code className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs text-blue-300 font-medium uppercase tracking-wider">
                Full-Stack Developer
              </span>
            </div>

            {/* Exact Body Text (100% Preserved) */}
            <p className="text-slate-100 text-lg sm:text-2xl font-medium leading-relaxed">
              "I build modern full-stack applications with{' '}
              <span className="text-blue-400 font-semibold">React</span>,{' '}
              <span className="text-blue-400 font-semibold">Node.js</span> and{' '}
              <span className="text-blue-400 font-semibold">MongoDB</span> — focused on clean architecture, scalable APIs and polished user experiences."
            </p>

            {/* Tech Badges */}
            <div className="pt-1">
              <span className="text-slate-400 text-xs uppercase tracking-wider block mb-3 font-medium">
                Core Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-medium border border-slate-800 bg-slate-900/80 text-slate-200 hover:border-blue-500/40 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[11px]">Role Focus</span>
                <span className="text-white font-medium mt-1 block">Full-Stack &amp; Scalable Systems</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[11px]">Location</span>
                <span className="text-blue-400 font-medium mt-1 block flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Jaipur, Rajasthan, India
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Cpu, Globe } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function AboutSection() {
  const techPills = [
    { name: 'React.js', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10' },
    { name: 'Node.js', color: 'border-green-500/30 text-green-400 bg-green-500/10' },
    { name: 'Express.js', color: 'border-slate-500/30 text-slate-200 bg-slate-500/10' },
    { name: 'MongoDB Atlas', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
    { name: 'Java (DSA)', color: 'border-orange-500/30 text-orange-400 bg-orange-500/10' }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#04060b] border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 bg-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / BACKGROUND &amp; IDENTITY</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
            WHO <span className="text-slate-500 font-serif italic font-normal">AM</span> I?
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
            <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#0b0f19] shadow-2xl group">
              <img
                src={profilePhoto}
                alt="Alok Choudhary"
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-transparent to-transparent opacity-80" />
              
              {/* Bottom Card Identity Strip */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl border border-white/10 bg-[#0b0f19]/80 backdrop-blur-md font-mono text-center">
                <span className="font-syne font-bold text-xs sm:text-sm text-white block">ALOK CHOUDHARY</span>
                <span className="text-[10px] text-cyan-400 font-semibold block mt-0.5 uppercase tracking-wider">
                  Full Stack Developer • Jaipur, India
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
            <p className="text-slate-200 font-syne font-medium text-lg sm:text-2xl md:text-3xl leading-relaxed">
              I build modern full-stack applications with{' '}
              <span className="text-cyan-400 font-bold">React</span>,{' '}
              <span className="text-green-400 font-bold">Node.js</span>, and{' '}
              <span className="text-emerald-400 font-bold">MongoDB</span> — focused on clean architecture, scalable APIs, and polished user experiences.
            </p>

            <p className="text-slate-400 font-mono text-xs sm:text-sm leading-relaxed font-light">
              Specialized in engineering robust digital products from ideation to production. From real-time DOM threat scanners to full-stack food delivery ecosystems, I focus on performance, intuitive user flow, and clean code principles.
            </p>

            {/* Core Tech Pills */}
            <div className="pt-2">
              <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider block mb-3 font-semibold">
                CORE TECHNICAL PILLARS:
              </span>
              <div className="flex flex-wrap gap-2">
                {techPills.map((pill, idx) => (
                  <span
                    key={idx}
                    className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold border ${pill.color}`}
                  >
                    {pill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div>
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block">ROLE FOCUS</span>
                <span className="text-white font-semibold mt-1 block">Full-Stack &amp; Systems</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] uppercase tracking-wider block">LOCATION / TIMEZONE</span>
                <span className="text-cyan-400 font-semibold mt-1 block">Jaipur, India (IST)</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Utensils, ArrowRight } from 'lucide-react';
import ParticleWaveCanvas from './ParticleWaveCanvas';

export default function Hero({ onOpenFoodRushModal }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 flex flex-col justify-between items-center overflow-hidden bg-[#07090e]">
      
      {/* 3D Interactive Undulating Particle Dot Wave Grid */}
      <ParticleWaveCanvas />

      {/* Subtle Ambient Vignette & Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff08_1px,_transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40 z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Hero Visual Area */}
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center relative z-10 my-auto">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-[#0b0f19]/80 backdrop-blur-xl text-cyan-300 font-mono text-[11px] sm:text-xs font-semibold mb-6 shadow-sm tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span>FULL-STACK MERN DEVELOPER • JAVA + DSA</span>
        </motion.div>

        {/* Hero Headline — Massive Staggered Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-syne font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] mb-6 select-none"
        >
          <span className="block text-white">ALOK</span>
          <span className="block text-shiny">CHOUDHARY</span>
        </motion.div>

        {/* Short Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-mono text-slate-300 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mb-8 sm:mb-10 font-light px-2"
        >
          Building high-performance web applications, scalable APIs &amp;{' '}
          <span className="text-cyan-400 font-serif italic">digital products</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto px-4"
        >
          <button
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all hover:-translate-y-0.5"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Interactive Expandable Hover Resume Pill */}
          <a
            href="/alok-choudhary-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center bg-[#0e1320] border border-white/15 hover:border-cyan-400 h-12 w-full sm:w-12 hover:sm:w-48 rounded-full transition-all duration-500 ease-[0.23,1,0.32,1] overflow-hidden shadow-md justify-center sm:justify-start"
          >
            <span className="whitespace-nowrap sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 sm:pl-5 sm:pr-10">
              View Resume
            </span>
            <div className="sm:absolute right-0 flex items-center justify-center size-10 sm:size-12 text-cyan-400 group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </a>

          <button
            onClick={onOpenFoodRushModal}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/15 hover:border-orange-400 bg-white/5 text-slate-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
          >
            <Utensils className="w-4 h-4 text-orange-400" />
            <span>FoodRush Case Study</span>
          </button>
        </motion.div>

        {/* Compact 4-Tile Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl font-mono shadow-xl"
        >
          <div className="flex flex-col items-center border-r border-white/10 pr-2">
            <span className="font-syne text-xl sm:text-2xl font-black text-white">05+</span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">Projects</span>
          </div>
          <div className="flex flex-col items-center border-r sm:border-r border-white/10 pr-2">
            <span className="font-syne text-xl sm:text-2xl font-black text-white">150+</span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">Problems</span>
          </div>
          <div className="flex flex-col items-center border-r border-white/10 pr-2">
            <span className="font-syne text-xl sm:text-2xl font-black text-cyan-400">MERN</span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">Stack</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-syne text-xl sm:text-2xl font-black text-purple-400">JAVA</span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">DSA</span>
          </div>
        </motion.div>

      </div>

      {/* Subtle Scroll to Explore Indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 mt-6 sm:mt-10 flex flex-col items-center gap-1.5 text-slate-500 hover:text-cyan-400 font-mono text-[10px] tracking-[0.25em] uppercase transition-colors group cursor-pointer"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
      </motion.button>

    </section>
  );
}

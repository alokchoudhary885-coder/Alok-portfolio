import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Utensils, Zap, Rocket, ArrowDownRight } from 'lucide-react';
import ParticleWaveCanvas from './ParticleWaveCanvas';

export default function Hero({ onOpenFoodRushModal }) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-36 pb-14 sm:pb-20 px-3 sm:px-8 flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* 3D Interactive Undulating Particle Dot Wave Grid */}
      <ParticleWaveCanvas />

      {/* Syahril-Style 45-Degree Angled Ambient Light Ray Beams */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none">
          <div
            style={{
              transform: 'translateY(-300px) rotate(-45deg)',
              background: 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(0, 240, 255, 0.15) 0, rgba(168, 85, 247, 0.05) 50%, transparent 80%)',
              width: '560px',
              height: '1380px'
            }}
            className="absolute top-0 left-0"
          />
        </div>
        <div className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none">
          <div
            style={{
              transform: 'translateY(-300px) rotate(45deg)',
              background: 'radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(168, 85, 247, 0.15) 0, rgba(0, 240, 255, 0.05) 50%, transparent 80%)',
              width: '560px',
              height: '1380px'
            }}
            className="absolute top-0 right-0"
          />
        </div>
      </div>

      {/* Syahril-Style Dot Matrix Background Overlay */}
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_#ffffff12_0.5px,_transparent_0.5px)] opacity-30 [background-size:24px_24px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Floating Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel border border-cyan-500/40 bg-[#0b0f19]/80 backdrop-blur-xl text-cyan-400 font-mono text-[10px] sm:text-xs font-bold mb-4 sm:mb-6 shadow-[0_0_20px_rgba(0,240,255,0.25)] uppercase tracking-wider max-w-full truncate"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400 shrink-0" />
          <span className="truncate">FULL-STACK MERN DEVELOPER • JAVA + DSA</span>
        </motion.div>

        {/* Syahril-Style Giant Visual Identity with Text-Shiny Shimmer & Embedded Icons */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-syne font-black text-4xl sm:text-7xl lg:text-9xl tracking-tight leading-[0.92] mb-4 sm:mb-6 text-center select-none"
        >
          <span className="flex items-center justify-center gap-2 sm:gap-4 text-white">
            <span>ALOK</span>
            <div className="inline-flex items-center justify-center cursor-pointer group">
              <Zap className="w-[0.75em] h-[0.75em] text-cyan-400 group-hover:text-cyan-300 transition-colors animate-pulse shrink-0" />
            </div>
          </span>
          <span className="text-shiny block drop-shadow-[0_0_35px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 sm:gap-4">
            <span>CHOUDHARY</span>
            <div className="inline-flex items-center justify-center cursor-pointer group hidden sm:inline-flex">
              <Rocket className="w-[0.7em] h-[0.7em] text-purple-400 group-hover:text-purple-300 transition-colors shrink-0" />
            </div>
          </span>
        </motion.h1>

        {/* Clean Short Subtitle with Elegant Mixed Typography */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-mono text-slate-300 text-xs sm:text-base max-w-xl leading-relaxed mb-6 sm:mb-8 font-light px-2"
        >
          Building high-performance web applications, scalable APIs & <span className="text-cyan-400 font-serif italic">digital products</span>.
        </motion.p>

        {/* Action Buttons with Syahril-Style Expandable Hover Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto px-4"
        >
          <a
            href="#projects"
            className="interactive-card w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,240,255,0.45)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Interactive Expandable Hover Resume Pill */}
          <a
            href="/alok-choudhary-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center bg-zinc-900 border border-cyan-500/40 hover:border-cyan-400 h-12 w-full sm:w-12 hover:sm:w-48 rounded-full transition-all duration-500 ease-[0.23,1,0.32,1] overflow-hidden shadow-xl justify-center sm:justify-start"
          >
            <span className="whitespace-nowrap sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 sm:pl-5 sm:pr-10">
              View Resume
            </span>
            <div className="sm:absolute right-0 flex items-center justify-center size-10 sm:size-12 text-cyan-400 group-hover:rotate-45 transition-transform duration-500">
              <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </a>

          <button
            onClick={onOpenFoodRushModal}
            className="interactive-card w-full sm:w-auto px-7 py-3.5 rounded-full glass-panel border border-white/20 hover:border-cyan-400 bg-white/5 text-slate-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
          >
            <Utensils className="w-4 h-4 text-orange-400" />
            <span>FoodRush Case Study</span>
          </button>
        </motion.div>

        {/* Compact Vertical Tile Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl glass-panel border border-white/10 bg-[#0b0f19]/70 backdrop-blur-xl font-mono"
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
    </section>
  );
}

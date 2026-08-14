import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Utensils } from 'lucide-react';
import ParticleWaveCanvas from './ParticleWaveCanvas';

export default function Hero({ onOpenFoodRushModal }) {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 px-4 md:px-8 flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* 3D Interactive Undulating Particle Dot Wave Grid */}
      <ParticleWaveCanvas />

      {/* Radial Gradient Lights Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Floating Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 bg-[#0b0f19]/80 backdrop-blur-xl text-cyan-400 font-mono text-[11px] font-semibold mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span>FULL STACK MERN DEVELOPER • JAVA + DSA</span>
        </motion.div>

        {/* Main Title (Clean, Proportioned, Elegant Typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-syne font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-5 max-w-3xl"
        >
          ALOK <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.35)]">CHOUDHARY</span>
        </motion.h1>

        {/* Clean Short Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-mono text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed mb-8 font-light"
        >
          Building high-performance web applications, scalable REST APIs, and modern digital products.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
        >
          <a
            href="#projects"
            className="interactive-card px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenFoodRushModal}
            className="interactive-card px-7 py-3 rounded-full glass-panel border border-white/20 hover:border-cyan-400 bg-white/5 text-slate-200 font-mono text-xs font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            <Utensils className="w-4 h-4 text-orange-400" />
            <span>FoodRush Case Study</span>
          </button>
        </motion.div>

        {/* Compact Stats Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl glass-panel border border-white/10 bg-[#0b0f19]/70 backdrop-blur-xl font-mono"
        >
          <div className="flex flex-col items-center border-r border-white/10 pr-2">
            <span className="font-syne text-xl sm:text-2xl font-black text-white">3+</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Projects Built</span>
          </div>
          <div className="flex flex-col items-center border-r border-white/10 pr-2">
            <span className="font-syne text-xl sm:text-2xl font-black text-white">150+</span>
            <span className="text-[10px] text-slate-400 mt-0.5">LeetCode Solved</span>
          </div>
          <div className="flex flex-col items-center border-r border-white/10 pr-2">
            <span className="font-syne text-xl sm:text-2xl font-black text-cyan-400">MERN</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Stack Developer</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-syne text-xl sm:text-2xl font-black text-purple-400">JAVA+DSA</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Problem Solving</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

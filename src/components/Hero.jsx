import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Utensils, Code, Terminal, Zap, ExternalLink } from 'lucide-react';
import ParticleWaveCanvas from './ParticleWaveCanvas';

export default function Hero({ onOpenFoodRushModal }) {
  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-20 px-4 md:px-8 flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* 3D Interactive Undulating Particle Dot Wave Grid */}
      <ParticleWaveCanvas />

      {/* Radial Gradient Lights Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Floating Badge Pill (TheSiniySky Style) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 bg-[#0b0f19]/80 backdrop-blur-xl text-cyan-400 font-mono text-xs font-semibold mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
          <span>FULL STACK MERN DEVELOPER • JAVA + DSA</span>
        </motion.div>

        {/* Main Title (Massive Clean Bold Typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-syne font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.02] mb-6 max-w-4xl"
        >
          Build Faster with <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            Alok Choudhary
          </span>
        </motion.h1>

        {/* Clean Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-mono text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-10 font-light"
        >
          B.Tech Computer Science Engineer building modern web applications, scalable REST APIs, and high-performance digital products.
        </motion.p>

        {/* Primary Action Buttons (TheSiniySky Pill Buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="interactive-card px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenFoodRushModal}
            className="interactive-card px-8 py-3.5 rounded-full glass-panel border border-white/20 hover:border-cyan-400 bg-white/5 text-slate-200 font-mono text-xs font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
          >
            <Utensils className="w-4 h-4 text-orange-400" />
            <span>FoodRush Case Study</span>
          </button>
        </motion.div>

        {/* Stats Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel border border-white/10 bg-[#0b0f19]/70 backdrop-blur-xl font-mono"
        >
          <div className="flex flex-col items-center border-r border-white/10 pr-2">
            <span className="font-syne text-2xl sm:text-3xl font-black text-white">3+</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Projects Built</span>
          </div>
          <div className="flex flex-col items-center border-r border-white/10 pr-2">
            <span className="font-syne text-2xl sm:text-3xl font-black text-white">150+</span>
            <span className="text-[11px] text-slate-400 mt-0.5">LeetCode Solved</span>
          </div>
          <div className="flex flex-col items-center border-r border-white/10 pr-2">
            <span className="font-syne text-2xl sm:text-3xl font-black text-cyan-400">MERN</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Stack Expert</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-syne text-2xl sm:text-3xl font-black text-purple-400">JAVA+DSA</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Problem Solving</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

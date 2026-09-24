import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ArrowRight, Utensils, FileText, Code2, Link as LinkIcon } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero({ onOpenFoodRushModal }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 flex flex-col justify-between items-center overflow-hidden bg-[#0A0A0A] dot-grid">
      
      {/* Subtle Ambient Spatial Neon Glow Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#CCFF00]/8 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-[600px] -right-32 w-[550px] h-[550px] bg-[#CCFF00]/5 rounded-full blur-[170px]" />

      {/* Main Stitch Dual-Column Container */}
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10 my-auto py-8">
        
        {/* Left Column (60% ~ 7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Status Indicator Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-[#141414] border border-[#CCFF00]/30 shadow-[0_0_20px_-3px_rgba(204,255,0,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]"></span>
            </span>
            <span className="font-mono text-[11px] sm:text-xs text-[#CCFF00] tracking-wider font-semibold uppercase">
              FULL-STACK MERN DEVELOPER • JAVA + DSA
            </span>
          </motion.div>

          {/* Main Title — Stitch Massive Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold tracking-tight leading-[0.92] select-none"
            style={{ fontSize: 'clamp(50px, 6.8vw, 92px)' }}
          >
            <span className="block text-white">ALOK</span>
            <span className="block text-shiny drop-shadow-[0_0_35px_rgba(204,255,0,0.3)]">CHOUDHARY</span>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-[#A0A0A0] text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Building high-performance web applications, scalable APIs &amp;{' '}
            <span className="text-white font-medium">digital products</span>.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 w-full pt-1"
          >
            {/* Primary Button */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#CCFF00] hover:bg-[#d6ff1a] text-black font-mono text-xs sm:text-sm font-bold transition-all duration-200 shadow-[0_0_30px_rgba(204,255,0,0.35)] hover:shadow-[0_0_40px_rgba(204,255,0,0.6)] hover:-translate-y-0.5"
            >
              <span>Explore Work</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            {/* Secondary Button: View Resume */}
            <a
              href="/alok-choudhary-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#161616] hover:bg-[#202020] border border-[#CCFF00]/30 hover:border-[#CCFF00] text-white font-mono text-xs sm:text-sm font-semibold transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-[#CCFF00]" />
              <span>View Resume</span>
            </a>

            {/* Featured Tag / Case Study Button */}
            <button
              onClick={onOpenFoodRushModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-[#141414] hover:bg-[#1c1c1c] border border-white/10 hover:border-[#CCFF00]/50 text-stone-200 font-mono text-xs font-medium transition-all"
            >
              <Utensils className="w-4 h-4 text-[#CCFF00]" />
              <span>FoodRush Case Study</span>
            </button>

            {/* External Icon Links */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <a
                href="https://github.com/alokchoudhary885-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-sm bg-[#161616] border border-white/10 hover:border-[#CCFF00] flex items-center justify-center text-stone-400 hover:text-[#CCFF00] transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-sm bg-[#161616] border border-white/10 hover:border-[#CCFF00] flex items-center justify-center text-stone-400 hover:text-[#CCFF00] transition-colors"
              >
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Hero Quick Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3"
          >
            <div className="p-4 rounded-sm bg-[#141414]/90 border border-white/10 hover:border-[#CCFF00]/40 transition-colors flex flex-col gap-1">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#CCFF00] tracking-tight">05+</span>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider font-medium">Projects</span>
            </div>
            <div className="p-4 rounded-sm bg-[#141414]/90 border border-white/10 hover:border-[#CCFF00]/40 transition-colors flex flex-col gap-1">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">150+</span>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider font-medium">Problems</span>
            </div>
            <div className="p-4 rounded-sm bg-[#141414]/90 border border-white/10 hover:border-[#CCFF00]/40 transition-colors flex flex-col gap-1">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#CCFF00] tracking-tight">MERN</span>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider font-medium">Stack</span>
            </div>
            <div className="p-4 rounded-sm bg-[#141414]/90 border border-white/10 hover:border-[#CCFF00]/40 transition-colors flex flex-col gap-1">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">JAVA</span>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider font-medium">DSA</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column (40% ~ 5 cols) Interactive 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative w-full mt-6 lg:mt-0"
        >
          <div className="relative w-full rounded-sm bg-[#121212]/70 border border-[#CCFF00]/20 p-2 shadow-[0_0_50px_rgba(204,255,0,0.12)]">
            
            {/* Embedded 3D Scene */}
            <div className="w-full h-[460px] sm:h-[500px] rounded-sm bg-[#080808] relative overflow-hidden block">
              <ThreeCanvas />
            </div>

            {/* Floating Telemetry Badges */}
            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-sm bg-[#0c0c0c]/85 backdrop-blur-xl border border-white/10 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]"></span>
              <span className="font-mono text-[11px] text-white font-medium">Three.js &amp; WebGL 2.0</span>
            </div>

            <div className="absolute bottom-6 left-6 px-3.5 py-1.5 rounded-sm bg-[#0c0c0c]/85 backdrop-blur-xl border border-white/10 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]"></span>
              <span className="font-mono text-[11px] text-white font-medium">React.js &amp; Node.js</span>
            </div>

            <div className="absolute top-1/2 -right-3 -translate-y-1/2 px-3.5 py-1.5 rounded-sm bg-[#161616]/90 backdrop-blur-xl border border-[#CCFF00]/30 shadow-xl hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
              <span className="font-mono text-[11px] text-[#CCFF00]">Full-Stack MERN</span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll to Explore Indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 mt-6 flex flex-col items-center gap-1.5 text-stone-500 hover:text-[#CCFF00] font-mono text-[10px] tracking-[0.25em] uppercase transition-colors group cursor-pointer"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#CCFF00]" />
      </motion.button>

    </section>
  );
}

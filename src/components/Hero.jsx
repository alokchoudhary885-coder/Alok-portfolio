import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Utensils, FileText, Code2, Link as LinkIcon } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const RESUME_URL = "https://drive.google.com/file/d/1A7Sh87nIZzc_rbCZIfaIYYFvXSlIInc_/view?usp=drivesdk";

export default function Hero({ onOpenFoodRushModal }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 px-4 sm:px-8 lg:px-16 flex flex-col justify-between items-center overflow-hidden bg-[#090d16] dot-grid">
      
      {/* Subtle Ambient Spatial Glow Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[450px] h-[450px] bg-indigo-500/8 rounded-full blur-[150px]" />

      {/* Main Dual-Column Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10 my-auto">
        
        {/* Left Column (60% ~ 7 cols): Existing Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Status Indicator Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="font-mono text-xs text-blue-400 font-medium tracking-wide uppercase">
              Full-Stack MERN Developer • Java + DSA
            </span>
          </motion.div>

          {/* Main Title — Clean, Human, Balanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Alok <span className="text-shiny">Choudhary</span>
            </h1>
          </motion.div>

          {/* Sub-headline with increased line height and readability */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal"
          >
            Building high-performance web applications, scalable APIs &amp;{' '}
            <span className="text-white font-medium">digital products</span>. Experienced in React, Node.js, and Java algorithms.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 w-full pt-1"
          >
            {/* Primary Button */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Button: View Resume */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>View Resume</span>
            </a>

            {/* Featured Tag / Case Study Button */}
            <button
              onClick={onOpenFoodRushModal}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/80 text-slate-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
            >
              <Utensils className="w-3.5 h-3.5 text-blue-400" />
              <span>FoodRush Case Study</span>
            </button>

            {/* External Icon Links */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <a
                href="https://github.com/alokchoudhary885-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
              >
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Hero Quick Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
          >
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/30 transition-colors flex flex-col gap-0.5">
              <span className="text-2xl sm:text-3xl font-bold text-blue-400 tracking-tight">05+</span>
              <span className="text-xs text-slate-400 font-medium">Projects Built</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/30 transition-colors flex flex-col gap-0.5">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">150+</span>
              <span className="text-xs text-slate-400 font-medium">Problems Solved</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/30 transition-colors flex flex-col gap-0.5">
              <span className="text-2xl sm:text-3xl font-bold text-blue-400 tracking-tight">MERN</span>
              <span className="text-xs text-slate-400 font-medium">Full-Stack Core</span>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/30 transition-colors flex flex-col gap-0.5">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Java</span>
              <span className="text-xs text-slate-400 font-medium">OOP &amp; DSA</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column (40% ~ 5 cols): Interactive 3D Spline Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full mt-6 lg:mt-0 flex items-center justify-center"
        >
          <div className="relative w-full rounded-2xl bg-slate-900/40 border border-slate-800/80 p-2 shadow-xl shadow-black/30 overflow-hidden">
            
            {/* Embedded Spline 3D Scene */}
            <div className="w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-xl bg-slate-950/70 relative overflow-hidden flex items-center justify-center">
              <Spline
                scene="https://prod.spline.design/wpbAVYS8OeLwxS3e/scene.splinecode"
                className="w-full h-full cursor-grab active:cursor-grabbing"
              />
            </div>

            {/* Floating Telemetry Badges */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-sm flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-xs text-slate-200 font-medium">Spline 3D &amp; WebGL</span>
            </div>

            <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-sm flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span className="text-xs text-slate-200 font-medium">Interactive Orb</span>
            </div>

            <div className="absolute top-1/2 -right-3 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/95 backdrop-blur-md border border-blue-500/30 shadow-md hidden sm:flex items-center gap-2 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-xs font-medium text-blue-400">Full-Stack MERN</span>
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
        className="relative z-10 mt-8 flex flex-col items-center gap-1.5 text-slate-500 hover:text-blue-400 text-xs tracking-wider uppercase transition-colors group cursor-pointer"
      >
        <span>Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-blue-400" />
      </motion.button>

    </section>
  );
}

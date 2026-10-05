import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Utensils, FileText } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const RESUME_URL = "https://drive.google.com/file/d/1A7Sh87nIZzc_rbCZIfaIYYFvXSlIInc_/view?usp=drivesdk";

export default function Hero({ onOpenFoodRushModal }) {
  const splineRef = useRef(null);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // After Spline scene loads, find and nuke the "Built with Spline" watermark DOM node
  const onSplineLoad = useCallback(() => {
    try {
      const container = splineRef.current;
      if (!container) return;
      // Spline injects a watermark anchor after the canvas — hide it
      const kill = () => {
        const targets = container.querySelectorAll('a, [class*="watermark"], [class*="logo"]');
        targets.forEach(el => {
          el.style.cssText = 'display:none!important;visibility:hidden!important;opacity:0!important;width:0!important;height:0!important;overflow:hidden!important;';
        });
        // Also hide any sibling div after canvas (the badge wrapper)
        const canvas = container.querySelector('canvas');
        if (canvas) {
          let sibling = canvas.nextElementSibling;
          while (sibling) {
            sibling.style.cssText = 'display:none!important;';
            sibling = sibling.nextElementSibling;
          }
        }
      };
      kill();
      // Retry a few times in case Spline adds it asynchronously
      setTimeout(kill, 500);
      setTimeout(kill, 1500);
    } catch (_) {}
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-20 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-16 flex flex-col justify-between items-center overflow-hidden bg-transparent dot-grid">
      
      {/* Subtle Ambient Spatial Glow Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[450px] h-[450px] bg-indigo-500/8 rounded-full blur-[150px]" />

      {/* Main Dual-Column Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10 my-auto">
        
        {/* Left Column (60% ~ 7 cols): Existing Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">

          {/* Main Title & Developer Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Alok <span className="text-shiny">Choudhary</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 tracking-tight">
              Full-Stack Developer <span className="text-blue-400 block sm:inline">• Building Scalable Web Products</span>
            </h2>
          </motion.div>

          {/* Concise supporting sentence */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal"
          >
            I build scalable full-stack applications with React, Node.js and modern web technologies.
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
          className="lg:col-span-5 relative w-full mt-6 lg:mt-0"
        >
          {/* spline-wrapper: outer overflow-hidden container clips the bottom 70px where watermark is drawn */}
          <div ref={splineRef} className="spline-wrapper relative w-full h-[320px] sm:h-[440px] lg:h-[580px] overflow-hidden">
            <div className="w-full h-[calc(100%+70px)] -mb-[70px]">
              <Spline
                scene="https://prod.spline.design/kOb8SDOF-SGGifT2/scene.splinecode"
                className="w-full h-full scale-120 cursor-grab active:cursor-grabbing"
                style={{ transformOrigin: 'center 45%' }}
                onLoad={onSplineLoad}
              />
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

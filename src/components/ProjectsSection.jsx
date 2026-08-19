import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Github, ArrowUpRight } from 'lucide-react';

export default function ProjectsSection({ onOpenFoodRushModal }) {
  return (
    <section id="projects" className="relative py-20 sm:py-28 px-3.5 sm:px-8 bg-[#06070a] bg-noise overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-[11px] sm:text-xs text-purple-400 mb-3 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / SELECTED PROJECTS</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-7xl font-extrabold text-white tracking-tight">
            SELECTED <span className="text-gradient-purple">WORK</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2">
            Production MERN applications & developer portfolio engineering
          </p>
        </div>

        {/* KING PROJECT: FOODRUSH OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-card-orange p-5 sm:p-10 md:p-12 mb-10 sm:mb-12 overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
            
            {/* Left Overview Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 font-mono text-[11px] sm:text-xs font-bold mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping shrink-0" />
                <span>05.1 / FEATURED MERN PROJECT</span>
              </div>

              <h3 className="font-syne text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight flex items-center gap-2">
                <span>FOODRUSH</span>
                <span className="text-2xl sm:text-3xl">🍔</span>
              </h3>

              <p className="text-orange-400 font-mono text-xs sm:text-sm font-semibold mb-3">
                FULL-STACK FOOD DELIVERY PLATFORM
              </p>

              <p className="text-slate-300 text-sm sm:text-lg font-light leading-relaxed mb-5 sm:mb-6">
                A full-stack food delivery web application connecting customers with local restaurant owners. Features customer & restaurant owner roles, 25+ RESTful API endpoints, Razorpay online payment integration, voice search, and 6-digit OTP verification.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 font-mono text-[11px] sm:text-xs">
                {['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Razorpay', 'Cloudinary', 'Web Speech API', 'Zustand'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onOpenFoodRushModal}
                  className="interactive-card w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-orange-500 text-black font-bold font-mono text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,85,0,0.5)] hover:bg-orange-400 transition-all duration-300"
                >
                  <span>Explore Technical Case Study</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="https://github.com/alokchoudhary885-coder"
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-card w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full glass-panel border border-white/15 hover:border-white/30 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full p-4 sm:p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col gap-3 sm:gap-4 font-mono text-xs relative group-hover:border-orange-500/50 transition-colors shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-slate-400 text-[11px] sm:text-xs">
                  <span className="text-orange-400 font-bold">FOODRUSH ARCHITECTURE</span>
                  <span>06 / CASE STUDY</span>
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-[11px] sm:text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">API Endpoints:</span>
                    <span className="text-orange-400 font-bold">25+ REST Routes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Security:</span>
                    <span className="text-purple-400 font-bold">JWT + OTP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Payments:</span>
                    <span className="text-green-400 font-bold">Razorpay SDK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Voice Search:</span>
                    <span className="text-cyan-400 font-bold">Web Speech API</span>
                  </div>
                </div>

                <button
                  onClick={onOpenFoodRushModal}
                  className="p-3 rounded-xl bg-orange-500/15 border border-orange-500/40 text-orange-400 hover:text-white hover:bg-orange-500/30 text-center font-bold transition-all text-[11px] sm:text-xs"
                >
                  CLICK TO VIEW 06 / FULL TECHNICAL CASE STUDY
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* SECOND PROJECT: DEVELOPER PORTFOLIO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl glass-card-purple border border-white/15 p-5 sm:p-8 md:p-10 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 font-mono text-[11px] sm:text-xs font-bold mb-3">
                <span>05.2 / DEVELOPER PORTFOLIO</span>
              </div>

              <h3 className="font-syne text-xl sm:text-4xl font-bold text-white mb-2.5">
                CINEMATIC DEVELOPER PORTFOLIO
              </h3>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-5">
                Interactive developer portfolio with 3D card tilt physics, custom canvas cursor spotlight, smooth scroll reveals, and Dribbble-inspired deck navigation.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 font-mono text-[11px] sm:text-xs">
                {['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Web Audio API'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-md bg-white/5 border border-white/10 text-purple-400">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="interactive-card px-5 py-2.5 rounded-full bg-purple-600 text-white font-bold font-mono text-xs flex items-center gap-2 shadow-neon-purple hover:bg-purple-500 transition-all"
              >
                <span>Current View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="lg:col-span-4 p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 font-mono text-[11px] sm:text-xs text-slate-300 space-y-2.5">
              <div className="text-purple-400 font-bold">TECHNICAL HIGHLIGHTS:</div>
              <div className="flex items-center gap-2">✓ Reusable Modular Components</div>
              <div className="flex items-center gap-2">✓ Web Audio Synth Feedback</div>
              <div className="flex items-center gap-2">✓ 100% Responsive Design</div>
              <div className="flex items-center gap-2">✓ Optimized Vite Build</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

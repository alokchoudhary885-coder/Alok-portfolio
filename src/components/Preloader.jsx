import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Terminal, Zap, Sparkles } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [percentage, setPercentage] = useState(0);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 6;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleEnterExperience = () => {
    setIsEntering(true);
    setTimeout(() => {
      onComplete();
    }, 900);
  };

  const nameLetters = "ALOK CHOUDHARY".split("");

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1, scale: 1, rotateY: 0 }}
        animate={isEntering ? {
          scale: 1.4,
          rotateY: 180,
          opacity: 0,
          filter: "blur(20px)",
          transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
        } : { opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#06070a] text-white p-6 md:p-12 overflow-hidden select-none bg-noise perspective-1000"
      >
        {/* Top bar info */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-slate-400 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
            <span className="text-purple-400 font-semibold">INITIALIZING 3D CINEMATIC SYSTEM</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>v2.026</span>
          </div>
        </div>

        {/* Center Typography & Counter */}
        <div className="flex flex-col items-center justify-center my-auto text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full mb-8 flex items-center gap-2 shadow-neon-purple"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>00 / CINEMATIC INTRO</span>
          </motion.div>

          <h1 className="font-syne text-4xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 flex flex-wrap justify-center gap-x-2 md:gap-x-4">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={letter === " " ? "w-4 md:w-8" : "inline-block text-gradient-purple"}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-mono text-xs md:text-sm text-slate-400 tracking-widest uppercase mb-10"
          >
            FULL STACK DEVELOPER • MERN ARCHITECT
          </motion.p>

          {/* Progress percentage bar */}
          <div className="w-64 md:w-80 flex flex-col items-center gap-3">
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/10 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 rounded-full"
                style={{ width: `${Math.min(percentage, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="w-full flex items-center justify-between font-mono text-xs text-slate-400">
              <span>SYSTEM LOADING</span>
              <span className="text-purple-400 font-bold text-sm">{Math.min(percentage, 100)}%</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA / Enter 3D Journey Button */}
        <div className="w-full flex flex-col items-center justify-center pt-4 border-t border-white/10">
          <button
            onClick={handleEnterExperience}
            className="interactive-card px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            <Zap className="w-4 h-4 text-yellow-300 animate-bounce" />
            <span>START 3D CINEMATIC TOUR →</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

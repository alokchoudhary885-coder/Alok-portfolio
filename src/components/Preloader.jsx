import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Code2, Volume2 } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [percentage, setPercentage] = useState(0);
  const [isEntering, setIsEntering] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.getVoices();
        };
      }
    }

    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const playCinematicVoiceAndSwell = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(55, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 1.2);

        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.4);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.8);
      }
    } catch (err) {
      // Ignore audio error
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(
        "Welcome to Alok Choudhary's portfolio. Enjoy the experience."
      );

      const voices = window.speechSynthesis.getVoices();
      
      const femaleVoice = voices.find(
        (v) =>
          (v.lang.startsWith('en') &&
            (v.name.includes('Female') ||
             v.name.includes('Google UK English Female') ||
             v.name.includes('Google US English') ||
             v.name.includes('Zira') ||
             v.name.includes('Samantha') ||
             v.name.includes('Victoria') ||
             v.name.includes('Karen') ||
             v.name.includes('Natural'))) ||
          v.lang === 'en-GB' ||
          v.lang === 'en-US'
      );

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.rate = 0.92;
      utterance.pitch = 1.05;
      utterance.volume = 1.0;

      setIsPlayingVoice(true);
      utterance.onend = () => setIsPlayingVoice(false);
      utterance.onerror = () => setIsPlayingVoice(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleEnterExperience = () => {
    if (isEntering) return;
    setIsEntering(true);

    playCinematicVoiceAndSwell();

    setTimeout(() => {
      onComplete();
    }, 750);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1, scale: 1 }}
        animate={isEntering ? {
          scale: 1.05,
          opacity: 0,
          filter: "blur(10px)",
          transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
        } : { opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#090d16] text-white p-6 md:p-10 overflow-hidden select-none"
      >
        {/* Top Bar Info */}
        <div className="w-full max-w-5xl flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-4 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-blue-400 font-medium">Portfolio Environment</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>v2.026</span>
          </div>
        </div>

        {/* Center Name */}
        <div className="flex flex-col items-center justify-center my-auto text-center w-full max-w-4xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/25 px-3.5 py-1.5 rounded-full mb-6 flex items-center gap-2"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>FULL STACK DEVELOPER</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            Alok <span className="text-shiny">Choudhary</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-xs sm:text-sm text-slate-400 tracking-wider uppercase mt-4 mb-8 font-normal"
          >
            Computer Science Engineer • MERN Stack Developer
          </motion.p>

          {/* Progress Percentage Bar */}
          <div className="w-64 sm:w-80 flex flex-col items-center gap-2.5">
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                style={{ width: `${Math.min(percentage, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="w-full flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>SYSTEM READY</span>
              <span className="text-blue-400 font-bold">{Math.min(percentage, 100)}%</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="w-full max-w-5xl flex flex-col items-center justify-center pt-4 border-t border-slate-800">
          <button
            onClick={handleEnterExperience}
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all group cursor-pointer"
          >
            <span>Enter Portfolio</span>
            {isPlayingVoice ? (
              <Volume2 className="w-4 h-4 text-blue-200 animate-pulse" />
            ) : (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

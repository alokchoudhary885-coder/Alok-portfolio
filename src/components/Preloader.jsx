import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Code2, Volume2 } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [percentage, setPercentage] = useState(0);
  const [isEntering, setIsEntering] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  useEffect(() => {
    // Pre-fetch voices on mount for instant availability
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
    // 1. Play subtle low-frequency ambient synth swell using Web Audio API
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
      // Ignore if web audio context restricted
    }

    // 2. Play Natural Female Cinematic Voice Welcome via SpeechSynthesis API
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Prevent duplicate speech overlap

      const utterance = new SpeechSynthesisUtterance(
        "Welcome to Alok Choudhary's portfolio. Enjoy the experience."
      );

      const voices = window.speechSynthesis.getVoices();
      
      // Dynamic detection for best female-sounding English voice
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

      utterance.rate = 0.92; // Slightly calm, natural speaking speed
      utterance.pitch = 1.05; // Clear, young, confident female pitch
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

    // Play cinematic voice & swell immediately upon click
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
          scale: 1.08,
          opacity: 0,
          filter: "blur(12px)",
          transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        } : { opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#06070a] text-white p-4 md:p-10 overflow-hidden select-none bg-noise"
      >
        {/* Top Bar Info */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-slate-400 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
            <span className="text-purple-400 font-semibold">PORTFOLIO ENVIRONMENT</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>v2.026</span>
          </div>
        </div>

        {/* Center Name (Fluid Responsive Single Line - 100% Fit Guarantee) */}
        <div className="flex flex-col items-center justify-center my-auto text-center w-full max-w-6xl px-2">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/30 px-3.5 py-1.5 rounded-full mb-6 flex items-center gap-2 shadow-neon-purple"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>00 / FULL STACK DEVELOPER</span>
          </motion.div>

          {/* Dynamic Fluid Clamp Font Size - Never Cut Off */}
          <h1 className="font-syne font-black tracking-tight text-gradient-purple whitespace-nowrap text-[clamp(1.4rem,5.2vw,4.5rem)] leading-none w-full text-center px-1">
            ALOK CHOUDHARY
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-mono text-xs md:text-sm text-slate-400 tracking-widest uppercase mt-4 mb-10 flex items-center justify-center gap-2"
          >
            <span>COMPUTER SCIENCE ENGINEER • MERN STACK DEVELOPER</span>
          </motion.p>

          {/* Progress Percentage Bar */}
          <div className="w-64 md:w-80 flex flex-col items-center gap-3">
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/10 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 rounded-full"
                style={{ width: `${Math.min(percentage, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="w-full flex items-center justify-between font-mono text-xs text-slate-400">
              <span>SYSTEM READY</span>
              <span className="text-purple-400 font-bold text-sm">{Math.min(percentage, 100)}%</span>
            </div>
          </div>
        </div>

        {/* Bottom Professional CTA Button */}
        <div className="w-full flex flex-col items-center justify-center pt-4 border-t border-white/10">
          <button
            onClick={handleEnterExperience}
            className="interactive-card px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all group"
          >
            <span>ENTER PORTFOLIO</span>
            {isPlayingVoice ? (
              <Volume2 className="w-4 h-4 text-purple-300 animate-pulse" />
            ) : (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

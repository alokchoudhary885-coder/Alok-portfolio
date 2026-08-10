import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioController() {
  const [isMuted, setIsMuted] = useState(true);
  const audioCtxRef = useRef(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
  };

  const playClickSound = () => {
    if (isMuted || !audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio context fallback
    }
  };

  const toggleSound = () => {
    initAudio();
    setIsMuted(prev => !prev);
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (e.target.closest('button, a, .interactive-card')) {
        playClickSound();
      }
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [isMuted]);

  return (
    <button
      onClick={toggleSound}
      aria-label="Toggle Audio Ambient"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel border border-white/10 hover:border-brandCyan/50 text-xs font-mono tracking-wider transition-all duration-300 shadow-neon-cyan hover:scale-105 active:scale-95 group"
    >
      <div className="relative flex items-center justify-center">
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-white" />
        ) : (
          <Volume2 className="w-4 h-4 text-brandCyan animate-pulse" />
        )}
      </div>
      <span className={isMuted ? "text-slate-400" : "text-brandCyan font-semibold"}>
        {isMuted ? "SOUND: OFF" : "SOUND: ON"}
      </span>
      {!isMuted && (
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandCyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brandCyan"></span>
        </span>
      )}
    </button>
  );
}

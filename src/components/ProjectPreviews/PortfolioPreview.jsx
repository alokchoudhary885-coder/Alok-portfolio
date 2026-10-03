import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Compass, Eye, Monitor } from 'lucide-react';

const MINI_PROJECTS = [
  { title: 'FoodRush Ecosystem', tag: 'MERN', color: 'from-orange-500/20 to-amber-500/10', border: 'border-orange-500/30' },
  { title: 'JobGuard Extension', tag: 'MV3 AI', color: 'from-blue-500/20 to-indigo-500/10', border: 'border-blue-500/30' },
  { title: 'Dev Command Center', tag: 'DORA', color: 'from-cyan-500/20 to-blue-500/10', border: 'border-cyan-500/30' }
];

export default function PortfolioPreview() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % MINI_PROJECTS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800/90 bg-[#060811] text-xs shadow-lg relative select-none">
      {/* Background Subtle Drifting Particles / Spotlight */}
      <motion.div
        className="absolute w-28 h-28 rounded-full bg-blue-500/10 blur-[40px] pointer-events-none"
        animate={{
          x: ['10%', '70%', '30%', '10%'],
          y: ['10%', '30%', '60%', '10%']
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
      />

      {/* Mini Header Bar */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Monitor className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-white tracking-tight text-[11px]">Cinematic Engine</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-400 font-mono border border-indigo-500/20">
              Interactive
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[9px] text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-blue-400">
            3D Tilt Deck
          </span>
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-3.5 space-y-3 relative z-10">
        {/* Mini Hero Mockup */}
        <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-[9px] font-mono text-blue-400 uppercase tracking-wider">
              // Creative Frontend Engineering
            </div>
            <div className="font-bold text-white text-xs mt-0.5 leading-tight">
              Full-Stack Systems. <span className="text-blue-400">Production Scale.</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[9px] font-mono text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
            <Eye className="w-3 h-3 text-cyan-400" />
            <span>Spotlight Active</span>
          </div>
        </div>

        {/* 3D Stacked Project Cards Deck */}
        <div>
          <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-2">
            <span>Dribbble-Inspired Deck Navigation</span>
            <span className="text-indigo-400">Card [{activeCard + 1} / 3]</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {MINI_PROJECTS.map((proj, idx) => {
              const isActive = activeCard === idx;
              return (
                <motion.div
                  key={proj.title}
                  animate={{
                    y: isActive ? -3 : 0,
                    scale: isActive ? 1.02 : 0.98,
                    borderColor: isActive ? 'rgba(96, 165, 250, 0.7)' : 'rgba(51, 65, 85, 0.6)'
                  }}
                  transition={{ duration: 0.3 }}
                  className={`p-2.5 rounded-lg border bg-gradient-to-b ${proj.color} flex flex-col justify-between h-20 relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold text-slate-300">
                      0{idx + 1}
                    </span>
                    <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-slate-950/80 text-blue-300 border border-slate-800">
                      {proj.tag}
                    </span>
                  </div>

                  <div>
                    <div className="font-medium text-white text-[10px] leading-tight truncate">
                      {proj.title}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-blue-400 animate-pulse' : 'bg-slate-600'}`} />
                      <span className="text-[8px] font-mono text-slate-400">
                        {isActive ? 'In Focus' : 'Queued'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Interactive Feature Bar */}
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 text-[9px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span>WebGL 3D Orbit &amp; Dynamic Card Tilt</span>
          </span>
          <span className="text-blue-400 font-semibold">60 FPS Smooth</span>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DeployCard() {
  const stages = ['BUILD', 'TEST', 'DEPLOY', 'HEALTH CHECK', 'LIVE'];
  const [currentStageIdx, setCurrentStageIdx] = useState(4); // Default to LIVE

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStageIdx((prev) => (prev + 1) % stages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [stages.length]);

  const progressPercent = Math.round(((currentStageIdx + 1) / stages.length) * 100);

  const deploymentPlatforms = [
    { name: 'Vercel', icon: '▲' },
    { name: 'Render', icon: '⬡' },
    { name: 'MongoDB Atlas', icon: '🍃' },
    { name: 'GitHub Actions', icon: '🐙' },
  ];

  return (
    <div className="group rounded-xl bg-[#090e1a]/95 border border-emerald-500/35 hover:border-emerald-400/70 hover:shadow-[0_0_25px_rgba(16,185,129,0.18)] transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-emerald-500/25 pb-2.5 mb-2.5">
        <h3 className="font-mono text-xs font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-1.5 group-hover:text-emerald-300 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          PHASE IV: DEPLOY
        </h3>
        <span className="font-mono text-[10px] text-emerald-500/70 font-semibold tracking-wider">
          SYS_04
        </span>
      </div>

      {/* Body: Status Info (Left) + Wireframe Globe (Right) */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center my-auto py-1">
        {/* Left Column: Status Table + Progress Bar */}
        <div className="sm:col-span-7 flex flex-col justify-between space-y-2">
          {/* Key-Value Status Grid with Vivid Highlights */}
          <div className="font-mono text-[10.5px] space-y-1 bg-black/85 border border-emerald-500/30 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all rounded-lg p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">STATUS:</span>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/60 text-emerald-300 text-[9.5px] font-bold shadow-[0_0_8px_rgba(16,185,129,0.25)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_4px_#34d399]" />
                  LIVE
                </span>
                <span className="font-mono text-[8px] text-emerald-400/80 font-semibold px-1 py-0.2 rounded bg-emerald-950/60 border border-emerald-500/30">
                  SIM
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">PORT:</span>
              <span className="text-cyan-300 font-semibold shadow-[0_0_6px_rgba(6,182,212,0.2)]">3000</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">SSL:</span>
              <span className="text-emerald-400 font-bold shadow-[0_0_6px_rgba(16,185,129,0.2)]">TRUE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">API:</span>
              <span className="text-emerald-400 font-bold shadow-[0_0_6px_rgba(16,185,129,0.2)]">ONLINE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">DB:</span>
              <span className="text-emerald-400 font-bold shadow-[0_0_6px_rgba(16,185,129,0.2)]">CONNECTED</span>
            </div>
          </div>

          {/* Deployment Progress Bar with Vivid Green/Cyan Gradient */}
          <div className="space-y-1">
            <div className="flex items-center justify-between font-mono text-[9.5px]">
              <span className="text-slate-200 font-medium uppercase tracking-wider text-[8.5px]">
                DEPLOYMENT • <span className="text-emerald-300 font-bold">{stages[currentStageIdx]}</span>
              </span>
              <span className="text-emerald-400 font-bold shadow-[0_0_6px_rgba(16,185,129,0.3)]">{progressPercent}%</span>
            </div>

            <div className="h-2 w-full rounded-full bg-black/90 border border-emerald-500/40 p-0.5 overflow-hidden shadow-[0_0_8px_rgba(16,185,129,0.15)]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-[0_0_8px_#34d399]"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Vivid Wireframe Globe Visualization */}
        <div className="sm:col-span-5 relative flex items-center justify-center p-1">
          <svg
            viewBox="0 0 130 130"
            className="w-full max-w-[110px] h-auto select-none overflow-visible group-hover:brightness-110 transition-all"
          >
            <defs>
              <radialGradient id="globeGradVivid" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#0d9488" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#090e1a" stopOpacity="0.0" />
              </radialGradient>
              <filter id="emeraldGlowVivid" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Inner Globe Sphere Fill */}
            <circle cx="65" cy="65" r="40" fill="url(#globeGradVivid)" />

            {/* Outer Globe Border */}
            <circle
              cx="65"
              cy="65"
              r="40"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.3"
              strokeOpacity="0.8"
            />

            {/* Latitude Ellipses (Clear, Crisp Emerald) */}
            <ellipse cx="65" cy="65" rx="40" ry="20" fill="none" stroke="#10b981" strokeWidth="0.9" strokeOpacity="0.5" strokeDasharray="3 2" />
            <ellipse cx="65" cy="65" rx="40" ry="9" fill="none" stroke="#34d399" strokeWidth="0.9" strokeOpacity="0.6" />
            <line x1="25" y1="65" x2="105" y2="65" stroke="#10b981" strokeWidth="1" strokeOpacity="0.7" />

            {/* Longitude Ellipses */}
            <ellipse cx="65" cy="65" rx="20" ry="40" fill="none" stroke="#10b981" strokeWidth="0.9" strokeOpacity="0.5" strokeDasharray="3 2" />
            <ellipse cx="65" cy="65" rx="9" ry="40" fill="none" stroke="#34d399" strokeWidth="0.9" strokeOpacity="0.6" />
            <line x1="65" y1="25" x2="65" y2="105" stroke="#10b981" strokeWidth="1" strokeOpacity="0.7" />

            {/* Rotated Orbit Ring (Vivid Cyan) */}
            <ellipse
              cx="65"
              cy="65"
              rx="54"
              ry="14"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.3"
              strokeOpacity="0.85"
              transform="rotate(-25 65 65)"
              filter="url(#emeraldGlowVivid)"
            />

            {/* Orbiting Satellite Node with Glowing Pulse */}
            <g transform="rotate(-25 65 65)">
              <motion.circle
                r="3"
                fill="#22d3ee"
                filter="url(#emeraldGlowVivid)"
                animate={{
                  cx: [11, 119, 11],
                  cy: [65, 65, 65],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>

            {/* Center Core Dot */}
            <circle cx="65" cy="65" r="3" fill="#34d399" filter="url(#emeraldGlowVivid)" />
            <circle cx="65" cy="65" r="1.5" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Bottom Technology Badges (Vivid Emerald Glow) */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-emerald-500/20 mt-2">
        {deploymentPlatforms.map((plat) => (
          <span
            key={plat.name}
            className="font-mono text-[9.5px] font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-400/40 text-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.15)] group-hover:border-emerald-400/70 group-hover:text-emerald-200 transition-all flex items-center gap-1"
          >
            <span>{plat.icon}</span>
            <span>{plat.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

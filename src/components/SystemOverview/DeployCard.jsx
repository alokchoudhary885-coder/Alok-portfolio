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
    <div className="group rounded-xl bg-[#090e1a]/95 border border-emerald-500/35 hover:border-emerald-400/70 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 mb-2">
        <h3 className="font-mono text-xs font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-1.5 group-hover:text-emerald-300 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399]" />
          PHASE IV: DEPLOY
        </h3>
        <span className="font-mono text-[9.5px] text-emerald-500/70 font-semibold tracking-wider">
          SYS_04
        </span>
      </div>

      {/* Body: Status Info (Left) + Wireframe Globe (Right) */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center my-auto py-0.5">
        {/* Left Column: Status Table + Progress Bar */}
        <div className="sm:col-span-7 flex flex-col justify-between space-y-1.5">
          {/* Key-Value Status Grid */}
          <div className="font-mono text-[9.5px] space-y-0.5 bg-black/85 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all rounded-lg p-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">STATUS:</span>
              <div className="flex items-center gap-1">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-500/25 border border-emerald-400/60 text-emerald-300 text-[8.5px] font-bold shadow-[0_0_6px_rgba(16,185,129,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_3px_#34d399]" />
                  LIVE
                </span>
                <span className="font-mono text-[7.5px] text-emerald-400/80 font-semibold px-1 py-0.2 rounded bg-emerald-950/60 border border-emerald-500/30">
                  SIM
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">PORT:</span>
              <span className="text-cyan-300 font-semibold">3000</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">SSL:</span>
              <span className="text-emerald-400 font-bold">TRUE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">API:</span>
              <span className="text-emerald-400 font-bold">ONLINE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">DB:</span>
              <span className="text-emerald-400 font-bold">CONNECTED</span>
            </div>
          </div>

          {/* Deployment Progress Bar */}
          <div className="space-y-0.5">
            <div className="flex items-center justify-between font-mono text-[9px]">
              <span className="text-slate-200 font-medium uppercase tracking-wider text-[8px]">
                DEPLOY • <span className="text-emerald-300 font-bold">{stages[currentStageIdx]}</span>
              </span>
              <span className="text-emerald-400 font-bold text-[8.5px]">{progressPercent}%</span>
            </div>

            <div className="h-1.5 w-full rounded-full bg-black/90 border border-emerald-500/40 p-0.5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-[0_0_6px_#34d399]"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Wireframe Globe */}
        <div className="sm:col-span-5 relative flex items-center justify-center p-0.5">
          <svg
            viewBox="0 0 115 115"
            className="w-full max-w-[95px] h-auto select-none overflow-visible group-hover:brightness-110 transition-all"
          >
            <defs>
              <radialGradient id="globeGradCompact2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#0d9488" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#090e1a" stopOpacity="0.0" />
              </radialGradient>
              <filter id="emeraldGlowCompact2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Inner Globe Sphere Fill */}
            <circle cx="57.5" cy="57.5" r="35" fill="url(#globeGradCompact2)" />

            {/* Outer Globe Border */}
            <circle
              cx="57.5"
              cy="57.5"
              r="35"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />

            {/* Latitude Ellipses */}
            <ellipse cx="57.5" cy="57.5" rx="35" ry="17" fill="none" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="3 2" />
            <ellipse cx="57.5" cy="57.5" rx="35" ry="8" fill="none" stroke="#34d399" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="22.5" y1="57.5" x2="92.5" y2="57.5" stroke="#10b981" strokeWidth="0.9" strokeOpacity="0.7" />

            {/* Longitude Ellipses */}
            <ellipse cx="57.5" cy="57.5" rx="17" ry="35" fill="none" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="3 2" />
            <ellipse cx="57.5" cy="57.5" rx="8" ry="35" fill="none" stroke="#34d399" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="57.5" y1="22.5" x2="57.5" y2="92.5" stroke="#10b981" strokeWidth="0.9" strokeOpacity="0.7" />

            {/* Rotated Orbit Ring */}
            <ellipse
              cx="57.5"
              cy="57.5"
              rx="47"
              ry="12"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.2"
              strokeOpacity="0.85"
              transform="rotate(-25 57.5 57.5)"
              filter="url(#emeraldGlowCompact2)"
            />

            {/* Orbiting Satellite Node */}
            <g transform="rotate(-25 57.5 57.5)">
              <motion.circle
                r="2.5"
                fill="#22d3ee"
                filter="url(#emeraldGlowCompact2)"
                animate={{
                  cx: [10.5, 104.5, 10.5],
                  cy: [57.5, 57.5, 57.5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>

            {/* Center Core Dot */}
            <circle cx="57.5" cy="57.5" r="2.5" fill="#34d399" />
            <circle cx="57.5" cy="57.5" r="1" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Bottom Technology Badges */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-emerald-500/20 mt-1.5">
        {deploymentPlatforms.map((plat) => (
          <span
            key={plat.name}
            className="font-mono text-[9px] font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-400/40 text-emerald-300 shadow-[0_0_6px_rgba(16,185,129,0.12)] group-hover:border-emerald-400/70 transition-all flex items-center gap-1"
          >
            <span>{plat.icon}</span>
            <span>{plat.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

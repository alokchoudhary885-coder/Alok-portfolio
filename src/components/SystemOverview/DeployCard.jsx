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
    <div className="rounded-xl bg-[#0a0f1d]/90 border border-emerald-500/25 hover:border-emerald-500/40 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between h-full overflow-hidden shadow-lg shadow-black/20">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-2.5">
        <h3 className="font-mono text-xs font-bold text-emerald-400 tracking-wider uppercase">
          PHASE IV: DEPLOY
        </h3>
        <span className="font-mono text-[10px] text-slate-500 tracking-wider">
          SYS_04
        </span>
      </div>

      {/* Body: Status Info (Left) + Wireframe Globe (Right) */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center my-auto py-1">
        {/* Left Column: Status Table + Progress Bar */}
        <div className="sm:col-span-7 flex flex-col justify-between space-y-2">
          {/* Key-Value Status Grid */}
          <div className="font-mono text-[10px] space-y-1 bg-black/60 border border-slate-800/70 rounded-lg p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">STATUS:</span>
              <div className="flex items-center gap-1">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[9px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
                <span className="font-mono text-[8px] text-slate-500 px-1 py-0.2 rounded bg-slate-900 border border-slate-800">
                  SIM
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">PORT:</span>
              <span className="text-slate-200">3000</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">SSL:</span>
              <span className="text-emerald-400 font-medium">TRUE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">API:</span>
              <span className="text-emerald-400 font-medium">ONLINE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">DB:</span>
              <span className="text-emerald-400 font-medium">CONNECTED</span>
            </div>
          </div>

          {/* Deployment Progress Bar */}
          <div className="space-y-1">
            <div className="flex items-center justify-between font-mono text-[9px]">
              <span className="text-slate-400 uppercase tracking-wider text-[8.5px]">
                DEPLOYMENT • <span className="text-emerald-400 font-semibold">{stages[currentStageIdx]}</span>
              </span>
              <span className="text-emerald-400 font-bold">{progressPercent}%</span>
            </div>

            <div className="h-1.5 w-full rounded-full bg-black/80 border border-emerald-950/60 p-0.5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Compact Wireframe Globe */}
        <div className="sm:col-span-5 relative flex items-center justify-center p-1">
          <svg
            viewBox="0 0 130 130"
            className="w-full max-w-[105px] h-auto select-none overflow-visible"
          >
            <defs>
              <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.18" />
                <stop offset="85%" stopColor="#090e1a" stopOpacity="0.0" />
              </radialGradient>
            </defs>

            {/* Inner Globe Sphere Fill */}
            <circle cx="65" cy="65" r="40" fill="url(#globeGrad)" />

            {/* Outer Globe Border */}
            <circle
              cx="65"
              cy="65"
              r="40"
              fill="none"
              stroke="#10b981"
              strokeWidth="1"
              strokeOpacity="0.45"
            />

            {/* Latitude Ellipses */}
            <ellipse cx="65" cy="65" rx="40" ry="19" fill="none" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="2 2" />
            <ellipse cx="65" cy="65" rx="40" ry="8" fill="none" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.35" />
            <line x1="25" y1="65" x2="105" y2="65" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.4" />

            {/* Longitude Ellipses */}
            <ellipse cx="65" cy="65" rx="19" ry="40" fill="none" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="2 2" />
            <ellipse cx="65" cy="65" rx="8" ry="40" fill="none" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.35" />
            <line x1="65" y1="25" x2="65" y2="105" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.4" />

            {/* Rotated Orbit Ring */}
            <ellipse
              cx="65"
              cy="65"
              rx="54"
              ry="13"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1"
              strokeOpacity="0.6"
              transform="rotate(-25 65 65)"
            />

            {/* Orbiting Satellite Node */}
            <g transform="rotate(-25 65 65)">
              <motion.circle
                r="2.5"
                fill="#22d3ee"
                animate={{
                  cx: [11, 119, 11],
                  cy: [65, 65, 65],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>

            {/* Center Core Dot */}
            <circle cx="65" cy="65" r="2.5" fill="#34d399" />
            <circle cx="65" cy="65" r="1" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Bottom Technology Badges */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-slate-800/80 mt-2">
        {deploymentPlatforms.map((plat) => (
          <span
            key={plat.name}
            className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-950/30 border border-emerald-500/20 text-emerald-300/90 flex items-center gap-1"
          >
            <span>{plat.icon}</span>
            <span>{plat.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

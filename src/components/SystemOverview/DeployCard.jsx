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
    <div className="relative group rounded-2xl bg-[#090e1a]/90 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xl shadow-emerald-950/20">
      {/* Background corner ambient glow */}
      <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-3">
        <h3 className="font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider uppercase">
          PHASE IV: DEPLOY
        </h3>
        <span className="font-mono text-[10px] text-slate-500 tracking-wider">
          SYS_04
        </span>
      </div>

      {/* Center Layout: Status & Progress (Left) + Wireframe Globe (Right) */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center my-auto py-1">
        {/* Left Info Column */}
        <div className="sm:col-span-7 flex flex-col justify-between space-y-2.5">
          {/* Key-Value Status Grid */}
          <div className="font-mono text-[11px] space-y-1.5 bg-black/60 border border-slate-800/80 rounded-xl p-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">STATUS:</span>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
                <span className="font-mono text-[8px] text-slate-500 px-1 py-0.5 rounded bg-slate-900 border border-slate-800">
                  SIM
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">PORT:</span>
              <span className="text-slate-200 font-semibold">3000</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">SSL:</span>
              <span className="text-emerald-400 font-semibold">TRUE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">API:</span>
              <span className="text-emerald-400 font-semibold">ONLINE</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">DB:</span>
              <span className="text-emerald-400 font-semibold">CONNECTED</span>
            </div>
          </div>

          {/* Deployment Progress Bar */}
          <div className="space-y-1.5 pt-0.5">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="text-slate-400 uppercase tracking-wider text-[9px]">
                DEPLOYMENT PROGRESS • <span className="text-emerald-400 font-semibold">{stages[currentStageIdx]}</span>
              </span>
              <span className="text-emerald-400 font-bold">{progressPercent}%</span>
            </div>

            <div className="h-2 w-full rounded-full bg-black/80 border border-emerald-950/60 p-0.5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* Right Globe Visualization */}
        <div className="sm:col-span-5 relative flex items-center justify-center p-2">
          <svg
            viewBox="0 0 160 160"
            className="w-full max-w-[130px] h-auto select-none overflow-visible"
          >
            <defs>
              <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
                <stop offset="70%" stopColor="#0d9488" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#090e1a" stopOpacity="0.0" />
              </radialGradient>
              <filter id="emeraldGlow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Inner Globe Sphere Fill */}
            <circle cx="80" cy="80" r="50" fill="url(#globeGrad)" />

            {/* Outer Globe Border */}
            <circle
              cx="80"
              cy="80"
              r="50"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.2"
              strokeOpacity="0.5"
            />

            {/* Latitude Ellipses */}
            <ellipse cx="80" cy="80" rx="50" ry="24" fill="none" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 2" />
            <ellipse cx="80" cy="80" rx="50" ry="10" fill="none" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" />
            <line x1="30" y1="80" x2="130" y2="80" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.5" />

            {/* Longitude Ellipses */}
            <ellipse cx="80" cy="80" rx="24" ry="50" fill="none" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 2" />
            <ellipse cx="80" cy="80" rx="10" ry="50" fill="none" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" />
            <line x1="80" y1="30" x2="80" y2="130" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.5" />

            {/* Rotated Orbit Ring */}
            <motion.ellipse
              cx="80"
              cy="80"
              rx="68"
              ry="16"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.2"
              strokeOpacity="0.75"
              transform="rotate(-25 80 80)"
              filter="url(#emeraldGlow)"
            />

            {/* Orbiting Satellite Node along the Elliptical Track */}
            <g transform="rotate(-25 80 80)">
              <motion.circle
                r="3"
                fill="#22d3ee"
                filter="url(#emeraldGlow)"
                animate={{
                  cx: [12, 148, 12],
                  cy: [80, 80, 80],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>

            {/* Glowing Core Hub Point */}
            <circle cx="80" cy="80" r="3.5" fill="#34d399" filter="url(#emeraldGlow)" />
            <circle cx="80" cy="80" r="1.5" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Bottom Technology Badges */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 border-t border-slate-800/80 mt-2">
        {deploymentPlatforms.map((plat) => (
          <span
            key={plat.name}
            className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 flex items-center gap-1"
          >
            <span>{plat.icon}</span>
            <span>{plat.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

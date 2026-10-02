import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitectureCard() {
  const layers = [
    { id: 'frontend', name: 'Frontend', yOffset: 6, delay: 0 },
    { id: 'api', name: 'API Layer', yOffset: 34, delay: 0.1 },
    { id: 'database', name: 'Database', yOffset: 62, delay: 0.2 },
    { id: 'infra', name: 'Infrastructure', yOffset: 90, delay: 0.3 },
  ];

  const highlights = [
    'System Design',
    'Database Schema',
    'API Contract Definition',
    'Component Architecture',
  ];

  const badges = ['Scalable', 'Modular', 'Maintainable'];

  return (
    <div className="rounded-xl bg-[#0a0f1d]/90 border border-cyan-500/25 hover:border-cyan-500/40 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between h-full overflow-hidden shadow-lg shadow-black/20">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
        <h3 className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase">
          PHASE I: ARCHITECTURE
        </h3>
        <span className="font-mono text-[10px] text-slate-500 tracking-wider">
          SYS_01
        </span>
      </div>

      {/* Body: Stacked Isometric Layers + Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center my-auto py-1">
        {/* Left: Compact Isometric Layers */}
        <div className="sm:col-span-6 relative flex items-center justify-center">
          <svg
            viewBox="0 0 200 135"
            className="w-full max-w-[175px] h-auto overflow-visible select-none"
          >
            <defs>
              <linearGradient id="cyanLayerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="cyanStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Central Vertical Axis */}
            <line
              x1="125"
              y1="14"
              x2="125"
              y2="114"
              stroke="#06b6d4"
              strokeWidth="1"
              strokeDasharray="2 2"
              strokeOpacity="0.3"
            />

            {/* Signal Dot Pulsing Down */}
            <motion.circle
              cx="125"
              r="2.5"
              fill="#22d3ee"
              animate={{ cy: [14, 114] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* 4 Isometric Layers */}
            {layers.map((layer) => {
              const y = layer.yOffset;
              return (
                <g key={layer.id}>
                  {/* Layer Slab */}
                  <motion.polygon
                    points={`125,${y} 175,${y + 14} 125,${y + 28} 75,${y + 14}`}
                    fill="url(#cyanLayerGrad)"
                    stroke="url(#cyanStrokeGrad)"
                    strokeWidth="1"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: layer.delay,
                    }}
                  />

                  {/* Guide line to label */}
                  <line
                    x1="75"
                    y1={y + 14}
                    x2="64"
                    y2={y + 14}
                    stroke="#475569"
                    strokeWidth="0.75"
                    strokeDasharray="1.5 1.5"
                  />

                  {/* Label */}
                  <text
                    x="60"
                    y={y + 17}
                    textAnchor="end"
                    fill="#94a3b8"
                    fontSize="8.5"
                    fontFamily="monospace"
                    className="font-medium"
                  >
                    {layer.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right: Technical Checklist */}
        <div className="sm:col-span-6 flex flex-col justify-center space-y-1.5 sm:pl-1">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className="text-cyan-400 font-mono text-[11px]">›</span>
              <span className="text-slate-300 text-xs font-normal tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Badges */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-slate-800/80 mt-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="font-mono text-[9px] px-2 py-0.5 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300/90"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

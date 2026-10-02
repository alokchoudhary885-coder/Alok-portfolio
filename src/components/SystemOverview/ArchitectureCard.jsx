import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitectureCard() {
  const layers = [
    { id: 'frontend', name: 'Frontend', yOffset: 15, delay: 0 },
    { id: 'api', name: 'API Layer', yOffset: 55, delay: 0.1 },
    { id: 'database', name: 'Database', yOffset: 95, delay: 0.2 },
    { id: 'infra', name: 'Infrastructure', yOffset: 135, delay: 0.3 },
  ];

  const highlights = [
    'System Design',
    'Database Schema',
    'API Contract Definition',
    'Component Architecture',
  ];

  const badges = ['Scalable', 'Modular', 'Maintainable'];

  return (
    <div className="relative group rounded-2xl bg-[#090e1a]/90 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xl shadow-cyan-950/20">
      {/* Background corner ambient glow */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
        <h3 className="font-mono text-xs sm:text-sm font-bold text-cyan-400 tracking-wider uppercase">
          PHASE I: ARCHITECTURE
        </h3>
        <span className="font-mono text-[10px] text-slate-500 tracking-wider">
          SYS_01
        </span>
      </div>

      {/* Body Layout: 3D Stacked Layers + Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto py-2">
        {/* Left: Isometric Stacked Layers */}
        <div className="sm:col-span-6 relative flex flex-col items-center justify-center">
          <svg
            viewBox="0 0 240 190"
            className="w-full max-w-[210px] h-auto overflow-visible select-none"
          >
            <defs>
              <linearGradient id="cyanLayerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cyanStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
              </linearGradient>
              <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Vertical Data Axis Line */}
            <motion.line
              x1="120"
              y1="25"
              x2="120"
              y2="165"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              strokeOpacity="0.4"
            />

            {/* Pulsing Signal Dot Travelling Down the Stack */}
            <motion.circle
              cx="120"
              r="3.5"
              fill="#22d3ee"
              filter="url(#cyanGlow)"
              animate={{ cy: [25, 165] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* 4 Isometric Floating Slabs */}
            {layers.map((layer, index) => {
              const y = layer.yOffset;
              return (
                <g key={layer.id}>
                  {/* Isometric Diamond/Slab */}
                  <motion.polygon
                    points={`120,${y} 185,${y + 18} 120,${y + 36} 55,${y + 18}`}
                    fill="url(#cyanLayerGrad)"
                    stroke="url(#cyanStrokeGrad)"
                    strokeWidth="1.2"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: layer.delay,
                    }}
                  />

                  {/* Inner grid line */}
                  <motion.line
                    x1="88"
                    y1={y + 18}
                    x2="152"
                    y2={y + 18}
                    stroke="#22d3ee"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: layer.delay,
                    }}
                  />

                  {/* Connecting dashed pointer line to left label */}
                  <line
                    x1="55"
                    y1={y + 18}
                    x2="18"
                    y2={y + 18}
                    stroke="#64748b"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                    strokeOpacity="0.6"
                  />

                  {/* Left Label Text */}
                  <text
                    x="15"
                    y={y + 21}
                    textAnchor="end"
                    fill="#94a3b8"
                    fontSize="9"
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

        {/* Right: Architecture Highlights Checklist */}
        <div className="sm:col-span-6 flex flex-col justify-center space-y-2.5 sm:pl-2">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-cyan-400 font-mono font-bold text-xs">›</span>
              <span className="text-slate-200 text-xs sm:text-sm font-medium tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Badges */}
      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80 mt-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-300"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

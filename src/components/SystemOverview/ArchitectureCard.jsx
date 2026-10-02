import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitectureCard() {
  const layers = [
    { id: 'frontend', name: 'Frontend', yOffset: 4, delay: 0 },
    { id: 'api', name: 'API Layer', yOffset: 26, delay: 0.1 },
    { id: 'database', name: 'Database', yOffset: 48, delay: 0.2 },
    { id: 'infra', name: 'Infrastructure', yOffset: 70, delay: 0.3 },
  ];

  const highlights = [
    'System Design',
    'Database Schema',
    'API Contract Definition',
    'Component Architecture',
  ];

  const badges = ['Scalable', 'Modular', 'Maintainable'];

  return (
    <div className="group rounded-xl bg-[#090e1a]/95 border border-cyan-500/35 hover:border-cyan-400/70 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2">
        <h3 className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
          PHASE I: ARCHITECTURE
        </h3>
        <span className="font-mono text-[9.5px] text-cyan-500/70 font-semibold tracking-wider">
          SYS_01
        </span>
      </div>

      {/* Body: Stacked Isometric Layers + Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center my-auto py-0.5">
        {/* Left: Compact Isometric Layers */}
        <div className="sm:col-span-6 relative flex items-center justify-center">
          <svg
            viewBox="0 0 180 102"
            className="w-full max-w-[145px] h-auto overflow-visible select-none group-hover:brightness-110 transition-all duration-300"
          >
            <defs>
              <linearGradient id="cyanLayerGradVivid2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="cyanStrokeGradVivid2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
              </linearGradient>
              <filter id="cyanGlowEffect2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Vertical Data Axis */}
            <line
              x1="115"
              y1="10"
              x2="115"
              y2="88"
              stroke="#06b6d4"
              strokeWidth="1.2"
              strokeDasharray="2 2"
              strokeOpacity="0.6"
            />

            {/* Signal Dot Pulsing Down */}
            <motion.circle
              cx="115"
              r="2.5"
              fill="#22d3ee"
              filter="url(#cyanGlowEffect2)"
              animate={{ cy: [10, 88] }}
              transition={{
                duration: 2.6,
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
                    points={`115,${y} 160,${y + 12} 115,${y + 24} 70,${y + 12}`}
                    fill="url(#cyanLayerGradVivid2)"
                    stroke="url(#cyanStrokeGradVivid2)"
                    strokeWidth="1.2"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: layer.delay,
                    }}
                  />

                  {/* Inner Lattice Line */}
                  <motion.line
                    x1="92"
                    y1={y + 12}
                    x2="138"
                    y2={y + 12}
                    stroke="#67e8f9"
                    strokeWidth="0.8"
                    strokeOpacity="0.6"
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
                    x1="70"
                    y1={y + 12}
                    x2="58"
                    y2={y + 12}
                    stroke="#38bdf8"
                    strokeWidth="0.8"
                    strokeDasharray="1.5 1.5"
                    strokeOpacity="0.7"
                  />

                  {/* Layer Label */}
                  <text
                    x="54"
                    y={y + 15}
                    textAnchor="end"
                    fill="#38bdf8"
                    fontSize="8.5"
                    fontFamily="monospace"
                    className="font-semibold"
                  >
                    {layer.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right: Technical Checklist */}
        <div className="sm:col-span-6 flex flex-col justify-center space-y-1 sm:pl-1">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className="text-cyan-400 font-mono font-bold text-xs shadow-[0_0_6px_#22d3ee]">›</span>
              <span className="text-slate-100 text-[11px] sm:text-xs font-medium tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Badges */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-cyan-500/20 mt-1.5">
        {badges.map((badge) => (
          <span
            key={badge}
            className="font-mono text-[9px] font-semibold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 shadow-[0_0_6px_rgba(6,182,212,0.12)] group-hover:border-cyan-400/70 transition-all"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

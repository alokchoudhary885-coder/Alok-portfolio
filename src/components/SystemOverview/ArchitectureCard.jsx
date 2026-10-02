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
    <div className="group rounded-xl bg-[#090e1a]/95 border border-cyan-500/35 hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)] transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/25 pb-2.5 mb-3">
        <h3 className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
          PHASE I: ARCHITECTURE
        </h3>
        <span className="font-mono text-[10px] text-cyan-500/70 font-semibold tracking-wider">
          SYS_01
        </span>
      </div>

      {/* Body: Stacked Isometric Layers + Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center my-auto py-1">
        {/* Left: Vivid Isometric Layers */}
        <div className="sm:col-span-6 relative flex items-center justify-center">
          <svg
            viewBox="0 0 200 135"
            className="w-full max-w-[175px] h-auto overflow-visible select-none group-hover:brightness-110 transition-all duration-300"
          >
            <defs>
              <linearGradient id="cyanLayerGradVivid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="cyanStrokeGradVivid" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
              </linearGradient>
              <filter id="cyanGlowEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Vertical Data Axis */}
            <line
              x1="125"
              y1="14"
              x2="125"
              y2="114"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeDasharray="2 2"
              strokeOpacity="0.6"
            />

            {/* Glowing Signal Dot Pulsing Down */}
            <motion.circle
              cx="125"
              r="3"
              fill="#22d3ee"
              filter="url(#cyanGlowEffect)"
              animate={{ cy: [14, 114] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* 4 Isometric Layers */}
            {layers.map((layer) => {
              const y = layer.yOffset;
              return (
                <g key={layer.id} className="cursor-pointer">
                  {/* Layer Slab with Rich Gradient and Glowing Border */}
                  <motion.polygon
                    points={`125,${y} 175,${y + 14} 125,${y + 28} 75,${y + 14}`}
                    fill="url(#cyanLayerGradVivid)"
                    stroke="url(#cyanStrokeGradVivid)"
                    strokeWidth="1.3"
                    filter="drop-shadow(0 2px 4px rgba(6,182,212,0.2))"
                    animate={{ y: [0, -2.5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: layer.delay,
                    }}
                  />

                  {/* Inner Accent Lattice Line */}
                  <motion.line
                    x1="100"
                    y1={y + 14}
                    x2="150"
                    y2={y + 14}
                    stroke="#67e8f9"
                    strokeWidth="1"
                    strokeOpacity="0.7"
                    animate={{ y: [0, -2.5, 0] }}
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
                    x2="62"
                    y2={y + 14}
                    stroke="#38bdf8"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    strokeOpacity="0.7"
                  />

                  {/* Layer Name (Always clearly visible in bright cyan/white) */}
                  <text
                    x="58"
                    y={y + 17}
                    textAnchor="end"
                    fill="#38bdf8"
                    fontSize="9"
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

        {/* Right: Technical Checklist (Vibrant White text + Glowing Cyan bullets) */}
        <div className="sm:col-span-6 flex flex-col justify-center space-y-1.5 sm:pl-1">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 group/item">
              <span className="text-cyan-400 font-mono font-bold text-xs shadow-[0_0_8px_#22d3ee]">›</span>
              <span className="text-slate-100 text-xs font-medium tracking-tight group-hover/item:text-cyan-200 transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Badges (Vivid Cyan Glow) */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-cyan-500/20 mt-2">
        {badges.map((badge) => (
          <span
            key={badge}
            className="font-mono text-[9.5px] font-semibold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.15)] group-hover:border-cyan-400/70 group-hover:text-cyan-200 transition-all"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

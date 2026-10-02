import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ArchitectureCard() {
  const layers = [
    { id: 'frontend', name: 'Frontend', yOffset: 4, label: 'React / Next.js' },
    { id: 'api', name: 'API Layer', yOffset: 26, label: 'Express REST' },
    { id: 'database', name: 'Database', yOffset: 48, label: 'MongoDB Atlas' },
    { id: 'infra', name: 'Infrastructure', yOffset: 70, label: 'Vercel / Cloud' },
  ];

  const highlights = [
    'System Design',
    'Database Schema',
    'API Contract Definition',
    'Component Architecture',
  ];

  const badges = ['Scalable', 'Modular', 'Maintainable'];

  // Fast scanning movement cycling the active layer every ~1 second (0.9s - 1.0s)
  const [activeLayerIdx, setActiveLayerIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLayerIdx((prev) => (prev + 1) % layers.length);
    }, 950);

    return () => clearInterval(timer);
  }, [layers.length]);

  return (
    <div className="group rounded-xl bg-[#090e1a]/95 border border-cyan-500/35 hover:border-cyan-400/70 hover:shadow-[0_0_20px_rgba(6,182,212,0.18)] transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2">
        <h3 className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
          </span>
          PHASE I: ARCHITECTURE
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[8px] text-cyan-300 px-1 py-0.2 rounded bg-cyan-950/60 border border-cyan-500/30">
            SCAN: L{activeLayerIdx + 1}
          </span>
          <span className="font-mono text-[9.5px] text-cyan-500/70 font-semibold tracking-wider">
            SYS_01
          </span>
        </div>
      </div>

      {/* Body: Stacked Isometric Layers + Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center my-auto py-0.5">
        {/* Left: Actively Scanning Isometric Layers */}
        <div className="sm:col-span-6 relative flex items-center justify-center">
          <svg
            viewBox="0 0 180 102"
            className="w-full max-w-[145px] h-auto overflow-visible select-none"
          >
            <defs>
              <linearGradient id="cyanLayerGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="cyanLayerGradBase" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#0284c7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
              <filter id="cyanGlowScan" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Vertical Data Axis */}
            <line
              x1="115"
              y1="8"
              x2="115"
              y2="92"
              stroke="#06b6d4"
              strokeWidth="1.2"
              strokeDasharray="2 2"
              strokeOpacity="0.6"
            />

            {/* Fast Data Beacon Pulsing Down (1.1s cycle) */}
            <motion.circle
              cx="115"
              r="2.5"
              fill="#22d3ee"
              filter="url(#cyanGlowScan)"
              animate={{ cy: [8, 92] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* 4 Isometric Layers with Active Highlight Scanning */}
            {layers.map((layer, idx) => {
              const y = layer.yOffset;
              const isActive = idx === activeLayerIdx;

              return (
                <g key={layer.id}>
                  {/* Layer Slab */}
                  <motion.polygon
                    points={`115,${y} 160,${y + 12} 115,${y + 24} 70,${y + 12}`}
                    fill={isActive ? 'url(#cyanLayerGradActive)' : 'url(#cyanLayerGradBase)'}
                    stroke={isActive ? '#38bdf8' : '#22d3ee'}
                    strokeWidth={isActive ? '1.8' : '1.1'}
                    filter={isActive ? 'url(#cyanGlowScan)' : 'none'}
                    animate={{
                      y: isActive ? [0, -3.5, 0] : [0, -1, 0],
                      scale: isActive ? 1.025 : 1,
                    }}
                    transition={{
                      duration: 0.95,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Active Scan Laser Beam across the slab */}
                  {isActive && (
                    <motion.line
                      x1="80"
                      y1={y + 12}
                      x2="150"
                      y2={y + 12}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      filter="url(#cyanGlowScan)"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                      }}
                    />
                  )}

                  {/* Connecting line to label */}
                  <line
                    x1="70"
                    y1={y + 12}
                    x2="58"
                    y2={y + 12}
                    stroke={isActive ? '#38bdf8' : '#0284c7'}
                    strokeWidth={isActive ? '1.2' : '0.8'}
                    strokeDasharray="1.5 1.5"
                    strokeOpacity={isActive ? '1' : '0.7'}
                  />

                  {/* Layer Label */}
                  <text
                    x="54"
                    y={y + 15}
                    textAnchor="end"
                    fill={isActive ? '#ffffff' : '#38bdf8'}
                    fontSize={isActive ? '9' : '8.5'}
                    fontFamily="monospace"
                    className={isActive ? 'font-bold' : 'font-medium'}
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
          {highlights.map((item, idx) => {
            const isHighlighted = idx === activeLayerIdx;
            return (
              <div
                key={idx}
                className={`flex items-center gap-1.5 transition-all duration-300 ${
                  isHighlighted ? 'translate-x-1' : ''
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold transition-colors ${
                    isHighlighted ? 'text-white shadow-[0_0_6px_#22d3ee]' : 'text-cyan-400'
                  }`}
                >
                  ›
                </span>
                <span
                  className={`text-[11px] sm:text-xs tracking-tight transition-colors ${
                    isHighlighted ? 'text-cyan-200 font-bold' : 'text-slate-200 font-medium'
                  }`}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Badges */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-cyan-500/20 mt-1.5">
        {badges.map((badge, idx) => (
          <span
            key={badge}
            className={`font-mono text-[9px] font-semibold px-2 py-0.5 rounded transition-all ${
              idx === activeLayerIdx % badges.length
                ? 'bg-cyan-500/30 border border-cyan-300 text-white shadow-[0_0_8px_rgba(6,182,212,0.3)]'
                : 'bg-cyan-950/60 border border-cyan-400/40 text-cyan-300'
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

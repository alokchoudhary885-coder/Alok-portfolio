import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StressTestCard() {
  // Real-time telemetry data points for the SVG graph
  const [dataPoints, setDataPoints] = useState([
    45, 52, 48, 62, 58, 70, 65, 80, 72, 85,
    60, 68, 55, 75, 82, 70, 88, 92, 78, 85,
    90, 88, 95, 105
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints((prev) => {
        // Shift left and add a realistic new jitter point
        const nextVal = Math.floor(Math.random() * 45) + 65;
        return [...prev.slice(1), nextVal];
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Convert data points to SVG path coordinates (viewBox 0 0 320 80)
  const maxVal = 130;
  const minVal = 30;
  const width = 320;
  const height = 75;

  const points = dataPoints.map((val, idx) => {
    const x = (idx / (dataPoints.length - 1)) * width;
    const normalizedY = 1 - (val - minVal) / (maxVal - minVal);
    const y = Math.max(8, Math.min(height - 6, normalizedY * height));
    return { x, y };
  });

  const pathD = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${width},${height} L 0,${height} Z`;

  const lastPoint = points[points.length - 1];

  const highlights = [
    { left: 'Latency Checks', right: 'API Testing' },
    { left: 'Load Testing', right: 'Error Handling & Recovery' },
  ];

  return (
    <div className="relative group rounded-2xl bg-[#090e1a]/90 border border-rose-500/30 hover:border-rose-400/60 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xl shadow-rose-950/20">
      {/* Background corner ambient glow */}
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-rose-500/20 pb-3 mb-3">
        <h3 className="font-mono text-xs sm:text-sm font-bold text-rose-400 tracking-wider uppercase">
          PHASE III: STRESS TEST
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-rose-950/50 border border-rose-500/30 text-rose-300">
            DEMO TELEMETRY
          </span>
          <span className="font-mono text-[10px] text-slate-500 tracking-wider">
            SYS_03
          </span>
        </div>
      </div>

      {/* 3 Metric Cards Row */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3">
        {/* Latency */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-black/60 border border-slate-800/80 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-sm sm:text-base text-rose-400">
              128 <span className="text-[10px] font-normal">ms</span>
            </span>
            <span className="text-rose-400 text-xs">~</span>
          </div>
          <span className="font-mono text-[9px] text-slate-400 truncate mt-0.5">
            Avg. Latency
          </span>
        </div>

        {/* Uptime */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-black/60 border border-slate-800/80 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-sm sm:text-base text-emerald-400">
              99.9%
            </span>
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-1.5 bg-emerald-400 rounded-sm" />
              <span className="w-0.5 h-2.5 bg-emerald-400 rounded-sm" />
              <span className="w-0.5 h-3 bg-emerald-400 rounded-sm" />
            </div>
          </div>
          <span className="font-mono text-[9px] text-slate-400 truncate mt-0.5">
            Uptime
          </span>
        </div>

        {/* Req / Sec */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-black/60 border border-slate-800/80 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-sm sm:text-base text-cyan-400">
              1.2K
            </span>
            <span className="text-cyan-400 text-xs">⚡</span>
          </div>
          <span className="font-mono text-[9px] text-slate-400 truncate mt-0.5">
            Req / sec
          </span>
        </div>
      </div>

      {/* Real-time Animated Waveform Graph */}
      <div className="relative rounded-xl bg-black/80 border border-rose-950/60 p-2.5 my-auto overflow-hidden">
        {/* Graph Header Label */}
        <div className="flex items-center justify-between pb-1.5 text-[10px] font-mono">
          <span className="text-slate-500 text-[9px]">LOAD TRAFFIC FREQUENCY</span>
          <div className="flex items-center gap-1.5 text-rose-400 font-semibold text-[9px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
            </span>
            <span>CRITICAL LOAD</span>
          </div>
        </div>

        {/* SVG Waveform Line */}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-20 sm:h-22 overflow-visible select-none"
        >
          <defs>
            <linearGradient id="roseAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
            </linearGradient>
            <filter id="roseGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="20" x2={width} y2="20" stroke="#f43f5e" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="0" y1="45" x2={width} y2="45" stroke="#f43f5e" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="0" y1="65" x2={width} y2="65" stroke="#f43f5e" strokeOpacity="0.08" strokeDasharray="3 3" />

          {/* Shaded Area */}
          <path d={areaD} fill="url(#roseAreaGrad)" />

          {/* Main Stroke Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#roseGlow)"
          />

          {/* Dynamic Pulse Beacon on the Latest Point */}
          {lastPoint && (
            <g>
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="5"
                fill="#f43f5e"
                opacity="0.35"
                className="animate-ping"
              />
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="3"
                fill="#ffffff"
                stroke="#f43f5e"
                strokeWidth="1.5"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Checklist (2 Columns) */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-3 border-t border-slate-800/80 mt-2 text-xs font-medium">
        {highlights.map((row, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-1.5 text-slate-300 truncate">
              <span className="text-rose-400 font-mono">›</span>
              <span className="text-[11px] truncate">{row.left}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 truncate">
              <span className="text-rose-400 font-mono">›</span>
              <span className="text-[11px] truncate">{row.right}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

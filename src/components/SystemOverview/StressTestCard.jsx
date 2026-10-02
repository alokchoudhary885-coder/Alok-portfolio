import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StressTestCard() {
  const [dataPoints, setDataPoints] = useState([
    45, 52, 48, 62, 58, 70, 65, 80, 72, 85,
    60, 68, 55, 75, 82, 70, 88, 92, 78, 85,
    90, 88, 95, 105
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints((prev) => {
        const nextVal = Math.floor(Math.random() * 40) + 65;
        return [...prev.slice(1), nextVal];
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const maxVal = 130;
  const minVal = 30;
  const width = 320;
  const height = 55;

  const points = dataPoints.map((val, idx) => {
    const x = (idx / (dataPoints.length - 1)) * width;
    const normalizedY = 1 - (val - minVal) / (maxVal - minVal);
    const y = Math.max(6, Math.min(height - 5, normalizedY * height));
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
    <div className="group rounded-xl bg-[#090e1a]/95 border border-rose-500/35 hover:border-rose-400/70 hover:shadow-[0_0_25px_rgba(244,63,94,0.18)] transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-rose-500/25 pb-2.5 mb-2.5">
        <h3 className="font-mono text-xs font-bold text-rose-400 tracking-wider uppercase flex items-center gap-1.5 group-hover:text-rose-300 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_6px_#f43f5e]" />
          PHASE III: STRESS TEST
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[9px] font-semibold px-2 py-0.5 rounded bg-rose-950/60 border border-rose-400/40 text-rose-300 shadow-[0_0_8px_rgba(244,63,94,0.15)]">
            DEMO TELEMETRY
          </span>
          <span className="font-mono text-[10px] text-rose-500/70 font-semibold tracking-wider">
            SYS_03
          </span>
        </div>
      </div>

      {/* 3 Metric Cards Row (Vibrant Colors & Accents) */}
      <div className="grid grid-cols-3 gap-2 mb-2 group-hover:brightness-105 transition-all">
        {/* Latency Box: Vibrant Rose */}
        <div className="px-2.5 py-1.5 rounded-lg bg-rose-950/30 border border-rose-500/40 shadow-[0_0_10px_rgba(244,63,94,0.1)] flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-xs text-rose-300">
              128 <span className="text-[9px] font-normal text-rose-400">ms</span>
            </div>
            <div className="font-mono text-[8.5px] text-rose-200/80 font-medium truncate">
              Avg. Latency
            </div>
          </div>
          <span className="text-rose-400 text-xs font-mono font-bold">~</span>
        </div>

        {/* Uptime Box: Vibrant Emerald */}
        <div className="px-2.5 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.1)] flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-xs text-emerald-300">
              99.9%
            </div>
            <div className="font-mono text-[8.5px] text-emerald-200/80 font-medium truncate">
              Uptime
            </div>
          </div>
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-1.5 bg-emerald-400 rounded-sm shadow-[0_0_3px_#34d399]" />
            <span className="w-0.5 h-2.5 bg-emerald-400 rounded-sm shadow-[0_0_3px_#34d399]" />
            <span className="w-0.5 h-3 bg-emerald-400 rounded-sm shadow-[0_0_3px_#34d399]" />
          </div>
        </div>

        {/* Req / Sec: Vibrant Cyan */}
        <div className="px-2.5 py-1.5 rounded-lg bg-cyan-950/30 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.1)] flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-xs text-cyan-300">
              1.2K
            </div>
            <div className="font-mono text-[8.5px] text-cyan-200/80 font-medium truncate">
              Req / sec
            </div>
          </div>
          <span className="text-cyan-400 text-xs shadow-[0_0_6px_#22d3ee]">⚡</span>
        </div>
      </div>

      {/* Real-Time Waveform Graph (Vivid Pink/Red Glowing Line) */}
      <div className="rounded-lg bg-black/90 border border-rose-500/30 group-hover:border-rose-400/60 p-2 my-auto overflow-hidden shadow-inner group-hover:shadow-[0_0_15px_rgba(244,63,94,0.12)] transition-all">
        {/* Graph Header Label */}
        <div className="flex items-center justify-between pb-1 text-[9px] font-mono">
          <span className="text-rose-300/80 font-medium">LOAD TRAFFIC FREQUENCY</span>
          <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[9px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500 shadow-[0_0_6px_#f43f5e]"></span>
            </span>
            <span>CRITICAL LOAD</span>
          </div>
        </div>

        {/* SVG Waveform Line */}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-14 sm:h-15 overflow-visible select-none group-hover:brightness-110 transition-all"
        >
          <defs>
            <linearGradient id="roseAreaGradVivid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#f43f5e" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
            </linearGradient>
            <filter id="roseGlowVivid" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="16" x2={width} y2="16" stroke="#f43f5e" strokeOpacity="0.15" strokeDasharray="3 3" />
          <line x1="0" y1="36" x2={width} y2="36" stroke="#f43f5e" strokeOpacity="0.15" strokeDasharray="3 3" />

          {/* Shaded Area */}
          <path d={areaD} fill="url(#roseAreaGradVivid)" />

          {/* Glowing Stroke Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#fb7185"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#roseGlowVivid)"
          />

          {/* Solid Top Stroke Path for crispness */}
          <path
            d={pathD}
            fill="none"
            stroke="#f43f5e"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing Current Point Beacon */}
          {lastPoint && (
            <g>
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="6"
                fill="#f43f5e"
                opacity="0.5"
                className="animate-ping"
              />
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="3.5"
                fill="#fb7185"
                filter="url(#roseGlowVivid)"
              />
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="2"
                fill="#ffffff"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Checklist (2 Columns - White Text + Glowing Rose Carets) */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-2.5 border-t border-rose-500/20 mt-2 text-[11px]">
        {highlights.map((row, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-1.5 text-slate-100 font-medium truncate">
              <span className="text-rose-400 font-mono text-xs font-bold shadow-[0_0_6px_#f43f5e]">›</span>
              <span className="truncate">{row.left}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-100 font-medium truncate">
              <span className="text-rose-400 font-mono text-xs font-bold shadow-[0_0_6px_#f43f5e]">›</span>
              <span className="truncate">{row.right}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

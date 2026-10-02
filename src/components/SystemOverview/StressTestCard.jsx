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
  const height = 46;

  const points = dataPoints.map((val, idx) => {
    const x = (idx / (dataPoints.length - 1)) * width;
    const normalizedY = 1 - (val - minVal) / (maxVal - minVal);
    const y = Math.max(5, Math.min(height - 4, normalizedY * height));
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
    <div className="group rounded-xl bg-[#090e1a]/95 border border-rose-500/35 hover:border-rose-400/70 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)] transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-rose-500/20 pb-2 mb-2">
        <h3 className="font-mono text-xs font-bold text-rose-400 tracking-wider uppercase flex items-center gap-1.5 group-hover:text-rose-300 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_5px_#f43f5e]" />
          PHASE III: STRESS TEST
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[8.5px] font-semibold px-1.5 py-0.5 rounded bg-rose-950/60 border border-rose-400/40 text-rose-300 shadow-[0_0_6px_rgba(244,63,94,0.12)]">
            DEMO TELEMETRY
          </span>
          <span className="font-mono text-[9.5px] text-rose-500/70 font-semibold tracking-wider">
            SYS_03
          </span>
        </div>
      </div>

      {/* 3 Metric Cards Row */}
      <div className="grid grid-cols-3 gap-1.5 mb-1.5 group-hover:brightness-105 transition-all">
        {/* Latency */}
        <div className="px-2 py-1 rounded-lg bg-rose-950/30 border border-rose-500/40 flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-[11px] text-rose-300 leading-tight">
              128 <span className="text-[8.5px] font-normal text-rose-400">ms</span>
            </div>
            <div className="font-mono text-[8px] text-rose-200/80 font-medium truncate">
              Avg. Latency
            </div>
          </div>
          <span className="text-rose-400 text-[10px] font-mono font-bold">~</span>
        </div>

        {/* Uptime */}
        <div className="px-2 py-1 rounded-lg bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-[11px] text-emerald-300 leading-tight">
              99.9%
            </div>
            <div className="font-mono text-[8px] text-emerald-200/80 font-medium truncate">
              Uptime
            </div>
          </div>
          <div className="flex items-end gap-0.5 h-2.5">
            <span className="w-0.5 h-1 bg-emerald-400 rounded-sm shadow-[0_0_2px_#34d399]" />
            <span className="w-0.5 h-2 bg-emerald-400 rounded-sm shadow-[0_0_2px_#34d399]" />
            <span className="w-0.5 h-2.5 bg-emerald-400 rounded-sm shadow-[0_0_2px_#34d399]" />
          </div>
        </div>

        {/* Req / Sec */}
        <div className="px-2 py-1 rounded-lg bg-cyan-950/30 border border-cyan-500/40 flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-[11px] text-cyan-300 leading-tight">
              1.2K
            </div>
            <div className="font-mono text-[8px] text-cyan-200/80 font-medium truncate">
              Req / sec
            </div>
          </div>
          <span className="text-cyan-400 text-[9px] shadow-[0_0_4px_#22d3ee]">⚡</span>
        </div>
      </div>

      {/* Real-Time Waveform Graph */}
      <div className="rounded-lg bg-black/90 border border-rose-500/30 group-hover:border-rose-400/60 p-1.5 my-auto overflow-hidden shadow-inner transition-all">
        {/* Graph Header Label */}
        <div className="flex items-center justify-between pb-1 text-[8.5px] font-mono">
          <span className="text-rose-300/80 font-medium">LOAD TRAFFIC FREQUENCY</span>
          <div className="flex items-center gap-1 text-rose-400 font-bold text-[8.5px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500 shadow-[0_0_5px_#f43f5e]"></span>
            </span>
            <span>CRITICAL LOAD</span>
          </div>
        </div>

        {/* SVG Waveform Line */}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-11 sm:h-12 overflow-visible select-none group-hover:brightness-110 transition-all"
        >
          <defs>
            <linearGradient id="roseAreaGradCompact" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#f43f5e" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
            </linearGradient>
            <filter id="roseGlowCompact" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="14" x2={width} y2="14" stroke="#f43f5e" strokeOpacity="0.15" strokeDasharray="3 3" />
          <line x1="0" y1="30" x2={width} y2="30" stroke="#f43f5e" strokeOpacity="0.15" strokeDasharray="3 3" />

          {/* Shaded Area */}
          <path d={areaD} fill="url(#roseAreaGradCompact)" />

          {/* Glowing Stroke Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#fb7185"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#roseGlowCompact)"
          />

          {/* Solid Top Stroke Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#f43f5e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing Current Point Beacon */}
          {lastPoint && (
            <g>
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="5"
                fill="#f43f5e"
                opacity="0.5"
                className="animate-ping"
              />
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="3"
                fill="#fb7185"
                filter="url(#roseGlowCompact)"
              />
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="1.5"
                fill="#ffffff"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Checklist (2 Columns) */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 pt-2 border-t border-rose-500/20 mt-1.5 text-[10.5px]">
        {highlights.map((row, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-1.5 text-slate-100 font-medium truncate">
              <span className="text-rose-400 font-mono text-xs font-bold shadow-[0_0_5px_#f43f5e]">›</span>
              <span className="truncate">{row.left}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-100 font-medium truncate">
              <span className="text-rose-400 font-mono text-xs font-bold shadow-[0_0_5px_#f43f5e]">›</span>
              <span className="truncate">{row.right}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

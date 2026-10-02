import React, { useState, useEffect } from 'react';

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
    <div className="rounded-xl bg-[#0a0f1d]/90 border border-rose-500/25 hover:border-rose-500/40 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between h-full overflow-hidden shadow-lg shadow-black/20">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-2.5">
        <h3 className="font-mono text-xs font-bold text-rose-400 tracking-wider uppercase">
          PHASE III: STRESS TEST
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[8.5px] px-1.5 py-0.5 rounded bg-rose-950/40 border border-rose-500/25 text-rose-300/80">
            DEMO TELEMETRY
          </span>
          <span className="font-mono text-[10px] text-slate-500 tracking-wider">
            SYS_03
          </span>
        </div>
      </div>

      {/* 3 Compact Metric Cards Row */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {/* Latency */}
        <div className="px-2 py-1.5 rounded-lg bg-black/60 border border-slate-800/70 flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-xs text-rose-400">
              128 <span className="text-[9px] font-normal text-slate-400">ms</span>
            </div>
            <div className="font-mono text-[8px] text-slate-400 truncate">
              Avg. Latency
            </div>
          </div>
          <span className="text-rose-400/80 text-[11px] font-mono">~</span>
        </div>

        {/* Uptime */}
        <div className="px-2 py-1.5 rounded-lg bg-black/60 border border-slate-800/70 flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-xs text-emerald-400">
              99.9%
            </div>
            <div className="font-mono text-[8px] text-slate-400 truncate">
              Uptime
            </div>
          </div>
          <div className="flex items-end gap-0.5 h-2.5">
            <span className="w-0.5 h-1 bg-emerald-400/80 rounded-sm" />
            <span className="w-0.5 h-2 bg-emerald-400/80 rounded-sm" />
            <span className="w-0.5 h-2.5 bg-emerald-400/80 rounded-sm" />
          </div>
        </div>

        {/* Req / Sec */}
        <div className="px-2 py-1.5 rounded-lg bg-black/60 border border-slate-800/70 flex items-center justify-between">
          <div>
            <div className="font-mono font-bold text-xs text-cyan-400">
              1.2K
            </div>
            <div className="font-mono text-[8px] text-slate-400 truncate">
              Req / sec
            </div>
          </div>
          <span className="text-cyan-400/80 text-[10px]">⚡</span>
        </div>
      </div>

      {/* Compact Waveform Graph */}
      <div className="rounded-lg bg-black/80 border border-slate-800/80 p-2 my-auto overflow-hidden">
        {/* Graph Header Label */}
        <div className="flex items-center justify-between pb-1 text-[9px] font-mono">
          <span className="text-slate-500">LOAD TRAFFIC FREQUENCY</span>
          <div className="flex items-center gap-1 text-rose-400 font-semibold text-[8.5px]">
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
          className="w-full h-14 sm:h-15 overflow-visible select-none"
        >
          <defs>
            <linearGradient id="roseAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="0" y1="16" x2={width} y2="16" stroke="#f43f5e" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="0" y1="36" x2={width} y2="36" stroke="#f43f5e" strokeOpacity="0.08" strokeDasharray="3 3" />

          {/* Shaded Area */}
          <path d={areaD} fill="url(#roseAreaGrad)" />

          {/* Main Stroke Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#f43f5e"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Current Value Dot */}
          {lastPoint && (
            <g>
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="3.5"
                fill="#f43f5e"
                opacity="0.3"
                className="animate-ping"
              />
              <circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r="2"
                fill="#ffffff"
                stroke="#f43f5e"
                strokeWidth="1"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Checklist (2 Columns) */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 pt-2.5 border-t border-slate-800/80 mt-2 text-[11px]">
        {highlights.map((row, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-1 text-slate-300 truncate">
              <span className="text-rose-400 font-mono text-[10px]">›</span>
              <span className="truncate">{row.left}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-300 truncate">
              <span className="text-rose-400 font-mono text-[10px]">›</span>
              <span className="truncate">{row.right}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  { type: 'step-cyan', text: '> [1/7] initializing React runtime...' },
  { type: 'const-app', varName: 'app', right: 'express();' },
  { type: 'step-emerald', text: '> [2/7] compiling TypeScript modules...' },
  { type: 'await-db', func: 'connectDatabase();' },
  { type: 'step-cyan', text: '> [3/7] connecting Express REST APIs...' },
  { type: 'app-use', path: '/api', target: 'routes' },
  { type: 'step-amber', text: '> [4/7] optimizing production bundle...' },
  { type: 'config-port', name: 'PORT', val: '3000' },
  { type: 'step-rose', text: '> [5/7] running automated test suite...' },
  { type: 'success-endpoints', text: '✓ [6/7] 25+ REST API endpoints validated' },
  { type: 'success-done', text: '✓ [7/7] build completed successfully' },
  { type: 'cursor-watch', text: '> watching for changes... [READY]' },
];

export function CoreDevCodeStream() {
  const repeatedLines = [...codeLines, ...codeLines];

  return (
    <div className="relative font-mono text-[10px] h-[92px] overflow-hidden leading-[1.6] select-none">
      {/* Noticeably faster continuous vertical scroll: 2.4s cycle */}
      <motion.div
        animate={{ y: [0, -192] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedLines.map((line, index) => {
          const lineNum = String((index % codeLines.length) + 1).padStart(2, '0');
          return (
            <div key={index} className="flex items-center min-h-[16px] whitespace-nowrap">
              {/* Line Number */}
              <span className="w-4.5 text-purple-400/80 mr-1.5 shrink-0 select-none text-[9px] font-semibold">
                {lineNum}
              </span>

              {/* Cyan Step */}
              {line.type === 'step-cyan' && (
                <span className="text-cyan-400 font-medium">{line.text}</span>
              )}

              {/* Emerald Step */}
              {line.type === 'step-emerald' && (
                <span className="text-emerald-400 font-medium">{line.text}</span>
              )}

              {/* Amber Step */}
              {line.type === 'step-amber' && (
                <span className="text-amber-400 font-medium">{line.text}</span>
              )}

              {/* Rose Step */}
              {line.type === 'step-rose' && (
                <span className="text-rose-400 font-medium">{line.text}</span>
              )}

              {/* Const App */}
              {line.type === 'const-app' && (
                <span>
                  <span className="text-blue-400 font-semibold">const </span>
                  <span className="text-cyan-300 font-medium">{line.varName} </span>
                  <span className="text-slate-200">= </span>
                  <span className="text-yellow-400 font-semibold">express</span>
                  <span className="text-purple-300">()</span>
                  <span className="text-slate-200">;</span>
                </span>
              )}

              {/* Await DB */}
              {line.type === 'await-db' && (
                <span>
                  <span className="text-purple-400 font-semibold">await </span>
                  <span className="text-sky-300 font-medium">mongoose</span>
                  <span className="text-slate-200">.</span>
                  <span className="text-yellow-400 font-semibold">connect</span>
                  <span className="text-slate-200">(</span>
                  <span className="text-orange-400 font-semibold">URI</span>
                  <span className="text-slate-200">);</span>
                </span>
              )}

              {/* App Use */}
              {line.type === 'app-use' && (
                <span>
                  <span className="text-cyan-300 font-medium">app</span>
                  <span className="text-slate-200">.</span>
                  <span className="text-yellow-400 font-semibold">use</span>
                  <span className="text-slate-200">(</span>
                  <span className="text-emerald-400 font-medium">"{line.path}"</span>
                  <span className="text-slate-200">, </span>
                  <span className="text-orange-300 font-medium">{line.target}</span>
                  <span className="text-slate-200">);</span>
                </span>
              )}

              {/* Config Port */}
              {line.type === 'config-port' && (
                <span>
                  <span className="text-blue-400 font-semibold">const </span>
                  <span className="text-orange-400 font-semibold">{line.name} </span>
                  <span className="text-slate-200">= </span>
                  <span className="text-rose-400 font-bold">{line.val}</span>
                  <span className="text-slate-200">;</span>
                </span>
              )}

              {/* Success Endpoints */}
              {line.type === 'success-endpoints' && (
                <span className="text-cyan-300 font-bold tracking-tight">
                  {line.text}
                </span>
              )}

              {/* Success Done */}
              {line.type === 'success-done' && (
                <span className="text-emerald-300 font-bold tracking-tight">
                  {line.text}
                </span>
              )}

              {/* Blinking Cursor */}
              {line.type === 'cursor-watch' && (
                <span className="text-purple-300 font-medium flex items-center">
                  <span>{line.text}</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-1.5 h-2.5 bg-cyan-400 ml-1 shadow-[0_0_5px_#22d3ee]"
                  />
                </span>
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Fade overlay at bottom of terminal */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

export default function CoreDevelopmentCard() {
  const technologies = ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'];

  return (
    <div className="group rounded-xl bg-[#090e1a]/95 border border-purple-500/35 hover:border-purple-400/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.18)] transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-2">
        <h3 className="font-mono text-xs font-bold text-purple-400 tracking-wider uppercase flex items-center gap-1.5 group-hover:text-purple-300 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400 shadow-[0_0_6px_#c084fc]"></span>
          </span>
          PHASE II: CORE DEVELOPMENT
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[8px] text-purple-300 px-1 py-0.2 rounded bg-purple-950/60 border border-purple-500/30">
            COMPILING
          </span>
          <span className="font-mono text-[9.5px] text-purple-500/70 font-semibold tracking-wider">
            SYS_02
          </span>
        </div>
      </div>

      {/* Terminal Container with Active Glowing Outline */}
      <div className="rounded-lg bg-black/95 border border-purple-500/35 group-hover:border-purple-400/70 transition-all p-2 my-auto shadow-inner">
        {/* Terminal Header with Live Status */}
        <div className="flex items-center justify-between pb-1 mb-1 border-b border-purple-900/40 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_4px_#f43f5e]" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_4px_#fbbf24]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_#34d399]" />
          </div>
          <div className="flex items-center gap-1 font-mono text-[8px] text-purple-300/90 font-medium">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span>runner: active</span>
          </div>
        </div>

        {/* Fast Live Syntax-Colored Code Stream (2.4s cycle) */}
        <CoreDevCodeStream />
      </div>

      {/* Bottom Tech Badges */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-purple-500/20 mt-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[9px] font-semibold px-2 py-0.5 rounded bg-purple-950/60 border border-purple-400/40 text-purple-300 shadow-[0_0_6px_rgba(168,85,247,0.12)] group-hover:border-purple-400/70 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

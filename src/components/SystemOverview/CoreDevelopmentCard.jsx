import React from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  { isStep: true, text: '> initializing React runtime...' },
  { isConst: true, varName: 'app', right: 'express();' },
  { isAwait: true, func: 'connectDatabase();' },
  { isAppUse: true, path: '/api', target: 'routes' },
  { isStep: true, text: '> compiling TypeScript...' },
  { isStep: true, text: '> building client assets...' },
  { isStep: true, text: '> optimizing for production...' },
  { isDone: true, text: '✓ build completed successfully' },
  { isCursor: true, text: '> watching for changes...' },
  { isConst: true, varName: 'server', right: 'createServer();' },
  { isStep: true, text: '> connecting Express API...' },
  { isStep: true, text: '> querying MongoDB...' },
  { isDone: true, text: '✓ 25+ REST API endpoints ready' },
];

export function CoreDevCodeStream() {
  const repeatedLines = [...codeLines, ...codeLines];

  return (
    <div className="relative font-mono text-[10px] h-[105px] overflow-hidden leading-[1.65] select-none">
      <motion.div
        animate={{ y: [0, -182] }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedLines.map((line, index) => {
          const lineNum = String((index % codeLines.length) + 1).padStart(2, '0');
          return (
            <div key={index} className="flex items-center min-h-[16.5px] whitespace-nowrap">
              <span className="w-5 text-slate-600 mr-2 shrink-0 select-none text-[9.5px]">
                {lineNum}
              </span>

              {line.isStep && (
                <span className="text-emerald-400/85 font-normal">{line.text}</span>
              )}

              {line.isConst && (
                <span className="text-slate-300">
                  <span className="text-cyan-400">const </span>
                  <span className="text-purple-300">{line.varName} </span>= {line.right}
                </span>
              )}

              {line.isAwait && (
                <span className="text-slate-300">
                  <span className="text-purple-400">await </span>
                  <span className="text-amber-300">{line.func}</span>
                </span>
              )}

              {line.isAppUse && (
                <span className="text-slate-300">
                  <span className="text-blue-400">app</span>
                  <span className="text-slate-400">.use(</span>
                  <span className="text-emerald-300">"{line.path}"</span>
                  <span className="text-slate-400">, {line.target});</span>
                </span>
              )}

              {line.isDone && (
                <span className="text-cyan-300 font-medium">{line.text}</span>
              )}

              {line.isCursor && (
                <span className="text-slate-400 flex items-center">
                  <span>{line.text}</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1.5 h-2.5 bg-slate-200 ml-1"
                  />
                </span>
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Fade overlay at bottom of terminal */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

export default function CoreDevelopmentCard() {
  const technologies = ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'];

  return (
    <div className="rounded-xl bg-[#0a0f1d]/90 border border-purple-500/25 hover:border-purple-500/40 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between h-full overflow-hidden shadow-lg shadow-black/20">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
        <h3 className="font-mono text-xs font-bold text-purple-400 tracking-wider uppercase">
          PHASE II: CORE DEVELOPMENT
        </h3>
        <span className="font-mono text-[10px] text-slate-500 tracking-wider">
          SYS_02
        </span>
      </div>

      {/* Terminal Container */}
      <div className="rounded-lg bg-black/95 border border-slate-800/90 p-2.5 my-auto shadow-inner">
        {/* Terminal Header */}
        <div className="flex items-center gap-1 pb-1.5 mb-1.5 border-b border-slate-900 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 font-mono text-[8.5px] text-slate-600">terminal — bash</span>
        </div>

        {/* Live Code Stream */}
        <CoreDevCodeStream />
      </div>

      {/* Bottom Tech Badges */}
      <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-slate-800/80 mt-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[9px] px-2 py-0.5 rounded bg-purple-950/30 border border-purple-500/20 text-purple-300/90"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

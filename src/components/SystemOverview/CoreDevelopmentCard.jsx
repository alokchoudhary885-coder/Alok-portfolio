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
  { isStep: true, text: '> telemetry pipeline active...' },
];

export function CoreDevCodeStream() {
  const repeatedLines = [...codeLines, ...codeLines];

  return (
    <div className="relative font-mono text-[11px] h-[135px] overflow-hidden leading-relaxed select-none">
      <motion.div
        animate={{ y: [0, -210] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedLines.map((line, index) => {
          const lineNum = String((index % codeLines.length) + 1).padStart(2, '0');
          return (
            <div key={index} className="flex items-center min-h-[19px] whitespace-nowrap">
              <span className="w-6 text-slate-600 mr-2 shrink-0 select-none text-[10px]">
                {lineNum}
              </span>

              {line.isStep && (
                <span className="text-emerald-400/90 font-normal">{line.text}</span>
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
                <span className="text-cyan-300 font-semibold">{line.text}</span>
              )}

              {line.isCursor && (
                <span className="text-slate-400 flex items-center">
                  <span>{line.text}</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1.5 h-3 bg-white ml-1"
                  />
                </span>
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Fade overlay at bottom of terminal */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

export default function CoreDevelopmentCard() {
  const technologies = ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'];

  return (
    <div className="relative group rounded-2xl bg-[#090e1a]/90 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xl shadow-purple-950/20">
      {/* Background corner ambient glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-purple-500/20 pb-3 mb-4">
        <h3 className="font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider uppercase">
          PHASE II: CORE DEVELOPMENT
        </h3>
        <span className="font-mono text-[10px] text-slate-500 tracking-wider">
          SYS_02
        </span>
      </div>

      {/* Terminal Container */}
      <div className="relative rounded-xl bg-black/95 border border-purple-900/40 p-3 my-auto shadow-inner">
        {/* macOS Terminal Dots */}
        <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-900">
          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[9px] text-slate-600">bash - dev-worker</span>
        </div>

        {/* Live Code Stream */}
        <CoreDevCodeStream />
      </div>

      {/* Bottom Tech Badges */}
      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80 mt-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

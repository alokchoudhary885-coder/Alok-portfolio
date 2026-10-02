import React from 'react';
import { motion } from 'framer-motion';

// ─────────────────────────────────────────────
// Animated scrolling code stream
// ─────────────────────────────────────────────
const codeLines = [
  { prefix: '> ', text: 'initializing React runtime...', color: 'text-emerald-400' },
  { prefix: 'const ', text: "server = createServer();", color: 'text-blue-400', isPre: true },
  { prefix: '> ', text: 'loading Node.js modules...', color: 'text-emerald-400' },
  { prefix: 'await ', text: 'connectDatabase();', color: 'text-slate-300', isAwait: true },
  { prefix: '> ', text: 'connecting Express API...', color: 'text-emerald-400' },
  { prefix: "app.use(", text: '"/api", routes);', color: 'text-slate-300', isApp: true },
  { prefix: '> ', text: 'querying MongoDB...', color: 'text-emerald-400' },
  { prefix: 'const ', text: 'db = await mongoose.connect(uri);', color: 'text-blue-400', isPre: true },
  { prefix: '> ', text: 'compiling TypeScript...', color: 'text-emerald-400' },
  { prefix: '$ ', text: 'npm run build', color: 'text-amber-400' },
  { prefix: '> ', text: 'optimizing production bundle...', color: 'text-emerald-400' },
  { prefix: '> ', text: 'running API validation...', color: 'text-emerald-400' },
  { prefix: '$ ', text: 'npm run dev', color: 'text-amber-400' },
  { prefix: '> ', text: 'building client assets...', color: 'text-emerald-400' },
  { prefix: '> ', text: 'checking dependencies...', color: 'text-emerald-400' },
  { prefix: '✓ ', text: 'build completed successfully', color: 'text-blue-400' },
  { prefix: '> ', text: 'watching for changes...', color: 'text-slate-400' },
  { prefix: 'const ', text: "app = express();", color: 'text-blue-400', isPre: true },
  { prefix: 'await ', text: 'runMigrations();', color: 'text-slate-300', isAwait: true },
  { prefix: '✓ ', text: 'server running on :3000', color: 'text-blue-400' },
];

export function CoreDevCodeStream() {
  // Duplicate lines so the infinite scroll feels seamless
  const doubled = [...codeLines, ...codeLines];

  return (
    <div className="font-mono text-[10px] overflow-hidden h-full leading-[1.6] select-none">
      <motion.div
        animate={{ y: ['0%', '-50%'] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {doubled.map((line, i) => (
          <div key={i} className="whitespace-nowrap py-[1px]">
            {line.isPre ? (
              <>
                <span className="text-indigo-400">const </span>
                <span className="text-slate-300">{line.text}</span>
              </>
            ) : line.isAwait ? (
              <>
                <span className="text-indigo-400">await </span>
                <span className="text-slate-300">{line.text}</span>
              </>
            ) : line.isApp ? (
              <>
                <span className="text-blue-400">app</span>
                <span className="text-slate-400">.use(</span>
                <span className="text-emerald-300">"{line.text.split('"')[1]}"</span>
                <span className="text-slate-400">, routes);</span>
              </>
            ) : (
              <>
                <span className={line.color}>{line.prefix}</span>
                <span className="text-slate-400">{line.text}</span>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main card component
// ─────────────────────────────────────────────
const TECH_BADGES = ['React', 'Node.js', 'Express', 'MongoDB'];

export default function CoreDevelopmentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative group w-full max-w-lg mx-auto sm:mx-0 rounded-xl bg-slate-950/90 border border-slate-800/80 hover:border-blue-500/40 overflow-hidden transition-all duration-300 shadow-lg shadow-black/30"
    >
      {/* Subtle corner glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 p-5 sm:p-6 flex flex-col gap-3">

        {/* Header row */}
        <div className="flex items-start justify-between">
          <h4 className="font-mono text-xs font-bold text-blue-400 tracking-wider uppercase">
            PHASE II: CORE DEVELOPMENT
          </h4>
          <span className="font-mono text-[9px] text-slate-600 tracking-wider shrink-0 ml-3">
            SYS_02
          </span>
        </div>

        {/* Animated code window */}
        <div className="h-[88px] rounded-lg bg-black/80 border border-slate-800 p-2.5 relative overflow-hidden">
          {/* Terminal top bar dots */}
          <div className="flex items-center gap-1.5 mb-1.5 select-none">
            <span className="w-2 h-2 rounded-full bg-rose-500/60" />
            <span className="w-2 h-2 rounded-full bg-amber-500/60" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
          </div>

          {/* Scrolling code */}
          <CoreDevCodeStream />

          {/* Fade-out gradient at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {TECH_BADGES.map((badge) => (
            <span
              key={badge}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:border-blue-500/40 hover:text-blue-400 transition-colors"
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

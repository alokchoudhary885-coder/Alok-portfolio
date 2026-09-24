import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Github, GitBranch, ArrowUpRight, Flame } from 'lucide-react';

export default function GithubSection() {
  const days = Array.from({ length: 98 }, (_, i) => {
    const level = (i * 7 + 3) % 5;
    return { id: i, level };
  });

  const getCellColor = (level) => {
    switch (level) {
      case 4: return 'bg-cyan-400';
      case 3: return 'bg-cyan-500/80';
      case 2: return 'bg-cyan-700/60';
      case 1: return 'bg-cyan-950/40';
      default: return 'bg-white/5';
    }
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#04060b] border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 bg-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10 / GITHUB TELEMETRY</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            OPEN SOURCE &amp; <span className="text-shiny">COMMITS</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-3 font-light">
            Continuous development activity, repositories &amp; open source code cadence.
          </p>
        </div>

        {/* GitHub Heatmap Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#090d16] shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-syne text-xl font-bold text-white">Continuous Building</h3>
                <span className="font-mono text-xs text-slate-400">Full-Stack MERN &amp; Open Source Projects</span>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-semibold text-white">350+ Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-semibold text-white">12 Repositories</span>
              </div>
            </div>
          </div>

          {/* Activity Matrix */}
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[620px]">
              {days.map((d) => (
                <div
                  key={d.id}
                  title={`Activity Level: ${d.level}`}
                  className={`w-3.5 h-3.5 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer ${getCellColor(d.level)}`}
                />
              ))}
            </div>
          </div>

          {/* Matrix Footer */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
              <div className="w-2.5 h-2.5 rounded-sm bg-cyan-950/40" />
              <div className="w-2.5 h-2.5 rounded-sm bg-cyan-700/60" />
              <div className="w-2.5 h-2.5 rounded-sm bg-cyan-500/80" />
              <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
              <span>More</span>
            </div>

            <a
              href="https://github.com/alokchoudhary885-coder"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-white flex items-center gap-1.5 font-bold transition-colors"
            >
              <span>VIEW GITHUB PROFILE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

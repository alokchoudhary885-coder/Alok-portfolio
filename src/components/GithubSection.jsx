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
      case 4: return 'bg-blue-500';
      case 3: return 'bg-blue-500/70';
      case 2: return 'bg-blue-500/40';
      case 1: return 'bg-blue-500/20';
      default: return 'bg-slate-800/50';
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs mb-3 bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10 / GitHub Telemetry</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Open Source &amp; <span className="text-shiny">Commits</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 font-normal leading-relaxed">
            Continuous development activity, repositories &amp; open source code cadence.
          </p>
        </div>

        {/* GitHub Heatmap Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl relative overflow-hidden hover:border-slate-700 transition-all duration-300"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Continuous Building</h3>
                <span className="text-xs text-slate-400 font-normal">Full-Stack MERN &amp; Open Source Projects</span>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium text-white">350+ Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium text-white">12 Repositories</span>
              </div>
            </div>
          </div>

          {/* Activity Matrix */}
          <div className="overflow-x-auto pb-3">
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
          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-slate-800/50" />
              <div className="w-2.5 h-2.5 rounded-sm bg-blue-500/20" />
              <div className="w-2.5 h-2.5 rounded-sm bg-blue-500/40" />
              <div className="w-2.5 h-2.5 rounded-sm bg-blue-500/70" />
              <div className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
              <span>More</span>
            </div>

            <a
              href="https://github.com/alokchoudhary885-coder"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5 font-semibold transition-colors group"
            >
              <span>VIEW GITHUB PROFILE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

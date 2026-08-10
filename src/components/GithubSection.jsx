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
      case 4: return 'bg-purple-500 shadow-neon-purple';
      case 3: return 'bg-purple-600/80';
      case 2: return 'bg-purple-800/60';
      case 1: return 'bg-purple-950/40';
      default: return 'bg-white/5';
    }
  };

  return (
    <section className="relative py-28 px-4 md:px-8 bg-[#06070a] bg-noise border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-xs text-purple-400 mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10 / GITHUB ACTIVITY</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            OPEN SOURCE & <span className="text-gradient-purple">COMMITS</span>
          </h2>
        </div>

        <div className="p-6 md:p-8 rounded-3xl glass-card-purple border border-white/10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-syne text-xl font-bold text-white">Continuous Building</h3>
                <span className="font-mono text-xs text-slate-400">Full-Stack MERN & Open Source Projects</span>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>350+ Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-purple-400" />
                <span>12 Repositories</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[650px]">
              {days.map((d) => (
                <div
                  key={d.id}
                  title={`Activity Level: ${d.level}`}
                  className={`w-3.5 h-3.5 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer ${getCellColor(d.level)}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
              <div className="w-2.5 h-2.5 rounded-sm bg-purple-950/40" />
              <div className="w-2.5 h-2.5 rounded-sm bg-purple-800/60" />
              <div className="w-2.5 h-2.5 rounded-sm bg-purple-600/80" />
              <div className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
              <span>More</span>
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-white flex items-center gap-1 font-bold transition-colors"
            >
              <span>VIEW GITHUB PROFILE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

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
      case 4: return 'bg-[#CCFF00]';
      case 3: return 'bg-[#CCFF00]/70';
      case 2: return 'bg-[#CCFF00]/35';
      case 1: return 'bg-[#CCFF00]/15';
      default: return 'bg-white/5';
    }
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0A0A0A] border-t border-[#CCFF00]/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#CCFF00]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-[11px] sm:text-xs mb-3 bg-[#CCFF00]/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10 / GITHUB TELEMETRY</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            OPEN SOURCE & <span className="text-shiny">COMMITS</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#A0A0A0] mt-3 font-light">
            Continuous development activity, repositories & open source code cadence.
          </p>
        </div>

        {/* GitHub Heatmap Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-8 rounded-2xl border border-[#CCFF00]/15 bg-[#141414] shadow-2xl relative overflow-hidden hover:border-[#CCFF00]/30 transition-all duration-300"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#CCFF00]/10 mb-8">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-syne text-xl font-bold text-white">Continuous Building</h3>
                <span className="font-mono text-xs text-[#A0A0A0]">Full-Stack MERN & Open Source Projects</span>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-[#A0A0A0]">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#CCFF00] shrink-0" />
                <span className="font-semibold text-white">350+ Commits</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-[#CCFF00] shrink-0" />
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
                  className={`w-3.5 h-3.5 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer hover:ring-1 hover:ring-[#CCFF00]/50 ${getCellColor(d.level)}`}
                />
              ))}
            </div>
          </div>

          {/* Matrix Footer */}
          <div className="mt-6 pt-5 border-t border-[#CCFF00]/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#A0A0A0]">
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
              <div className="w-2.5 h-2.5 rounded-sm bg-[#CCFF00]/15" />
              <div className="w-2.5 h-2.5 rounded-sm bg-[#CCFF00]/35" />
              <div className="w-2.5 h-2.5 rounded-sm bg-[#CCFF00]/70" />
              <div className="w-2.5 h-2.5 rounded-sm bg-[#CCFF00]" />
              <span>More</span>
            </div>

            <a
              href="https://github.com/alokchoudhary885-coder"
              target="_blank"
              rel="noreferrer"
              className="text-[#CCFF00] hover:text-white flex items-center gap-1.5 font-bold transition-colors group"
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

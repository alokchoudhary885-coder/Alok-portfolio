import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DsaTerminalSection() {
  const dsaSuites = [
    { name: '[1] Arrays & Strings',               status: 'PRACTICED', count: '45 Problems',  },
    { name: '[2] Linked Lists & Stacks',           status: 'COMPLETED', count: '30 Problems',  },
    { name: '[3] Trees & Graphs',                  status: 'PRACTICED', count: '25 Problems',  },
    { name: '[4] Binary Search & Sorting',         status: 'VERIFIED',  count: '35 Problems',  },
    { name: '[5] Object-Oriented Programming (Java)', status: 'COMPLETED', count: 'OOPs Core', },
  ];

  const statusColor = (s) => {
    if (s === 'COMPLETED') return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (s === 'VERIFIED')  return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    return 'text-slate-300 border-slate-700 bg-slate-800/50';
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs mb-3 bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 / Problem Solving &amp; Algorithms</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Java &amp; <span className="text-shiny">DSA Practice</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 font-normal leading-relaxed">
            Core algorithmic foundations, time complexity optimization &amp; data structure problem solving.
          </p>
        </div>

        {/* CLI Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl font-mono text-xs"
        >
          {/* Terminal Top Bar */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-slate-400 text-xs">alok@developer-terminal:~</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>bash v5.2</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8 space-y-4">
            <div className="text-slate-300">
              <span className="text-blue-400 font-bold">$ </span>
              <span className="text-white font-medium">java problem-solving --suite=dsa-core-track</span>
            </div>

            <div className="space-y-2.5 pt-1">
              {dsaSuites.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-blue-400 text-xs">▸</span>
                    <span className="text-slate-200 font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs">{item.count}</span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${statusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-3">
              <span className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">150+ Total LeetCode &amp; Coding Problems Practiced</span>
              </span>
              <span className="text-blue-400 font-semibold px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30">
                Java 17 LTS
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

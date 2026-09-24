import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles, CheckCircle2, Cpu } from 'lucide-react';

export default function DsaTerminalSection() {
  const dsaSuites = [
    { name: '[1] Arrays & Strings', status: 'PRACTICED', count: '45 Problems', accent: 'text-cyan-400 border-cyan-500/30' },
    { name: '[2] Linked Lists & Stacks', status: 'COMPLETED', count: '30 Problems', accent: 'text-green-400 border-green-500/30' },
    { name: '[3] Trees & Graphs', status: 'PRACTICED', count: '25 Problems', accent: 'text-purple-400 border-purple-500/30' },
    { name: '[4] Binary Search & Sorting', status: 'VERIFIED', count: '35 Problems', accent: 'text-blue-400 border-blue-500/30' },
    { name: '[5] Object-Oriented Programming (Java)', status: 'COMPLETED', count: 'OOPs Core', accent: 'text-yellow-400 border-yellow-500/30' },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#04060b] border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 bg-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 / PROBLEM SOLVING &amp; ALGORITHMS</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            JAVA &amp; <span className="text-shiny">DSA PRACTICE</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-3 font-light">
            Core algorithmic foundations, time complexity optimization &amp; data structure problem solving.
          </p>
        </div>

        {/* CLI Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-[#090d16] shadow-2xl font-mono text-xs"
        >
          {/* Top Terminal Bar */}
          <div className="px-5 py-3.5 bg-[#03060c] border-b border-white/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-slate-400 text-xs font-semibold">alok@developer-terminal:~</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>bash v5.2</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8 space-y-5">
            <div className="text-slate-400">
              <span className="text-cyan-400 font-bold">$ </span>
              <span className="text-white font-medium">java problem-solving --suite=dsa-core-track</span>
            </div>

            <div className="space-y-3 pt-1">
              {dsaSuites.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all gap-2"
                >
                  <span className="text-slate-200 font-medium">{item.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-xs">{item.count}</span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${item.accent} bg-white/5`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-slate-400 text-xs gap-3">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-300 font-medium">150+ Total LeetCode &amp; Coding Problems Practiced</span>
              </span>
              <span className="text-cyan-400 font-bold px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                JAVA 17 LTS
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

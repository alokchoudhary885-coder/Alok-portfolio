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
    if (s === 'COMPLETED') return 'text-[#CCFF00] border-[#CCFF00]/40 bg-[#CCFF00]/8';
    if (s === 'VERIFIED')  return 'text-white border-white/30 bg-white/5';
    return 'text-[#A0A0A0] border-white/20 bg-white/3';
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0A0A0A] border-t border-[#CCFF00]/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-[#CCFF00]/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-[11px] sm:text-xs mb-3 bg-[#CCFF00]/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 / PROBLEM SOLVING & ALGORITHMS</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            JAVA & <span className="text-shiny">DSA PRACTICE</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#A0A0A0] mt-3 font-light">
            Core algorithmic foundations, time complexity optimization & data structure problem solving.
          </p>
        </div>

        {/* CLI Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-[#CCFF00]/20 bg-[#0F0F0F] shadow-[0_0_40px_rgba(204,255,0,0.06)] font-mono text-xs"
        >
          {/* Terminal Top Bar */}
          <div className="px-5 py-3.5 bg-[#141414] border-b border-[#CCFF00]/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-[#CCFF00]/80" />
              <span className="ml-3 text-[#A0A0A0] text-xs font-semibold">alok@developer-terminal:~</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#A0A0A0]">
              <Terminal className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>bash v5.2</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8 space-y-5">
            <div className="text-[#A0A0A0]">
              <span className="text-[#CCFF00] font-bold">$ </span>
              <span className="text-white font-medium">java problem-solving --suite=dsa-core-track</span>
            </div>

            <div className="space-y-3 pt-1">
              {dsaSuites.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-[#1A1A1A] border border-[#CCFF00]/8 hover:border-[#CCFF00]/25 transition-all gap-2 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#CCFF00] font-bold text-[10px] opacity-50">▸</span>
                    <span className="text-white font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#A0A0A0] text-xs">{item.count}</span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${statusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div className="pt-4 border-t border-[#CCFF00]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-3">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0" />
                <span className="text-white font-medium">150+ Total LeetCode & Coding Problems Practiced</span>
              </span>
              <span className="text-[#CCFF00] font-bold px-3 py-1 rounded bg-[#CCFF00]/10 border border-[#CCFF00]/30">
                JAVA 17 LTS
              </span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

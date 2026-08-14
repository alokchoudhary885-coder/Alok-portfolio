import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DsaTerminalSection() {
  const [activeTab, setActiveTab] = useState('dsa');

  const dsaSuites = [
    { name: '[1] Arrays & Strings', status: 'PRACTICED', count: '45 Problems', accent: 'text-cyan-400' },
    { name: '[2] Linked Lists & Stacks', status: 'COMPLETED', count: '30 Problems', accent: 'text-green-400' },
    { name: '[3] Trees & Graphs', status: 'PRACTICED', count: '25 Problems', accent: 'text-purple-400' },
    { name: '[4] Binary Search & Sorting', status: 'VERIFIED', count: '35 Problems', accent: 'text-blue-400' },
    { name: '[5] Object-Oriented Programming (Java)', status: 'COMPLETED', count: 'OOPs Core', accent: 'text-yellow-400' },
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#030712] border-t border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10 / PROBLEM SOLVING & DSA</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            Java & <span className="text-gradient-purple">DSA Practice</span>
          </h2>
        </div>

        {/* CLI Terminal Container */}
        <div className="rounded-3xl overflow-hidden glass-panel border border-white/15 bg-[#0b0f19] shadow-2xl font-mono text-xs">
          
          {/* Top Terminal Bar */}
          <div className="px-5 py-3.5 bg-[#030712] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-slate-400 text-[11px]">alok@developer-terminal:~</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>bash v5.2</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-4">
            <div className="text-slate-400">
              <span className="text-green-400 font-bold">$ </span>
              <span className="text-white">java problem-solving --suite=dsa-practice</span>
            </div>

            <div className="space-y-2.5 pt-2">
              {dsaSuites.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all">
                  <span className="text-slate-200 font-semibold">{item.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-[11px]">{item.count}</span>
                    <span className={`px-2.5 py-0.5 rounded-md font-bold text-[10px] bg-white/10 ${item.accent}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-slate-400 text-[11px]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>150+ Total LeetCode & Coding Problems Practiced</span>
              </span>
              <span className="text-cyan-400 font-bold">JAVA 17</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

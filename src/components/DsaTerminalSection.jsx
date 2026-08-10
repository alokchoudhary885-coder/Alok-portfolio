import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Play, BrainCircuit } from 'lucide-react';

export default function DsaTerminalSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isExecuting, setIsExecuting] = useState(true);

  const checks = [
    { topic: 'Arrays & Matrix Manipulations', status: 'PASSED', speed: 'O(1) / O(N)' },
    { topic: 'Strings & Pattern Matching', status: 'PASSED', speed: 'O(N)' },
    { topic: 'Sorting Algorithms (Quick/Merge)', status: 'PASSED', speed: 'O(N log N)' },
    { topic: 'Binary Search & Two Pointers', status: 'PASSED', speed: 'O(log N)' },
    { topic: 'Object-Oriented Programming (OOP)', status: 'PASSED', speed: 'VERIFIED' },
    { topic: 'DBMS & SQL Query Optimization', status: 'PASSED', speed: 'INDEXED' },
    { topic: 'Data Structures & Problem Solving', status: 'PASSED', speed: '100% PASS' }
  ];

  useEffect(() => {
    if (activeStep < checks.length) {
      const timer = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setIsExecuting(false);
    }
  }, [activeStep, checks.length]);

  const handleRerun = () => {
    setActiveStep(0);
    setIsExecuting(true);
  };

  return (
    <section id="dsa" className="relative py-28 px-4 md:px-8 bg-[#06070a] bg-noise border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-xs text-purple-400 mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 / PROBLEM SOLVING / DSA</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            ALGORITHMIC <span className="text-gradient-purple">PROBLEM SOLVING</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-3 max-w-xl">
            Strong foundations in Java, Data Structures, Algorithms, and Object-Oriented Principles
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl glass-card-purple p-6 sm:p-8 shadow-2xl overflow-hidden font-mono">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-slate-400 ml-2">alok@developer-terminal:~</span>
            </div>

            <button
              onClick={handleRerun}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 transition-all text-[11px]"
            >
              <Play className="w-3 h-3" />
              <span>RERUN SUITE</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-200 mb-6">
            <span className="text-purple-400 font-bold">$</span>
            <span className="text-white font-semibold">java problem-solving --suite=dsa-practice</span>
          </div>

          <div className="space-y-3 mb-8">
            {checks.map((item, idx) => {
              const isChecked = idx < activeStep;
              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                    isChecked
                      ? 'bg-white/5 border border-white/10 text-white'
                      : 'opacity-30 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400 font-bold text-xs">[{idx + 1}]</span>
                    <span className="text-xs sm:text-sm font-medium">{item.topic}</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-slate-400 hidden sm:inline">{item.speed}</span>
                    {isChecked ? (
                      <span className="flex items-center gap-1 text-green-400 font-bold">
                        <span>✓ PASSED</span>
                      </span>
                    ) : (
                      <span className="text-slate-500">WAITING...</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
            <div className="flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              <span>STATUS: {isExecuting ? "EXECUTING SUITE..." : "SUITE PASSED"}</span>
            </div>
            <span className="text-purple-400 font-bold">JAVA • DSA • OOP • DBMS</span>
          </div>

        </div>

      </div>
    </section>
  );
}

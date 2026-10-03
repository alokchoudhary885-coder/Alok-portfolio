import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, GitPullRequest, CheckCircle2, Zap, Server, Shield, Terminal } from 'lucide-react';

const LOG_ENTRIES = [
  { time: '14:22:04', event: 'PR #108: Gemini AI Review: APPROVED', type: 'success' },
  { time: '14:22:15', event: 'CI/CD Pipeline: Build passed in 42s', type: 'info' },
  { time: '14:22:28', event: 'Socket.IO: Telemetry sync 18ms latency', type: 'cyan' },
  { time: '14:22:41', event: 'DORA: MTTR reached target 12m', type: 'success' },
  { time: '14:22:56', event: 'OAuth Vault: AES-256 token rotation OK', type: 'info' }
];

export default function DevCommandPreview() {
  const [logIndex, setLogIndex] = useState(0);
  const [activePipelineStep, setActivePipelineStep] = useState(0);
  const [deployCount, setDeployCount] = useState(24);

  useEffect(() => {
    const pipelineTimer = setInterval(() => {
      setActivePipelineStep((prev) => (prev + 1) % 4);
    }, 1800);

    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % LOG_ENTRIES.length);
      setDeployCount((prev) => (prev % 2 === 0 ? 24 : 25));
    }, 2400);

    return () => {
      clearInterval(pipelineTimer);
      clearInterval(logTimer);
    };
  }, []);

  const stages = ['Lint', 'Test', 'Build', 'Deploy'];

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800/90 bg-[#060913] text-xs shadow-lg select-none">
      {/* Telemetry Header */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-white tracking-tight text-[11px]">DevCommand</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-400 font-mono border border-blue-500/20">
              DORA AI
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Socket.IO Live</span>
          </span>
        </div>
      </div>

      {/* Main Preview Content */}
      <div className="p-3.5 space-y-3">
        {/* DORA Metrics Sparklines */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
            <span className="text-[9px] text-slate-400 font-mono block">Deploy Freq</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-bold text-white font-mono">{deployCount}</span>
              <span className="text-[9px] text-slate-400 font-mono">/day</span>
            </div>
            <span className="text-[8px] text-emerald-400 font-mono">▲ +18% Elite</span>
          </div>

          <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
            <span className="text-[9px] text-slate-400 font-mono block">MTTR Recovery</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-bold text-cyan-400 font-mono">12m</span>
            </div>
            <span className="text-[8px] text-emerald-400 font-mono">▼ -34% High</span>
          </div>

          <div className="p-2 rounded-lg bg-slate-900/70 border border-slate-800">
            <span className="text-[9px] text-slate-400 font-mono block">PR AI Review</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-bold text-indigo-400 font-mono">99.2%</span>
            </div>
            <span className="text-[8px] text-blue-400 font-mono">Gemini 1.5</span>
          </div>
        </div>

        {/* Live CI/CD Pipeline Visualizer */}
        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-2">
            <span>Automated CI/CD Pipeline</span>
            <span className="text-cyan-400">Branch: #main</span>
          </div>

          <div className="flex items-center justify-between relative px-2">
            {/* Connecting Line */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-slate-800 z-0" />
            <motion.div
              className="absolute left-6 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 z-0"
              animate={{
                width: activePipelineStep === 0 ? '10%' : activePipelineStep === 1 ? '40%' : activePipelineStep === 2 ? '70%' : '90%'
              }}
              transition={{ duration: 0.5 }}
            />

            {stages.map((stage, i) => {
              const isPast = i < activePipelineStep;
              const isCurrent = i === activePipelineStep;

              return (
                <div key={stage} className="relative z-10 flex flex-col items-center gap-1">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-mono font-bold transition-all ${
                      isPast
                        ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-400'
                        : isCurrent
                        ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 ring-2 ring-cyan-500/30'
                        : 'bg-slate-900 border border-slate-800 text-slate-500'
                    }`}
                  >
                    {isPast ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                  </div>
                  <span className={`text-[9px] font-mono ${isCurrent ? 'text-cyan-400 font-bold' : isPast ? 'text-slate-300' : 'text-slate-500'}`}>
                    {stage}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Activity Stream Terminal */}
        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[10px]">
          <div className="flex items-center gap-2 text-slate-400 mb-1 pb-1 border-b border-slate-900">
            <Terminal className="w-3 h-3 text-cyan-400" />
            <span className="text-[9px] uppercase tracking-wider">Live WebSocket Activity Feed</span>
          </div>

          <div className="space-y-1 truncate">
            {LOG_ENTRIES.slice(logIndex, logIndex + 2).concat(LOG_ENTRIES.slice(0, Math.max(0, 2 - (LOG_ENTRIES.length - logIndex)))).map((log, idx) => (
              <div key={idx} className="flex items-center gap-1.5 truncate">
                <span className="text-slate-500 text-[9px]">[{log.time}]</span>
                <span className={`truncate text-[9.5px] ${
                  log.type === 'success' ? 'text-emerald-400' : log.type === 'cyan' ? 'text-cyan-300' : 'text-blue-300'
                }`}>
                  {log.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

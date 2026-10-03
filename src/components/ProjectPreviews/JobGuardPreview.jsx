import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ShieldAlert, ShieldCheck, AlertTriangle, CheckCircle, Search, RefreshCw } from 'lucide-react';

const CHECKS = [
  { label: 'Upfront Registration Fee Demand', status: 'DANGER', detail: 'Flagged: Payment link found in intro' },
  { label: 'Unverified Telegram/WhatsApp Redirect', status: 'WARNING', detail: 'Suspicious off-platform lure' },
  { label: 'Company Domain Legitimacy Check', status: 'VERIFIED', detail: 'DNS mismatch detected via Gemini AI' }
];

export default function JobGuardPreview() {
  const [scanStep, setScanStep] = useState(0);
  const [riskScore, setRiskScore] = useState(88);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsScanning(true);
      setTimeout(() => {
        setScanStep((prev) => (prev + 1) % 3);
        setIsScanning(false);
      }, 700);
    }, 3200);

    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800/90 bg-[#060a12] text-xs shadow-lg select-none">
      {/* Extension Browser Bar */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-white tracking-tight text-[11px]">JobGuard MV3</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-400 font-mono border border-indigo-500/20">
              Offline-First
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Target Host */}
          <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800 hidden sm:inline-block">
            linkedin.com/jobs/*
          </span>

          <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>DOM Guard</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-3.5 space-y-3">
        {/* Job Listing Mini-Card under scanner */}
        <div className="relative p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 overflow-hidden">
          {/* Scanner Beam Animation */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_10px_#60a5fa] pointer-events-none"
            animate={{
              top: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                <span>"Senior Cloud Engineer"</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-400 font-mono border border-rose-500/30">
                  Suspicious Lure
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                Fast-track hiring • Registration fee ₹2,500 required
              </div>
            </div>

            <div className="text-right shrink-0">
              <span className="text-[9px] font-mono text-slate-400 block">AI Confidence</span>
              <span className="text-[11px] font-bold text-blue-400 font-mono">99.4%</span>
            </div>
          </div>
        </div>

        {/* Risk Score Meter & Security Checks */}
        <div className="grid grid-cols-12 gap-2.5 items-center">
          {/* Risk Gauge Box */}
          <div className="col-span-5 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              Scam Risk Index
            </span>

            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  className="stroke-slate-800"
                  strokeWidth="3.5"
                  fill="none"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="14"
                  className="stroke-rose-500"
                  strokeWidth="3.5"
                  strokeDasharray="88, 100"
                  strokeLinecap="round"
                  fill="none"
                  animate={{
                    strokeDasharray: isScanning ? '30, 100' : '88, 100'
                  }}
                  transition={{ duration: 0.6 }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-base font-bold text-rose-400 font-mono">88%</span>
                <span className="text-[7px] text-rose-300 font-bold uppercase tracking-wider">CRITICAL</span>
              </div>
            </div>

            <div className="mt-1.5 text-[9px] font-mono text-rose-400 flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-rose-400" />
              <span>Scam Blocked</span>
            </div>
          </div>

          {/* Security Checks List */}
          <div className="col-span-7 space-y-1.5">
            {CHECKS.map((chk, i) => (
              <div
                key={i}
                className="p-1.5 rounded-md bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-[10px]"
              >
                <div className="flex items-center gap-1.5 truncate max-w-[130px] sm:max-w-none">
                  {chk.status === 'DANGER' ? (
                    <AlertTriangle className="w-3 h-3 text-rose-400 shrink-0" />
                  ) : chk.status === 'WARNING' ? (
                    <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
                  ) : (
                    <CheckCircle className="w-3 h-3 text-blue-400 shrink-0" />
                  )}
                  <span className="text-slate-300 truncate font-mono text-[9px]">{chk.label}</span>
                </div>

                <span className={`text-[8px] font-mono px-1 py-0.2 rounded font-bold shrink-0 ${
                  chk.status === 'DANGER'
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    : chk.status === 'WARNING'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {chk.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ShieldAlert, Download, Layers, Lock, Sparkles, AlertTriangle, FileText } from 'lucide-react';

export default function JobGuardCaseStudyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const demoHighlights = [
    {
      title: 'Interactive Demo Presets',
      desc: 'Test 🔴 Registration Fee Scam, 🟡 Startup WhatsApp, Hinglish "Ghar Baithe" Lure, and 🟢 Stripe SDE for instant mathematical risk scoring.',
      icon: Sparkles,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10'
    },
    {
      title: 'Custom Text Analysis',
      desc: 'Paste any suspicious job email, WhatsApp message, or offer letter to analyze live risk meter scoring in real-time.',
      icon: FileText,
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/10'
    },
    {
      title: '1-Click Extension Download (ZIP)',
      desc: 'Direct ZIP package for instant 1-click installation on Chrome, Brave, Edge & Manifest V3 browsers.',
      icon: Download,
      color: 'text-green-400 border-green-500/30 bg-green-500/10'
    }
  ];

  const features = [
    'Real-Time Job Risk & Scam Detection Engine',
    'Chrome Manifest V3 Architecture (Offline-First)',
    'Upfront Fee Extortion Radar & Fake Offer Flagging',
    'Google Gemini AI Multimodal Threat Analysis',
    'Recruitment Phishing & Malicious Domain Detection',
    'LinkedIn, Internshala, & Indeed DOM Parser',
    'Low-Latency In-Browser Threat Scoring Algorithm',
    'Post & Company Profile Risk Score Meter',
    'TypeScript 5.0 Type-Safe Extension Core',
    'React 18 Popup & Overlay Side-Panel UI',
    'Tailwind CSS Cyber-Dark Minimalist Theme',
    'PostgreSQL Backend Logging & Threat Analytics Database',
    'Vite Build Pipeline & Chrome Web Store Package',
    'Sandboxed Zero-Data Leak Privacy Protection'
  ];

  const techStackBadges = [
    'TypeScript', 'React 18', 'Chrome Manifest V3', 'Tailwind CSS', 
    'Node.js', 'Express', 'PostgreSQL', 'Google Gemini AI', 'Vite'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl glass-panel border border-cyan-500/40 bg-[#0b0f19]/95 rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl my-auto text-white overflow-hidden max-h-[88vh] overflow-y-auto"
        >
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-2xl sm:text-3xl">🛡️</span>
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-cyan-400 font-bold tracking-wider block">
                  CHROME EXTENSION & CYBERSECURITY CASE STUDY
                </span>
                <h2 className="font-syne text-xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  JOBGUARD RISK ENGINE
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close JobGuard Case Study"
              className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 hover:text-white transition-all shrink-0 ml-2"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a
              href="https://alokchoudhary885-coder.github.io/JOBGAURD-EXTENSION/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-cyan-500 text-black font-bold font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-cyan-400 transition-all"
            >
              <span>Live Interactive Web Demo</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>

            <a
              href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass-panel border border-white/15 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center gap-2 transition-all"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0" />
              <span>Source Code</span>
            </a>

            <a
              href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION/raw/main/JobGuard-v2.0.0-ChromeStore.zip"
              download
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 font-mono text-xs flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>ZIP Download</span>
            </a>
          </div>

          {/* Live Interactive Features Box */}
          <div className="mb-8 sm:mb-10">
            <h3 className="font-syne text-lg sm:text-xl font-bold text-white mb-3.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
              <span>LIVE WEB DEMO HIGHLIGHTS</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 font-mono text-xs">
              {demoHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-xl border ${item.color}`}>
                      <item.icon className="w-4 h-4 shrink-0" />
                    </div>
                    <span className="font-syne font-bold text-sm text-white">{item.title}</span>
                  </div>
                  <p className="text-slate-300 text-[11px] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          <div className="mb-8 sm:mb-10">
            <h3 className="font-syne text-lg sm:text-xl font-bold text-white mb-2.5 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
              <span>CYBERSECURITY RISK ARCHITECTURE</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-5">
              An offline-first Chrome Extension (Manifest V3) and cybersecurity risk engine that analyzes job postings in real-time on LinkedIn, Internshala, and Indeed to protect job seekers from fake offers, upfront fee extortion, and recruitment phishing.
            </p>

            <div className="p-4 sm:p-6 rounded-2xl bg-black/50 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center w-full md:w-auto">
                <span className="text-cyan-400 font-bold block mb-0.5">MANIFEST V3 PARSER</span>
                <span className="text-slate-300 text-[11px]">Real-Time DOM Scraping & Regex Radar</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center w-full md:w-auto">
                <span className="text-purple-400 font-bold block mb-0.5">GEMINI AI MULTIMODAL</span>
                <span className="text-slate-300 text-[11px]">Threat Classifier & Pattern Scoring</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center w-full md:w-auto">
                <span className="text-green-400 font-bold block mb-0.5">POSTGRESQL ANALYTICS</span>
                <span className="text-slate-300 text-[11px]">Phishing Domain BlacklistDB</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-8 sm:mb-10">
            <h3 className="font-syne text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
              <span>TECHNOLOGIES LEVERAGED</span>
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {techStackBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-white/5 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Features */}
          <div>
            <h3 className="font-syne text-lg sm:text-xl font-bold text-white mb-3.5 flex items-center gap-2">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
              <span>KEY ENGINEERING HIGHLIGHTS (14+)</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 font-mono text-[11px] sm:text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-all"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

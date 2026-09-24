import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ShieldAlert, Download, Layers, Lock, Sparkles, FileText } from 'lucide-react';

export default function JobGuardCaseStudyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const demoHighlights = [
    {
      title: 'Interactive Demo Presets',
      desc: 'Test 🔴 Registration Fee Scam, 🟡 Startup WhatsApp, Hinglish "Ghar Baithe" Lure, and 🟢 Stripe SDE for instant mathematical risk scoring.',
      icon: Sparkles,
      color: 'text-blue-400 border-blue-500/30 bg-blue-500/10'
    },
    {
      title: 'Custom Text Analysis',
      desc: 'Paste any suspicious job email, WhatsApp message, or offer letter to analyze live risk meter scoring in real-time.',
      icon: FileText,
      color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10'
    },
    {
      title: '1-Click Extension Download (ZIP)',
      desc: 'Direct ZIP package for instant 1-click installation on Chrome, Brave, Edge & Manifest V3 browsers.',
      icon: Download,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-2xl my-auto text-white overflow-hidden max-h-[86vh] overflow-y-auto"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">🛡️</span>
              <div>
                <span className="text-xs text-blue-400 font-mono font-medium block">
                  CYBERSECURITY CASE STUDY
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  JobGuard Risk Engine
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close JobGuard Case Study"
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white transition-all shrink-0 ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="https://alokchoudhary885-coder.github.io/JOBGAURD-EXTENSION/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Live Interactive Web Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs font-medium flex items-center gap-2 transition-all"
            >
              <Github className="w-3.5 h-3.5 text-blue-400" />
              <span>Source Code</span>
            </a>

            <a
              href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION/raw/main/JobGuard-v2.0.0-ChromeStore.zip"
              download
              className="px-3.5 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>ZIP Download</span>
            </a>
          </div>

          {/* Live Interactive Features Box */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Live Web Demo Highlights</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {demoHighlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg border ${item.color}`}>
                      <item.icon className="w-4 h-4 shrink-0" />
                    </div>
                    <span className="font-semibold text-xs text-white">{item.title}</span>
                  </div>
                  <p className="text-slate-300 text-[11px] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Cybersecurity Risk Architecture</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed mb-4">
              An offline-first Chrome Extension (Manifest V3) and cybersecurity risk engine that analyzes job postings in real-time on LinkedIn, Internshala, and Indeed to protect job seekers from fake offers, upfront fee extortion, and recruitment phishing.
            </p>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center w-full md:w-auto">
                <span className="text-blue-400 font-semibold block mb-0.5">Manifest V3 Parser</span>
                <span className="text-slate-300 text-xs">Real-Time DOM Scraping &amp; Regex Radar</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center w-full md:w-auto">
                <span className="text-indigo-400 font-semibold block mb-0.5">Gemini AI Multimodal</span>
                <span className="text-slate-300 text-xs">Threat Classifier &amp; Pattern Scoring</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center w-full md:w-auto">
                <span className="text-emerald-400 font-semibold block mb-0.5">PostgreSQL Analytics</span>
                <span className="text-slate-300 text-xs">Phishing Domain BlacklistDB</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-white mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Technologies Leveraged</span>
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {techStackBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-blue-300 font-mono text-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Features */}
          <div>
            <h3 className="text-base font-semibold text-white mb-2.5 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Key Engineering Highlights (14+)</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Github, ArrowUpRight, Download, ExternalLink, Zap, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectsSection({ onOpenFoodRushModal, onOpenJobGuardModal }) {
  const [expandedDevCommand, setExpandedDevCommand] = useState(false);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0A0A0A] border-t border-[#CCFF00]/10 overflow-hidden">
      {/* Ambient neon glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CCFF00]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-[11px] sm:text-xs mb-3 bg-[#CCFF00]/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / SELECTED PORTFOLIO WORK</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            FEATURED <span className="text-shiny">PROJECTS</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#A0A0A0] mt-3 max-w-2xl font-light">
            Production MERN applications, AI cybersecurity extensions & developer telemetry platforms built with scalable architecture.
          </p>
        </div>

        {/* ====================================================== */}
        {/* PROJECT 01: FOODRUSH */}
        {/* ====================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-[#CCFF00]/15 bg-[#141414] p-6 sm:p-10 lg:p-12 mb-10 sm:mb-14 overflow-hidden shadow-2xl group hover:border-[#CCFF00]/35 transition-all duration-500"
        >
          {/* Ambient Corner Flare */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none group-hover:bg-[#CCFF00]/8 transition-all duration-700" />

          {/* Project Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#CCFF00]/10 pb-5 mb-8 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="font-syne font-black text-2xl text-[#CCFF00]">01</span>
              <span className="text-[#A0A0A0] uppercase tracking-widest text-[11px]">FLAGSHIP MERN ECOSYSTEM</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] font-semibold border border-[#CCFF00]/20 text-[11px]">
              FULL-STACK PRODUCTION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
              <h3 className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-3">
                <span>FoodRush</span>
                <span className="text-2xl sm:text-3xl">🍔</span>
              </h3>

              <div className="text-[#CCFF00] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase">
                FULL-STACK FOOD DELIVERY PLATFORM & RESTAURANT ECOSYSTEM
              </div>

              <p className="text-[#A0A0A0] text-sm sm:text-base font-light leading-relaxed">
                A full-stack food delivery web application connecting customers with local restaurant owners. Features customer & restaurant owner roles, 25+ RESTful API endpoints, Razorpay online payment integration, voice search, and 6-digit OTP verification.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                {['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Razorpay', 'Cloudinary', 'Web Speech API', 'Zustand'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-[#CCFF00]/5 border border-[#CCFF00]/20 text-[#A0A0A0]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
                <button
                  onClick={onOpenFoodRushModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#CCFF00] hover:bg-[#d4ff1a] text-black font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-all"
                >
                  <span>Explore Technical Case Study</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="https://github.com/alokchoudhary885-coder"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-[#CCFF00]/20 hover:border-[#CCFF00]/50 text-[#A0A0A0] hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all bg-[#CCFF00]/5"
                >
                  <Github className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Panel */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0F0F0F] border border-[#CCFF00]/15 font-mono text-xs space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#CCFF00]/10 pb-3 text-[#A0A0A0]">
                  <span className="text-[#CCFF00] font-bold uppercase tracking-wider">ENGINEERING SPECS</span>
                  <span className="text-[10px]">25+ ENDPOINTS</span>
                </div>

                <div className="space-y-2 text-[11px] text-[#A0A0A0]">
                  <div className="flex justify-between">
                    <span>Authentication:</span>
                    <span className="text-white font-semibold">JWT + 6-Digit Email OTP</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Gateway:</span>
                    <span className="text-[#CCFF00] font-semibold">Razorpay SDK Integrated</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Voice Navigation:</span>
                    <span className="text-[#CCFF00] font-semibold">Web Speech API</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Image Pipeline:</span>
                    <span className="text-white font-semibold">Cloudinary CDN</span>
                  </div>
                </div>

                <button
                  onClick={onOpenFoodRushModal}
                  className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#CCFF00]/10 hover:bg-[#CCFF00]/20 border border-[#CCFF00]/30 text-[#CCFF00] font-bold text-center flex items-center justify-center gap-1.5 transition-all text-[11px]"
                >
                  <span>VIEW ARCHITECTURE MODAL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ====================================================== */}
        {/* PROJECT 02: JOBGUARD */}
        {/* ====================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-[#CCFF00]/15 bg-[#141414] p-6 sm:p-10 lg:p-12 mb-10 sm:mb-14 overflow-hidden shadow-2xl group hover:border-[#CCFF00]/35 transition-all duration-500"
        >
          {/* Ambient Corner Flare */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#CCFF00]/4 rounded-full blur-[140px] pointer-events-none group-hover:bg-[#CCFF00]/7 transition-all duration-700" />

          {/* Project Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#CCFF00]/10 pb-5 mb-8 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="font-syne font-black text-2xl text-[#CCFF00]">02</span>
              <span className="text-[#A0A0A0] uppercase tracking-widest text-[11px]">CHROME EXTENSION & CYBERSECURITY ENGINE</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] font-semibold border border-[#CCFF00]/20 text-[11px]">
              MANIFEST V3 OFFLINE-FIRST
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
              <h3 className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-3">
                <span>JobGuard</span>
                <span className="text-2xl sm:text-3xl">🛡️</span>
              </h3>

              <div className="text-[#CCFF00] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase">
                REAL-TIME JOB RISK & SCAM DETECTION ENGINE
              </div>

              <p className="text-[#A0A0A0] text-sm sm:text-base font-light leading-relaxed">
                An offline-first Chrome Extension (Manifest V3) and cybersecurity risk engine that analyzes job postings in real-time on LinkedIn, Internshala, and Indeed to protect job seekers from fake offers, upfront fee extortion, and recruitment phishing.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                {['TypeScript', 'React 18', 'Chrome Manifest V3', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Google Gemini AI', 'Vite'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-[#CCFF00]/5 border border-[#CCFF00]/20 text-[#A0A0A0]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
                <button
                  onClick={onOpenJobGuardModal}
                  className="px-6 py-3.5 rounded-full bg-[#CCFF00] hover:bg-[#d4ff1a] text-black font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-all"
                >
                  <span>Explore Extension Case Study</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="https://alokchoudhary885-coder.github.io/JOBGAURD-EXTENSION/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-full border border-[#CCFF00]/20 hover:border-[#CCFF00]/50 text-[#A0A0A0] hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all bg-[#CCFF00]/5"
                >
                  <span>Live Web Demo</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-full border border-[#CCFF00]/15 hover:border-[#CCFF00]/40 text-[#A0A0A0] hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all bg-white/3 hover:bg-white/5"
                >
                  <Github className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION/raw/main/JobGuard-v2.0.0-ChromeStore.zip"
                  download
                  className="px-4 py-3.5 rounded-full bg-[#CCFF00]/5 hover:bg-[#CCFF00]/10 border border-[#CCFF00]/15 text-[#A0A0A0] font-mono text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                  <span>ZIP</span>
                </a>
              </div>
            </div>

            {/* Right Architectural Panel */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0F0F0F] border border-[#CCFF00]/15 font-mono text-xs space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#CCFF00]/10 pb-3 text-[#A0A0A0]">
                  <span className="text-[#CCFF00] font-bold uppercase tracking-wider">CYBERSECURITY SPECS</span>
                  <span className="text-[10px]">REAL-TIME SCAN</span>
                </div>

                <div className="space-y-2 text-[11px] text-[#A0A0A0]">
                  <div className="flex justify-between">
                    <span>Supported Portals:</span>
                    <span className="text-white font-semibold">LinkedIn, Internshala, Indeed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Threat Classifier:</span>
                    <span className="text-[#CCFF00] font-semibold">Gemini 1.5 Flash AI Multimodal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engine Type:</span>
                    <span className="text-[#CCFF00] font-semibold">Offline-First DOM Parser</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Database:</span>
                    <span className="text-white font-semibold">PostgreSQL BlacklistDB</span>
                  </div>
                </div>

                <button
                  onClick={onOpenJobGuardModal}
                  className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#CCFF00]/10 hover:bg-[#CCFF00]/20 border border-[#CCFF00]/30 text-[#CCFF00] font-bold text-center flex items-center justify-center gap-1.5 transition-all text-[11px]"
                >
                  <span>VIEW JOBGUARD CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ====================================================== */}
        {/* PROJECT 03: DEVELOPER COMMAND CENTER */}
        {/* ====================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-[#CCFF00]/15 bg-[#141414] p-6 sm:p-10 lg:p-12 mb-10 sm:mb-14 overflow-hidden shadow-2xl group hover:border-[#CCFF00]/35 transition-all duration-500"
        >
          {/* Ambient Corner Flare */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#CCFF00]/4 rounded-full blur-[140px] pointer-events-none group-hover:bg-[#CCFF00]/7 transition-all duration-700" />

          {/* Project Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#CCFF00]/10 pb-5 mb-8 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="font-syne font-black text-2xl text-[#CCFF00]">03</span>
              <span className="text-[#A0A0A0] uppercase tracking-widest text-[11px]">ENTERPRISE DEVELOPER PRODUCTIVITY PLATFORM</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] font-semibold border border-[#CCFF00]/20 text-[11px]">
              DORA METRICS & AI
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
              <h3 className="font-syne text-3xl sm:text-5xl font-black text-white tracking-tight flex items-center gap-3">
                <span>Dev Command Center</span>
                <span className="text-2xl sm:text-3xl">⚡</span>
              </h3>

              <div className="text-[#CCFF00] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase">
                REAL-TIME TELEMETRY & GEMINI AI PULL REQUEST RADAR
              </div>

              <p className="text-[#A0A0A0] text-sm sm:text-base font-light leading-relaxed">
                An enterprise-grade developer productivity & telemetry platform powered by Gemini AI. Real-time DORA metrics, automated PR bottleneck radar, CI/CD health monitoring, and hardware-grade encrypted multi-provider OAuth (Google/GitHub).
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                {['React.js', 'Node.js', 'Express', 'Socket.IO', 'Gemini 1.5 Flash AI', 'Recharts', 'Tailwind CSS', 'OAuth 2.0', 'Vite'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-[#CCFF00]/5 border border-[#CCFF00]/20 text-[#A0A0A0]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
                <a
                  href="https://developer-command-center-five.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#CCFF00] hover:bg-[#d4ff1a] text-black font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-all"
                >
                  <span>Live Platform Demo</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/Developer-Command-Center-"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-full border border-[#CCFF00]/20 hover:border-[#CCFF00]/50 text-[#A0A0A0] hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all bg-[#CCFF00]/5"
                >
                  <Github className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  <span>GitHub Repository</span>
                </a>

                <div className="px-3.5 py-2.5 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] font-mono text-[11px] flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>⚡ 1-Click Guest Mode Available</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Panel */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0F0F0F] border border-[#CCFF00]/15 font-mono text-xs space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#CCFF00]/10 pb-3 text-[#A0A0A0]">
                  <span className="text-[#CCFF00] font-bold uppercase tracking-wider">TELEMETRY & AI SPECS</span>
                  <span className="text-[10px]">SOCKET.IO</span>
                </div>

                <div className="space-y-2 text-[11px] text-[#A0A0A0]">
                  <div className="flex justify-between">
                    <span>AI Code Reviewer:</span>
                    <span className="text-white font-semibold">Gemini 1.5 Flash</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DORA Metrics:</span>
                    <span className="text-[#CCFF00] font-semibold">Deployment Frequency & MTTR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Streaming Architecture:</span>
                    <span className="text-[#CCFF00] font-semibold">WebSockets Low-Latency</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security:</span>
                    <span className="text-white font-semibold">AES-256-GCM OAuth Token Vault</span>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedDevCommand(!expandedDevCommand)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-[#CCFF00]/10 hover:bg-[#CCFF00]/20 border border-[#CCFF00]/30 text-[#CCFF00] font-bold text-center flex items-center justify-center gap-1.5 transition-all text-[11px]"
                >
                  <span>{expandedDevCommand ? 'Hide Engineering Specs' : 'View Key Engineering Highlights'}</span>
                  {expandedDevCommand ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <AnimatePresence>
                  {expandedDevCommand && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 border-t border-[#CCFF00]/10 space-y-2 text-[11px] text-[#A0A0A0]"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>Autonomous AI Code Reviewer for OWASP Code Smells</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>Low-Latency WebSockets Streaming with Zero Polling</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>Enterprise Multi-Provider SSO & SameSite Cookies</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ====================================================== */}
        {/* PROJECT 04: CINEMATIC DEVELOPER PORTFOLIO */}
        {/* ====================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-[#CCFF00]/15 bg-[#141414] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl group hover:border-[#CCFF00]/35 transition-all duration-500"
        >
          {/* Project Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#CCFF00]/10 pb-5 mb-8 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="font-syne font-black text-2xl text-[#CCFF00]">04</span>
              <span className="text-[#A0A0A0] uppercase tracking-widest text-[11px]">CREATIVE ENGINEERING & INTERACTIVE UI</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#CCFF00]/15 text-[#CCFF00] font-bold border border-[#CCFF00]/30 text-[11px] animate-pulse">
              ● CURRENT VIEW
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <h3 className="font-syne text-2xl sm:text-4xl font-black text-white tracking-tight">
                Cinematic Developer Portfolio
              </h3>

              <p className="text-[#A0A0A0] text-sm sm:text-base font-light leading-relaxed">
                Interactive developer portfolio with 3D card tilt physics, custom canvas cursor spotlight, smooth scroll reveals, and Dribbble-inspired deck navigation.
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                {['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Web Audio API'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-[#CCFF00]/5 border border-[#CCFF00]/20 text-[#A0A0A0]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-[#0F0F0F] border border-[#CCFF00]/15 font-mono text-xs text-[#A0A0A0] space-y-2">
              <div className="text-[#CCFF00] font-bold mb-2 uppercase tracking-wider">TECHNICAL HIGHLIGHTS:</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                <span>Reusable Modular Components</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                <span>Web Audio Synth Feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                <span>100% Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                <span>Optimized Vite Build</span>
              </div>
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  );
}

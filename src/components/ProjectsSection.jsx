import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Github, ArrowUpRight, Download, ExternalLink, Zap, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectsSection({ onOpenFoodRushModal, onOpenJobGuardModal }) {
  const [expandedDevCommand, setExpandedDevCommand] = useState(false);

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      {/* Ambient soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs mb-3 bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / Selected Portfolio Work</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-shiny">Projects</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 max-w-2xl font-normal leading-relaxed">
            Production MERN applications, AI cybersecurity extensions &amp; developer telemetry platforms built with scalable architecture.
          </p>
        </div>

        {/* ====================================================== */}
        {/* PROJECT 01: FOODRUSH */}
        {/* ====================================================== */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 overflow-hidden shadow-xl hover:border-blue-500/30 transition-all duration-300"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-xl text-blue-400">01</span>
              <span className="text-slate-400 uppercase tracking-wider text-[11px] font-medium">Flagship MERN Ecosystem</span>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-300 font-medium border border-blue-500/20 text-[11px]">
              Full-Stack Production
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <span>FoodRush</span>
                <span className="text-xl sm:text-2xl">🍔</span>
              </h3>

              <div className="text-blue-400 font-mono text-xs font-semibold tracking-wide uppercase">
                Full-Stack Food Delivery Platform &amp; Restaurant Ecosystem
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                A full-stack food delivery web application connecting customers with local restaurant owners. Features customer &amp; restaurant owner roles, 25+ RESTful API endpoints, Razorpay online payment integration, voice search, and 6-digit OTP verification.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Razorpay', 'Cloudinary', 'Web Speech API', 'Zustand'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                <button
                  onClick={onOpenFoodRushModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>Explore Technical Case Study</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="https://github.com/alokchoudhary885-coder"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-all bg-slate-900/60"
                >
                  <Github className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Panel */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-3 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-slate-400">
                  <span className="text-blue-400 font-semibold tracking-wide uppercase text-[11px]">Engineering Specs</span>
                  <span className="text-[10px]">25+ ENDPOINTS</span>
                </div>

                <div className="space-y-2 text-slate-300 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Authentication:</span>
                    <span className="text-white font-medium">JWT + 6-Digit Email OTP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Payment Gateway:</span>
                    <span className="text-emerald-400 font-medium">Razorpay SDK Integrated</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Voice Navigation:</span>
                    <span className="text-blue-400 font-medium">Web Speech API</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Image Pipeline:</span>
                    <span className="text-white font-medium">Cloudinary CDN</span>
                  </div>
                </div>

                <button
                  onClick={onOpenFoodRushModal}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 font-medium text-center flex items-center justify-center gap-1.5 transition-all text-xs"
                >
                  <span>View Architecture Modal</span>
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 overflow-hidden shadow-xl hover:border-blue-500/30 transition-all duration-300"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-xl text-blue-400">02</span>
              <span className="text-slate-400 uppercase tracking-wider text-[11px] font-medium">Chrome Extension &amp; Cybersecurity</span>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-300 font-medium border border-blue-500/20 text-[11px]">
              Manifest V3 Offline-First
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <span>JobGuard</span>
                <span className="text-xl sm:text-2xl">🛡️</span>
              </h3>

              <div className="text-blue-400 font-mono text-xs font-semibold tracking-wide uppercase">
                Real-Time Job Risk &amp; Scam Detection Engine
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                An offline-first Chrome Extension (Manifest V3) and cybersecurity risk engine that analyzes job postings in real-time on LinkedIn, Internshala, and Indeed to protect job seekers from fake offers, upfront fee extortion, and recruitment phishing.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {['TypeScript', 'React 18', 'Chrome Manifest V3', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Google Gemini AI', 'Vite'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                <button
                  onClick={onOpenJobGuardModal}
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>Explore Extension Case Study</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="https://alokchoudhary885-coder.github.io/JOBGAURD-EXTENSION/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2 transition-all bg-slate-900/60"
                >
                  <span>Live Web Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 text-blue-400" />
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-all bg-slate-900/60"
                >
                  <Github className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION/raw/main/JobGuard-v2.0.0-ChromeStore.zip"
                  download
                  className="px-3.5 py-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>ZIP</span>
                </a>
              </div>
            </div>

            {/* Right Panel */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-3 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-slate-400">
                  <span className="text-blue-400 font-semibold tracking-wide uppercase text-[11px]">Cybersecurity Specs</span>
                  <span className="text-[10px]">REAL-TIME SCAN</span>
                </div>

                <div className="space-y-2 text-slate-300 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Supported Portals:</span>
                    <span className="text-white font-medium">LinkedIn, Internshala, Indeed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Threat Classifier:</span>
                    <span className="text-indigo-400 font-medium">Gemini 1.5 Flash AI</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Engine Type:</span>
                    <span className="text-emerald-400 font-medium">Offline-First DOM Parser</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Database:</span>
                    <span className="text-white font-medium">PostgreSQL BlacklistDB</span>
                  </div>
                </div>

                <button
                  onClick={onOpenJobGuardModal}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 font-medium text-center flex items-center justify-center gap-1.5 transition-all text-xs"
                >
                  <span>View JobGuard Case Study</span>
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 overflow-hidden shadow-xl hover:border-blue-500/30 transition-all duration-300"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-xl text-blue-400">03</span>
              <span className="text-slate-400 uppercase tracking-wider text-[11px] font-medium">Enterprise Developer Platform</span>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-300 font-medium border border-blue-500/20 text-[11px]">
              DORA Metrics &amp; AI
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <span>Dev Command Center</span>
                <span className="text-xl sm:text-2xl">⚡</span>
              </h3>

              <div className="text-blue-400 font-mono text-xs font-semibold tracking-wide uppercase">
                Real-Time Telemetry &amp; Gemini AI Pull Request Radar
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                An enterprise-grade developer productivity &amp; telemetry platform powered by Gemini AI. Real-time DORA metrics, automated PR bottleneck radar, CI/CD health monitoring, and hardware-grade encrypted multi-provider OAuth (Google/GitHub).
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                {['React.js', 'Node.js', 'Express', 'Socket.IO', 'Gemini 1.5 Flash AI', 'Recharts', 'Tailwind CSS', 'OAuth 2.0', 'Vite'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                <a
                  href="https://developer-command-center-five.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>Live Platform Demo</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/Developer-Command-Center-"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-all bg-slate-900/60"
                >
                  <Github className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>GitHub Repository</span>
                </a>

                <div className="px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-blue-300 text-xs flex items-center gap-1.5 font-medium">
                  <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>1-Click Guest Mode</span>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-3 shadow-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-slate-400">
                  <span className="text-blue-400 font-semibold tracking-wide uppercase text-[11px]">Telemetry &amp; AI Specs</span>
                  <span className="text-[10px]">SOCKET.IO</span>
                </div>

                <div className="space-y-2 text-slate-300 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">AI Code Reviewer:</span>
                    <span className="text-white font-medium">Gemini 1.5 Flash</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">DORA Metrics:</span>
                    <span className="text-emerald-400 font-medium">Deployment Frequency &amp; MTTR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Streaming Architecture:</span>
                    <span className="text-blue-400 font-medium">WebSockets Low-Latency</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Security:</span>
                    <span className="text-indigo-400 font-medium">AES-256-GCM OAuth Token Vault</span>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedDevCommand(!expandedDevCommand)}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium text-center flex items-center justify-center gap-1.5 transition-all text-xs"
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
                      className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-300"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Autonomous AI Code Reviewer for OWASP Code Smells</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Low-Latency WebSockets Streaming with Zero Polling</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>Enterprise Multi-Provider SSO &amp; SameSite Cookies</span>
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 sm:p-8 lg:p-10 overflow-hidden shadow-xl hover:border-blue-500/30 transition-all duration-300"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="font-bold text-xl text-blue-400">04</span>
              <span className="text-slate-400 uppercase tracking-wider text-[11px] font-medium">Creative Engineering &amp; UI</span>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20 text-[11px]">
              Current View
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col items-start space-y-3.5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Cinematic Developer Portfolio
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Interactive developer portfolio with 3D card tilt physics, custom canvas cursor spotlight, smooth scroll reveals, and Dribbble-inspired deck navigation.
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                {['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Web Audio API'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 space-y-2">
              <div className="text-blue-400 font-semibold mb-2 uppercase tracking-wide text-[11px]">Technical Highlights:</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Reusable Modular Components</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Web Audio Synth Feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>100% Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Optimized Vite Build</span>
              </div>
            </div>
          </div>
        </motion.article>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Github, ArrowUpRight, ShieldAlert, Cpu, Download, ExternalLink, Zap, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectsSection({ onOpenFoodRushModal }) {
  const [expandedDevCommand, setExpandedDevCommand] = useState(false);
  const [expandedJobGuard, setExpandedJobGuard] = useState(false);

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-3.5 sm:px-8 bg-[#06070a] bg-noise overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-[11px] sm:text-xs text-purple-400 mb-3 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / FEATURED ENGINEERING PROJECTS</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-7xl font-extrabold text-white tracking-tight">
            SELECTED <span className="text-gradient-purple">WORK</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2">
            Production MERN applications, AI security extensions & enterprise engineering platforms
          </p>
        </div>

        {/* 1. KING PROJECT: FOODRUSH OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-card-orange p-5 sm:p-10 md:p-12 mb-10 sm:mb-12 overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
            
            {/* Left Overview Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 font-mono text-[11px] sm:text-xs font-bold mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping shrink-0" />
                <span>05.1 / FEATURED MERN ECOSYSTEM</span>
              </div>

              <h3 className="font-syne text-3xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight flex items-center gap-2">
                <span>FOODRUSH</span>
                <span className="text-2xl sm:text-3xl">🍔</span>
              </h3>

              <p className="text-orange-400 font-mono text-xs sm:text-sm font-semibold mb-3">
                FULL-STACK FOOD DELIVERY PLATFORM
              </p>

              <p className="text-slate-300 text-sm sm:text-lg font-light leading-relaxed mb-5 sm:mb-6">
                A full-stack food delivery web application connecting customers with local restaurant owners. Features customer & restaurant owner roles, 25+ RESTful API endpoints, Razorpay online payment integration, voice search, and 6-digit OTP verification.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8 font-mono text-[11px] sm:text-xs">
                {['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Razorpay', 'Cloudinary', 'Web Speech API', 'Zustand'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onOpenFoodRushModal}
                  className="interactive-card w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-orange-500 text-black font-bold font-mono text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,85,0,0.5)] hover:bg-orange-400 transition-all duration-300"
                >
                  <span>Explore Technical Case Study</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href="https://github.com/alokchoudhary885-coder"
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-card w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full glass-panel border border-white/15 hover:border-white/30 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Right Architecture Card */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full p-4 sm:p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col gap-3 sm:gap-4 font-mono text-xs relative group-hover:border-orange-500/50 transition-colors shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-slate-400 text-[11px] sm:text-xs">
                  <span className="text-orange-400 font-bold">FOODRUSH ARCHITECTURE</span>
                  <span>06 / CASE STUDY</span>
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-[11px] sm:text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">API Endpoints:</span>
                    <span className="text-orange-400 font-bold">25+ REST Routes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Security:</span>
                    <span className="text-purple-400 font-bold">JWT + OTP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Payments:</span>
                    <span className="text-green-400 font-bold">Razorpay SDK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Voice Search:</span>
                    <span className="text-cyan-400 font-bold">Web Speech API</span>
                  </div>
                </div>

                <button
                  onClick={onOpenFoodRushModal}
                  className="p-3 rounded-xl bg-orange-500/15 border border-orange-500/40 text-orange-400 hover:text-white hover:bg-orange-500/30 text-center font-bold transition-all text-[11px] sm:text-xs"
                >
                  CLICK TO VIEW FULL TECHNICAL CASE STUDY
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. NEW PROJECT: JOBGUARD (CYBERSECURITY CHROME EXTENSION) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-panel border border-cyan-500/30 bg-[#0b0f19]/90 p-5 sm:p-8 md:p-10 mb-10 sm:mb-12 overflow-hidden shadow-2xl group"
        >
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-mono text-[11px] sm:text-xs font-bold mb-3">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>05.2 / CHROME EXTENSION & CYBERSECURITY ENGINE</span>
              </div>

              <h3 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight flex items-center gap-2">
                <span>JobGuard</span>
                <span className="text-2xl sm:text-3xl">🛡️</span>
              </h3>

              <p className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold mb-3">
                REAL-TIME JOB RISK & SCAM DETECTION ENGINE
              </p>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-5">
                An offline-first Chrome Extension (Manifest V3) and cybersecurity risk engine that analyzes job postings in real-time on LinkedIn, Internshala, and Indeed to protect job seekers from fake offers, upfront fee extortion, and recruitment phishing.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 font-mono text-[11px] sm:text-xs">
                {['TypeScript', 'React 18', 'Chrome Manifest V3', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Google Gemini AI', 'Vite'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-cyan-500/30 text-cyan-400">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://alokchoudhary885-coder.github.io/JOBGAURD-EXTENSION/"
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-card px-5 py-3 rounded-full bg-cyan-500 text-black font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-cyan-400 transition-all"
                >
                  <span>Live Interactive Web Demo</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION"
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-card px-5 py-3 rounded-full glass-panel border border-white/15 hover:border-cyan-400 text-slate-200 font-mono text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION/raw/main/JobGuard-v2.0.0-ChromeStore.zip"
                  download
                  className="interactive-card px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 font-mono text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>ZIP Download</span>
                </a>
              </div>
            </div>

            {/* Right Highlight Box & Expandable Feature Bulletins */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-slate-300 space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-cyan-400 font-bold">CYBERSECURITY SPECS</span>
                  <span className="text-slate-400 text-[10px]">MANIFEST V3</span>
                </div>
                
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Supported Platforms:</span>
                    <span className="text-white font-semibold">LinkedIn, Indeed, Internshala</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Detection Speed:</span>
                    <span className="text-cyan-400 font-semibold">Real-Time DOM Parse</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Engine Type:</span>
                    <span className="text-purple-400 font-semibold">Offline-First + AI Radar</span>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedJobGuard(!expandedJobGuard)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-center flex items-center justify-center gap-1.5 hover:bg-cyan-500/20 transition-all text-[11px]"
                >
                  <span>{expandedJobGuard ? 'Hide Protection Details' : 'View Risk Engine Features'}</span>
                  {expandedJobGuard ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <AnimatePresence>
                  {expandedJobGuard && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 border-t border-white/10 space-y-2 text-[11px] text-slate-300"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Upfront Fee Extortion Radar & Fake Offer Flagging</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Google Gemini AI Multimodal Threat Analysis</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Phishing Domain Verification & Post Analytics</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 3. NEW PROJECT: DEVELOPER COMMAND CENTER (ENTERPRISE TELEMETRY & GEMINI AI) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-panel border border-purple-500/30 bg-[#0b0f19]/90 p-5 sm:p-8 md:p-10 mb-10 sm:mb-12 overflow-hidden shadow-2xl group"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 font-mono text-[11px] sm:text-xs font-bold mb-3">
                <Cpu className="w-3.5 h-3.5" />
                <span>05.3 / ENTERPRISE DEVELOPER PRODUCTIVITY PLATFORM</span>
              </div>

              <h3 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight flex items-center gap-2">
                <span>Developer Command Center</span>
                <span className="text-2xl sm:text-3xl">⚡</span>
              </h3>

              <p className="text-purple-400 font-mono text-xs sm:text-sm font-semibold mb-3">
                REAL-TIME TELEMETRY & GEMINI AI PULL REQUEST RADAR
              </p>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-5">
                An enterprise-grade developer productivity & telemetry platform powered by Gemini AI. Real-time DORA metrics, automated PR bottleneck radar, CI/CD health monitoring, and hardware-grade encrypted multi-provider OAuth (Google/GitHub).
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 font-mono text-[11px] sm:text-xs">
                {['React.js', 'Node.js', 'Express', 'Socket.IO', 'Gemini 1.5 Flash AI', 'Recharts', 'Tailwind CSS', 'OAuth 2.0', 'Vite'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-purple-500/30 text-purple-400">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://developer-command-center-five.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-card px-5 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all"
                >
                  <span>Live Platform Demo</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="https://github.com/alokchoudhary885-coder/Developer-Command-Center-"
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-card px-5 py-3 rounded-full glass-panel border border-white/15 hover:border-purple-400 text-slate-200 font-mono text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>GitHub Repository</span>
                </a>

                <div className="px-3.5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[11px] flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>1-Click Guest Mode Available</span>
                </div>
              </div>
            </div>

            {/* Right Telemetry Details Box */}
            <div className="lg:col-span-5 w-full">
              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-slate-300 space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-purple-400 font-bold">DORA & AI TELEMETRY</span>
                  <span className="text-slate-400 text-[10px]">SOCKET.IO</span>
                </div>
                
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-400">AI Code Reviewer:</span>
                    <span className="text-white font-semibold">Gemini 1.5 Flash</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">DORA Velocity Metrics:</span>
                    <span className="text-green-400 font-semibold">Deployment & MTTR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Security Storage:</span>
                    <span className="text-cyan-400 font-semibold">AES-256-GCM OAuth</span>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedDevCommand(!expandedDevCommand)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold text-center flex items-center justify-center gap-1.5 hover:bg-purple-500/20 transition-all text-[11px]"
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
                      className="pt-2 border-t border-white/10 space-y-2 text-[11px] text-slate-300"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>Autonomous AI Code Reviewer for OWASP Code Smells</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>Low-Latency WebSockets Streaming with Zero Polling</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>Enterprise Multi-Provider SSO & SameSite Cookies</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4. DEVELOPER PORTFOLIO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl glass-card-purple border border-white/15 p-5 sm:p-8 md:p-10 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-400 font-mono text-[11px] sm:text-xs font-bold mb-3">
                <span>05.4 / DEVELOPER PORTFOLIO</span>
              </div>

              <h3 className="font-syne text-xl sm:text-4xl font-bold text-white mb-2.5">
                CINEMATIC DEVELOPER PORTFOLIO
              </h3>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-5">
                Interactive developer portfolio with 3D card tilt physics, custom canvas cursor spotlight, smooth scroll reveals, and Dribbble-inspired deck navigation.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 font-mono text-[11px] sm:text-xs">
                {['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Web Audio API'].map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-md bg-white/5 border border-white/10 text-purple-400">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="interactive-card px-5 py-2.5 rounded-full bg-purple-600 text-white font-bold font-mono text-xs flex items-center gap-2 shadow-neon-purple hover:bg-purple-500 transition-all"
              >
                <span>Current View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="lg:col-span-4 p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 font-mono text-[11px] sm:text-xs text-slate-300 space-y-2.5">
              <div className="text-purple-400 font-bold">TECHNICAL HIGHLIGHTS:</div>
              <div className="flex items-center gap-2">✓ Reusable Modular Components</div>
              <div className="flex items-center gap-2">✓ Web Audio Synth Feedback</div>
              <div className="flex items-center gap-2">✓ 100% Responsive Design</div>
              <div className="flex items-center gap-2">✓ Optimized Vite Build</div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Download, 
  Sparkles, 
  ShieldAlert, 
  Utensils, 
  Cpu, 
  Activity, 
  Layers, 
  Zap,
  CheckCircle2
} from 'lucide-react';

import foodrushPreview from '../assets/foodrush-preview.jpg';
import jobguardPreview from '../assets/jobguard-preview.jpg';
import devcommandPreview from '../assets/devcommandcenter-preview.jpg';
import portfolioPreview from '../assets/portfolio-preview.jpg';

const PROJECTS = [
  {
    id: 'foodrush',
    num: '01',
    title: 'FoodRush',
    emoji: '🍔',
    subtitle: 'FULL-STACK FOOD DELIVERY PLATFORM & RESTAURANT ECOSYSTEM',
    category: 'FLAGSHIP MERN ECOSYSTEM',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    description: 'Comprehensive food delivery platform with customer and restaurant owner roles, 25+ REST APIs, Razorpay checkout, and Web Speech API voice search.',
    bullets: [
      'Customer & restaurant owner workflows with RBAC',
      '25+ RESTful APIs with JWT + 6-digit email OTP',
      'Razorpay payment gateway & Web Speech voice search'
    ],
    tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Cloudinary', 'Zustand'],
    previewImage: foodrushPreview,
    isFoodRush: true,
    hasCaseStudy: true,
    liveUrl: 'https://food-delivery-frontend-iota-seven.vercel.app/',
    githubUrl: 'https://github.com/alokchoudhary885-coder',
    specs: '25+ REST Endpoints • Razorpay SDK • Cloudinary CDN'
  },
  {
    id: 'jobguard',
    num: '02',
    title: 'JobGuard',
    emoji: '🛡️',
    subtitle: 'REAL-TIME JOB RISK & SCAM DETECTION ENGINE',
    category: 'CYBERSECURITY CHROME MV3',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    description: 'Offline-first Chrome Extension (Manifest V3) and risk engine analyzing job postings in real time across LinkedIn, Internshala, and Indeed.',
    bullets: [
      'Offline-first Chrome Extension built with Manifest V3',
      'Real-time job risk analysis across LinkedIn, Internshala & Indeed',
      'Gemini AI threat radar detects fee scams & phishing'
    ],
    tech: ['TypeScript', 'React 18', 'Chrome MV3', 'Tailwind', 'Node.js', 'PostgreSQL', 'Gemini AI'],
    previewImage: jobguardPreview,
    isJobGuard: true,
    hasCaseStudy: true,
    liveUrl: 'https://alokchoudhary885-coder.github.io/JOBGAURD-EXTENSION/',
    githubUrl: 'https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION',
    zipUrl: 'https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION/raw/main/JobGuard-v2.0.0-ChromeStore.zip',
    specs: 'Manifest V3 • Gemini 1.5 Flash • PostgreSQL BlacklistDB'
  },
  {
    id: 'devcommand',
    num: '03',
    title: 'Dev Command Center',
    emoji: '⚡',
    subtitle: 'REAL-TIME DEVELOPER TELEMETRY & GEMINI AI PR RADAR',
    category: 'ENTERPRISE AI PLATFORM',
    badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    description: 'Enterprise developer productivity platform featuring real-time DORA velocity metrics, automated Gemini AI pull request review, and WebSockets streaming.',
    bullets: [
      'Real-time DORA metrics & developer productivity analytics',
      'Gemini AI code review & automated PR bottleneck detection',
      'CI/CD health monitoring with AES-256 OAuth 2.0 token vault'
    ],
    tech: ['React.js', 'Node.js', 'Express', 'Socket.IO', 'Gemini AI', 'Recharts', 'Tailwind CSS', 'OAuth 2.0'],
    previewImage: devcommandPreview,
    liveUrl: 'https://developer-command-center-five.vercel.app',
    githubUrl: 'https://github.com/alokchoudhary885-coder/Developer-Command-Center-',
    specs: 'Socket.IO Streaming • DORA Velocity • Gemini AI'
  },
  {
    id: 'rapidcare',
    num: '04',
    title: 'RapidCare',
    emoji: '🏥',
    subtitle: 'EMERGENCY TELEHEALTH & CLINIC DISPATCH PLATFORM',
    category: 'HEALTHTECH PLATFORM',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    description: 'Full-stack emergency triage & healthcare dispatch platform with instant doctor tele-consultations, real-time hospital bed availability radar, and emergency dispatch.',
    bullets: [
      'Real-time emergency triage & automated triage scoring',
      'WebRTC low-latency doctor tele-consultation pipeline',
      'Live hospital bed availability radar & ambulance dispatch'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebRTC', 'Socket.IO', 'Tailwind CSS'],
    previewImage: null, // Fallback to styled SVG telemetry visual
    liveUrl: 'https://github.com/alokchoudhary885-coder',
    githubUrl: 'https://github.com/alokchoudhary885-coder',
    specs: 'WebRTC Video • Socket.IO Telemetry • Emergency Bed Radar'
  },
  {
    id: 'portfolio',
    num: '05',
    title: 'Developer Portfolio',
    emoji: '🚀',
    subtitle: 'INTERACTIVE DEVELOPER PORTFOLIO & CREATIVE UI',
    category: 'CREATIVE UI ENGINEERING',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    description: 'High-performance portfolio built with 3D cylindrical carousel physics, custom canvas spatial particle universe, smooth spring motion, and responsive architecture.',
    bullets: [
      'Interactive 3D cylindrical project carousel with spring physics',
      'Dark futuristic space aesthetic with Three.js & Lucide icons',
      '100% responsive, keyboard accessible & zero layout shift'
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Web Audio API'],
    previewImage: portfolioPreview,
    liveUrl: 'https://alok-portfolio-tmab.vercel.app/',
    githubUrl: 'https://github.com/alokchoudhary885-coder/Alok-portfolio',
    specs: '3D Math Carousel • Spring Physics • 100% Responsive'
  }
];

export default function DribbbleDeckNav({ onOpenFoodRushModal, onOpenJobGuardModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isHovered || prefersReducedMotion) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, prefersReducedMotion, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === ' ' || e.key === 'p' || e.key === 'P') {
      // Toggle play/pause
      if (e.target === containerRef.current || e.target.tagName !== 'BUTTON') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    }
  };

  const handleCardClick = (idx) => {
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  };

  return (
    <section 
      id="deck" 
      aria-label="Featured Projects Carousel"
      className="relative w-full py-20 sm:py-28 overflow-hidden border-t border-slate-800/80 bg-transparent select-none"
    >
      {/* Subtle ambient light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-indigo-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 font-mono text-[11px] font-medium uppercase tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            <span>Interactive 3D Carousel</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-shiny">Projects</span>
          </h2>

          <p className="text-slate-400 max-w-xl text-xs sm:text-sm font-normal leading-relaxed">
            Full-stack production ecosystems, cybersecurity extensions &amp; developer tools. Rotate through the 3D ring or click any project to inspect.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div 
          ref={containerRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full min-h-[580px] sm:min-h-[620px] flex items-center justify-center [perspective:1200px] focus:outline-none"
          role="region"
          aria-label="3D Project Cards Carousel"
        >
          {/* Controls Bar (Top / Overlay) */}
          <div className="absolute top-0 right-4 sm:right-8 z-40 flex items-center gap-2">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
              title={isPlaying ? 'Pause Autoplay (Space)' : 'Play Autoplay (Space)'}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                isPlaying 
                  ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20' 
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-mono text-[11px] hidden sm:inline">Autoplay On</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-mono text-[11px] hidden sm:inline">Paused</span>
                </>
              )}
            </button>
          </div>

          {/* Left Arrow Navigation */}
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="absolute left-1 sm:left-4 lg:left-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 hover:text-white text-slate-300 transition-all shadow-xl shadow-black/50 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Navigation */}
          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="absolute right-1 sm:right-4 lg:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 hover:text-white text-slate-300 transition-all shadow-xl shadow-black/50 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* The 3D Cards Track */}
          <div className="relative w-full max-w-5xl h-[560px] sm:h-[600px] flex items-center justify-center">
            {PROJECTS.map((project, idx) => {
              // Calculate wrapped circular offset: -2, -1, 0, 1, 2
              let offset = idx - activeIndex;
              if (offset < -Math.floor(PROJECTS.length / 2)) offset += PROJECTS.length;
              if (offset > Math.floor(PROJECTS.length / 2)) offset -= PROJECTS.length;

              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const isFar = Math.abs(offset) >= 2;

              // 3D positioning logic
              let xPos = '0%';
              let zPos = 0;
              let rotY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;

              if (isActive) {
                xPos = '0%';
                zPos = 0;
                rotY = 0;
                scale = 1;
                opacity = 1;
                zIndex = 30;
              } else if (offset === 1) {
                xPos = '65%';
                zPos = -140;
                rotY = -28;
                scale = 0.85;
                opacity = 0.65;
                zIndex = 20;
              } else if (offset === -1) {
                xPos = '-65%';
                zPos = -140;
                rotY = 28;
                scale = 0.85;
                opacity = 0.65;
                zIndex = 20;
              } else if (offset === 2) {
                xPos = '118%';
                zPos = -260;
                rotY = -42;
                scale = 0.70;
                opacity = 0.25;
                zIndex = 10;
              } else if (offset === -2) {
                xPos = '-118%';
                zPos = -260;
                rotY = 42;
                scale = 0.70;
                opacity = 0.25;
                zIndex = 10;
              }

              return (
                <motion.div
                  key={project.id}
                  onClick={() => handleCardClick(idx)}
                  animate={{
                    x: xPos,
                    z: zPos,
                    rotateY: rotY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={
                    prefersReducedMotion 
                      ? { duration: 0.1 } 
                      : { type: 'spring', stiffness: 280, damping: 28, mass: 0.8 }
                  }
                  style={{
                    zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                  className={`absolute w-[88vw] sm:w-[420px] lg:w-[450px] h-[540px] sm:h-[570px] rounded-2xl flex flex-col justify-between overflow-hidden backdrop-blur-2xl transition-shadow duration-300 ${
                    isActive
                      ? 'bg-slate-900/95 border-2 border-blue-500/60 shadow-2xl shadow-blue-500/20 cursor-default'
                      : 'bg-slate-950/85 border border-slate-800/90 hover:border-slate-700 cursor-pointer'
                  }`}
                >
                  {/* Card Header & Visual Media */}
                  <div className="relative w-full">
                    {/* Visual Media Banner */}
                    <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-950 border-b border-slate-800/80">
                      {project.previewImage ? (
                        <img
                          src={project.previewImage}
                          alt={`${project.title} Preview Screenshot`}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            isActive ? 'scale-100 group-hover:scale-105' : 'scale-95 filter brightness-75'
                          }`}
                        />
                      ) : (
                        // Stylized Medical Telemetry graphic for RapidCare
                        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30">
                          <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                            <span className="flex items-center gap-1.5">
                              <Activity className="w-4 h-4 animate-pulse" />
                              <span>TELEHEALTH RADAR</span>
                            </span>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px]">
                              WEBRTC LIVE
                            </span>
                          </div>
                          <div className="space-y-1.5 py-2">
                            <div className="flex items-center justify-between text-[11px] text-slate-300">
                              <span>Bed Availability Radar</span>
                              <span className="text-emerald-400 font-mono">98.4% Accuracy</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                              <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                              <span>Geo-Dispatch Latency</span>
                              <span className="text-blue-400">&lt; 150ms</span>
                            </div>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                            Hospital &amp; Ambulance Telemetry Stream
                          </div>
                        </div>
                      )}

                      {/* Dark Gradient Overlay for smooth text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40 pointer-events-none" />

                      {/* Top Badges Floating Over Image */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border shadow-md ${project.badgeColor} backdrop-blur-md`}>
                          {project.category}
                        </span>

                        <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md">
                          {project.num} / 05
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 space-y-3">
                    <div>
                      {/* Title & Emoji */}
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <span className="text-xl">{project.emoji}</span>
                      </div>

                      {/* Subtitle */}
                      <p className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-wide mb-2 line-clamp-1">
                        {project.subtitle}
                      </p>

                      {/* 3 Bullets or concise summary */}
                      <ul className="space-y-1.5 text-slate-300 text-xs sm:text-[13px] font-normal leading-snug mb-3">
                        {project.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold shrink-0 mt-0.5">•</span>
                            <span className="line-clamp-2">{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.slice(0, 5).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md bg-slate-950/90 border border-slate-800 text-slate-300 font-mono text-[10px]"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[10px]">
                            +{project.tech.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="border-t border-slate-800/90 pt-3 mt-auto">
                      {isActive ? (
                        <div className="flex flex-wrap items-center gap-2 w-full">
                          {/* Live Demo Action */}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                            </a>
                          )}

                          {/* Case Study Modal Trigger (FoodRush) */}
                          {project.isFoodRush && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenFoodRushModal?.();
                              }}
                              className="py-2 px-3 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                            >
                              <span>Case Study</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            </button>
                          )}

                          {/* Case Study Modal Trigger (JobGuard) */}
                          {project.isJobGuard && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenJobGuardModal?.();
                              }}
                              className="py-2 px-3 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                            >
                              <span>Case Study</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            </button>
                          )}

                          {/* GitHub Repository */}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              title="GitHub Repository"
                              className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white bg-slate-900 transition-all cursor-pointer"
                            >
                              <Github className="w-4 h-4 text-blue-400 shrink-0" />
                            </a>
                          )}

                          {/* ZIP Download (JobGuard only) */}
                          {project.zipUrl && (
                            <a
                              href={project.zipUrl}
                              download
                              onClick={(e) => e.stopPropagation()}
                              title="Download Extension ZIP Package"
                              className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white bg-slate-900 transition-all cursor-pointer"
                            >
                              <Download className="w-4 h-4 text-emerald-400 shrink-0" />
                            </a>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-xs text-slate-500 font-mono py-1">
                          <span className="text-[11px] uppercase tracking-wider">Click to Rotate</span>
                          <span className="text-blue-400 text-xs">Inspect ▸</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination & Indicator Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-slate-800/60 max-w-4xl mx-auto">
          {/* Active Project Tag */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-blue-400 font-semibold">{PROJECTS[activeIndex].num}</span>
            <span>/</span>
            <span>05</span>
            <span className="text-slate-600">•</span>
            <span className="text-white font-medium">{PROJECTS[activeIndex].title}</span>
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex items-center gap-2">
            {PROJECTS.map((proj, dotIdx) => (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(dotIdx)}
                aria-label={`Switch to ${proj.title} project`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  dotIdx === activeIndex 
                    ? 'w-8 bg-blue-500 shadow-sm shadow-blue-500/50' 
                    : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Quick Help / Instructions */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-500">
            <span>Keys: [←] [→]</span>
            <span>•</span>
            <span>[Space] Pause</span>
          </div>
        </div>

      </div>
    </section>
  );
}

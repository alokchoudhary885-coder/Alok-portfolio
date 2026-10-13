import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Activity, 
  Sparkles 
} from 'lucide-react';

import foodrushPreview from '../assets/foodrush-preview.jpg';
import jobguardPreview from '../assets/jobguard-preview.jpg';
import devcommandPreview from '../assets/devcommandcenter-preview.jpg';
import portfolioPreview from '../assets/portfolio-preview.jpg';

const PROJECTS = [
  {
    id: 'foodrush',
    title: 'FoodRush',
    emoji: '🍔',
    category: 'MERN STACK',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    shortDesc: 'Food delivery platform with customer & owner workflows, 25+ REST APIs, Razorpay & voice search.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    previewImage: foodrushPreview,
    isFoodRush: true,
    hasCaseStudy: true,
    liveUrl: 'https://food-delivery-frontend-iota-seven.vercel.app/',
    githubUrl: 'https://github.com/alokchoudhary885-coder',
  },
  {
    id: 'jobguard',
    title: 'JobGuard',
    emoji: '🛡️',
    category: 'CYBERSECURITY',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    shortDesc: 'Offline-first Chrome Extension (MV3) analyzing job postings in real time across LinkedIn & Indeed.',
    tech: ['TypeScript', 'React 18', 'Chrome MV3', 'Gemini AI'],
    previewImage: jobguardPreview,
    isJobGuard: true,
    hasCaseStudy: true,
    liveUrl: 'https://alokchoudhary885-coder.github.io/JOBGAURD-EXTENSION/',
    githubUrl: 'https://github.com/alokchoudhary885-coder/JOBGAURD-EXTENSION',
  },
  {
    id: 'devcommand',
    title: 'Dev Command Center',
    emoji: '⚡',
    category: 'AI TELEMETRY',
    badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    shortDesc: 'Developer telemetry platform featuring real-time DORA metrics & Gemini AI pull request review.',
    tech: ['React.js', 'Node.js', 'Socket.IO', 'Gemini AI'],
    previewImage: devcommandPreview,
    liveUrl: 'https://developer-command-center-five.vercel.app',
    githubUrl: 'https://github.com/alokchoudhary885-coder/Developer-Command-Center-',
  },
  {
    id: 'rapidcare',
    title: 'RapidCare',
    emoji: '🏥',
    category: 'HEALTHTECH',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    shortDesc: 'Emergency triage & dispatch platform with instant doctor video consultations & live bed radar.',
    tech: ['React.js', 'Node.js', 'WebRTC', 'Socket.IO'],
    previewImage: null,
    liveUrl: 'https://github.com/alokchoudhary885-coder',
    githubUrl: 'https://github.com/alokchoudhary885-coder',
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    emoji: '🚀',
    category: 'CREATIVE UI',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    shortDesc: 'High-performance portfolio built with 3D cylindrical continuous carousel physics & spatial design.',
    tech: ['React.js', 'Vite', 'Tailwind', 'Framer Motion'],
    previewImage: portfolioPreview,
    liveUrl: 'https://alok-portfolio-tmab.vercel.app/',
    githubUrl: 'https://github.com/alokchoudhary885-coder/Alok-portfolio',
  }
];

export default function DribbbleDeckNav({ onOpenFoodRushModal, onOpenJobGuardModal }) {
  const [rotation, setRotation] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const [dimensions, setDimensions] = useState({
    radiusX: 300,
    radiusZ: 170,
    cardWidth: 260,
    cardHeight: 350,
  });

  const prefersReducedMotionRef = useRef(false);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const containerRef = useRef(null);

  // Sync refs for animation loop
  prefersReducedMotionRef.current = prefersReducedMotion;

  // Responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setDimensions({
          radiusX: 135,
          radiusZ: 90,
          cardWidth: 220,
          cardHeight: 320,
        });
      } else if (w < 1024) {
        setDimensions({
          radiusX: 220,
          radiusZ: 135,
          cardWidth: 240,
          cardHeight: 335,
        });
      } else {
        setDimensions({
          radiusX: 300,
          radiusZ: 170,
          cardWidth: 260,
          cardHeight: 350,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Continuous smooth 3D rotation loop
  useEffect(() => {
    const speed = 48; // degrees per second (~7.5s for full 360 rotation)

    const animate = (time) => {
      if (lastTimeRef.current != null) {
        const delta = (time - lastTimeRef.current) / 1000;
        // Only rotate when not hovered and user has not requested reduced motion
        if (!prefersReducedMotionRef.current) {
          setRotation((prev) => (prev + speed * delta) % 360);
        }
      }
      lastTimeRef.current = time;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    // Handle tab focus / visibility
    const handleVisibilityChange = () => {
      if (document.hidden) {
        lastTimeRef.current = null;
      } else {
        lastTimeRef.current = performance.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Arrow controls: rotate by +/- 72 deg
  const handlePrev = useCallback(() => {
    setRotation((r) => r - 72);
  }, []);

  const handleNext = useCallback(() => {
    setRotation((r) => r + 72);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Card click: if card is not in front, bring it to front
  const handleCardClick = (phi) => {
    if (Math.abs(phi) > 20) {
      setRotation((prev) => prev - phi);
    }
  };

  return (
    <section 
      id="deck" 
      aria-label="Featured Projects Carousel"
      className="relative w-full py-16 sm:py-24 overflow-hidden border-t border-slate-800/80 bg-transparent select-none"
    >
      {/* Subtle ambient light glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2.5 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-shiny">Projects</span>
          </h2>

          <p className="text-slate-400 max-w-lg text-xs sm:text-sm font-normal leading-relaxed">
            Continuously rotating 3D project showcase. Click any card to inspect or visit.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div 
          ref={containerRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="relative w-full h-[400px] sm:h-[430px] flex items-center justify-center [perspective:1000px] focus:outline-none"
          role="region"
          aria-label="3D Project Cards Ring"
        >
          {/* Left Arrow Navigation */}
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="absolute left-2 sm:left-6 lg:left-12 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 hover:text-white text-slate-300 transition-all shadow-xl shadow-black/50 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Navigation */}
          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="absolute right-2 sm:right-6 lg:right-12 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 hover:text-white text-slate-300 transition-all shadow-xl shadow-black/50 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* The Circular 3D Cards Ring */}
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            {PROJECTS.map((project, idx) => {
              // Base angle for this card (0, 72, 144, 216, 288)
              const baseAngle = idx * 72;
              // Combined angle with current rotation
              const totalAngle = (baseAngle + rotation) % 360;
              // Normalize phi to [-180, 180] relative to camera (0 = front, 180/-180 = back)
              let phi = (totalAngle + 360) % 360;
              if (phi > 180) phi -= 360;

              const rad = (phi * Math.PI) / 180;
              const xPos = dimensions.radiusX * Math.sin(rad);
              const zPos = dimensions.radiusZ * (Math.cos(rad) - 1);

              // Stacking order & perspective scaling
              const cosVal = Math.cos(rad); // -1 (back) to +1 (front)
              const norm = (cosVal + 1) / 2; // 0 (back) to 1 (front)

              const scale = 0.72 + 0.28 * norm;
              const opacity = 0.40 + 0.60 * norm;
              const zIndex = Math.round(10 + 90 * norm);
              const rotY = -phi * 0.58; // gentle inward curve

              const isFront = norm > 0.85;

              return (
                <div
                  key={project.id}
                  onClick={() => handleCardClick(phi)}
                  style={{
                    width: `${dimensions.cardWidth}px`,
                    height: `${dimensions.cardHeight}px`,
                    transform: `translate3d(${xPos}px, 0px, ${zPos}px) rotateY(${rotY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    transition: 'none',
                  }}
                  className={`absolute rounded-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl transition-shadow duration-300 pointer-events-auto select-none ${
                    isFront
                      ? 'bg-slate-900/95 border border-blue-500/50 shadow-2xl shadow-blue-500/20 cursor-default'
                      : 'bg-slate-950/85 border border-slate-800/80 hover:border-slate-700 cursor-pointer'
                  }`}
                >
                  {/* Card Header & Visual Media */}
                  <div className="relative w-full h-28 sm:h-32 bg-slate-950 overflow-hidden shrink-0">
                    {project.previewImage ? (
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isFront ? 'scale-100' : 'scale-95 brightness-75'
                        }`}
                      />
                    ) : (
                      /* Stylized Medical Telemetry graphic for RapidCare */
                      <div className="w-full h-full p-3 flex flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30">
                        <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
                          <span className="flex items-center gap-1">
                            <Activity className="w-3 h-3 animate-pulse" />
                            <span>TELEHEALTH</span>
                          </span>
                          <span className="text-[9px] text-emerald-400/80">LIVE</span>
                        </div>
                        <div className="space-y-1">
                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <div className="w-3/4 h-full bg-emerald-500 rounded-full" />
                          </div>
                          <span className="text-[9px] font-mono text-slate-400 block">Emergency Dispatch Radar</span>
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30 pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-medium uppercase tracking-wider border backdrop-blur-md ${project.badgeColor}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 space-y-2">
                    <div>
                      {/* Title & Emoji */}
                      <div className="flex items-center gap-1.5 mb-1">
                        <h3 className="font-bold text-sm sm:text-base text-white tracking-tight leading-snug">
                          {project.title}
                        </h3>
                        <span className="text-sm">{project.emoji}</span>
                      </div>

                      {/* Concise description */}
                      <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed font-normal">
                        {project.shortDesc}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tech.slice(0, 3).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-1.5 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-slate-400 font-mono text-[9px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 py-1.5 px-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold flex items-center justify-center gap-1 shadow-sm transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                      )}

                      {/* Case Study Button */}
                      {project.isFoodRush && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenFoodRushModal?.();
                          }}
                          title="Explore Case Study"
                          className="p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-200 hover:text-white transition-all cursor-pointer"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                        </button>
                      )}

                      {project.isJobGuard && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenJobGuardModal?.();
                          }}
                          title="Explore Case Study"
                          className="p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-200 hover:text-white transition-all cursor-pointer"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                        </button>
                      )}

                      {/* GitHub Button */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="GitHub Repository"
                          className="p-1.5 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 hover:text-white transition-all"
                        >
                          <Github className="w-3.5 h-3.5 text-blue-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ArrowRight, ChevronLeft, ChevronRight, MousePointer, Sparkles, Utensils, Brain, Code, ArrowUpRight, Flame, Zap } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero({ onOpenFoodRushModal }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const deckRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!deckRef.current) return;
    const rect = deckRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / rect.height) * -12,
      y: (x / rect.width) * 12
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const cards = [
    {
      id: 'foodrush',
      num: '01 / 03',
      title: 'FoodRush',
      subtitle: 'Full Stack Food Platform Teaser',
      icon: Utensils,
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      desc: 'Full-stack food delivery platform connecting customers and restaurant owners.',
      accent: '#ff5500',
      isOrange: true,
      hasBurger: true,
    },
    {
      id: 'ai-assistant',
      num: '02 / 03',
      title: 'AI Assistant',
      subtitle: 'Intelligent Search Experience',
      icon: Brain,
      tech: ['Next.js', 'TypeScript'],
      desc: 'Smart developer assistant powering query execution and contextual feedback.',
      accent: '#a855f7',
      isOrange: false,
    },
    {
      id: 'portfolio',
      num: '03 / 03',
      title: 'Portfolio',
      subtitle: 'Developer Portfolio Website',
      icon: Code,
      tech: ['React', 'Tailwind'],
      desc: 'Interactive cinematic portfolio with 3D card deck transitions and custom animations.',
      accent: '#3b82f6',
      isOrange: false,
    }
  ];

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 flex items-center justify-center overflow-hidden bg-[#06070a] bg-noise">
      
      {/* Three.js + WebGL GLSL Shader Interactive Background */}
      <ThreeCanvas />

      {/* Radial Lights Overlay */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />

      {/* Left Floating Social Bar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-4 p-3 rounded-full glass-panel border border-white/10 shadow-2xl">
        <a href="https://github.com/alokchoudhary885-coder" target="_blank" rel="noreferrer" className="p-2.5 rounded-full text-slate-400 hover:text-purple-400 hover:bg-white/5 transition-all">
          <Github className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full text-slate-400 hover:text-purple-400 hover:bg-white/5 transition-all">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="mailto:alokchoudhary.dev@gmail.com" className="p-2.5 rounded-full text-slate-400 hover:text-purple-400 hover:bg-white/5 transition-all">
          <Mail className="w-4 h-4" />
        </a>
        <a href="#contact" className="p-2.5 rounded-full text-slate-400 hover:text-purple-400 hover:bg-white/5 transition-all">
          <Phone className="w-4 h-4" />
        </a>
      </div>

      {/* Main Grid Container */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Column: Hero Text & Credible Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          {/* Subheader tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-400 font-mono text-xs font-bold mb-4 shadow-neon-purple">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>01 / HERO • THREE.JS + WEBGL + GLSL</span>
          </div>

          {/* Main Name */}
          <h1 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 text-white">
            ALOK <br />
            <span className="text-gradient-purple">CHOUDHARY</span>
          </h1>

          {/* Clean Subtitle */}
          <p className="text-slate-300 font-mono text-xs sm:text-sm leading-relaxed max-w-xl mb-8 uppercase tracking-wide">
            I BUILD MODERN WEB APPLICATIONS AND TURN IDEAS INTO SCALABLE{' '}
            <span className="text-purple-400 font-bold drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
              DIGITAL PRODUCTS.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#projects"
              className="interactive-card px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/alokchoudhary885-coder"
              target="_blank"
              rel="noreferrer"
              className="interactive-card px-6 py-3.5 rounded-full glass-panel border border-white/15 hover:border-purple-400 text-slate-200 font-mono text-xs flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Bottom Stats Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono">
            <div className="flex flex-col border-r border-white/10 pr-2">
              <span className="font-syne text-2xl font-black text-white">3+</span>
              <span className="text-[10px] text-slate-400">Projects Built</span>
            </div>
            <div className="flex flex-col border-r border-white/10 pr-2">
              <span className="font-syne text-2xl font-black text-white">150+</span>
              <span className="text-[10px] text-slate-400">LeetCode Solved</span>
            </div>
            <div className="flex flex-col border-r border-white/10 pr-2">
              <span className="font-syne text-2xl font-black text-white">MERN</span>
              <span className="text-[10px] text-slate-400">Stack</span>
            </div>
            <div className="flex flex-col">
              <span className="font-syne text-2xl font-black text-purple-400">JAVA+DSA</span>
              <span className="text-[10px] text-slate-400">Problem Solving</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Overlapping Card Deck */}
        <motion.div
          ref={deckRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.15s ease-out'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-6 relative flex items-center justify-center min-h-[470px] perspective-1000"
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous card"
            className="absolute -left-2 sm:-left-5 z-30 p-3 rounded-full glass-panel border border-white/15 text-white hover:border-purple-400 hover:text-purple-400 transition-all hover:scale-110 active:scale-95 shadow-xl"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next card"
            className="absolute -right-2 sm:-right-5 z-30 p-3 rounded-full glass-panel border border-white/15 text-white hover:border-purple-400 hover:text-purple-400 transition-all hover:scale-110 active:scale-95 shadow-xl"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[440px] flex items-center justify-center preserve-3d">
            {cards.map((card, idx) => {
              let offset = idx - activeCardIndex;
              if (offset < -1) offset += cards.length;
              if (offset > 1) offset -= cards.length;

              const isActive = offset === 0;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x: `${offset * 75}%`,
                    scale: isActive ? 1 : 0.84,
                    rotateY: offset * -18,
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10 - Math.abs(offset),
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`absolute w-full h-[420px] rounded-3xl p-6 sm:p-7 cursor-pointer preserve-3d transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    card.isOrange && isActive
                      ? 'glass-card-orange animate-float'
                      : isActive
                      ? 'glass-card-purple animate-float'
                      : 'glass-panel border border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl bg-white/10 ${card.isOrange ? 'text-orange-400' : 'text-purple-400'}`}>
                        <card.icon className="w-5 h-5" />
                      </div>
                      <span className="font-syne font-bold text-lg text-white">{card.title}</span>
                    </div>

                    <span className="font-mono text-xs text-slate-400">{card.num}</span>
                  </div>

                  <div className="my-2">
                    <p className="font-mono text-xs text-slate-300 font-semibold mb-3">{card.subtitle}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3 font-mono text-[11px]">
                      {card.tech.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {card.hasBurger && (
                    <div className="relative h-28 w-full flex items-center justify-center mt-1 group">
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/25 to-transparent rounded-2xl pointer-events-none animate-pulse" />
                      <div className="text-6xl animate-bounce drop-shadow-[0_12px_24px_rgba(255,85,0,0.8)] transition-transform group-hover:scale-125">
                        🍔
                      </div>
                      <div className="absolute top-2 right-4 text-orange-400 animate-pulse">
                        <Flame className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    {card.isOrange ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenFoodRushModal();
                        }}
                        className="text-orange-400 hover:text-white flex items-center gap-1.5 font-bold transition-colors group-hover:translate-x-1"
                      >
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-purple-400 flex items-center gap-1 font-bold">
                        <span>Preview Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>

      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2 font-mono text-[10px] text-slate-400">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse" />
        <MousePointer className="w-4 h-4 text-purple-400" />
        <span className="rotate-90 origin-left translate-y-6 tracking-widest uppercase">Scroll Down</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
}

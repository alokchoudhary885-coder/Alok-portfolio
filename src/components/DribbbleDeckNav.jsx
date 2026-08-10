import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Utensils, Wrench, Briefcase, Mail, ArrowUpRight, Sparkles, Code, Terminal, Layers, Play } from 'lucide-react';

export default function DribbbleDeckNav({ onOpenFoodRushModal }) {
  const [activeIndex, setActiveIndex] = useState(1); // Default to FoodRush active

  const cards = [
    {
      id: 'about',
      num: '01',
      title: 'ABOUT ME',
      subtitle: 'Who I Am & CSE Background',
      icon: User,
      category: 'BACKGROUND',
      description: 'B.Tech Computer Science student & Full Stack MERN Developer based in Jaipur.',
      accent: '#00f0ff',
      gradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
      href: '#about',
      previewBg: 'bg-gradient-to-br from-cyan-950/60 to-slate-950',
    },
    {
      id: 'foodrush',
      num: '02',
      title: 'FOODRUSH',
      subtitle: 'Full-Stack Food Delivery Ecosystem',
      icon: Utensils,
      category: 'KING PROJECT',
      description: '25+ RESTful APIs, Razorpay checkout, Web Speech API voice search, and 6-digit OTP verification.',
      accent: '#ff5500',
      gradient: 'from-orange-500/25 via-red-600/15 to-transparent',
      isSpecial: true,
      href: '#projects',
      previewBg: 'bg-gradient-to-br from-orange-950/70 to-slate-950',
    },
    {
      id: 'projects',
      num: '03',
      title: 'SELECTED WORK',
      subtitle: 'Production MERN Applications',
      icon: Code,
      category: 'PROJECTS',
      description: 'High-performance web applications built with React, Vite, Node.js, Express, and Tailwind CSS.',
      accent: '#a855f7',
      gradient: 'from-purple-500/20 via-indigo-600/10 to-transparent',
      href: '#projects',
      previewBg: 'bg-gradient-to-br from-purple-950/60 to-slate-950',
    },
    {
      id: 'toolbox',
      num: '04',
      title: 'MY TOOLBOX',
      subtitle: 'Tech Stack & Skills',
      icon: Wrench,
      category: 'SKILLSET',
      description: 'MERN Stack, REST APIs, JWT Auth, MongoDB, Java & Data Structures.',
      accent: '#00ff66',
      gradient: 'from-green-500/20 via-emerald-600/10 to-transparent',
      href: '#toolbox',
      previewBg: 'bg-gradient-to-br from-emerald-950/60 to-slate-950',
    },
    {
      id: 'experience',
      num: '05',
      title: 'EXPERIENCE',
      subtitle: 'Software Internships',
      icon: Briefcase,
      category: 'TIMELINE',
      description: 'Full Stack & Web Dev Internships at Aurika Infotech & Aeonaxy Technologies.',
      accent: '#3b82f6',
      gradient: 'from-blue-500/20 via-indigo-600/10 to-transparent',
      href: '#experience',
      previewBg: 'bg-gradient-to-br from-blue-950/60 to-slate-950',
    },
    {
      id: 'contact',
      num: '06',
      title: 'LET\'S TALK',
      subtitle: 'Start A Conversation',
      icon: Mail,
      category: 'CONTACT',
      description: 'Available for full-stack developer roles, freelance projects & collaboration.',
      accent: '#ec4899',
      gradient: 'from-pink-500/20 via-rose-600/10 to-transparent',
      href: '#contact',
      previewBg: 'bg-gradient-to-br from-pink-950/60 to-slate-950',
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#06070a] bg-noise border-y border-white/10 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-xs text-purple-400 mb-4 shadow-neon-purple">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>02 / SIGNATURE HORIZONTAL DECK CAROUSEL</span>
        </div>
        
        <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          CINEMATIC <span className="text-gradient-purple">INTERACTIVE CARDS</span>
        </h2>

        <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
          Click neighbor cards or navigation arrows to expand active projects with live UI previews & GSAP 3D depth
        </p>
      </div>

      {/* 4-Card Horizontal Deck Display */}
      <div className="relative max-w-6xl mx-auto min-h-[490px] flex items-center justify-center py-4">
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Card"
          className="absolute left-2 md:left-4 z-30 p-3.5 rounded-full glass-panel border border-white/15 text-white hover:border-purple-400 hover:text-purple-400 transition-all shadow-2xl hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Card"
          className="absolute right-2 md:right-4 z-30 p-3.5 rounded-full glass-panel border border-white/15 text-white hover:border-purple-400 hover:text-purple-400 transition-all shadow-2xl hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dynamic Card Carousel Container */}
        <div className="relative w-full max-w-4xl h-[450px] flex items-center justify-center preserve-3d">
          {cards.map((card, idx) => {
            let offset = idx - activeIndex;
            if (offset < -Math.floor(cards.length / 2)) offset += cards.length;
            if (offset > Math.floor(cards.length / 2)) offset -= cards.length;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <motion.div
                key={card.id}
                initial={false}
                animate={{
                  x: `${offset * 68}%`,
                  scale: isActive ? 1.05 : 0.82 - Math.abs(offset) * 0.08,
                  rotateY: offset * -16,
                  z: isActive ? 60 : -Math.abs(offset) * 80,
                  opacity: isActive ? 1 : 0.45 - Math.abs(offset) * 0.1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 26,
                }}
                onClick={() => setActiveIndex(idx)}
                style={{ zIndex: 20 - Math.abs(offset) }}
                className={`absolute w-full max-w-[340px] sm:max-w-[420px] h-[430px] rounded-3xl p-6 sm:p-8 cursor-pointer preserve-3d transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? card.isSpecial
                      ? 'glass-card-orange border-2 shadow-2xl animate-float'
                      : 'glass-card-purple border-2 shadow-2xl animate-float'
                    : 'glass-panel border border-white/10 hover:border-white/30'
                }`}
              >
                {/* Background Ambient Gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-60 pointer-events-none`} />

                <div className="relative h-full flex flex-col justify-between z-10">
                  
                  {/* Top Card Bar */}
                  <div className="flex items-start justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2.5 rounded-xl bg-white/10 border border-white/15"
                        style={{ color: card.accent }}
                      >
                        <card.icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                          {card.category}
                        </span>
                        <span className="font-syne font-bold text-sm text-white">
                          {card.title}
                        </span>
                      </div>
                    </div>

                    <span
                      className="font-mono text-2xl font-black opacity-60"
                      style={{ color: card.accent }}
                    >
                      {card.num}
                    </span>
                  </div>

                  {/* Active Card Body with Rich Preview Graphics */}
                  <div className="my-auto py-2">
                    <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                      {card.subtitle}
                    </h3>
                    <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed mb-3">
                      {card.description}
                    </p>

                    {/* Expandable Live UI Preview Box for Active Card */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3.5 rounded-xl ${card.previewBg} border border-white/10 space-y-1.5 font-mono text-[11px]`}
                      >
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: card.accent }} />
                            <span>LIVE PREVIEW ACTIVE</span>
                          </span>
                          <span className="font-bold text-white">READY</span>
                        </div>

                        {card.isSpecial && (
                          <div className="text-orange-400 font-bold pt-1">
                            🍔 25+ REST APIs • Razorpay • Voice Search
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    {isActive ? (
                      card.isSpecial ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenFoodRushModal();
                          }}
                          className="w-full py-2.5 rounded-xl bg-orange-500 text-black font-bold flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors shadow-[0_0_25px_rgba(255,85,0,0.5)]"
                        >
                          <span>VIEW TECHNICAL CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <a
                          href={card.href}
                          className="w-full py-2.5 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-purple-500 transition-colors shadow-neon-purple"
                        >
                          <span>EXPLORE SECTION</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )
                    ) : (
                      <span className="text-slate-400 text-center w-full">CLICK TO EXPAND</span>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Jump to card ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-8 bg-purple-500 shadow-neon-purple' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

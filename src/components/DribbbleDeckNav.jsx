import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Utensils, ShieldAlert, Cpu, Mail, ArrowUpRight } from 'lucide-react';

export default function DribbbleDeckNav({ onOpenFoodRushModal, onOpenJobGuardModal }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = [
    {
      id: 'about',
      num: '01',
      title: 'About Me',
      subtitle: 'Background & CSE Focus',
      icon: User,
      category: 'BACKGROUND',
      description: 'B.Tech Computer Science student & Full Stack MERN Developer based in Jaipur.',
      href: '#about',
    },
    {
      id: 'foodrush',
      num: '02',
      title: 'FoodRush',
      subtitle: 'Full-Stack Food Delivery Platform',
      icon: Utensils,
      category: 'FLAGSHIP PROJECT',
      description: '25+ RESTful APIs, Razorpay checkout, Web Speech API voice search, and 6-digit OTP verification.',
      extra: '🍔 25+ REST APIs • Razorpay • Voice Search',
      isFoodRush: true,
      href: '#projects',
    },
    {
      id: 'jobguard',
      num: '03',
      title: 'JobGuard',
      subtitle: 'Real-Time Job Risk & Scam Radar',
      icon: ShieldAlert,
      category: 'CYBERSECURITY EXTENSION',
      description: 'Chrome Extension (Manifest V3) analyzing LinkedIn, Internshala, and Indeed offers against fee extortion & scams.',
      extra: '🛡️ Real-Time Manifest V3 Extension • Gemini AI Radar',
      isJobGuard: true,
      href: '#projects',
    },
    {
      id: 'devcommand',
      num: '04',
      title: 'Dev Command Center',
      subtitle: 'Enterprise Telemetry & AI PR Radar',
      icon: Cpu,
      category: 'DEVELOPER PLATFORM',
      description: 'DORA metrics, automated AI code reviewer, Socket.IO WebSockets streaming, and AES-256 OAuth 2.0.',
      extra: '⚡ DORA Metrics • Gemini 1.5 Flash • Socket.IO',
      isDevCommand: true,
      href: 'https://developer-command-center-five.vercel.app',
      external: true,
    },
    {
      id: 'contact',
      num: '05',
      title: 'Contact',
      subtitle: 'Start A Conversation',
      icon: Mail,
      category: 'AVAILABILITY',
      description: 'Available for full-stack developer roles, freelance projects & collaboration.',
      href: '#contact',
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section id="deck" className="relative w-full py-20 sm:py-24 overflow-hidden border-t border-slate-800/80 bg-transparent">
      <div className="dot-grid absolute inset-0 opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2.5 mb-12 sm:mb-14">
          <span className="font-mono text-xs text-blue-400 tracking-wider uppercase font-semibold">
            02 / Interactive Portfolio Deck
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-shiny">Deck Highlights</span>
          </h2>
          <p className="text-slate-400 max-w-lg text-xs sm:text-sm font-normal">
            Navigate through flagship projects and core domains with smooth 3D perspective.
          </p>
        </div>

        {/* Carousel Deck Viewport */}
        <div className="relative w-full flex items-center justify-center min-h-[420px]">
          
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous Card"
            className="absolute left-1 sm:left-4 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 text-slate-300 transition-all shadow-md cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next Card"
            className="absolute right-1 sm:right-4 z-30 w-10 h-10 rounded-full flex items-center justify-center bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 text-slate-300 transition-all shadow-md cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Track */}
          <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center [perspective:1000px]">
            {cards.map((card, idx) => {
              let offset = idx - activeIndex;
              if (offset < -Math.floor(cards.length / 2)) offset += cards.length;
              if (offset > Math.floor(cards.length / 2)) offset -= cards.length;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              const Icon = card.icon;

              return (
                <motion.div
                  key={card.id}
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    x: `${offset * 58}%`,
                    scale: isActive ? 1 : 0.85 - Math.abs(offset) * 0.08,
                    rotateY: offset * -10,
                    opacity: isActive ? 1 : 0.4 - Math.abs(offset) * 0.1,
                    zIndex: 20 - Math.abs(offset),
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  className={`absolute w-[86vw] sm:w-[380px] h-[390px] rounded-2xl p-6 flex flex-col justify-between cursor-pointer select-none backdrop-blur-xl ${
                    isActive
                      ? 'bg-slate-900/90 border border-blue-500/40 shadow-xl shadow-black/40'
                      : 'bg-slate-950/80 border border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header */}
                  <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${isActive ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-slate-800/60 border-slate-700 text-slate-300'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                          {card.category}
                        </span>
                        <span className="font-semibold text-sm text-white">
                          {card.title}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-xl text-slate-600">
                      {card.num}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col justify-center gap-2.5 py-4">
                    <h3 className="font-semibold text-base sm:text-lg text-white leading-snug">
                      {card.subtitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {card.description}
                    </p>

                    {isActive && card.extra && (
                      <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-medium mt-1">
                        {card.extra}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Action */}
                  <div className="border-t border-slate-800 pt-3">
                    {isActive ? (
                      card.isFoodRush ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenFoodRushModal?.();
                          }}
                          className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      ) : card.isJobGuard ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenJobGuardModal?.();
                          }}
                          className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                        >
                          <span>Cybersecurity Specs</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <a
                          href={card.href}
                          target={card.external ? '_blank' : undefined}
                          rel={card.external ? 'noreferrer' : undefined}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                        >
                          <span>Explore Section</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )
                    ) : (
                      <span className="font-mono text-[10px] text-slate-500 text-center block uppercase tracking-wider">
                        Click to focus
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? 'w-7 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

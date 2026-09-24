import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Utensils, ShieldAlert, Cpu, Mail, ArrowUpRight } from 'lucide-react';

export default function DribbbleDeckNav({ onOpenFoodRushModal, onOpenJobGuardModal }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const cards = [
    {
      id: 'about',
      num: '01',
      title: 'ABOUT ME',
      subtitle: 'Who I Am & CSE Background',
      icon: User,
      category: 'BACKGROUND',
      description: 'B.Tech Computer Science student & Full Stack MERN Developer based in Jaipur.',
      accent: '#CCFF00',
      href: '#about',
    },
    {
      id: 'foodrush',
      num: '02',
      title: 'FOODRUSH',
      subtitle: 'Full-Stack Food Delivery Ecosystem',
      icon: Utensils,
      category: 'FLAGSHIP PROJECT',
      description: '25+ RESTful APIs, Razorpay checkout, Web Speech API voice search, and 6-digit OTP verification.',
      accent: '#CCFF00',
      extra: '🍔 25+ REST APIs • Razorpay • Voice Search',
      isFoodRush: true,
      href: '#projects',
    },
    {
      id: 'jobguard',
      num: '03',
      title: 'JOBGUARD',
      subtitle: 'Real-Time Job Risk & Scam Radar',
      icon: ShieldAlert,
      category: 'CYBERSECURITY EXTENSION',
      description: 'Chrome Extension (Manifest V3) analyzing LinkedIn, Internshala, and Indeed offers against fee extortion & scams.',
      accent: '#CCFF00',
      extra: '🛡️ Real-Time Manifest V3 Extension • Gemini AI Radar',
      isJobGuard: true,
      href: '#projects',
    },
    {
      id: 'devcommand',
      num: '04',
      title: 'DEVELOPER COMMAND CENTER',
      subtitle: 'Enterprise Telemetry & Gemini AI PR Radar',
      icon: Cpu,
      category: 'ENTERPRISE AI PLATFORM',
      description: 'DORA metrics, automated AI code reviewer, Socket.IO WebSockets streaming, and AES-256 OAuth 2.0.',
      accent: '#CCFF00',
      extra: '⚡ DORA Metrics • Gemini 1.5 Flash • Socket.IO',
      isDevCommand: true,
      href: 'https://developer-command-center-five.vercel.app',
      external: true,
    },
    {
      id: 'contact',
      num: '05',
      title: 'CONTACT',
      subtitle: 'Start A Conversation',
      icon: Mail,
      category: 'AVAILABILITY',
      description: 'Available for full-stack developer roles, freelance projects & collaboration.',
      accent: '#CCFF00',
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
    <section id="deck" className="relative w-full py-24 overflow-hidden border-t border-white/5 bg-[#080808]">
      <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span className="font-mono text-[11px] text-[#CCFF00] tracking-widest uppercase font-semibold">
            // 02 / INTERACTIVE 3D DECK
          </span>
          <h2 className="font-display font-extrabold text-white tracking-tight text-3xl sm:text-5xl md:text-6xl">
            CINEMATIC <span className="text-shiny">PORTFOLIO DECK</span>
          </h2>
          <p className="font-body text-[#A0A0A0] max-w-lg text-sm">
            Navigate neighbor cards with smooth 3D depth to inspect architecture specifications.
          </p>
        </div>

        {/* Carousel Deck Viewport */}
        <div className="relative w-full flex items-center justify-center min-h-[440px]">
          
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous Card"
            className="absolute left-2 sm:left-4 z-30 w-11 h-11 rounded-sm flex items-center justify-center bg-[#161616]/90 border border-white/10 hover:border-[#CCFF00] hover:text-[#CCFF00] text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next Card"
            className="absolute right-2 sm:right-4 z-30 w-11 h-11 rounded-sm flex items-center justify-center bg-[#161616]/90 border border-white/10 hover:border-[#CCFF00] hover:text-[#CCFF00] text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Track */}
          <div className="relative w-full max-w-4xl h-[420px] flex items-center justify-center [perspective:1000px]">
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
                    x: `${offset * 60}%`,
                    scale: isActive ? 1 : 0.82 - Math.abs(offset) * 0.08,
                    rotateY: offset * -12,
                    opacity: isActive ? 1 : 0.35 - Math.abs(offset) * 0.08,
                    zIndex: 20 - Math.abs(offset),
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  className={`absolute w-[86vw] sm:w-[380px] h-[400px] rounded-sm p-6 flex flex-col justify-between cursor-pointer select-none backdrop-blur-xl ${
                    isActive
                      ? 'bg-[#141414] border border-[#CCFF00]/40 shadow-[0_0_40px_rgba(204,255,0,0.18),0_20px_50px_rgba(0,0,0,0.7)]'
                      : 'bg-[#101010]/85 border border-white/8 hover:border-white/20'
                  }`}
                >
                  {/* Card Header */}
                  <div className="border-b border-white/8 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-sm border ${isActive ? 'bg-[#CCFF00]/10 border-[#CCFF00]/40 text-[#CCFF00]' : 'bg-white/5 border-white/10 text-white'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block">
                          {card.category}
                        </span>
                        <span className="font-display font-bold text-sm text-white">
                          {card.title}
                        </span>
                      </div>
                    </div>
                    <span className="font-display font-black text-2xl text-stone-600">
                      {card.num}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex-1 flex flex-col justify-center gap-3 py-4">
                    <h3 className="font-display font-bold text-lg text-white leading-snug">
                      {card.subtitle}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-stone-400 leading-relaxed">
                      {card.description}
                    </p>

                    {isActive && card.extra && (
                      <div className="p-3 rounded-sm bg-[#CCFF00]/5 border border-[#CCFF00]/25 font-mono text-[11px] text-[#CCFF00] font-semibold mt-1">
                        <span className="block text-[9px] text-stone-400 uppercase tracking-wider mb-1">
                          INTERACTIVE READY — ACTIVE
                        </span>
                        {card.extra}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Action */}
                  <div className="border-t border-white/8 pt-3">
                    {isActive ? (
                      card.isFoodRush ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenFoodRushModal?.();
                          }}
                          className="w-full py-2.5 rounded-sm bg-[#CCFF00] hover:bg-[#d6ff1a] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                        >
                          <span>EXPLORE CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4 text-black" />
                        </button>
                      ) : card.isJobGuard ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenJobGuardModal?.();
                          }}
                          className="w-full py-2.5 rounded-sm bg-[#CCFF00] hover:bg-[#d6ff1a] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                        >
                          <span>CYBERSECURITY SPECS</span>
                          <ArrowUpRight className="w-4 h-4 text-black" />
                        </button>
                      ) : (
                        <a
                          href={card.href}
                          target={card.external ? '_blank' : undefined}
                          rel={card.external ? 'noreferrer' : undefined}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-2.5 rounded-sm bg-[#CCFF00] hover:bg-[#d6ff1a] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                        >
                          <span>EXPLORE SECTION</span>
                          <ArrowUpRight className="w-4 h-4 text-black" />
                        </a>
                      )
                    ) : (
                      <span className="font-mono text-[10px] text-stone-500 text-center block uppercase tracking-wider">
                        CLICK TO FOCUS
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
                i === activeIndex ? 'w-8 bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]' : 'w-2 bg-stone-700 hover:bg-stone-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

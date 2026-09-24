import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Utensils, Wrench, Briefcase, Mail, ArrowUpRight, Sparkles, ShieldAlert, Cpu } from 'lucide-react';

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
      accent: '#00f0ff',
      gradient: 'from-cyan-500/10 via-blue-600/5 to-transparent',
      href: '#about',
      previewBg: 'bg-gradient-to-br from-cyan-950/40 to-[#090d16]',
    },
    {
      id: 'foodrush',
      num: '02',
      title: 'FOODRUSH',
      subtitle: 'Full-Stack Food Delivery Ecosystem',
      icon: Utensils,
      category: 'FLAGSHIP PROJECT',
      description: '25+ RESTful APIs, Razorpay checkout, Web Speech API voice search, and 6-digit OTP verification.',
      accent: '#ff5500',
      gradient: 'from-orange-500/15 via-red-600/10 to-transparent',
      isSpecial: true,
      href: '#projects',
      previewBg: 'bg-gradient-to-br from-orange-950/50 to-[#090d16]',
    },
    {
      id: 'jobguard',
      num: '03',
      title: 'JOBGUARD',
      subtitle: 'Real-Time Job Risk & Scam Radar',
      icon: ShieldAlert,
      category: 'CYBERSECURITY EXTENSION',
      description: 'Chrome Extension (Manifest V3) analyzing LinkedIn, Internshala, and Indeed offers against fee extortion & scams.',
      accent: '#00f0ff',
      gradient: 'from-cyan-500/15 via-blue-600/10 to-transparent',
      isJobGuard: true,
      href: '#projects',
      previewBg: 'bg-gradient-to-br from-cyan-950/50 to-[#090d16]',
    },
    {
      id: 'devcommand',
      num: '04',
      title: 'DEV COMMAND CENTER',
      subtitle: 'Enterprise Telemetry & Gemini AI PR Radar',
      icon: Cpu,
      category: 'ENTERPRISE AI PLATFORM',
      description: 'DORA metrics, automated AI code reviewer, Socket.IO WebSockets streaming, and AES-256 OAuth 2.0.',
      accent: '#a855f7',
      gradient: 'from-purple-500/15 via-indigo-600/10 to-transparent',
      isDevCommand: true,
      href: '#projects',
      previewBg: 'bg-gradient-to-br from-purple-950/50 to-[#090d16]',
    },
    {
      id: 'toolbox',
      num: '05',
      title: 'MY TOOLBOX',
      subtitle: 'Tech Stack & Skills',
      icon: Wrench,
      category: 'SKILLSET',
      description: 'MERN Stack, REST APIs, JWT Auth, MongoDB, Java & Data Structures.',
      accent: '#00ff66',
      gradient: 'from-green-500/10 via-emerald-600/5 to-transparent',
      href: '#toolbox',
      previewBg: 'bg-gradient-to-br from-emerald-950/40 to-[#090d16]',
    },
    {
      id: 'experience',
      num: '06',
      title: 'EXPERIENCE',
      subtitle: 'Software Internships',
      icon: Briefcase,
      category: 'TIMELINE',
      description: 'Full Stack & Web Dev Internships at Aurika Infotech & Aeonaxy Technologies.',
      accent: '#3b82f6',
      gradient: 'from-blue-500/10 via-indigo-600/5 to-transparent',
      href: '#experience',
      previewBg: 'bg-gradient-to-br from-blue-950/40 to-[#090d16]',
    },
    {
      id: 'contact',
      num: '07',
      title: 'LET\'S TALK',
      subtitle: 'Start A Conversation',
      icon: Mail,
      category: 'CONTACT',
      description: 'Available for full-stack developer roles, freelance projects & collaboration.',
      accent: '#ec4899',
      gradient: 'from-pink-500/10 via-rose-600/5 to-transparent',
      href: '#contact',
      previewBg: 'bg-gradient-to-br from-pink-950/40 to-[#090d16]',
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#04060b] border-y border-white/5 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 font-mono text-[11px] sm:text-xs text-cyan-400 mb-3 bg-cyan-500/5">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>02 / INTERACTIVE 3D DECK</span>
        </div>
        
        <h2 className="font-syne text-3xl sm:text-6xl font-black text-white tracking-tight">
          CINEMATIC <span className="text-shiny">PORTFOLIO DECK</span>
        </h2>

        <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl px-2 font-light">
          Navigate neighbor cards or use arrow controls to explore active projects with 3D depth.
        </p>
      </div>

      {/* Dynamic Deck Display */}
      <div className="relative max-w-6xl mx-auto min-h-[440px] sm:min-h-[490px] flex items-center justify-center py-2">
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Card"
          className="absolute left-1 sm:left-4 z-30 p-2.5 sm:p-3.5 rounded-full border border-white/15 bg-[#0b0f19]/80 backdrop-blur-md text-white hover:border-cyan-400 hover:text-cyan-400 transition-all shadow-xl hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Card"
          className="absolute right-1 sm:right-4 z-30 p-2.5 sm:p-3.5 rounded-full border border-white/15 bg-[#0b0f19]/80 backdrop-blur-md text-white hover:border-cyan-400 hover:text-cyan-400 transition-all shadow-xl hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dynamic Card Carousel Container */}
        <div className="relative w-full max-w-4xl h-[420px] sm:h-[450px] flex items-center justify-center preserve-3d">
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
                  x: `${offset * 58}%`,
                  scale: isActive ? 1 : 0.84 - Math.abs(offset) * 0.08,
                  rotateY: offset * -12,
                  z: isActive ? 40 : -Math.abs(offset) * 60,
                  opacity: isActive ? 1 : 0.45 - Math.abs(offset) * 0.1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 26,
                }}
                onClick={() => setActiveIndex(idx)}
                style={{ zIndex: 20 - Math.abs(offset) }}
                className={`absolute w-[86vw] max-w-[300px] sm:max-w-[420px] h-[410px] sm:h-[430px] rounded-3xl p-6 sm:p-8 cursor-pointer preserve-3d transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? card.isSpecial
                      ? 'border-2 border-orange-500/60 bg-[#0c101c] shadow-[0_0_30px_rgba(255,85,0,0.2)]'
                      : card.isJobGuard
                      ? 'border-2 border-cyan-500/60 bg-[#0c101c] shadow-[0_0_30px_rgba(0,240,255,0.2)]'
                      : card.isDevCommand
                      ? 'border-2 border-purple-500/60 bg-[#0c101c] shadow-[0_0_30px_rgba(168,85,247,0.2)]'
                      : 'border-2 border-white/20 bg-[#0c101c] shadow-2xl'
                    : 'border border-white/10 bg-[#090d16]/90 hover:border-white/20'
                }`}
              >
                {/* Background Ambient Gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-50 pointer-events-none`} />

                <div className="relative h-full flex flex-col justify-between z-10">
                  
                  {/* Top Card Bar */}
                  <div className="flex items-start justify-between border-b border-white/10 pb-3 sm:pb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0"
                        style={{ color: card.accent }}
                      >
                        <card.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 tracking-wider truncate">
                          {card.category}
                        </span>
                        <span className="font-syne font-bold text-xs sm:text-sm text-white truncate">
                          {card.title}
                        </span>
                      </div>
                    </div>

                    <span
                      className="font-mono text-xl sm:text-2xl font-black opacity-60 shrink-0"
                      style={{ color: card.accent }}
                    >
                      {card.num}
                    </span>
                  </div>

                  {/* Active Card Body */}
                  <div className="my-auto py-1.5 sm:py-2">
                    <h3 className="font-syne text-lg sm:text-2xl font-bold text-white mb-1.5 leading-tight">
                      {card.subtitle}
                    </h3>
                    <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed mb-2.5">
                      {card.description}
                    </p>

                    {/* Expandable Live UI Preview Box */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 sm:p-3.5 rounded-xl ${card.previewBg} border border-white/10 space-y-1 font-mono text-[10px] sm:text-[11px]`}
                      >
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="flex items-center gap-1.5 truncate">
                            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: card.accent }} />
                            <span className="truncate">INTERACTIVE READY</span>
                          </span>
                          <span className="font-bold text-white shrink-0 ml-1">ACTIVE</span>
                        </div>

                        {card.isSpecial && (
                          <div className="text-orange-400 font-bold pt-0.5 truncate">
                            🍔 25+ REST APIs • Razorpay • Voice Search
                          </div>
                        )}
                        {card.isJobGuard && (
                          <div className="text-cyan-400 font-bold pt-0.5 truncate">
                            🛡️ Real-Time Manifest V3 Extension • Gemini AI Radar
                          </div>
                        )}
                        {card.isDevCommand && (
                          <div className="text-purple-400 font-bold pt-0.5 truncate">
                            ⚡ DORA Metrics • Gemini 1.5 Flash • Socket.IO
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    {isActive ? (
                      card.isSpecial ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenFoodRushModal();
                          }}
                          className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm text-[11px] sm:text-xs"
                        >
                          <span>VIEW TECHNICAL CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      ) : card.isJobGuard ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenJobGuardModal();
                          }}
                          className="w-full py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm text-[11px] sm:text-xs"
                        >
                          <span>VIEW EXTENSION CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      ) : card.isDevCommand ? (
                        <a
                          href="https://developer-command-center-five.vercel.app"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold flex items-center justify-center gap-1.5 transition-colors text-[11px] sm:text-xs"
                        >
                          <span>OPEN DEV COMMAND CENTER</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      ) : (
                        <a
                          href={card.href}
                          className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center gap-1.5 transition-colors text-[11px] sm:text-xs"
                        >
                          <span>EXPLORE SECTION</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      )
                    ) : (
                      <span className="text-slate-400 text-center w-full text-[11px]">CLICK TO EXPAND</span>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Jump to card ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

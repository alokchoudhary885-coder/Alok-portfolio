import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight, Send } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'deck', 'about', 'services', 'toolbox', 'projects', 'process', 'experience', 'dsa', 'github', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'OVERVIEW', href: '#hero', id: 'hero' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'TECH STACK', href: '#toolbox', id: 'toolbox' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left Brand Logo & Avatar */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-sm overflow-hidden p-0.5 bg-gradient-to-tr from-[#CCFF00] via-[#88FF00] to-white shadow-[0_0_14px_rgba(204,255,0,0.35)] group-hover:scale-105 transition-transform">
            <img
              src={profilePhoto}
              alt="Alok Choudhary"
              className="w-full h-full object-cover rounded-sm grayscale contrast-125 group-hover:grayscale-0 transition-all"
            />
          </div>
          <span className="font-mono font-bold text-sm tracking-wider text-white group-hover:text-[#CCFF00] transition-colors">
            [AC<span className="text-[#CCFF00]">.DEV</span>]
          </span>
        </a>

        {/* Center Floating Glass Pill Container (Desktop Only) */}
        <nav className="hidden md:flex items-center gap-1 px-3.5 py-1.5 rounded-sm border border-[rgba(204,255,0,0.18)] bg-[#0c0c0c]/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (link.id === 'hero' && activeSection === 'deck');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1 rounded-sm font-mono text-[11px] transition-all uppercase tracking-wider font-semibold ${
                  isActive ? 'text-[#CCFF00]' : 'text-stone-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#CCFF00]/10 rounded-sm border border-[#CCFF00]/30 shadow-[0_0_12px_rgba(204,255,0,0.2)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#161616] border border-[#CCFF00]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse shadow-[0_0_8px_#CCFF00]"></span>
            <span className="font-mono text-[10px] text-stone-300 uppercase tracking-wider font-semibold">Available for Roles</span>
          </div>

          <a
            href="/alok-choudhary-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-sm bg-[#CCFF00] hover:bg-[#d4ff1a] text-black font-mono text-[11px] sm:text-xs font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.35)] hover:shadow-[0_0_30px_rgba(204,255,0,0.55)] hover:scale-105"
          >
            <Download className="w-3.5 h-3.5 text-black" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-sm border border-[#CCFF00]/30 hover:border-[#CCFF00] text-stone-300 hover:text-[#CCFF00] bg-[#161616]/70 font-mono text-[11px] sm:text-xs font-semibold transition-all"
          >
            <Send className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>Let's Build</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-sm border border-[rgba(204,255,0,0.2)] bg-[#121212]/90 backdrop-blur-md text-stone-200"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#CCFF00]" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-4 rounded-sm border border-[rgba(204,255,0,0.25)] bg-[#0c0c0c]/98 backdrop-blur-2xl flex flex-col gap-2 font-mono text-xs pointer-events-auto shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3.5 rounded-sm hover:bg-[#CCFF00]/10 text-stone-300 hover:text-[#CCFF00] flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#CCFF00]" />
              </a>
            ))}

            <a
              href="/alok-choudhary-resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-2.5 px-3.5 rounded-sm bg-[#CCFF00] text-black font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.3)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>VIEW RESUME PDF</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

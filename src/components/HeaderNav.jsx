import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight, Send } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'toolbox', 'experience', 'contact'];
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
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SERVICES', href: '#toolbox', id: 'toolbox' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3 sm:py-5 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left Brand Logo & Avatar */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform">
            <img
              src={profilePhoto}
              alt="Alok Choudhary"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-syne font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            ALOK<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Center Floating Glass Pill Container (Desktop Only) */}
        <nav className="hidden md:flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1 rounded-full font-mono text-[11px] transition-all uppercase tracking-wider font-semibold ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
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
          <a
            href="/alok-choudhary-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-[11px] sm:text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/15 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 bg-white/5 font-mono text-[11px] sm:text-xs transition-all"
          >
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>Contact</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full border border-white/15 bg-[#0b0f19]/80 backdrop-blur-md text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
            className="md:hidden mt-2 p-4 rounded-2xl border border-white/15 bg-[#0b0f19]/95 backdrop-blur-2xl flex flex-col gap-2 font-mono text-xs pointer-events-auto shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            ))}

            <a
              href="/alok-choudhary-resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold flex items-center justify-center gap-2"
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

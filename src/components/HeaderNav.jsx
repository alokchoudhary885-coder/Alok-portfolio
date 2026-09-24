import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight, Send, FileText } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

const RESUME_URL = "https://drive.google.com/file/d/1A7Sh87nIZzc_rbCZIfaIYYFvXSlIInc_/view?usp=drivesdk";

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'deck', 'about', 'services', 'toolbox', 'projects', 'process', 'experience', 'dsa', 'github', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 180;

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
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#toolbox', id: 'toolbox' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 lg:px-16 py-3.5 transition-all duration-300 pointer-events-none ${
      scrolled ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left Brand Logo & Avatar */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-blue-500 to-indigo-400 shadow-sm group-hover:scale-105 transition-transform">
            <img
              src={profilePhoto}
              alt="Alok Choudhary"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Alok Choudhary
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider hidden sm:block">
              FULL-STACK DEVELOPER
            </span>
          </div>
        </a>

        {/* Center Floating Glass Pill Container (Desktop Only) */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/75 backdrop-blur-xl shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id || (link.id === 'hero' && activeSection === 'deck');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-500/15 border border-blue-500/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for hire</span>
          </div>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white bg-slate-900/50 text-xs font-medium transition-all"
          >
            <Send className="w-3.5 h-3.5 text-blue-400" />
            <span>Contact</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg border border-slate-800 bg-slate-900/80 backdrop-blur-md text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-4 rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur-2xl flex flex-col gap-2 pointer-events-auto shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3.5 rounded-lg hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 flex items-center justify-between text-sm font-medium transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </a>
            ))}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

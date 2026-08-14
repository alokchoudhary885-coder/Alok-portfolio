import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight, Send } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SERVICES', href: '#toolbox' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-5 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left Brand Logo & Avatar - Clean ALOK. */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_12px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
            <img
              src={profilePhoto}
              alt="Alok Choudhary"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-syne font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            ALOK<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Center Floating Glass Pill Container */}
        <nav className="hidden md:flex items-center gap-1 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full font-mono text-[11px] text-slate-300 hover:text-white hover:bg-white/10 transition-all uppercase tracking-wider font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/alok-choudhary-resume.pdf"
            download="Alok_Choudhary_Resume.pdf"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full glass-panel border border-white/15 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 font-mono text-xs transition-all"
          >
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>Contact</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full glass-panel border border-white/15 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="md:hidden mt-3 p-5 rounded-2xl glass-panel border border-white/15 bg-[#0b0f19]/95 backdrop-blur-2xl flex flex-col gap-3 font-mono text-xs pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            ))}

            <a
              href="/alok-choudhary-resume.pdf"
              download="Alok_Choudhary_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

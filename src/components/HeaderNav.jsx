import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight, Briefcase } from 'lucide-react';
import profilePhoto from '../assets/alok-profile.jpg';

export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero', active: true },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#toolbox' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-12 py-4 bg-[#06070a]/85 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Logo with Alok's Profile Avatar */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-purple-500 to-orange-500 shadow-md group-hover:scale-110 transition-transform">
            <img
              src={profilePhoto}
              alt="Alok Choudhary"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-syne font-extrabold text-xl tracking-tight text-white group-hover:text-purple-400 transition-colors">
            ALOK.
          </span>
        </a>

        {/* Center Nav Items */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative py-1 transition-colors hover:text-white ${
                link.active ? 'text-white font-semibold' : 'text-slate-400'
              }`}
            >
              <span>{link.label}</span>
              {link.active && (
                <motion.span
                  layoutId="activeDot"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border border-purple-500/40 font-mono text-xs text-purple-300 hover:text-white hover:bg-purple-600/20 transition-all"
          >
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Explore Work</span>
          </a>

          <a
            href="#"
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600/20 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white font-mono text-xs transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-105"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
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
            className="md:hidden mt-4 p-5 rounded-2xl glass-panel border border-white/10 flex flex-col gap-3 font-mono text-xs"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
              </a>
            ))}

            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 rounded-xl bg-purple-600/30 border border-purple-500/50 text-purple-300 font-bold flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span>EXPLORE WORK</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

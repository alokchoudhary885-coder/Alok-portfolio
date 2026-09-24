import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 lg:px-16 bg-[#060a12] border-t border-slate-800/80 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Location Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-white font-semibold text-sm">Alok Choudhary</span>
          </div>

          <div className="hidden sm:block text-slate-700">|</div>

          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Jaipur, India</span>
            <Clock className="w-3.5 h-3.5 text-blue-400 ml-2 shrink-0" />
            <span className="text-blue-400 font-medium">{time || '08:00 PM'} (IST)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-1 text-xs text-center text-slate-400">
          <span>© {new Date().getFullYear()} Crafted by</span>
          <span className="text-white font-medium ml-1">Alok Choudhary</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-xs bg-slate-900/60 cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
        </button>

      </div>
    </footer>
  );
}

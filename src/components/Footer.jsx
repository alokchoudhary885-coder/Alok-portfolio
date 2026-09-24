import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, MapPin, Heart } from 'lucide-react';

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
    <footer className="relative py-12 px-4 sm:px-8 bg-[#020306] border-t border-white/5 font-mono text-xs text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Location Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-syne font-bold text-sm">ALOK CHOUDHARY</span>
          </div>

          <div className="hidden sm:block text-slate-700">|</div>

          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>JAIPUR, INDIA</span>
            <Clock className="w-3.5 h-3.5 text-cyan-400 ml-2 shrink-0" />
            <span className="text-cyan-400 font-semibold">{time || '01:29 AM'} (IST)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-1 text-xs text-center text-slate-400">
          <span>© {new Date().getFullYear()} CRAFTED BY</span>
          <span className="text-white font-bold ml-1">ALOK CHOUDHARY</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 text-xs bg-white/5"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}

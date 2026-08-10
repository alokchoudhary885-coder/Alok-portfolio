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
    <footer className="relative py-10 px-4 md:px-8 bg-[#040507] border-t border-white/10 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-white font-syne font-bold text-sm">13 / ALOK CHOUDHARY</span>
          </div>

          <div className="hidden sm:block text-slate-600">|</div>

          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            <span>JAIPUR, INDIA (IST)</span>
            <Clock className="w-3.5 h-3.5 text-purple-400 ml-2" />
            <span className="text-purple-400 font-semibold">{time || '01:29 AM'}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span>© {new Date().getFullYear()} CRAFTED WITH</span>
          <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400 mx-1 inline animate-pulse" />
          <span>BY ALOK CHOUDHARY</span>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-purple-400 text-slate-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}

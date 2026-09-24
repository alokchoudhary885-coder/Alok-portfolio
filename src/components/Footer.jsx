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
    <footer className="relative py-12 px-4 sm:px-8 bg-[#070707] border-t border-[#CCFF00]/10 font-mono text-xs text-[#A0A0A0]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Location Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse shadow-[0_0_8px_#CCFF00]" />
            <span className="text-white font-syne font-bold text-sm tracking-wide">ALOK CHOUDHARY</span>
          </div>

          <div className="hidden sm:block text-stone-700">|</div>

          <div className="flex items-center gap-2 text-[#A0A0A0] text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
            <span>JAIPUR, INDIA</span>
            <Clock className="w-3.5 h-3.5 text-[#CCFF00] ml-2 shrink-0" />
            <span className="text-[#CCFF00] font-semibold">{time || '05:30 PM'} (IST)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-1 text-xs text-center text-[#A0A0A0]">
          <span>© {new Date().getFullYear()} CRAFTED BY</span>
          <span className="text-[#CCFF00] font-bold ml-1">ALOK CHOUDHARY</span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#CCFF00]/20 hover:border-[#CCFF00] text-stone-300 hover:text-[#CCFF00] transition-all duration-300 hover:scale-105 active:scale-95 text-xs bg-[#CCFF00]/5 hover:shadow-[0_0_15px_rgba(204,255,0,0.2)]"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}

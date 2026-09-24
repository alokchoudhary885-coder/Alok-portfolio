import React from 'react';
import { motion } from 'framer-motion';

export default function TypographyStatement() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#04060b] border-y border-white/5 overflow-hidden select-none">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Top small kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] sm:text-xs text-cyan-400 font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6"
        >
          // CORE ENGINEERING PHILOSOPHY
        </motion.div>

        {/* Large Cinematic Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-syne font-black text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] max-w-5xl"
        >
          FULL-STACK <span className="text-slate-500 font-light italic font-serif">SYSTEMS</span>.{' '}
          <span className="text-shiny">PRODUCTION</span> SCALE.{' '}
          <span className="text-slate-400 font-normal">INTUITIVE</span> UX.
        </motion.h2>

        {/* Sub-statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-slate-400 text-xs sm:text-sm max-w-xl mt-6 sm:mt-8 leading-relaxed font-light"
        >
          Bridging high-performance Node.js APIs &amp; MongoDB architectures with fluid, responsive React interfaces.
        </motion.p>
      </div>
    </section>
  );
}

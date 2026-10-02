import React from 'react';
import { motion } from 'framer-motion';
import SystemOverview from './SystemOverview/SystemOverview';

export default function TypographyStatement() {
  return (
    <section id="system-overview" className="relative py-10 sm:py-14 bg-transparent border-y border-slate-800/80 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Top small kicker */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs text-blue-400 font-semibold tracking-wider uppercase mb-2 sm:mb-2.5"
        >
          // Core Engineering Philosophy
        </motion.div>

        {/* Large Clean Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl"
        >
          Full-Stack Systems.{' '}
          <span className="text-shiny">Production Scale.</span>{' '}
          <span className="text-slate-400 font-normal">Intuitive UX.</span>
        </motion.h2>

        {/* Sub-statement */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-400 text-xs sm:text-sm max-w-lg mt-2 sm:mt-2.5 leading-relaxed font-normal"
        >
          Bridging high-performance Node.js APIs &amp; MongoDB architectures with fluid, responsive React interfaces.
        </motion.p>
      </div>

      {/* 2x2 System Overview Engineering Dashboard */}
      <SystemOverview />
    </section>
  );
}

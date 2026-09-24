import React from 'react';
import { motion } from 'framer-motion';

export default function TypographyStatement() {
  return (
    <section className="relative py-16 sm:py-24 bg-transparent border-y border-slate-800/80 overflow-hidden select-none">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col items-center text-center">
        {/* Top small kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-blue-400 font-semibold tracking-wider uppercase mb-3 sm:mb-4"
        >
          // Core Engineering Philosophy
        </motion.div>

        {/* Large Clean Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-snug max-w-4xl"
        >
          Full-Stack Systems.{' '}
          <span className="text-shiny">Production Scale.</span>{' '}
          <span className="text-slate-400 font-normal">Intuitive UX.</span>
        </motion.h2>

        {/* Sub-statement */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-xs sm:text-sm max-w-lg mt-4 sm:mt-5 leading-relaxed font-normal"
        >
          Bridging high-performance Node.js APIs &amp; MongoDB architectures with fluid, responsive React interfaces.
        </motion.p>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Palette, Code, Server, Database, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'IDEA & SCOPE',
      desc: 'Defining core architecture, target user flows, and product requirements.',
      icon: Lightbulb,
    },
    {
      num: '02',
      title: 'DESIGN SYSTEM',
      desc: 'Crafting responsive UI wireframes, color tokens, and micro-interactions.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'FRONTEND DEV',
      desc: 'Building high-performance React & Next.js interfaces with WebGL & Tailwind.',
      icon: Code,
    },
    {
      num: '04',
      title: 'BACKEND & APIs',
      desc: 'Engineering Node & Express REST APIs with JWT authentication and payment gateways.',
      icon: Server,
    },
    {
      num: '05',
      title: 'DATABASE OPTIMIZATION',
      desc: 'Structuring MongoDB Atlas schemas, aggregation pipelines, and indexing.',
      icon: Database,
    },
    {
      num: '06',
      title: 'DEPLOY & SHIP',
      desc: 'Shipping automated CI/CD builds to Vercel & Render with custom domain setup.',
      icon: Rocket,
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0A0A0A] border-t border-[#CCFF00]/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#CCFF00]/2 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-[11px] sm:text-xs mb-3 bg-[#CCFF00]/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / DEVELOPMENT PIPELINE</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            ENGINEERING <span className="text-shiny">PROCESS</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-[#A0A0A0] mt-3 max-w-xl font-light">
            A structured 6-step engineering pipeline for delivering production-ready web products.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-7 rounded-2xl border border-[#CCFF00]/12 bg-[#141414] flex flex-col justify-between hover:border-[#CCFF00]/35 hover:shadow-[0_0_25px_rgba(204,255,0,0.06)] transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-5 border-b border-[#CCFF00]/10 pb-4">
                  <div className="p-2.5 rounded-xl bg-[#CCFF00]/8 border border-[#CCFF00]/20 text-[#CCFF00] group-hover:bg-[#CCFF00]/15 transition-colors">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-syne font-black text-2xl text-[#2A2A2A] group-hover:text-[#CCFF00] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-base sm:text-lg text-white mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="font-mono text-xs text-[#A0A0A0] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

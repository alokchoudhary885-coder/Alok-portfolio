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
    <section className="relative py-24 px-4 md:px-8 bg-[#030712] border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / DEVELOPMENT PROCESS</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            How I <span className="text-gradient-purple">Build & Ship</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            A structured 6-step engineering pipeline for delivering production-ready web products.
          </p>
        </div>

        {/* 6 Steps Grid (Strict 1-Line Descriptions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl glass-panel border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-syne font-black text-2xl text-cyan-400/40">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-base text-white mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className="font-mono text-xs text-slate-400 leading-relaxed font-light">
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

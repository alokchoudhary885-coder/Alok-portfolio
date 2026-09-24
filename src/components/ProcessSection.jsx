import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Palette, Code, Server, Database, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Idea & Scope',
      desc: 'Defining core architecture, target user flows, and product requirements.',
      icon: Lightbulb,
    },
    {
      num: '02',
      title: 'Design System',
      desc: 'Crafting responsive UI wireframes, color tokens, and micro-interactions.',
      icon: Palette,
    },
    {
      num: '03',
      title: 'Frontend Dev',
      desc: 'Building high-performance React & Next.js interfaces with WebGL & Tailwind.',
      icon: Code,
    },
    {
      num: '04',
      title: 'Backend & APIs',
      desc: 'Engineering Node & Express REST APIs with JWT authentication and payment gateways.',
      icon: Server,
    },
    {
      num: '05',
      title: 'Database Optimization',
      desc: 'Structuring MongoDB Atlas schemas, aggregation pipelines, and indexing.',
      icon: Database,
    },
    {
      num: '06',
      title: 'Deploy & Ship',
      desc: 'Shipping automated CI/CD builds to Vercel & Render with custom domain setup.',
      icon: Rocket,
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs mb-3 bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / Development Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Engineering <span className="text-shiny">Process</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 max-w-xl font-normal leading-relaxed">
            A structured 6-step engineering pipeline for delivering production-ready web products.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-200 shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-bold text-xl text-slate-600 group-hover:text-blue-400 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-semibold text-base sm:text-lg text-white mb-1.5 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
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

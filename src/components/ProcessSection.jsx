import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code, Server, Database, Rocket } from 'lucide-react';
import ThreeDVisual from './ThreeDVisual';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Idea & Scope',
      desc: 'Architecture, user flows & product requirements.',
      icon: Lightbulb,
      modelType: 'lightbulb',
    },
    {
      num: '02',
      title: 'Design System',
      desc: 'Responsive UI, design systems & micro-interactions.',
      icon: Palette,
      modelType: 'palette',
    },
    {
      num: '03',
      title: 'Frontend Dev',
      desc: 'React & Next.js interfaces with WebGL & Tailwind.',
      icon: Code,
      modelType: 'browser',
    },
    {
      num: '04',
      title: 'Backend & APIs',
      desc: 'Node & Express APIs, authentication & payments.',
      icon: Server,
      modelType: 'server',
    },
    {
      num: '05',
      title: 'Database Optimization',
      desc: 'MongoDB schemas, aggregation & indexing.',
      icon: Database,
      modelType: 'database',
    },
    {
      num: '06',
      title: 'Deploy & Ship',
      desc: 'CI/CD deployment to Vercel & Render.',
      icon: Rocket,
      modelType: 'rocket',
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            How I <span className="text-shiny">Work</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 max-w-xl font-normal leading-relaxed">
            From idea to production-ready product.
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
                {/* Top row: icon + step number */}
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono font-bold text-xl text-slate-600 group-hover:text-blue-400 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Content with 3D Object placed naturally on the right */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0 pr-1">
                    <h3 className="font-semibold text-base sm:text-lg text-white mb-1.5 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Clean 3D Visual with soft studio lighting */}
                  <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 -mt-1 -mr-2">
                    <ThreeDVisual type={step.modelType} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

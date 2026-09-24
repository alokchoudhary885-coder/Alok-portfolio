import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Briefcase, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      period: 'JUN 2026 – PRESENT',
      role: 'FULL-STACK DEVELOPMENT INTERN',
      company: 'Aurika Infotech',
      location: 'Remote',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: [
        'Developing MERN stack web applications using React.js, Node.js, Express.js, and MongoDB.',
        'Building RESTful APIs, implementing authentication, and integrating databases.',
        'Working on frontend-backend integration, debugging, and code refactoring.'
      ]
    },
    {
      period: '2026',
      role: 'WEB DEVELOPMENT INTERN',
      company: 'Aeonaxy Technologies Pvt. Ltd.',
      location: 'Remote',
      tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
      highlights: [
        'Contributed to responsive web interface development using React.js, JavaScript, HTML, and CSS.',
        'Worked on reusable UI components, frontend functionality, and API integration.',
        'Enhanced responsive design and cross-browser performance.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#04060b] border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 bg-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 / PROFESSIONAL TIMELINE</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            WORK <span className="text-shiny">EXPERIENCE</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-3 font-light">
            Software development internships &amp; engineering contributions.
          </p>
        </div>

        {/* Editorial Timeline Items */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#090d16] hover:border-white/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 shrink-0 mt-1">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider block">
                      {exp.period}
                    </span>
                    <h3 className="font-syne font-bold text-xl sm:text-2xl text-white mt-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-300 mt-1">
                      <span className="font-semibold text-slate-200">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
                  className="px-4 py-2 rounded-xl border border-white/15 hover:border-cyan-400 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-all self-start sm:self-center bg-white/5"
                >
                  <span>{expandedIndex === idx ? 'Hide Highlights' : 'View Highlights'}</span>
                  {expandedIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {exp.tags.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-md font-mono text-xs bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Expandable Technical Highlights */}
              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/10 space-y-2.5 font-mono text-xs text-slate-300"
                  >
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 font-bold shrink-0">▹</span>
                        <span className="leading-relaxed font-light">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

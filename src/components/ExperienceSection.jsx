import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Briefcase, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      period: 'JUN 2026 – PRESENT',
      role: 'Full-Stack Development Intern',
      company: 'Aurika Infotech',
      location: 'Remote',
      isCurrent: true,
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      highlights: [
        'Developing MERN stack web applications using React.js, Node.js, Express.js, and MongoDB.',
        'Building RESTful APIs, implementing authentication, and integrating databases.',
        'Working on frontend-backend integration, debugging, and code refactoring.'
      ]
    },
    {
      period: '2026',
      role: 'Web Development Intern',
      company: 'Aeonaxy Technologies Pvt. Ltd.',
      location: 'Remote',
      isCurrent: false,
      tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
      highlights: [
        'Contributed to responsive web interface development using React.js, JavaScript, HTML, and CSS.',
        'Worked on reusable UI components, frontend functionality, and API integration.',
        'Enhanced responsive design and cross-browser performance.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs mb-3 bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 / Professional Timeline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Work <span className="text-shiny">Experience</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 font-normal leading-relaxed">
            Software development internships &amp; engineering contributions.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                exp.isCurrent
                  ? 'bg-slate-900/60 border-blue-500/30 shadow-md'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl border shrink-0 mt-0.5 ${
                    exp.isCurrent
                      ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400'
                  }`}>
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-blue-400 font-medium">
                        {exp.period}
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg sm:text-xl text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
                      <span className="font-medium text-white">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all self-start sm:self-center bg-slate-900/80"
                >
                  <span>{expandedIndex === idx ? 'Hide Details' : 'View Details'}</span>
                  {expandedIndex === idx ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3.5">
                {exp.tags.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md text-xs bg-slate-950/80 border border-slate-800 text-slate-300 font-mono text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Expandable Highlights */}
              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-3.5 border-t border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300"
                  >
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold shrink-0 mt-0.5">▸</span>
                        <span className="leading-relaxed font-normal">{item}</span>
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

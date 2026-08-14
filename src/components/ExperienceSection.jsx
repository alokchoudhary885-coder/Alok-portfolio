import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

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
    <section id="experience" className="relative py-24 px-4 md:px-8 bg-[#030712] border-t border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 / SOFTWARE INTERNSHIPS</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            Work <span className="text-gradient-purple">Experience</span>
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-cyan-400 font-bold block">
                      {exp.period}
                    </span>
                    <h3 className="font-syne font-bold text-lg text-white">
                      {exp.role}
                    </h3>
                    <span className="font-mono text-xs text-slate-300">
                      {exp.company} • {exp.location}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
                  className="px-4 py-2 rounded-xl glass-panel border border-white/15 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-all self-start sm:self-auto"
                >
                  <span>{expandedIndex === idx ? 'Hide Details' : 'View Details'}</span>
                  {expandedIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {exp.tags.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-md font-mono text-[11px] bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Expandable Details */}
              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/10 space-y-2 font-mono text-xs text-slate-300"
                  >
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>{item}</span>
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

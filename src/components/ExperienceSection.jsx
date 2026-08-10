import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Full Stack Development Intern',
      company: 'Aurika Infotech',
      period: 'Jun 2026 – Present',
      status: 'CURRENT ROLE',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
      accent: '#a855f7',
      work: [
        'Developing scalable full-stack MERN applications from architecture to deployment.',
        'Building RESTful APIs with secure JWT authentication and cookie management.',
        'Integrating MongoDB Atlas databases and executing optimized Mongoose queries.',
        'Bridging frontend React interfaces with backend controllers for seamless user flow.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'Aeonaxy Technologies',
      period: '2026',
      status: 'COMPLETED',
      tech: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST APIs'],
      accent: '#ff5500',
      work: [
        'Built responsive web interfaces and modular, reusable React components.',
        'Integrated third-party REST APIs and handled asynchronous state updates.',
        'Performed cross-browser debugging and implemented layout accessibility optimizations.',
        'Enhanced UI performance and code maintainability across client projects.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-28 px-4 md:px-8 bg-[#06070a] bg-noise overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-xs text-purple-400 mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / EXPERIENCE</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-extrabold text-white tracking-tight">
            WORK <span className="text-gradient-purple">TIMELINE</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2">
            Software engineering internships building real-world MERN applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="p-8 rounded-3xl glass-card-purple border border-white/10 hover:border-purple-500/50 transition-all duration-300 relative group interactive-card flex flex-col justify-between"
            >
              <div 
                className="absolute top-0 left-8 right-8 h-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: exp.accent }}
              />

              <div>
                <div className="flex items-center justify-between mb-6 pt-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>

                  <span 
                    className="font-mono text-[10px] px-3 py-1 rounded-full bg-white/5 border font-bold"
                    style={{ borderColor: exp.accent, color: exp.accent }}
                  >
                    {exp.status}
                  </span>
                </div>

                <h3 className="font-syne text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {exp.role}
                </h3>
                
                <div className="font-mono text-sm font-semibold text-slate-300 mb-6 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" style={{ color: exp.accent }} />
                  <span>{exp.company}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs text-slate-300">
                  {exp.work.map((w, i) => (
                    <div key={i} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: exp.accent }} />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>INTERNSHIP VERIFIED</span>
                <span className="text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

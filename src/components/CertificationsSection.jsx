import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ExternalLink } from 'lucide-react';

export default function CertificationsSection() {
  const credentials = [
    {
      id: '01',
      title: 'MERN Stack / Full Stack Web Development',
      issuer: 'Web Development Certification',
      year: '2026',
      badge: 'VERIFIED CREDENTIAL',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: '02',
      title: 'Java Programming & Data Structures',
      issuer: 'Computer Science Fundamentals',
      year: '2026',
      badge: 'CORE DSA',
      tags: ['Java', 'Algorithms', 'OOPs', 'Problem Solving'],
    },
    {
      id: '03',
      title: 'Git & GitHub — Version Control',
      issuer: 'Developer Tools & Workflows',
      year: '2026',
      badge: 'DEVOPS WORKFLOW',
      tags: ['Git', 'GitHub', 'CI/CD', 'Collaboration'],
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#090d16] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs mb-3 bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 / Verified Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Learning &amp; <span className="text-shiny">Credentials</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 font-normal leading-relaxed">
            Continuous technical learning, computer science foundations &amp; verified certifications.
          </p>
        </div>

        {/* 3 Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-200 shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3 font-mono">
                  <span className="font-bold text-2xl text-slate-500 group-hover:text-blue-400 transition-colors">
                    {item.id}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                    [{item.year}]
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider mb-2.5 border border-blue-500/30 text-blue-400 bg-blue-500/10">
                  {item.badge}
                </div>

                <h3 className="font-semibold text-base sm:text-lg text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 font-normal">
                  {item.issuer}
                </p>

                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                  {item.tags.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-slate-800 text-xs">
                <a
                  href="#contact"
                  className="text-blue-400 hover:text-blue-300 flex items-center justify-between font-medium transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                    <span>Accredited</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ExternalLink } from 'lucide-react';

export default function CertificationsSection() {
  const credentials = [
    {
      id: '01',
      title: 'MERN Stack / Full Stack Web Development',
      issuer: 'Web Development Certification',
      year: '2026',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      id: '02',
      title: 'Java Programming & Data Structures',
      issuer: 'Computer Science Fundamentals',
      year: '2026',
      tags: ['Java', 'Algorithms', 'OOPs', 'Problem Solving'],
    },
    {
      id: '03',
      title: 'Git & GitHub — Version Control',
      issuer: 'Developer Tools & Workflows',
      year: '2026',
      tags: ['Git', 'GitHub', 'CI/CD', 'Collaboration'],
    }
  ];

  return (
    <section className="relative py-24 px-4 md:px-8 bg-[#030712] border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>12 / LEARNING & CREDENTIALS</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            Learning & <span className="text-gradient-purple">Credentials</span>
          </h2>
        </div>

        {/* 3 Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl glass-panel border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3 font-mono">
                  <span className="font-syne font-black text-2xl text-cyan-400">
                    {item.id}
                  </span>
                  <span className="text-xs text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-base text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-slate-400 mb-4 font-light">
                  {item.issuer}
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {item.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs">
                <a
                  href="#contact"
                  className="text-cyan-400 hover:text-white flex items-center justify-between font-bold transition-colors"
                >
                  <span>VIEW CREDENTIAL</span>
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

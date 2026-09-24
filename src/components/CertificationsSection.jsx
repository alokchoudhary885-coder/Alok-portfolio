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
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#0A0A0A] border-t border-[#CCFF00]/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#CCFF00]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-[11px] sm:text-xs mb-3 bg-[#CCFF00]/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 / VERIFIED CREDENTIALS</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            LEARNING & <span className="text-shiny">CREDENTIALS</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#A0A0A0] mt-3 font-light">
            Continuous technical learning, computer science foundations & verified certifications.
          </p>
        </div>

        {/* 3 Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {credentials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-7 rounded-2xl border border-[#CCFF00]/15 bg-[#141414] flex flex-col justify-between hover:border-[#CCFF00]/40 hover:shadow-[0_0_30px_rgba(204,255,0,0.08)] transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-5 border-b border-[#CCFF00]/10 pb-4 font-mono">
                  <span className="font-syne font-black text-3xl text-white group-hover:text-[#CCFF00] transition-colors">
                    {item.id}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#CCFF00]/8 border border-[#CCFF00]/20 text-[#CCFF00] font-semibold">
                    [{item.year}]
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider mb-3 border border-[#CCFF00]/30 text-[#CCFF00] bg-[#CCFF00]/8">
                  {item.badge}
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#A0A0A0] mb-5 font-light">
                  {item.issuer}
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {item.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded-md bg-[#CCFF00]/5 border border-[#CCFF00]/15 text-[#A0A0A0]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#CCFF00]/10 font-mono text-xs">
                <a
                  href="#contact"
                  className="text-[#CCFF00] hover:text-white flex items-center justify-between font-bold transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>ACCREDITED</span>
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

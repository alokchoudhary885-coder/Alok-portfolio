import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      id: '01',
      title: 'MERN STACK / FULL STACK DEVELOPMENT',
      issuer: 'Full Stack Engineering Specialization',
      tech: 'React, Node, Express, MongoDB, REST APIs',
      accent: '#a855f7'
    },
    {
      id: '02',
      title: 'JAVA PROGRAMMING & DSA',
      issuer: 'Data Structures & Algorithms in Java',
      tech: 'OOP, Collections, Searching, Sorting, Arrays',
      accent: '#22c55e'
    },
    {
      id: '03',
      title: 'GIT & GITHUB VERSION CONTROL',
      issuer: 'Modern Software Collaboration',
      tech: 'Git CLI, Branching, Pull Requests, CI/CD Workflow',
      accent: '#3b82f6'
    }
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 bg-[#06070a] bg-noise border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-xs text-purple-400 mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>11 / CERTIFICATIONS</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            VERIFIED <span className="text-gradient-purple">CREDENTIALS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl glass-card-purple border border-white/10 hover:border-purple-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" style={{ color: cert.accent }} />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500">{cert.id}</span>
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="font-mono text-xs text-slate-400 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-slate-300 font-light text-xs leading-relaxed mb-4">
                  {cert.tech}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5" style={{ color: cert.accent }} />
                  VERIFIED CREDENTIAL
                </span>
                <span style={{ color: cert.accent }} className="font-bold">PASSED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

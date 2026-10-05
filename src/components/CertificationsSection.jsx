import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, BarChart2, Trophy, Code2, ExternalLink } from 'lucide-react';

const CERTS = [
  {
    id: '01',
    icon: Cloud,
    badge: 'CLOUD',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    iconColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    title: 'AWS Certified Developer Associate Prep',
    issuer: 'MindLuster',
    date: 'Mar 2026',
    credential: '05893ef6',
    tags: ['AWS Lambda', 'Application Deployment', 'Cloud'],
  },
  {
    id: '02',
    icon: Code2,
    badge: 'WEB DEV',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    title: 'Web Development',
    issuer: 'MindLuster',
    date: 'Sep 2025',
    credential: '8bd35f5a',
    tags: ['React.js', 'Front-End Development', 'HTML/CSS'],
  },
  {
    id: '03',
    icon: Cloud,
    badge: 'CLOUD',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    title: 'Google Cloud Certificate',
    issuer: 'Simplilearn Education',
    date: 'Sep 2025',
    credential: null,
    tags: ['Google Cloud', 'Cloud Computing', 'GCP'],
  },
  {
    id: '04',
    icon: BarChart2,
    badge: 'DATA & BI',
    badgeColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    iconColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    title: 'Microsoft Power BI — Data Visualization & Business Intelligence',
    issuer: 'Office Master by be10X',
    date: 'Sep 2025',
    credential: null,
    tags: ['Power BI', 'Data Visualization', 'Business Intelligence'],
  },
  {
    id: '05',
    icon: Trophy,
    badge: 'SPORTS FEST',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    title: 'Vanquish',
    issuer: 'Global Institute of Technology Jaipur',
    date: 'Nov 2024',
    credential: null,
    tags: ['Intra-College Sports Fest', 'Leadership', 'Competition'],
  },
  {
    id: '06',
    icon: Award,
    badge: 'HACKATHON',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    title: 'CodeFiesta Hackathon 3.0',
    issuer: 'Global Institute of Technology Jaipur',
    date: 'Oct 2024',
    credential: null,
    tags: ['Hackathon', 'Problem Solving', 'Engineering'],
  },
];

export default function CertificationsSection() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Certifications &amp; <span className="text-shiny">Achievements</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2.5 font-normal leading-relaxed">
            Professional certifications, technical learning &amp; competition achievements.
          </p>
        </div>

        {/* 3-column cert cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-200 shadow-sm group cursor-default"
              >
                {/* Top row: icon + badge + number */}
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                    <div className={`p-2.5 rounded-xl border ${cert.iconColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-mono font-semibold uppercase tracking-wider ${cert.badgeColor}`}>
                        {cert.badge}
                      </span>
                      <span className="font-mono text-sm font-bold text-slate-600 group-hover:text-slate-400 transition-colors">
                        {cert.id}
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <span className="text-[11px] font-mono text-slate-500 font-medium">{cert.date}</span>

                  {/* Title */}
                  <h3 className="font-semibold text-base text-white mt-1.5 mb-1 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs text-blue-400 mb-3 font-medium">{cert.issuer}</p>

                  {/* Credential ID */}
                  {cert.credential && (
                    <p className="text-[10px] font-mono text-slate-500 mb-3">
                      ID: <span className="text-slate-400">{cert.credential}</span>
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    {cert.tags.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

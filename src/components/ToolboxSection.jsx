import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Server, Database, Cpu, Wrench, CheckCircle2 } from 'lucide-react';

export default function ToolboxSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const services = [
    {
      id: 'fullstack',
      category: 'Backend',
      title: 'Full-Stack Web Application Development',
      subtitle: 'MERN Stack & Scalable Systems',
      price: 'Production Ready',
      icon: Server,
      accent: '#00f0ff',
      features: [
        'React.js Frontend & Next.js SSR',
        'Node.js & Express RESTful APIs',
        'MongoDB Atlas & Database Optimization',
        'JWT Auth & 6-Digit Mobile OTP',
        'Razorpay & Cloudinary Integration'
      ]
    },
    {
      id: 'frontend',
      category: 'Frontend',
      title: 'Responsive UI / UX & WebGL Graphics',
      subtitle: 'Modern Clean Frontend Interfaces',
      price: 'High Performance',
      icon: Code,
      accent: '#3b82f6',
      features: [
        'Tailwind CSS & Custom Design Tokens',
        'Three.js & WebGL 3D Particle Grids',
        'Framer Motion & GSAP Animations',
        '100% Mobile & Cross-Browser Responsive',
        'SEO Best Practices & Fast Load Times'
      ]
    },
    {
      id: 'dsa',
      category: 'Languages',
      title: 'Java & Data Structures Problem Solving',
      subtitle: 'Clean Algorithms & OOPs Code',
      price: '150+ Solved',
      icon: Cpu,
      accent: '#a855f7',
      features: [
        'Object-Oriented Programming (OOPs)',
        'Data Structures (Trees, Graphs, Dynamic Programming)',
        'SQL & Relational Database Queries',
        'Clean Modular Code Architecture',
        'Git & GitHub Version Control'
      ]
    }
  ];

  const techToolbox = [
    { name: 'React.js', level: 'Advanced', category: 'Frontend', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
    { name: 'Node.js', level: 'Advanced', category: 'Backend', color: 'text-green-400 border-green-500/30 bg-green-500/10' },
    { name: 'Express.js', level: 'Advanced', category: 'Backend', color: 'text-slate-200 border-slate-500/30 bg-slate-500/10' },
    { name: 'MongoDB', level: 'Advanced', category: 'Database', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
    { name: 'Java', level: 'Proficient', category: 'Languages', color: 'text-orange-400 border-orange-500/30 bg-orange-500/10' },
    { name: 'JavaScript (ES6+)', level: 'Advanced', category: 'Frontend', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10' },
    { name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
    { name: 'REST APIs', level: 'Advanced', category: 'Backend', color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
    { name: 'Three.js / WebGL', level: 'Intermediate', category: 'Frontend', color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
    { name: 'Git & GitHub', level: 'Advanced', category: 'Tools', color: 'text-red-400 border-red-500/30 bg-red-500/10' },
    { name: 'Vercel / Render', level: 'Advanced', category: 'Tools', color: 'text-white border-white/30 bg-white/10' },
    { name: 'PostgreSQL / SQL', level: 'Intermediate', category: 'Database', color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Languages', 'Tools'];

  const filteredTools = activeCategory === 'All'
    ? techToolbox
    : techToolbox.filter(t => t.category === activeCategory);

  return (
    <section id="toolbox" className="relative py-28 px-4 md:px-8 bg-[#030712] border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / TECH STACK & SERVICES</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            Our <span className="text-gradient-purple">Services & Toolbox</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            Comprehensive digital solutions and specialized technical capabilities to build robust web applications.
          </p>
        </div>

        {/* 3-Column Services Cards (TheSiniySky Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-7 glass-panel border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 shadow-2xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <srv.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {srv.price}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-xl text-white mb-2 leading-tight">
                  {srv.title}
                </h3>
                <p className="font-mono text-xs text-slate-400 mb-6">
                  {srv.subtitle}
                </p>

                <div className="space-y-3 border-t border-white/10 pt-5 font-mono text-xs text-slate-300">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <a
                  href="#contact"
                  className="w-full py-2.5 rounded-xl glass-panel border border-white/15 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <span>INQUIRE SERVICE</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Filter Pills */}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 rounded-full glass-panel border border-white/10 bg-[#0b0f19]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-panel border border-white/10 bg-[#0b0f19]/60 hover:border-cyan-500/40 transition-all flex flex-col items-start gap-1"
              >
                <span className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold border ${tool.color}`}>
                  {tool.name}
                </span>
                <span className="font-mono text-[11px] text-slate-400 mt-1">
                  {tool.level} • {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

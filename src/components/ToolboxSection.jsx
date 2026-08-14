import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Server, Database, Cpu, Wrench, CheckCircle2, Layout, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function ToolboxSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const services = [
    {
      id: 'fullstack-app',
      category: 'Full-Stack',
      title: 'Full-Stack Web Application Development',
      subtitle: 'Complete MERN Stack Ecosystems',
      badge: 'Most Popular',
      isPopular: true,
      icon: Server,
      accent: '#00f0ff',
      features: [
        'MERN Stack (MongoDB, Express, React, Node.js)',
        '25+ RESTful API Endpoints & JWT Authentication',
        'Payment Gateway Integration (Razorpay Checkout)',
        'Gmail SMTP 6-Digit OTP Verification & Roles',
        'Cloud Database (MongoDB Atlas) & Deployment'
      ]
    },
    {
      id: 'landing-page',
      category: 'Frontend',
      title: 'Modern Landing Page & UI/UX Development',
      subtitle: 'High-Converting Web Experiences',
      badge: 'Fast Delivery',
      icon: Layout,
      accent: '#3b82f6',
      features: [
        'React.js, Next.js & Tailwind CSS Architecture',
        'Three.js & WebGL 3D Interactive Backgrounds',
        'Framer Motion & GSAP Smooth Micro-Animations',
        '100% Mobile & Cross-Browser Responsive',
        'Core Web Vitals & Fast Loading Speed'
      ]
    },
    {
      id: 'maintenance',
      category: 'Support',
      title: 'Website Maintenance, Bug Fixing & Support',
      subtitle: 'Performance Optimization & Code Audit',
      badge: 'Reliable Support',
      icon: ShieldCheck,
      accent: '#a855f7',
      features: [
        'Bug Debugging, Refactoring & Code Cleanup',
        'API Integration & Third-Party Service Hookup',
        'SEO Best Practices & Meta Tag Optimization',
        'Vercel & Render Cloud Hosting Setup',
        'Continuous Technical Support & Updates'
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
            <span>04 / SERVICES & WHAT I CAN BUILD FOR YOU</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            Our <span className="text-gradient-purple">Services & Technical Capabilities</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            Comprehensive digital solutions to help startups, businesses, and clients build fast, modern, and scalable web products.
          </p>
        </div>

        {/* 3-Column Services Cards (TheSiniySky Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -6 }}
              className={`rounded-3xl p-7 glass-panel backdrop-blur-xl flex flex-col justify-between transition-all duration-300 shadow-2xl relative group ${
                srv.isPopular
                  ? 'border-2 border-cyan-500/60 bg-[#0b0f19]/95 shadow-[0_0_30px_rgba(0,240,255,0.25)]'
                  : 'border border-white/10 bg-[#0b0f19]/80 hover:border-cyan-500/50'
              }`}
            >
              {srv.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500 text-black font-mono text-[11px] font-extrabold tracking-wider uppercase shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                  {srv.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <srv.icon className="w-6 h-6" />
                  </div>
                  {!srv.isPopular && (
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {srv.badge}
                    </span>
                  )}
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
                  className={`w-full py-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    srv.isPopular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                      : 'glass-panel border border-white/15 hover:border-cyan-400 text-slate-200 hover:text-cyan-400'
                  }`}
                >
                  <span>GET STARTED</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Server, Layout, ShieldCheck, Code2, ArrowRight, CheckCircle2, Zap, HelpCircle } from 'lucide-react';

export default function ToolboxSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const workCards = [
    {
      id: 'fullstack',
      title: 'Full-Stack Web Application',
      subtitle: 'Complete MERN Stack Ecosystems',
      startingPrice: '$150',
      isPopular: true,
      badge: 'POPULAR CHOICE',
      icon: Server,
      accentColor: 'from-cyan-500 to-blue-600',
      glowShadow: 'shadow-[0_0_30px_rgba(0,240,255,0.25)]',
      features: [
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'Authentication, JWT & Role-Based Access Control',
        'Scalable REST APIs & Database Integration',
        'Payment Gateway (Razorpay) & Cloud Uploads',
        'Full Cloud Deployment (Vercel / Render)'
      ]
    },
    {
      id: 'portfolio-site',
      title: 'Modern Portfolio Website',
      subtitle: 'Interactive Personal & Developer Portfolios',
      startingPrice: '$100',
      badge: 'AWWWARDS STYLE',
      icon: Code2,
      accentColor: 'from-blue-500 to-purple-600',
      glowShadow: 'shadow-[0_0_25px_rgba(59,130,246,0.2)]',
      features: [
        'Premium Personal & Developer Portfolio Design',
        'Responsive UI/UX Across Desktop & Mobile',
        'GSAP, Three.js 3D & Modern Micro-Animations',
        'SEO Meta Tags & High Performance Scoring',
        'Automated Vercel Deployment & Domain Setup'
      ]
    },
    {
      id: 'landing-page',
      title: 'Business / Landing Page',
      subtitle: 'High-Converting Corporate & Startup Sites',
      startingPrice: '$80',
      badge: 'FAST DELIVERY',
      icon: Layout,
      accentColor: 'from-purple-500 to-pink-600',
      glowShadow: 'shadow-[0_0_25px_rgba(168,85,247,0.2)]',
      features: [
        'Modern Responsive Design (React / Next.js / Tailwind)',
        'Conversion-Focused UI & Clear Call-To-Actions',
        'Interactive Contact Form & Lead Generation',
        'Cross-Browser Tested & Mobile Optimized',
        'Fast Loading Speeds & Core Web Vitals'
      ]
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance & Bug Fixing',
      subtitle: 'Performance Optimization & Code Cleanup',
      startingPrice: '$40',
      badge: 'QUICK TURNAROUND',
      icon: ShieldCheck,
      accentColor: 'from-emerald-500 to-teal-600',
      glowShadow: 'shadow-[0_0_25px_rgba(16,185,129,0.2)]',
      features: [
        'Comprehensive Bug Fixing & Code Refactoring',
        'LCP / CWV Speed & Performance Optimization',
        'REST API Integration & Endpoint Hookup',
        'Database Optimization & Security Patching',
        'Deployment Support & Continuous Updates'
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
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-4 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / SELECTED WORK & SERVICES</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            My Work & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Services Pricing</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Professional web development services tailored to startups, businesses, and personal brands with clear estimated starting pricing.
          </p>
        </div>

        {/* 4-Card Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workCards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-6 sm:p-7 glass-panel backdrop-blur-xl flex flex-col justify-between transition-all duration-300 relative group border ${
                card.isPopular
                  ? `border-cyan-500/60 bg-[#0b0f19]/95 ${card.glowShadow}`
                  : 'border-white/10 bg-[#0b0f19]/80 hover:border-cyan-500/40 hover:bg-[#0b0f19]'
              }`}
            >
              {card.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-cyan-500 text-black font-mono text-[10px] font-black tracking-wider uppercase shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                  {card.badge}
                </div>
              )}

              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <card.icon className="w-5 h-5" />
                  </div>
                  {!card.isPopular && (
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 font-semibold">
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-syne font-bold text-lg sm:text-xl text-white mb-1.5 leading-snug">
                  {card.title}
                </h3>
                <p className="font-mono text-xs text-slate-400 mb-5 font-light">
                  {card.subtitle}
                </p>

                {/* Prominent Starting Price Display */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-6 flex flex-col items-start">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                    ESTIMATED PRICING
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-mono text-xs text-slate-400 font-medium">Starting at</span>
                    <span className="font-syne font-extrabold text-2xl text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                      {card.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Feature Bullets */}
                <div className="space-y-2.5 border-t border-white/10 pt-5 font-mono text-xs text-slate-300">
                  {card.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get a Quote Button */}
              <div className="mt-8 pt-5 border-t border-white/10">
                <a
                  href="#contact"
                  className={`w-full py-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    card.isPopular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                      : 'glass-panel border border-white/15 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 hover:bg-white/10'
                  }`}
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Option Banner */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl glass-panel border border-cyan-500/30 bg-[#0b0f19]/90 backdrop-blur-xl mb-20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">Need a Custom Quote or Complex Enterprise App?</span>
              <span className="text-slate-400 block mt-0.5">Advanced API architectures, custom microservices, or specific timelines available upon request.</span>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-cyan-400 font-bold shrink-0 transition-all flex items-center gap-1.5"
          >
            <span>Custom Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tech Stack Filter Pills */}
        <div className="flex flex-col items-center">
          <div className="font-mono text-xs text-slate-400 font-bold uppercase tracking-widest mb-6">
            MY TECHNICAL TOOLBOX
          </div>

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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Server, Layout, ShieldCheck, Code2, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function ToolboxSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const workCards = [
    {
      id: 'fullstack',
      title: 'Full-Stack Web Application',
      subtitle: 'Complete MERN Stack Ecosystems',
      startingPrice: '$150+',
      isPopular: true,
      badge: 'BEST FOR STARTUPS',
      icon: Server,
      accentColor: 'text-cyan-400',
      features: [
        'MERN architecture (MongoDB, Express, React, Node)',
        'Authentication + RESTful APIs',
        'Cloud deployment & third-party integrations'
      ]
    },
    {
      id: 'portfolio-site',
      title: 'Modern Portfolio Website',
      subtitle: 'Interactive Personal & Developer Portfolios',
      startingPrice: '$100+',
      badge: 'AWWWARDS STYLE',
      icon: Code2,
      accentColor: 'text-blue-400',
      features: [
        'Custom interactive portfolio design',
        'GSAP, Three.js 3D & smooth animations',
        'Vercel automated deployment & SEO setup'
      ]
    },
    {
      id: 'landing-page',
      title: 'Business / Landing Page',
      subtitle: 'High-Converting Corporate & Startup Sites',
      startingPrice: '$80+',
      badge: 'FAST DELIVERY',
      icon: Layout,
      accentColor: 'text-purple-400',
      features: [
        'React / Next.js / Tailwind CSS design',
        'Conversion-focused UI & lead forms',
        'Cross-browser & mobile optimized'
      ]
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance & Bug Fixing',
      subtitle: 'Performance Optimization & Code Cleanup',
      startingPrice: '$40+',
      badge: 'QUICK TURNAROUND',
      icon: ShieldCheck,
      accentColor: 'text-emerald-400',
      features: [
        'Bug fixing & code refactoring',
        'Core Web Vitals & speed optimization',
        'API integration & endpoint hookup'
      ]
    }
  ];

  const techToolbox = [
    // Frontend Skills
    { name: 'React.js', level: 'Strong', category: 'Frontend', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' },
    { name: 'Next.js', level: 'Intermediate', category: 'Frontend', color: 'text-white border-white/20 bg-white/5' },
    { name: 'JavaScript (ES6+)', level: 'Strong', category: 'Frontend', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5' },
    { name: 'Tailwind CSS', level: 'Strong', category: 'Frontend', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' },
    { name: 'Redux / Zustand', level: 'Strong', category: 'Frontend', color: 'text-purple-400 border-purple-500/30 bg-purple-500/5' },
    { name: 'Three.js / WebGL', level: 'Intermediate', category: 'Frontend', color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
    { name: 'Framer Motion / GSAP', level: 'Strong', category: 'Frontend', color: 'text-pink-400 border-pink-500/30 bg-pink-500/5' },
    { name: 'HTML5 & CSS3', level: 'Strong', category: 'Frontend', color: 'text-orange-400 border-orange-500/30 bg-orange-500/5' },

    // Backend Skills
    { name: 'Node.js', level: 'Strong', category: 'Backend', color: 'text-green-400 border-green-500/30 bg-green-500/5' },
    { name: 'Express.js', level: 'Strong', category: 'Backend', color: 'text-slate-200 border-slate-500/30 bg-slate-500/5' },
    { name: 'RESTful APIs', level: 'Strong', category: 'Backend', color: 'text-purple-400 border-purple-500/30 bg-purple-500/5' },
    { name: 'JWT Authentication', level: 'Strong', category: 'Backend', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/5' },
    { name: 'Razorpay Checkout', level: 'Strong', category: 'Backend', color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
    { name: 'Gmail SMTP / OTP', level: 'Strong', category: 'Backend', color: 'text-red-400 border-red-500/30 bg-red-500/5' },

    // Database & Cloud Storage
    { name: 'MongoDB / Mongoose', level: 'Strong', category: 'Database', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' },
    { name: 'MongoDB Atlas', level: 'Strong', category: 'Database', color: 'text-green-400 border-green-500/30 bg-green-500/5' },
    { name: 'PostgreSQL / SQL', level: 'Intermediate', category: 'Database', color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
    { name: 'Cloudinary Media', level: 'Strong', category: 'Database', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' },

    // Languages
    { name: 'Java (DSA)', level: 'Intermediate', category: 'Languages', color: 'text-orange-400 border-orange-500/30 bg-orange-500/5' },
    { name: 'C++', level: 'Intermediate', category: 'Languages', color: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
    { name: 'SQL', level: 'Intermediate', category: 'Languages', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' },

    // Tools & DevOps
    { name: 'Git & GitHub', level: 'Strong', category: 'Tools', color: 'text-red-400 border-red-500/30 bg-red-500/5' },
    { name: 'Postman API Testing', level: 'Strong', category: 'Tools', color: 'text-orange-400 border-orange-500/30 bg-orange-500/5' },
    { name: 'Vercel / Render', level: 'Strong', category: 'Tools', color: 'text-white border-white/20 bg-white/5' },
    { name: 'VS Code & Web Tools', level: 'Strong', category: 'Tools', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5' }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Languages', 'Tools'];

  const filteredTools = activeCategory === 'All'
    ? techToolbox
    : techToolbox.filter(t => t.category === activeCategory);

  return (
    <section id="toolbox" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#04060b] border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs mb-3 bg-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / SERVICES &amp; PRICING</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-7xl font-black text-white tracking-tight">
            SERVICES &amp; <span className="text-shiny">RATES</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-3 max-w-xl font-light">
            High-performance full-stack web development solutions with clear estimated starting rates.
          </p>
        </div>

        {/* 4-Card Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workCards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 relative group bg-[#090d16] ${
                card.isPopular
                  ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.15)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {card.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-mono text-[9px] font-black tracking-wider uppercase shadow-sm">
                  {card.badge}
                </div>
              )}

              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${card.accentColor}`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  {!card.isPopular && (
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 font-semibold">
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-syne font-bold text-lg text-white mb-1.5 leading-snug">
                  {card.title}
                </h3>
                <p className="font-mono text-xs text-slate-400 mb-5 font-light">
                  {card.subtitle}
                </p>

                {/* Starting Price Box */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-5 flex flex-col items-start font-mono">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                    ESTIMATED RATE
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-xs text-slate-400">Starting at</span>
                    <span className="font-extrabold text-2xl text-cyan-400 tracking-tight">
                      {card.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Feature Bullets */}
                <div className="space-y-2.5 border-t border-white/10 pt-4 font-mono text-xs text-slate-300">
                  {card.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug text-[11px]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get a Quote Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className={`w-full py-2.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    card.isPopular
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-sm'
                      : 'border border-white/15 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 bg-white/5'
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
        <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#090d16] mb-16 sm:mb-20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">Need a Custom Architecture or Enterprise App?</span>
              <span className="text-slate-400 text-xs block mt-0.5 font-light">Custom microservices, bespoke database design, or tight deadlines available upon request.</span>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold shrink-0 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Custom Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Full-Stack Technical Toolbox Grid */}
        <div className="flex flex-col items-center">
          <div className="font-mono text-xs text-slate-400 font-bold uppercase tracking-widest mb-6 text-center">
            // FULL-STACK TECHNICAL TOOLBOX
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8 p-1.5 rounded-full border border-white/10 bg-[#090d16]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-white/10 bg-[#090d16] hover:border-cyan-500/30 transition-all flex flex-col items-start gap-1"
              >
                <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-bold border ${tool.color}`}>
                  {tool.name}
                </span>
                <span className="font-mono text-[10px] text-slate-400 mt-1 truncate w-full">
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

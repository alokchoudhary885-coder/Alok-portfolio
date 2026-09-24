import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Server, Layout, ShieldCheck, Code2, ArrowRight, Zap, Check } from 'lucide-react';

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
      features: [
        'Bug fixing & code refactoring',
        'Core Web Vitals & speed optimization',
        'API integration & endpoint hookup'
      ]
    }
  ];

  const techToolbox = [
    // Frontend
    { name: 'React.js', level: 'Strong', category: 'Frontend' },
    { name: 'Next.js', level: 'Intermediate', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 'Strong', category: 'Frontend' },
    { name: 'Tailwind CSS', level: 'Strong', category: 'Frontend' },
    { name: 'Redux / Zustand', level: 'Strong', category: 'Frontend' },
    { name: 'Three.js / WebGL', level: 'Intermediate', category: 'Frontend' },
    { name: 'Framer Motion / GSAP', level: 'Strong', category: 'Frontend' },
    { name: 'HTML5 & CSS3', level: 'Strong', category: 'Frontend' },

    // Backend
    { name: 'Node.js', level: 'Strong', category: 'Backend' },
    { name: 'Express.js', level: 'Strong', category: 'Backend' },
    { name: 'RESTful APIs', level: 'Strong', category: 'Backend' },
    { name: 'JWT Authentication', level: 'Strong', category: 'Backend' },
    { name: 'Razorpay Checkout', level: 'Strong', category: 'Backend' },
    { name: 'Gmail SMTP / OTP', level: 'Strong', category: 'Backend' },

    // Database
    { name: 'MongoDB / Mongoose', level: 'Strong', category: 'Database' },
    { name: 'MongoDB Atlas', level: 'Strong', category: 'Database' },
    { name: 'PostgreSQL / SQL', level: 'Intermediate', category: 'Database' },
    { name: 'Cloudinary Media', level: 'Strong', category: 'Database' },

    // Languages
    { name: 'Java (DSA)', level: 'Intermediate', category: 'Languages' },
    { name: 'C++', level: 'Intermediate', category: 'Languages' },
    { name: 'SQL', level: 'Intermediate', category: 'Languages' },

    // Tools
    { name: 'Git & GitHub', level: 'Strong', category: 'Tools' },
    { name: 'Postman API Testing', level: 'Strong', category: 'Tools' },
    { name: 'Vercel / Render', level: 'Strong', category: 'Tools' },
    { name: 'VS Code & Web Tools', level: 'Strong', category: 'Tools' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Languages', 'Tools'];

  const filteredTools = activeCategory === 'All'
    ? techToolbox
    : techToolbox.filter(item => item.category === activeCategory);

  return (
    <section id="toolbox" className="relative py-24 sm:py-32 px-5 md:px-8 lg:px-12 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        
        {/* ======================================================== */}
        {/* 4. SERVICES & ESTIMATED PRICING                           */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-xs self-start bg-[#CCFF00]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>04 / SERVICES &amp; PRICING</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Services &amp; Estimated <span className="text-shiny">Pricing</span>
            </h2>
          </div>
          <p className="font-body text-[#A0A0A0] text-sm max-w-md">
            High-performance web development solutions with transparent estimated starting rates.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {workCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-sm p-6 flex flex-col justify-between backdrop-blur-xl transition-all ${
                  card.isPopular
                    ? 'bg-[#141414] border-2 border-[#CCFF00] shadow-[0_0_40px_rgba(204,255,0,0.18)]'
                    : 'bg-[#121212]/90 border border-white/10 hover:border-[#CCFF00]/40'
                }`}
              >
                {/* Popular Badge */}
                {card.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-sm font-mono text-[9px] font-black tracking-wider uppercase ${
                    card.isPopular ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_#CCFF00]' : 'bg-[#222222] text-stone-300 border border-white/10'
                  }`}>
                    {card.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-sm bg-[#161616] border border-white/10 text-[#CCFF00]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-white text-lg mb-1 leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-mono text-xs text-stone-400 mb-5">
                    {card.subtitle}
                  </p>

                  <div className="p-3.5 rounded-sm bg-[#161616] border border-white/8 mb-6">
                    <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                      ESTIMATED RATE
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="font-mono text-xs text-stone-400">Starting at</span>
                      <span className="font-display font-extrabold text-2xl text-[#CCFF00]">
                        {card.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/8 font-mono text-xs text-stone-300">
                    {card.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#CCFF00] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/8">
                  <a
                    href="#contact"
                    className={`w-full py-2.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      card.isPopular
                        ? 'bg-[#CCFF00] hover:bg-[#d6ff1a] text-black shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                        : 'bg-[#181818] hover:bg-[#222222] text-white border border-white/10 hover:border-[#CCFF00]'
                    }`}
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#CCFF00]/30 shadow-[0_0_35px_rgba(204,255,0,0.08)] mb-24">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-sm bg-[#CCFF00]/10 border border-[#CCFF00]/40 text-[#CCFF00] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-display font-bold text-white text-base sm:text-lg block">
                Need a Custom Quote or Complex Enterprise App?
              </span>
              <span className="font-mono text-xs text-[#A0A0A0] mt-1 block">
                Advanced API architectures, custom microservices, or specific timelines available upon request.
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-sm bg-[#CCFF00] hover:bg-[#d6ff1a] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-all"
          >
            <span>Custom Inquiry</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>


        {/* ======================================================== */}
        {/* 5. TECHNICAL TOOLBOX                                     */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-xs self-start bg-[#CCFF00]/5">
            <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>05 / TECHNICAL ARSENAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Battle-tested technologies &amp; <span className="text-shiny">modern paradigms.</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-sm bg-[#121212] border border-white/8 self-start inline-flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.4)]'
                  : 'text-stone-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filterable Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredTools.map((tool, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-sm bg-[#141414] border border-white/8 hover:border-[#CCFF00]/50 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all cursor-default"
            >
              <span className="inline-block px-2 py-0.5 rounded-sm bg-[#CCFF00]/10 border border-[#CCFF00]/30 font-mono text-xs font-semibold text-white mb-2 max-w-full break-words">
                {tool.name}
              </span>
              <span className="block font-mono text-[10px] text-stone-400 uppercase tracking-wider">
                <span className="text-[#CCFF00] font-bold">•</span> {tool.level} • {tool.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

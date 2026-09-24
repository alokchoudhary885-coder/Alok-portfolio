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
    <section id="toolbox" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#090d16] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* ======================================================== */}
        {/* 4. SERVICES & ESTIMATED PRICING                           */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs self-start bg-blue-500/5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 / Services &amp; Pricing</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Services &amp; Estimated <span className="text-shiny">Pricing</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
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
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl p-6 flex flex-col justify-between backdrop-blur-xl transition-all ${
                  card.isPopular
                    ? 'bg-slate-900/90 border border-blue-500/40 shadow-xl shadow-blue-500/10'
                    : 'bg-slate-900/40 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {card.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full font-mono text-[9px] font-bold tracking-wider uppercase ${
                    card.isPopular ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {card.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl border ${card.isPopular ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-slate-800/60 border-slate-700 text-slate-300'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-white text-base sm:text-lg mb-1 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 font-normal">
                    {card.subtitle}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      Estimated Rate
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-xs text-slate-400">Starting at</span>
                      <span className="font-bold text-xl text-blue-400">
                        {card.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                    {card.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <a
                    href="#contact"
                    className={`w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      card.isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                        : 'bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700'
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-md mb-20">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-white text-sm sm:text-base block">
                Need a Custom Quote or Complex Enterprise App?
              </span>
              <span className="text-xs text-slate-400 mt-0.5 block font-normal leading-relaxed">
                Advanced API architectures, custom microservices, or specific timelines available upon request.
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Custom Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>


        {/* ======================================================== */}
        {/* 5. TECHNICAL TOOLBOX                                     */}
        {/* ======================================================== */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs self-start bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / Technical Arsenal</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Battle-tested technologies &amp; <span className="text-shiny">modern paradigms.</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-8 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 self-start inline-flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/30 transition-all"
            >
              <span className="inline-block px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-slate-100 mb-1.5 max-w-full break-words">
                {tool.name}
              </span>
              <span className="block font-mono text-[10px] text-slate-400">
                <span className="text-blue-400 font-semibold">•</span> {tool.level} • {tool.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

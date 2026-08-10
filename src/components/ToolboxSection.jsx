import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

export default function ToolboxSection() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'FRONTEND', 'BACKEND', 'DATABASE', 'LANGUAGES'];

  const techStack = [
    { name: 'React.js', category: 'FRONTEND', level: 'ADVANCED', icon: '⚛️', desc: 'Hooks, Context API, Zustand, Custom Hooks', color: '#00f0ff' },
    { name: 'JavaScript (ES6+)', category: 'FRONTEND', level: 'ADVANCED', icon: '⚡', desc: 'Async/Await, Promises, Closures, DOM manipulation', color: '#f7df1e' },
    { name: 'Tailwind CSS', category: 'FRONTEND', level: 'ADVANCED', icon: '🎨', desc: 'Modern responsive utility layouts & animations', color: '#38bdf8' },
    { name: 'HTML5 & CSS3', category: 'FRONTEND', level: 'ADVANCED', icon: '🌐', desc: 'Semantic layouts, Flexbox, CSS Grid', color: '#e34f26' },
    { name: 'Bootstrap', category: 'FRONTEND', level: 'INTERMEDIATE', icon: '🅱️', desc: 'Grid system & UI components', color: '#7952b3' },

    { name: 'Node.js', category: 'BACKEND', level: 'ADVANCED', icon: '🟢', desc: 'Event loop, asynchronous server architecture', color: '#539e43' },
    { name: 'Express.js', category: 'BACKEND', level: 'ADVANCED', icon: '🚂', desc: 'Middleware, RESTful routing, error handling', color: '#ffffff' },
    { name: 'REST APIs', category: 'BACKEND', level: 'ADVANCED', icon: '🔌', desc: '25+ Endpoints, JSON payloads, HTTP protocols', color: '#ff5500' },
    { name: 'JWT Auth', category: 'BACKEND', level: 'ADVANCED', icon: '🔒', desc: 'Token authorization & secure cookie management', color: '#a855f7' },
    { name: 'CRUD Operations', category: 'BACKEND', level: 'ADVANCED', icon: '⚙️', desc: 'Complete data validation & lifecycle logic', color: '#3b82f6' },

    { name: 'MongoDB', category: 'DATABASE', level: 'ADVANCED', icon: '🍃', desc: 'Mongoose ORM, Aggregations, Atlas Cloud', color: '#47a248' },
    { name: 'MySQL', category: 'DATABASE', level: 'INTERMEDIATE', icon: '🐬', desc: 'Relational schemas, joins, indexing', color: '#00758f' },
    { name: 'PostgreSQL', category: 'DATABASE', level: 'INTERMEDIATE', icon: '🐘', desc: 'Structured SQL queries & constraints', color: '#336791' },

    { name: 'Java', category: 'LANGUAGES', level: 'ADVANCED', icon: '☕', desc: 'OOP, Collections framework, Data Structures', color: '#f89820' },
    { name: 'C++', category: 'LANGUAGES', level: 'ADVANCED', icon: '🚀', desc: 'STL, Pointers, Memory management, Algorithms', color: '#00599c' },
    { name: 'C', category: 'LANGUAGES', level: 'INTERMEDIATE', icon: '🔤', desc: 'Pointers, Arrays, Low-level programming', color: '#a8b9cc' },
    { name: 'SQL', category: 'LANGUAGES', level: 'INTERMEDIATE', icon: '📊', desc: 'Queries, Aggregations, Table relations', color: '#f29111' },
  ];

  const filteredTech = activeCategory === 'ALL' 
    ? techStack 
    : techStack.filter(t => t.category === activeCategory);

  return (
    <section id="toolbox" className="relative py-28 px-4 md:px-8 bg-[#06070a] bg-noise border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-xs text-purple-400 mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / TECH STACK & TOOLBOX</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            THINGS I <span className="text-gradient-purple">BUILD WITH</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            Battle-tested technologies & frameworks used across my full-stack MERN projects
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white font-bold shadow-neon-purple scale-105'
                  : 'glass-panel border border-white/10 text-slate-300 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredTech.map((tech, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              key={tech.name}
              className="p-5 rounded-2xl glass-card-purple border border-white/10 hover:border-purple-500/50 transition-all duration-300 group interactive-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl group-hover:scale-125 transition-transform">{tech.icon}</span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-purple-400">
                    {tech.category}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-lg text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {tech.name}
                </h3>

                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {tech.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <Check className="w-3 h-3 text-green-400" />
                  {tech.level}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">
                  READY
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

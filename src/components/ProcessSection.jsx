import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Compass, Code, Server, Database, Rocket, CheckCircle2 } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    { num: '01', title: 'IDEA & CONCEPT', icon: Lightbulb, desc: 'Analyzing project scope, user requirements, user flows, and core features.', detail: 'Requirements gathering & architecture mapping', accent: '#00f0ff' },
    { num: '02', title: 'DESIGN & UI/UX', icon: Compass, desc: 'Crafting responsive dark-mode layouts, glassmorphism systems, and micro-interactions.', detail: 'Tailwind CSS tokens & typography hierarchy', accent: '#ff5500' },
    { num: '03', title: 'FRONTEND CODE', icon: Code, desc: 'Building modular React components, state management with Zustand, and API integration.', detail: 'Reusable UI components & custom hooks', accent: '#a855f7' },
    { num: '04', title: 'BACKEND & REST API', icon: Server, desc: 'Architecting Node.js/Express REST APIs with JWT auth, OTP verification, and input validation.', detail: 'Middleware security & controller routes', accent: '#00ff66' },
    { num: '05', title: 'DATABASE SCHEMAS', icon: Database, desc: 'Designing optimized MongoDB collections, Mongoose models, and indexing strategies.', detail: 'Data modeling & query efficiency', accent: '#3b82f6' },
    { num: '06', title: 'TEST & DEPLOYMENT', icon: Rocket, desc: 'End-to-end verification, Razorpay integration testing, and deployment to cloud hosts.', detail: 'Vite build optimization & live hosting', accent: '#ec4899' }
  ];

  return (
    <section id="process" className="relative py-28 px-4 md:px-8 bg-[#06070a] bg-noise border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-xs text-purple-400 mb-4 shadow-neon-purple">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 / HOW I BUILD</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            DEVELOPMENT <span className="text-gradient-purple">PIPELINE</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            A structured 6-step engineering process transforming raw concepts into deployed software
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-orange-500 to-cyan-500 opacity-40 transform md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div 
                      className="w-10 h-10 rounded-full bg-[#06070a] border-2 flex items-center justify-center font-mono font-bold text-xs shadow-lg"
                      style={{ borderColor: step.accent, color: step.accent }}
                    >
                      {step.num}
                    </div>
                  </div>

                  <div className="ml-12 md:ml-0 md:w-1/2 pl-0 md:px-8">
                    <div className="p-6 rounded-3xl glass-card-purple border border-white/10 hover:border-purple-500/40 transition-all duration-300 group interactive-card">
                      <div className="flex items-center gap-3 mb-3">
                        <div 
                          className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                          style={{ color: step.accent }}
                        >
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-slate-400">STEP {step.num}</span>
                          <h3 className="font-syne font-bold text-lg text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                        {step.desc}
                      </p>

                      <div className="pt-3 border-t border-white/10 flex items-center gap-2 font-mono text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5" style={{ color: step.accent }} />
                        <span>{step.detail}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

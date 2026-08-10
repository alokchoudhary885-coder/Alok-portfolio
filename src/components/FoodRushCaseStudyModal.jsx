import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Zap, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FoodRushCaseStudyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const features = [
    'Dual Customer & Restaurant Owner Roles',
    '25+ Scalable RESTful API Endpoints',
    'JWT Authentication & Cookie Storage',
    'Zustand Global State Management',
    '6-Digit Mobile OTP Verification (SMTP)',
    'Razorpay Checkout Payment Gateway Integration',
    'Voice Search via Web Speech API',
    'Geolocation Distance Calculation Algorithm',
    'Cloudinary Dynamic Image Upload Pipeline',
    'Restaurant Reviews & Rating Aggregation',
    'Discount Coupons & Promo Code Engine',
    'Live Cart & Itemized Billing Breakdown',
    'Role-Based Access Control (RBAC)',
    'Dark-Mode Responsive Architecture'
  ];

  const techStackBadges = [
    'React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Razorpay', 
    'Cloudinary', 'Web Speech API', 'Zustand', 'JWT', 'Nodemailer', 'Tailwind CSS'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl glass-card-orange rounded-3xl p-6 md:p-10 shadow-2xl my-auto text-white overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍔</span>
              <div>
                <span className="font-mono text-xs text-orange-400 font-bold tracking-wider">
                  06 / FOODRUSH TECHNICAL CASE STUDY
                </span>
                <h2 className="font-syne text-2xl md:text-4xl font-extrabold text-white">
                  FOODRUSH ENGINEERING
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Case Study"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-500 text-black font-bold font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:bg-orange-400 transition-all"
            >
              <span>Live Project Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full glass-panel border border-white/15 hover:border-white/30 text-slate-200 font-mono text-xs flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4 text-orange-400" />
              <span>Source Code</span>
            </a>
          </div>

          {/* System Architecture */}
          <div className="mb-10">
            <h3 className="font-syne text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-400" />
              <span>SYSTEM ARCHITECTURE</span>
            </h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
              A full-stack food delivery ecosystem connecting customers with local restaurant owners. Built for high concurrency, real-time status updates, and secure payment processing.
            </p>

            <div className="p-6 rounded-2xl bg-black/50 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center w-full md:w-auto">
                <span className="text-cyan-400 font-bold block mb-1">FRONTEND LAYER</span>
                <span className="text-slate-300">React.js + Zustand + Tailwind</span>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-400 hidden md:block" />
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center w-full md:w-auto">
                <span className="text-orange-400 font-bold block mb-1">REST API GATEWAY</span>
                <span className="text-slate-300">25+ Express.js Routes & JWT</span>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-400 hidden md:block" />
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center w-full md:w-auto">
                <span className="text-purple-400 font-bold block mb-1">DATABASE & CLOUD</span>
                <span className="text-slate-300">MongoDB Atlas + Cloudinary</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h3 className="font-syne text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-orange-400" />
              <span>TECHNOLOGIES LEVERAGED</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStackBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-orange-400 font-mono text-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Features */}
          <div>
            <h3 className="font-syne text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-orange-400" />
              <span>KEY ENGINEERING HIGHLIGHTS (14+)</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 font-mono text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-all"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

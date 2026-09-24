import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Zap, Layers, ShieldCheck, ArrowRight, ArrowDown } from 'lucide-react';

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-2xl my-auto text-white overflow-hidden max-h-[86vh] overflow-y-auto"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl">🍔</span>
              <div>
                <span className="text-xs text-blue-400 font-mono font-medium block">
                  TECHNICAL CASE STUDY
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  FoodRush Platform Engineering
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Case Study"
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white transition-all shrink-0 ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="https://github.com/alokchoudhary885-coder"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Live Project Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/alokchoudhary885-coder"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs font-medium flex items-center gap-2 transition-all"
            >
              <Github className="w-3.5 h-3.5 text-blue-400" />
              <span>Source Code</span>
            </a>
          </div>

          {/* System Architecture */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400 shrink-0" />
              <span>System Architecture</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed mb-4">
              A full-stack food delivery ecosystem connecting customers with local restaurant owners. Built for high concurrency, real-time status updates, and secure payment processing.
            </p>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center w-full md:w-auto">
                <span className="text-blue-400 font-semibold block mb-0.5">Frontend Layer</span>
                <span className="text-slate-300 text-xs">React.js + Zustand + Tailwind</span>
              </div>
              <ArrowDown className="w-4 h-4 text-blue-400 md:hidden my-1" />
              <ArrowRight className="w-4 h-4 text-blue-400 hidden md:block" />
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center w-full md:w-auto">
                <span className="text-indigo-400 font-semibold block mb-0.5">REST API Gateway</span>
                <span className="text-slate-300 text-xs">25+ Express.js Routes &amp; JWT</span>
              </div>
              <ArrowDown className="w-4 h-4 text-blue-400 md:hidden my-1" />
              <ArrowRight className="w-4 h-4 text-blue-400 hidden md:block" />
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center w-full md:w-auto">
                <span className="text-emerald-400 font-semibold block mb-0.5">Database &amp; Cloud</span>
                <span className="text-slate-300 text-xs">MongoDB Atlas + Cloudinary</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-white mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Technologies Leveraged</span>
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {techStackBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-blue-300 font-mono text-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering Features */}
          <div>
            <h3 className="text-base font-semibold text-white mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Key Engineering Highlights (14+)</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

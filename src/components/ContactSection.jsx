import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, MapPin, Send, CheckCircle, Copy, Check, Github, Linkedin, FileText, Briefcase, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const email = 'alokchoudhary.dev@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputCls = "w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#CCFF00]/15 text-white placeholder-[#505050] focus:outline-none focus:border-[#CCFF00]/50 focus:ring-1 focus:ring-[#CCFF00]/20 transition-all text-xs font-mono";

  return (
    <section id="contact" className="relative py-24 sm:py-36 px-4 sm:px-8 bg-[#0A0A0A] border-t border-[#CCFF00]/10 overflow-hidden">
      {/* Ambient neon glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#CCFF00]/4 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#CCFF00]/2 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-[11px] sm:text-xs mb-4 bg-[#CCFF00]/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / GET IN TOUCH</span>
          </div>

          <h2 className="font-syne font-black text-4xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.95] max-w-4xl">
            LET'S BUILD <br />
            <span className="text-shiny">SOMETHING</span> EXTRAORDINARY.
          </h2>

          <div className="flex flex-wrap items-center gap-2 mt-6 font-mono text-xs text-[#A0A0A0]">
            <Briefcase className="w-4 h-4 text-[#CCFF00] shrink-0" />
            <span>Open for: Full-time software roles • Freelance architectures • Technical collaborations</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">

          {/* Left: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 p-6 sm:p-10 rounded-2xl border border-[#CCFF00]/15 bg-[#141414] shadow-2xl"
          >
            <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="font-mono text-xs text-[#A0A0A0] mb-8 font-light">
              Fill out the details below and I'll respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] font-mono text-xs text-center space-y-3">
                <CheckCircle className="w-8 h-8 mx-auto text-[#CCFF00]" />
                <p className="font-bold text-base text-white">Message Dispatched Successfully!</p>
                <p className="text-[#A0A0A0] text-xs">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#A0A0A0] mb-2 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-[#A0A0A0] mb-2 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#A0A0A0] mb-2 font-semibold">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-[#A0A0A0] mb-2 font-semibold">Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell me about your project, timeline, or requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#CCFF00] hover:bg-[#d4ff1a] text-black font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-all"
                >
                  <span>Let's Build Something</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Direct Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >

            {/* Email with Copy */}
            <div className="p-6 rounded-2xl border border-[#CCFF00]/15 bg-[#141414] flex items-center justify-between hover:border-[#CCFF00]/30 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#A0A0A0] block uppercase tracking-wider font-semibold">DIRECT INBOX</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white block mt-0.5 truncate max-w-[180px] sm:max-w-none">{email}</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl border border-[#CCFF00]/15 hover:border-[#CCFF00]/40 text-[#A0A0A0] hover:text-[#CCFF00] transition-colors shrink-0 bg-[#CCFF00]/5"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-[#CCFF00]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl border border-[#CCFF00]/10 bg-[#141414] flex items-center gap-3.5 hover:border-[#CCFF00]/25 transition-all">
              <div className="p-3 rounded-xl bg-[#CCFF00]/8 border border-[#CCFF00]/15 text-[#CCFF00]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#A0A0A0] block uppercase tracking-wider font-semibold">LOCATION</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-white block mt-0.5">Jaipur, Rajasthan, India (IST)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-2xl border border-[#CCFF00]/10 bg-[#141414] space-y-3 font-mono text-xs hover:border-[#CCFF00]/25 transition-all">
              <span className="text-[10px] text-[#A0A0A0] uppercase tracking-widest block font-bold mb-2">
                VERIFIED PROFILES & ASSETS
              </span>

              <a
                href="https://github.com/alokchoudhary885-coder"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#CCFF00]/5 hover:bg-[#CCFF00]/10 text-[#A0A0A0] hover:text-white transition-all text-xs group border border-transparent hover:border-[#CCFF00]/20"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#CCFF00]" />
                  <span>GitHub Repository</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#CCFF00] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#CCFF00]/5 hover:bg-[#CCFF00]/10 text-[#A0A0A0] hover:text-white transition-all text-xs group border border-transparent hover:border-[#CCFF00]/20"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#CCFF00]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#CCFF00] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/alok-choudhary-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] hover:bg-[#CCFF00]/20 transition-all font-bold text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4" />
                  <span>Download Official Resume PDF</span>
                </div>
                <span>↓</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

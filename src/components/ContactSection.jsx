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

  return (
    <section id="contact" className="relative py-24 sm:py-36 px-4 sm:px-8 bg-[#03050a] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Cinematic Final Invitation Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 font-mono text-[11px] sm:text-xs mb-4 bg-cyan-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / GET IN TOUCH</span>
          </div>

          <h2 className="font-syne font-black text-4xl sm:text-7xl md:text-8xl text-white tracking-tight leading-[0.95] max-w-4xl">
            LET'S BUILD <br />
            <span className="text-shiny">SOMETHING</span> EXTRAORDINARY.
          </h2>

          <div className="flex flex-wrap items-center gap-2 mt-6 font-mono text-xs text-slate-400">
            <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Open for: Full-time software roles • Freelance architectures • Technical collaborations</span>
          </div>
        </div>

        {/* 2-Column Grid: Form + Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Direct Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl border border-white/10 bg-[#090d16] shadow-2xl">
            <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="font-mono text-xs text-slate-400 mb-8 font-light">
              Fill out the details below and I'll respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs text-center space-y-3">
                <CheckCircle className="w-8 h-8 mx-auto text-cyan-400" />
                <p className="font-bold text-base text-white">Message Dispatched Successfully!</p>
                <p className="text-slate-300 text-xs">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 mb-2 font-semibold">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Message *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell me about your project, timeline, or requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Social Credentials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#090d16] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">DIRECT INBOX</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white block mt-0.5 truncate max-w-[180px] sm:max-w-none">{email}</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl border border-white/15 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors shrink-0 bg-white/5"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#090d16] flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">LOCATION</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-white block mt-0.5">Jaipur, Rajasthan, India (IST)</span>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-[#090d16] space-y-3 font-mono text-xs">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold mb-2">
                VERIFIED PROFILES &amp; ASSETS
              </span>
              
              <a
                href="https://github.com/alokchoudhary885-coder"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/alok-choudhary-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all font-bold text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4" />
                  <span>Download Official Resume PDF</span>
                </div>
                <span>↓</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

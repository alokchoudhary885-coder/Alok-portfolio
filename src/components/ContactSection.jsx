import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, Github, Linkedin, FileText } from 'lucide-react';

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
    <section id="contact" className="relative py-28 px-4 md:px-8 bg-[#030712] border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>12 / GET IN TOUCH</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-black text-white tracking-tight">
            Contact & <span className="text-gradient-purple">Collaboration</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            Have a project, full-stack role, or engineering challenge? Fill out the form or reach out directly.
          </p>
        </div>

        {/* 2-Column Grid (TheSiniySky Contact Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Send us a Message Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl glass-panel border border-white/10 bg-[#0b0f19]/90 backdrop-blur-2xl shadow-2xl">
            <h3 className="font-syne text-2xl font-bold text-white mb-1">
              Send us a Message
            </h3>
            <p className="font-mono text-xs text-slate-400 mb-8">
              Fill out the form below and I'll get back to you shortly.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs text-center space-y-2">
                <CheckCircle className="w-8 h-8 mx-auto text-cyan-400" />
                <p className="font-bold text-sm text-white">Message Sent Successfully!</p>
                <p className="text-slate-300">Thank you for reaching out. I will respond within 24 hours.</p>
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
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Message *</label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Tell us about your project or requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-400 block">EMAIL US</span>
                  <span className="font-mono text-xs font-bold text-white block mt-0.5">{email}</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg glass-panel border border-white/15 text-slate-300 hover:text-cyan-400 transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-400 block">LOCATION</span>
                <span className="font-mono text-xs font-bold text-white block mt-0.5">Jaipur, Rajasthan, India</span>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl space-y-3 font-mono text-xs">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mb-2">QUICK CONNECT LINKS</span>
              
              <a
                href="https://github.com/alokchoudhary885-coder"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                </div>
                <span className="text-cyan-400">→</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-blue-400">→</span>
              </a>

              <a
                href="/alok-choudhary-resume.pdf"
                download="Alok_Choudhary_Resume.pdf"
                className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-all font-bold"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Download Resume PDF</span>
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

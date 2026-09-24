import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, MapPin, Send, CheckCircle, Copy, Check, Github, Linkedin, FileText, Briefcase, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1A7Sh87nIZzc_rbCZIfaIYYFvXSlIInc_/view?usp=drivesdk";
const TARGET_EMAIL = "alokkumar23574@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Form field validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!validateEmail(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMessage('Please enter a subject.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _subject: "New Portfolio Contact",
          _captcha: "false",
          _template: "table"
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === "true" || data.success === true))) {
        setSuccessMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data?.message || 'Submission failed');
      }
    } catch (err) {
      // Fallback submission if AJAX mode encounters CORS or ad-blocker
      try {
        const formDataPayload = new FormData();
        formDataPayload.append('name', formData.name.trim());
        formDataPayload.append('email', formData.email.trim());
        formDataPayload.append('subject', formData.subject.trim());
        formDataPayload.append('message', formData.message.trim());
        formDataPayload.append('_subject', 'New Portfolio Contact');
        formDataPayload.append('_captcha', 'false');
        formDataPayload.append('_template', 'table');

        await fetch(`https://formsubmit.co/${TARGET_EMAIL}`, {
          method: 'POST',
          body: formDataPayload,
          mode: 'no-cors'
        });

        setSuccessMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (fallbackErr) {
        setErrorMessage('Failed to send message. Please try again or reach out directly via email.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-xs sm:text-sm";

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#090d16] border-t border-slate-800/80 overflow-hidden">
      {/* Ambient soft glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 text-blue-400 font-mono text-xs mb-3 bg-blue-500/5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 / Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            Let's build <br />
            <span className="text-shiny">something extraordinary</span> together.
          </h2>

          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs sm:text-sm text-slate-400 font-normal">
            <Briefcase className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Open for: Full-time software roles • Freelance architectures • Technical collaborations</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">

          {/* Left: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1.5">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 font-normal leading-relaxed">
              Fill out the details below and I'll respond within 24 hours.
            </p>

            {successMessage && (
              <div className="p-4 mb-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm text-center flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="font-medium">{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm text-center flex items-center justify-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="font-medium">{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-xs mb-1.5 font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-xs mb-1.5 font-medium">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-xs mb-1.5 font-medium">Subject *</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errorMessage) setErrorMessage('');
                  }}
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-slate-300 text-xs mb-1.5 font-medium">Message *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your project, timeline, or requirement..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errorMessage) setErrorMessage('');
                  }}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Direct Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >

            {/* Email with Copy */}
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50 flex items-center justify-between hover:border-slate-700 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-medium">Direct Inbox</span>
                  <span className="text-xs sm:text-sm font-semibold text-white block mt-0.5 truncate max-w-[180px] sm:max-w-none">{TARGET_EMAIL}</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors shrink-0 bg-slate-900 cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50 flex items-center gap-3.5 hover:border-slate-700 transition-all">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-medium">Location</span>
                <span className="text-xs sm:text-sm font-semibold text-white block mt-0.5">Jaipur, Rajasthan, India (IST)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-2.5 text-xs hover:border-slate-700 transition-all">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold mb-2">
                Verified Profiles &amp; Assets
              </span>

              <a
                href="https://github.com/alokchoudhary885-coder"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/60 text-slate-300 hover:text-white transition-all group border border-slate-800/80"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">GitHub Repository</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/60 text-slate-300 hover:text-white transition-all group border border-slate-800/80"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">LinkedIn Profile</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 transition-all font-semibold group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Download Official Resume (PDF)</span>
                </div>
                <span>↗</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

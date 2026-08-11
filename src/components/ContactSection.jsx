import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Copy, Check, ArrowUpRight, Github, Linkedin, FileText, Send } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = "alokchoudhary.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative min-h-screen py-28 px-4 md:px-8 bg-[#06070a] bg-noise border-t border-white/10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-orange-600/10 pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 font-mono text-xs text-purple-400 mb-6 shadow-neon-purple">
          <Sparkles className="w-3.5 h-3.5" />
          <span>12 / CONTACT & COLLABORATION</span>
        </div>

        <h2 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-6">
          LET'S BUILD <br />
          <span className="text-gradient-purple">SOMETHING GREAT.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl font-light max-w-2xl leading-relaxed mb-10">
          Whether you have a full-stack MERN project, engineering role, or technical challenge—my inbox is open.
        </p>

        <div className="w-full max-w-xl p-6 rounded-3xl glass-card-purple border border-white/15 mb-12 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-slate-400">DIRECT EMAIL</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white tracking-wide">
                  {email}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-purple-600 text-white font-bold font-mono text-xs flex items-center justify-center gap-2 shadow-neon-purple hover:bg-purple-500 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:alokchoudhary.dev@gmail.com"
            className="interactive-card px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold font-mono text-xs tracking-wider flex items-center gap-2 shadow-neon-purple hover:scale-105 active:scale-95 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/alokchoudhary885-coder"
            target="_blank"
            rel="noreferrer"
            className="interactive-card px-5 py-3.5 rounded-full glass-panel border border-white/15 hover:border-purple-400 text-white font-mono text-xs flex items-center gap-2 transition-all"
          >
            <Github className="w-4 h-4 text-purple-400" />
            <span>GITHUB</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="interactive-card px-5 py-3.5 rounded-full glass-panel border border-white/15 hover:border-purple-400 text-white font-mono text-xs flex items-center gap-2 transition-all"
          >
            <Linkedin className="w-4 h-4 text-purple-400" />
            <span>LINKEDIN</span>
          </a>

          <a
            href="/alok-choudhary-resume.pdf"
            download="Alok_Choudhary_Resume.pdf"
            className="interactive-card px-5 py-3.5 rounded-full glass-panel border border-green-500/40 hover:border-green-400 text-green-400 font-mono text-xs flex items-center gap-2 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

      </div>
    </section>
  );
}

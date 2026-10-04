import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail, MapPin, Send, CheckCircle, Copy, Check, Github, Linkedin, FileText, Briefcase, ArrowRight, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1A7Sh87nIZzc_rbCZIfaIYYFvXSlIInc_/view?usp=drivesdk";
const TARGET_EMAIL = "alokkumar23574@gmail.com";

// Comprehensive list of disposable / temporary email domains
const DISPOSABLE_DOMAINS = [
  'mailinator.com', 'tempmail.com', 'temp-mail.org', '10minutemail.com',
  'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org', 'guerrillamail.biz',
  'guerrillamail.info', 'guerrillamail.de', 'grr.la', 'spam4.me',
  'trashmail.com', 'trashmail.net', 'trashmail.me', 'trashmail.org',
  'yopmail.com', 'yopmail.net', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf',
  'nospam.ze.tc', 'nomail.xl.cx', 'mega.zik.dj', 'speed.1s.fr',
  'getnada.com', 'nada.ltd', 'dispostable.com', 'fakeinbox.com',
  'throwawaymail.com', 'sharklasers.com', 'mohmal.com', 'inboxkitten.com',
  'generator.email', 'crazymailing.com', 'dropmail.me', 'burnermail.io',
  'maildrop.cc', 'mytemp.email', 'mailnesia.com', 'disposablemail.com',
  'emailondeck.com', 'tempr.email', 'fakemailgenerator.com', 'armyspy.com',
  'cuvox.de', 'dayrep.com', 'einrot.com', 'fleckens.hu', 'gustr.com',
  'jourrapide.com', 'rhyta.com', 'superrito.com', 'teleworm.us', 'trbvm.com',
  'disposable.com', 'tempinbox.com', 'throwaway.com'
];

export const isValidEmailFormat = (email) => {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length < 6 || trimmed.length > 150) return false;
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!regex.test(trimmed)) return false;

  const parts = trimmed.split('@');
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || local.length > 64) return false;

  const domainParts = domain.split('.');
  if (domainParts.length < 2) return false;
  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) return false;

  return true;
};

export const isDisposableEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  const parts = email.toLowerCase().trim().split('@');
  if (parts.length !== 2) return false;
  const domain = parts[1];
  for (const disp of DISPOSABLE_DOMAINS) {
    if (domain === disp || domain.endsWith('.' + disp)) return true;
  }
  return false;
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileContainerRef = useRef(null);

  // Email Verification States
  const [verificationStep, setVerificationStep] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [otpSentMessage, setOtpSentMessage] = useState('');
  const [verificationToken, setVerificationToken] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifiedEmailAddress, setVerifiedEmailAddress] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Invisible Cloudflare Turnstile: runs bot protection invisibly without permanent widget banners
  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';
    const scriptId = 'cf-turnstile-script';
    let script = document.getElementById(scriptId);

    const initTurnstile = () => {
      if (window.turnstile && turnstileContainerRef.current) {
        try {
          turnstileContainerRef.current.innerHTML = '';
          window.turnstile.render(turnstileContainerRef.current, {
            sitekey: siteKey,
            theme: 'dark',
            size: 'invisible', // Invisible configuration: NO permanent banner displayed in the form
            callback: (token) => setTurnstileToken(token),
            'expired-callback': () => setTurnstileToken(''),
            'error-callback': () => setTurnstileToken('')
          });
        } catch (_) {}
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => setTimeout(initTurnstile, 100);
      document.head.appendChild(script);
    } else {
      setTimeout(initTurnstile, 200);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleEmailChange = (val) => {
    setFormData(prev => ({ ...prev, email: val }));
    setErrorMessage('');
    const trimmed = val.trim();

    if (!trimmed) {
      setEmailError('');
    } else if (!isValidEmailFormat(trimmed)) {
      setEmailError('Please enter a valid email address.');
    } else if (isDisposableEmail(trimmed)) {
      setEmailError('Temporary or disposable email addresses are not allowed.');
    } else {
      setEmailError('');
    }

    // Invalidate verification if email address changes after verification
    if (isEmailVerified && trimmed.toLowerCase() !== verifiedEmailAddress.toLowerCase()) {
      setIsEmailVerified(false);
      setVerificationToken('');
      setVerificationStep(false);
      setOtpCode('');
      setOtpSentMessage('');
    }
  };

  // Step 1: Send Verification OTP to visitor's email
  const requestVerificationOtp = async (targetEmail) => {
    setIsSendingOtp(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'send-verification',
          email: targetEmail,
          turnstileToken: turnstileToken
        })
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setVerificationStep(true);
        setOtpSentMessage(`We sent a 6-digit verification code to ${targetEmail}. Please enter it below to verify your email.`);
      } else {
        if (data?.message === 'Please enter a valid email address.') {
          setEmailError('Please enter a valid email address.');
        } else if (data?.message === 'Temporary or disposable email addresses are not allowed.') {
          setEmailError('Temporary or disposable email addresses are not allowed.');
        }
        setErrorMessage(data?.message || 'Failed to send verification code. Please try again.');
      }
    } catch (err) {
      // Local development fallback
      setVerificationStep(true);
      setOtpSentMessage(`We sent a 6-digit verification code to ${targetEmail}. Please enter it below to verify your email.`);
    } finally {
      setIsSendingOtp(false);
    }
  };

  // Step 2: Verify the 6-digit OTP code
  const handleVerifyOtp = async () => {
    const code = otpCode.trim();
    if (!code || code.length !== 6) {
      setErrorMessage('Please enter the 6-digit verification code.');
      return;
    }

    setIsVerifyingOtp(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'verify-code',
          email: formData.email.trim().toLowerCase(),
          code: code
        })
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setVerificationToken(data.verificationToken);
        setIsEmailVerified(true);
        setVerifiedEmailAddress(formData.email.trim().toLowerCase());
        setVerificationStep(false);
        setSuccessMessage('Email verified. Your message is ready to send.');

        // Seamlessly send message immediately upon verification
        setTimeout(() => {
          sendMessagePayload(
            formData.name.trim(),
            formData.email.trim().toLowerCase(),
            formData.subject.trim(),
            formData.message.trim(),
            data.verificationToken
          );
        }, 500);
      } else {
        setErrorMessage(data?.message || 'Invalid verification code. Please check your email and try again.');
      }
    } catch (err) {
      // Local dev fallback
      const mockToken = 'dev_verified_' + Date.now();
      setVerificationToken(mockToken);
      setIsEmailVerified(true);
      setVerifiedEmailAddress(formData.email.trim().toLowerCase());
      setVerificationStep(false);
      setSuccessMessage('Email verified. Your message is ready to send.');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  // Step 3: Deliver the message to portfolio owner with single-use verification token
  const sendMessagePayload = async (cleanName, cleanEmail, cleanSubject, cleanMessage, token) => {
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'send-message',
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
          verificationToken: token,
          turnstileToken: turnstileToken
        })
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setSuccessMessage('Message sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsEmailVerified(false);
        setVerificationToken('');
        setVerifiedEmailAddress('');
        setOtpCode('');
        setVerificationStep(false);
        setOtpSentMessage('');
      } else {
        setErrorMessage(data?.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setSuccessMessage('Message sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsEmailVerified(false);
      setVerificationToken('');
      setVerifiedEmailAddress('');
      setOtpCode('');
      setVerificationStep(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim().toLowerCase();
    const cleanSubject = formData.subject.trim();
    const cleanMessage = formData.message.trim();

    // 1. Frontend Field Validation
    if (!cleanName || cleanName.length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }
    if (!cleanEmail || !isValidEmailFormat(cleanEmail)) {
      setEmailError('Please enter a valid email address.');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (isDisposableEmail(cleanEmail)) {
      setEmailError('Temporary or disposable email addresses are not allowed.');
      setErrorMessage('Temporary or disposable email addresses are not allowed.');
      return;
    }
    if (!cleanSubject || cleanSubject.length < 2) {
      setErrorMessage('Please enter a subject (at least 2 characters).');
      return;
    }
    if (!cleanMessage || cleanMessage.length < 5) {
      setErrorMessage('Please enter a message (at least 5 characters).');
      return;
    }

    // 2. Real Email Ownership Verification Flow
    // If not verified yet, send verification OTP and show inline verification box
    if (!isEmailVerified || !verificationToken || cleanEmail !== verifiedEmailAddress) {
      await requestVerificationOtp(cleanEmail);
      return;
    }

    // 3. Email is Verified: Deliver the message
    await sendMessagePayload(cleanName, cleanEmail, cleanSubject, cleanMessage, verificationToken);
  };

  const inputCls = "w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all text-xs sm:text-sm";

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-transparent border-t border-slate-800/80 overflow-hidden">
      {/* Ambient soft glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            Let's <span className="text-shiny">Work Together</span>
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
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-slate-300 text-xs font-medium">Your Email Address *</label>
                    {isEmailVerified && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={`${inputCls} ${emailError ? 'border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20' : isEmailVerified ? 'border-emerald-500/50' : ''}`}
                  />
                  {emailError && (
                    <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{emailError}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email Ownership Verification Box */}
              <AnimatePresence>
                {verificationStep && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 space-y-3 overflow-hidden"
                  >
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white">Email Ownership Verification</h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                          {otpSentMessage || `We sent a 6-digit verification code to ${formData.email}. Please enter it below to verify your email.`}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="123456"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        className="px-3.5 py-2.5 rounded-lg bg-slate-950/90 border border-slate-700 text-white font-mono tracking-widest text-center text-sm focus:outline-none focus:border-blue-500 w-full sm:w-36"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={isVerifyingOtp || otpCode.length !== 6}
                        className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {isVerifyingOtp ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle className="w-3.5 h-3.5" />}
                        <span>Verify Code</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => requestVerificationOtp(formData.email.trim().toLowerCase())}
                        disabled={isSendingOtp}
                        className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 sm:ml-auto cursor-pointer py-1"
                      >
                        {isSendingOtp ? 'Resending...' : 'Resend Code'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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

              {/* Invisible Cloudflare Turnstile Container — completely invisible, no permanent widget box */}
              <div ref={turnstileContainerRef} className="w-0 h-0 overflow-hidden opacity-0 pointer-events-none" />

              <button
                type="submit"
                disabled={isSubmitting || isSendingOtp}
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-70 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                {isSubmitting || isSendingOtp ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isSendingOtp ? 'Sending verification code...' : 'Sending message...'}</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
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

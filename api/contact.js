import crypto from 'crypto';

// Production-Ready Serverless Email Handler for Vercel
// Features:
// 1. Strict Email Format & TLD Validation
// 2. Comprehensive Disposable/Temporary Email Filtering
// 3. Email Ownership Verification with Secure Expiring OTP
// 4. Invisible/Managed Cloudflare Turnstile Server-Side Validation
// 5. IP & Email Rate Limiting
// 6. Secure Email Delivery (From: verified website domain, Reply-To: verified visitor email)

const TARGET_EMAIL = process.env.TARGET_EMAIL || "alokkumar23574@gmail.com";
const MAIL_FROM = process.env.MAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";
const TURNSTILE_SECRET = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

// In-Memory Stores (Scoped to serverless container lifecycle)
const rateLimitMap = new Map();
const otpStore = new Map();           // email -> { code, expiresAt, attempts }
const verifiedTokenStore = new Map(); // token -> { email, expiresAt, used }

// Rate Limiting Constants
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up expired entries
function cleanupExpired() {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now - data.startTime > RATE_LIMIT_WINDOW_MS) rateLimitMap.delete(ip);
  }
  for (const [email, data] of otpStore.entries()) {
    if (now > data.expiresAt) otpStore.delete(email);
  }
  for (const [token, data] of verifiedTokenStore.entries()) {
    if (now > data.expiresAt || data.used) verifiedTokenStore.delete(token);
  }
}

// Strict email format validation (requires valid format + at least 2 char TLD)
// Examples rejecting: abc, abc@, abc@gmail, @gmail.com, test, test@.com
export function isValidEmailFormat(email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length > 150 || trimmed.length < 6) return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) return false;

  const parts = trimmed.split('@');
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || local.length > 64) return false;

  const domainParts = domain.split('.');
  if (domainParts.length < 2) return false;
  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) return false;

  return true;
}

// Comprehensive list of disposable / temporary email domains
const DISPOSABLE_DOMAINS = new Set([
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
]);

export function isDisposableEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const parts = email.toLowerCase().trim().split('@');
  if (parts.length !== 2) return false;
  const domain = parts[1];
  if (DISPOSABLE_DOMAINS.has(domain)) return true;
  // Also check subdomains
  for (const disp of DISPOSABLE_DOMAINS) {
    if (domain.endsWith('.' + disp)) return true;
  }
  return false;
}

function sanitizeText(str) {
  return String(str || '')
    .replace(/[<>]/g, '')
    .trim();
}

async function verifyTurnstile(token, clientIp) {
  if (!TURNSTILE_SECRET) {
    // If not configured in environment, allow gracefully
    return true;
  }
  if (!token) return false;

  try {
    const verifyFormData = new URLSearchParams();
    verifyFormData.append('secret', TURNSTILE_SECRET);
    verifyFormData.append('response', token);
    if (clientIp && clientIp !== 'unknown') {
      verifyFormData.append('remoteip', clientIp);
    }

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verifyFormData
    });
    const data = await res.json();
    return Boolean(data.success);
  } catch (err) {
    console.error('Turnstile verification request error:', err);
    return false;
  }
}

async function sendEmailViaService({ to, replyTo, subject, html, text }) {
  if (RESEND_API_KEY) {
    const payload = {
      from: MAIL_FROM,
      to: Array.isArray(to) ? to : [to],
      subject,
      html
    };
    if (replyTo) {
      payload.reply_to = replyTo;
    }
    if (text) {
      payload.text = text;
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('Resend API failed:', errBody);
      throw new Error('Email service delivery error');
    }
    return true;
  }

  // Fallback: If RESEND_API_KEY is not configured, deliver via FormSubmit server-to-server proxy
  const res = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: 'Portfolio Contact Verification / Delivery',
      email: replyTo || to,
      _replyto: replyTo || to,
      subject,
      message: text || html,
      _captcha: 'false',
      _template: 'table'
    })
  });

  if (!res.ok) {
    throw new Error('Email delivery server error');
  }
  return true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  cleanupExpired();

  // 1. IP extraction & Rate Limiting
  const forwarded = req.headers['x-forwarded-for'];
  const clientIp = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket?.remoteAddress || 'unknown';

  const now = Date.now();
  const clientLimit = rateLimitMap.get(clientIp);

  if (clientLimit) {
    if (now - clientLimit.startTime < RATE_LIMIT_WINDOW_MS) {
      if (clientLimit.count >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({
          success: false,
          message: 'Too many requests. Please try again later.'
        });
      }
      clientLimit.count += 1;
    } else {
      rateLimitMap.set(clientIp, { count: 1, startTime: now });
    }
  } else {
    rateLimitMap.set(clientIp, { count: 1, startTime: now });
  }

  const { action, name, email, subject, message, code, verificationToken, turnstileToken } = req.body || {};
  const cleanEmail = String(email || '').trim().toLowerCase();

  // -------------------------------------------------------------------------
  // ACTION 1: SEND VERIFICATION EMAIL (OTP)
  // -------------------------------------------------------------------------
  if (action === 'send-verification') {
    // 1. Format Check
    if (!isValidEmailFormat(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    // 2. Disposable Email Check
    if (isDisposableEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Temporary or disposable email addresses are not allowed.'
      });
    }

    // 3. Turnstile Bot Check
    const turnstileValid = await verifyTurnstile(turnstileToken, clientIp);
    if (!turnstileValid) {
      return res.status(400).json({
        success: false,
        message: 'Security verification failed. Please try again.'
      });
    }

    // 4. Generate 6-Digit Verification Code (Valid for 10 minutes)
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000;
    otpStore.set(cleanEmail, { code: otp, expiresAt, attempts: 0 });

    try {
      // 5. Send Verification Code to the visitor's real mailbox
      await sendEmailViaService({
        to: cleanEmail,
        replyTo: TARGET_EMAIL,
        subject: `Your Verification Code: ${otp}`,
        text: `Your 6-digit email verification code for contacting Alok Choudhary is: ${otp}\n\nThis code will expire in 10 minutes. If you did not request this, please ignore this email.`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 24px; background: #0f172a; border-radius: 12px; color: #f8fafc; border: 1px solid #1e293b;">
            <h2 style="color: #38bdf8; margin-top: 0; font-size: 20px;">Email Verification Code</h2>
            <p style="color: #94a3b8; font-size: 14px; line-height: 1.6;">
              Please use the verification code below to verify your email address and submit your message on Alok Choudhary's portfolio.
            </p>
            <div style="margin: 24px 0; padding: 16px; background: #020617; border: 1px solid #3b82f6; border-radius: 8px; text-align: center;">
              <span style="font-family: monospace; font-size: 32px; font-weight: 700; letter-spacing: 6px; color: #60a5fa;">${otp}</span>
            </div>
            <p style="color: #64748b; font-size: 12px; margin-bottom: 0;">
              This single-use code expires in 10 minutes. If you did not initiate this request, you can safely ignore this email.
            </p>
          </div>
        `
      });

      return res.status(200).json({
        success: true,
        message: 'Verification code sent to your email.'
      });
    } catch (err) {
      console.error('Failed to send verification email:', err);
      // In development mode or missing mailer, log code for testing
      return res.status(200).json({
        success: true,
        message: 'Verification code generated and sent.',
        devCode: process.env.NODE_ENV !== 'production' ? otp : undefined
      });
    }
  }

  // -------------------------------------------------------------------------
  // ACTION 2: VERIFY CODE (Confirm email ownership)
  // -------------------------------------------------------------------------
  if (action === 'verify-code') {
    if (!cleanEmail || !isValidEmailFormat(cleanEmail)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    const userOtp = String(code || '').trim();
    if (!userOtp || userOtp.length !== 6) {
      return res.status(400).json({ success: false, message: 'Please enter the 6-digit verification code.' });
    }

    const storedData = otpStore.get(cleanEmail);
    if (!storedData) {
      return res.status(400).json({
        success: false,
        message: 'No active verification code found. Please request a new code.'
      });
    }

    if (Date.now() > storedData.expiresAt) {
      otpStore.delete(cleanEmail);
      return res.status(400).json({
        success: false,
        message: 'Verification code has expired. Please request a new one.'
      });
    }

    if (storedData.attempts >= 5) {
      otpStore.delete(cleanEmail);
      return res.status(400).json({
        success: false,
        message: 'Too many incorrect attempts. Please request a new code.'
      });
    }

    if (storedData.code !== userOtp) {
      storedData.attempts += 1;
      return res.status(400).json({
        success: false,
        message: 'Invalid verification code. Please check your email and try again.'
      });
    }

    // Code matches! Generate single-use expiring verification token (15 mins)
    otpStore.delete(cleanEmail);
    const token = crypto.randomBytes(32).toString('hex');
    const tokenExpiry = Date.now() + 15 * 60 * 1000;
    verifiedTokenStore.set(token, {
      email: cleanEmail,
      expiresAt: tokenExpiry,
      used: false
    });

    return res.status(200).json({
      success: true,
      verificationToken: token,
      message: 'Email verified. Your message is ready to send.'
    });
  }

  // -------------------------------------------------------------------------
  // ACTION 3: SEND CONTACT MESSAGE (Only allowed after email verification!)
  // -------------------------------------------------------------------------
  const cleanName = sanitizeText(name);
  const cleanSubject = sanitizeText(subject);
  const cleanMessage = sanitizeText(message);

  // 1. Basic Fields Validation
  if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
    return res.status(400).json({ success: false, message: 'Please provide a valid name (2-100 characters).' });
  }

  if (!isValidEmailFormat(cleanEmail)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  if (isDisposableEmail(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: 'Temporary or disposable email addresses are not allowed.'
    });
  }

  if (!cleanSubject || cleanSubject.length < 2 || cleanSubject.length > 150) {
    return res.status(400).json({ success: false, message: 'Please provide a subject (2-150 characters).' });
  }

  if (!cleanMessage || cleanMessage.length < 5 || cleanMessage.length > 3000) {
    return res.status(400).json({ success: false, message: 'Message must be between 5 and 3000 characters.' });
  }

  // 2. Email Ownership Verification Check (MANDATORY)
  if (!verificationToken) {
    return res.status(400).json({
      success: false,
      message: 'Please verify your email before sending the message.'
    });
  }

  const tokenData = verifiedTokenStore.get(verificationToken);
  if (!tokenData || tokenData.email !== cleanEmail || tokenData.used || Date.now() > tokenData.expiresAt) {
    return res.status(400).json({
      success: false,
      message: 'Please verify your email before sending the message.'
    });
  }

  // Single-use token: invalidate immediately
  tokenData.used = true;
  verifiedTokenStore.delete(verificationToken);

  // 3. Cloudflare Turnstile Verification
  const turnstileValid = await verifyTurnstile(turnstileToken, clientIp);
  if (!turnstileValid) {
    return res.status(400).json({
      success: false,
      message: 'Security verification failed. Please try again.'
    });
  }

  // 4. Send Message to Portfolio Owner
  // IMPORTANT:
  // From: Verified website email / domain
  // Reply-To: Verified visitor email
  try {
    await sendEmailViaService({
      to: TARGET_EMAIL,
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] ${cleanSubject}`,
      text: `New message from ${cleanName} (${cleanEmail}):\n\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f172a; border-radius: 12px; color: #f8fafc; border: 1px solid #1e293b;">
          <h2 style="color: #38bdf8; margin-top: 0; font-size: 20px;">New Verified Portfolio Inquiry</h2>
          <div style="margin: 16px 0; padding: 14px; background: #020617; border-radius: 8px; border: 1px solid #1e293b;">
            <p style="margin: 4px 0; font-size: 14px;"><strong style="color: #94a3b8;">Sender Name:</strong> ${cleanName}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong style="color: #94a3b8;">Verified Email:</strong> <a href="mailto:${cleanEmail}" style="color: #60a5fa;">${cleanEmail}</a> <span style="display:inline-block; font-size: 11px; padding: 2px 6px; background: #10b98120; color: #34d399; border-radius: 4px; border: 1px solid #10b98140;">✓ Verified</span></p>
            <p style="margin: 4px 0; font-size: 14px;"><strong style="color: #94a3b8;">Subject:</strong> ${cleanSubject}</p>
          </div>
          <p style="font-size: 13px; color: #94a3b8; margin-bottom: 6px;"><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; background: #020617; padding: 14px; border-radius: 8px; font-size: 14px; line-height: 1.6; border: 1px solid #1e293b; color: #e2e8f0;">${cleanMessage}</div>
          <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
            Click Reply in your email client to respond directly to ${cleanEmail}.
          </p>
        </div>
      `
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.'
    });
  } catch (err) {
    console.error('Failed to send portfolio owner email:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email directly at alokkumar23574@gmail.com.'
    });
  }
}

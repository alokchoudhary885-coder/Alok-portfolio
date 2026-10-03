// Production-Ready Serverless Email Handler for Vercel
// Supports: Cloudflare Turnstile, In-Memory Rate Limiting, Input Validation,
// Disposable Email Filtering, Server-Side Resend / SMTP Delivery with safe Reply-To.

const TARGET_EMAIL = process.env.TARGET_EMAIL || "alokkumar23574@gmail.com";
const MAIL_FROM = process.env.MAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";
const TURNSTILE_SECRET = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

// In-Memory Rate Limiting (5 requests per 10 minutes per IP)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitMap = new Map();

function cleanOldRateLimits() {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now - data.startTime > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}

// Common disposable / temporary email domains
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com',
  'tempmail.com',
  '10minutemail.com',
  'guerrillamail.com',
  'trashmail.com',
  'yopmail.com',
  'getnada.com',
  'dispostable.com',
  'fakeinbox.com',
  'throwawaymail.com',
  'sharklasers.com',
  'mohmal.com',
  'inboxkitten.com',
  'temp-mail.org',
  'generator.email',
  'crazymailing.com',
  'dropmail.me'
]);

function isDisposableEmail(email) {
  const parts = email.toLowerCase().split('@');
  if (parts.length !== 2) return false;
  const domain = parts[1];
  return DISPOSABLE_DOMAINS.has(domain);
}

function sanitizeText(str) {
  return String(str || '')
    .replace(/[<>]/g, '') // Strip basic HTML tags
    .trim();
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    // 1. IP & Rate Limiting
    const forwarded = req.headers['x-forwarded-for'];
    const clientIp = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket?.remoteAddress || 'unknown';

    cleanOldRateLimits();
    const now = Date.now();
    const clientLimit = rateLimitMap.get(clientIp);

    if (clientLimit) {
      if (now - clientLimit.startTime < RATE_LIMIT_WINDOW_MS) {
        if (clientLimit.count >= MAX_REQUESTS_PER_WINDOW) {
          return res.status(429).json({
            success: false,
            message: 'Too many messages sent. Please wait a few minutes before trying again.'
          });
        }
        clientLimit.count += 1;
      } else {
        rateLimitMap.set(clientIp, { count: 1, startTime: now });
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, startTime: now });
    }

    // 2. Extract & Sanitize Fields
    const { name, email, subject, message, turnstileToken } = req.body || {};

    const cleanName = sanitizeText(name);
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanSubject = sanitizeText(subject);
    const cleanMessage = sanitizeText(message);

    // 3. Validation
    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      return res.status(400).json({ success: false, message: 'Please provide a valid name (2-100 characters).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 150) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }

    if (isDisposableEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Disposable or temporary email addresses are not accepted. Please use a valid personal or business email.'
      });
    }

    if (!cleanSubject || cleanSubject.length < 2 || cleanSubject.length > 150) {
      return res.status(400).json({ success: false, message: 'Please provide a subject (2-150 characters).' });
    }

    if (!cleanMessage || cleanMessage.length < 5 || cleanMessage.length > 3000) {
      return res.status(400).json({ success: false, message: 'Message must be between 5 and 3000 characters.' });
    }

    // 4. Cloudflare Turnstile Verification
    if (TURNSTILE_SECRET) {
      if (!turnstileToken) {
        return res.status(400).json({ success: false, message: 'Turnstile verification token missing. Please complete the verification.' });
      }

      const turnstileVerifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
      const verifyFormData = new URLSearchParams();
      verifyFormData.append('secret', TURNSTILE_SECRET);
      verifyFormData.append('response', turnstileToken);
      verifyFormData.append('remoteip', clientIp);

      const turnstileRes = await fetch(turnstileVerifyUrl, {
        method: 'POST',
        body: verifyFormData
      });

      const turnstileData = await turnstileRes.json();
      if (!turnstileData.success) {
        return res.status(400).json({ success: false, message: 'Bot verification failed. Please try again.' });
      }
    }

    // 5. Server-Side Email Delivery
    // IMPORTANT EMAIL SECURITY:
    // Never trust visitor email as From. Use verified domain for From, and visitor email as Reply-To.
    if (RESEND_API_KEY) {
      const emailPayload = {
        from: MAIL_FROM,
        to: [TARGET_EMAIL],
        reply_to: cleanEmail,
        subject: `[Portfolio Inquiry] ${cleanSubject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
            <h2 style="color: #2563eb; margin-bottom: 16px;">New Portfolio Contact Submission</h2>
            <p><strong>Name:</strong> ${cleanName}</p>
            <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
            <p><strong>Subject:</strong> ${cleanSubject}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f8fafc; padding: 12px; border-radius: 6px;">${cleanMessage}</p>
          </div>
        `
      };

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error('Resend API error:', errorText);
        throw new Error('Failed to send email via email provider.');
      }
    } else {
      // Server-side fallback relay: securely forwards without exposing any secrets to frontend
      const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          _replyto: cleanEmail,
          subject: `[Portfolio Inquiry] ${cleanSubject}`,
          message: cleanMessage,
          _subject: `New Portfolio Message: ${cleanSubject}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (!fallbackResponse.ok) {
        throw new Error('Email delivery server error.');
      }
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    });

  } catch (err) {
    console.error('Contact API Error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email directly at alokkumar23574@gmail.com.'
    });
  }
}

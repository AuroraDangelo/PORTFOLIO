import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MapPin, AlertCircle, RefreshCw } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          _subject: `[Portfolio] ${formData.subject || `Message from ${formData.name}`}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Unable to send message at this time.');
      }
    } catch (err: any) {
      console.error('Contact Form submission error:', err);
      // Fallback: If network failed or blocked, offer manual mailto
      setErrorMessage(
        'There was an issue sending your message automatically. You can try again or email me directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallback = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Hi Anshika,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <section
      id="contact"
      style={{
        padding: '100px 24px 60px',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="micro-label"
          style={{ justifyContent: 'center', marginBottom: '12px' }}
        >
          <Mail size={14} />
          <span>Get in Touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          LET'S <span className="text-aurora">BUILD SOMETHING</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '600px',
            margin: '16px auto 0',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
          }}
        >
          Have a project in mind, an opportunity to discuss, or just want to connect? My inbox is always open.
        </motion.p>
      </div>

      {/* Grid: Direct Contact Info & Interactive Form */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Direct Info & Quick Copy */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel"
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '28px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#34d399',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Direct Communication
            </span>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px', marginBottom: '16px' }}>
              Let's connect & collaborate.
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              I am actively seeking software engineering internships and junior developer opportunities where I can contribute to high-impact systems.
            </p>

            {/* Email Copy Card */}
            <div
              style={{
                padding: '16px 20px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                <Mail size={20} style={{ color: '#10b981', flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.92rem',
                    color: 'var(--text-primary)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {PERSONAL_INFO.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  background: copied ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: copied ? '#34d399' : 'var(--text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <MapPin size={16} className="text-cyan-400" />
              <span>Based in India • Available Worldwide</span>
            </div>
          </div>

          {/* Social Links Bar */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, padding: '10px 14px', fontSize: '0.88rem' }}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, padding: '10px 14px', fontSize: '0.88rem' }}
            >
              <LinkedinIcon size={16} style={{ color: '#0ea5e9' }} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel"
          style={{
            padding: '36px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
              Send a Direct Message
            </h3>
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-primary)',
                background: 'rgba(56, 189, 248, 0.1)',
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(56, 189, 248, 0.2)',
              }}
            >
              Delivered to {PERSONAL_INFO.email.split('@')[0]}
            </span>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: '36px 24px',
                borderRadius: '14px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                }}
              >
                <Check size={26} strokeWidth={2.5} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                Message Sent Successfully!
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '380px' }}>
                Your message has been delivered to <strong>{PERSONAL_INFO.email}</strong>. I will get back to you as soon as possible!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
                style={{
                  marginTop: '10px',
                  padding: '8px 18px',
                  fontSize: '0.85rem',
                  gap: '6px',
                }}
              >
                <RefreshCw size={14} />
                <span>Send Another Message</span>
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {errorMessage && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f87171',
                    fontSize: '0.88rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                  <a
                    href={mailtoFallback}
                    className="btn-secondary"
                    style={{
                      alignSelf: 'flex-start',
                      padding: '6px 12px',
                      fontSize: '0.8rem',
                      borderColor: 'rgba(239, 68, 68, 0.4)',
                      color: '#ffffff',
                    }}
                  >
                    Open in Your Email Client
                  </a>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Name <span style={{ color: 'var(--accent-primary)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah / Tech Recruiter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.92rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Email <span style={{ color: 'var(--accent-primary)' }}>*</span>{' '}
                    <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>(for reply)</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.92rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      marginTop: '4px',
                    }}
                  >
                    Where Anshika can send her response.
                  </span>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '0.92rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Message <span style={{ color: 'var(--accent-primary)' }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, role, or how we can work together..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '0.92rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '110px',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  marginTop: '4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.8 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message to {PERSONAL_INFO.name.split(' ')[0]}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};


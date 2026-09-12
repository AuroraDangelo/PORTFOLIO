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
      className="section-wrapper"
      style={{
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
            fontSize: 'clamp(2.1rem, 4.5vw, 3.5rem)',
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
            margin: '14px auto 0',
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
          }}
        >
          Have a project in mind, an opportunity to discuss, or just want to connect? My inbox is always open.
        </motion.p>
      </div>

      {/* Grid: Direct Contact Info & Interactive Form */}
      <div className="contact-cards-grid">
        {/* Left Column: Direct Info & Quick Copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel contact-card-panel"
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#34d399',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
              }}
            >
              Direct Communication
            </span>

            <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', fontWeight: 800, marginTop: '8px', marginBottom: '12px', lineHeight: 1.25 }}>
              Let's connect & collaborate.
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '18px', fontSize: '0.92rem' }}>
              I am actively seeking software engineering internships and junior developer opportunities where I can contribute to high-impact systems.
            </p>

            {/* Email Copy Card */}
            <div className="contact-email-box">
              <div className="contact-email-content">
                <Mail size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                <span className="contact-email-text">
                  {PERSONAL_INFO.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="contact-copy-btn"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.86rem', marginTop: '12px' }}>
              <MapPin size={15} className="text-cyan-400" style={{ flexShrink: 0 }} />
              <span>Based in India • Available Worldwide</span>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="contact-social-bar">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary contact-social-btn"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary contact-social-btn"
            >
              <LinkedinIcon size={16} style={{ color: '#0ea5e9' }} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-panel contact-card-panel"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '8px' }}>
            <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)', fontWeight: 800, margin: 0 }}>
              Send a Direct Message
            </h3>
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-primary)',
                background: 'rgba(56, 189, 248, 0.1)',
                padding: '3px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(56, 189, 248, 0.2)',
              }}
            >
              Direct Delivery
            </span>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: '28px 16px',
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
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                }}
              >
                <Check size={24} strokeWidth={2.5} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                Message Sent Successfully!
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '380px' }}>
                Your message has been delivered to <strong>{PERSONAL_INFO.email}</strong>. I will get back to you as soon as possible!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
                style={{
                  marginTop: '8px',
                  padding: '8px 16px',
                  fontSize: '0.84rem',
                  gap: '6px',
                }}
              >
                <RefreshCw size={14} />
                <span>Send Another Message</span>
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {errorMessage && (
                <div
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f87171',
                    fontSize: '0.86rem',
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
                      padding: '5px 10px',
                      fontSize: '0.78rem',
                      borderColor: 'rgba(239, 68, 68, 0.4)',
                      color: '#ffffff',
                    }}
                  >
                    Open in Your Email Client
                  </a>
                </div>
              )}

              <div className="contact-form-row">
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
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
                    className="contact-input-field"
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Email <span style={{ color: 'var(--accent-primary)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="contact-input-field"
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
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
                  className="contact-input-field"
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8rem',
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
                  className="contact-input-field"
                  style={{
                    resize: 'vertical',
                    minHeight: '100px',
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
                  padding: '13px 16px',
                  marginTop: '4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.8 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '0.94rem',
                }}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={17} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Embedded Responsive Styles for Contact Section */}
      <style>{`
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          align-items: stretch;
        }
        .contact-card-panel {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          gap: 24px;
        }
        .contact-email-box {
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 14px;
        }
        .contact-email-content {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
          flex: 1;
        }
        .contact-email-text {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .contact-copy-btn {
          padding: 7px 12px;
          border-radius: 8px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .contact-social-bar {
          display: flex;
          gap: 10px;
          padding-top: 18px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
        }
        .contact-social-btn {
          flex: 1 1 120px;
          padding: 9px 12px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .contact-input-field {
          width: 100%;
          padding: 11px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 16px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .contact-card-panel {
            padding: 24px 18px !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 600px) {
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
          .contact-email-box {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            padding: 12px 14px !important;
          }
          .contact-email-content {
            justify-content: flex-start;
          }
          .contact-email-text {
            font-size: 0.82rem !important;
            word-break: break-all;
            white-space: normal;
          }
          .contact-copy-btn {
            justify-content: center;
            width: 100%;
            padding: 8px 12px !important;
          }
          .contact-social-bar {
            flex-direction: column;
          }
          .contact-social-btn {
            width: 100% !important;
            flex: 1 1 auto;
          }
        }

        @media (max-width: 480px) {
          .contact-card-panel {
            padding: 18px 14px !important;
          }
        }
      `}</style>
    </section>
  );
};



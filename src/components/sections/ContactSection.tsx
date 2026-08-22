import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} style={{ color: '#10b981' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.92rem',
                    color: 'var(--text-primary)',
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
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>
            Send a Direct Message
          </h3>

          {submitted ? (
            <div
              style={{
                padding: '32px 24px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#10b981',
                  color: '#05070c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Check size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Message Sent Successfully!
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Thank you for reaching out. I will get back to you shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    marginBottom: '6px',
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', marginTop: '6px' }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
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

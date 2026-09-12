import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, ExternalLink, Sparkles, Code, Terminal, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="hero-section-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'center',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Availability Badge with high-contrast text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 18px',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#ffffff',
            background: 'rgba(10, 16, 28, 0.85)',
            border: '1px solid rgba(52, 211, 153, 0.45)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(16, 185, 129, 0.25)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 10px #10b981',
              display: 'inline-block',
            }}
          />
          <span>{PERSONAL_INFO.availability}</span>
        </motion.div>

        {/* Main Name Heading - Crisp Solid Luminous Pure White */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.3rem, 7.5vw, 5.8rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              margin: '4px 0',
              wordBreak: 'break-word',
            }}
          >
            ANSHIKA PANDEY
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '8px',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(1.3rem, 3.2vw, 2.2rem)',
                fontWeight: 700,
                color: '#38bdf8',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.01em',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.8)',
              }}
            >
              {PERSONAL_INFO.role}
            </span>
          </div>

          {/* Supporting Headline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '8px',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.85rem, 1.8vw, 1.15rem)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
            }}
          >
            <span>MCA Student</span>
            <span style={{ color: '#10b981', fontSize: '1.2rem' }}>•</span>
            <span>Developer</span>
            <span style={{ color: '#10b981', fontSize: '1.2rem' }}>•</span>
            <span>Problem Solver</span>
          </div>
        </motion.div>

        {/* Concise Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          style={{
            maxWidth: '680px',
            fontSize: 'clamp(0.98rem, 1.8vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            fontWeight: 400,
          }}
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Primary & Secondary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="hero-cta-buttons"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
            style={{ minWidth: '160px' }}
          >
            <Sparkles size={18} />
            <span>View My Work</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="btn-secondary"
            style={{ minWidth: '150px' }}
          >
            <span>View Resume</span>
            <ExternalLink size={16} />
          </button>
        </motion.div>

        {/* Social / Profile Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginTop: '4px',
          }}
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel"
            style={{
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '0.85rem',
              color: '#ffffff',
              borderRadius: '9999px',
            }}
            aria-label="GitHub Profile"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel"
            style={{
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '0.85rem',
              color: '#ffffff',
              borderRadius: '9999px',
            }}
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={16} style={{ color: '#38bdf8' }} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="glass-panel"
            style={{
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '0.85rem',
              color: '#ffffff',
              borderRadius: '9999px',
            }}
            aria-label="Send Email"
          >
            <Mail size={16} style={{ color: '#34d399' }} />
            <span>Email</span>
          </a>
        </motion.div>

        {/* Quick Highlights Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="hero-metrics-grid"
        >
          <div
            className="glass-panel hero-metric-card"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Code size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                7+ Projects
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                MERN & Full-Stack
              </div>
            </div>
          </div>

          <div
            className="glass-panel hero-metric-card"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.15)',
                color: '#06b6d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Award size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                MCA (2025–27)
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                BCA First Class
              </div>
            </div>
          </div>

          <div
            className="glass-panel hero-metric-card"
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(139, 92, 246, 0.15)',
                color: '#a78bfa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Terminal size={20} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                300+ Solved
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                LeetCode & DSA
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hero-scroll-indicator"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
      >
        <span
          style={{
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--text-muted)',
          }}
        >
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#34d399',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.2)',
          }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>

      {/* Embedded Responsive Styles for Hero Section */}
      <style>{`
        .hero-section-container {
          padding: 130px 24px 70px;
        }
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 6px;
        }
        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
          width: 100%;
          max-width: 860px;
          margin-top: 24px;
        }
        .hero-metric-card {
          padding: 16px 18px;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hero-section-container {
            padding: 100px 16px 60px !important;
            min-height: auto !important;
          }
          .hero-metrics-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            margin-top: 18px !important;
          }
          .hero-scroll-indicator {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section-container {
            padding: 90px 12px 40px !important;
          }
          .hero-cta-buttons {
            width: 100%;
          }
          .hero-cta-buttons button {
            width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};


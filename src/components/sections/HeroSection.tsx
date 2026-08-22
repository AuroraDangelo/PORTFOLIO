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
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '130px 24px 70px',
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
          gap: '22px',
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
            padding: '8px 20px',
            borderRadius: '9999px',
            fontSize: '0.82rem',
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
              fontSize: 'clamp(2.8rem, 7.2vw, 5.8rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              margin: '6px 0',
            }}
          >
            ANSHIKA PANDEY
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '10px',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)',
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

          {/* Supporting Headline - High-Contrast Ice-Cyan/White with glowing emerald bullets */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '10px',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
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
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
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
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginTop: '8px',
          }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary"
            style={{ minWidth: '170px' }}
          >
            <Sparkles size={18} />
            <span>View My Work</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="btn-secondary"
            style={{ minWidth: '160px' }}
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
            gap: '14px',
            marginTop: '6px',
          }}
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel"
            style={{
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: '#ffffff',
              borderRadius: '9999px',
            }}
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel"
            style={{
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: '#ffffff',
              borderRadius: '9999px',
            }}
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} style={{ color: '#38bdf8' }} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="glass-panel"
            style={{
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              color: '#ffffff',
              borderRadius: '9999px',
            }}
            aria-label="Send Email"
          >
            <Mail size={18} style={{ color: '#34d399' }} />
            <span>Email</span>
          </a>
        </motion.div>

        {/* Quick Highlights Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            width: '100%',
            maxWidth: '860px',
            marginTop: '28px',
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '18px 20px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Code size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                7+ Projects
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                MERN & Full-Stack
              </div>
            </div>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '18px 20px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.15)',
                color: '#06b6d4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                MCA (2025–27)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                BCA First Class (2022–25)
              </div>
            </div>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '18px 20px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(139, 92, 246, 0.15)',
                color: '#a78bfa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Terminal size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                300+ Solved
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                LeetCode & DSA Practice
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
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
      >
        <span
          style={{
            fontSize: '0.75rem',
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
            width: '28px',
            height: '28px',
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
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};

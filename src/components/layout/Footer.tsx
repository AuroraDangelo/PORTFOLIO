import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(5, 7, 12, 0.7)',
        backdropFilter: 'blur(16px)',
        padding: '40px 24px 30px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        {/* Monogram / Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
              color: '#05070c',
              fontWeight: 900,
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            AP
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>
            Anshika Pandey
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
          }}
        >
          <a href="#about" style={{ transition: 'color 0.2s' }}>About</a>
          <a href="#skills" style={{ transition: 'color 0.2s' }}>Skills</a>
          <a href="#projects" style={{ transition: 'color 0.2s' }}>Projects</a>
          <a href="#journey" style={{ transition: 'color 0.2s' }}>Journey</a>
          <a href="#code" style={{ transition: 'color 0.2s' }}>Code</a>
          <a href="#contact" style={{ transition: 'color 0.2s' }}>Contact</a>
        </div>

        {/* Copyright & Meta */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Anshika Pandey. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
            Built with React 19, TypeScript, Three.js Aurora Shaders & Framer Motion.
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          style={{
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '9999px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            fontSize: '0.82rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={14} className="text-emerald-400" />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
};

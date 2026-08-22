import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: 'rgba(5, 7, 12, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '720px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px 32px',
            background: 'var(--bg-card-solid)',
            border: '1px solid var(--border-active)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.2)',
            position: 'relative',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge-tech" style={{ fontSize: '0.8rem' }}>
                {project.category}
              </span>
              {project.badge && (
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#38bdf8',
                    padding: '3px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
              }}
            >
              {project.title}
            </h2>

            <p style={{ color: '#34d399', fontSize: '1.05rem', marginTop: '6px', fontWeight: 500 }}>
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Overview</h3>
            <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                Key Engineering Highlights
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Details */}
          {project.architectureDetails && (
            <div
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: '#38bdf8' }}>
                <Cpu size={16} />
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  SYSTEM ARCHITECTURE NOTE
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>
                {project.architectureDetails}
              </p>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Technologies Utilized
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: '1 1 180px' }}
              >
                <ExternalLink size={17} />
                <span>Live Demo</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: '1 1 180px' }}
            >
              <GithubIcon size={17} />
              <span>GitHub Repository</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

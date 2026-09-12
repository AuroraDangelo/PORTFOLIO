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
        className="project-modal-backdrop"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(5, 7, 12, 0.88)',
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
          className="glass-panel project-modal-panel"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="project-modal-close-btn"
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div style={{ marginBottom: '20px', paddingRight: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span className="badge-tech" style={{ fontSize: '0.78rem' }}>
                {project.category}
              </span>
              {project.badge && (
                <span
                  style={{
                    fontSize: '0.74rem',
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
                fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                fontWeight: 800,
                lineHeight: 1.25,
                color: 'var(--text-primary)',
              }}
            >
              {project.title}
            </h2>

            <p style={{ color: '#34d399', fontSize: '0.98rem', marginTop: '6px', fontWeight: 600 }}>
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '22px' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Overview</h3>
            <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                Key Engineering Highlights
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.9rem',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircle2 size={17} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ wordBreak: 'break-word' }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Details */}
          {project.architectureDetails && (
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '22px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: '#38bdf8' }}>
                <Cpu size={16} />
                <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  SYSTEM ARCHITECTURE NOTE
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0, wordBreak: 'break-word' }}>
                {project.architectureDetails}
              </p>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              Technologies Utilized
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
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
          <div className="project-modal-btn-row">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: '1 1 160px', padding: '11px 18px' }}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: '1 1 160px', padding: '11px 18px' }}
            >
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .project-modal-backdrop {
          padding: 20px;
        }
        .project-modal-panel {
          width: 100%;
          max-width: 720px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 34px 30px;
          background: var(--bg-card-solid);
          border: 1px solid var(--border-active);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 185, 129, 0.2);
          position: relative;
        }
        .project-modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .project-modal-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 600px) {
          .project-modal-backdrop {
            padding: 12px;
          }
          .project-modal-panel {
            padding: 24px 16px !important;
            max-height: 92vh !important;
            border-radius: 16px !important;
          }
          .project-modal-close-btn {
            top: 12px;
            right: 12px;
            width: 32px;
            height: 32px;
          }
          .project-modal-btn-row {
            flex-direction: column;
          }
          .project-modal-btn-row a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

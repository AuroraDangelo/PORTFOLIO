import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Info,
  Activity,
  Bot,
  Newspaper,
  CloudSun,
  KeyRound,
  Dog,
} from 'lucide-react';
import { GithubIcon, ChromeIcon } from '../common/Icons';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { Project } from '../../types';
import { ProjectModal } from '../common/ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const otherProjects = PROJECTS_DATA.filter((p) => !p.featured);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'expense-management-app':
        return <Activity size={24} className="text-emerald-400" />;
      case 'interview-ai':
        return <Bot size={24} className="text-cyan-400" />;
      case 'leetcode-ai-helper':
        return <ChromeIcon size={24} className="text-violet-400" />;
      case 'real-time-news-hub':
        return <Newspaper size={24} className="text-blue-400" />;
      case 'atmospheric-weather-app':
        return <CloudSun size={24} className="text-teal-400" />;
      case 'secure-password-generator':
        return <KeyRound size={24} className="text-pink-400" />;
      case 'tindog':
        return <Dog size={24} className="text-amber-400" />;
      default:
        return <FolderGit2 size={24} className="text-emerald-400" />;
    }
  };

  return (
    <section
      id="projects"
      style={{
        padding: '100px 24px',
        maxWidth: '1180px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="micro-label"
          style={{ justifyContent: 'center', marginBottom: '12px' }}
        >
          <FolderGit2 size={14} />
          <span>Featured Portfolio</span>
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
          THINGS I'VE <span className="text-aurora">BUILT</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '660px',
            margin: '16px auto 0',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
          }}
        >
          A showcase of full-stack engineering, AI integrations, browser extensions, and interactive web tools.
        </motion.p>
      </div>

      {/* Featured Projects (Editorial Layout) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '60px' }}>
        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="glass-panel"
              style={{
                padding: '36px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Left/Right Text Content */}
              <div style={{ order: isReversed ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span className="badge-tech" style={{ fontSize: '0.78rem' }}>
                    {project.category}
                  </span>
                  {project.badge && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '9999px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        color: '#38bdf8',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    marginBottom: '8px',
                  }}
                >
                  {project.title}
                </h3>

                <p style={{ color: '#34d399', fontSize: '0.98rem', fontWeight: 500, marginBottom: '16px' }}>
                  {project.tagline}
                </p>

                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px', color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
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

                {/* Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                  >
                    <Info size={16} />
                    <span>Project Details</span>
                  </button>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: '10px 18px', fontSize: '0.9rem' }}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ padding: '10px 18px', fontSize: '0.9rem' }}
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Graphic Mockup Area */}
              <div
                style={{
                  order: isReversed ? 1 : 2,
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(139, 92, 246, 0.08) 100%)',
                  border: '1px solid var(--border-subtle)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        Architecture Preview
                      </div>
                      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        Production Ready
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#34d399',
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <div style={{ margin: '20px 0' }}>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '10px',
                    }}
                  >
                    // Core Highlights
                  </div>
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '6px',
                      }}
                    >
                      <span style={{ color: '#34d399' }}>▹</span>
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span>MERN / Modern Stack</span>
                  <span style={{ color: '#38bdf8' }}>Interactive</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Projects Grid */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <Sparkles size={18} className="text-cyan-400" />
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Additional Projects & Utilities</h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getProjectIcon(project.id)}
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--text-muted)',
                        padding: '6px',
                        borderRadius: '6px',
                        transition: 'color 0.2s ease',
                      }}
                      title="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--text-muted)',
                          padding: '6px',
                          borderRadius: '6px',
                          transition: 'color 0.2s ease',
                        }}
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>{project.title}</h4>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  {project.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    color: '#34d399',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span>Learn more</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

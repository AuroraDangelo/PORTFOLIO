import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { JOURNEY_DATA } from '../../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      className="section-wrapper"
      style={{
        maxWidth: '1000px',
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
          <GraduationCap size={14} />
          <span>Academic & Learning Path</span>
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
          MY <span className="text-aurora">JOURNEY</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '620px',
            margin: '14px auto 0',
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
          }}
        >
          Continuous evolution through computer applications, software engineering, and hands-on system building.
        </motion.p>
      </div>

      {/* Cinematic Timeline */}
      <div className="journey-timeline-container">
        {/* Animated Central Glowing Line */}
        <div className="journey-timeline-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {JOURNEY_DATA.map((milestone, index) => (
            <motion.div
              key={milestone.degree}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              style={{ position: 'relative' }}
            >
              {/* Timeline Node Dot */}
              <div
                className="journey-node-dot"
                style={{
                  border: `3px solid ${index === 0 ? '#10b981' : '#06b6d4'}`,
                  boxShadow: `0 0 15px ${index === 0 ? '#10b981' : '#06b6d4'}`,
                }}
              >
                <div
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: index === 0 ? '#10b981' : '#06b6d4',
                  }}
                />
              </div>

              {/* Milestone Card */}
              <div className="glass-panel journey-milestone-card">
                {/* Status & Period Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#34d399',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                      }}
                    >
                      <Calendar size={13} />
                      {milestone.period}
                    </span>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <MapPin size={13} />
                      {milestone.location}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 9px',
                      borderRadius: '6px',
                      background: milestone.status === 'In Progress' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                      color: milestone.status === 'In Progress' ? '#38bdf8' : '#34d399',
                      border: `1px solid ${milestone.status === 'In Progress' ? 'rgba(56, 189, 248, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                    }}
                  >
                    {milestone.status}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.35rem, 2.4vw, 1.75rem)',
                    fontWeight: 800,
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {milestone.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px', fontSize: '0.94rem' }}>
                  {milestone.description}
                </p>

                {/* Grid for Learnings and Achievements */}
                <div className="journey-subgrid">
                  {/* Learnings */}
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '10px',
                      }}
                    >
                      <BookOpen size={16} className="text-emerald-400" />
                      <span>Key Curriculum Focus</span>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {milestone.keyLearnings.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.86rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: '#10b981', marginTop: '1px', flexShrink: 0 }}>▹</span>
                          <span style={{ wordBreak: 'break-word' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '10px',
                      }}
                    >
                      <Award size={16} className="text-cyan-400" />
                      <span>Milestones & Highlights</span>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {milestone.achievements.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.86rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: '#06b6d4', marginTop: '1px', flexShrink: 0 }}>▹</span>
                          <span style={{ wordBreak: 'break-word' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Embedded Responsive Styles for Journey Section */}
      <style>{`
        .journey-timeline-container {
          position: relative;
          padding-left: 32px;
        }
        .journey-timeline-line {
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 11px;
          width: 2px;
          background: linear-gradient(180deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%);
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);
        }
        .journey-node-dot {
          position: absolute;
          left: -32px;
          top: 24px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(-50%);
          z-index: 2;
        }
        .journey-milestone-card {
          padding: 30px;
          position: relative;
          overflow: hidden;
        }
        .journey-subgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding-top: 18px;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 768px) {
          .journey-timeline-container {
            padding-left: 24px !important;
          }
          .journey-timeline-line {
            left: 7px !important;
          }
          .journey-node-dot {
            left: -24px !important;
            width: 18px !important;
            height: 18px !important;
            top: 20px !important;
          }
          .journey-milestone-card {
            padding: 22px 16px !important;
          }
          .journey-subgrid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .journey-timeline-container {
            padding-left: 18px !important;
          }
          .journey-timeline-line {
            left: 5px !important;
          }
          .journey-node-dot {
            left: -18px !important;
            width: 15px !important;
            height: 15px !important;
            top: 18px !important;
          }
          .journey-milestone-card {
            padding: 18px 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

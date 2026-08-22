import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { JOURNEY_DATA } from '../../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      style={{
        padding: '100px 24px',
        maxWidth: '1000px',
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
          <GraduationCap size={14} />
          <span>Academic & Learning Path</span>
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
          MY <span className="text-aurora">JOURNEY</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '620px',
            margin: '16px auto 0',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
          }}
        >
          Continuous evolution through computer applications, software engineering, and hands-on system building.
        </motion.p>
      </div>

      {/* Cinematic Timeline */}
      <div
        style={{
          position: 'relative',
          paddingLeft: '32px',
        }}
      >
        {/* Animated Central Glowing Line */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            bottom: '10px',
            left: '11px',
            width: '2px',
            background: 'linear-gradient(180deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)',
            boxShadow: '0 0 12px rgba(16, 185, 129, 0.6)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
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
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '24px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--bg-primary)',
                  border: `3px solid ${index === 0 ? '#10b981' : '#06b6d4'}`,
                  boxShadow: `0 0 15px ${index === 0 ? '#10b981' : '#06b6d4'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: index === 0 ? '#10b981' : '#06b6d4',
                  }}
                />
              </div>

              {/* Milestone Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '32px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Status & Period Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#34d399',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                      }}
                    >
                      <Calendar size={14} />
                      {milestone.period}
                    </span>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <MapPin size={13} />
                      {milestone.location}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px 10px',
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
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                    fontWeight: 800,
                    marginBottom: '8px',
                  }}
                >
                  {milestone.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {milestone.description}
                </p>

                {/* Grid for Learnings and Achievements */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  {/* Learnings */}
                  <div>
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
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: '#10b981', marginTop: '1px' }}>▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div>
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
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: '#06b6d4', marginTop: '1px' }}>▹</span>
                          <span>{item}</span>
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
    </section>
  );
};

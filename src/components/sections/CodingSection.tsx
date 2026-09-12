import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, Flame } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { CODING_STATS_DATA } from '../../data/portfolioData';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export const CodingSection: React.FC = () => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalCommits, setTotalCommits] = useState<number>(CODING_STATS_DATA.github.contributionsThisYear);

  // Fetch real GitHub contribution data for AuroraDangelo
  useEffect(() => {
    let isMounted = true;
    fetch('https://github-contributions-api.jogruber.de/v4/AuroraDangelo?y=last')
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data && Array.isArray(data.contributions) && data.contributions.length > 0) {
          setContributions(data.contributions);
          if (data.total && typeof data.total.lastYear === 'number') {
            setTotalCommits(data.total.lastYear);
          }
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        console.warn('GitHub contributions live fetch fallback:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Display the most recent ~133 days (19 full weeks) in the widget matrix
  const displayDays = contributions.length > 0
    ? contributions.slice(-133)
    : [];

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 4:
        return '#34d399'; // Brightest neon emerald
      case 3:
        return '#10b981'; // Vibrant emerald
      case 2:
        return '#059669'; // Medium emerald
      case 1:
        return '#065f46'; // Subtle deep emerald
      default:
        return 'rgba(255, 255, 255, 0.05)';
    }
  };

  return (
    <section
      id="code"
      className="section-wrapper"
      style={{
        maxWidth: '1140px',
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
          <Terminal size={14} />
          <span>Competitive Programming & Open Source</span>
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
          MY <span className="text-aurora">CODE</span>
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
          Active problem solver sharpening algorithmic reasoning and engineering open-source repositories.
        </motion.p>
      </div>

      {/* Grid: LeetCode & GitHub Dashboard */}
      <div className="coding-cards-grid">
        {/* LeetCode Widget */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel coding-card"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(245, 158, 11, 0.15)',
                    color: '#f59e0b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Flame size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>LeetCode</h3>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    @anshikapandey04
                  </span>
                </div>
              </div>

              <a
                href={CODING_STATS_DATA.leetCode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.82rem',
                  color: '#34d399',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span>Profile</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Total Solved Big Display */}
            <div style={{ margin: '18px 0' }}>
              <div style={{ fontSize: 'clamp(2.3rem, 4vw, 2.8rem)', fontWeight: 900, lineHeight: 1, color: 'var(--text-primary)' }}>
                {CODING_STATS_DATA.leetCode.totalSolved}+
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Problems Resolved & Optimized
              </span>
            </div>

            {/* Difficulty Breakdown Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Easy */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '4px' }}>
                  <span style={{ color: '#34d399', fontWeight: 600 }}>Easy</span>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>{CODING_STATS_DATA.leetCode.easy}</span>
                </div>
                <div style={{ height: '6px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.06)', overflow: 'hidden' }}>
                  <div style={{ width: `${(CODING_STATS_DATA.leetCode.easy / (CODING_STATS_DATA.leetCode.totalSolved || 1)) * 100}%`, height: '100%', background: '#34d399' }} />
                </div>
              </div>

              {/* Medium */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '4px' }}>
                  <span style={{ color: '#fbbf24', fontWeight: 600 }}>Medium</span>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>{CODING_STATS_DATA.leetCode.medium}</span>
                </div>
                <div style={{ height: '6px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.06)', overflow: 'hidden' }}>
                  <div style={{ width: `${(CODING_STATS_DATA.leetCode.medium / (CODING_STATS_DATA.leetCode.totalSolved || 1)) * 100}%`, height: '100%', background: '#fbbf24' }} />
                </div>
              </div>

              {/* Hard */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '4px' }}>
                  <span style={{ color: '#f87171', fontWeight: 600 }}>Hard</span>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>{CODING_STATS_DATA.leetCode.hard}</span>
                </div>
                <div style={{ height: '6px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.06)', overflow: 'hidden' }}>
                  <div style={{ width: `${(CODING_STATS_DATA.leetCode.hard / (CODING_STATS_DATA.leetCode.totalSolved || 1)) * 100}%`, height: '100%', background: '#f87171' }} />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            <span>Track: <strong style={{ color: '#38bdf8' }}>DSA & Problem Solving</strong></span>
            <span>Focus: <strong style={{ color: '#34d399' }}>C++ / Java</strong></span>
          </div>
        </motion.div>

        {/* GitHub & Open Source Widget */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-panel coding-card"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <GithubIcon size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>GitHub Activity</h3>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    @AuroraDangelo
                  </span>
                </div>
              </div>

              <a
                href={CODING_STATS_DATA.github.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.82rem',
                  color: '#34d399',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span>Profile</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Quick Stat Tiles */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', margin: '18px 0' }}>
              <div style={{ padding: '10px 8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {CODING_STATS_DATA.github.publicRepos}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Repositories</div>
              </div>

              <div style={{ padding: '10px 8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', fontWeight: 800, color: '#38bdf8' }}>
                  {totalCommits}+
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Contributions</div>
              </div>

              <div style={{ padding: '10px 8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', fontWeight: 800, color: '#a78bfa' }}>
                  {CODING_STATS_DATA.geeksForGeeks.solvedProblems}+
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>GFG Solved</div>
              </div>
            </div>

            {/* Real GitHub Contribution Matrix */}
            <div style={{ marginTop: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '4px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Contribution Heatmap
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((lvl) => (
                    <div
                      key={lvl}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '2px',
                        background: getHeatmapColor(lvl),
                      }}
                    />
                  ))}
                  <span>More</span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  gridTemplateRows: 'repeat(7, 1fr)',
                  gap: '3px',
                  padding: '10px',
                  borderRadius: '12px',
                  background: 'rgba(5, 7, 12, 0.5)',
                  border: '1px solid var(--border-subtle)',
                  overflowX: 'auto',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {displayDays.map((day) => (
                  <div
                    key={day.date}
                    style={{
                      width: '11px',
                      height: '11px',
                      borderRadius: '2px',
                      background: getHeatmapColor(day.level),
                      cursor: 'pointer',
                      transition: 'transform 0.15s ease, filter 0.15s ease',
                    }}
                    title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.3)';
                      e.currentTarget.style.filter = 'brightness(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter = 'brightness(1)';
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            <span>Primary Languages: <strong style={{ color: 'var(--text-primary)' }}>JS, C++, Java</strong></span>
            <span style={{ color: '#10b981' }}>Live Synced</span>
          </div>
        </motion.div>
      </div>

      {/* Embedded Responsive Styles for Coding Section */}
      <style>{`
        .coding-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
          gap: 24px;
          margin-bottom: 36px;
        }
        .coding-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          gap: 22px;
        }

        @media (max-width: 768px) {
          .coding-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .coding-card {
            padding: 22px 16px !important;
            gap: 18px !important;
          }
        }

        @media (max-width: 480px) {
          .coding-card {
            padding: 18px 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleQuickDownload = () => {
    setDownloadSuccess(true);
    const element = document.createElement('a');
    const file = new Blob([
      `ANSHIKA PANDEY - Software Developer Resume
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

MCA (2025 - 2027) | BCA (2022 - 2025)
Skills: C++, Java, JavaScript, Python, SQL, React, Node.js, Express.js, MongoDB
Projects: Expense Management App (MERN), Interview AI, LeetCode AI Helper, Real-Time News Hub, Atmospheric Weather App
`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Anshika_Pandey_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section
      id="resume"
      style={{
        padding: '100px 24px',
        maxWidth: '1080px',
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
          <FileText size={14} />
          <span>Curriculum Vitae</span>
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
          MY <span className="text-aurora">RESUME</span>
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
          A consolidated view of my engineering credentials, projects, and academic background.
        </motion.p>
      </div>

      {/* Resume Card Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-panel"
        style={{
          padding: '40px 36px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Summary Info */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#34d399',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '8px',
              }}
            >
              Professional Profile
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '14px' }}>
              Anshika Pandey
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
              Software developer & MCA candidate (2025–2027) with a proven foundation in full-stack web applications, data structures, and algorithmic problem solving. Ready to contribute to forward-thinking engineering teams.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>MCA Scholar (2025–2027) • BCA Distinction (2022–2025)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} className="text-cyan-400" />
                <span>Full-Stack Mastery: MERN Stack, REST APIs, SQL, System Design</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} className="text-violet-400" />
                <span>300+ Problems Solved across LeetCode and Competitive Platforms</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenResumeModal}
                className="btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                <Eye size={18} />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={handleQuickDownload}
                className="btn-secondary"
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                {downloadSuccess ? <Check size={18} className="text-emerald-400" /> : <Download size={18} />}
                <span>{downloadSuccess ? 'Downloaded!' : 'Download Resume'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Mini-Document Snapshot */}
          <div
            style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>resume.pdf — Preview</span>
            </div>

            <div style={{ color: '#38bdf8', fontWeight: 600, marginBottom: '6px' }}>
              // CORE COMPETENCIES
            </div>
            <div style={{ marginBottom: '12px' }}>
              • Languages: C++, C, Java, JavaScript, Python, SQL<br />
              • Web: React, Node.js, Express.js, Tailwind, HTML5/CSS3<br />
              • DB & Tools: MongoDB, MySQL, Git, VS Code
            </div>

            <div style={{ color: '#34d399', fontWeight: 600, marginBottom: '6px' }}>
              // RECENT HIGHLIGHTS
            </div>
            <div>
              • Expense Management App (Full Stack MERN)<br />
              • Interview AI Mock Interview Simulator<br />
              • LeetCode AI Assistant Chrome Extension<br />
              • First Class Bachelor of Computer Applications
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

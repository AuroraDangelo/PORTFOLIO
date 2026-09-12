import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, Check } from 'lucide-react';


interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleQuickDownload = () => {
    setDownloadSuccess(true);
    const a = document.createElement('a');
    a.href = '/AnshikaPandeyResume.pdf';
    a.download = 'Anshika_Pandey_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section
      id="resume"
      className="section-wrapper"
      style={{
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
            fontSize: 'clamp(2.1rem, 4.5vw, 3.5rem)',
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
            margin: '14px auto 0',
            fontSize: '1.05rem',
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
        className="glass-panel resume-preview-panel"
      >
        <div className="resume-grid-layout">
          {/* Left Column: Summary Info */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#34d399',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '8px',
              }}
            >
              Professional Profile
            </div>

            <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.8rem)', fontWeight: 800, marginBottom: '12px' }}>
              Anshika Pandey
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '18px', fontSize: '0.94rem' }}>
              Software developer & MCA candidate (2025–2027) with a proven foundation in full-stack web applications, data structures, and algorithmic problem solving. Ready to contribute to forward-thinking engineering teams.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem' }}>
                <CheckCircle2 size={17} className="text-emerald-400" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>MCA Scholar (2025–2027) • BCA Distinction (2022–2025)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem' }}>
                <CheckCircle2 size={17} className="text-cyan-400" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Full-Stack Mastery: MERN Stack, REST APIs, SQL, System Design</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem' }}>
                <CheckCircle2 size={17} className="text-violet-400" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>300+ Problems Solved across LeetCode and Competitive Platforms</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="resume-cta-buttons">
              <button
                onClick={onOpenResumeModal}
                className="btn-primary"
                style={{ padding: '11px 22px', fontSize: '0.92rem' }}
              >
                <Eye size={17} />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={handleQuickDownload}
                className="btn-secondary"
                style={{ padding: '11px 22px', fontSize: '0.92rem' }}
              >
                {downloadSuccess ? <Check size={17} className="text-emerald-400" /> : <Download size={17} />}
                <span>{downloadSuccess ? 'Downloaded!' : 'Download Resume'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Stylized Mini-Document Snapshot */}
          <div
            className="resume-doc-snapshot"
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
            <div style={{ marginBottom: '12px', wordBreak: 'break-word' }}>
              • Languages: C++, C, Java, JavaScript, Python, SQL<br />
              • Web: React, Node.js, Express.js, Tailwind, HTML5/CSS3<br />
              • DB & Tools: MongoDB, MySQL, Git, VS Code
            </div>

            <div style={{ color: '#34d399', fontWeight: 600, marginBottom: '6px' }}>
              // RECENT HIGHLIGHTS
            </div>
            <div style={{ wordBreak: 'break-word' }}>
              • Expense Management App (Full Stack MERN)<br />
              • Interview AI Mock Interview Simulator<br />
              • LeetCode AI Assistant Chrome Extension<br />
              • First Class Bachelor of Computer Applications
            </div>
          </div>
        </div>
      </motion.div>

      {/* Embedded Responsive Styles for Resume Section */}
      <style>{`
        .resume-preview-panel {
          padding: 38px 34px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }
        .resume-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          align-items: center;
        }
        .resume-cta-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .resume-doc-snapshot {
          padding: 22px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          line-height: 1.6;
          color: var(--text-secondary);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 860px) {
          .resume-preview-panel {
            padding: 26px 20px !important;
          }
          .resume-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .resume-preview-panel {
            padding: 20px 14px !important;
          }
          .resume-cta-buttons {
            width: 100%;
          }
          .resume-cta-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }
          .resume-doc-snapshot {
            padding: 16px 14px !important;
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </section>
  );
};


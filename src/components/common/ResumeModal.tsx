import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Check, Mail, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    const element = document.createElement('a');
    const file = new Blob([
      `ANSHIKA PANDEY - Software Developer Resume
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

EDUCATION
- Master of Computer Applications (MCA), 2025 - 2027
- Bachelor of Computer Applications (BCA), 2022 - 2025 (First Class Distinction)

TECHNICAL SKILLS
- Languages: C++, C, Java, JavaScript, Python, SQL
- Frontend: React, HTML5, CSS3, Tailwind CSS, Bootstrap
- Backend: Node.js, Express.js, REST APIs
- Databases: MongoDB, MySQL, Relational SQL
- Tools: Git, GitHub, VS Code, IntelliJ IDEA

FLAGSHIP PROJECTS
1. Expense Management App (MERN Stack)
   - Real-time transaction ledger, category charts, JWT auth, MongoDB Aggregation.
2. Interview AI (AI Mock Interviewer)
   - LLM-powered mock questions, speech evaluation, real-time feedback scoring.
3. LeetCode AI Helper (Chrome Extension)
   - Contextual hints, complexity analysis, Manifest V3.
4. Real-Time News Hub (Node.js/Express)
   - Dynamic multi-category breaking news aggregator.
5. Atmospheric Weather App
   - Geolocation & multi-day weather forecast engine.
`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Anshika_Pandey_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setTimeout(() => setDownloaded(false), 3000);
  };

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
          background: 'rgba(5, 7, 12, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="glass-panel"
          style={{
            width: '100%',
            maxWidth: '840px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px',
            background: 'var(--bg-card-solid)',
            border: '1px solid var(--border-active)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(16, 185, 129, 0.2)',
            position: 'relative',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={20} className="text-emerald-400" />
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Curriculum Vitae Preview</h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={handleDownload} className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                {downloaded ? <Check size={16} /> : <Download size={16} />}
                <span>{downloaded ? 'Downloaded!' : 'Download Resume'}</span>
              </button>

              <button
                onClick={onClose}
                style={{
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
                }}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Styled Resume Document */}
          <div
            style={{
              padding: '28px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Candidate Header */}
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                ANSHIKA PANDEY
              </h1>
              <p style={{ color: '#34d399', fontWeight: 600, fontSize: '1.05rem', margin: '4px 0 12px' }}>
                Software Developer • MCA Scholar
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} className="text-emerald-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} className="text-cyan-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={14} className="text-violet-400" />
                  github.com/anshikapandey
                </span>
              </div>
            </div>

            {/* Section: Education */}
            <div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#38bdf8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '6px',
                  marginBottom: '14px',
                }}
              >
                Education
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>Master of Computer Applications (MCA)</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#34d399', fontSize: '0.85rem' }}>
                      2025 – 2027 (Pursuing)
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Advanced Computing, Distributed Systems, Cloud Architecture & Scalable Web Systems
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>Bachelor of Computer Applications (BCA)</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#34d399', fontSize: '0.85rem' }}>
                      2022 – 2025
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Core Computer Science, Data Structures, OOP, Database Management Systems (First Class Distinction)
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Technical Skills */}
            <div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#38bdf8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '6px',
                  marginBottom: '14px',
                }}
              >
                Technical Capabilities
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Languages:</strong> C++, C, Java, JavaScript (ES6+), Python, SQL
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Frontend:</strong> React, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive UI/UX
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Backend & APIs:</strong> Node.js, Express.js, RESTful Architecture, JWT Auth
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Databases:</strong> MongoDB (Mongoose), SQL (MySQL/PostgreSQL), Schema Optimization
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Developer Tools:</strong> Git, GitHub, VS Code, IntelliJ IDEA
                </div>
              </div>
            </div>

            {/* Section: Key Projects */}
            <div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#38bdf8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '6px',
                  marginBottom: '14px',
                }}
              >
                Featured Engineering Projects
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>Expense Management App — Full Stack MERN</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MongoDB • Express • React • Node</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Engineered personal finance intelligence application with JWT security, MongoDB aggregation pipelines, and interactive category budget analytics charts.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>Interview AI — AI Mock Interview Platform</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>React • Node.js • LLM API</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Built interactive technical interview simulator generating contextual questions, evaluating real-time responses, and providing comprehensive scoring cards.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                    <span>LeetCode AI Helper — Chrome Extension</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>JavaScript • Manifest V3</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    Developed browser extension offering progressive hints, complexity analysis, and edge-case reminders without leaking full solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Check, ExternalLink } from 'lucide-react';

const RESUME_PDF = '/AnshikaPandeyResume.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    const a = document.createElement('a');
    a.href = RESUME_PDF;
    a.download = 'Anshika_Pandey_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleOpenInTab = () => {
    window.open(RESUME_PDF, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div
        className="resume-modal-backdrop"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(5, 7, 12, 0.90)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="resume-modal-window"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top toolbar */}
          <div className="resume-modal-toolbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
              <FileText size={18} color="#34d399" style={{ flexShrink: 0 }} />
              <span className="resume-modal-title">
                Curriculum Vitae — Anshika Pandey
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              {/* Open in new tab */}
              <button
                onClick={handleOpenInTab}
                className="btn-secondary"
                style={{ padding: '6px 12px', fontSize: '0.8rem', gap: '5px' }}
                title="Open PDF in new tab"
              >
                <ExternalLink size={13} />
                <span>Open</span>
              </button>

              {/* Download PDF */}
              <button
                onClick={handleDownload}
                className="btn-primary"
                style={{ padding: '6px 14px', fontSize: '0.8rem', gap: '5px' }}
              >
                {downloaded ? <Check size={14} /> : <Download size={14} />}
                <span>{downloaded ? 'Saved!' : 'Download'}</span>
              </button>

              {/* Close */}
              <button
                onClick={onClose}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* PDF embed — fills the rest of the modal */}
          <iframe
            src={`${RESUME_PDF}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Anshika Pandey Resume"
            style={{
              flex: 1,
              width: '100%',
              border: 'none',
              background: '#fff',
            }}
          />
        </motion.div>
      </div>

      <style>{`
        .resume-modal-backdrop {
          padding: 16px;
        }
        .resume-modal-window {
          width: 100%;
          maxWidth: 900px;
          height: 92vh;
          display: flex;
          flex-direction: column;
          background: #0a0d16;
          border: 1px solid rgba(52,211,153,0.35);
          border-radius: 18px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.85), 0 0 40px rgba(16,185,129,0.15);
          overflow: hidden;
          position: relative;
        }
        .resume-modal-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          background: rgba(10,13,22,0.98);
          flex-shrink: 0;
          gap: 10px;
        }
        .resume-modal-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: #f8fafc;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 600px) {
          .resume-modal-backdrop {
            padding: 8px;
          }
          .resume-modal-window {
            height: 94vh !important;
            border-radius: 14px !important;
          }
          .resume-modal-toolbar {
            padding: 10px 14px !important;
          }
          .resume-modal-title {
            font-size: 0.88rem !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

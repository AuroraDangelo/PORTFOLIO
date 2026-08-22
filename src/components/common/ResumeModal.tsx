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
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
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
          style={{
            width: '100%',
            maxWidth: '900px',
            height: '92vh',
            display: 'flex',
            flexDirection: 'column',
            background: '#0a0d16',
            border: '1px solid rgba(52,211,153,0.35)',
            borderRadius: '18px',
            boxShadow: '0 30px 80px rgba(0,0,0,0.85), 0 0 40px rgba(16,185,129,0.15)',
            overflow: 'hidden',
            position: 'relative',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top toolbar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 22px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(10,13,22,0.98)',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <FileText size={18} color="#34d399" />
              <span style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700,
                fontSize: '1.05rem', color: '#f8fafc',
              }}>
                Curriculum Vitae — Anshika Pandey
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Open in new tab */}
              <button
                onClick={handleOpenInTab}
                className="btn-secondary"
                style={{ padding: '7px 14px', fontSize: '0.82rem', gap: '6px' }}
                title="Open PDF in new tab"
              >
                <ExternalLink size={14} />
                <span>Open</span>
              </button>

              {/* Download PDF */}
              <button
                onClick={handleDownload}
                className="btn-primary"
                style={{ padding: '7px 16px', fontSize: '0.82rem', gap: '6px' }}
              >
                {downloaded ? <Check size={15} /> : <Download size={15} />}
                <span>{downloaded ? 'Saved!' : 'Download PDF'}</span>
              </button>

              {/* Close */}
              <button
                onClick={onClose}
                style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#94a3b8', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
                aria-label="Close modal"
              >
                <X size={17} />
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
    </AnimatePresence>
  );
};

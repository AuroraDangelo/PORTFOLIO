import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';


interface NavbarProps {
  onOpenResumeModal: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Code', href: '#code' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: isScrolled ? '12px 20px' : '20px 20px',
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <nav
          className="glass-nav"
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '8px 16px',
            borderRadius: '9999px',
            width: '100%',
            maxWidth: '1080px',
            transition: 'all 0.3s ease',
          }}
          aria-label="Main Navigation"
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.15rem',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#05070c',
                fontWeight: 900,
                fontSize: '0.9rem',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)',
              }}
            >
              AP
            </div>
            <span className="brand-name">Anshika Pandey</span>
          </a>

          {/* Desktop Nav Items */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    position: 'relative',
                    padding: '8px 14px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                    borderRadius: '9999px',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    background: isActive ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#34d399',
                        boxShadow: '0 0 8px #34d399',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Controls: Resume, Theme Toggle, Mobile Menu */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={onOpenResumeModal}
              className="btn-secondary"
              style={{
                padding: '6px 14px',
                fontSize: '0.85rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              title="Open Resume Viewer"
            >
              <FileText size={15} />
              <span className="hide-mobile">Resume</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(5, 7, 12, 0.92)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            padding: '24px',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              width: '100%',
              maxWidth: '300px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  color: activeSection === link.href.substring(1) ? '#34d399' : 'var(--text-primary)',
                  padding: '10px 24px',
                  borderRadius: '12px',
                  width: '100%',
                  textAlign: 'center',
                  background: activeSection === link.href.substring(1) ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                }}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="btn-primary"
              style={{ width: '100%', marginTop: '12px' }}
            >
              <FileText size={18} />
              View Resume
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .hide-mobile {
            display: none !important;
          }
          .brand-name {
            display: none !important;
          }
        }
        @media (min-width: 861px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

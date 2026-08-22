import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User, BrainCircuit, Rocket, CheckCircle2, Laptop, GraduationCap, Camera } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  const traits = [
    {
      icon: <BrainCircuit size={22} />,
      color: '#34d399',
      title: 'Problem-Solving Mindset',
      desc: 'Structured algorithmic intuition, strong DSA mastery, and optimized computational logic.',
    },
    {
      icon: <Laptop size={22} />,
      color: '#38bdf8',
      title: 'Full-Stack Engineering',
      desc: 'React UIs backed by scalable Node.js & Express REST APIs, MongoDB and relational databases.',
    },
    {
      icon: <Rocket size={22} />,
      color: '#a78bfa',
      title: 'Curiosity & Growth',
      desc: 'Continuously exploring AI integrations, Chrome Extensions, and performance-first architectures.',
    },
    {
      icon: <GraduationCap size={22} />,
      color: '#34d399',
      title: 'Academic Foundation',
      desc: 'MCA (2025–2027) building upon a solid BCA background (2022–2025) with distinction.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '110px 24px',
        maxWidth: '1140px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="micro-label"
          style={{ justifyContent: 'center', marginBottom: '12px' }}
        >
          <User size={14} />
          <span>About Me</span>
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
          WHO AM <span className="text-aurora">I?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '580px',
            margin: '14px auto 0',
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
          }}
        >
          A software developer blending analytical precision with modern digital craft.
        </motion.p>
      </div>

      {/* ── Top Row: Photo + Story ────────────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        {/* ── Photo Column ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            style={{ y: imgY, position: 'relative', width: 'fit-content' }}
          >
            {/* Outer decorative ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-14px',
                borderRadius: '26px',
                border: '1.5px solid rgba(52, 211, 153, 0.28)',
                background: 'transparent',
                pointerEvents: 'none',
              }}
            />
            {/* Rotating corner accent */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '48px',
                height: '48px',
                borderTop: '2px solid #34d399',
                borderRight: '2px solid #34d399',
                borderRadius: '0 8px 0 0',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: '48px',
                height: '48px',
                borderBottom: '2px solid #38bdf8',
                borderLeft: '2px solid #38bdf8',
                borderRadius: '0 0 0 8px',
                pointerEvents: 'none',
              }}
            />

            {/* Photo frame */}
            <div
              id="about-photo-frame"
              style={{
                width: '300px',
                height: '360px',
                borderRadius: '18px',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(13,18,28,0.9) 0%, rgba(16,24,40,0.95) 100%)',
                border: '1px solid rgba(52,211,153,0.2)',
                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.6), 0 0 40px rgba(16,185,129,0.08)',
              }}
            >
              {/*
                ──────────────────────────────────────────────────────
                  REPLACE THIS BLOCK with an <img> tag once you have
                  your photo ready. Example:

                  <img
                    src="/images/anshika.jpg"
                    alt="Anshika Pandey"
                    style={{ width:'100%', height:'100%', objectFit:'cover' }}
                  />
                ──────────────────────────────────────────────────────
              */}
              {/* Placeholder shown until photo is added */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  background: `
                    radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.14) 0%, transparent 55%),
                    radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.10) 0%, transparent 55%),
                    linear-gradient(160deg, rgba(13,18,28,0.95) 0%, rgba(5,10,20,1) 100%)
                  `,
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(52,211,153,0.12)',
                    border: '1.5px dashed rgba(52,211,153,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Camera size={32} color="rgba(52,211,153,0.6)" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'rgba(52,211,153,0.7)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}>
                    Your Photo Here
                  </p>
                  <p style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    marginTop: '4px',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    Replace in AboutSection.tsx
                  </p>
                </div>
              </div>

              {/* Overlay gradient at bottom for a cinematic feel */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '80px',
                  background: 'linear-gradient(to top, rgba(5,7,12,0.8) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Floating name badge at bottom of photo */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(5,7,12,0.92)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(52,211,153,0.3)',
                borderRadius: '9999px',
                padding: '6px 18px',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
              }}
            >
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                color: '#f8fafc',
                letterSpacing: '0.02em',
              }}>
                Anshika Pandey
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Narrative Column ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-panel"
          style={{
            padding: '40px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative glow */}
          <div style={{
            position: 'absolute', top: '-50px', right: '-50px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.82rem',
              color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.12em',
            }}>
              The Story So Far
            </span>
            <h3 style={{ fontSize: '1.65rem', marginTop: '10px', marginBottom: '20px', lineHeight: 1.3 }}>
              Driven by curiosity, fueled by code, and dedicated to building things that matter.
            </h3>

            <p style={{ marginBottom: '14px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              Hello! I'm <strong style={{ color: 'var(--text-primary)' }}>Anshika Pandey</strong>, a software developer currently pursuing my{' '}
              <strong style={{ color: '#38bdf8' }}>MCA (Master of Computer Applications)</strong>. My journey into programming began with a deep curiosity about how logic transforms into real-world interactive digital software.
            </p>

            <p style={{ marginBottom: '14px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              I focus on the full lifecycle of software: architecting responsive UIs with{' '}
              <strong style={{ color: 'var(--text-primary)' }}>React</strong>, engineering robust backends with{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Node.js & Express</strong>, and managing data with{' '}
              <strong style={{ color: 'var(--text-primary)' }}>MongoDB & SQL</strong>.
            </p>

            <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              When I'm not shipping features, I sharpen my problem-solving on competitive coding platforms — optimizing algorithms in{' '}
              <strong style={{ color: '#34d399' }}>C++ and Java</strong>.
            </p>
          </div>

          {/* Tech badges */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '10px',
            paddingTop: '20px', borderTop: '1px solid var(--border-subtle)',
          }}>
            {['Clean Code', 'MERN Stack', 'C++ / DSA', 'REST APIs', 'Fast Learner'].map((tag) => (
              <span key={tag} className="badge-tech" style={{ fontSize: '0.8rem' }}>
                <CheckCircle2 size={13} />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Bottom Row: Traits Grid ───────────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        {traits.map((trait, index) => (
          <motion.div
            key={trait.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-panel"
            style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            <div style={{
              width: '46px', height: '46px', borderRadius: '13px',
              background: `rgba(${trait.color === '#34d399' ? '16,185,129' : trait.color === '#38bdf8' ? '56,189,248' : '139,92,246'}, 0.1)`,
              border: `1px solid ${trait.color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: trait.color,
            }}>
              {trait.icon}
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{trait.title}</h4>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>{trait.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

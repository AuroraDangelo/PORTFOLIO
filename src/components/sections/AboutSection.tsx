import React from 'react';
import { motion } from 'framer-motion';
import { User, BrainCircuit, Rocket, CheckCircle2, Laptop, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const traits = [
    {
      icon: <BrainCircuit size={24} className="text-emerald-400" />,
      title: 'Problem-Solving Mindset',
      desc: 'Approaching complexity with structured algorithmic intuition, strong data structures mastery, and optimized computational logic.',
    },
    {
      icon: <Laptop size={24} className="text-cyan-400" />,
      title: 'Modern Full-Stack Engineering',
      desc: 'Building responsive React applications backed by scalable Node.js & Express REST APIs, MongoDB models, and relational databases.',
    },
    {
      icon: <Rocket size={24} className="text-violet-400" />,
      title: 'Curiosity & Growth',
      desc: 'Continuously diving into emerging technologies like AI tool integrations, Chrome Extensions, and performance-first web architectures.',
    },
    {
      icon: <GraduationCap size={24} className="text-emerald-400" />,
      title: 'Academic Foundation',
      desc: 'Pursuing Master of Computer Applications (2025–2027) building upon a solid BCA background (2022–2025) with distinction.',
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '100px 24px',
        maxWidth: '1100px',
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
            maxWidth: '620px',
            margin: '16px auto 0',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
          }}
        >
          A software developer blending analytical precision with modern digital craft.
        </motion.p>
      </div>

      {/* Main Grid Content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Narrative Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel"
          style={{
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle decorative glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#34d399',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              The Story So Far
            </span>

            <h3
              style={{
                fontSize: '1.75rem',
                marginTop: '10px',
                marginBottom: '20px',
                lineHeight: 1.3,
              }}
            >
              Driven by curiosity, fueled by code, and dedicated to building things that matter.
            </h3>

            <p style={{ marginBottom: '16px', lineHeight: 1.8 }}>
              Hello! I'm <strong style={{ color: 'var(--text-primary)' }}>Anshika Pandey</strong>, a software developer currently pursuing my <strong style={{ color: '#38bdf8' }}>MCA (Master of Computer Applications)</strong>. My journey into programming began with a deep curiosity about how logic transforms into real-world interactive digital software.
            </p>

            <p style={{ marginBottom: '16px', lineHeight: 1.8 }}>
              I focus on the full lifecycle of software: architecting responsive user interfaces with <strong style={{ color: 'var(--text-primary)' }}>React</strong> and modern CSS, engineering robust backends with <strong style={{ color: 'var(--text-primary)' }}>Node.js & Express</strong>, and managing data with <strong style={{ color: 'var(--text-primary)' }}>MongoDB & SQL</strong>.
            </p>

            <p style={{ lineHeight: 1.8 }}>
              When I'm not writing production features, I sharpen my problem-solving skills on competitive coding platforms, exploring algorithm optimization in <strong style={{ color: '#34d399' }}>C++ and Java</strong>.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {['Clean Code', 'MERN Stack', 'C++ / DSA', 'REST APIs', 'Fast Learner'].map((tag) => (
              <span key={tag} className="badge-tech" style={{ fontSize: '0.8rem' }}>
                <CheckCircle2 size={13} />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Traits Grid */}
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass-panel"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {trait.icon}
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{trait.title}</h4>

              <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

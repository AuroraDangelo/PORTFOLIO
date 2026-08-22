import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Layers,
  Server,
  Database,
  Wrench,
  Terminal,
  Cpu,
  Coffee,
  FileCode,
  Binary,
  Layout,
  Palette,
  Wind,
  HardDrive,
  GitBranch,
  AppWindow,
  Box,
  TableProperties,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { SKILLS_DATA } from '../../data/portfolioData';
import type { SkillItem } from '../../types';

type CategoryFilter = 'All' | 'Languages' | 'Frontend' | 'Backend' | 'Database' | 'Tools';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code size={22} className="text-emerald-400" />,
  Terminal: <Terminal size={22} className="text-emerald-400" />,
  Coffee: <Coffee size={22} className="text-amber-400" />,
  FileCode2: <FileCode size={22} className="text-yellow-400" />,
  Binary: <Binary size={22} className="text-cyan-400" />,
  Database: <Database size={22} className="text-blue-400" />,
  Layers: <Layers size={22} className="text-cyan-400" />,
  Layout: <Layout size={22} className="text-orange-400" />,
  Palette: <Palette size={22} className="text-pink-400" />,
  Wind: <Wind size={22} className="text-teal-400" />,
  Grid: <Layout size={22} className="text-purple-400" />,
  Server: <Server size={22} className="text-emerald-400" />,
  Cpu: <Cpu size={22} className="text-emerald-300" />,
  HardDrive: <HardDrive size={22} className="text-green-400" />,
  TableProperties: <TableProperties size={22} className="text-blue-400" />,
  GitBranch: <GitBranch size={22} className="text-orange-400" />,
  Github: <GithubIcon size={22} className="text-white" />,
  AppWindow: <AppWindow size={22} className="text-blue-400" />,
  Box: <Box size={22} className="text-indigo-400" />,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const categories: { label: CategoryFilter; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Sparkles size={16} /> },
    { label: 'Languages', icon: <Code size={16} /> },
    { label: 'Frontend', icon: <Layers size={16} /> },
    { label: 'Backend', icon: <Server size={16} /> },
    { label: 'Database', icon: <Database size={16} /> },
    { label: 'Tools', icon: <Wrench size={16} /> },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    return selectedCategory === 'All' || skill.category === selectedCategory;
  });

  return (
    <section
      id="skills"
      style={{
        padding: '100px 24px',
        maxWidth: '1140px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Heading */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="micro-label"
          style={{ justifyContent: 'center', marginBottom: '12px' }}
        >
          <Cpu size={14} />
          <span>Technical Arsenal</span>
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
          WHAT I <span className="text-aurora">BUILD WITH</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '640px',
            margin: '16px auto 0',
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
          }}
        >
          A curated toolkit of languages, frameworks, and developer tools I leverage to build robust digital solutions.
        </motion.p>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '40px',
        }}
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: isSelected
                  ? 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)'
                  : 'var(--bg-card)',
                color: isSelected ? '#05070c' : 'var(--text-secondary)',
                border: isSelected ? '1px solid transparent' : '1px solid var(--border-subtle)',
                boxShadow: isSelected ? '0 0 20px rgba(16, 185, 129, 0.4)' : 'none',
              }}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        <AnimatePresence>
          {filteredSkills.map((skill: SkillItem) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-panel"
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {ICON_MAP[skill.iconName] || <Code size={22} className="text-emerald-400" />}
                </div>

                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: skill.level === 'Advanced' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(56, 189, 248, 0.15)',
                    color: skill.level === 'Advanced' ? '#34d399' : '#38bdf8',
                    border: `1px solid ${skill.level === 'Advanced' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(56, 189, 248, 0.3)'}`,
                  }}
                >
                  {skill.level}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 6px' }}>{skill.name}</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {skill.category}
                </span>
              </div>

              {skill.description && (
                <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                  {skill.description}
                </p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

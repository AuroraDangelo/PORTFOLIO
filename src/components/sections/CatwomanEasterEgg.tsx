import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CatwomanEasterEgg: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [speechBubbleText, setSpeechBubbleText] = useState('"Hi, I\'m Olaf and I like warm hugs! 🤗"');
  const [showSpeech, setShowSpeech] = useState(true);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const headCenterX = rect.left + rect.width * 0.5;
      const headCenterY = rect.top + rect.height * 0.18;
      const deltaX = e.clientX - headCenterX;
      const deltaY = e.clientY - headCenterY;
      const maxEyeMove = 3;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.hypot(deltaX, deltaY) / 45, maxEyeMove);
      setEyeOffset({ x: Math.cos(angle) * distance, y: Math.sin(angle) * distance });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    setIsWaving(true);
    setShowSpeech(true);
    const newCount = clickCount + 1;
    setClickCount(newCount);
    const dialogs = [
      '"Hi, I\'m Olaf and I like warm hugs! 🤗"',
      '"Some people are worth melting for! 💙"',
      '"I\'ve always loved the idea of summer... just like great code!"',
      '"An act of true love will thaw a frozen heart ❄️"',
      '"This portfolio is my favorite thing after warm hugs!"',
    ];
    setSpeechBubbleText(dialogs[(newCount - 1) % dialogs.length]);
    setTimeout(() => setIsWaving(false), 1600);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="catwoman-perch"
      ref={containerRef}
      style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: '40px',
        marginBottom: '-2px',
        pointerEvents: 'none',
      }}
    >
      {/* Speech Bubble */}
      <AnimatePresence>
        {showSpeech && (
          <motion.div
            className="speech-bubble"
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            style={{
              pointerEvents: 'auto',
              maxWidth: 'min(360px, 90vw)',
              width: 'max-content',
              padding: '12px 18px',
              borderRadius: '18px',
              background: 'rgba(8, 12, 22, 0.93)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(52, 211, 153, 0.42)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7), 0 0 18px rgba(16,185,129,0.22)',
              marginBottom: '14px',
              textAlign: 'center',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            <p style={{
              fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)', fontWeight: 600, color: '#ffffff',
              margin: 0, fontFamily: 'var(--font-heading)', lineHeight: 1.4,
            }}>
              {speechBubbleText}
            </p>
            <div style={{
              position: 'absolute', bottom: '-7px', left: '50%',
              transform: 'translateX(-50%) rotate(45deg)',
              width: '14px', height: '14px',
              background: 'rgba(8,12,22,0.95)',
              borderRight: '1px solid rgba(52,211,153,0.42)',
              borderBottom: '1px solid rgba(52,211,153,0.42)',
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Olaf SVG — transparent, no box, perched on footer */}
      <motion.div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ y: isHovered ? -6 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        style={{
          pointerEvents: 'auto',
          cursor: 'pointer',
          width: 'min(260px, 68vw)',
          maxWidth: '100%',
          filter: isHovered
            ? 'drop-shadow(0 0 28px rgba(100, 200, 255, 0.55)) drop-shadow(0 12px 24px rgba(0,0,0,0.4))'
            : 'drop-shadow(0 6px 18px rgba(0,0,0,0.35)) drop-shadow(0 0 8px rgba(150,220,255,0.1))',
          transition: 'filter 0.35s ease',
        }}
        title="Click Olaf!"
      >
        <svg
          viewBox="0 0 280 370"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax meet"
          style={{ display: 'block', overflow: 'visible' }}
        >
          <defs>
            {/* Snow white gradient for body segments */}
            <radialGradient id="snowWhite" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="55%" stopColor="#e8f4fd" />
              <stop offset="85%" stopColor="#c8dff0" />
              <stop offset="100%" stopColor="#a8c8e8" />
            </radialGradient>
            <radialGradient id="snowWhiteLarge" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#eaf5fd" />
              <stop offset="80%" stopColor="#cce0f0" />
              <stop offset="100%" stopColor="#aac8e5" />
            </radialGradient>
            <radialGradient id="snowWhiteMid" cx="38%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="55%" stopColor="#e5f2fc" />
              <stop offset="100%" stopColor="#b0cde4" />
            </radialGradient>
            <radialGradient id="carrotGrad" cx="20%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#ff9a28" />
              <stop offset="50%" stopColor="#f57c00" />
              <stop offset="100%" stopColor="#e65100" />
            </radialGradient>
            <radialGradient id="eyeWhite" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e8f4fd" />
            </radialGradient>
            <radialGradient id="eyeBlack" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0a0a14" />
            </radialGradient>
            <linearGradient id="twigBrown" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c4a1e" />
              <stop offset="50%" stopColor="#5c3010" />
              <stop offset="100%" stopColor="#3d1f08" />
            </linearGradient>
            <radialGradient id="blushPink" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 130, 130, 0.45)" />
              <stop offset="100%" stopColor="rgba(255, 130, 130, 0)" />
            </radialGradient>
          </defs>

          {/* ===== LEFT ARM (twig) — raised when waving ===== */}
          <motion.g
            animate={{ rotate: isWaving ? -55 : -20 }}
            style={{ transformOrigin: '82px 192px' }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          >
            {/* Main left twig arm */}
            <path
              d="M82,192 C62,178 45,170 30,168"
              stroke="url(#twigBrown)" strokeWidth="6" strokeLinecap="round" fill="none"
            />
            {/* Left twig branches */}
            <path d="M55,176 C48,168 42,162 38,154" stroke="url(#twigBrown)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M40,170 C36,164 35,157 36,150" stroke="url(#twigBrown)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M42,171 C50,164 54,157 54,148" stroke="url(#twigBrown)" strokeWidth="2" strokeLinecap="round" fill="none" />
          </motion.g>

          {/* ===== RIGHT ARM (twig) — raised other direction ===== */}
          <motion.g
            animate={{ rotate: isWaving ? 40 : 18 }}
            style={{ transformOrigin: '198px 192px' }}
            transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.05 }}
          >
            {/* Main right twig arm */}
            <path
              d="M198,192 C218,178 235,170 250,168"
              stroke="url(#twigBrown)" strokeWidth="6" strokeLinecap="round" fill="none"
            />
            {/* Right twig branches */}
            <path d="M225,176 C232,168 238,162 242,154" stroke="url(#twigBrown)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M240,170 C244,164 245,157 244,150" stroke="url(#twigBrown)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M238,171 C230,164 226,157 226,148" stroke="url(#twigBrown)" strokeWidth="2" strokeLinecap="round" fill="none" />
          </motion.g>

          {/* ===== BOTTOM SNOW BALL (biggest) ===== */}
          <ellipse cx="140" cy="308" rx="72" ry="60" fill="url(#snowWhiteLarge)" />
          {/* Bottom ball shadow/shading arc */}
          <path d="M80,320 Q140,355 200,320" stroke="rgba(160,200,230,0.5)" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Bottom ball small bump feet */}
          <ellipse cx="110" cy="358" rx="22" ry="12" fill="url(#snowWhite)" />
          <ellipse cx="170" cy="358" rx="22" ry="12" fill="url(#snowWhite)" />
          {/* Feet shadow */}
          <ellipse cx="110" cy="365" rx="19" ry="6" fill="rgba(140,190,220,0.4)" />
          <ellipse cx="170" cy="365" rx="19" ry="6" fill="rgba(140,190,220,0.4)" />
          {/* Bottom ball lumps/snow texture bumps */}
          <ellipse cx="100" cy="282" rx="14" ry="10" fill="rgba(255,255,255,0.6)" />
          <ellipse cx="178" cy="296" rx="10" ry="8" fill="rgba(255,255,255,0.5)" />
          <ellipse cx="150" cy="268" rx="12" ry="8" fill="rgba(255,255,255,0.4)" />

          {/* ===== MIDDLE SNOW BALL ===== */}
          <ellipse cx="140" cy="218" rx="56" ry="52" fill="url(#snowWhiteMid)" />
          {/* Middle ball shading */}
          <path d="M96,230 Q140,260 184,230" stroke="rgba(160,200,230,0.45)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Coal buttons (3 of them) */}
          <circle cx="140" cy="196" r="7" fill="#1a1a2e" />
          <circle cx="138" cy="212" r="6.5" fill="#1a1a2e" />
          <circle cx="137" cy="227" r="6" fill="#1a1a2e" />
          {/* Button highlight glints */}
          <circle cx="138" cy="194" r="1.8" fill="rgba(255,255,255,0.55)" />
          <circle cx="136" cy="210" r="1.6" fill="rgba(255,255,255,0.55)" />
          <circle cx="135" cy="225" r="1.5" fill="rgba(255,255,255,0.55)" />
          {/* Middle ball lumps */}
          <ellipse cx="100" cy="206" r="10" fill="rgba(255,255,255,0.45)" />
          <ellipse cx="174" cy="214" rx="8" ry="7" fill="rgba(255,255,255,0.35)" />

          {/* ===== HEAD SNOW BALL ===== */}
          <ellipse cx="140" cy="120" rx="62" ry="60" fill="url(#snowWhite)" />
          {/* Head shading arc */}
          <path d="M88,136 Q140,168 192,136" stroke="rgba(160,200,230,0.4)" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Head side lumps */}
          <ellipse cx="90" cy="110" rx="12" ry="10" fill="rgba(255,255,255,0.6)" />
          <ellipse cx="188" cy="118" rx="10" ry="9" fill="rgba(255,255,255,0.5)" />
          <ellipse cx="140" cy="68" rx="14" ry="10" fill="rgba(255,255,255,0.4)" />

          {/* ===== HAIR — two wild twig-like hair strands ===== */}
          {/* Left hair twig */}
          <path d="M122,64 C116,48 112,34 120,20 C116,35 108,28 104,16" stroke="url(#twigBrown)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          {/* Right hair twig (taller, swoops outward) */}
          <path d="M148,62 C152,44 158,30 154,14 C160,28 168,22 172,10" stroke="url(#twigBrown)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          {/* Small twig sub-branch on right hair */}
          <path d="M157,38 C164,32 168,26 166,18" stroke="url(#twigBrown)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* ===== EYEBROW arches (raised, expressive) ===== */}
          <path d="M110,86 Q122,78 132,84" stroke="#5c3010" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M148,84 Q158,78 170,86" stroke="#5c3010" strokeWidth="4.5" strokeLinecap="round" fill="none" />

          {/* ===== EYES ===== */}
          {/* Left eye white */}
          <ellipse cx="122" cy="102" rx="16" ry="18" fill="url(#eyeWhite)" />
          {/* Left eye upper lid shadow */}
          <path d="M107,96 Q122,88 137,96" stroke="rgba(160,200,230,0.5)" strokeWidth="2" fill="none" />
          {/* Left iris+pupil with tracking */}
          <g clipPath="url(#leftEyeClipOlaf)">
            <g transform={`translate(${eyeOffset.x},${eyeOffset.y})`}>
              <circle cx="122" cy="104" r="9" fill="#1a3a6e" />
              <circle cx="122" cy="104" r="6" fill="url(#eyeBlack)" />
              {/* Main catchlight */}
              <circle cx="124.5" cy="101" r="2.5" fill="#ffffff" />
              {/* Secondary small glint */}
              <circle cx="119" cy="107" r="1.2" fill="rgba(255,255,255,0.7)" />
            </g>
          </g>
          <clipPath id="leftEyeClipOlaf">
            <ellipse cx="122" cy="102" rx="16" ry="18" />
          </clipPath>

          {/* Right eye white */}
          <ellipse cx="162" cy="102" rx="16" ry="18" fill="url(#eyeWhite)" />
          <path d="M147,96 Q162,88 177,96" stroke="rgba(160,200,230,0.5)" strokeWidth="2" fill="none" />
          {/* Right iris+pupil with tracking */}
          <g clipPath="url(#rightEyeClipOlaf)">
            <g transform={`translate(${eyeOffset.x},${eyeOffset.y})`}>
              <circle cx="162" cy="104" r="9" fill="#1a3a6e" />
              <circle cx="162" cy="104" r="6" fill="url(#eyeBlack)" />
              <circle cx="164.5" cy="101" r="2.5" fill="#ffffff" />
              <circle cx="159" cy="107" r="1.2" fill="rgba(255,255,255,0.7)" />
            </g>
          </g>
          <clipPath id="rightEyeClipOlaf">
            <ellipse cx="162" cy="102" rx="16" ry="18" />
          </clipPath>

          {/* Eye outline ring for definition */}
          <ellipse cx="122" cy="102" rx="16" ry="18" fill="none" stroke="rgba(140,190,220,0.6)" strokeWidth="1.5" />
          <ellipse cx="162" cy="102" rx="16" ry="18" fill="none" stroke="rgba(140,190,220,0.6)" strokeWidth="1.5" />

          {/* ===== CARROT NOSE ===== */}
          <path d="M142,116 L172,120 L142,124 Z" fill="url(#carrotGrad)" />
          {/* Carrot nose tip highlight */}
          <path d="M143,118 L156,120" stroke="rgba(255,200,100,0.6)" strokeWidth="1.5" strokeLinecap="round" />
          {/* Carrot stripe marks */}
          <line x1="152" y1="117" x2="150" y2="123" stroke="rgba(200,90,0,0.5)" strokeWidth="1.2" />
          <line x1="161" y1="118" x2="159" y2="122" stroke="rgba(200,90,0,0.5)" strokeWidth="1" />

          {/* ===== SMILE — wide friendly Olaf grin ===== */}
          {/* Outer smile arc */}
          <path
            d={isHovered
              ? "M108,138 Q140,162 172,138"
              : "M110,140 Q140,160 170,140"}
            stroke="#1a1a2e" strokeWidth="4" strokeLinecap="round" fill="none"
          />
          {/* Inner mouth fill */}
          <path
            d={isHovered
              ? "M110,140 Q140,160 170,140 Q140,152 110,140 Z"
              : "M112,141 Q140,158 168,141 Q140,150 112,141 Z"}
            fill="#1a1a2e"
          />
          {/* Teeth showing in smile */}
          <path
            d={isHovered
              ? "M122,142 L122,152 M132,143 L132,154 M142,143 L142,154 M152,143 L152,154 M162,142 L162,152"
              : "M124,143 L124,151 M134,144 L134,153 M144,144 L144,153 M154,144 L154,153 M162,143 L162,151"}
            stroke="white" strokeWidth="5" strokeLinecap="square"
          />

          {/* ===== ROSY CHEEKS ===== */}
          <ellipse cx="95" cy="124" rx="16" ry="10" fill="url(#blushPink)" />
          <ellipse cx="185" cy="124" rx="16" ry="10" fill="url(#blushPink)" />

          {/* ===== SNOW DUST at feet ===== */}
          <ellipse cx="140" cy="366" rx="80" ry="8" fill="rgba(200,230,248,0.3)" />
          <ellipse cx="140" cy="368" rx="60" ry="5" fill="rgba(200,230,248,0.2)" />
        </svg>
      </motion.div>

      {/* CTA Button */}
      <div style={{ marginTop: '10px', marginBottom: '20px', pointerEvents: 'auto' }}>
        <button
          onClick={scrollToContact}
          className="btn-primary"
          style={{ padding: '12px 26px', fontSize: '0.95rem', fontWeight: 700, gap: '8px' }}
        >
          <span>Let's Connect</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Globe, 
  BookOpen, 
  Users, 
  ArrowRight,
  Activity,
  Cpu,
  GraduationCap
} from 'lucide-react';

/**
 * Crazy & Unique Interactive Cyber Core HUD — 4 Benefits Matrix
 * Colors:
 * - Node 01: Cyber Red (#FF1616)
 * - Node 02: Electric Blue (#00D2FF)
 * - Node 03: Emerald Green (#10B981)
 * - Node 04: Solar Yellow (#FFC107)
 * - Center Card: Refined Obsidian Reddish Surface (#0E090B with crimson ambient light)
 * - Features scroll-triggered entrance animations for all cards
 */
export default function AcademyBenefits({ onOpenContact, onNavigate }) {
  const [activeNode, setActiveNode] = useState(0); // 0 = Red, 1 = Blue, 2 = Green, 3 = Yellow
  const [autoScan, setAutoScan] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rx: 0, ry: 0 });
  const [hashValue, setHashValue] = useState('0x9F8A...2B4C');
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const containerRef = useRef(null);

  const benefits = [
    {
      id: 'cert',
      code: 'NODE://01_CREDENTIAL',
      icon: Award,
      title: 'Certificate of Completion',
      headline: 'Cryptographically Verified Credential',
      desc: 'Receive a recognized credential that significantly boosts your resume.',
      badge: 'VERIFIED CREDENTIAL',
      stat: '100% RECOGNIZED',
      color: '#FF1616',        // Cyber Red
      colorBright: '#FF4D4D',
      glow: 'rgba(255, 22, 22, 0.3)',
      bgSubtle: 'rgba(255, 22, 22, 0.12)',
      borderSubtle: 'rgba(255, 22, 22, 0.4)',
      telemetry: 'SHA-256_HASH_VALIDATED'
    },
    {
      id: 'network',
      code: 'NODE://02_PEERS',
      icon: Globe,
      title: 'Networking Opportunities',
      headline: '50,000+ Peer & Industry Constellation',
      desc: 'Connect with peers and valuable industry professionals for growth.',
      badge: '25+ CAMPUS HUBS',
      stat: '50,000+ PEERS',
      color: '#00D2FF',        // Electric Blue
      colorBright: '#80E8FF',
      glow: 'rgba(0, 210, 255, 0.3)',
      bgSubtle: 'rgba(0, 210, 255, 0.12)',
      borderSubtle: 'rgba(0, 210, 255, 0.4)',
      telemetry: 'REGIONAL_NODES_ONLINE'
    },
    {
      id: 'curriculum',
      code: 'NODE://03_CURRICULUM',
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      headline: 'Battle-Tested Offensive Syllabus',
      desc: 'Master essential topics and practical skills effectively and thoroughly.',
      badge: 'PRACTICAL LABS',
      stat: 'ZERO FLUFF',
      color: '#10B981',        // Emerald Green
      colorBright: '#00F59B',
      glow: 'rgba(16, 185, 129, 0.3)',
      bgSubtle: 'rgba(16, 185, 129, 0.12)',
      borderSubtle: 'rgba(16, 185, 129, 0.4)',
      telemetry: 'VAPT_LABS_ACTIVE'
    },
    {
      id: 'guidance',
      code: 'NODE://04_MENTORSHIP',
      icon: Users,
      title: 'Expert Guidance',
      headline: '1-on-1 Threat Researcher Uplink',
      desc: 'Learn from experienced instructors for personalized and effective support.',
      badge: '1-ON-1 UPLINK',
      stat: 'DIRECT ACCESS',
      color: '#FFC107',        // Solar Yellow / Gold
      colorBright: '#FFD54F',
      glow: 'rgba(255, 193, 7, 0.3)',
      bgSubtle: 'rgba(255, 193, 7, 0.12)',
      borderSubtle: 'rgba(255, 193, 7, 0.4)',
      telemetry: 'MENTOR_CHANNEL_OPEN'
    }
  ];

  // Scroll entrance observer for the whole benefits matrix
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-scan cycle every 3.2s if autoScan is enabled
  useEffect(() => {
    if (!autoScan) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % benefits.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [autoScan, benefits.length]);

  // Live hash ticker
  useEffect(() => {
    const hashInterval = setInterval(() => {
      const chars = '0123456789ABCDEF';
      let result = '0x';
      for (let i = 0; i < 4; i++) result += chars[Math.floor(Math.random() * 16)];
      result += '...';
      for (let i = 0; i < 4; i++) result += chars[Math.floor(Math.random() * 16)];
      setHashValue(result);
    }, 1800);

    return () => clearInterval(hashInterval);
  }, []);

  // 3D Mouse Parallax
  const handleMouseMove = (e) => {
    if (!containerRef.current || window.innerWidth < 900) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = -(y / (rect.height / 2)) * 3;
    const ry = (x / (rect.width / 2)) * 4;
    setMousePos({ x, y, rx, ry });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, rx: 0, ry: 0 });
  };

  const current = benefits[activeNode];

  return (
    <section 
      id="benefits-matrix"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: 'var(--black)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        perspective: '1400px'
      }}
    >
      {/* Background Cyber Grid */}
      <div className="cyber-grid-overlay" style={{ opacity: 0.35 }} />

      {/* Dynamic Laser Beam Lines linking nodes in background */}
      <svg 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="rgba(255, 22, 22, 0.25)" strokeWidth="1.5" strokeDasharray="6,6" />
        <line x1="20%" y1="70%" x2="50%" y2="50%" stroke="rgba(0, 210, 255, 0.25)" strokeWidth="1.5" strokeDasharray="6,6" />
        <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1.5" strokeDasharray="6,6" />
        <line x1="80%" y1="70%" x2="50%" y2="50%" stroke="rgba(255, 193, 7, 0.25)" strokeWidth="1.5" strokeDasharray="6,6" />
      </svg>

      {/* Dynamic Spotlight following active node's color */}
      <div 
        style={{
          position: 'absolute',
          top: `calc(50% + ${mousePos.y * 0.4}px)`,
          left: `calc(50% + ${mousePos.x * 0.4}px)`,
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '500px',
          background: `radial-gradient(circle, ${current.glow} 0%, rgba(0, 0, 0, 0) 70%)`,
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'background 0.45s ease'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* ===================================================================
            HEADER: CRAZY TITLE & RADAR CONTROLS
            =================================================================== */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3.5rem',
            opacity: isSectionVisible ? 1 : 0,
            transform: isSectionVisible ? 'translateY(0)' : 'translateY(25px)',
            transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div>
            <h2 
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.12,
                letterSpacing: '-0.035em'
              }}
            >
              Four Advantages. <span style={{ color: current.colorBright, transition: 'color 0.4s ease' }}>One Unfair Edge.</span>
            </h2>
          </div>

          {/* Right Telemetry & Mode Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div 
              className="mono-text"
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(8, 8, 8, 0.85)',
                border: '1px solid var(--border)',
                fontSize: '0.74rem',
                color: 'var(--muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Cpu size={14} style={{ color: current.colorBright, transition: 'color 0.4s ease' }} />
              <span>HASH: <strong style={{ color: '#FFFFFF' }}>{hashValue}</strong></span>
            </div>

            <button
              onClick={() => setAutoScan(!autoScan)}
              className="mono-text"
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: autoScan ? current.color : 'var(--border)',
                backgroundColor: autoScan ? current.bgSubtle : 'var(--ink)',
                color: autoScan ? current.colorBright : 'var(--muted)',
                fontSize: '0.74rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.25s ease'
              }}
            >
              <Activity size={13} style={{ animation: autoScan ? 'spin 3s linear infinite' : 'none' }} />
              <span>{autoScan ? 'AUTO-RADAR: ON' : 'MANUAL HUD'}</span>
            </button>
          </div>
        </div>

        {/* ===================================================================
            THE 3D FLOATING BENTO STAGE WITH 4 COLORS + OBSIDIAN REDDISH CENTER
            =================================================================== */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch',
            transform: `rotateX(${mousePos.rx}deg) rotateY(${mousePos.ry}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.15s ease-out'
          }}
        >
          
          {/* =================================================================
              LEFT COLUMN (NODE 01: RED & NODE 02: BLUE)
              ================================================================= */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* NODE 01: Cyber Red (Certificate of Completion) */}
            <div 
              onMouseEnter={() => { setActiveNode(0); setAutoScan(false); }}
              className="hud-card"
              style={{
                backgroundColor: activeNode === 0 ? 'rgba(24, 12, 16, 0.85)' : 'rgba(12, 14, 18, 0.65)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${activeNode === 0 ? benefits[0].color : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: '20px',
                padding: '1.75rem',
                cursor: 'pointer',
                boxShadow: activeNode === 0 ? `0 20px 50px rgba(0,0,0,0.95), 0 0 30px ${benefits[0].glow}` : 'none',
                transform: isSectionVisible
                  ? (activeNode === 0 ? 'scale(1.02) translateZ(30px)' : 'scale(1) translateZ(0)')
                  : 'translateY(40px) scale(0.95)',
                opacity: isSectionVisible ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {activeNode === 0 && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: benefits[0].color, boxShadow: `0 0 10px ${benefits[0].color}` }} />
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: benefits[0].bgSubtle,
                    border: `1px solid ${benefits[0].borderSubtle}`,
                    color: benefits[0].colorBright,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Award size={24} />
                </div>
                <span className="mono-text" style={{ fontSize: '0.68rem', color: benefits[0].colorBright, fontWeight: 800 }}>
                  01 // RED CREDENTIAL
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                {benefits[0].title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#D0D0D0', lineHeight: 1.55 }}>
                {benefits[0].desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span className="mono-text" style={{ fontSize: '0.72rem', color: benefits[0].colorBright, fontWeight: 700 }}>
                  [VERIFIED REGISTRY]
                </span>
                <span className="mono-text" style={{ fontSize: '0.72rem', color: '#8A8A8A' }}>
                  SHA-256
                </span>
              </div>
            </div>

            {/* NODE 02: Electric Blue (Networking Opportunities) */}
            <div 
              onMouseEnter={() => { setActiveNode(1); setAutoScan(false); }}
              className="hud-card"
              style={{
                backgroundColor: activeNode === 1 ? 'rgba(10, 20, 30, 0.85)' : 'rgba(12, 14, 18, 0.65)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${activeNode === 1 ? benefits[1].color : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: '20px',
                padding: '1.75rem',
                cursor: 'pointer',
                boxShadow: activeNode === 1 ? `0 20px 50px rgba(0,0,0,0.95), 0 0 30px ${benefits[1].glow}` : 'none',
                transform: isSectionVisible
                  ? (activeNode === 1 ? 'scale(1.02) translateZ(30px)' : 'scale(1) translateZ(0)')
                  : 'translateY(40px) scale(0.95)',
                opacity: isSectionVisible ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {activeNode === 1 && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: benefits[1].color, boxShadow: `0 0 10px ${benefits[1].color}` }} />
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: benefits[1].bgSubtle,
                    border: `1px solid ${benefits[1].borderSubtle}`,
                    color: benefits[1].colorBright,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Globe size={24} />
                </div>
                <span className="mono-text" style={{ fontSize: '0.68rem', color: benefits[1].colorBright, fontWeight: 800 }}>
                  02 // BLUE NETWORK
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                {benefits[1].title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#D0D0D0', lineHeight: 1.55 }}>
                {benefits[1].desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span className="mono-text" style={{ fontSize: '0.72rem', color: benefits[1].colorBright, fontWeight: 700 }}>
                  [25+ HUBS]
                </span>
                <span className="mono-text" style={{ fontSize: '0.72rem', color: '#8A8A8A' }}>
                  50K+ PEERS
                </span>
              </div>
            </div>

          </div>

          {/* =================================================================
              CENTER COLUMN: OBSIDIAN REDDISH SURFACE ("ABOUT CYBER PASHTO")
              ================================================================= */}
          <div 
            style={{ 
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{
                backgroundColor: 'rgba(16, 12, 14, 0.85)',
                backdropFilter: 'blur(20px)',
                borderRadius: '26px',
                padding: '2.5rem 2.2rem',
                boxShadow: `0 25px 70px rgba(0,0,0,0.95), 0 0 45px ${current.glow}, inset 0 1px 1px rgba(255, 255, 255, 0.1)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255, 0, 0, 0.35)',
                transform: isSectionVisible ? 'translateZ(50px) scale(1)' : 'translateZ(0) scale(0.95)',
                opacity: isSectionVisible ? 1 : 0,
                transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease',
                backgroundImage: 'radial-gradient(rgba(255, 0, 0, 0.08) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            >
              {/* Inner Crimson Ambient Radial Glow */}
              <div 
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '280px',
                  height: '280px',
                  background: 'radial-gradient(circle, rgba(255, 0, 0, 0.18) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Rotating Holographic Orbital Rings around Logo */}
              <div 
                style={{
                  position: 'relative',
                  width: '130px',
                  height: '130px',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Orbital Ring 1 (Adapts to Active Node Color) */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    border: `1.5px dashed ${current.color}`,
                    animation: 'spin 12s linear infinite',
                    transition: 'border-color 0.4s ease'
                  }} 
                />
                {/* Orbital Ring 2 */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: '-16px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    animation: 'spinReverse 18s linear infinite'
                  }} 
                />

                {/* Center Hacker Badge */}
                <div 
                  style={{
                    width: '105px',
                    height: '105px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
                    zIndex: 2
                  }}
                >
                  <svg viewBox="0 0 200 150" width="52" height="38">
                    <path d="M40 50 Q100 20 160 50 L140 30 Q100 15 60 30 Z" fill="var(--red)" />
                    <rect x="55" y="52" width="90" height="26" rx="8" fill="var(--red)" />
                    <circle cx="78" cy="65" r="5" fill="var(--black)" />
                    <circle cx="122" cy="65" r="5" fill="var(--black)" />
                  </svg>
                  <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--red)', direction: 'rtl', marginTop: '2px' }}>
                    سائبر پښتو
                  </span>
                </div>
              </div>

              <h3 
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  marginBottom: '0.85rem'
                }}
              >
                About Cyber Pashto:
              </h3>

              <p 
                style={{
                  fontSize: '0.9rem',
                  color: '#D0D0D0',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  textAlign: 'left'
                }}
              >
                Cyber Pashto is a next-generation learning platform built to make world-class IT education 
                accessible, practical, and career-ready. We combine expert-led training, hands-on projects, 
                and a modern LMS experience to help learners master development, design, cybersecurity, and AI.
              </p>

              {/* CTA Button */}
              <a 
                href="https://cyberpashtopremium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-red"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem',
                  borderRadius: '12px'
                }}
              >
                <GraduationCap size={18} />
                <span>Explore Platform LMS</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* =================================================================
              RIGHT COLUMN (NODE 03: GREEN & NODE 04: YELLOW)
              ================================================================= */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* NODE 03: Emerald Green (Comprehensive Curriculum) */}
            <div 
              onMouseEnter={() => { setActiveNode(2); setAutoScan(false); }}
              className="hud-card"
              style={{
                backgroundColor: activeNode === 2 ? 'rgba(8, 24, 16, 0.85)' : 'rgba(12, 14, 18, 0.65)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${activeNode === 2 ? benefits[2].color : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: '20px',
                padding: '1.75rem',
                cursor: 'pointer',
                boxShadow: activeNode === 2 ? `0 20px 50px rgba(0,0,0,0.95), 0 0 30px ${benefits[2].glow}` : 'none',
                transform: isSectionVisible
                  ? (activeNode === 2 ? 'scale(1.02) translateZ(30px)' : 'scale(1) translateZ(0)')
                  : 'translateY(40px) scale(0.95)',
                opacity: isSectionVisible ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {activeNode === 2 && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: benefits[2].color, boxShadow: `0 0 10px ${benefits[2].color}` }} />
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: benefits[2].bgSubtle,
                    border: `1px solid ${benefits[2].borderSubtle}`,
                    color: benefits[2].colorBright,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <BookOpen size={24} />
                </div>
                <span className="mono-text" style={{ fontSize: '0.68rem', color: benefits[2].colorBright, fontWeight: 800 }}>
                  03 // GREEN CURRICULUM
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                {benefits[2].title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#D0D0D0', lineHeight: 1.55 }}>
                {benefits[2].desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span className="mono-text" style={{ fontSize: '0.72rem', color: benefits[2].colorBright, fontWeight: 700 }}>
                  [OFFENSIVE VAPT]
                </span>
                <span className="mono-text" style={{ fontSize: '0.72rem', color: '#8A8A8A' }}>
                  100% PRACTICAL
                </span>
              </div>
            </div>

            {/* NODE 04: Solar Yellow (Expert Guidance) */}
            <div 
              onMouseEnter={() => { setActiveNode(3); setAutoScan(false); }}
              className="hud-card"
              style={{
                backgroundColor: activeNode === 3 ? 'rgba(26, 20, 8, 0.85)' : 'rgba(12, 14, 18, 0.65)',
                backdropFilter: 'blur(16px)',
                border: `1px solid ${activeNode === 3 ? benefits[3].color : 'rgba(255, 255, 255, 0.08)'}`,
                borderRadius: '20px',
                padding: '1.75rem',
                cursor: 'pointer',
                boxShadow: activeNode === 3 ? `0 20px 50px rgba(0,0,0,0.95), 0 0 30px ${benefits[3].glow}` : 'none',
                transform: isSectionVisible
                  ? (activeNode === 3 ? 'scale(1.02) translateZ(30px)' : 'scale(1) translateZ(0)')
                  : 'translateY(40px) scale(0.95)',
                opacity: isSectionVisible ? 1 : 0,
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {activeNode === 3 && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: benefits[3].color, boxShadow: `0 0 10px ${benefits[3].color}` }} />
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: benefits[3].bgSubtle,
                    border: `1px solid ${benefits[3].borderSubtle}`,
                    color: benefits[3].colorBright,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Users size={24} />
                </div>
                <span className="mono-text" style={{ fontSize: '0.68rem', color: benefits[3].colorBright, fontWeight: 800 }}>
                  04 // YELLOW GUIDANCE
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.45rem', fontFamily: 'var(--font-mono)' }}>
                {benefits[3].title}
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#D0D0D0', lineHeight: 1.55 }}>
                {benefits[3].desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span className="mono-text" style={{ fontSize: '0.72rem', color: benefits[3].colorBright, fontWeight: 700 }}>
                  [1-ON-1 UPLINK]
                </span>
                <span className="mono-text" style={{ fontSize: '0.72rem', color: '#8A8A8A' }}>
                  24/7 SUPPORT
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @media (max-width: 1024px) {
          #benefits-matrix div[style*="grid-template-columns: repeat(12, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          #benefits-matrix div[style*="grid-column: span 4"] {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

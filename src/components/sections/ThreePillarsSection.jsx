import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Users, 
  Award,
  ShieldCheck, 
  Terminal,
  Check, 
  ArrowRight, 
  ExternalLink
} from 'lucide-react';

/**
 * ThreePillarsSection (Now 5 Pillars Ecosystem):
 * 1. LMS Academy (Orange #FF6B00)
 * 2. Campus Chapters (Green #10B981)
 * 3. Cyber Fellowship (Yellow #FFC107)
 * 4. Enterprise Defense (Red #FF0000)
 * 5. Threat Research & CTF (Cyan #00E5FF)
 * 
 * Auto-cycles every 2.5 seconds continuously without pausing on hover.
 * Zero scroll hijacking.
 */
export default function ThreePillarsSection({ onOpenContact, onNavigate }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: '01',
      tag: 'PILLAR 01 // LMS ACADEMY',
      tabLabel: 'Academy LMS',
      headlinePrefix: 'Practical cyber skills.',
      headlineHighlight: 'Built for jobs.',
      description: 'Hands-on virtual attack labs, Python automation, and industry certifications to make you job-ready.',
      icon: GraduationCap,
      color: '#FF6B00',        // Orange
      colorBright: '#FFA028',
      glow: 'rgba(255, 107, 0, 0.22)',
      bgSubtle: 'rgba(255, 107, 0, 0.12)',
      badge: 'FLAGSHIP LMS',
      link: 'https://cyberpashtopremium.com/',
      isExternal: true,
      items: [
        { text: 'Ethical Hacking & Pentesting', popular: true },
        { text: 'Bug Bounty Hunting & Web Exploits', popular: false },
        { text: 'OWASP Top 10 Masterclass', popular: false },
        { text: 'Virtual Attack/Defense Labs', popular: false },
        { text: 'Certification Prep (CEH, OSCP)', popular: false }
      ]
    },
    {
      id: '02',
      tag: 'PILLAR 02 // CAMPUS CHAPTERS',
      tabLabel: 'Campus Chapters',
      headlinePrefix: 'Cyber knowledge,',
      headlineHighlight: 'on your campus.',
      description: 'A growing student network across Pakistan bringing workshops, hackathons, and 1-on-1 mentorship to every city.',
      icon: Users,
      color: '#10B981',        // Green
      colorBright: '#00F59B',
      glow: 'rgba(16, 185, 129, 0.22)',
      bgSubtle: 'rgba(16, 185, 129, 0.12)',
      badge: '25+ HUBS',
      link: 'https://chapters.cyberpashto.com/',
      isExternal: true,
      items: [
        { text: 'On-Campus Hands-on Workshops', popular: true },
        { text: 'Inter-University Jeopardy CTFs', popular: false },
        { text: 'Women in Cyber Summits', popular: false },
        { text: '1-on-1 Senior Mentorship', popular: false },
        { text: 'Regional Grants & Hackathons', popular: false }
      ]
    },
    {
      id: '03',
      tag: 'PILLAR 03 // CYBER FELLOWSHIP',
      tabLabel: 'Fellowship',
      headlinePrefix: 'Elite talent incubation',
      headlineHighlight: '& mentorship.',
      description: 'An intensive merit fellowship incubating rising security researchers with stipends, tool licenses, and career tracks.',
      icon: Award,
      color: '#FFC107',        // Yellow / Gold
      colorBright: '#FFD54F',
      glow: 'rgba(255, 193, 7, 0.22)',
      bgSubtle: 'rgba(255, 193, 7, 0.12)',
      badge: 'COHORT 2025',
      link: 'https://fellowship.cyberpashto.com/',
      isExternal: true,
      items: [
        { text: '1-on-1 Senior Researcher Mentorship', popular: true },
        { text: 'Live Threat Research Retainers', popular: false },
        { text: 'Funded Security Tools & Labs', popular: false },
        { text: 'Global Remote Work Placement', popular: false },
        { text: 'Direct Conference Sponsorship', popular: false }
      ]
    },
    {
      id: '04',
      tag: 'PILLAR 04 // ENTERPRISE DEFENSE',
      tabLabel: 'Enterprise Security',
      headlinePrefix: 'Mission-critical VAPT',
      headlineHighlight: '& 24/7 SOC.',
      description: 'Defending digital infrastructure with comprehensive penetration testing, live SIEM surveillance, and ISO 27001 advisory.',
      icon: ShieldCheck,
      color: '#FF0205',        // Red
      colorBright: '#FF1616',
      glow: 'rgba(255, 2, 5, 0.24)',
      bgSubtle: 'rgba(255, 2, 5, 0.12)',
      badge: 'ENTERPRISE VAPT',
      link: '#contact',
      isExternal: false,
      items: [
        { text: 'Web & Mobile API Penetration Testing', popular: true },
        { text: '24/7 Managed SOC Telemetry & SIEM', popular: false },
        { text: 'Cloud Infrastructure & IAM Hardening', popular: false },
        { text: 'Rapid Incident Response & Forensics', popular: false },
        { text: 'ISO 27001 & Compliance Auditing', popular: false }
      ]
    },
    {
      id: '05',
      tag: 'PILLAR 05 // THREAT RESEARCH & CTF',
      tabLabel: 'Research & CTF',
      headlinePrefix: 'Vulnerability triage',
      headlineHighlight: '& CVE research.',
      description: 'Publishing responsible security disclosures, national hackathons, and real-time regional threat telemetry.',
      icon: Terminal,
      color: '#00E5FF',        // Cyan / Electric Blue
      colorBright: '#18FFFF',
      glow: 'rgba(0, 229, 255, 0.22)',
      bgSubtle: 'rgba(0, 229, 255, 0.12)',
      badge: 'THREAT LABS',
      link: '#events',
      isExternal: false,
      items: [
        { text: 'Responsible CVE Registration', popular: true },
        { text: 'HackProof 24h CTF Tournaments', popular: false },
        { text: 'Regional Threat Intelligence Feeds', popular: false },
        { text: 'Malware Reverse Engineering', popular: false },
        { text: 'Open-Source Defense Tooling', popular: false }
      ]
    }
  ];

  // Auto-cycling timer: exactly 2.5 seconds (2500ms) with NO pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [pillars.length]);

  const current = pillars[activePillar];
  const IconComponent = current.icon;

  return (
    <section 
      style={{
        backgroundColor: 'var(--black)',
        padding: '4.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}
    >
      {/* Background Cyber Grid */}
      <div className="cyber-grid-overlay" style={{ opacity: 0.3 }} />

      {/* Dynamic Colored Ambient Radial Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '45%',
          left: '35%',
          transform: 'translate(-50%, -50%)',
          width: '680px',
          height: '420px',
          background: `radial-gradient(circle, ${current.glow} 0%, transparent 70%)`,
          filter: 'blur(90px)',
          transition: 'background 0.4s ease',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header Row */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          <div>
            <div 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                fontWeight: 800,
                color: current.colorBright,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
                transition: 'color 0.3s ease'
              }}
            >
              EVERYTHING YOU NEED
            </div>

            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.03em'
              }}
            >
              Five pillars. <span style={{ color: current.colorBright, transition: 'color 0.3s ease' }}>One ecosystem.</span>
            </h2>
          </div>

          {/* Top Right Navigation Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {pillars.map((p, i) => {
                const isCurrent = i === activePillar;
                return (
                  <button
                    key={i}
                    onClick={() => setActivePillar(i)}
                    style={{
                      width: isCurrent ? '26px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: isCurrent ? p.color : 'var(--border)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: isCurrent ? `0 0 10px ${p.color}` : 'none'
                    }}
                    aria-label={`Jump to ${p.tabLabel}`}
                  />
                );
              })}
            </div>

            <div 
              className="mono-text" 
              style={{ 
                fontSize: '0.84rem', 
                color: 'var(--muted)', 
                fontWeight: 700 
              }}
            >
              <span style={{ color: current.colorBright, transition: 'color 0.3s ease' }}>{current.id}</span> / 05
            </div>
          </div>
        </div>

        {/* Interactive Main Pillar Stage */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Interactive "What's Included" Glass Card */}
          <div 
            style={{
              backgroundColor: 'var(--ink)',
              border: `1px solid ${current.color}`,
              borderRadius: '22px',
              padding: '2rem 2.25rem',
              boxShadow: `0 20px 50px rgba(0, 0, 0, 0.95), 0 0 30px ${current.glow}`,
              backdropFilter: 'blur(16px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.35s ease'
            }}
          >
            {/* Icon Box */}
            <div 
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: current.bgSubtle,
                border: `1px solid ${current.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: current.colorBright,
                marginBottom: '1.5rem',
                transition: 'all 0.35s ease'
              }}
            >
              <IconComponent size={26} />
            </div>

            <div 
              className="mono-text"
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                marginBottom: '1.15rem'
              }}
            >
              WHAT'S INCLUDED
            </div>

            {/* Checklist Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {current.items.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    padding: '0.2rem 0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div 
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: current.bgSubtle,
                        border: `1px solid ${current.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: current.colorBright,
                        flexShrink: 0,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span 
                      style={{ 
                        fontSize: '0.92rem', 
                        color: '#FFFFFF', 
                        fontWeight: 500,
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {item.text}
                    </span>
                  </div>

                  {item.popular && (
                    <span 
                      className="mono-text"
                      style={{
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        color: current.colorBright,
                        backgroundColor: current.bgSubtle,
                        border: `1px solid ${current.color}`,
                        padding: '0.18rem 0.5rem',
                        borderRadius: '4px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      POPULAR
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Pillar Switcher Tabs (5 Tabs) */}
            <div 
              style={{
                display: 'flex',
                gap: '0.35rem',
                marginTop: '2rem',
                paddingTop: '1.15rem',
                borderTop: '1px solid var(--border)',
                flexWrap: 'wrap'
              }}
            >
              {pillars.map((p, pIdx) => {
                const isSelected = activePillar === pIdx;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePillar(pIdx)}
                    style={{
                      flex: '1 1 calc(33.333% - 0.35rem)',
                      minWidth: '75px',
                      padding: '0.5rem 0.35rem',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: isSelected ? p.color : 'var(--border)',
                      backgroundColor: isSelected ? p.color : 'var(--ink)',
                      color: isSelected ? '#000000' : '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {p.tabLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Typography & Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span 
                className="mono-text" 
                style={{ 
                  fontSize: '0.88rem', 
                  color: current.colorBright, 
                  fontWeight: 800,
                  transition: 'color 0.3s ease'
                }}
              >
                {current.id}
              </span>
              <span 
                style={{ 
                  width: '35px', 
                  height: '2px', 
                  backgroundColor: current.color,
                  transition: 'background-color 0.3s ease' 
                }} 
              />
              <span 
                className="mono-text" 
                style={{ 
                  fontSize: '0.76rem', 
                  color: 'var(--muted)', 
                  letterSpacing: '0.08em' 
                }}
              >
                {current.tag}
              </span>
            </div>

            {/* Headline */}
            <h3 
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                letterSpacing: '-0.025em'
              }}
            >
              {current.headlinePrefix} <span style={{ color: current.colorBright, transition: 'color 0.3s ease' }}>{current.headlineHighlight}</span>
            </h3>

            {/* Concise description */}
            <p 
              style={{
                fontSize: '1.02rem',
                color: 'var(--paper)',
                lineHeight: 1.55,
                maxWidth: '560px'
              }}
            >
              {current.description}
            </p>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <a 
                href={current.link}
                target={current.isExternal ? '_blank' : '_self'}
                rel={current.isExternal ? 'noopener noreferrer' : ''}
                onClick={(e) => {
                  if (!current.isExternal) {
                    e.preventDefault();
                    if (onOpenContact) onOpenContact();
                  }
                }}
                className="btn"
                style={{
                  backgroundColor: current.color,
                  color: current.color === '#FFC107' ? '#000000' : '#FFFFFF',
                  borderColor: current.colorBright,
                  boxShadow: `0 4px 20px ${current.glow}`,
                  padding: '0.8rem 1.9rem',
                  fontSize: '0.94rem',
                  transition: 'all 0.3s ease',
                  fontWeight: 700
                }}
              >
                <span>Explore {current.tabLabel}</span>
                {current.isExternal ? <ExternalLink size={15} /> : <ArrowRight size={15} />}
              </a>

              <button 
                onClick={onOpenContact}
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.7rem', fontSize: '0.94rem' }}
              >
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

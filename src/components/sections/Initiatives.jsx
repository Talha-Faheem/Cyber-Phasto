import React from 'react';
import { GraduationCap, Users, Award, Calendar, ExternalLink, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function Initiatives() {
  const initiatives = [
    {
      title: 'Cyber Pashto Academy (LMS)',
      domain: 'cyberpashtopremium.com',
      url: 'https://cyberpashtopremium.com/',
      icon: GraduationCap,
      badge: 'OFFICIAL LMS PLATFORM',
      isPrimary: true,
      desc: 'Pakistan’s premier online cybersecurity learning platform featuring structured offensive, defensive, and certification courses with hands-on virtual labs.',
      highlights: ['Ethical Hacking & VAPT', 'Bug Bounty Hunting', 'Web & Mobile Security Labs', 'Practical Certifications']
    },
    {
      title: 'University Chapters Hub',
      domain: 'chapters.cyberpashto.com',
      url: 'https://chapters.cyberpashto.com/',
      icon: Users,
      badge: '25+ ACTIVE CHAPTERS',
      isPrimary: false,
      desc: 'Nationwide network of student-led cyber chapters empowering youth across Khyber Pakhtunkhwa and major universities in Pakistan.',
      highlights: ['Student Chapter Leadership', 'Campus Cyber Workshops', 'Inter-University CTFs', 'Peer Mentorship']
    },
    {
      title: 'Cyber Fellowship Program',
      domain: 'fellowship.cyberpashto.com',
      url: 'https://fellowship.cyberpashto.com/',
      icon: Award,
      badge: 'COHORT 2025',
      isPrimary: false,
      desc: 'An intensive, merit-based fellowship incubating top security talent with direct industry guidance from senior red-teamers and SOC leaders.',
      highlights: ['1-on-1 Senior Mentorship', 'Live Threat Research', 'Career Placement Tracks', 'Stipends & Security Tools']
    },
    {
      title: 'Past Events & CTF Archives',
      domain: 'cyberpashto.com/events',
      url: '#events',
      icon: Calendar,
      badge: 'ANNUAL SUMMITS',
      isPrimary: false,
      desc: 'Historical archive of CyberFest 2025, Women in Cybersecurity Conferences, and national hackathons organized by Cyber Pashto.',
      highlights: ['CyberFest Keynotes', 'Jeopardy & Attack-Defense CTF', 'Women in Tech Panels', 'Speaker Slides & Demos']
    }
  ];

  return (
    <section id="initiatives" style={{ backgroundColor: 'var(--black)', padding: '4.5rem 0', position: 'relative', borderTop: '1px solid var(--border)' }}>
      <div className="cyber-grid-overlay" style={{ opacity: 0.35 }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '0.85rem', color: '#FFFFFF' }}>
            Academic & Community <span className="text-gradient-red">Initiatives</span>
          </h2>
          <p style={{ color: 'var(--paper)', fontSize: '1.02rem' }}>
            Explore the specialized portals and programs powering Pakistan's largest cybersecurity ecosystem.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {initiatives.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="browser-window"
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--ink)',
                  border: item.isPrimary ? '1px solid var(--red)' : '1px solid var(--border)',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: item.isPrimary ? '0 15px 40px rgba(0,0,0,0.85), 0 0 25px var(--red-glow)' : 'none'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--red-subtle)',
                        border: '1px solid var(--red-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--red-bright)'
                      }}
                    >
                      <IconComp size={24} />
                    </div>

                    <span 
                      className="mono-text"
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        backgroundColor: 'var(--red-subtle)',
                        border: '1px solid var(--red-border)',
                        color: 'var(--red-bright)'
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.35rem', color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                    {item.title}
                  </h3>

                  <span className="mono-text" style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: '1rem' }}>
                    {item.domain}
                  </span>

                  <p style={{ color: 'var(--paper)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--red)' }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`btn ${item.isPrimary ? 'btn-red' : 'btn-secondary'}`}
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem', padding: '0.65rem 1rem' }}
                >
                  <span>Launch Portal</span>
                  {item.url.startsWith('http') ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

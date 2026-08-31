import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle } from 'lucide-react';

export default function InfiniteReviews() {
  const row1 = [
    {
      name: 'Muhammad Saad',
      role: 'Junior Penetration Tester @ TechFirm',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      review: 'Cyber Pashto Academy’s VAPT course gave me hands-on labs that helped me report my first CVE and land a red-team analyst role!',
      tag: 'Academy Alum'
    },
    {
      name: 'Zainab Ahmed',
      role: 'Women in Cyber Chapter Lead (Islamabad)',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      review: 'The mentorship from senior threat researchers transformed our university chapter. We organized Pakistan’s first female CTF!',
      tag: 'Chapter Lead'
    },
    {
      name: 'Usman Ali',
      role: 'SOC Tier-1 Analyst @ Bank Cyber Operations',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      review: 'The SIEM monitoring modules in Cybersecurity Level 2 were 100% practical. No boring theory—pure log analysis and threat hunting.',
      tag: 'Cybersecurity Alum'
    },
    {
      name: 'Dr. Farhan Khattak',
      role: 'Department Head @ KP University',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      review: 'Cyber Pashto student chapters bridge the huge gap between traditional computer science curricula and real-world threat defense.',
      tag: 'University Partner'
    }
  ];

  const row2 = [
    {
      name: 'Ayesha Khan',
      role: 'Cloud Security Engineer',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      review: 'The ISO 27001 & CISSP security architecture masterclass is unmatched. Helped our company pass compliance audits seamlessly.',
      tag: 'Enterprise Alum'
    },
    {
      name: 'Bilal Hassan',
      role: 'Bug Bounty Researcher',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      review: 'I earned over $4,500 in bounty rewards within 3 months of taking the Web Security bootcamp. Best investment ever!',
      tag: 'Top Bounty Hunter'
    },
    {
      name: 'Tariq Mehmood',
      role: 'Chief Information Security Officer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      review: 'Cyber Pashto graduates demonstrate real offensive skills on day one. Their practical virtual labs make all the difference.',
      tag: 'Hiring Partner'
    },
    {
      name: 'Sana Rehman',
      role: 'Cyber Fellowship Scholar',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      review: 'The structured mentorship from industry leaders gave me the confidence to present my security research at national symposiums.',
      tag: 'Fellowship Scholar'
    }
  ];

  return (
    <section 
      style={{ 
        backgroundColor: 'var(--black)', 
        padding: '4.5rem 0', 
        overflow: 'hidden', 
        position: 'relative', 
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)' 
      }}
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '0.85rem', color: '#FFFFFF' }}>
          Trusted by <span style={{ color: 'var(--red)' }}>50,000+ Defenders</span>
        </h2>
        <p style={{ color: 'var(--paper)', fontSize: '1.02rem' }}>
          Hear from graduates, chapter leads, and security executives building their careers with Cyber Pashto.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container with Left & Right Gradient Shadows */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem' 
        }}
      >
        {/* Left Side Shadow / Fade Gradient */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 'clamp(80px, 15vw, 240px)',
            background: 'linear-gradient(to right, #050505 25%, rgba(5, 5, 5, 0.8) 60%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        />

        {/* Right Side Shadow / Fade Gradient */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: 'clamp(80px, 15vw, 240px)',
            background: 'linear-gradient(to left, #050505 25%, rgba(5, 5, 5, 0.8) 60%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        />
        
        {/* Row 1: Left to Right */}
        <div className="marquee-wrapper">
          <div className="marquee-content" style={{ display: 'flex', gap: '1.5rem' }}>
            {[...row1, ...row1].map((r, idx) => (
              <div 
                key={idx}
                className="browser-window"
                style={{
                  width: '380px',
                  flexShrink: 0,
                  padding: '1.5rem',
                  backgroundColor: 'var(--ink)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img 
                      src={r.avatar} 
                      alt={r.name}
                      style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--red)' }} 
                    />
                    <div>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF' }}>{r.name}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{r.role}</span>
                    </div>
                  </div>
                  <span className="mono-text" style={{ fontSize: '0.68rem', color: 'var(--red-bright)', backgroundColor: 'var(--red-subtle)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--red-border)' }}>
                    {r.tag}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--red-bright)" color="var(--red-bright)" />
                  ))}
                </div>

                <p style={{ color: 'var(--paper)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  "{r.review}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="marquee-wrapper">
          <div className="marquee-content-reverse" style={{ display: 'flex', gap: '1.5rem' }}>
            {[...row2, ...row2].map((r, idx) => (
              <div 
                key={idx}
                className="browser-window"
                style={{
                  width: '380px',
                  flexShrink: 0,
                  padding: '1.5rem',
                  backgroundColor: 'var(--ink)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img 
                      src={r.avatar} 
                      alt={r.name}
                      style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--red)' }} 
                    />
                    <div>
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF' }}>{r.name}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{r.role}</span>
                    </div>
                  </div>
                  <span className="mono-text" style={{ fontSize: '0.68rem', color: 'var(--red-bright)', backgroundColor: 'var(--red-subtle)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--red-border)' }}>
                    {r.tag}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--red-bright)" color="var(--red-bright)" />
                  ))}
                </div>

                <p style={{ color: 'var(--paper)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  "{r.review}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          user-select: none;
        }
        .marquee-content {
          animation: scrollLeft 35s linear infinite;
        }
        .marquee-content-reverse {
          animation: scrollRight 35s linear infinite;
        }
        .marquee-wrapper:hover .marquee-content,
        .marquee-wrapper:hover .marquee-content-reverse {
          animation-play-state: paused;
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

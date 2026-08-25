import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen, Clock, Award, CheckCircle2 } from 'lucide-react';

/**
 * ZeroToProfessionalCarousel — Clean, Solid & Professional Carousel Component
 * No glassy blur effect. Built with solid dark panels (#0E1015), crisp borders (#292929), and red accents.
 */
export default function ZeroToProfessionalCarousel({ onNavigate, onOpenContact }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      step: '01',
      phase: 'GROUND ZERO',
      title: 'Computer Systems, Linux & Network Defense',
      description: 'Master terminal architecture, Linux kernel fundamentals, TCP/IP packet analysis, and Python automation without requiring prior coding experience.',
      skills: ['Linux CLI', 'TCP/IP & OSI', 'Python Automation', 'Wireshark Labs'],
      recommended: 'Cybersecurity Level 1',
      duration: '14h 45m',
      labs: '22 Labs',
      stat: 'Starter Friendly',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '02',
      phase: 'ESSENTIAL TOOLKIT',
      title: 'Offensive Security Tooling & Web Auditing',
      description: 'Command 50+ offensive tools in Kali Linux, dissect OWASP Top 10 web vulnerabilities, Burp Suite Pro interception, and deep SQL injection flaws.',
      skills: ['Burp Suite Pro', 'OWASP Top 10', 'SQLi Injection', 'Kali Linux'],
      recommended: 'Cybersecurity Level 2',
      duration: '18h 30m',
      labs: '28 Labs',
      stat: 'OWASP Certified',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '03',
      phase: 'LIVE EXPLOIT RANGE',
      title: 'Practical VAPT Labs & Defense Engineering',
      description: 'Hack into realistic simulated corporate networks, exploit vulnerable APIs, escalate root privileges, and draft professional penetration testing reports.',
      skills: ['Target Range', 'API Pentesting', 'JWT Exploits', 'VAPT Reporting'],
      recommended: 'Web Security & VAPT',
      duration: '24h 00m',
      labs: '32 Labs',
      stat: 'Audit Ready',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '04',
      phase: 'RED TEAM WARFARE',
      title: 'Active Directory Domination & AI Threat Intel',
      description: 'Execute multi-forest Active Directory attacks, craft custom memory evasion payloads, automate SOC defenses with LLM agents, and emulate APT actors.',
      skills: ['Active Directory', 'Custom Payloads', 'AI Threat Ops', 'EDR Evasion'],
      recommended: 'Ethical Hacking Level 3',
      duration: '26h 15m',
      labs: '36 Labs',
      stat: 'Flagship Track',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '05',
      phase: 'INDUSTRY PROFESSIONAL',
      title: 'Enterprise Governance & Global Freelance',
      description: 'Master CISSP security architecture, international Upwork & LinkedIn client acquisition, contract negotiation, and direct enterprise job placement.',
      skills: ['CISSP Governance', 'Upwork Contracts', 'Client Acquisition', 'Global Placement'],
      recommended: 'Tech Freelancing Accelerator',
      duration: '38h 50m',
      labs: 'Career Track',
      stat: 'Global Remote',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handleAction = () => {
    if (onNavigate) {
      onNavigate('courses');
    } else {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="zero-to-professional-carousel"
      style={{
        backgroundColor: '#05070A',
        padding: '5rem 0',
        position: 'relative',
        borderTop: '1px solid #292929',
        borderBottom: '1px solid #292929'
      }}
    >
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
        
        {/* Header with Navigation Controls */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          <div>
            <h2 
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              Interactive Stage <span style={{ color: '#FF0000' }}>Carousel</span>
            </h2>
          </div>

          {/* Controls Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                color: '#8A8A8A',
                fontWeight: 700
              }}
            >
              <span style={{ color: '#FF0000', fontWeight: 800 }}>{carouselItems[activeIndex].step}</span> / 05
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handlePrev}
                aria-label="Previous Stage"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#0E1015',
                  border: '1px solid #292929',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="carousel-ctrl-btn"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Stage"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#0E1015',
                  border: '1px solid #292929',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="carousel-ctrl-btn"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Showcase Stage */}
        <div 
          style={{
            backgroundColor: '#0A0C10',
            border: '1px solid #292929',
            borderRadius: '20px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            minHeight: '400px'
          }}
        >
          {/* Left: Image / Visual Block */}
          <div style={{ position: 'relative', minHeight: '280px', backgroundColor: '#000000' }}>
            <img 
              src={carouselItems[activeIndex].image} 
              alt={carouselItems[activeIndex].title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent 0%, #0A0C10 95%), linear-gradient(to top, #0A0C10 0%, transparent 60%)'
              }}
            />
          </div>

          {/* Right: Content Information Block */}
          <div 
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#FF1616',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}
              >
                // {carouselItems[activeIndex].phase}
              </div>

              <h3 
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.25,
                  marginBottom: '0.85rem',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {carouselItems[activeIndex].title}
              </h3>

              <p 
                style={{
                  fontSize: '0.92rem',
                  color: '#A0A0A0',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}
              >
                {carouselItems[activeIndex].description}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {carouselItems[activeIndex].skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#E0E0E0',
                      backgroundColor: '#141822',
                      border: '1px solid #292929',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row: Metadata & CTA */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid #242730'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: '#8A8A8A' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} style={{ color: '#FF1616' }} />
                  <span>{carouselItems[activeIndex].duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <BookOpen size={14} style={{ color: '#FF1616' }} />
                  <span>{carouselItems[activeIndex].labs}</span>
                </div>
              </div>

              <button
                onClick={handleAction}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '8px',
                  backgroundColor: '#FF0000',
                  border: '1px solid #FF0000',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>View Recommended Course</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {carouselItems.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              style={{
                width: dotIdx === activeIndex ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: dotIdx === activeIndex ? '#FF0000' : '#292929',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              aria-label={`Jump to stage ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>

      <style>{`
        .carousel-ctrl-btn:hover {
          background-color: #FF0000 !important;
          border-color: #FF0000 !important;
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Clock, Award, Terminal, GraduationCap } from 'lucide-react';

/**
 * ZeroToProfessionalList — Clean, solid, professional sequential roadmap list.
 * Zero glassy blur, clean dark borders (#292929), high-contrast readability, solid dark cards (#0E1015).
 */
export default function ZeroToProfessionalList({ onNavigate, onOpenContact }) {
  const steps = [
    {
      step: '01',
      phase: 'FOUNDATIONS',
      title: 'Computer Systems, Linux & Network Defense',
      description: 'Master terminal architecture, Linux kernel fundamentals, TCP/IP packet analysis, and Python automation without requiring prior coding experience.',
      skills: ['Linux CLI', 'TCP/IP & OSI', 'Python Automation', 'Wireshark Labs'],
      recommended: 'Cybersecurity Level 1 • Python Cyber Automation',
      duration: '14h 45m',
      labs: '22 Labs',
      badge: 'STARTER FRIENDLY'
    },
    {
      step: '02',
      phase: 'TOOLING & AUDITING',
      title: 'Offensive Security Tooling & Web Vulnerability Auditing',
      description: 'Command 50+ offensive tools in Kali Linux, dissect OWASP Top 10 web vulnerabilities, Burp Suite Pro proxy interception, and SQL injection flaws.',
      skills: ['Burp Suite Pro', 'OWASP Top 10', 'SQLi Injection', 'Kali Linux Pro'],
      recommended: 'Cybersecurity Level 2 • Kali Linux Mastery',
      duration: '18h 30m',
      labs: '28 Labs',
      badge: 'ESSENTIAL TOOLKIT'
    },
    {
      step: '03',
      phase: 'PRACTICAL VAPT',
      title: 'Offensive VAPT Labs & Defense Engineering',
      description: 'Hack into realistic simulated corporate networks, exploit vulnerable APIs, escalate root privileges, and draft industry-standard penetration testing reports.',
      skills: ['Virtual Target Range', 'API Pentesting', 'JWT Exploits', 'VAPT Reporting'],
      recommended: 'Web Security & VAPT • Secure JS Architecture',
      duration: '24h 00m',
      labs: '32 Labs',
      badge: 'HANDS-ON RANGE'
    },
    {
      step: '04',
      phase: 'ADVANCED ADVERSARY',
      title: 'Active Directory Domination & AI Threat Intelligence',
      description: 'Execute multi-forest Active Directory attacks, craft custom memory evasion payloads, automate SOC defenses with LLM agents, and emulate APT threat actors.',
      skills: ['Active Directory', 'Custom Payloads', 'AI Threat Ops', 'EDR Evasion'],
      recommended: 'Ethical Hacking Level 3 • AI Threat Intelligence',
      duration: '26h 15m',
      labs: '36 Labs',
      badge: 'FLAGSHIP MASTERCLASS'
    },
    {
      step: '05',
      phase: 'CAREER & PLACEMENT',
      title: 'Enterprise Governance, Global Freelance & Placement',
      description: 'Master CISSP security architecture, international Upwork & LinkedIn client acquisition, contract negotiation, and direct enterprise job placement.',
      skills: ['CISSP Governance', 'Upwork Contracts', 'Client Acquisition', 'Global Placement'],
      recommended: 'CISSP Architecture • Tech Freelancing Accelerator',
      duration: '38h 50m',
      labs: 'Career Track',
      badge: 'GLOBAL REMOTE'
    }
  ];

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
      id="zero-to-professional-list"
      style={{
        backgroundColor: '#000000',
        padding: '5rem 0 5.5rem 0',
        position: 'relative',
        borderTop: '1px solid #292929',
        borderBottom: '1px solid #292929'
      }}
    >
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            style={{
              display: 'inline-block',
              padding: '0.3rem 0.85rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              border: '1px solid rgba(255, 0, 0, 0.3)',
              color: '#FF0000',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              marginBottom: '0.85rem'
            }}
          >
            CURRICULUM ROADMAP
          </div>

          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '0.85rem',
              letterSpacing: '-0.025em'
            }}
          >
            From Zero To <span style={{ color: '#FF0000' }}>Professional.</span>
          </h2>

          <p style={{ color: '#A0A0A0', fontSize: '1.02rem', maxWidth: '680px', margin: '0 auto' }}>
            A structured, sequential 5-stage progression taking you from foundational computer systems to offensive security operations and global placement.
          </p>
        </div>

        {/* Clean Structured List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {steps.map((item) => (
            <div
              key={item.step}
              style={{
                backgroundColor: '#0A0C10',
                border: '1px solid #242730',
                borderRadius: '16px',
                padding: '1.6rem 2rem',
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '1.75rem',
                alignItems: 'center',
                transition: 'border-color 0.2s ease, transform 0.2s ease'
              }}
              className="roadmap-list-row"
            >
              {/* Step Number Column */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '1px solid #242730',
                  paddingRight: '1.5rem'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.9rem',
                    fontWeight: 800,
                    color: '#FF0000',
                    lineHeight: 1
                  }}
                >
                  {item.step}
                </span>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    color: '#8A8A8A',
                    letterSpacing: '0.05em',
                    marginTop: '0.25rem'
                  }}
                >
                  PHASE
                </span>
              </div>

              {/* Center Content Column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#FF1616',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    // {item.phase}
                  </span>

                  <span 
                    style={{
                      fontSize: '0.66rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#D0D0D0',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px'
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  {item.title}
                </h3>

                <p 
                  style={{
                    fontSize: '0.88rem',
                    color: '#8A8A8A',
                    lineHeight: 1.55,
                    marginBottom: '0.85rem'
                  }}
                >
                  {item.description}
                </p>

                {/* Skills tags and metadata */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {item.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: '#C0C0C0',
                          backgroundColor: '#12151C',
                          border: '1px solid #292929',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.78rem', color: '#8A8A8A' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={12} style={{ color: '#FF1616' }} />
                      <span>{item.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <BookOpen size={12} style={{ color: '#FF1616' }} />
                      <span>{item.labs}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Action Column */}
              <div>
                <button
                  onClick={handleAction}
                  style={{
                    padding: '0.65rem 1.15rem',
                    borderRadius: '8px',
                    backgroundColor: '#12151C',
                    border: '1px solid #292929',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  className="roadmap-row-btn"
                >
                  <span>View Cohort</span>
                  <ArrowRight size={14} style={{ color: '#FF1616' }} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .roadmap-list-row:hover {
          border-color: #FF0000 !important;
          transform: translateY(-2px);
        }
        .roadmap-list-row:hover .roadmap-row-btn {
          background-color: #FF0000 !important;
          border-color: #FF0000 !important;
        }
        .roadmap-list-row:hover .roadmap-row-btn span {
          color: #FFFFFF !important;
        }
        .roadmap-list-row:hover .roadmap-row-btn svg {
          color: #FFFFFF !important;
        }
        @media (max-width: 768px) {
          .roadmap-list-row {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .roadmap-list-row > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid #242730 !important;
            padding-right: 0 !important;
            padding-bottom: 0.75rem !important;
            flex-direction: row !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Terminal, 
  CloudSecurity, 
  Server, 
  FileCheck, 
  Users, 
  ArrowUpRight, 
  Lock, 
  CheckCircle,
  Zap
} from 'lucide-react';

export default function Services({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const services = [
    {
      id: 'vapt',
      title: 'Penetration Testing & VAPT',
      category: 'Offensive',
      icon: Terminal,
      shortDesc: 'Rigorous black-box, white-box, and gray-box penetration testing for web apps, mobile APIs, and network perimeters.',
      features: ['OWASP Top 10 Deep Audits', 'API & Microservice Exploitation', 'Executive Vulnerability Report', 'Remediation Re-testing']
    },
    {
      id: 'soc',
      title: 'Managed SOC & Threat Defense',
      category: 'Defensive',
      icon: Server,
      shortDesc: 'Continuous 24/7 SIEM monitoring, threat hunting, and automated anomaly detection powered by enterprise telemetry.',
      features: ['24/7 Real-Time Telemetry', 'SIEM & SOAR Integration', 'Threat Hunting & SIEM Rules', 'SLA-backed Incident Alerts']
    },
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure Hardening',
      category: 'Infrastructure',
      icon: Lock,
      shortDesc: 'Comprehensive security posture management across AWS, Azure, GCP, Kubernetes, and hybrid data centers.',
      features: ['CSPM Configuration Audits', 'IAM Least-Privilege Enforcements', 'Kubernetes Security Scanning', 'Zero-Trust Network Design']
    },
    {
      id: 'forensics',
      title: 'Incident Response & Forensics',
      category: 'Defensive',
      icon: ShieldAlert,
      shortDesc: 'Rapid deployment unit to contain ransomware outbreaks, analyze malware binaries, and recover compromised infrastructure.',
      features: ['1-Hour Response SLA', 'Ransomware Eradication', 'Memory & Disk Forensics', 'Post-Breach Root Cause Analysis']
    },
    {
      id: 'compliance',
      title: 'Compliance & ISO 27001 Audit',
      category: 'Governance',
      icon: FileCheck,
      shortDesc: 'Guidance and audit readiness frameworks for ISO 27001, PCI-DSS, SOC 2 Type II, and Pakistani regulatory standards.',
      features: ['Gap Analysis & Policy Drafting', 'ISO 27001 Certification Prep', 'PCI-DSS Data Auditing', 'Third-Party Risk Assessment']
    },
    {
      id: 'training',
      title: 'Corporate Training & Red Teaming',
      category: 'Offensive',
      icon: Users,
      shortDesc: 'Simulated adversary attacks, spear-phishing campaigns, and executive cyber crisis simulation workshops.',
      features: ['Custom Phishing Simulations', 'Executive Tabletop Exercises', 'Secure Code Workshops', 'Red Team Adversary Simulation']
    }
  ];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: '#07080a', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
            Cybersecurity <span className="text-gradient-red">Services</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Military-grade security assessments, continuous defense, and threat intelligence tailored 
            for enterprises, financial institutions, and government bodies.
          </p>
        </div>

        {/* Category Filters */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {['All', 'Offensive', 'Defensive', 'Infrastructure', 'Governance'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent-red-bright)' : 'var(--border-card)',
                backgroundColor: activeCategory === cat ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === cat ? 'var(--shadow-red-sm)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="glass-panel service-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  backgroundColor: '#0a0b0e',
                  border: '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        padding: '0.75rem',
                        borderRadius: '10px',
                        backgroundColor: 'var(--accent-red-subtle)',
                        border: '1px solid var(--accent-red-border)',
                        color: 'var(--accent-red-bright)'
                      }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <span 
                      className="mono-text"
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--accent-red-bright)',
                        border: '1px solid rgba(229, 9, 20, 0.2)'
                      }}
                    >
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.shortDesc}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {service.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={14} style={{ color: 'var(--accent-red-bright)', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={onOpenContact}
                  className="btn btn-outline-red"
                  style={{ width: '100%', justifyContent: 'space-between', padding: '0.75rem 1.1rem', fontSize: '0.88rem' }}
                >
                  <span>Request Assessment</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .service-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .service-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-red-border) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(229, 9, 20, 0.15) !important;
        }
      `}</style>
    </section>
  );
}

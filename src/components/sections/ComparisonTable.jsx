import React from 'react';
import { Check, X, Shield, Zap, Sparkles } from 'lucide-react';

export default function ComparisonTable() {
  const comparisonItems = [
    {
      feature: 'Real Target VAPT Laboratories',
      others: false,
      cyberPashto: 'Dedicated virtual labs with OWASP Top 10 & Active Directory scenarios'
    },
    {
      feature: '24/7 Live Threat Telemetry & Mentorship',
      others: false,
      cyberPashto: 'Hands-on SIEM monitoring and direct access to senior offensive engineers'
    },
    {
      feature: '1-on-1 Code & Exploit Reviews',
      others: false,
      cyberPashto: 'Personalized project audits, code walkthroughs, and portfolio feedback'
    },
    {
      feature: 'CVE & Ethical Vulnerability Disclosure',
      others: false,
      cyberPashto: 'Structured guidance on bug bounty disclosures & CVE registration'
    },
    {
      feature: 'Nationwide Campus & Chapter Network',
      others: false,
      cyberPashto: '25+ active university student chapters across Pakistan'
    },
    {
      feature: 'Job Placement & Enterprise Referrals',
      others: false,
      cyberPashto: 'Direct referrals to financial institutions, SOCs, & tech firms'
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--black)', padding: '4.5rem 0', position: 'relative', borderTop: '1px solid var(--border)' }}>
      <div className="cyber-grid-overlay" style={{ opacity: 0.3 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '0.85rem', color: '#FFFFFF' }}>
            What Extra <span className="text-gradient-red">Cyber Pashto</span> Gives You
          </h2>
          <p style={{ color: 'var(--paper)', fontSize: '1.02rem' }}>
            Why leading security researchers and university students choose Cyber Pashto over generic video marketplaces.
          </p>
        </div>

        {/* Comparison Grid */}
        <div 
          className="browser-window"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            backgroundColor: 'var(--ink)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            overflow: 'hidden'
          }}
        >
          {/* Table Header */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1.2fr 2.5fr',
              padding: '1.25rem 1.75rem',
              backgroundColor: 'var(--black)',
              borderBottom: '1px solid var(--border)',
              fontWeight: 700,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <div style={{ color: 'var(--muted)' }}>CORE CAPABILITY</div>
            <div style={{ color: 'var(--muted)', textAlign: 'center' }}>GENERIC PLATFORMS</div>
            <div style={{ color: 'var(--red-bright)', textAlign: 'center' }}>CYBER PASHTO ACADEMY</div>
          </div>

          {/* Rows */}
          {comparisonItems.map((item, idx) => (
            <div 
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1.2fr 2.5fr',
                padding: '1.15rem 1.75rem',
                borderBottom: idx === comparisonItems.length - 1 ? 'none' : '1px solid var(--border)',
                backgroundColor: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                alignItems: 'center',
                fontSize: '0.88rem'
              }}
            >
              <div style={{ fontWeight: 600, color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}>
                {item.feature}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8A8A8A' }}>
                  <X size={14} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#D0D0D0' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(255, 0, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF1616', flexShrink: 0 }}>
                  <Check size={14} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '0.85rem' }}>{item.cyberPashto}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

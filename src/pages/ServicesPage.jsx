import React, { useState } from 'react';
import HomeBackground from '../components/home/HomeBackground';
import GeometricDivider from '../components/common/GeometricDivider';
import { 
  Terminal, 
  Server, 
  Lock, 
  ShieldAlert, 
  FileCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Calculator
} from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const [selectedTarget, setSelectedTarget] = useState('web');
  const [assetCount, setAssetCount] = useState(3);

  const services = [
    {
      id: 'vapt',
      title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
      icon: Terminal,
      category: 'Offensive Security',
      desc: 'In-depth security testing simulating advanced real-world adversaries across your web applications, mobile APIs, external perimeters, and internal networks.',
      scopeItems: [
        'OWASP Top 10 & SANS Top 25 Vulnerability Coverage',
        'API & Microservices Authentication Bypass Testing',
        'Business Logic Flaw Identification & Privilege Escalation',
        'Zero-Day Vulnerability Triage & Proof-of-Concept Disclosures',
        'Executive & Technical Remediation Reports with 30-day Re-testing'
      ]
    },
    {
      id: 'soc',
      title: '24/7 Managed SOC & Threat Operations Center',
      icon: Server,
      category: 'Defensive Security',
      desc: 'Continuous real-time threat monitoring, SIEM telemetry integration, and automated alert triage to stop breaches before impact.',
      scopeItems: [
        '24/7/365 Continuous Endpoint & Network Surveillance',
        'Custom SIEM Detection Rules & Threat Hunting Telemetry',
        '15-Minute Critical Security Alert SLA',
        'Active Intrusion Containment & Threat Suppression',
        'Monthly Executive Security Posture Intelligence'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Posture & Infrastructure Hardening',
      icon: Lock,
      category: 'Infrastructure',
      desc: 'Comprehensive cloud security posture management (CSPM) across AWS, Azure, GCP, and Kubernetes container environments.',
      scopeItems: [
        'IAM Least-Privilege Enforcements & Policy Auditing',
        'Container & Kubernetes Cluster Hardening (CIS Benchmarks)',
        'Storage Bucket & Public Asset Exposure Scanning',
        'Zero-Trust Network Architecture & Microsegmentation',
        'Automated CI/CD Pipeline Infrastructure-as-Code Security'
      ]
    },
    {
      id: 'forensics',
      title: 'Incident Response & Digital Forensics',
      icon: ShieldAlert,
      category: 'Incident Response',
      desc: 'Emergency response unit to contain ransomware outbreaks, isolate compromised servers, and recover business operations rapidly.',
      scopeItems: [
        '1-Hour Incident Response SLA On-Demand',
        'Ransomware & Malware Binary Reverse Engineering',
        'Memory, Disk, & Network Packet Forensics',
        'Attacker Timeline Reconstruction & Root Cause Analysis',
        'Post-Incident Regulatory Reporting Assistance'
      ]
    },
    {
      id: 'compliance',
      title: 'ISO 27001 & Regulatory Compliance Audits',
      icon: FileCheck,
      category: 'Governance & Risk',
      desc: 'End-to-end guidance to achieve and maintain compliance for ISO 27001, PCI-DSS, SOC 2 Type II, and Pakistani data privacy regulations.',
      scopeItems: [
        'Comprehensive Gap Analysis & Risk Assessment',
        'Information Security Policy & Framework Drafting',
        'Third-Party Vendor Risk Audits',
        'Pre-Audit Certification Preparedness Drills',
        'Annual Compliance Maintenance Retainer'
      ]
    },
    {
      id: 'redteam',
      title: 'Red Teaming & Security Awareness Drills',
      icon: Users,
      category: 'Adversary Simulation',
      desc: 'Simulated multi-layered adversary attacks testing your organization’s physical, human, and electronic defenses simultaneously.',
      scopeItems: [
        'Customized Spear-Phishing & Social Engineering Campaigns',
        'Physical Security & Facility Access Penetration',
        'Executive & Boardroom Cyber Crisis Simulations',
        'Blue Team Reaction Time & Defense Benchmark',
        'Employee Security Awareness Workshops'
      ]
    }
  ];

  const getEstimatedPrice = () => {
    let base = 1500;
    if (selectedTarget === 'web') base = 1800;
    if (selectedTarget === 'mobile') base = 2200;
    if (selectedTarget === 'cloud') base = 3000;
    if (selectedTarget === 'soc') base = 4500;
    return (base * assetCount).toLocaleString();
  };

  return (
    <div className="servicesPageWrapper bg-[#040404] pt-28 pb-24 min-h-screen text-white w-full relative overflow-x-hidden">
      <HomeBackground />
      <section className="container" style={{ textAlign: 'center', maxWidth: '850px', marginBottom: '4.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.15 }}>
          Enterprise Cybersecurity <span className="gradient-text">Services</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
          Protecting Pakistan's digital assets since 2017 with rigorous penetration testing, 24/7 SOC threat operations, 
          and military-grade vulnerability research.
        </p>
      </section>

      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div 
                key={srv.id}
                className="browser-window"
                style={{
                  padding: '2.5rem',
                  backgroundColor: '#111419',
                  border: '1px solid rgba(237, 234, 226, 0.12)',
                  borderRadius: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '12px', backgroundColor: 'rgba(201, 154, 58, 0.12)', border: '1px solid rgba(201, 154, 58, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C99A3A' }}>
                      <IconComp size={26} />
                    </div>
                    <span className="mono-text" style={{ fontSize: '0.72rem', color: '#C99A3A', backgroundColor: 'rgba(201, 154, 58, 0.1)', padding: '0.3rem 0.75rem', borderRadius: '4px', border: '1px solid rgba(201, 154, 58, 0.25)' }}>
                      {srv.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.85rem', color: '#EDEAE2' }}>{srv.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                    {srv.desc}
                  </p>

                  <h4 className="mono-text" style={{ fontSize: '0.78rem', color: '#C99A3A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                    KEY DELIVERABLES & SCOPE
                  </h4>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                    {srv.scopeItems.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} style={{ color: '#C99A3A', flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button onClick={onOpenContact} className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Request Proposal for {srv.id.toUpperCase()}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <GeometricDivider pattern="pashtun-grid" intensity={0.35} />

      <section className="container" style={{ marginTop: '4rem', marginBottom: '6rem' }}>
        <div 
          className="browser-window"
          style={{
            padding: '3rem',
            backgroundColor: '#111419',
            border: '2px solid #C99A3A',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.9), 0 0 35px rgba(201, 154, 58, 0.18)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Calculator size={24} style={{ color: '#C99A3A' }} />
              <span className="mono-text" style={{ fontSize: '0.8rem', color: '#C99A3A', fontWeight: 700 }}>INTERACTIVE SCOPE ESTIMATOR</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#EDEAE2' }}>Estimate Security Audit Scope</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Configure your assessment targets to calculate an estimated scope timeframe and proposal summary.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Select Assessment Target Type:
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {[
                    { id: 'web', label: 'Web Application & API' },
                    { id: 'mobile', label: 'Mobile App (iOS/Android)' },
                    { id: 'cloud', label: 'Cloud Infrastructure' },
                    { id: 'soc', label: '24/7 Managed SOC' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTarget(t.id)}
                      style={{
                        padding: '0.6rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid',
                        borderColor: selectedTarget === t.id ? '#C99A3A' : 'rgba(237, 234, 226, 0.15)',
                        backgroundColor: selectedTarget === t.id ? '#C99A3A' : '#0B0D10',
                        color: selectedTarget === t.id ? '#0B0D10' : '#EDEAE2',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Number of Applications / Subdomains / Nodes: ({assetCount})
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  value={assetCount}
                  onChange={(e) => setAssetCount(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#C99A3A' }}
                />
              </div>
            </div>
          </div>

          <div 
            style={{
              padding: '2rem',
              borderRadius: '16px',
              backgroundColor: '#0E1015',
              border: '1px solid rgba(201, 154, 58, 0.25)',
              textAlign: 'center'
            }}
          >
            <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>ESTIMATED PROPOSAL SUMMARY</span>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#C99A3A', margin: '1rem 0', fontFamily: 'var(--font-mono)' }}>
              ${getEstimatedPrice()} <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>USD</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Includes OWASP Top 10 audit, re-testing within 30 days, encrypted reporting, and executive briefing.
            </p>
            <button onClick={onOpenContact} className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              Submit Official RFP / Scoping Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

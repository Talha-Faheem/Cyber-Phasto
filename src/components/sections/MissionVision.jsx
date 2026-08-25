import React from 'react';
import { ShieldCheck, Target, Lock, Cpu, Globe, Award, Sparkles, BookOpen } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mission" style={{ backgroundColor: '#000000', padding: '4.5rem 0', position: 'relative', borderTop: '1px solid #292929' }}>
      <div className="cyber-grid-overlay" style={{ opacity: 0.35 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '0.85rem', color: '#FFFFFF' }}>
            Why <span className="text-gradient-red">Cyber Pashto?</span>
          </h2>
          <p style={{ color: '#D0D0D0', fontSize: '1.02rem' }}>
            Driving digital resilience and high-impact technology education across Khyber Pakhtunkhwa and Pakistan.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {/* Card 1: Our Mission */}
          <div 
            className="browser-window"
            style={{
              padding: '2.25rem',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#080808',
              border: '1px solid #292929',
              borderRadius: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div 
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 0, 0, 0.12)',
                  border: '1px solid rgba(255, 0, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF1616'
                }}
              >
                <Target size={24} />
              </div>
              <div>
                <span className="mono-text" style={{ fontSize: '0.75rem', color: '#FF1616', letterSpacing: '0.08em' }}>
                  OUR PURPOSE
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>The Mission</h3>
              </div>
            </div>

            <p style={{ color: '#8A8A8A', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              To bridge the technical gap in Pakistan's technology ecosystem by providing affordable, high-caliber 
              practical training in offensive cybersecurity, full-stack software development, and artificial intelligence.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Practical hands-on lab environments from Day 1',
                'Curriculum aligned with modern threat vectors',
                'Accessible tuition subsidized for regional talent',
                'Direct mentorship from seasoned industry researchers'
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.86rem', color: '#D0D0D0' }}>
                  <ShieldCheck size={16} style={{ color: '#FF1616', flexShrink: 0 }} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div 
            className="browser-window"
            style={{
              padding: '2.25rem',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#080808',
              border: '1px solid #292929',
              borderRadius: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div 
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 0, 0, 0.12)',
                  border: '1px solid rgba(255, 0, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF1616'
                }}
              >
                <Globe size={24} />
              </div>
              <div>
                <span className="mono-text" style={{ fontSize: '0.75rem', color: '#FF1616', letterSpacing: '0.08em' }}>
                  THE HORIZON
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>The Vision</h3>
              </div>
            </div>

            <p style={{ color: '#8A8A8A', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              To establish Khyber Pakhtunkhwa as a globally recognized hub for elite offensive security engineers, 
              threat analysts, and technology founders capable of protecting the nation's critical infrastructure.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Producing 100,000+ certified defenders by 2028',
                'Expanding university chapters to all 4 provinces',
                'Fostering female leadership in technical research',
                'Delivering enterprise-grade VAPT to national bodies'
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.86rem', color: '#D0D0D0' }}>
                  <ShieldCheck size={16} style={{ color: '#FF1616', flexShrink: 0 }} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

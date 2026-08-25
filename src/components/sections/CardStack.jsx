import React, { useState } from 'react';
import { ShieldCheck, Clock, Award, PhoneCall, ArrowRight, Sparkles, Check, ExternalLink } from 'lucide-react';

export default function CardStack({ onOpenContact }) {
  const cards = [
    {
      id: 1,
      badge: '// FLAGSHIP COHORT 3.0',
      title: '3.0 Job Ready AI-Powered Cyber Warfare Cohort: Complete Web Security + VAPT + Gen-AI Threat Defense',
      subtitle: 'Build real scalable security tools used by enterprise red-teams, learn AI threat engineering, full stack vulnerability analysis, and cloud defense.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      bgColor: '#FFFFFF',
      textColor: '#0A0B0E',
      subTextColor: '#4B5563',
      badgeBg: 'rgba(229, 9, 20, 0.1)',
      badgeColor: '#E50914',
      badgeBorder: 'rgba(229, 9, 20, 0.25)',
      btnBg: '#050505',
      btnColor: '#FFFFFF',
      priceColor: '#E50914',
      duration: '7 Months',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.8,999',
      originalPrice: 'Rs.17,998 (+GST)',
      href: 'https://cyberpashtopremium.com/'
    },
    {
      id: 2,
      badge: '// DATA & THREAT INTELLIGENCE',
      title: 'Data Science & Threat Analytics with Gen-AI Security Engine',
      subtitle: 'Gain hands-on experience in SOC data analysis, attack visualization, telemetry parsing, and machine learning threat detection models.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      bgColor: '#E50914',
      textColor: '#FFFFFF',
      subTextColor: 'rgba(255, 255, 255, 0.88)',
      badgeBg: 'rgba(0, 0, 0, 0.25)',
      badgeColor: '#FFFFFF',
      badgeBorder: 'rgba(255, 255, 255, 0.3)',
      btnBg: '#050505',
      btnColor: '#FFFFFF',
      priceColor: '#FFFFFF',
      duration: '5+ Months',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.6,999',
      originalPrice: 'Rs.14,891 (+GST)',
      href: 'https://cyberpashtopremium.com/'
    },
    {
      id: 3,
      badge: '// SOC & INCIDENT RESPONSE',
      title: '2.0 Job Ready AI-Powered Cohort: Complete Web Security + SOC Operations + Incident Forensics',
      subtitle: 'Master enterprise SIEM monitoring, active malware containment, network traffic inspection, and 24/7 threat hunting workflows.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      bgColor: '#0A0B0E',
      textColor: '#FFFFFF',
      subTextColor: '#9CA3AF',
      badgeBg: 'rgba(229, 9, 20, 0.15)',
      badgeColor: '#FF1E27',
      badgeBorder: 'rgba(229, 9, 20, 0.35)',
      btnBg: '#E50914',
      btnColor: '#FFFFFF',
      priceColor: '#FF1E27',
      duration: '200+ Hours',
      certified: 'Yes Certified',
      support: '24/7 Mentor Support',
      price: 'Rs.5,999',
      originalPrice: 'Rs.11,998 (+GST)',
      href: 'https://cyberpashtopremium.com/'
    },
    {
      id: 4,
      badge: '// CLOUD & ARCHITECTURE',
      title: '1.0 Enterprise ISO 27001 & Cloud Security Architecture Masterclass',
      subtitle: 'Zero-trust network architecture, multi-cloud IAM compliance, audit readiness, and corporate governance frameworks.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      bgColor: '#16181F',
      textColor: '#FFFFFF',
      subTextColor: '#9CA3AF',
      badgeBg: 'rgba(255, 30, 39, 0.15)',
      badgeColor: '#FF1E27',
      badgeBorder: 'rgba(255, 30, 39, 0.4)',
      btnBg: '#FF1E27',
      btnColor: '#FFFFFF',
      priceColor: '#FF1E27',
      duration: '4 Months',
      certified: 'ISO Accredited',
      support: '1-on-1 Mentorship',
      price: 'Rs.11,999',
      originalPrice: 'Rs.22,000 (+GST)',
      href: 'https://cyberpashtopremium.com/'
    }
  ];

  return (
    <section 
      id="cohorts" 
      className="section-padding" 
      style={{ 
        backgroundColor: '#050505', 
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '8rem'
      }}
    >
      <div className="cyber-grid-overlay" style={{ opacity: 0.4 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
            Not Sure Which Course Fits You? <br />
            <span className="text-gradient-red">We're Here To Help.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.6 }}>
            Scroll down to explore our flagship career-ready cohorts. Experience our interactive stacked card sequence.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div 
          className="stacking-container"
          style={{
            position: 'relative',
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="sticky-stack-card"
              style={{
                position: 'sticky',
                top: `calc(100px + ${index * 28}px)`,
                zIndex: 10 + index,
                backgroundColor: card.bgColor,
                color: card.textColor,
                borderRadius: '24px',
                padding: 'clamp(1.5rem, 4vw, 2.75rem)',
                border: index === 0 ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.5), 0 20px 50px rgba(0, 0, 0, 0.8)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
                transition: 'all 0.3s ease',
                marginBottom: index < cards.length - 1 ? '4rem' : '0'
              }}
            >
              {/* Card Image Left */}
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: '260px',
                  maxHeight: '340px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img 
                  src={card.image} 
                  alt={card.title}
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
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="mono-text" style={{ fontSize: '0.75rem', backgroundColor: 'rgba(5,5,5,0.85)', padding: '0.3rem 0.75rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
                    Cyber Pashto LMS
                  </span>
                  <Sparkles size={18} style={{ color: '#FF1E27' }} />
                </div>
              </div>

              {/* Card Details Right */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div 
                    className="mono-text"
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.85rem',
                      borderRadius: '20px',
                      backgroundColor: card.badgeBg,
                      color: card.badgeColor,
                      border: `1px solid ${card.badgeBorder}`,
                      marginBottom: '1rem'
                    }}
                  >
                    {card.badge}
                  </div>

                  <h3 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                      color: card.textColor,
                      lineHeight: 1.25,
                      marginBottom: '0.85rem'
                    }}
                  >
                    {card.title}
                  </h3>

                  <p 
                    style={{
                      fontSize: '0.95rem',
                      color: card.subTextColor,
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {card.subtitle}
                  </p>

                  {/* Feature Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: card.subTextColor }}>
                      <Clock size={16} style={{ color: card.priceColor }} />
                      <span style={{ fontWeight: 600 }}>{card.duration}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: card.subTextColor }}>
                      <Award size={16} style={{ color: card.priceColor }} />
                      <span style={{ fontWeight: 600 }}>{card.certified}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: card.subTextColor }}>
                      <PhoneCall size={16} style={{ color: card.priceColor }} />
                      <span style={{ fontWeight: 600 }}>{card.support}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: card.subTextColor }}>Price</span>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: card.priceColor }}>{card.price}</span>
                    <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', opacity: 0.6, color: card.subTextColor }}>{card.originalPrice}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <a 
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: card.btnBg,
                        color: card.btnColor,
                        padding: '0.85rem 1.8rem',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        borderRadius: '10px',
                        border: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Check Course</span>
                      <ArrowRight size={16} />
                    </a>

                    <button 
                      onClick={onOpenContact}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: card.textColor,
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        opacity: 0.8
                      }}
                    >
                      Enquire Syllabus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .sticky-stack-card {
          will-change: transform;
        }
        .sticky-stack-card:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}

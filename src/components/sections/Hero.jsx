import React from 'react';
import Counter from '../common/Counter';
import CardSwap, { Card } from '../common/CardSwap';
import { 
  Shield, 
  ArrowRight, 
  GraduationCap
} from 'lucide-react';

export default function Hero({ onOpenContact, onNavigate }) {
  const handleExploreCourses = () => {
    if (onNavigate) {
      onNavigate('courses');
    } else {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Authentic Cyber Pashto events & milestone cards
  const eventCards = [
    {
      id: 1,
      tag: 'NATIONAL KEYNOTE',
      title: 'CyberFest 2025 Summit',
      description: "Pakistan's premier cybersecurity conference uniting 1,200+ researchers in Peshawar.",
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      tag: 'HANDS-ON LABS',
      title: 'Offensive VAPT & Red Teaming',
      description: 'Active exploit analysis, Active Directory domination, and virtual range defense.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      tag: 'WOMEN IN TECH',
      title: 'Women in Cybersecurity',
      description: 'Empowering 850+ female engineers & student chapter leads across Pakistan.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      tag: 'CTF CHAMPIONSHIP',
      title: 'HackProof 24h CTF Arena',
      description: 'High-stakes jeopardy & attack/defense arena testing real-world adversarial tactics.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      tag: '25+ HUBS',
      title: 'Campus Chapters Network',
      description: 'Student-led security hubs across 25+ major Pakistani universities.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section 
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5rem',
        paddingBottom: '2rem',
        backgroundColor: '#000000',
        overflow: 'hidden'
      }}
    >
      {/* Minimal, Very Minimally Visible Black & White Linear Pinstripes Background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              rgba(255, 255, 255, 0.035) 0px,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px,
              transparent 96px
            )
          `,
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      {/* Subtle Vertical Linear Vignette Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #000000 0%, transparent 15%, transparent 85%, #000000 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        
        {/* Two-Column Grid: Minimal Text Left (55%), CardSwap Right (45%) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          
          {/* =================================================================
              LEFT COLUMN: MINIMAL HERO TEXT (WHITE & RED)
              ================================================================= */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            
            {/* Main Headline in White and Solid Red */}
            <h1 
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '0.85rem',
                letterSpacing: '-0.03em',
                color: '#FFFFFF'
              }}
            >
              LEARN. BUILD. <span style={{ color: '#FF0000' }}>DEFEND.</span>
            </h1>

            {/* Minimal Subtitle */}
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                color: '#D0D0D0',
                lineHeight: 1.55,
                marginBottom: '1.75rem',
                maxWidth: '560px'
              }}
            >
              Practical cybersecurity labs, offensive VAPT training, and defense operations across Pakistan.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <button 
                onClick={handleExploreCourses} 
                className="btn btn-red"
                style={{ padding: '0.8rem 1.8rem', fontSize: '0.94rem' }}
              >
                <GraduationCap size={17} />
                <span>Explore Courses</span>
                <ArrowRight size={15} />
              </button>

              <button 
                onClick={onOpenContact} 
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.94rem' }}
              >
                <Shield size={15} style={{ color: '#FF1616' }} />
                <span>Admission Inquiry</span>
              </button>
            </div>

            {/* Compact Metric Strip */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.75rem',
                width: '100%',
                maxWidth: '560px',
                padding: '1rem 0.85rem',
                borderRadius: '12px',
                backgroundColor: '#080808',
                border: '1px solid #292929'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                  <Counter end={50000} suffix="+" duration={1200} />
                </div>
                <span style={{ fontSize: '0.7rem', color: '#8A8A8A', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Learners
                </span>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid #292929' }}>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FF1616', fontFamily: 'var(--font-mono)' }}>
                  <Counter end={25} suffix="+" duration={1000} />
                </div>
                <span style={{ fontSize: '0.7rem', color: '#8A8A8A', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Chapters
                </span>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid #292929' }}>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                  <Counter end={150} suffix="+" duration={1100} />
                </div>
                <span style={{ fontSize: '0.7rem', color: '#8A8A8A', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Audits
                </span>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid #292929' }}>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FF1616', fontFamily: 'var(--font-mono)' }}>
                  <Counter end={25000} suffix="+" duration={1200} />
                </div>
                <span style={{ fontSize: '0.7rem', color: '#8A8A8A', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Certified
                </span>
              </div>
            </div>

          </div>

          {/* =================================================================
              RIGHT COLUMN: CARD SWAP SHOWCASE (EVENTS & LABS)
              ================================================================= */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
              position: 'relative'
            }}
          >
            <div style={{ width: '100%', maxWidth: '460px', height: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CardSwap
                width={430}
                height={320}
                cardDistance={38}
                verticalDistance={30}
                delay={4000}
                pauseOnHover={false}
                skewAmount={4}
                easing="elastic"
              >
                {eventCards.map((card) => (
                  <Card key={card.id}>
                    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      
                      {/* Browser Window Header */}
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.5rem 0.85rem',
                          backgroundColor: '#000000',
                          borderBottom: '1px solid #292929',
                          zIndex: 3
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#FF0000' }} />
                          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                        </div>

                        <span 
                          className="mono-text"
                          style={{
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            color: '#FF1616',
                            backgroundColor: 'rgba(255, 0, 0, 0.12)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 0, 0, 0.3)'
                          }}
                        >
                          {card.tag}
                        </span>
                      </div>

                      {/* Image & Dark Gradient Overlay */}
                      <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
                        <img 
                          src={card.image} 
                          alt={card.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.85) contrast(1.1)'
                          }}
                        />

                        <div 
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 50%, transparent 100%)'
                          }}
                        />

                        {/* Card Information Overlay */}
                        <div 
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '1.15rem 1.25rem',
                            color: '#FFFFFF'
                          }}
                        >
                          <h3 
                            style={{ 
                              fontSize: '1.15rem', 
                              fontWeight: 800, 
                              marginBottom: '0.3rem', 
                              color: '#FFFFFF',
                              fontFamily: 'var(--font-mono)' 
                            }}
                          >
                            {card.title}
                          </h3>
                          <p 
                            style={{ 
                              fontSize: '0.82rem', 
                              color: '#D0D0D0', 
                              lineHeight: 1.45,
                              fontFamily: 'var(--font-sans)' 
                            }}
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>

                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .card-swap-container {
            width: 320px !important;
            height: 260px !important;
          }
          .card-swap-item {
            width: 310px !important;
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}

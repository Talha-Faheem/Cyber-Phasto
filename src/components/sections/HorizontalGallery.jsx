import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

/**
 * HorizontalGallery — Sheryians-inspired Portrait Experience Showcase
 * Replaces the previous horizontal cards with tall portrait cards featuring:
 * 1. Unhovered: Full-color image with top-right diagonal arrow circle (↗)
 * 2. Hovered: Dynamic grayscale photo transition + fiery warm red/orange gradient overlay + top-left pill badge + right arrow (→) + bold headline and subtitle
 */
export default function HorizontalGallery() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScrollDistance = rect.height + windowHeight;
      const currentScroll = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateX = 12 - scrollProgress * 42;

  const items = [
    {
      id: 1,
      badge: 'Featured',
      category: 'Campus Tour',
      title: 'Coming To Your Campus',
      description: 'Hands-on workshops, red-team demonstrations, and keynotes at top universities across Pakistan to help you stay ahead.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
      location: 'UET & FAST Peshawar'
    },
    {
      id: 2,
      badge: 'Meet-ups',
      category: 'Community',
      title: 'Meet And Greet',
      description: 'Open conversations about cybersecurity careers, offensive labs, bug bounty hunting, internships, and the road ahead.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
      location: 'Islamabad Chapter Hub'
    },
    {
      id: 3,
      badge: 'Hackathon',
      category: '24h CTF',
      title: 'HackProof 24h CTF Arena',
      description: 'High-stakes jeopardy & attack/defense arena testing real-world adversarial tactics and penetration testing skills.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
      location: 'National Cyber Range'
    },
    {
      id: 4,
      badge: 'Leadership',
      category: 'Women in Cyber',
      title: 'Women in Cybersecurity',
      description: 'Empowering over 850+ female engineers & chapter leads across Pakistan with funded tools, mentorship, and career paths.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
      location: 'Peshawar & Lahore'
    },
    {
      id: 5,
      badge: 'VAPT Labs',
      category: 'Hands-on Range',
      title: 'Live Exploit & VAPT Defense',
      description: 'Active exploit analysis, Active Directory domination, and corporate threat simulation with real-time feedback.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
      location: 'Cyber Pashto War Room'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      style={{ 
        backgroundColor: '#000000', 
        overflow: 'hidden', 
        position: 'relative', 
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
        borderTop: '1px solid #292929',
        borderBottom: '1px solid #292929'
      }}
    >
      {/* Background Cyber Grid */}
      <div className="cyber-grid-overlay" style={{ opacity: 0.25 }} />

      <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem', position: 'relative', zIndex: 2 }}>
        <h2 
          style={{ 
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', 
            fontWeight: 800,
            marginBottom: '0.85rem', 
            color: '#FFFFFF',
            letterSpacing: '-0.03em'
          }}
        >
          Real Labs. Live Simulations. <span style={{ color: '#FF0000' }}>Zero Fluff.</span>
        </h2>

        <p style={{ color: '#D0D0D0', fontSize: '1.02rem', maxWidth: '720px', margin: '0 auto' }}>
          Scroll down to see our hands-on workshops, live attack simulations, and university chapter events move in motion.
        </p>
      </div>

      {/* Horizontal Moving Track */}
      <div 
        style={{
          width: '100%',
          overflow: 'visible',
          position: 'relative',
          zIndex: 3
        }}
      >
        <div 
          style={{
            display: 'flex',
            gap: '1.75rem',
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.1s linear',
            willChange: 'transform',
            width: 'max-content',
            paddingLeft: '4vw',
            paddingRight: '4vw'
          }}
        >
          {items.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div 
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="sheryians-portrait-card"
                style={{
                  width: '340px',
                  height: '490px',
                  flexShrink: 0,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  border: isHovered ? '1px solid rgba(255, 100, 30, 0.4)' : '1px solid #292929',
                  boxShadow: isHovered 
                    ? '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(224, 78, 28, 0.35)' 
                    : '0 15px 40px rgba(0, 0, 0, 0.75)',
                  transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Background Image: Color when unhovered, Grayscale when hovered */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: isHovered 
                      ? 'grayscale(100%) brightness(0.85) contrast(1.15)' 
                      : 'grayscale(0%) brightness(0.9) contrast(1.02)',
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    transition: 'filter 0.45s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }} 
                />

                {/* Default Subtle Vignette for Unhovered State */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 60%)',
                    opacity: isHovered ? 0 : 1,
                    transition: 'opacity 0.45s ease',
                    pointerEvents: 'none'
                  }}
                />

                {/* Fiery Warm Red / Orange Gradient Bottom Overlay on Hover */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
                      linear-gradient(
                        to top,
                        #D84218 0%,
                        #E04E1C 22%,
                        rgba(224, 78, 28, 0.65) 45%,
                        rgba(200, 50, 20, 0.2) 70%,
                        transparent 100%
                      )
                    `,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: 'none'
                  }}
                />

                {/* =============================================================
                    TOP ROW: BADGE (LEFT) & CIRCULAR ARROW BUTTON (RIGHT)
                    ============================================================= */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 3
                  }}
                >
                  {/* Top-Left Orange Pill Badge */}
                  <div 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      backgroundColor: '#E85A19',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      boxShadow: '0 4px 15px rgba(232, 90, 25, 0.4)',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(-10px)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <Sparkles size={12} fill="#FFFFFF" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Top-Right Black Circular Arrow Button */}
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#000000',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                      marginLeft: 'auto'
                    }}
                  >
                    {isHovered ? (
                      <ArrowRight size={18} strokeWidth={2.4} />
                    ) : (
                      <ArrowUpRight size={18} strokeWidth={2.4} />
                    )}
                  </div>
                </div>

                {/* =============================================================
                    BOTTOM CONTENT: BOLD HEADLINE & SUBTITLE
                    ============================================================= */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.75rem 1.5rem',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'translateY(0)' : 'translateY(15px)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <h3 
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1.2,
                      marginBottom: '0.45rem',
                      fontFamily: 'var(--font-sans)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {item.title}
                  </h3>

                  <p 
                    style={{
                      fontSize: '0.84rem',
                      color: '#FFFFFF',
                      lineHeight: 1.45,
                      fontFamily: 'var(--font-sans)',
                      opacity: 0.95
                    }}
                  >
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

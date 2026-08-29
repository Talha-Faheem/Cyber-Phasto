import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  Award, 
  Star, 
  Sparkles, 
  Check, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

/**
 * CardSwapShowcase — Physical 3D Stacked Featured Course Carousel
 * Color tokens: Deep Black #000000, Near Black #080808, Cyber Red #FF0000, Accent Red #FF1616, Border #292929
 */
export default function CardSwapShowcase({ courses = [], onEnroll }) {
  const featuredList = courses.length > 0 
    ? (courses.filter(c => c.isFeatured).length > 0 ? courses.filter(c => c.isFeatured) : courses.slice(0, 6))
    : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [parallax, setParallax] = useState({ rx: 0, ry: 0 });
  const [touchStart, setTouchStart] = useState(null);

  const containerRef = useRef(null);
  const totalCards = featuredList.length;

  useEffect(() => {
    if (totalCards <= 1 || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4600);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused, totalCards]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % totalCards);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalCards]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalCards]);

  const handleJumpTo = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current || window.innerWidth < 768) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = -(y / (rect.height / 2)) * 2.5;
    const ry = (x / (rect.width / 2)) * 3.5;
    setParallax({ rx, ry });
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setParallax({ rx: 0, ry: 0 });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (totalCards === 0) return null;

  return (
    <div 
      className="cardswap-showcase-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        padding: '1.5rem 0 3rem 0',
        perspective: '1200px',
        userSelect: 'none'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Header Index Indicator */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '850px',
          margin: '0 auto 2.5rem auto',
          padding: '0 1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span 
            className="mono-text" 
            style={{ 
              fontSize: '0.78rem', 
              color: '#FF1616', 
              letterSpacing: '0.12em',
              fontWeight: 800,
              textTransform: 'uppercase'
            }}
          >
            // FEATURED SPOTLIGHT
          </span>
          <span style={{ width: '30px', height: '1px', backgroundColor: '#FF0000' }} />
        </div>

        <div className="mono-text" style={{ fontSize: '0.85rem', color: '#8A8A8A', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: '#FFFFFF' }}>FEATURED_INDEX</span>
          <span style={{ color: '#FF1616', fontWeight: 800, fontSize: '1rem' }}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(totalCards).padStart(2, '0')}</span>
        </div>
      </div>

      {/* 3D Stack Stage Container */}
      <div 
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '680px',
          height: '560px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {featuredList.map((course, idx) => {
          const slot = (idx - activeIndex + totalCards) % totalCards;
          const isCurrentActive = slot === 0;

          let zIndex = totalCards - slot;
          let scale = 1 - slot * 0.055;
          let translateY = slot * 28;
          let translateX = slot * 24;
          let rotateZ = slot * 1.6;
          let opacity = slot > 3 ? 0 : 1 - slot * 0.22;
          let brightness = 1 - slot * 0.15;
          let pointerEvents = isCurrentActive ? 'auto' : 'none';

          let transformString = `
            translate3d(${translateX}px, ${translateY}px, ${-slot * 60}px)
            scale(${scale})
            rotateZ(${rotateZ}deg)
            ${isCurrentActive ? `rotateX(${parallax.rx}deg) rotateY(${parallax.ry}deg)` : ''}
          `;

          return (
            <div
              key={course.id}
              className="cardswap-item"
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '580px',
                height: '540px',
                zIndex: zIndex,
                opacity: opacity,
                transform: transformString,
                transformStyle: 'preserve-3d',
                transition: isAnimating 
                  ? 'all 0.65s cubic-bezier(0.16, 1, 0.3, 1)' 
                  : 'transform 0.15s ease-out, opacity 0.4s ease',
                pointerEvents: pointerEvents,
                filter: `brightness(${brightness})`,
                willChange: 'transform, opacity'
              }}
            >
              {/* Browser-Window Card */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#080808',
                  borderRadius: '22px',
                  border: isCurrentActive ? '1px solid #FF0000' : '1px solid #292929',
                  boxShadow: isCurrentActive 
                    ? '0 25px 60px rgba(0,0,0,0.95), 0 0 35px rgba(255, 0, 0, 0.25)' 
                    : '0 15px 40px rgba(0,0,0,0.7)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* 1. Top Window Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1.4rem',
                    backgroundColor: '#000000',
                    borderBottom: '1px solid #292929'
                  }}
                >

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span 
                      className="mono-text"
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: '#FF1616',
                        backgroundColor: 'rgba(255, 0, 0, 0.12)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 0, 0, 0.3)'
                      }}
                    >
                      {course.badgeText || 'FLAGSHIP'}
                    </span>
                    <span className="mono-text" style={{ fontSize: '0.72rem', color: '#8A8A8A' }}>
                      {course.code}
                    </span>
                  </div>
                </div>

                {/* 2. Course Image & Floating Elements */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    backgroundColor: '#000000',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    loading={slot === 0 ? 'eager' : 'lazy'}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.9) contrast(1.08)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, #080808 0%, rgba(8, 8, 8, 0.3) 55%, transparent 100%)'
                    }}
                  />

                  {/* Floating Tag Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.9rem',
                      left: '0.9rem',
                      right: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      zIndex: 2
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      {course.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.66rem',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '999px',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            border: '1px solid #292929',
                            color: '#FFFFFF',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        border: '1px solid rgba(255, 0, 0, 0.35)',
                        color: '#FF1616',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700
                      }}
                    >
                      <Star size={12} fill="#FF1616" color="#FF1616" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '1.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#FF1616',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {course.category} // {course.level}
                  </div>
                </div>

                {/* 3. Card Information */}
                <div
                  style={{
                    padding: '1.25rem 1.6rem 1.6rem 1.6rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)',
                        fontWeight: 800,
                        lineHeight: 1.25,
                        color: '#FFFFFF',
                        marginBottom: '0.65rem'
                      }}
                    >
                      {course.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        lineHeight: 1.55,
                        color: '#8A8A8A',
                        marginBottom: '1.15rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {course.description}
                    </p>

                    {/* Metadata Strip */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        padding: '0.6rem 0.85rem',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid #292929',
                        marginBottom: '1.25rem',
                        fontSize: '0.8rem',
                        color: '#D0D0D0'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <BookOpen size={14} style={{ color: '#FF1616' }} />
                        <span>{course.lessons} Modules</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={14} style={{ color: '#FF1616' }} />
                        <span>{course.duration}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Award size={14} style={{ color: '#FF1616' }} />
                        <span>Verified Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                        borderTop: '1px solid #292929',
                        paddingTop: '0.85rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.85rem', color: '#8A8A8A', fontFamily: 'var(--font-mono)' }}>Tuition</span>
                        <span style={{ fontSize: '1.65rem', fontWeight: 800, color: '#C99A3A', fontFamily: 'var(--font-mono)' }}>
                          {course.formattedPrice}
                        </span>
                        <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: '#8A8A8A', opacity: 0.7 }}>
                          {course.formattedOriginalPrice}
                        </span>
                      </div>

                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          backgroundColor: '#FF0000',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {course.discount}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <a
                        href={course.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (onEnroll) {
                            e.preventDefault();
                            onEnroll(course);
                          }
                        }}
                        className="btn btn-red"
                        style={{
                          flex: 1,
                          padding: '0.85rem 1.5rem',
                          fontSize: '0.95rem',
                          borderRadius: '12px',
                          justifyContent: 'center',
                          gap: '0.6rem',
                          textDecoration: 'none'
                        }}
                      >
                        <span>Enroll in Cohort</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Controls & Pagination Navigation */}
      <div
        style={{
          maxWidth: '680px',
          margin: '3rem auto 0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          padding: '0 1rem'
        }}
      >
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          aria-label="Previous Course"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: '1px solid #292929',
            borderRadius: '10px',
            padding: '0.65rem 1.25rem',
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
          className="btn-secondary"
        >
          <ArrowLeft size={16} style={{ color: '#FF1616' }} />
          <span>PREVIOUS</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {featuredList.map((_, i) => {
            const isCurr = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => handleJumpTo(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.4rem'
                }}
              >
                <span
                  className="mono-text"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: isCurr ? 800 : 500,
                    color: isCurr ? '#FF1616' : '#8A8A8A',
                    transition: 'color 0.25s ease'
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {isCurr && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '28px',
                      height: '2px',
                      backgroundColor: '#FF0000',
                      boxShadow: '0 0 8px #FF0000',
                      borderRadius: '2px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next Course"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: '1px solid #292929',
            borderRadius: '10px',
            padding: '0.65rem 1.25rem',
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
          className="btn-secondary"
        >
          <span>NEXT</span>
          <ArrowRight size={16} style={{ color: '#FF1616' }} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cardswap-showcase-wrapper {
            perspective: none;
          }
          .cardswap-item {
            max-width: calc(100vw - 32px) !important;
            height: 520px !important;
          }
        }
      `}</style>
    </div>
  );
}

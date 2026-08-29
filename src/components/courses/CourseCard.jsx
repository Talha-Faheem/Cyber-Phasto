import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, BookOpen, Award, Star } from 'lucide-react';

export default function CourseCard({ course, variant = 'grid', onEnroll, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const {
    code = 'COURSE://CYBER/001',
    category = 'Cybersecurity',
    level = 'Intermediate',
    title = 'Cybersecurity Level 2',
    description = 'Build practical skills through guided labs and real-world defensive techniques.',
    formattedPrice = 'Rs. 6,999',
    formattedOriginalPrice = 'Rs. 14,891',
    discount = '53% OFF',
    image = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tags = ['CYBERSECURITY', 'LEVEL 02'],
    lessons = 24,
    duration = '14h 20m',
    rating = 4.9,
    badgeText,
    href = 'https://cyberpashtopremium.com/'
  } = course;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="course-card-glass"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? 'rgba(18, 14, 20, 0.72)' : 'rgba(10, 11, 16, 0.55)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderRadius: '22px',
        border: isHovered 
          ? '1px solid rgba(255, 60, 60, 0.45)' 
          : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: isHovered 
          ? '0 28px 70px rgba(0, 0, 0, 0.95), 0 0 35px rgba(255, 0, 0, 0.22), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 0, 0, 0.08)' 
          : '0 15px 45px rgba(0, 0, 0, 0.75), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        transform: isVisible 
          ? (isHovered ? 'translateY(-8px) scale(1.015)' : 'translateY(0) scale(1)') 
          : 'translateY(40px) scale(0.96)',
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: isHovered
            ? 'linear-gradient(90deg, transparent, rgba(255, 70, 70, 0.6), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
          zIndex: 4,
          pointerEvents: 'none',
          transition: 'background 0.3s ease'
        }} 
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.25rem',
          backgroundColor: 'rgba(5, 5, 8, 0.65)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          zIndex: 3
        }}
      >

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {badgeText && (
            <span 
              className="mono-text" 
              style={{ 
                fontSize: '0.66rem', 
                fontWeight: 700, 
                color: '#FF1616', 
                backgroundColor: 'rgba(255, 0, 0, 0.12)', 
                padding: '0.2rem 0.55rem', 
                borderRadius: '4px',
                border: '1px solid rgba(255, 0, 0, 0.3)' 
              }}
            >
              {badgeText}
            </span>
          )}
          <span
            className="mono-text"
            style={{
              fontSize: '0.72rem',
              color: isHovered ? '#FFFFFF' : '#8A8A8A',
              letterSpacing: '0.05em',
              transition: 'color 0.25s ease'
            }}
          >
            {code}
          </span>
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
          backgroundColor: '#000000'
        }}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: isHovered ? 'brightness(0.95) contrast(1.08)' : 'brightness(0.85) contrast(1.02)'
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(10, 11, 16, 0.92) 0%, rgba(10, 11, 16, 0.25) 50%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            right: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            flexWrap: 'wrap',
            zIndex: 2
          }}
        >
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  padding: '0.28rem 0.65rem',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  backdropFilter: 'blur(10px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
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
              padding: '0.25rem 0.55rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 189, 46, 0.4)',
              color: '#FFBD2E',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700
            }}
          >
            <Star size={12} fill="#FFBD2E" color="#FFBD2E" />
            <span>{rating}</span>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '1.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#FF1616'
          }}
        >
          {category} // {level}
        </div>
      </div>

      <div
        style={{
          padding: '1.35rem 1.4rem 1.5rem 1.4rem',
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
              fontSize: '1.2rem',
              fontWeight: 700,
              lineHeight: 1.3,
              color: '#FFFFFF',
              marginBottom: '0.65rem'
            }}
          >
            {title}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              lineHeight: 1.55,
              color: '#8A8A8A',
              marginBottom: '1.25rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.5rem',
              padding: '0.65rem 0.75rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '1.35rem',
              fontSize: '0.78rem',
              color: '#D0D0D0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <BookOpen size={13} style={{ color: '#FF1616' }} />
              <span>{lessons} Lessons</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={13} style={{ color: '#FF1616' }} />
              <span>{duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Award size={13} style={{ color: '#FF1616' }} />
              <span>Certificate</span>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              paddingTop: '0.85rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#8A8A8A', fontFamily: 'var(--font-mono)' }}>Price</span>
              <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                {formattedPrice}
              </span>
              <span style={{ fontSize: '0.82rem', textDecoration: 'line-through', color: '#8A8A8A', opacity: 0.7 }}>
                {formattedOriginalPrice}
              </span>
            </div>

            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#FFFFFF',
                backgroundColor: '#FF0000',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {discount}
            </span>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onEnroll) {
                e.preventDefault();
                onEnroll(course);
              }
            }}
            className="btn"
            style={{
              width: '100%',
              padding: '0.75rem 1.25rem',
              fontSize: '0.88rem',
              fontWeight: 600,
              borderRadius: '12px',
              backgroundColor: isHovered ? '#FF0000' : 'rgba(255, 255, 255, 0.04)',
              border: isHovered ? '1px solid #FF1616' : '1px solid rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              justifyContent: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isHovered ? '0 8px 25px rgba(255, 0, 0, 0.4)' : 'none'
            }}
          >
            <span>Check Course</span>
            <ArrowRight
              size={15}
              style={{
                transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
                color: '#FFFFFF'
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function JourneyHero({ onOpenQuiz }) {
  return (
    <section style={{ 
      position: 'relative', 
      paddingTop: '130px', 
      paddingBottom: '40px', 
      background: 'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(255, 59, 48, 0.18) 0%, rgba(10, 5, 5, 0) 70%), #0a0505',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.7,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h1 className="roadmap-title">
          Explore Your <span className="gradient-text">Roadmap</span>
        </h1>

        <p className="roadmap-subtitle">
          From zero to professional — see exactly what each level unlocks on your way to becoming job-ready. Do first this course, then the next.
        </p>

        <div style={{ marginTop: '22px' }}>
          <button
            onClick={onOpenQuiz}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#FF0205',
              border: '1px solid #FF0205',
              color: '#ffffff',
              padding: '12px 28px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              transition: 'all 0.25s cubic-bezier(0.19, 1, 0.22, 1)',
              boxShadow: '0 4px 20px rgba(255, 2, 5, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e00003';
              e.currentTarget.style.borderColor = '#e00003';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(255, 2, 5, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FF0205';
              e.currentTarget.style.borderColor = '#FF0205';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 2, 5, 0.4)';
            }}
          >
            Not sure which track? Take 3-Question Quiz →
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function JourneyHero({ onOpenQuiz }) {
  return (
    <section style={{ 
      position: 'relative', 
      paddingTop: '130px', 
      paddingBottom: '40px', 
      background: 'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(220, 20, 30, 0.08) 0%, transparent 70%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>

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
              background: '#ffffff',
              border: '1px solid #ffffff',
              color: '#000000',
              padding: '12px 28px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              transition: 'all 0.25s cubic-bezier(0.19, 1, 0.22, 1)',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f0f0f0';
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.2)';
            }}
          >
            Not sure which track? Take 3-Question Quiz →
          </button>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function CoursesFinalCta({
  onOpenContact,
  searchInputRef
}) {
  return (
    <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '120px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="title" style={{ maxWidth: '850px' }}>
          Your career doesn't start with knowing everything.<br />
          <span className="red">It starts with learning the next thing.</span>
        </h2>
        
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
          <button onClick={onOpenContact} className="btn primary" style={{ padding: '16px 32px', fontSize: '15px' }}>
            Start Your Journey →
          </button>
          <button 
            onClick={() => {
              if (searchInputRef.current) {
                searchInputRef.current.focus();
                searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }} 
            className="btn secondary" 
            style={{ padding: '16px 32px', fontSize: '15px' }}
          >
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
}

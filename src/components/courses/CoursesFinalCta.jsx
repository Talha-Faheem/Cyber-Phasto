import React from 'react';
import { Link } from 'react-router-dom';

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
        
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link 
            to="/roadmap" 
            className="btn primary" 
            style={{ padding: '16px 32px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Explore Learning Roadmaps →
          </Link>
          <button 
            onClick={onOpenContact} 
            className="btn white" 
            style={{ padding: '16px 32px', fontSize: '15px' }}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}

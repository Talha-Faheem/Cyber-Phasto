import React from 'react';
import { Link } from 'react-router-dom';

export default function PathFinderBanner() {
  return (
    <section>
      <div className="container">
        <div className="findMyPathBanner">
          <div>
            <span className="gradient-text font-mono text-[11px] tracking-widest font-bold">
              LEARNING PATH ADVISOR
            </span>
            <h3 style={{ fontSize: '32px', fontWeight: 800, margin: '6px 0 10px', color: '#fff', letterSpacing: '-0.03em' }}>
              Not sure where to start?
            </h3>
            <p style={{ color: '#888', fontSize: '15px', maxWidth: '520px', margin: 0, lineHeight: 1.6 }}>
              Answer 3 quick questions and our interactive advisor will recommend the perfect CyberPashto learning journey for your goals.
            </p>
          </div>

          <Link to="/roadmap" className="findMyPathBtn inline-flex items-center justify-center no-underline">
            Explore Learning Roadmaps →
          </Link>
        </div>
      </div>
    </section>
  );
}

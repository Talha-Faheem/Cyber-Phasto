import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection({ onOpenContact }) {
  return (
    <section className="hero">
      <div className="heroVideoWrapper" aria-hidden="true">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzhleXkwMWd1ZnA4ZXJnd2E1M2JteGpwZ2dsMm1wZXh2MXNkcnZseSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JUXtbHuixcZKeGJEro/giphy.gif"
          alt="Cyber Background Loop" 
          className="heroBackgroundVideo"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "https://i.giphy.com/JUXtbHuixcZKeGJEro.gif";
          }}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.38, 
            filter: 'contrast(125%) brightness(0.85)' 
          }}
        />
        <div className="heroVideoOverlay" />
      </div>

      <div className="heroGrid" />
      <div className="glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '840px' }}>
          <h1>
            Learn tech.<br />
            Build <span>real.</span><br />
            Go further.
          </h1>

          <p className="heroCopy">
            CyberPashto is a technology learning ecosystem helping students and aspiring developers
            build practical skills in software engineering, cybersecurity, artificial intelligence,
            and modern web development.
          </p>

          <div className="heroActions">
            <Link 
              className="btn primary" 
              to="/courses"
            >
              Explore Courses →
            </Link>
            <Link 
              className="btn secondary" 
              to="/roadmap"
            >
              Explore Roadmaps
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

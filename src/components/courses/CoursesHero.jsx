import React from 'react';
import InteractiveCyberBg from '../common/InteractiveCyberBg';

export default function CoursesHero() {
  return (
    <section className="coursesHero">
      <InteractiveCyberBg />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <h1 className="coursesHeroHeading" style={{ pointerEvents: 'auto' }}>
          Level Up Your Skills.<br />
          <span className="gradient-text">Build Your Career.</span>
        </h1>

        <p className="coursesHeroSub" style={{ pointerEvents: 'auto' }}>
          Explore practical courses designed to take you from your first line of code to professional-level skills.
        </p>
      </div>
    </section>
  );
}


import React from 'react';

export default function CoursesHero() {
  return (
    <section className="coursesHero">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="coursesHeroTag">
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF0205', display: 'inline-block' }} />
          CYBERPASHTO / COURSES
        </div>

        <h1 className="coursesHeroHeading">
          Level Up Your Skills.<br />
          <span className="gradient-text">Build Your Career.</span>
        </h1>

        <p className="coursesHeroSub">
          Explore practical courses designed to take you from your first line of code to professional-level skills.
        </p>
      </div>
    </section>
  );
}

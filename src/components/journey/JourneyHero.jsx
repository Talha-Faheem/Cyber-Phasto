import React from 'react';

export default function JourneyHero({ onOpenQuiz }) {
  return (
    <section className="journeyHeroSection" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h1 className="journeyHeroTitle">
          Explore Your <span className="journeyHeroHighlight">Journey</span>
        </h1>

        <p className="journeyHeroSubtitle">
          From zero to professional — see exactly what each level unlocks on your way to becoming job-ready. Do first this course, then the next.
        </p>

        <div style={{ marginTop: '28px', position: 'relative', zIndex: 20 }}>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onOpenQuiz) {
                onOpenQuiz();
              }
            }}
            className="journeyHeroQuizPill"
            style={{ cursor: 'pointer', position: 'relative', zIndex: 30 }}
          >
            Not sure which track? Take 3-Question Quiz →
          </button>
        </div>
      </div>
    </section>
  );
}



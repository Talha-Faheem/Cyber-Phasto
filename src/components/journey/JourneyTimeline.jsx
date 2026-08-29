import React from 'react';
import { BookOpen, ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';

export const getStepPlacement = (index, totalSteps) => {
  if (totalSteps <= 4) {
    const isEven = index % 2 === 0;
    return {
      col: isEven ? 1 : 2,
      row: index + 1,
      direction: index === totalSteps - 1 ? 'down' : isEven ? 'right' : 'left'
    };
  }

  // 6-step layout matching the user path:
  // Step 0: Col 1 (Left) -> turns Right to Course 02
  // Step 1: Col 2 (Right) -> turns Left to Course 03
  // Step 2: Col 1 (Left) -> goes Down to Course 04
  // Step 3: Col 1 (Left) -> turns Right to Course 05
  // Step 4: Col 2 (Right) -> turns Left to Course 06
  // Step 5: Col 1 (Left) -> goes Down to Destination Reached
  const placements = [
    { col: 1, row: 1, direction: 'right' },
    { col: 2, row: 2, direction: 'left' },
    { col: 1, row: 3, direction: 'down' },
    { col: 1, row: 4, direction: 'right' },
    { col: 2, row: 5, direction: 'left' },
    { col: 1, row: 6, direction: 'down' }
  ];

  return placements[index] || {
    col: index % 2 === 0 ? 1 : 2,
    row: index + 1,
    direction: 'down'
  };
};

export default function JourneyTimeline({
  trackRef,
  svgRef,
  pathIdleRef,
  pathGlowRef,
  pathActiveRef,
  stepsContainerRef,
  activePath
}) {
  const totalLevels = activePath.levels.length;

  return (
    <div className="journey-track" id="journeyTrack" ref={trackRef}>
      <svg className="journey-svg" id="journeySvg" ref={svgRef} preserveAspectRatio="none">
        <defs>
          <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <path className="path-idle" id="pathIdle" ref={pathIdleRef} />
        <path className="path-glow" id="pathGlow" ref={pathGlowRef} />
        <path className="path-active" id="pathActive" ref={pathActiveRef} />
      </svg>

      <div className="journey-2d-grid" ref={stepsContainerRef}>
        {activePath.levels.map((step, idx) => {
          const isFirst = idx === 0;
          const placement = getStepPlacement(idx, totalLevels);

          return (
            <div
              key={idx}
              className={`journey-step journey-step-col-${placement.col}`}
              data-step
              data-index={idx}
              data-col={placement.col}
              data-row={placement.row}
              style={{
                gridColumn: placement.col,
                gridRow: placement.row
              }}
            >
              {/* Top Entry Anchor */}
              <div className="step-entry-anchor" />

              {/* Full Original Card Component */}
              <div className="step-card-box">
                <div className="step-card-header">
                  <div className="step-eyebrow">
                    {isFirst ? '🔥 LEVEL 01 — START HERE' : `LEVEL 0${idx + 1} — ${step.phase}`}
                  </div>
                  <span className="step-index-badge">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>

                {step.courses && step.courses.length > 0 && (
                  <div className="step-course-tag">
                    <BookOpen size={13} style={{ color: 'var(--accent)' }} />
                    <span><strong>Course:</strong> {step.courses[0]}</span>
                  </div>
                )}

                {step.skills && step.skills.length > 0 && (
                  <div className="step-skills-wrap">
                    {step.skills.slice(0, 4).map((skill, sIdx) => (
                      <span key={sIdx} className="step-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {step.projects && step.projects.length > 0 && (
                  <div className="step-project-row">
                    <span>🛠 <strong>Build:</strong> {step.projects[0]}</span>
                  </div>
                )}
              </div>

              {/* Bottom Exit Marker & Direction Indicator */}
              <div className="step-marker" data-direction={placement.direction}>
                <div className="step-marker-dot" />
                <div className="step-marker-pulse" />
                {placement.direction === 'right' && (
                  <span className="step-direction-hint hint-right">
                    <span>Next</span> <ArrowRight size={12} />
                  </span>
                )}
                {placement.direction === 'left' && (
                  <span className="step-direction-hint hint-left">
                    <ArrowLeft size={12} /> <span>Next</span>
                  </span>
                )}
                {placement.direction === 'down' && (
                  <span className="step-direction-hint hint-down">
                    <ArrowDown size={12} />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

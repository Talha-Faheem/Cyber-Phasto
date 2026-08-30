import React from 'react';
import { BookOpen, ArrowRight, ArrowDown, ArrowLeft, Sparkles, CheckCircle2, Wrench } from 'lucide-react';

export const getStepPlacement = (index, totalSteps) => {
  // Exact 6-course journey structure matching reference flow:
  // Step 0 (Course 01): Col 1 (Left, Row 1) -> turns Right to Course 02
  // Step 1 (Course 02): Col 2 (Right, Row 1) -> goes straight Down to Course 03
  // Step 2 (Course 03): Col 2 (Right, Row 2) -> turns Left to Course 04
  // Step 3 (Course 04): Col 1 (Left, Row 2) -> goes straight Down to Course 05
  // Step 4 (Course 05): Col 1 (Left, Row 3) -> turns Right to Course 06
  // Step 5 (Course 06): Col 2 (Right, Row 3) -> goes Down to Destination
  const placements = [
    { col: 1, row: 1, direction: 'right', isStaggered: false, label: '01' },
    { col: 2, row: 1, direction: 'down', isStaggered: true, label: '02' },
    { col: 2, row: 2, direction: 'left', isStaggered: false, label: '03' },
    { col: 1, row: 2, direction: 'down', isStaggered: true, label: '04' },
    { col: 1, row: 3, direction: 'right', isStaggered: false, label: '05' },
    { col: 2, row: 3, direction: 'down', isStaggered: true, label: '06' }
  ];

  return placements[index] || {
    col: index % 2 === 0 ? 1 : 2,
    row: Math.floor(index / 2) + 1,
    direction: 'down',
    isStaggered: index % 2 !== 0,
    label: `0${index + 1}`
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
          <filter id="laserGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="7" result="blur" />
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
          const isLast = idx === totalLevels - 1;
          const placement = getStepPlacement(idx, totalLevels);
          const nextIndex = idx + 2 <= totalLevels ? `0${idx + 2}` : 'END';

          return (
            <div
              key={idx}
              className={`journey-step journey-step-col-${placement.col} ${
                placement.isStaggered ? 'journey-step-staggered' : ''
              }`}
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

              {/* Substantial, High-Quality Course Card */}
              <div className="step-card-box">
                {/* Header with Level Label & Index Badge */}
                <div className="step-card-header">
                  <div className="step-eyebrow">
                    {isFirst ? '🔥 LEVEL 01 — START HERE' : `LEVEL 0${idx + 1} — ${step.phase || 'CORE TRACK'}`}
                  </div>
                  <span className="step-index-badge">
                    0{idx + 1}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="step-title">{step.title}</h3>

                {/* Course Description */}
                <p className="step-desc">{step.desc}</p>

                {/* Primary Recommended Course */}
                {step.courses && step.courses.length > 0 && (
                  <div className="step-course-tag">
                    <BookOpen size={13} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span className="truncate"><strong>Course:</strong> {step.courses[0]}</span>
                  </div>
                )}

                {/* Topics & Technologies Skills Pills */}
                {step.skills && step.skills.length > 0 && (
                  <div className="step-skills-wrap">
                    {step.skills.slice(0, 4).map((skill, sIdx) => (
                      <span key={sIdx} className="step-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Hands-on Project / Build Section */}
                {step.projects && step.projects.length > 0 && (
                  <div className="step-project-row">
                    <Wrench size={13} style={{ color: '#ff8a80', flexShrink: 0 }} />
                    <span className="truncate"><strong>Build:</strong> {step.projects[0]}</span>
                  </div>
                )}
              </div>

              {/* Bottom Exit Marker & Direction Indicator */}
              <div className="step-marker" data-direction={placement.direction}>
                <div className="step-marker-dot" />
                <div className="step-marker-pulse" />
                
                {placement.direction === 'right' && (
                  <span className="step-direction-hint hint-right">
                    <span>Course {nextIndex}</span> <ArrowRight size={12} />
                  </span>
                )}
                {placement.direction === 'left' && (
                  <span className="step-direction-hint hint-left">
                    <ArrowLeft size={12} /> <span>Course {nextIndex}</span>
                  </span>
                )}
                {placement.direction === 'down' && (
                  <span className="step-direction-hint hint-down">
                    {isLast ? <span>Destination</span> : <span>Course {nextIndex}</span>} <ArrowDown size={12} />
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

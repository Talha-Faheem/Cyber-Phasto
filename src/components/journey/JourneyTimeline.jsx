import React from 'react';
import { BookOpen } from 'lucide-react';

export default function JourneyTimeline({
  trackRef,
  svgRef,
  pathIdleRef,
  pathGlowRef,
  pathActiveRef,
  stepsContainerRef,
  activePath
}) {
  return (
    <div className="journey-track" id="journeyTrack" ref={trackRef}>
      <svg className="journey-svg" id="journeySvg" ref={svgRef} preserveAspectRatio="none">
        <path className="path-idle" id="pathIdle" ref={pathIdleRef} />
        <path className="path-glow" id="pathGlow" ref={pathGlowRef} />
        <path className="path-active" id="pathActive" ref={pathActiveRef} />
      </svg>

      <div ref={stepsContainerRef}>
        {activePath.levels.map((step, idx) => {
          const isFirst = idx === 0;

          return (
            <div key={idx} className="journey-step" data-step>
              <div className="step-marker" />

              <div className="step-content">
                <div className="step-card-box">
                  <div className="step-eyebrow">
                    {isFirst ? '🔥 LEVEL 01 — START HERE' : `LEVEL 0${idx + 1} — ${step.phase}`}
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

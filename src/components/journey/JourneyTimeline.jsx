import React from 'react';

const bookIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--red-bright)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const buildIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

export default function JourneyTimeline({
  trackRef,
  svgRef,
  pathBaseRef,
  pathGlowRef,
  pathActiveRef,
  leadDotRef,
  startDotRef,
  endDotRef,
  courseNodeRefs,
  destinationCardRef,
  activePath,
  onOpenContact
}) {
  const levels = activePath?.levels || [];
  const finalRole = activePath?.finalRole || 'Full Stack Software Engineer';

  return (
    <div className="roadmap" id="roadmap" ref={trackRef}>
      {/* SVG Compact Continuous Wave Spine */}
      <svg className="path-svg" id="pathSvg" ref={svgRef}>
        <path className="spine-base" id="spineBase" ref={pathBaseRef}></path>
        <path className="spine-glow" id="spineGlow" ref={pathGlowRef}></path>
        <path className="spine-draw" id="spineDraw" ref={pathActiveRef}></path>
      </svg>

      {/* Leading Edge Traveler Dot Indicator */}
      <div className="traveler-dot" id="travelerDot" ref={leadDotRef}>
        <div className="traveler-pulse-ring" />
      </div>

      {/* Start Milestone Node (index 0 - Top Center) */}
      <div className="node-dot node-current pulse" id="startNode" ref={startDotRef}>
        <span className="node-inner-dot" />
      </div>

      {/* Course Milestone Nodes directly touching card borders */}
      {levels.map((_, idx) => (
        <div
          key={`node-${idx}`}
          className="node-dot node-upcoming"
          id={`node-${idx + 1}`}
          ref={el => {
            if (courseNodeRefs && courseNodeRefs.current) {
              courseNodeRefs.current[idx] = el;
            }
          }}
        >
          <span className="node-inner-dot" />
        </div>
      ))}

      {/* Alternating Course Level Rows */}
      <div id="levels">
        {levels.map((lvl, idx) => {
          // Strictly alternate: Course 1 (idx 0) -> LEFT, Course 2 (idx 1) -> RIGHT, etc.
          const isLeft = idx % 2 === 0;
          const levelNum = `0${idx + 1}`;
          const isFirst = idx === 0;
          const kicker = isFirst
            ? `Course ${levelNum} — Start here`
            : `Course ${levelNum} — ${lvl.phase || 'Foundations'}`;

          const primaryCourse = lvl.courses && lvl.courses.length > 0 
            ? lvl.courses[0] 
            : `${activePath.title} Module`;
          
          const primaryProject = lvl.projects && lvl.projects.length > 0 
            ? lvl.projects[0] 
            : `${lvl.title} Practical Build`;

          return (
            <div
              key={idx}
              className={`level-row side-${isLeft ? 'left' : 'right'}`}
              data-step
              data-index={idx}
            >
              <div className="level-card card-upcoming" id={`card-${idx + 1}`}>
                <div className="level-card-glow" />
                <div className="level-head">
                  <span className="level-kicker">{kicker}</span>
                  <span className="level-num">{levelNum}</span>
                </div>
                <h3 className="level-title">{lvl.title}</h3>
                <p className="level-desc">{lvl.desc}</p>
                
                <div className="level-course">
                  {bookIcon}
                  <span>Course: <b>{primaryCourse}</b></span>
                </div>

                {lvl.skills && lvl.skills.length > 0 && (
                  <div className="tag-row">
                    {lvl.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="tag">{skill}</span>
                    ))}
                  </div>
                )}

                <div className="level-build">
                  {buildIcon}
                  <span>Build: <b>{primaryProject}</b></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Destination Milestone Section */}
      <div className="destination-row">
        <div className="node-dot end-node node-upcoming" id="endNode" ref={endDotRef}>
          <span className="node-inner-dot" />
        </div>
        <div 
          className="destination-card card-upcoming" 
          id="destinationCard" 
          ref={destinationCardRef}
        >
          <div className="destination-badge">GOAL REACHED</div>
          <h2>Destination reached</h2>
          <p>
            Complete all {levels.length} courses sequentially to go from foundational concepts to a battle-tested, portfolio-backed <b>{finalRole}</b> career skillset.
          </p>
          <button 
            type="button" 
            className="cta" 
            onClick={() => onOpenContact && onOpenContact()}
          >
            <span>Start your journey</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer>END OF ROADMAP</footer>
    </div>
  );
}




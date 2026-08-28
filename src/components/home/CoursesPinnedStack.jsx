import React from 'react';
import { Link } from 'react-router-dom';

export default function CoursesPinnedStack({
  coursesSectionRef,
  card1Ref,
  card2Ref,
  card3Ref,
  card4Ref,
  handleAction,
  onNavigate
}) {
  return (
    <section className="coursesPinnedSection" id="courses" ref={coursesSectionRef}>
      <div className="container" style={{ width: '100%' }}>
        <h2 className="title">
          Choose your path.<br />
          Then <span className="red">build.</span>
        </h2>
        <p className="sub">
          Scroll through the courses. Each card pins, stacks and transforms as you move through the section.
        </p>

        <div className="courseStackStage">
          <article className="courseStackCard one" ref={card1Ref}>
            <div>
              <div className="mono red">COURSE 01 / 04</div>
              <h3>Full Stack Web Development</h3>
              <p>
                Go from frontend fundamentals to production-ready full-stack applications with modern
                JavaScript, APIs, databases and deployment.
              </p>
              <div className="courseMetaPills">
                <span>6 Months</span>
                <span>Certificate</span>
                <span>Projects</span>
                <span>Mentor Support</span>
              </div>
              <div className="coursePriceRow">
                Rs. 8,999 <s>Rs. 17,998</s>
              </div>
              <button 
                onClick={(e) => handleAction('admission', e)} 
                className="courseActionBtn"
              >
                Check Course →
              </button>
            </div>
            <div className="courseVisualBox">
              <label>BUILD / SHIP / SCALE</label>
              <div className="courseVisualBoxCenter">
                <svg viewBox="0 0 48 48">
                  <rect x="6" y="8" width="36" height="30" rx="4" />
                  <line x1="6" y1="17" x2="42" y2="17" />
                  <circle cx="11.5" cy="12.5" r="1.4" fill="currentColor" stroke="none" />
                  <circle cx="15.5" cy="12.5" r="1.4" fill="currentColor" stroke="none" />
                  <circle cx="19.5" cy="12.5" r="1.4" fill="currentColor" stroke="none" />
                  <rect x="12" y="23" width="24" height="3" rx="1.2" />
                  <rect x="12" y="30" width="15" height="3" rx="1.2" />
                </svg>
              </div>
            </div>
          </article>

          <article className="courseStackCard two" ref={card2Ref}>
            <div>
              <div className="mono" style={{ color: 'rgba(255,255,255,0.85)' }}>COURSE 02 / 04</div>
              <h3>Cybersecurity Fundamentals</h3>
              <p>
                Learn networking, security concepts, common vulnerabilities, threat awareness and responsible
                security practices.
              </p>
              <div className="courseMetaPills">
                <span>5 Months</span>
                <span>Certificate</span>
                <span>Labs</span>
                <span>Projects</span>
              </div>
              <div className="coursePriceRow">
                Rs. 6,999 <s>Rs. 12,999</s>
              </div>
              <button 
                onClick={(e) => handleAction('admission', e)} 
                className="courseActionBtn"
              >
                Check Course →
              </button>
            </div>
            <div className="courseVisualBox">
              <label style={{ color: '#ccc' }}>DEFEND / ANALYZE / SECURE</label>
              <div className="courseVisualBoxCenter">
                <svg viewBox="0 0 48 48">
                  <path d="M24 6 L40 12 V22 C40 32 33 39 24 42 C15 39 8 32 8 22 V12 Z" />
                  <circle cx="24" cy="21" r="3.2" />
                  <rect x="22.6" y="23.5" width="2.8" height="6" rx="1" />
                </svg>
              </div>
            </div>
          </article>

          <article className="courseStackCard three" ref={card3Ref}>
            <div>
              <div className="mono red">COURSE 03 / 04</div>
              <h3>AI & GenAI Engineering</h3>
              <p>
                Build useful AI-powered applications using modern models, APIs, automation and practical
                GenAI workflows.
              </p>
              <div className="courseMetaPills">
                <span>4 Months</span>
                <span>Certificate</span>
                <span>AI Projects</span>
                <span>GenAI</span>
              </div>
              <div className="coursePriceRow">
                Rs. 7,999 <s>Rs. 14,999</s>
              </div>
              <button 
                onClick={(e) => handleAction('admission', e)} 
                className="courseActionBtn"
              >
                Check Course →
              </button>
            </div>
            <div className="courseVisualBox">
              <label>MODELS / AGENTS / PRODUCTS</label>
              <div className="courseVisualBoxCenter">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="13" r="4.2" />
                  <circle cx="13" cy="33" r="4.2" />
                  <circle cx="35" cy="33" r="4.2" />
                  <line x1="21.4" y1="16.6" x2="15.6" y2="29.4" />
                  <line x1="26.6" y1="16.6" x2="32.4" y2="29.4" />
                  <line x1="17.2" y1="33" x2="30.8" y2="33" />
                </svg>
              </div>
            </div>
          </article>

          <article className="courseStackCard four" ref={card4Ref}>
            <div>
              <div className="mono red">COURSE 04 / 04</div>
              <h3>Programming & Software Engineering</h3>
              <p>
                Strengthen programming fundamentals, problem solving, data structures, algorithms and software
                engineering thinking.
              </p>
              <div className="courseMetaPills">
                <span>4 Months</span>
                <span>Certificate</span>
                <span>DSA</span>
                <span>OOP</span>
              </div>
              <div className="coursePriceRow">
                Rs. 5,999 <s>Rs. 11,999</s>
              </div>
              <button 
                onClick={(e) => handleAction('admission', e)} 
                className="courseActionBtn"
              >
                Check Course →
              </button>
            </div>
            <div className="courseVisualBox">
              <label>CODE / THINK / ENGINEER</label>
              <div className="courseVisualBoxCenter">
                <svg viewBox="0 0 48 48">
                  <path d="M18 14 L8 24 L18 34" />
                  <path d="M30 14 L40 24 L30 34" />
                  <line x1="27" y1="11" x2="21" y2="37" />
                </svg>
              </div>
            </div>
          </article>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '4px' }}>
          <Link 
            to="/courses" 
            className="btn primary"
            style={{ padding: '13px 30px', fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Explore All Courses (24+ Tracks) →
          </Link>
        </div>
      </div>
    </section>
  );
}

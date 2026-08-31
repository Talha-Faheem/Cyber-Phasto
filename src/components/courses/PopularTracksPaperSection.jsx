import React from 'react';
import { ArrowRight } from 'lucide-react';
import { coursesData } from '../../data/coursesData';

export default function PopularTracksPaperSection({ onSelectCourse }) {
  return (
    <section 
      className="popularTracksPaperSection"
      style={{
        background: 'var(--paper)',
        color: 'var(--ink)',
        borderRadius: '34px',
        padding: '95px 0 105px',
        margin: '50px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <h2 className="title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--ink)' }}>
          Popular &amp; High-Demand Tracks
        </h2>
        <p className="sub" style={{ marginBottom: '45px', color: '#555555' }}>
          Fast-track programs with high industry hiring rates and active community cohorts.
        </p>

        <div className="courseDiscoveryGrid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {coursesData.filter(c => c.popular).slice(0, 3).map((course) => (
            <div 
              key={course.id} 
              className="cyberCourseCard paperThemeCard"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e2e2',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className="cardBrowserBar" style={{ background: '#f5f5f5', borderBottom: '1px solid #ebebeb' }}>
                <span className="cardCodeTag" style={{ color: 'var(--muted)' }}>{course.code}</span>
              </div>

              <div className="cardImageContainer">
                <img src={course.image} alt={course.title} loading="lazy" />
                <div className="cardImageOverlay" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)' }} />
                <span className="cardDiscountBadge">{course.discount}</span>
                <span className="cardLearningTypeBadge">{course.learningType}</span>
              </div>

              <div className="cardBody">
                <div className="cardTagsList">
                  {course.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="cardTagPill"
                      style={{
                        background: '#f2f2f2',
                        border: '1px solid #e2e2e2',
                        color: '#555'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="cardTitle" style={{ color: 'var(--ink)' }}>{course.title}</h3>
                <p className="cardDescription" style={{ color: '#555555' }}>{course.description}</p>
              </div>

              <div className="cardFooter" style={{ background: '#fafafa', borderTop: '1px solid #eee' }}>
                <div className="cardPriceGroup">
                  <span className="cardPriceCurrent" style={{ color: 'var(--ink)' }}>{course.formattedPrice}</span>
                  <span className="cardPriceOriginal" style={{ color: 'var(--muted)' }}>{course.formattedOriginalPrice}</span>
                </div>
                <button 
                  onClick={() => onSelectCourse(course)} 
                  className="cardCheckBtn"
                  style={{
                    background: 'var(--ink)',
                    color: '#ffffff'
                  }}
                >
                  Check Course <ArrowRight size={13} className="cardCheckBtnArrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

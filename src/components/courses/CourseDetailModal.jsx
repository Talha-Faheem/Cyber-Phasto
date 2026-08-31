import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function CourseDetailModal({
  selectedCourseDetail,
  onClose,
  onOpenContact
}) {
  if (!selectedCourseDetail) return null;

  return (
    <div className="courseDetailModalOverlay" onClick={onClose}>
      <div className="courseDetailModalBox" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          className="quizCloseBtn"
          title="Close modal"
        >
          <X size={16} />
        </button>

        <div style={{ marginBottom: '24px' }}>
          <div className="coursesHeroTag" style={{ marginBottom: '10px' }}>
            {selectedCourseDetail.category} • {selectedCourseDetail.code}
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.03em' }}>
            {selectedCourseDetail.title}
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
            {selectedCourseDetail.overview}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '28px' }}>
          <div style={{ background: 'var(--ink)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <div className="mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>DURATION</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginTop: '4px' }}>{selectedCourseDetail.duration}</div>
          </div>
          <div style={{ background: 'var(--ink)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <div className="mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>LEVEL</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginTop: '4px' }}>{selectedCourseDetail.level}</div>
          </div>
          <div style={{ background: 'var(--ink)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <div className="mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>LESSONS</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginTop: '4px' }}>{selectedCourseDetail.lessons} Modules</div>
          </div>
          <div style={{ background: 'var(--ink)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <div className="mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>CERTIFICATE</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#22c55e', marginTop: '4px' }}>Verified</div>
          </div>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
            What you'll master in this program:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {selectedCourseDetail.whatYouLearn.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--paper)', fontSize: '14px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--red)', flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
            Syllabus &amp; Curriculum Breakdown:
          </h4>
          {selectedCourseDetail.curriculum.map((mod, idx) => (
            <div key={idx} className="curriculumAccordionItem">
              <div>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--red-bright)', marginRight: '8px' }}>
                  {mod.module}
                </span>
                <strong style={{ color: 'var(--paper)', fontSize: '13px' }}>{mod.title}</strong>
              </div>
              <span className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>{mod.lessons}</span>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
            Real-World Capstone Projects:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {selectedCourseDetail.projects.map((p, idx) => (
              <span key={idx} className="skillPill" style={{ background: 'var(--ink)', color: 'var(--red-bright)', borderColor: 'var(--red-border)' }}>
                🛠 {p}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#fff' }}>
              {selectedCourseDetail.formattedPrice}
              <span className="mono" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'line-through', marginLeft: '8px' }}>
                {selectedCourseDetail.formattedOriginalPrice}
              </span>
            </div>
            <div className="mono" style={{ fontSize: '11px', color: 'var(--red-bright)' }}>
              {selectedCourseDetail.discount} • Lifetime Access &amp; Mentorship
            </div>
          </div>

          <button 
            onClick={() => {
              onClose();
              onOpenContact();
            }} 
            className="btn primary" 
            style={{ padding: '14px 28px', fontSize: '14px' }}
          >
            Enroll in Course →
          </button>
        </div>
      </div>
    </div>
  );
}

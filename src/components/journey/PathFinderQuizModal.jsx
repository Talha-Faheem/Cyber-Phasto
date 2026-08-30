import React, { useEffect } from 'react';
import { X, ChevronRight, Sparkles, Code, ShieldCheck, Brain, Database, Cpu, Cloud } from 'lucide-react';

export default function PathFinderQuizModal({
  isOpen,
  onClose,
  quizStep,
  handleQuizAnswer,
  quizResult,
  applyQuizRecommendation,
  resetQuiz
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="quizModalOverlay" onClick={onClose}>
      <div className="quizModalContent" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          onClick={onClose} 
          className="quizCloseBtn" 
          aria-label="Close quiz"
        >
          <X size={18} />
        </button>

        {quizStep < 4 && (
          <div className="mono" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '8px', fontWeight: 700 }}>
            QUESTION 0{quizStep} OF 03
          </div>
        )}

        {quizStep === 1 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              What is your current coding background?
            </h3>
            <p style={{ color: '#888', fontSize: '13.5px', marginBottom: '20px' }}>
              We'll calibrate where your roadmap milestone starts.
            </p>

            <div className="quizOptionCard" onClick={() => handleQuizAnswer('level', 'beginner')} role="button" tabIndex={0}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '15px', marginBottom: '3px' }}>Complete Beginner (Level 00)</strong>
                <span style={{ fontSize: '12px', color: '#888' }}>Zero prior coding or cybersecurity experience</span>
              </div>
              <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
            </div>

            <div className="quizOptionCard" onClick={() => handleQuizAnswer('level', 'intermediate')} role="button" tabIndex={0}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '15px', marginBottom: '3px' }}>Some Basic Coding Knowledge</strong>
                <span style={{ fontSize: '12px', color: '#888' }}>Know HTML/CSS/Python basics or enrolled in a CS degree</span>
              </div>
              <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
            </div>

            <div className="quizOptionCard" onClick={() => handleQuizAnswer('level', 'advanced')} role="button" tabIndex={0}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '15px', marginBottom: '3px' }}>Working Developer / Career Switcher</strong>
                <span style={{ fontSize: '12px', color: '#888' }}>Looking to switch to AI, Offensive Security, or High-Ticket Freelance</span>
              </div>
              <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
            </div>
          </div>
        )}

        {quizStep === 2 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Which technology domain excites you most?
            </h3>
            <p style={{ color: '#888', fontSize: '13.5px', marginBottom: '18px' }}>
              Select the domain you want to master.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', maxHeight: '340px', overflowY: 'auto', paddingRight: '4px' }}>
              <div className="quizOptionCard" onClick={() => handleQuizAnswer('interest', 'web')} role="button" tabIndex={0}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Code size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '14.5px', marginBottom: '2px' }}>Web &amp; Full Stack Development</strong>
                    <span style={{ fontSize: '11.5px', color: '#888' }}>React, Node.js, Next.js &amp; APIs</span>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
              </div>

              <div className="quizOptionCard" onClick={() => handleQuizAnswer('interest', 'cyber')} role="button" tabIndex={0}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '14.5px', marginBottom: '2px' }}>Cybersecurity &amp; Ethical Hacking</strong>
                    <span style={{ fontSize: '11.5px', color: '#888' }}>Penetration testing, Kali Linux &amp; SOC defense</span>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
              </div>

              <div className="quizOptionCard" onClick={() => handleQuizAnswer('interest', 'ai')} role="button" tabIndex={0}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Brain size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '14.5px', marginBottom: '2px' }}>Artificial Intelligence &amp; GenAI</strong>
                    <span style={{ fontSize: '11.5px', color: '#888' }}>LLMs, RAG, PyTorch &amp; AI Agents</span>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
              </div>

              <div className="quizOptionCard" onClick={() => handleQuizAnswer('interest', 'data')} role="button" tabIndex={0}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Database size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '14.5px', marginBottom: '2px' }}>Data Science &amp; Big Data</strong>
                    <span style={{ fontSize: '11.5px', color: '#888' }}>Pandas, SQL, Machine Learning &amp; Pipelines</span>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
              </div>

              <div className="quizOptionCard" onClick={() => handleQuizAnswer('interest', 'swe')} role="button" tabIndex={0}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Cpu size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '14.5px', marginBottom: '2px' }}>Software Engineering &amp; DSA</strong>
                    <span style={{ fontSize: '11.5px', color: '#888' }}>C++, DSA, System Design &amp; Architecture</span>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
              </div>

              <div className="quizOptionCard" onClick={() => handleQuizAnswer('interest', 'cloud')} role="button" tabIndex={0}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Cloud size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '14.5px', marginBottom: '2px' }}>Cloud Computing &amp; DevOps</strong>
                    <span style={{ fontSize: '11.5px', color: '#888' }}>AWS, Docker, Kubernetes &amp; CI/CD</span>
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
              </div>
            </div>
          </div>
        )}

        {quizStep === 3 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              What is your primary career goal?
            </h3>
            <p style={{ color: '#888', fontSize: '13.5px', marginBottom: '20px' }}>
              What outcome are you working toward?
            </p>

            <div className="quizOptionCard" onClick={() => handleQuizAnswer('goal', 'freelance')} role="button" tabIndex={0}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '15px', marginBottom: '3px' }}>Global Freelancing (USD / Remote)</strong>
                <span style={{ fontSize: '12px', color: '#888' }}>Upwork, direct international clients &amp; flexible hours</span>
              </div>
              <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
            </div>

            <div className="quizOptionCard" onClick={() => handleQuizAnswer('goal', 'job')} role="button" tabIndex={0}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '15px', marginBottom: '3px' }}>High-Paying Engineering Job</strong>
                <span style={{ fontSize: '12px', color: '#888' }}>Join tech companies, software houses, or enterprise SOC</span>
              </div>
              <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
            </div>

            <div className="quizOptionCard" onClick={() => handleQuizAnswer('goal', 'startup')} role="button" tabIndex={0}>
              <div>
                <strong style={{ color: '#fff', display: 'block', fontSize: '15px', marginBottom: '3px' }}>Build My Own Startup / Products</strong>
                <span style={{ fontSize: '12px', color: '#888' }}>Engineer and launch commercial digital platforms</span>
              </div>
              <ChevronRight size={18} style={{ color: '#666', flexShrink: 0 }} />
            </div>
          </div>
        )}

        {quizStep === 4 && quizResult && (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255, 59, 48, 0.15)', border: '1px solid rgba(255, 59, 48, 0.4)', display: 'grid', placeItems: 'center', margin: '0 auto 16px', color: 'var(--accent)' }}>
              <Sparkles size={26} />
            </div>

            <div className="mono" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.15em', marginBottom: '6px', fontWeight: 700 }}>
              RECOMMENDED LEARNING ROADMAP
            </div>

            <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
              {quizResult.title}
            </h3>

            <p style={{ color: '#999', fontSize: '14px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              Target Role: <strong style={{ color: '#fff' }}>{quizResult.finalRole}</strong> • Estimated Duration: <strong style={{ color: '#fff' }}>{quizResult.duration}</strong>
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button"
                onClick={applyQuizRecommendation} 
                className="destination-cta"
              >
                Open Recommended Track →
              </button>
              <button 
                type="button"
                onClick={resetQuiz} 
                style={{
                  background: '#150a0a',
                  border: '1px solid #333',
                  color: '#fff',
                  padding: '14px 24px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

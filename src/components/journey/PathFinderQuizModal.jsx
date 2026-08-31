import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  ChevronRight, 
  ArrowLeft, 
  Award, 
  Code, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Terminal, 
  Cloud, 
  CheckCircle2,
  Clock,
  Briefcase
} from 'lucide-react';
import { careerPathsData } from '../../data/coursesData';

export default function PathFinderQuizModal({
  isOpen,
  onClose,
  onSelectPath
}) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    level: '',
    interest: '',
    goal: ''
  });
  const [result, setResult] = useState(null);

  // Reset quiz state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setAnswers({ level: '', interest: '', goal: '' });
      setResult(null);
    }
  }, [isOpen]);

  // Handle ESC key and body scroll lock
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
  if (typeof document === 'undefined') return null;

  const handleSelectAnswer = (field, value) => {
    const updatedAnswers = { ...answers, [field]: value };
    setAnswers(updatedAnswers);

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // Calculate matched path based on answers
      let matched = careerPathsData[0];
      const interest = updatedAnswers.interest || value;
      
      if (interest === 'cyber') {
        matched = careerPathsData.find(p => p.id === 'cybersecurity') || careerPathsData[1];
      } else if (interest === 'ai') {
        matched = careerPathsData.find(p => p.id === 'artificial-intelligence' || p.id === 'ai-ml') || careerPathsData[2];
      } else if (interest === 'data') {
        matched = careerPathsData.find(p => p.id === 'data-science') || careerPathsData[3];
      } else if (interest === 'swe') {
        matched = careerPathsData.find(p => p.id === 'software-engineering') || careerPathsData[4];
      } else if (interest === 'cloud') {
        matched = careerPathsData.find(p => p.id === 'cloud-devops') || careerPathsData[5];
      } else {
        matched = careerPathsData.find(p => p.id === 'web-development') || careerPathsData[0];
      }

      setResult(matched);
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleRetake = () => {
    setStep(1);
    setAnswers({ level: '', interest: '', goal: '' });
    setResult(null);
  };

  const handleApply = () => {
    if (result && result.id) {
      if (onSelectPath) {
        onSelectPath(result.id);
      }
    }
    onClose();
  };

  const getStartingLevelText = () => {
    if (answers.level === 'advanced') return 'Level 02 — Advanced Specialization';
    if (answers.level === 'intermediate') return 'Level 01 — Core Practical Labs';
    return 'Level 00 — Foundations & Fundamentals';
  };

  const progressPercent = step === 1 ? 33 : step === 2 ? 66 : 100;

  return createPortal(
    <div 
      className="quizModalOverlay" 
      onClick={onClose} 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        margin: 0,
        boxSizing: 'border-box'
      }}
    >
      <div 
        className="quizModalContent" 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#0d0d0d',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: '20px',
          maxWidth: '580px',
          width: '100%',
          padding: '32px 28px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
          color: '#ffffff',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxSizing: 'border-box'
        }}
      >
        
        {/* Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          {step > 1 && step < 4 ? (
            <button
              type="button"
              onClick={handleBack}
              style={{
                background: 'none',
                border: 'none',
                color: '#9CA3AF',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                cursor: 'pointer',
                padding: '4px 0'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          ) : (
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--red-bright)', letterSpacing: '0.12em', fontWeight: 700 }}>
              {step === 4 ? 'RECOMMENDATION' : `QUESTION 0${step} OF 03`}
            </span>
          )}

          <button 
            type="button" 
            onClick={onClose} 
            className="quizCloseBtn" 
            aria-label="Close quiz"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#9CA3AF',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div style={{ width: '100%', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '999px', marginBottom: '22px', overflow: 'hidden' }}>
            <div 
              style={{ 
                height: '100%', 
                width: `${progressPercent}%`, 
                backgroundColor: 'var(--red)', 
                transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                borderRadius: '999px'
              }} 
            />
          </div>
        )}

        {/* Step 1: Current Coding Background */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1.25 }}>
              What is your current coding background?
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '13.5px', marginBottom: '20px', lineHeight: 1.5 }}>
              We'll calibrate where your roadmap milestone should start.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'beginner', title: 'Complete Beginner (Level 00)', desc: 'Zero prior coding or cybersecurity experience' },
                { id: 'intermediate', title: 'Some Basic Knowledge (Level 01)', desc: 'Know basic HTML/CSS/Python or enrolled in a CS program' },
                { id: 'advanced', title: 'Working Developer / Career Switcher', desc: 'Looking to transition to AI, Offensive Security, or High-Income Freelance' }
              ].map((opt) => (
                <div 
                  key={opt.id}
                  className="quizOptionCard"
                  onClick={() => handleSelectAnswer('level', opt.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectAnswer('level', opt.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '14.5px', marginBottom: '3px' }}>
                      {opt.title}
                    </strong>
                    <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{opt.desc}</span>
                  </div>
                  <ChevronRight size={18} style={{ color: '#6B7280', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Domain of Interest */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1.25 }}>
              Which technology domain excites you most?
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '13.5px', marginBottom: '18px', lineHeight: 1.5 }}>
              Select the specific career specialization you want to master.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', maxHeight: '360px', overflowY: 'auto', paddingRight: '4px' }}>
              {[
                { id: 'web', icon: Code, title: 'Web & Full Stack Development', desc: 'React, Node.js, Next.js 15 & REST APIs' },
                { id: 'cyber', icon: ShieldCheck, title: 'Cybersecurity & Ethical Hacking', desc: 'Penetration testing, Kali Linux & SOC operations' },
                { id: 'ai', icon: Cpu, title: 'Artificial Intelligence & GenAI', desc: 'LLMs, PyTorch, RAG architectures & AI agents' },
                { id: 'data', icon: Database, title: 'Data Science & Big Data Analytics', desc: 'Python, SQL, Machine Learning & Business Intelligence' },
                { id: 'swe', icon: Terminal, title: 'Software Engineering & DSA', desc: 'C++, Data Structures, Algorithms & System Design' },
                { id: 'cloud', icon: Cloud, title: 'Cloud Computing & DevOps', desc: 'AWS, Docker, Kubernetes & CI/CD Pipelines' }
              ].map((opt) => {
                const IconComp = opt.icon;
                return (
                  <div 
                    key={opt.id}
                    className="quizOptionCard"
                    onClick={() => handleSelectAnswer('interest', opt.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelectAnswer('interest', opt.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(255, 2, 5, 0.1)', color: 'var(--red-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={17} />
                      </div>
                      <div>
                        <strong style={{ color: '#fff', display: 'block', fontSize: '14px', marginBottom: '2px' }}>
                          {opt.title}
                        </strong>
                        <span style={{ fontSize: '11.5px', color: '#9CA3AF' }}>{opt.desc}</span>
                      </div>
                    </div>
                    <ChevronRight size={18} style={{ color: '#6B7280', flexShrink: 0 }} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Primary Career Goal */}
        {step === 3 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1.25 }}>
              What is your primary career outcome?
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '13.5px', marginBottom: '20px', lineHeight: 1.5 }}>
              Choose what you want to achieve after completing your track.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'freelance', title: 'Global Freelancing (USD / Remote)', desc: 'Upwork Top-Rated, direct international clients & independent projects' },
                { id: 'job', title: 'High-Paying Engineering Employment', desc: 'Land roles in top software companies, SOC centers, or remote teams' },
                { id: 'startup', title: 'Build Commercial Startups / Products', desc: 'Engineer and launch your own digital SaaS applications and platforms' }
              ].map((opt) => (
                <div 
                  key={opt.id}
                  className="quizOptionCard"
                  onClick={() => handleSelectAnswer('goal', opt.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectAnswer('goal', opt.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div>
                    <strong style={{ color: '#fff', display: 'block', fontSize: '14.5px', marginBottom: '3px' }}>
                      {opt.title}
                    </strong>
                    <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{opt.desc}</span>
                  </div>
                  <ChevronRight size={18} style={{ color: '#6B7280', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Matched Learning Roadmap Result */}
        {step === 4 && result && (
          <div style={{ textAlign: 'center', padding: '6px 0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(255, 2, 5, 0.12)', border: '1px solid rgba(255, 2, 5, 0.3)', display: 'grid', placeItems: 'center', margin: '0 auto 14px', color: 'var(--red-bright)' }}>
              <Award size={26} />
            </div>

            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--red-bright)', letterSpacing: '0.12em', marginBottom: '6px', fontWeight: 700 }}>
              RECOMMENDED LEARNING ROADMAP
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              {result.title}
            </h3>

            {/* Structured Recommendation Summary Card */}
            <div style={{ backgroundColor: '#141414', border: '1px solid #262626', borderRadius: '12px', padding: '16px 18px', textAlign: 'left', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Briefcase size={15} style={{ color: 'var(--red-bright)' }} />
                  <span>Target Role</span>
                </span>
                <strong style={{ color: '#FFFFFF' }}>{result.finalRole}</strong>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={15} style={{ color: 'var(--red-bright)' }} />
                  <span>Estimated Duration</span>
                </span>
                <strong style={{ color: '#FFFFFF' }}>{result.duration}</strong>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} style={{ color: '#10B981' }} />
                  <span>Starting Point</span>
                </span>
                <strong style={{ color: '#FFFFFF' }}>{getStartingLevelText()}</strong>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button"
                onClick={handleApply} 
                className="journeyHeroQuizPill"
                style={{ borderRadius: '10px', padding: '12px 24px', fontSize: '14px' }}
              >
                Open Recommended Track →
              </button>
              <button 
                type="button"
                onClick={handleRetake} 
                style={{
                  backgroundColor: '#171717',
                  border: '1px solid #333333',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}

      </div>
    </div>,
    document.body
  );
}

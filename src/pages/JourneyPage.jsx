import React, { useState, useEffect, useRef, useCallback } from 'react';
import { careerPathsData } from '../data/coursesData';
import JourneyHero from '../components/journey/JourneyHero';
import TrackSelector from '../components/journey/TrackSelector';
import JourneyTimeline from '../components/journey/JourneyTimeline';
import DestinationCard from '../components/journey/DestinationCard';
import PathFinderQuizModal from '../components/journey/PathFinderQuizModal';

export default function JourneyPage({ onOpenContact, onNavigate, initialPathId = 'web-development' }) {
  const [selectedPathId, setSelectedPathId] = useState(initialPathId);

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({ level: '', interest: '', goal: '' });
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizAnswer = (field, value) => {
    const nextAnswers = { ...quizAnswers, [field]: value };
    setQuizAnswers(nextAnswers);

    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      let matchedPath = careerPathsData[0];
      if (nextAnswers.interest === 'cyber') {
        matchedPath = careerPathsData.find(p => p.id === 'cybersecurity') || careerPathsData[1];
      } else if (nextAnswers.interest === 'ai') {
        matchedPath = careerPathsData.find(p => p.id === 'ai-ml') || careerPathsData[2];
      } else if (nextAnswers.interest === 'data') {
        matchedPath = careerPathsData.find(p => p.id === 'data-science') || careerPathsData[3];
      } else if (nextAnswers.interest === 'swe') {
        matchedPath = careerPathsData.find(p => p.id === 'software-engineering') || careerPathsData[4];
      } else if (nextAnswers.interest === 'cloud') {
        matchedPath = careerPathsData.find(p => p.id === 'cloud-devops') || careerPathsData[5];
      } else {
        matchedPath = careerPathsData.find(p => p.id === 'web-development') || careerPathsData[0];
      }
      setQuizResult(matchedPath);
      setQuizStep(4);
    }
  };

  const applyQuizRecommendation = () => {
    if (quizResult) {
      setSelectedPathId(quizResult.id);
    }
    setIsQuizOpen(false);
    setQuizStep(1);
    const el = document.getElementById('roadmapSection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setQuizAnswers({ level: '', interest: '', goal: '' });
    setQuizResult(null);
  };

  const trackRef = useRef(null);
  const svgRef = useRef(null);
  const pathIdleRef = useRef(null);
  const pathGlowRef = useRef(null);
  const pathActiveRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const destinationCardRef = useRef(null);
  const pathLengthRef = useRef(0);

  const activePath = careerPathsData.find(p => p.id === selectedPathId) || careerPathsData[0];

  const smoothPathThrough = (points) => {
    if (points.length < 2) return '';
    let d = `M ${points[0].x} ${points[0].y} `;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
    }
    return d;
  };

  const buildPath = useCallback(() => {
    if (!trackRef.current || !svgRef.current || !pathIdleRef.current || !pathGlowRef.current || !pathActiveRef.current) return;

    const track = trackRef.current;
    const svg = svgRef.current;
    const trackRect = track.getBoundingClientRect();
    const w = track.clientWidth;
    const h = track.scrollHeight;

    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const stepElements = track.querySelectorAll('[data-step]');
    if (!stepElements.length) return;

    const dotPoints = Array.from(stepElements).map((step) => {
      const marker = step.querySelector('.step-marker');
      if (!marker) return { x: w / 2, y: 0 };
      const r = marker.getBoundingClientRect();
      return {
        x: r.left - trackRect.left + r.width / 2,
        y: r.top - trackRect.top + r.height / 2
      };
    });

    const wavePoints = [
      { x: dotPoints[0].x, y: Math.max(0, dotPoints[0].y - 80) },
      ...dotPoints,
      { x: dotPoints[dotPoints.length - 1].x, y: h }
    ];

    const d = smoothPathThrough(wavePoints);

    pathIdleRef.current.setAttribute('d', d);
    pathGlowRef.current.setAttribute('d', d);
    pathActiveRef.current.setAttribute('d', d);

    try {
      const length = pathActiveRef.current.getTotalLength();
      pathLengthRef.current = length;

      [pathGlowRef.current, pathActiveRef.current].forEach((p) => {
        if (p) {
          p.style.strokeDasharray = `${length}`;
          p.style.strokeDashoffset = `${length}`;
        }
      });
    } catch (e) {
    }
  }, []);

  const updateProgress = useCallback(() => {
    if (!trackRef.current || !pathActiveRef.current || !pathGlowRef.current) return;
    const length = pathLengthRef.current;
    if (!length) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const viewportH = window.innerHeight;

    const start = viewportH * 0.85;
    const end = -trackRef.current.scrollHeight + viewportH * 0.4;
    const raw = (trackRect.top - start) / (end - start);
    const progress = Math.min(1, Math.max(0, raw));

    const offset = length * (1 - progress);
    pathGlowRef.current.style.strokeDashoffset = `${offset}`;
    pathActiveRef.current.style.strokeDashoffset = `${offset}`;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      buildPath();
      updateProgress();
    }, 80);

    const handleResize = () => {
      buildPath();
      updateProgress();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateProgress);
    };
  }, [selectedPathId, buildPath, updateProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.25 }
    );

    if (trackRef.current) {
      const stepEls = trackRef.current.querySelectorAll('[data-step]');
      stepEls.forEach((el) => observer.observe(el));
    }
    if (destinationCardRef.current) {
      observer.observe(destinationCardRef.current);
    }

    return () => observer.disconnect();
  }, [selectedPathId]);

  return (
    <div className="bg-[#0a0505] min-h-screen text-white pb-24 overflow-x-hidden w-full">
      <JourneyHero onOpenQuiz={() => {
        resetQuiz();
        setIsQuizOpen(true);
      }} />

      <TrackSelector 
        selectedPathId={selectedPathId}
        setSelectedPathId={setSelectedPathId}
        activePath={activePath}
      />

      <section className="roadmap-section" id="roadmapSection">
        <JourneyTimeline 
          trackRef={trackRef}
          svgRef={svgRef}
          pathIdleRef={pathIdleRef}
          pathGlowRef={pathGlowRef}
          pathActiveRef={pathActiveRef}
          stepsContainerRef={stepsContainerRef}
          activePath={activePath}
        />

        <DestinationCard 
          destinationCardRef={destinationCardRef}
          activePath={activePath}
          onOpenContact={onOpenContact}
        />
      </section>

      <PathFinderQuizModal 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        quizStep={quizStep}
        handleQuizAnswer={handleQuizAnswer}
        quizResult={quizResult}
        applyQuizRecommendation={applyQuizRecommendation}
        resetQuiz={resetQuiz}
      />

      <style>{`
        :root {
          --bg: #0a0505;
          --line-idle: rgba(255, 255, 255, 0.14);
          --line-active: #ff3b30;
          --accent: #ff3b30;
          --accent-glow: rgba(255, 59, 48, 0.55);
          --text-primary: #ffffff;
          --text-muted: #9a9a9a;
          --card-bg: #150a0a;
          --card-border: rgba(255, 59, 48, 0.35);
          --radius: 16px;
        }

        .roadmap-section {
          position: relative;
          padding: 40px 24px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .roadmap-eyebrow {
          color: var(--accent);
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .roadmap-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }
        .roadmap-subtitle {
          color: var(--text-muted);
          font-size: 16px;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .trackPillContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .trackPill {
          background: #120909;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #bbb;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          font-family: inherit;
        }

        .trackPill:hover {
          border-color: rgba(255, 59, 48, 0.4);
          color: #fff;
          background: #180d0d;
        }

        .trackPill.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
          box-shadow: 0 0 20px rgba(255, 59, 48, 0.5);
        }

        .selectedPathSummaryBox {
          background: #130a0a;
          border: 1px solid rgba(255, 59, 48, 0.25);
          border-radius: 20px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .summaryMetaBadge {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 12px;
          color: #ccc;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
        }

        .journey-track {
          position: relative;
          min-height: 1200px;
          margin-top: 40px;
        }

        .journey-svg {
          position: absolute;
          top: 0; 
          left: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
        }

        .path-idle {
          fill: none;
          stroke: var(--line-idle);
          stroke-width: 2.5;
          vector-effect: non-scaling-stroke;
        }
        .path-glow {
          fill: none;
          stroke: var(--accent);
          stroke-width: 14;
          opacity: 0.35;
          filter: blur(8px);
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
        }
        .path-active {
          fill: none;
          stroke: var(--line-active);
          stroke-width: 2.5;
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
        }

        .journey-step {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 220px;
          align-items: center;
          margin-bottom: 120px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .journey-step:last-child { 
          margin-bottom: 80px; 
        }
        .journey-step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .journey-step:nth-child(odd) .step-marker { 
          left: 78%; 
        }
        .journey-step:nth-child(odd) .step-content {
          margin-right: 26%;
          margin-left: auto;
          text-align: right;
          padding-right: 40px;
        }
        .journey-step:nth-child(odd) .step-card-box {
          margin-left: auto;
        }
        .journey-step:nth-child(odd) .step-skills-wrap {
          justify-content: flex-end;
        }

        .journey-step:nth-child(even) .step-marker { 
          left: 22%; 
        }
        .journey-step:nth-child(even) .step-content {
          margin-left: 26%;
          margin-right: auto;
          text-align: left;
          padding-left: 40px;
        }
        .journey-step:nth-child(even) .step-card-box {
          margin-right: auto;
        }
        .journey-step:nth-child(even) .step-skills-wrap {
          justify-content: flex-start;
        }

        .step-marker {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #000;
          border: 4px solid var(--accent);
          box-shadow: 0 0 16px var(--accent-glow);
          z-index: 5;
        }

        .step-content {
          width: 55%;
          position: relative;
          z-index: 6;
        }

        .step-card-box {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--radius);
          padding: 24px 28px;
          max-width: 440px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
        }

        .step-eyebrow {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          background: linear-gradient(
            180deg,
            rgb(255, 2, 5) 28.05%,
            rgb(67, 11, 11) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }
        .step-title {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 8px;
          line-height: 1.3;
        }
        .step-desc {
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0 0 14px;
        }

        .step-course-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 59, 48, 0.1);
          border: 1px solid rgba(255, 59, 48, 0.25);
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 12px;
          color: #eee;
          margin-bottom: 12px;
        }

        .step-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }
        .step-skill-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 11px;
          color: #ccc;
          font-family: var(--font-mono);
        }

        .step-project-row {
          font-size: 12px;
          color: #ff8a80;
          background: rgba(0, 0, 0, 0.4);
          padding: 6px 10px;
          border-radius: 6px;
          border: 1px dashed rgba(255, 59, 48, 0.3);
        }

        .destination-card {
          background: #ffffff;
          color: #070707;
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          max-width: 680px;
          margin: 60px auto 0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 59, 48, 0.2);
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .destination-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .destination-title {
          font-size: 28px;
          font-weight: 900;
          color: #070707;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .destination-desc {
          color: #555;
          font-size: 15px;
          line-height: 1.6;
          max-width: 520px;
          margin: 0 auto 28px;
        }
        .destination-cta {
          background: var(--accent);
          color: #fff;
          border: none;
          padding: 14px 34px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(255, 59, 48, 0.4);
          transition: all 0.25s ease;
        }
        .destination-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255, 59, 48, 0.6);
        }

        .quizModalOverlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: grid;
          place-items: center;
          z-index: 9999;
          padding: 20px;
        }
        .quizModalContent {
          background: #120808;
          border: 1px solid rgba(255, 59, 48, 0.35);
          border-radius: 24px;
          padding: 36px 32px;
          max-width: 560px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.95);
        }
        .quizCloseBtn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 4px;
          transition: color 0.2s;
        }
        .quizCloseBtn:hover {
          color: #fff;
        }
        .quizOptionCard {
          background: #180d0d;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .quizOptionCard:hover {
          border-color: var(--accent);
          background: #201010;
          transform: translateX(4px);
        }

        @media (max-width: 820px) {
          .journey-step:nth-child(odd) .step-marker,
          .journey-step:nth-child(even) .step-marker {
            left: 24px !important;
          }
          .journey-step:nth-child(odd) .step-content,
          .journey-step:nth-child(even) .step-content {
            margin-left: 60px !important;
            margin-right: 0 !important;
            width: calc(100% - 60px) !important;
            text-align: left !important;
            padding: 0 !important;
          }
          .journey-step:nth-child(odd) .step-skills-wrap,
          .journey-step:nth-child(even) .step-skills-wrap {
            justify-content: flex-start !important;
          }
          .journey-svg {
            display: none;
          }
          .journey-track::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 24px;
            width: 2px;
            background: rgba(255, 59, 48, 0.3);
          }
        }
      `}</style>
    </div>
  );
}

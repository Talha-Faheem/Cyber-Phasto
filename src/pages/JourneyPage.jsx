import React, { useState, useEffect, useRef, useCallback } from 'react';
import { careerPathsData } from '../data/coursesData';
import HomeBackground from '../components/home/HomeBackground';
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
      setQuizStep(prev => prev + 1);
    } else {
      let matchedPath = careerPathsData[0];
      const interest = nextAnswers.interest || value;
      if (interest === 'cyber') {
        matchedPath = careerPathsData.find(p => p.id === 'cybersecurity') || careerPathsData[1];
      } else if (interest === 'ai') {
        matchedPath = careerPathsData.find(p => p.id === 'artificial-intelligence' || p.id === 'ai-ml') || careerPathsData[2];
      } else if (interest === 'data') {
        matchedPath = careerPathsData.find(p => p.id === 'data-science') || careerPathsData[3];
      } else if (interest === 'swe') {
        matchedPath = careerPathsData.find(p => p.id === 'software-engineering') || careerPathsData[4];
      } else if (interest === 'cloud') {
        matchedPath = careerPathsData.find(p => p.id === 'cloud-devops') || careerPathsData[5];
      } else {
        matchedPath = careerPathsData.find(p => p.id === 'web-development') || careerPathsData[0];
      }
      setQuizResult(matchedPath);
      setQuizStep(4);
    }
  };

  const applyQuizRecommendation = () => {
    if (quizResult && quizResult.id) {
      setSelectedPathId(quizResult.id);
    }
    setIsQuizOpen(false);
    setQuizStep(1);
    setTimeout(() => {
      const el = document.getElementById('roadmapSection') || document.getElementById('journeyTrack');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
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

  const buildPath = useCallback(() => {
    if (!trackRef.current || !svgRef.current || !pathIdleRef.current || !pathGlowRef.current || !pathActiveRef.current) return;

    const track = trackRef.current;
    const svg = svgRef.current;
    const trackRect = track.getBoundingClientRect();
    const w = track.clientWidth;
    const h = track.scrollHeight;

    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const stepElements = Array.from(track.querySelectorAll('[data-step]'));
    if (!stepElements.length) return;

    const isMobile = window.innerWidth <= 860;

    // Collect entry and exit coordinates for each step
    const stepsData = stepElements.map((step) => {
      const entryAnchor = step.querySelector('.step-entry-anchor');
      const marker = step.querySelector('.step-marker');
      const card = step.querySelector('.step-card-box');

      const cardRect = card ? card.getBoundingClientRect() : step.getBoundingClientRect();
      const markerRect = marker ? marker.getBoundingClientRect() : cardRect;

      const entryX = entryAnchor 
        ? entryAnchor.getBoundingClientRect().left - trackRect.left + (entryAnchor.getBoundingClientRect().width / 2)
        : cardRect.left - trackRect.left + (cardRect.width / 2);
      const entryY = entryAnchor 
        ? entryAnchor.getBoundingClientRect().top - trackRect.top
        : cardRect.top - trackRect.top;

      const exitX = markerRect.left - trackRect.left + (markerRect.width / 2);
      const exitY = markerRect.top - trackRect.top + (markerRect.height / 2);

      return {
        entry: { x: entryX, y: entryY },
        exit: { x: exitX, y: exitY }
      };
    });

    let d = '';

    if (isMobile) {
      // Mobile clean vertical laser line connecting cards
      const first = stepsData[0];
      d = `M ${first.exit.x} ${Math.max(0, first.entry.y - 30)} `;
      d += `L ${first.exit.x} ${first.exit.y} `;

      for (let i = 1; i < stepsData.length; i++) {
        const curr = stepsData[i];
        d += `L ${curr.exit.x} ${curr.exit.y} `;
      }

      if (destinationCardRef.current) {
        const destRect = destinationCardRef.current.getBoundingClientRect();
        const destX = stepsData[stepsData.length - 1].exit.x;
        const destY = destRect.top - trackRect.top;
        d += `L ${destX} ${destY} `;
      }
    } else {
      // 2D Map multi-directional circuit track connecting steps
      // Start slightly above first card
      const first = stepsData[0];
      d = `M ${first.entry.x} ${Math.max(0, first.entry.y - 30)} `;
      d += `L ${first.entry.x} ${first.entry.y} `;
      d += `L ${first.exit.x} ${first.exit.y} `;

      for (let i = 0; i < stepsData.length - 1; i++) {
        const currExit = stepsData[i].exit;
        const nextEntry = stepsData[i + 1].entry;
        const nextExit = stepsData[i + 1].exit;

        const dx = nextEntry.x - currExit.x;
        const dy = nextEntry.y - currExit.y;

        if (Math.abs(dx) < 40) {
          // Direct downward connection (e.g. Course 02 -> Course 03, Course 04 -> Course 05)
          d += `L ${nextEntry.x} ${nextEntry.y} `;
        } else if (dx > 40) {
          // Turn RIGHT 90° with smooth rounded corners (e.g. Course 01 -> Course 02, Course 05 -> Course 06)
          const yMid = currExit.y + Math.max(20, dy * 0.45);
          const r = Math.min(18, Math.max(4, Math.abs(dx) / 4), Math.max(4, yMid - currExit.y), Math.max(4, nextEntry.y - yMid));
          d += `L ${currExit.x} ${yMid - r} `;
          d += `Q ${currExit.x} ${yMid} ${currExit.x + r} ${yMid} `;
          d += `L ${nextEntry.x - r} ${yMid} `;
          d += `Q ${nextEntry.x} ${yMid} ${nextEntry.x} ${yMid + r} `;
          d += `L ${nextEntry.x} ${nextEntry.y} `;
        } else {
          // Turn LEFT 90° with smooth rounded corners (e.g. Course 03 -> Course 04)
          const yMid = currExit.y + Math.max(20, dy * 0.45);
          const r = Math.min(18, Math.max(4, Math.abs(dx) / 4), Math.max(4, yMid - currExit.y), Math.max(4, nextEntry.y - yMid));
          d += `L ${currExit.x} ${yMid - r} `;
          d += `Q ${currExit.x} ${yMid} ${currExit.x - r} ${yMid} `;
          d += `L ${nextEntry.x + r} ${yMid} `;
          d += `Q ${nextEntry.x} ${yMid} ${nextEntry.x} ${yMid + r} `;
          d += `L ${nextEntry.x} ${nextEntry.y} `;
        }

        // Trace through the next card from its entry to its exit marker
        d += `L ${nextExit.x} ${nextExit.y} `;
      }

      // Connect last step (Course 06) to Destination Card
      const lastExit = stepsData[stepsData.length - 1].exit;
      if (destinationCardRef.current) {
        const destRect = destinationCardRef.current.getBoundingClientRect();
        const destX = destRect.left - trackRect.left + (destRect.width / 2);
        const destY = destRect.top - trackRect.top;
        const dy = destY - lastExit.y;

        if (Math.abs(destX - lastExit.x) < 40) {
          d += `L ${destX} ${destY} `;
        } else {
          const cp1x = lastExit.x;
          const cp1y = lastExit.y + dy * 0.45;
          const cp2x = destX;
          const cp2y = destY - dy * 0.3;
          d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${destX} ${destY} `;
        }
      } else {
        d += `L ${lastExit.x} ${h} `;
      }
    }

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
    } catch (e) {}
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
    const timer1 = setTimeout(() => {
      buildPath();
      updateProgress();
    }, 60);

    const timer2 = setTimeout(() => {
      buildPath();
      updateProgress();
    }, 300);

    const handleResize = () => {
      buildPath();
      updateProgress();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
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
    <div className="journeyPageWrapper bg-[#040404] min-h-screen text-white pb-24 overflow-x-hidden w-full relative">
      <HomeBackground />
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
          padding: 24px 16px 40px;
          max-width: 1040px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
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
          background: #ffffff;
          border: 1px solid #ffffff;
          color: #000000;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s var(--ease-soft);
          font-family: inherit;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        .trackPill:hover {
          background: #f0f0f0;
          border-color: #ffffff;
          color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
        }

        .trackPill.active {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
          box-shadow: 0 0 22px rgba(255, 59, 48, 0.6);
        }

        .selectedPathSummaryBox {
          background: #ffffff;
          color: #090909;
          border: 1px solid #ffffff;
          border-radius: 20px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .selectedPathSummaryBox:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.15);
        }

        .summaryContentLeft {
          flex: 1 1 480px;
          min-width: 280px;
        }

        .summaryEyebrowRow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .summaryTrackBadge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 700;
          color: #FF0205;
          background: rgba(255, 2, 5, 0.08);
          border: 1px solid rgba(255, 2, 5, 0.22);
          padding: 3px 9px;
          border-radius: 999px;
          letter-spacing: 0.1em;
        }

        .summaryBadgeDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF0205;
          box-shadow: 0 0 6px rgba(255, 2, 5, 0.8);
          display: inline-block;
        }

        .summaryTrackIconBadge {
          color: #71717a;
          display: inline-flex;
          align-items: center;
        }

        .summaryTitle {
          font-size: 24px;
          font-weight: 800;
          color: #090909;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
          line-height: 1.25;
        }

        .summaryDesc {
          color: #52525b;
          font-size: 13.5px;
          margin: 0;
          max-width: 620px;
          line-height: 1.55;
        }

        .summaryMetaContainer {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .summaryMetaCard {
          background: #f4f4f5;
          border: 1px solid #e4e4e7;
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .summaryMetaCard:hover {
          border-color: #d4d4d8;
          transform: translateY(-1px);
        }

        .metaIconWrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .metaIconRed {
          background: rgba(255, 2, 5, 0.1);
          color: #FF0205;
          border: 1px solid rgba(255, 2, 5, 0.2);
        }

        .metaIconGreen {
          background: rgba(34, 197, 94, 0.12);
          color: #16a34a;
          border: 1px solid rgba(34, 197, 94, 0.25);
        }

        .metaInfoCol {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .metaLabel {
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          color: #71717a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .metaValue {
          font-size: 13px;
          font-weight: 800;
          color: #090909;
          letter-spacing: -0.01em;
        }

        .journey-track {
          position: relative;
          min-height: 800px;
          margin-top: 30px;
        }

        .journey-svg {
          position: absolute;
          top: 0; 
          left: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
          z-index: 1;
        }

        .path-idle {
          fill: none;
          stroke: rgba(255, 255, 255, 0.14);
          stroke-width: 2.5;
          stroke-dasharray: 6 6;
          vector-effect: non-scaling-stroke;
        }
        .path-glow {
          fill: none;
          stroke: #ff3b30;
          stroke-width: 12;
          opacity: 0.4;
          filter: blur(8px);
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
        }
        .path-active {
          fill: none;
          stroke: #ff3b30;
          stroke-width: 3;
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
        }

        .journey-2d-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 36px;
          row-gap: 28px;
          position: relative;
          z-index: 2;
          align-items: start;
          width: 100%;
        }

        .journey-step {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 470px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .journey-step-staggered {
          margin-top: 36px;
        }

        .journey-step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .step-entry-anchor {
          width: 2px;
          height: 2px;
          opacity: 0;
          margin-bottom: 2px;
        }

        .step-card-box {
          background: #110707;
          background: linear-gradient(180deg, #150909 0%, #0d0404 100%);
          border: 1px solid rgba(255, 59, 48, 0.28);
          border-radius: 14px;
          padding: 20px 22px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.65), 0 0 15px rgba(255, 59, 48, 0.04);
          position: relative;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .step-card-box:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 59, 48, 0.65);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.8), 0 0 22px rgba(255, 59, 48, 0.2);
        }

        .step-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .step-eyebrow {
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 700;
          background: linear-gradient(
            180deg,
            rgb(255, 2, 5) 28.05%,
            rgb(255, 100, 100) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          letter-spacing: 0.08em;
        }

        .step-index-badge {
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 5px;
          padding: 1px 6px;
          background: rgba(255, 255, 255, 0.03);
        }

        .step-title {
          font-size: 17.5px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .step-desc {
          color: var(--text-muted);
          font-size: 13px;
          line-height: 1.5;
          margin: 0 0 12px;
        }

        .step-course-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 59, 48, 0.08);
          border: 1px solid rgba(255, 59, 48, 0.22);
          padding: 4px 9px;
          border-radius: 6px;
          font-size: 11.5px;
          color: #eee;
          margin-bottom: 10px;
          max-width: 100%;
        }

        .step-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 10px;
        }

        .step-skill-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.09);
          padding: 2.5px 7px;
          border-radius: 4px;
          font-size: 10.5px;
          color: #ccc;
          font-family: var(--font-mono);
        }

        .step-project-row {
          font-size: 11.5px;
          color: #ff8a80;
          background: rgba(0, 0, 0, 0.4);
          padding: 5px 9px;
          border-radius: 6px;
          border: 1px dashed rgba(255, 59, 48, 0.28);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .step-marker {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
          margin-bottom: 2px;
          z-index: 5;
        }

        .step-marker-dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: #000;
          border: 3px solid var(--accent);
          box-shadow: 0 0 12px var(--accent-glow);
          position: relative;
          z-index: 2;
        }

        .step-marker-pulse {
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(255, 59, 48, 0.25);
          animation: markerPulse 2.4s infinite ease-out;
          z-index: 1;
        }

        @keyframes markerPulse {
          0% { transform: scale(0.7); opacity: 0.9; }
          70% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        .step-direction-hint {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: #ff8a80;
          background: rgba(255, 59, 48, 0.12);
          border: 1px solid rgba(255, 59, 48, 0.28);
          padding: 2px 7px;
          border-radius: 999px;
          white-space: nowrap;
          pointer-events: none;
        }

        .hint-right {
          left: 24px;
        }

        .hint-left {
          right: 24px;
        }

        .hint-down {
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 2px 6px;
        }

        .destination-card {
          background: #ffffff;
          color: #070707;
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          max-width: 600px;
          margin: 40px auto 0;
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 59, 48, 0.18);
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          position: relative;
          z-index: 3;
        }
        .destination-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .destination-marker {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ff3b30;
          border: 3px solid #fff;
          box-shadow: 0 0 14px rgba(255, 59, 48, 0.8);
          margin: -44px auto 16px;
        }

        .destination-title {
          font-size: 26px;
          font-weight: 900;
          color: #070707;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .destination-desc {
          color: #555;
          font-size: 14.5px;
          line-height: 1.55;
          max-width: 500px;
          margin: 0 auto 20px;
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
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
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

        @media (max-width: 860px) {
          .journey-2d-grid {
            grid-template-columns: 1fr !important;
            row-gap: 28px !important;
          }
          .journey-step {
            grid-column: 1 !important;
            grid-row: auto !important;
            max-width: 100% !important;
          }
          .journey-step-staggered {
            margin-top: 0 !important;
          }
          .step-card-box {
            max-width: 100% !important;
          }
          .step-direction-hint {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { careerPathsData } from '../data/coursesData';
import HomeBackground from '../components/home/HomeBackground';
import JourneyHero from '../components/journey/JourneyHero';
import TrackSelector from '../components/journey/TrackSelector';
import JourneyTimeline from '../components/journey/JourneyTimeline';
import PathFinderQuizModal from '../components/journey/PathFinderQuizModal';

export default function JourneyPage({ onOpenContact, initialPathId = 'web-development' }) {
  const [selectedPathId, setSelectedPathId] = useState(initialPathId);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes('quiz=true') || location.search.includes('quiz=1')) {
      setIsQuizOpen(true);
    }
  }, [location.search]);

  const handleSelectQuizPath = (pathId) => {
    setSelectedPathId(pathId);
    setIsQuizOpen(false);
    setTimeout(() => {
      const el = document.getElementById('roadmap') || document.querySelector('.roadmap');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const trackRef = useRef(null);
  const svgRef = useRef(null);
  const pathBaseRef = useRef(null);
  const pathGlowRef = useRef(null);
  const pathActiveRef = useRef(null);
  const leadDotRef = useRef(null);
  const startDotRef = useRef(null);
  const endDotRef = useRef(null);
  const destinationCardRef = useRef(null);
  const courseNodeRefs = useRef([]);
  const courseCardRefs = useRef([]);

  // Performance metrics & state cache ref
  const layoutMetricsRef = useRef({
    offsetTop: 0,
    height: 0,
    startY: 0,
    endY: 0,
    totalTravel: 1,
    totalLength: 0,
    lut: [],
    nodes: []
  });

  const milestoneStatesRef = useRef({});
  const startDotStateRef = useRef('');
  const endDotStateRef = useRef('');
  const destCardStateRef = useRef('');
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef(null);

  const activePath = careerPathsData.find(p => p.id === selectedPathId) || careerPathsData[0];

  // High-performance visual applier with milestone state diffing (0 unnecessary DOM writes)
  const applyProgressVisuals = useCallback((progress) => {
    const metrics = layoutMetricsRef.current;
    const totalLength = metrics.totalLength;
    if (!totalLength || totalLength <= 0) return;

    const clamped = Math.max(0, Math.min(1, progress));
    const currentLength = clamped * totalLength;
    const strokeOffset = totalLength - currentLength;

    // 1. Update SVG Progress Strokes
    if (pathActiveRef.current) {
      pathActiveRef.current.style.strokeDashoffset = `${strokeOffset}`;
    }
    if (pathGlowRef.current) {
      pathGlowRef.current.style.strokeDashoffset = `${strokeOffset}`;
    }

    // 2. Position Leading Traveler Dot via O(1) LUT index lookup (Zero getPointAtLength calls during scroll)
    if (leadDotRef.current && metrics.lut && metrics.lut.length > 0) {
      if (clamped <= 0.002) {
        leadDotRef.current.style.opacity = '0';
      } else {
        const lutIdx = Math.min(metrics.lut.length - 1, Math.max(0, Math.round(clamped * (metrics.lut.length - 1))));
        const pt = metrics.lut[lutIdx];
        if (pt) {
          leadDotRef.current.style.transform = `translate3d(${pt.x}px, ${pt.y}px, 0)`;
          leadDotRef.current.style.opacity = '1';
        }
      }
    }

    // 3. State Diffing on Start Milestone Dot
    if (startDotRef.current) {
      const startState = clamped > 0.015 ? 'completed' : 'current';
      if (startDotStateRef.current !== startState) {
        startDotStateRef.current = startState;
        startDotRef.current.className = startState === 'completed' 
          ? 'node-dot node-completed' 
          : 'node-dot node-current pulse';
      }
    }

    // 4. State Diffing on Course Milestone Nodes & Cards
    if (metrics.nodes && metrics.nodes.length > 0) {
      metrics.nodes.forEach((nodeInfo) => {
        if (nodeInfo.type === 'course') {
          const threshold = nodeInfo.progressThreshold;
          const isReached = clamped >= threshold - 0.006;
          const isCurrent = Math.abs(clamped - threshold) < 0.038;
          
          const nodeState = isCurrent ? 'current' : isReached ? 'completed' : 'upcoming';
          const prevNodeState = milestoneStatesRef.current[nodeInfo.courseIdx];

          if (prevNodeState !== nodeState) {
            milestoneStatesRef.current[nodeInfo.courseIdx] = nodeState;
            
            const nodeEl = courseNodeRefs.current[nodeInfo.courseIdx];
            if (nodeEl) {
              if (nodeState === 'current') {
                nodeEl.className = 'node-dot level-node node-current pulse';
              } else if (nodeState === 'completed') {
                nodeEl.className = 'node-dot level-node node-completed';
              } else {
                nodeEl.className = 'node-dot level-node node-upcoming';
              }
            }

            const cardEl = courseCardRefs.current[nodeInfo.courseIdx] || (nodeInfo.cardId ? document.getElementById(nodeInfo.cardId) : null);
            if (cardEl) {
              if (nodeState === 'current') {
                cardEl.classList.add('card-current');
                cardEl.classList.remove('card-upcoming', 'card-completed');
              } else if (nodeState === 'completed') {
                cardEl.classList.add('card-completed');
                cardEl.classList.remove('card-upcoming', 'card-current');
              } else {
                cardEl.classList.add('card-upcoming');
                cardEl.classList.remove('card-completed', 'card-current');
              }
            }
          }
        } else if (nodeInfo.type === 'end') {
          const endState = clamped >= 0.96 ? 'completed' : clamped >= 0.88 ? 'current' : 'upcoming';
          if (endDotStateRef.current !== endState && endDotRef.current) {
            endDotStateRef.current = endState;
            if (endState === 'completed') {
              endDotRef.current.className = 'node-dot end-node node-completed';
            } else if (endState === 'current') {
              endDotRef.current.className = 'node-dot end-node node-current pulse';
            } else {
              endDotRef.current.className = 'node-dot end-node node-upcoming';
            }
          }
        }
      });
    }

    // 5. Highlight Destination Card upon Reaching End
    if (destinationCardRef.current) {
      const destState = clamped >= 0.95 ? 'completed' : 'upcoming';
      if (destCardStateRef.current !== destState) {
        destCardStateRef.current = destState;
        if (destState === 'completed') {
          destinationCardRef.current.classList.add('card-completed');
          destinationCardRef.current.classList.remove('card-upcoming');
        } else {
          destinationCardRef.current.classList.add('card-upcoming');
          destinationCardRef.current.classList.remove('card-completed');
        }
      }
    }
  }, []);

  // Compute target progress purely with arithmetic from cached metrics (0 layout reflows!)
  const calculateTargetProgress = useCallback(() => {
    const metrics = layoutMetricsRef.current;
    if (!metrics.totalTravel || metrics.totalTravel <= 0) return 0;

    const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    const viewportHeight = window.innerHeight || 800;

    // Optical reading center: 45% of viewport height
    const focalPageY = scrollY + (viewportHeight * 0.45);

    const progress = (focalPageY - metrics.startY) / metrics.totalTravel;
    return Math.max(0, Math.min(1, progress));
  }, []);

  // Immediate zero-lag scroll synchronization on RAF (zero trailing delay)
  const updateScrollProgress = useCallback((immediate = false) => {
    if (immediate) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      const target = calculateTargetProgress();
      currentProgressRef.current = target;
      applyProgressVisuals(target);
      return;
    }

    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(() => {
        const target = calculateTargetProgress();
        currentProgressRef.current = target;
        applyProgressVisuals(target);
        rafIdRef.current = null;
      });
    }
  }, [calculateTargetProgress, applyProgressVisuals]);

  // Wave Layout Generator: Pre-computes smooth curve, cached contact points, and 600-point LUT
  const layoutPath = useCallback(() => {
    const roadmap = trackRef.current;
    const svg = svgRef.current;
    if (!roadmap || !svg) return;

    const width = roadmap.offsetWidth;
    const height = roadmap.offsetHeight;
    if (width === 0 || height === 0) return;

    const roadmapRect = roadmap.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    const roadmapPageY = roadmapRect.top + scrollTop;

    svg.setAttribute('width', `${width}`);
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const rows = Array.from(roadmap.querySelectorAll('.level-row'));
    const centerX = width / 2;

    const points = [];
    const nodeItems = [];

    // 1. Top Start Milestone Node (index 0 - Center Top)
    const firstRowTop = rows[0] ? (rows[0].getBoundingClientRect().top - roadmapRect.top) : 30;
    const startY = Math.max(16, firstRowTop - 28);
    const startPoint = { x: centerX, y: startY };
    points.push(startPoint);
    nodeItems.push({ x: startPoint.x, y: startPoint.y, type: 'start', index: 0 });

    const startDot = startDotRef.current;
    if (startDot) {
      startDot.style.left = `${startPoint.x}px`;
      startDot.style.top = `${startPoint.y}px`;
    }

    // 2. Course Milestone Nodes: Wave sweeps and touches the inner border of each card
    rows.forEach((row, rIdx) => {
      const card = courseCardRefs.current[rIdx] || row.querySelector('.level-card');
      if (!card) return;
      
      const cardRect = card.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      const isLeft = rIdx % 2 === 0;
      
      const nodeX = (isLeft ? cardRect.right : cardRect.left) - roadmapRect.left;
      const nodeY = (rowRect.top + (rowRect.height / 2)) - roadmapRect.top;

      if (courseNodeRefs.current[rIdx]) {
        courseNodeRefs.current[rIdx].style.left = `${nodeX}px`;
        courseNodeRefs.current[rIdx].style.top = `${nodeY}px`;
      }

      points.push({ x: nodeX, y: nodeY });
      nodeItems.push({
        x: nodeX,
        y: nodeY,
        type: 'course',
        index: rIdx + 1,
        courseIdx: rIdx,
        cardId: `card-${rIdx + 1}`
      });
    });

    // 3. Destination Milestone Node (above destination card)
    const endDot = endDotRef.current;
    const destCard = destinationCardRef.current;
    let endY = height - 50;
    if (destCard) {
      const destCardRect = destCard.getBoundingClientRect();
      endY = Math.max(points[points.length - 1].y + 36, destCardRect.top - roadmapRect.top - 8);
    }
    const endPoint = { x: centerX, y: endY };
    points.push(endPoint);
    nodeItems.push({ x: endPoint.x, y: endPoint.y, type: 'end', index: nodeItems.length });

    if (endDot) {
      endDot.style.left = `${endPoint.x}px`;
      endDot.style.top = `${endPoint.y}px`;
    }

    if (points.length < 2) return;

    // 4. Construct smooth sweeping S-curves with vertical tangents
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const dy = p1.y - p0.y;
      const cp1x = p0.x;
      const cp1y = p0.y + dy * 0.5;
      const cp2x = p1.x;
      const cp2y = p1.y - dy * 0.5;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
    }

    if (pathBaseRef.current) {
      pathBaseRef.current.setAttribute('d', d);
    }
    if (pathGlowRef.current) {
      pathGlowRef.current.setAttribute('d', d);
    }
    if (pathActiveRef.current) {
      pathActiveRef.current.setAttribute('d', d);

      const totalLength = pathActiveRef.current.getTotalLength();
      pathActiveRef.current.style.strokeDasharray = `${totalLength} ${totalLength}`;
      if (pathGlowRef.current) {
        pathGlowRef.current.style.strokeDasharray = `${totalLength} ${totalLength}`;
      }

      // Precompute 600-point Look-Up Table (LUT) for O(1) traveler dot rendering
      const SAMPLES = 600;
      const lut = new Array(SAMPLES + 1);
      for (let i = 0; i <= SAMPLES; i++) {
        const len = (i / SAMPLES) * totalLength;
        const pt = pathActiveRef.current.getPointAtLength(len);
        lut[i] = { x: pt.x, y: pt.y, length: len };
      }

      // Map each milestone node accurately to its closest point along the path
      const calculatedNodes = nodeItems.map((node, nIdx) => {
        if (nIdx === 0) {
          return { ...node, length: 0, progressThreshold: 0 };
        }
        if (nIdx === nodeItems.length - 1) {
          return { ...node, length: totalLength, progressThreshold: 1 };
        }

        let bestDistSq = Infinity;
        let bestLen = 0;
        for (let s = 0; s < lut.length; s++) {
          const dx = lut[s].x - node.x;
          const dy = lut[s].y - node.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < bestDistSq) {
            bestDistSq = distSq;
            bestLen = lut[s].length;
          }
        }

        return {
          ...node,
          length: bestLen,
          progressThreshold: totalLength > 0 ? (bestLen / totalLength) : 0
        };
      });

      // Reset state caches
      milestoneStatesRef.current = {};
      startDotStateRef.current = '';
      endDotStateRef.current = '';
      destCardStateRef.current = '';

      const journeyStartY = roadmapPageY + points[0].y;
      const journeyEndY = roadmapPageY + points[points.length - 1].y;
      const totalTravel = Math.max(150, journeyEndY - journeyStartY);

      layoutMetricsRef.current = {
        offsetTop: roadmapPageY,
        height,
        startY: journeyStartY,
        endY: journeyEndY,
        totalTravel,
        totalLength,
        lut,
        nodes: calculatedNodes
      };

      // Immediate progress update matching current scroll position
      updateScrollProgress(true);
    }
  }, [updateScrollProgress]);

  // Setup High-Performance, Zero-Overhead Scroll & Resize Observers
  useEffect(() => {
    layoutPath();
    const t1 = setTimeout(layoutPath, 40);
    const t2 = setTimeout(layoutPath, 160);
    const t3 = setTimeout(layoutPath, 400);

    const handleScroll = () => {
      updateScrollProgress(false);
    };

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        layoutPath();
      }, 50);
    };

    // Single passive window scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // ResizeObserver on the roadmap element to automatically handle dynamic layout changes
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && trackRef.current) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(resizeTimer);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedPathId, layoutPath, updateScrollProgress]);

  return (
    <div className="journeyPageWrapper">
      <HomeBackground />

      <JourneyHero 
        onOpenQuiz={() => setIsQuizOpen(true)} 
      />

      <TrackSelector 
        selectedPathId={selectedPathId}
        setSelectedPathId={setSelectedPathId}
        activePath={activePath}
      />

      <JourneyTimeline 
        trackRef={trackRef}
        svgRef={svgRef}
        pathBaseRef={pathBaseRef}
        pathGlowRef={pathGlowRef}
        pathActiveRef={pathActiveRef}
        leadDotRef={leadDotRef}
        startDotRef={startDotRef}
        endDotRef={endDotRef}
        courseNodeRefs={courseNodeRefs}
        courseCardRefs={courseCardRefs}
        destinationCardRef={destinationCardRef}
        activePath={activePath}
        onOpenContact={onOpenContact}
      />

      <PathFinderQuizModal 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectPath={handleSelectQuizPath}
      />

      <style>{`
        :root {
          --bg: var(--black);
          --bg-soft: var(--black);
          --card: var(--ink);
          --card-border: var(--border);
          --card-border-soft: var(--line);
          --red: #FF0205;
          --red-bright: #FF1616;
          --red-dim: var(--red-dark);
          --ink: var(--paper);
          --ink-dim: var(--muted);
          --ink-faint: #6e6e6e;
          --mono: var(--font-mono);
          --sans: var(--font-sans);
        }

        .journeyPageWrapper {
          background:
            radial-gradient(circle at 1px 1px, rgba(255, 2, 5, 0.12) 1px, transparent 0) 0 0/34px 34px,
            radial-gradient(1200px 700px at 50% -10%, rgba(255, 2, 5, 0.08), transparent 60%),
            var(--black);
          color: var(--paper);
          font-family: var(--sans);
          min-height: 100vh;
          position: relative;
          overflow-x: clip;
          padding-bottom: 20px;
        }

        /* ---------- Journey Hero Section ---------- */
        .journeyHeroSection {
          position: relative;
          padding-top: 130px;
          padding-bottom: 12px;
          text-align: center;
          z-index: 3;
        }

        .journeyHeroTitle {
          font-size: clamp(34px, 5.2vw, 56px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 16px;
          line-height: 1.1;
          font-family: var(--sans);
        }

        .journeyHeroHighlight {
          color: var(--red);
          display: inline-block;
        }

        .journeyHeroSubtitle {
          color: var(--muted);
          font-size: clamp(15px, 1.8vw, 17px);
          line-height: 1.6;
          max-width: 680px;
          margin: 0 auto;
          font-family: var(--sans);
          font-weight: 400;
        }

        .journeyHeroQuizPill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--red);
          color: #ffffff;
          font-size: clamp(13px, 3.5vw, 14.5px);
          font-weight: 700;
          font-family: var(--sans);
          padding: 11px 22px;
          border-radius: 999px;
          border: 1px solid var(--red-border);
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          max-width: min(440px, calc(100% - 24px));
          margin: 0 auto;
          text-align: center;
        }

        .journeyHeroQuizPill:hover {
          transform: translateY(-2px);
          background: #e60003;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
          border-color: rgba(255, 255, 255, 0.25);
        }

        /* ---------- Track Pills Tabs (Horizontal Slider on Mobile) ---------- */
        .trackPillSliderWrapper {
          width: 100%;
          position: relative;
          z-index: 3;
          margin-bottom: 20px;
        }

        .trackPillContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 0;
          position: relative;
          z-index: 3;
        }

        .trackPill {
          background: #ffffff;
          border: 1px solid #ffffff;
          color: #090909;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          font-family: var(--sans);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .trackPill:hover {
          background: #f2f2f2;
          border-color: #ffffff;
          color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
        }

        .trackPill.active {
          background: var(--red);
          border-color: var(--red);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }

        .trackActiveDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
        }

        .selectedPathSummaryBox {
          background: #FFFFFF;
          color: #111827;
          border: 1px solid rgba(255, 2, 5, 0.14);
          border-radius: 20px;
          padding: clamp(20px, 3.5vw, 32px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28), 0 0 32px rgba(255, 2, 5, 0.12);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .selectedPathSummaryBox::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3.5px;
          background: linear-gradient(90deg, #FF0205 0%, rgba(255, 2, 5, 0.75) 45%, rgba(255, 2, 5, 0.15) 100%);
        }

        .selectedPathSummaryBox:hover {
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.32), 0 0 42px rgba(255, 2, 5, 0.18);
        }

        .summaryContentLeft {
          flex: 1 1 440px;
          min-width: 260px;
        }

        .summaryEyebrowRow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .summaryTrackBadge {
          display: inline-flex;
          align-items: center;
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 700;
          color: #111827;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.06em;
        }

        .summaryTrackTag {
          font-family: var(--mono);
          font-size: 11.5px;
          font-weight: 700;
          color: #FF0205;
          letter-spacing: 0.06em;
        }

        .summaryTitle {
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 800;
          color: #111827;
          margin: 0 0 8px;
          letter-spacing: -0.025em;
          line-height: 1.2;
          font-family: var(--sans);
        }

        .summaryDesc {
          color: #4B5563;
          font-size: 14px;
          margin: 0;
          max-width: 580px;
          line-height: 1.6;
          font-family: var(--sans);
        }

        .summaryMetaContainer {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .summaryMetaCard {
          background: linear-gradient(135deg, #FF0205 0%, #D60003 100%);
          border: 1px solid rgba(255, 2, 5, 0.4);
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 4px 14px rgba(255, 2, 5, 0.25);
          position: relative;
          color: #FFFFFF;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .summaryMetaCard:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 2, 5, 0.42);
        }

        .metaIconWrap {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .metaInfoCol {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .metaLabelRow {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .metaLabel {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .metaValue {
          font-size: 14px;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.01em;
          font-family: var(--sans);
          line-height: 1.25;
        }

        /* ---------- Roadmap Compact Wave Shell ---------- */
        .roadmap {
          position: relative;
          max-width: 1180px;
          margin: 30px auto 0;
          padding: 0 24px 30px;
          width: 100%;
          box-sizing: border-box;
          z-index: 2;
        }

        .path-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: visible;
          z-index: 2;
        }

        /* 1. Base Unreached Path (Dim subtle line) */
        .path-svg path.spine-base {
          fill: none;
          stroke: rgba(255, 2, 5, 0.12);
          stroke-width: 2;
          stroke-linecap: round;
        }

        /* 2. Traveled Neon Red Aura */
        .path-svg path.spine-glow {
          fill: none;
          stroke: rgba(255, 2, 5, 0.45);
          stroke-width: 8;
          stroke-linecap: round;
          will-change: stroke-dashoffset;
        }

        /* 3. Traveled Sharp Bright Red Stroke */
        .path-svg path.spine-draw {
          fill: none;
          stroke: var(--red-bright);
          stroke-width: 2.8;
          stroke-linecap: round;
          will-change: stroke-dashoffset;
        }

        /* ---------- Leading Edge Traveler Indicator ---------- */
        .traveler-dot {
          position: absolute;
          top: 0;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 0 3px var(--red-bright), 0 0 16px 4px rgba(255, 22, 22, 0.95), 0 0 28px 6px rgba(255, 2, 5, 0.6);
          z-index: 10;
          pointer-events: none;
          margin-left: -8px;
          margin-top: -8px;
          opacity: 0;
          transition: opacity 0.2s ease;
          will-change: transform;
        }

        .traveler-pulse-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(255, 22, 22, 0.85);
          animation: travelerPing 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes travelerPing {
          0% { transform: scale(0.85); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* ---------- Milestone Node Elements ---------- */
        .node-dot {
          position: absolute;
          top: 0;
          left: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          margin-left: -7px;
          margin-top: -7px;
          z-index: 4;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
          will-change: transform;
        }

        .node-inner-dot {
          width: 4.5px;
          height: 4.5px;
          border-radius: 50%;
          background: #ffffff;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        /* 1. Completed Milestone */
        .node-dot.node-completed {
          background: var(--red-bright);
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 3px var(--black), 0 0 14px 3px rgba(255, 22, 22, 0.85);
          opacity: 1;
        }

        .node-dot.node-completed .node-inner-dot {
          opacity: 1;
        }

        /* 2. Current / Active Milestone */
        .node-dot.node-current {
          background: var(--red-bright);
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 3px var(--black), 0 0 18px 5px rgba(255, 22, 22, 1);
          transform: scale(1.18);
          opacity: 1;
        }

        .node-dot.node-current .node-inner-dot {
          opacity: 1;
        }

        .node-dot.pulse {
          animation: nodeGlowPulse 2.4s ease-in-out infinite;
        }

        @keyframes nodeGlowPulse {
          0%, 100% {
            transform: scale(1.18);
            opacity: 1;
          }
          50% {
            transform: scale(1.36);
            opacity: 0.92;
          }
        }

        /* 3. Upcoming Milestone */
        .node-dot.node-upcoming {
          background: #0a0a0a;
          border: 1.5px solid #2a2a2a;
          box-shadow: 0 0 0 2px var(--black);
          opacity: 0.55;
        }

        /* ---------- Alternating Level Rows ---------- */
        .level-row {
          position: relative;
          display: flex;
          padding: 24px 0;
          min-height: 40px;
          width: 100%;
          z-index: 3;
        }

        .level-row.side-left {
          justify-content: flex-start;
        }

        .level-row.side-right {
          justify-content: flex-end;
        }

        /* ---------- Course Cards - Reddish Tech Theme ---------- */
        .level-card {
          width: min(470px, calc(50% - 20px));
          background: linear-gradient(165deg, rgba(32, 10, 10, 0.94) 0%, rgba(16, 6, 6, 0.98) 100%);
          border: 1px solid rgba(255, 2, 5, 0.28);
          border-radius: 16px;
          padding: 22px 24px 20px;
          position: relative;
          z-index: 3;
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.75), 0 0 25px rgba(255, 2, 5, 0.08), inset 0 1px 0 rgba(255, 80, 80, 0.15);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease, opacity 0.35s ease, background 0.35s ease;
          overflow: hidden;
        }

        .level-card-glow {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 2, 5, 0.22) 0%, rgba(255, 2, 5, 0.06) 45%, transparent 70%);
          pointer-events: none;
        }

        .level-card.card-completed {
          opacity: 1;
          border-color: rgba(255, 2, 5, 0.6);
          background: linear-gradient(165deg, rgba(38, 12, 12, 0.95) 0%, rgba(20, 8, 8, 0.98) 100%);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.8), 0 0 32px rgba(255, 2, 5, 0.18), inset 0 1px 0 rgba(255, 120, 120, 0.25);
        }

        .level-card.card-current {
          opacity: 1;
          border-color: var(--red-bright);
          background: linear-gradient(165deg, rgba(46, 14, 14, 0.96) 0%, rgba(24, 8, 8, 0.98) 100%);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85), 0 0 40px rgba(255, 2, 5, 0.38), inset 0 1px 0 rgba(255, 160, 160, 0.35);
          transform: translateY(-2px);
        }

        .level-card.card-upcoming {
          opacity: 0.65;
          border-color: rgba(255, 2, 5, 0.18);
        }

        .level-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 2, 5, 0.8);
          box-shadow: 0 22px 55px rgba(0, 0, 0, 0.85), 0 0 35px rgba(255, 2, 5, 0.25), inset 0 1px 0 rgba(255, 140, 140, 0.3);
          opacity: 1;
        }

        .level-row.side-left .level-card {
          margin-right: auto;
        }

        .level-row.side-right .level-card {
          margin-left: auto;
        }

        .level-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .level-kicker {
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.06em;
          color: var(--red-bright);
          text-transform: uppercase;
          font-weight: 600;
        }

        .level-num {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--muted);
          border: 1px solid rgba(255, 2, 5, 0.25);
          border-radius: 6px;
          padding: 2px 7px;
          flex-shrink: 0;
          background: rgba(255, 2, 5, 0.08);
        }

        .level-title {
          font-size: 21px;
          font-weight: 600;
          margin: 6px 0 8px;
          letter-spacing: -0.005em;
          color: #ffffff;
        }

        .level-desc {
          font-size: 14px;
          line-height: 1.55;
          color: var(--muted);
          margin: 0 0 12px;
        }

        .level-course {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          padding: 9px 12px;
          border: 1px solid rgba(255, 2, 5, 0.32);
          border-radius: 8px;
          background: rgba(255, 2, 5, 0.12);
          margin-bottom: 10px;
          color: var(--paper);
        }

        .level-course b {
          font-weight: 600;
          color: #ffffff;
        }

        .level-course svg {
          flex-shrink: 0;
        }

        .roadmap-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .roadmap-skill-tag {
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 600;
          color: #f1f1f1 !important;
          -webkit-text-fill-color: #f1f1f1 !important;
          border: 1px solid rgba(255, 2, 5, 0.3);
          border-radius: 6px;
          padding: 4px 9px;
          background: rgba(255, 2, 5, 0.1);
          display: inline-flex !important;
          align-items: center;
          line-height: 1.3;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
        }

        .roadmap-skill-tag:hover {
          background: rgba(255, 2, 5, 0.2);
          border-color: rgba(255, 2, 5, 0.6);
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }

        .level-build {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          padding: 9px 12px;
          border: 1px dashed rgba(255, 2, 5, 0.28);
          border-radius: 8px;
          color: var(--muted);
          background: rgba(0, 0, 0, 0.35);
        }

        .level-build b {
          color: var(--paper);
          font-weight: 600;
        }

        .level-build svg {
          flex-shrink: 0;
        }

        /* ---------- Destination Section ---------- */
        .destination-row {
          position: relative;
          display: flex;
          justify-content: center;
          padding: 45px 0 15px;
          z-index: 3;
        }

        .destination-card {
          width: min(640px, 100%);
          background: var(--paper);
          color: var(--black);
          border-radius: 20px;
          padding: 38px 40px;
          text-align: center;
          position: relative;
          z-index: 3;
          box-shadow: 0 30px 70px -20px var(--red-glow);
          transition: all 0.4s ease;
        }

        .destination-card.card-completed {
          box-shadow: 0 0 60px rgba(255, 2, 5, 0.45), 0 30px 70px -20px var(--red-glow);
        }

        .destination-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--red);
          background: rgba(255, 2, 5, 0.08);
          border: 1px solid rgba(255, 2, 5, 0.25);
          padding: 4px 12px;
          border-radius: 999px;
          letter-spacing: 0.1em;
          margin-bottom: 14px;
        }

        .destination-card h2 {
          font-size: clamp(24px, 4vw, 30px);
          margin: 0 0 12px;
          font-weight: 700;
          color: var(--black);
          letter-spacing: -0.01em;
        }

        .destination-card p {
          font-size: 15px;
          line-height: 1.55;
          color: #333333;
          max-width: 460px;
          margin: 0 auto 20px;
        }

        .destination-card p b {
          color: var(--black);
        }

        .cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--red-bright);
          color: #ffffff;
          font-weight: 600;
          font-size: 15.5px;
          padding: 14px 26px;
          border-radius: 10px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 0 14px 30px -10px var(--red-glow);
          transition: all 0.25s ease;
          font-family: var(--sans);
        }

        .cta:hover {
          background: var(--red);
          transform: translateY(-2px);
          box-shadow: 0 18px 36px -10px rgba(255, 2, 5, 0.8);
        }

        .roadmap-end-tag {
          text-align: center;
          padding: 16px 24px 8px;
          color: var(--muted);
          font-family: var(--mono);
          font-size: 11.5px;
          letter-spacing: 0.08em;
          opacity: 0.8;
        }

        /* ---------- Quiz Modal ---------- */
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
          background: var(--ink);
          border: 1px solid var(--red-border);
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
          color: var(--muted);
          cursor: pointer;
          padding: 4px;
          transition: color 0.2s;
        }

        .quizCloseBtn:hover {
          color: #ffffff;
        }

        .quizOptionCard {
          background: #111111;
          border: 1px solid var(--line);
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
          border-color: var(--red-bright);
          background: #161616;
          transform: translateX(4px);
        }

        /* ---------- Responsive Behavior ---------- */
        @media (max-width: 900px) {
          .trackPillSliderWrapper {
            overflow: hidden;
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            padding: 4px 0 10px 0;
          }

          .trackPillContainer {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x proximity;
            justify-content: flex-start;
            padding: 4px 20px 10px 20px;
            gap: 10px;
            scrollbar-width: none;
          }

          .trackPillContainer::-webkit-scrollbar {
            display: none;
          }

          .trackPill {
            scroll-snap-align: start;
            padding: 9px 18px;
            font-size: 13px;
          }

          .level-card {
            width: min(390px, calc(50% - 32px));
            padding: 18px 18px 16px;
          }
          .level-title {
            font-size: 19px;
          }
        }

        @media (max-width: 760px) {
          .roadmap {
            padding: 0 10px 30px;
          }
          .level-row {
            padding: 14px 0;
            width: 100%;
          }
          .level-card {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            padding: 20px 20px 18px;
            box-sizing: border-box;
          }
          .destination-card {
            padding: 28px 20px;
          }
          .summaryContentLeft {
            flex: 1 1 100%;
            min-width: 0;
          }
          .summaryTitle {
            font-size: 22px;
          }
          .summaryDesc {
            font-size: 13.5px;
          }
          .summaryMetaContainer {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .summaryMetaCard {
            padding: 10px 12px;
            gap: 10px;
          }
          .metaIconWrap {
            width: 32px;
            height: 32px;
          }
          .metaValue {
            font-size: 13px;
          }
        }

        @media (max-width: 520px) {
          .summaryMetaContainer {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .summaryMetaCard {
            padding: 11px 14px;
          }
          .level-card {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            padding: 18px 16px 16px;
          }
          .level-title {
            font-size: 18px;
          }
          .level-desc {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}

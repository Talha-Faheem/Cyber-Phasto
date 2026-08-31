import React from 'react';
import { 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Terminal, 
  Cloud, 
  Clock, 
  Briefcase 
} from 'lucide-react';
import { careerPathsData } from '../../data/coursesData';

const getTrackIcon = (iconName) => {
  switch (iconName) {
    case 'code': return <Code2 size={16} />;
    case 'shield': return <ShieldCheck size={16} />;
    case 'brain': return <Cpu size={16} />;
    case 'database': return <Database size={16} />;
    case 'cpu': return <Terminal size={16} />;
    case 'cloud': return <Cloud size={16} />;
    default: return <Code2 size={16} />;
  }
};

export default function TrackSelector({
  selectedPathId,
  setSelectedPathId,
  activePath
}) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current) {
      const activeEl = containerRef.current.querySelector('.trackPill.active');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedPathId]);

  return (
    <section style={{ padding: '24px 0 24px', position: 'relative', zIndex: 3 }}>
      <div className="container">
        
        {/* Horizontal Scrollable Track Selector Slider */}
        <div className="trackPillSliderWrapper">
          <div className="trackPillContainer" ref={containerRef}>
            {careerPathsData.map((path) => {
              const isSelected = path.id === selectedPathId;
              return (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setSelectedPathId(path.id)}
                  className={`trackPill ${isSelected ? 'active' : ''}`}
                >
                  <span className="trackPillIcon">{getTrackIcon(path.icon)}</span>
                  <span>{path.title}</span>
                  {isSelected && <span className="trackActiveDot" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean White Modern Roadmap Summary Box */}
        <div className="selectedPathSummaryBox">
          <div className="summaryContentLeft">
            <div className="summaryEyebrowRow">
              <span className="summaryTrackBadge">
                ACTIVE ROADMAP
              </span>
            </div>

            <h2 className="summaryTitle">
              {activePath.title}
            </h2>
            
            <p className="summaryDesc">
              {activePath.description}
            </p>
          </div>

          {/* Clean Spec Indicators (Duration & Career Outcome) */}
          <div className="summaryMetaContainer">
            {/* 1. Duration Module */}
            <div className="summaryMetaCard durationCard">
              <div className="metaIconWrap">
                <Clock size={18} strokeWidth={2} />
              </div>
              <div className="metaInfoCol">
                <div className="metaLabelRow">
                  <span className="metaLabel">ESTIMATED TIMELINE</span>
                </div>
                <span className="metaValue">{activePath.duration}</span>
              </div>
            </div>

            {/* 2. Target Outcome Module */}
            <div className="summaryMetaCard outcomeCard">
              <div className="metaIconWrap">
                <Briefcase size={18} strokeWidth={2} />
              </div>
              <div className="metaInfoCol">
                <div className="metaLabelRow">
                  <span className="metaLabel">CAREER OUTCOME</span>
                </div>
                <span className="metaValue">{activePath.finalRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

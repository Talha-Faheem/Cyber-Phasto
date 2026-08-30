import React from 'react';
import { 
  Code, 
  ShieldCheck, 
  Brain, 
  Database, 
  Cpu, 
  Cloud, 
  Sparkles, 
  Clock, 
  GraduationCap 
} from 'lucide-react';
import { careerPathsData } from '../../data/coursesData';

const getTrackIcon = (iconName) => {
  switch (iconName) {
    case 'code': return <Code size={18} />;
    case 'shield': return <ShieldCheck size={18} />;
    case 'brain': return <Brain size={18} />;
    case 'database': return <Database size={18} />;
    case 'cpu': return <Cpu size={18} />;
    case 'cloud': return <Cloud size={18} />;
    default: return <Sparkles size={18} />;
  }
};

export default function TrackSelector({
  selectedPathId,
  setSelectedPathId,
  activePath
}) {
  return (
    <section style={{ padding: '36px 0 20px', position: 'relative', zIndex: 3 }}>
      <div className="container">
        <div className="trackPillContainer">
          {careerPathsData.map((path) => {
            const isSelected = path.id === selectedPathId;
            return (
              <button
                key={path.id}
                onClick={() => setSelectedPathId(path.id)}
                className={`trackPill ${isSelected ? 'active' : ''}`}
              >
                <span className="trackPillIcon">{getTrackIcon(path.icon)}</span>
                <span>{path.title}</span>
              </button>
            );
          })}
        </div>

        <div className="selectedPathSummaryBox">
          <div className="summaryContentLeft">
            <h2 className="summaryTitle">
              {activePath.title}
            </h2>
            <p className="summaryDesc">
              {activePath.description}
            </p>
          </div>

          <div className="summaryMetaContainer">
            <div className="summaryMetaCard">
              <div className="metaIconWrap metaIconRed">
                <Clock size={16} />
              </div>
              <div className="metaInfoCol">
                <span className="metaLabel">ESTIMATED DURATION</span>
                <span className="metaValue">{activePath.duration}</span>
              </div>
            </div>

            <div className="summaryMetaCard">
              <div className="metaIconWrap metaIconGreen">
                <GraduationCap size={16} />
              </div>
              <div className="metaInfoCol">
                <span className="metaLabel">TARGET OUTCOME</span>
                <span className="metaValue">{activePath.finalRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

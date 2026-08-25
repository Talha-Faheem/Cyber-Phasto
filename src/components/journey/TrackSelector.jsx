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
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="mono" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.15em' }}>
                CAREER TRACK // {activePath.number}
              </span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>
              {activePath.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0, maxWidth: '600px', lineHeight: 1.5 }}>
              {activePath.description}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="summaryMetaBadge">
              <Clock size={13} style={{ color: 'var(--accent)' }} />
              <span>{activePath.duration}</span>
            </div>
            <div className="summaryMetaBadge">
              <GraduationCap size={13} style={{ color: '#22c55e' }} />
              <span>Target: <strong>{activePath.finalRole}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

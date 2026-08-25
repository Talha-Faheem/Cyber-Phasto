import React from 'react';
import { useNavigate } from 'react-router-dom';

const paths = [
  { number: '01 / 06', title: 'Frontend Engineer', desc: 'HTML → CSS → JavaScript → React → production interfaces.' },
  { number: '02 / 06', title: 'Full Stack Developer', desc: 'Frontend → backend → databases → APIs → deployment.' },
  { number: '03 / 06', title: 'Cybersecurity', desc: 'Networking → Linux → security fundamentals → defensive practice.' },
  { number: '04 / 06', title: 'AI Engineer', desc: 'Python → APIs → models → GenAI → intelligent products.' },
  { number: '05 / 06', title: 'Software Engineer', desc: 'Programming → OOP → DSA → architecture → engineering.' },
  { number: '06 / 06', title: 'Cloud & DevOps', desc: 'Linux → Docker → Kubernetes → Terraform → AWS cloud infrastructure.' }
];

export default function LearningPaths() {
  const navigate = useNavigate();

  return (
    <section className="paths" id="paths">
      <div className="container">
        <div className="tag">Learning paths</div>
        <h2 className="title">
          Don't know where to <span className="red">start?</span>
        </h2>
        <p className="sub">
          Pick the direction that matches where you want your career to go.
        </p>

        <div className="pathGrid">
          {paths.map((p, idx) => (
            <article 
              key={idx} 
              className="path" 
              onClick={() => navigate('/roadmap')} 
              style={{ cursor: 'pointer' }}
            >
              <small>PATH {p.number}</small>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="gradient-text font-mono text-[11px] font-bold mt-3 inline-block">
                View Roadmap →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

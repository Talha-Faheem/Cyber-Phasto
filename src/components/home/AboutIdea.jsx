import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutIdea() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="aboutGrid">
          <div>
            <div className="tag">The idea</div>
            <h2>
              Technology should be <span className="red">accessible.</span>
            </h2>
            <p>
              CyberPashto exists to make modern technology education more practical, understandable,
              and accessible. We combine structured learning with projects, community, events,
              and real-world experimentation.
            </p>
            <p>
              Whether you're writing your first line of code or preparing to build a serious product,
              the goal is simple: give you the skills and confidence to move.
            </p>
            <Link 
              className="btn primary" 
              to="/roadmap" 
              style={{ marginTop: '10px' }}
            >
              Explore Learning Paths →
            </Link>
          </div>

          <div className="aboutVisual">
            <div className="code">
              <b>const</b> future = &#123;<br />
              &nbsp;&nbsp;<span>learn</span>: true,<br />
              &nbsp;&nbsp;<span>build</span>: true,<br />
              &nbsp;&nbsp;<span>security</span>: "first",<br />
              &nbsp;&nbsp;<span>community</span>: "always",<br />
              &nbsp;&nbsp;<span>innovation</span>: true<br />
              &#125;;<br /><br />
              <b>future</b>.start();
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

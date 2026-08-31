import React from 'react';
import AnimatedCounter from '../common/AnimatedCounter';

export default function WhyCyberPashto() {
  return (
    <section className="section" id="future">
      <div className="container">
        <h2 className="title">
          A community built for the <span className="red">next generation.</span>
        </h2>
        <p className="sub">
          Not just another course website. A place to learn, experiment, attend events,
          build projects and grow with other people in tech.
        </p>

        <div className="future">
          <div className="futureGrid">
            <div className="metric">
              <div className="mono red">01 / LEARN</div>
              <div>
                <AnimatedCounter target={1000} suffix="+" />
                <p>Learners & community members</p>
              </div>
            </div>

            <div className="metric">
              <div className="mono red">02 / BUILD</div>
              <div>
                <AnimatedCounter target={100} suffix="+" />
                <p>Practical projects & resources</p>
              </div>
            </div>

            <div className="metric">
              <div className="mono red">03 / CONNECT</div>
              <div>
                <AnimatedCounter target={25} suffix="+" />
                <p>Sessions, workshops & events</p>
              </div>
            </div>

            <div className="metric">
              <div className="mono red">04 / GROW</div>
              <div>
                <div className="num">24/7</div>
                <p>Learning mindset & community support</p>
              </div>
            </div>
          </div>

          <div className="futureVisual">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="futureVisualVideo"
              poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4" type="video/mp4" />
              <source src="https://assets.mixkit.co/videos/preview/mixkit-matrix-style-green-code-lines-on-a-black-screen-40742-large.mp4" type="video/mp4" />
            </video>
            <div className="futureVisualOverlay" />

            <div className="futureVisualTop">
              <div className="corner">
                <span className="pulse" />
                CYBERPASHTO / PESHAWAR
              </div>
              <div className="mono" style={{ fontSize: '10px', color: 'var(--red-bright)', background: 'var(--red-subtle)', padding: '3px 8px', borderRadius: '4px' }}>
                LIVE HUB
              </div>
            </div>

            <div className="futureVisualCenter">
              <div className="futureVisualGlassCard">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  <span className="mono" style={{ fontSize: '11px', color: '#fff', fontWeight: '700' }}>
                    ENGINEERING ECOSYSTEM
                  </span>
                </div>
                <p className="mono" style={{ margin: '0 0 6px', fontSize: '11px', color: 'var(--muted)' }}>
                  &gt; <span style={{ color: 'var(--red-bright)' }}>dev_stack:</span> Web, Cyber, AI &amp; Cloud<br />
                  &gt; <span style={{ color: 'var(--red-bright)' }}>learning_mode:</span> 100% Practical Labs<br />
                  &gt; <span style={{ color: 'var(--red-bright)' }}>community:</span> Active in KP, Pakistan
                </p>
              </div>
            </div>

            <div className="futureVisualBottom">
              <strong style={{ fontSize: '32px', letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>
                CP<span className="red">.</span>
              </strong>
              <div className="visualTag">
                EST. 2026<br />
                LEARN — BUILD — SECURE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

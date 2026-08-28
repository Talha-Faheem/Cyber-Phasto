import React from 'react';

export default function FinalCta({ handleAction }) {
  return (
    <section className="final" id="cta">
      <div className="finalBackdrop" aria-hidden="true">
        <div className="finalBlurCard">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=70" alt="" />
          <div className="finalBlurCardBadge">WEB DEV</div>
        </div>
        <div className="finalBlurCard">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=70" alt="" />
          <div className="finalBlurCardBadge">CYBERSECURITY</div>
        </div>
        <div className="finalBlurCard">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=70" alt="" />
          <div className="finalBlurCardBadge">GEN AI</div>
        </div>
        <div className="finalBlurCard">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=70" alt="" />
          <div className="finalBlurCardBadge">COMMUNITY</div>
        </div>
        <div className="finalBlurCard">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=70" alt="" />
          <div className="finalBlurCardBadge">HACKATHON</div>
        </div>
        <div className="finalBlurCard">
          <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=70" alt="" />
          <div className="finalBlurCardBadge">KEYNOTES</div>
        </div>
        <div className="finalBlurCard">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=70" alt="" />
          <div className="finalBlurCardBadge">LABS</div>
        </div>
        <div className="finalBlurCard">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=70" alt="" />
          <div className="finalBlurCardBadge">MEETUPS</div>
        </div>
      </div>

      <div className="finalVignette" aria-hidden="true" />

      <div className="container finalContent">
        <h2>
          YOUR NEXT<br />
          <span>BUILD</span> STARTS HERE.
        </h2>
        <p>Learn the skill. Build the project. Join the community. Keep moving.</p>
        <div style={{ marginTop: '35px' }}>
          <button 
            onClick={(e) => handleAction('admission', e)} 
            className="btn primary"
            style={{ padding: '14px 34px', fontSize: '15px' }}
          >
            Start Learning →
          </button>
        </div>
      </div>
    </section>
  );
}

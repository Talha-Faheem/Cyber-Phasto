import React from 'react';

export default function ImpactSection({ handleAction }) {
  return (
    <section className="section" id="impact">
      <div className="container">
        <h2 className="title">
          From <span className="red">curiosity</span> to capability.
        </h2>
        <p className="sub">
          Different ways to enter technology. One mindset: learn by doing.
        </p>

        <div className="impactGrid">
          <article 
            className="impact"
            onClick={(e) => handleAction('admission', e)}
          >
            <div className="impactImgWrapper">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80" 
                alt="Web Development" 
                className="impactImg" 
                loading="lazy" 
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'; }}
              />
            </div>
            <div className="impactOverlay" />
            <div className="impactNum">01</div>
            <div className="impactInfo">
              <h3>Web Development</h3>
              <p>Build modern interfaces, APIs, databases and complete products.</p>
            </div>
          </article>

          <article 
            className="impact"
            onClick={(e) => handleAction('admission', e)}
          >
            <div className="impactImgWrapper">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity" 
                className="impactImg" 
                loading="lazy" 
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'; }}
              />
            </div>
            <div className="impactOverlay" />
            <div className="impactNum">02</div>
            <div className="impactInfo">
              <h3>Cybersecurity</h3>
              <p>Understand systems, threats, vulnerabilities and defensive security.</p>
            </div>
          </article>

          <article 
            className="impact"
            onClick={(e) => handleAction('admission', e)}
          >
            <div className="impactImgWrapper">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" 
                alt="Artificial Intelligence" 
                className="impactImg" 
                loading="lazy" 
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'; }}
              />
            </div>
            <div className="impactOverlay" />
            <div className="impactNum">03</div>
            <div className="impactInfo">
              <h3>Artificial Intelligence</h3>
              <p>Explore GenAI, APIs, automation and intelligent applications.</p>
            </div>
          </article>

          <article 
            className="impact"
            onClick={(e) => handleAction('admission', e)}
          >
            <div className="impactImgWrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Community & Events" 
                className="impactImg" 
                loading="lazy" 
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'; }}
              />
            </div>
            <div className="impactOverlay" />
            <div className="impactNum">04</div>
            <div className="impactInfo">
              <h3>Community &amp; Events</h3>
              <p>Learn with people through workshops, sessions and shared experiences.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

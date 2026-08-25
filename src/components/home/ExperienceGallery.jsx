import React from 'react';

const experienceCards = [
  {
    badge: 'Meet-ups',
    title: 'Meet And Greet',
    desc: 'Open conversations about careers, coding, bootcamps, internships, real-world engineering, and the journey.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    overlay: 'experienceCardOverlayWarm'
  },
  {
    badge: 'Keynotes',
    title: 'Auditorium Keynotes',
    desc: 'Interactive live sessions with senior software engineers, founders, and cybersecurity specialists.',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    overlay: 'experienceCardOverlayDark'
  },
  {
    badge: 'Workshops',
    title: 'Hands-On Coding Labs',
    desc: 'Collaborative practical labs turning syntax and concepts into deployed apps, APIs, and microservices.',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    overlay: 'experienceCardOverlayWarm'
  },
  {
    badge: 'Hackathons',
    title: 'Build Under Pressure',
    desc: 'Solve real-world problems through 48-hour collaborative engineering challenges and hackathons.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    overlay: 'experienceCardOverlayDark'
  },
  {
    badge: 'Community',
    title: 'Community Hangout',
    desc: 'Grow your network, share ideas, and connect with lifelong peers and builders across Pakistan.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    overlay: 'experienceCardOverlayWarm'
  },
  {
    badge: 'Cybersecurity',
    title: 'Defense & CTF Arenas',
    desc: 'Simulate live penetration testing, threat hunting, vulnerability triaging, and security operations.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    overlay: 'experienceCardOverlayDark'
  }
];

export default function ExperienceGallery({
  experienceSectionRef,
  galleryRef,
  scrollGallery,
  handleMouseDown,
  handleMouseLeave,
  handleMouseUp,
  handleMouseMove,
  handleAction
}) {
  return (
    <section className="experienceSection" id="experience" ref={experienceSectionRef}>
      <div className="experienceGridBg" />
      <div className="experienceGlowRed" />
      <div className="experienceGlowCyan" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="tag" style={{ color: '#ff5a5c' }}>CYBERPASHTO / EXPERIENCE</div>
        <h2 className="title">
          Learn beyond the <span className="red">screen.</span>
        </h2>
        <p className="sub">
          Explore the people, environments, projects and experiences that turn technology learning
          into something real.
        </p>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
          <button 
            onClick={() => scrollGallery('left')}
            className="experienceCardCircleBtn"
            style={{ width: '40px', height: '40px', fontSize: '14px' }}
            title="Scroll Left"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button 
            onClick={() => scrollGallery('right')}
            className="experienceCardCircleBtn"
            style={{ width: '40px', height: '40px', fontSize: '14px' }}
            title="Scroll Right"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      <div className="experienceGalleryWrapper">
        <div 
          className="experienceGalleryTrack" 
          ref={galleryRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {experienceCards.map((card, idx) => (
            <article 
              key={idx} 
              className="experienceCard"
              onClick={(e) => handleAction('#courses', e)}
            >
              <img 
                src={card.img} 
                alt={card.title} 
                className="experienceCardImg"
                loading="lazy"
              />
              <div className="experienceCardDefaultOverlay" />
              <div className="experienceCardOrangeHoverOverlay" />

              <div className="experienceCardTop">
                <div className="experiencePillBadge">
                  <span>{card.badge}</span>
                </div>
                <div className="experienceCardCircleBtn" aria-label="Open course">
                  →
                </div>
              </div>
              <div className="experienceCardBottom">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

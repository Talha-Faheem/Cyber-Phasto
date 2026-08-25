import React from 'react';

const events = [
  {
    type: 'WORKSHOP',
    title: 'Cybersecurity 101',
    desc: 'Understand the security mindset, threat models & defense.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'SESSION',
    title: 'Build with AI',
    desc: 'Turn modern AI APIs, models & automation into products.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'COMMUNITY',
    title: 'Developer Meetup',
    desc: 'Meet, collaborate, code live and build alongside others.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'BOOTCAMP',
    title: 'Web Development',
    desc: 'From first line of JavaScript to full-stack cloud deployment.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'HACKATHON',
    title: 'Code & Build Sprint',
    desc: '48-hour collaborative challenge solving real engineering problems.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'WORKSHOP',
    title: 'Open Source & Git',
    desc: 'Master CI/CD workflows, pull requests and open collaboration.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'WORKSHOP',
    title: 'Cybersecurity 101',
    desc: 'Understand the security mindset, threat models & defense.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'SESSION',
    title: 'Build with AI',
    desc: 'Turn modern AI APIs, models & automation into products.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'COMMUNITY',
    title: 'Developer Meetup',
    desc: 'Meet, collaborate, code live and build alongside others.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'BOOTCAMP',
    title: 'Web Development',
    desc: 'From first line of JavaScript to full-stack cloud deployment.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'HACKATHON',
    title: 'Code & Build Sprint',
    desc: '48-hour collaborative challenge solving real engineering problems.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    type: 'WORKSHOP',
    title: 'Open Source & Git',
    desc: 'Master CI/CD workflows, pull requests and open collaboration.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80'
  }
];

export default function EventsMarquee({ handleAction }) {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="tag">Events & workshops</div>
        <h2 className="title">
          Learn beyond the <span className="red">classroom.</span>
        </h2>
        <p className="sub">
          Sessions, workshops and community experiences designed around current technology.
        </p>
      </div>

      <div className="eventsMarqueeWrapper">
        <div className="eventsMarqueeTrack">
          {events.map((ev, idx) => (
            <article 
              key={idx} 
              className="eventCard"
              onClick={(e) => handleAction('admission', e)}
            >
              <div className="eventCardImgWrapper">
                <img 
                  src={ev.image} 
                  alt={ev.title} 
                  className="eventCardImg" 
                  loading="lazy" 
                />
              </div>
              <div className="eventCardOverlay" />

              <div className="eventCardTop">
                <span className="eventTagBadge">{ev.type}</span>
              </div>
              <div className="eventCardBottom">
                <h3>{ev.title}</h3>
                <p>{ev.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

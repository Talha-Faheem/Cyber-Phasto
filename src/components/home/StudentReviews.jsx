import React from 'react';

const reviewsRow1 = [
  {
    name: "Ahmad Khan",
    role: "Software Developer",
    avatar: "A",
    stars: "★★★★★",
    text: "I'd watched a hundred tutorials and built nothing. First week here I shipped a real login form and actually understood every line of it."
  },
  {
    name: "Sara Wazir",
    role: "CS Student",
    avatar: "S",
    stars: "★★★★★",
    text: "Half of what I learned in my degree finally clicked once I had to build something instead of just reading slides about it."
  },
  {
    name: "Hamza Afridi",
    role: "Frontend Developer",
    avatar: "H",
    stars: "★★★★★",
    text: "The best part isn't the course content, honestly. It's that people actually answer your questions at 1am."
  },
  {
    name: "Maryam Noor",
    role: "AI Learner",
    avatar: "M",
    stars: "★★★★★",
    text: "I came in scared of the math side of AI. Left knowing how to wire an API into something that actually does things."
  },
  {
    name: "Zubair Khan",
    role: "Cybersecurity Learner",
    avatar: "Z",
    stars: "★★★★★",
    text: "Nobody made me feel dumb for asking how a firewall actually works. That alone kept me showing up."
  },
  {
    name: "Bilal Hassan",
    role: "Bug Bounty Researcher",
    avatar: "B",
    stars: "★★★★★",
    text: "Reported my first valid vulnerability within 4 weeks of the web security labs. The methodology is pure gold."
  },
  {
    name: "Ahmad Khan",
    role: "Software Developer",
    avatar: "A",
    stars: "★★★★★",
    text: "I'd watched a hundred tutorials and built nothing. First week here I shipped a real login form and actually understood every line of it."
  },
  {
    name: "Sara Wazir",
    role: "CS Student",
    avatar: "S",
    stars: "★★★★★",
    text: "Half of what I learned in my degree finally clicked once I had to build something instead of just reading slides about it."
  },
  {
    name: "Hamza Afridi",
    role: "Frontend Developer",
    avatar: "H",
    stars: "★★★★★",
    text: "The best part isn't the course content, honestly. It's that people actually answer your questions at 1am."
  },
  {
    name: "Maryam Noor",
    role: "AI Learner",
    avatar: "M",
    stars: "★★★★★",
    text: "I came in scared of the math side of AI. Left knowing how to wire an API into something that actually does things."
  },
  {
    name: "Zubair Khan",
    role: "Cybersecurity Learner",
    avatar: "Z",
    stars: "★★★★★",
    text: "Nobody made me feel dumb for asking how a firewall actually works. That alone kept me showing up."
  },
  {
    name: "Bilal Hassan",
    role: "Bug Bounty Researcher",
    avatar: "B",
    stars: "★★★★★",
    text: "Reported my first valid vulnerability within 4 weeks of the web security labs. The methodology is pure gold."
  }
];

const reviewsRow2 = [
  {
    name: "Muhammad Saad",
    role: "Junior Penetration Tester",
    avatar: "M",
    stars: "★★★★★",
    text: "The hands-on offensive labs helped me pass my technical interview on the spot. Real environment experience matters."
  },
  {
    name: "Zainab Ahmed",
    role: "Full Stack Engineer",
    avatar: "Z",
    stars: "★★★★★",
    text: "Building production React and Node backends gave me the portfolio I needed to land remote contracts in USD."
  },
  {
    name: "Usman Ali",
    role: "SOC Analyst",
    avatar: "U",
    stars: "★★★★★",
    text: "The SIEM monitoring and incident response case studies were 100% practical. No boring theory—pure threat defense."
  },
  {
    name: "Ayesha Khan",
    role: "Cloud Security Specialist",
    avatar: "A",
    stars: "★★★★★",
    text: "Docker, Kubernetes, and AWS architecture made complete sense once we deployed live microservices."
  },
  {
    name: "Tariq Mehmood",
    role: "Backend Architect",
    avatar: "T",
    stars: "★★★★★",
    text: "Concurrency in Go and distributed system design was explained better here than in my 4-year degree."
  },
  {
    name: "Sana Rehman",
    role: "Cyber Researcher",
    avatar: "S",
    stars: "★★★★★",
    text: "The community support and mentorship gave me the confidence to publish security research and lead workshops."
  },
  {
    name: "Muhammad Saad",
    role: "Junior Penetration Tester",
    avatar: "M",
    stars: "★★★★★",
    text: "The hands-on offensive labs helped me pass my technical interview on the spot. Real environment experience matters."
  },
  {
    name: "Zainab Ahmed",
    role: "Full Stack Engineer",
    avatar: "Z",
    stars: "★★★★★",
    text: "Building production React and Node backends gave me the portfolio I needed to land remote contracts in USD."
  },
  {
    name: "Usman Ali",
    role: "SOC Analyst",
    avatar: "U",
    stars: "★★★★★",
    text: "The SIEM monitoring and incident response case studies were 100% practical. No boring theory—pure threat defense."
  },
  {
    name: "Ayesha Khan",
    role: "Cloud Security Specialist",
    avatar: "A",
    stars: "★★★★★",
    text: "Docker, Kubernetes, and AWS architecture made complete sense once we deployed live microservices."
  },
  {
    name: "Tariq Mehmood",
    role: "Backend Architect",
    avatar: "T",
    stars: "★★★★★",
    text: "Concurrency in Go and distributed system design was explained better here than in my 4-year degree."
  },
  {
    name: "Sana Rehman",
    role: "Cyber Researcher",
    avatar: "S",
    stars: "★★★★★",
    text: "The community support and mentorship gave me the confidence to publish security research and lead workshops."
  }
];

export default function StudentReviews() {
  return (
    <section className="reviews" id="stories">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="title">
          People don't just <span className="red">watch.</span><br />
          They build.
        </h2>
        <p className="sub">
          A community where practical progress matters.
        </p>
      </div>

      <div className="reviewsMarqueeContainer">
        <div className="reviewsShadowLeft" aria-hidden="true" />
        <div className="reviewsShadowRight" aria-hidden="true" />

        <div className="reviewTrack">
          {reviewsRow1.map((r, idx) => (
            <article key={idx} className="review">
              <div className="reviewHead">
                <div className="avatar">{r.avatar}</div>
                <div>
                  <h4>{r.name}</h4>
                  <small>{r.role}</small>
                </div>
              </div>
              <div className="stars">{r.stars}</div>
              <p>"{r.text}"</p>
            </article>
          ))}
        </div>

        <div className="reviewTrackReverse">
          {reviewsRow2.map((r, idx) => (
            <article key={idx} className="review">
              <div className="reviewHead">
                <div className="avatar">{r.avatar}</div>
                <div>
                  <h4>{r.name}</h4>
                  <small>{r.role}</small>
                </div>
              </div>
              <div className="stars">{r.stars}</div>
              <p>"{r.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

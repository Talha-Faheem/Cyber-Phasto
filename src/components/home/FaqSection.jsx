import React from 'react';

const faqItems = [
  {
    q: "Who are CyberPashto courses for?",
    a: "They are designed for students, beginners, and aspiring technology professionals who want practical skills that translate directly into projects, software development, and cybersecurity defense."
  },
  {
    q: "Do I receive a certificate?",
    a: "Yes! Every student who successfully completes their course curriculum, hands-on lab requirements, and capstone project receives an official verified CyberPashto certificate."
  },
  {
    q: "Are the courses project-based?",
    a: "Every course is built 100% around practical learning, projects, hands-on terminal labs, and real-world application rather than obsolete passive theory."
  },
  {
    q: "Can I learn if I am a complete beginner?",
    a: "Absolutely. Our learning paths and foundational modules start from ground zero and guide you systematically toward advanced competency."
  },
  {
    q: "How do I join CyberPashto?",
    a: "Choose a course or learning path, start your enrollment flow, or join our community events and campus chapters across Pakistan."
  }
];

export default function FaqSection({ openFaq, toggleFaq }) {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="tag">Faq</div>
        <h2 className="title">
          Questions?<br />
          We've got <span className="red">answers.</span>
        </h2>

        <div className="faqList">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className={`faqItem ${isOpen ? 'open' : ''}`}>
                <div 
                  className="faqQ" 
                  onClick={() => toggleFaq(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFaq(idx); }}
                >
                  {item.q}
                  <span className="plus">{isOpen ? '−' : '+'}</span>
                </div>
                <div className="faqAWrap">
                  <div className="faqA">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldQuestion } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What prerequisite knowledge do I need for Cyber Pashto Academy cohorts?',
      a: 'Our 3.0 Job Ready Cohort starts from foundational networking and Linux command-line basics before escalating to advanced penetration testing, Active Directory exploitation, and AI threat engineering. Beginners and intermediate learners are both welcome.'
    },
    {
      q: 'Are Cyber Pashto Academy certifications recognized by employers & SOCs?',
      a: 'Yes. Cyber Pashto certifications require passing a practical 24-hour hands-on lab exam where you perform real vulnerability analysis and submit professional audit reports. Our alumni work in top banks, SOCs, and tech firms.'
    },
    {
      q: 'How do I start or join a Cyber Pashto University Chapter on my campus?',
      a: 'If your university does not have an active chapter yet, you can apply through chapters.cyberpashto.com. We provide approved student leaders with official chapter charters, workshop slide decks, CTF platforms, and senior mentors.'
    },
    {
      q: 'What is the process for requesting an Enterprise VAPT Audit?',
      a: 'Click "Get in Touch" or "Request Consultation" on our website to submit your scope. Our senior red-team engineers will execute a non-disclosure agreement (NDA) and schedule a scoping call within 12 hours.'
    },
    {
      q: 'Do I get access to recording archives if I miss a live cohort session?',
      a: 'All live lectures, hands-on lab walkthroughs, and code repositories are permanently uploaded to your Cyber Pashto Academy LMS dashboard (cyberpashtopremium.com) with lifetime access.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--black)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '1rem' }}>
            Frequently Asked Questions <br />
            <span className="text-gradient-red">From Our Students & Clients</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>
            Everything you need to know about our courses, VAPT audits, LMS access, and university chapters.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="glass-panel"
                style={{
                  backgroundColor: 'var(--ink)',
                  border: isOpen ? '1px solid var(--red-bright)' : '1px solid var(--border)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  boxShadow: isOpen ? '0 10px 30px var(--red-glow)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    textAlign: 'left',
                    fontSize: '1.05rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      color: isOpen ? 'var(--red-bright)' : 'var(--muted)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }} 
                  />
                </button>

                {isOpen && (
                  <div 
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: 'var(--muted)',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border)',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

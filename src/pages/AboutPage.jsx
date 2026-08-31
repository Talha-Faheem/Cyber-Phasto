import React, { useState, useEffect, useRef } from 'react';
import HomeBackground from '../components/home/HomeBackground';
import Counter from '../components/common/Counter';
import { 
  CheckCircle2, 
  ChevronDown
} from 'lucide-react';

const milestones = [
  {
    step: '01',
    title: 'ACCESS',
    headline: 'Democratizing World-Class Tech Education',
    desc: 'Removing geographical and financial barriers for students across Khyber Pakhtunkhwa and Pakistan through free and accessible digital foundations.',
    threshold: 0.15
  },
  {
    step: '02',
    title: 'LEARN',
    headline: 'Practical, Hands-On Curriculum',
    desc: 'Moving away from obsolete rote theory into active Linux environments, real Python tools, and structured cybersecurity roadmaps.',
    threshold: 0.35
  },
  {
    step: '03',
    title: 'PRACTICE',
    headline: 'Virtual Labs & Adversary CTFs',
    desc: 'Students test their skills in live offensive labs, vulnerable virtual machines, and national jeopardy CTF competitions.',
    threshold: 0.55
  },
  {
    step: '04',
    title: 'COMMUNITY',
    headline: '25+ University Chapters & Fellowship',
    desc: 'A thriving nationwide network of 50,000+ peers, campus chapter leads, female tech leaders, and seasoned industry mentors.',
    threshold: 0.75
  },
  {
    step: '05',
    title: 'CAREER',
    headline: 'Enterprise Readiness & Global Remote Work',
    desc: 'Graduates land high-impact roles in SOC analysis, penetration testing, software engineering, and international freelance platforms.',
    threshold: 0.92
  }
];

const teamMembers = [
  {
    name: 'Engr. Muhammad Suleman',
    role: 'Founder & Academic Director',
    bio: 'Pioneered Cyber Pashto in 2017 to empower youths with modern offensive security, ethical hacking, and practical software engineering.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Tariq Khattak',
    role: 'Lead Red Team & VAPT Instructor',
    bio: 'Specializes in Active Directory penetration testing, cloud CSPM security audits, and zero-day threat analysis.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Fatima Rehman',
    role: 'Director of Women in Cybersecurity',
    bio: 'Leads student chapter expansion across 25+ universities and organizes female cybersecurity leadership summits.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Hamza Shah',
    role: 'SOC Operations & Threat Hunting Lead',
    bio: 'Oversees 24/7 SIEM monitoring telemetry, incident response retainers, and threat intelligence curriculum.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }
];

const faqs = [
  {
    q: 'What is Cyber Pashto Premium?',
    a: 'Cyber Pashto Premium is Pakistan’s leading cybersecurity enterprise services firm, threat research authority, and technology academy established in 2017 in Khyber Pakhtunkhwa.'
  },
  {
    q: 'Are online courses accessible to complete beginners?',
    a: 'Yes! Our Level 1 foundational courses (Cybersecurity Foundations, Python for Beginners, Linux Basics) start from absolute zero and systematically build practical competency without requiring prior coding experience.'
  },
  {
    q: 'How does the certification verification work?',
    a: 'Every graduate who completes course projects and laboratory evaluations receives a cryptographically verifiable digital certificate indexed directly on the Cyber Pashto registry for prospective employers.'
  },
  {
    q: 'Are onsite classes available?',
    a: 'Yes, in addition to our online LMS platform, Cyber Pashto conducts onsite bootcamps, workshops, and student chapter hackathons across major university campuses and regional hubs.'
  }
];

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [journeyProgress, setJourneyProgress] = useState(0);
  const journeySectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!journeySectionRef.current) return;
      const rect = journeySectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDistance = rect.height - windowHeight;
      if (totalDistance > 0) {
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / totalDistance));
        setJourneyProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="aboutPageWrapper bg-[var(--black)] pt-28 pb-24 min-h-screen text-white w-full relative overflow-x-hidden">
      <HomeBackground />
      <section className="container" style={{ textAlign: 'center', maxWidth: '900px', marginBottom: '4.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.15, color: '#FFFFFF' }}>
          EMPOWERING THE <span className="text-gradient-red">NEXT GENERATION.</span>
        </h1>
        <p style={{ color: 'var(--paper)', fontSize: '1.15rem', lineHeight: 1.65, maxWidth: '780px', margin: '0 auto' }}>
          Making world-class technology education, offensive security labs, and high-income digital careers 
          accessible to every aspiring engineer across Pakistan.
        </p>
      </section>

      <section className="container" style={{ marginBottom: '6rem' }}>
        <div 
          className="browser-window"
          style={{
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            backgroundColor: 'var(--ink)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          <div>
            <span className="mono-text" style={{ fontSize: '0.78rem', color: 'var(--red-bright)', letterSpacing: '0.1em' }}>
              OUR MISSION SINCE 2017
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', margin: '0.75rem 0 1.25rem 0', color: '#FFFFFF' }}>
              From Regional Roots to National Impact
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Founded in Khyber Pakhtunkhwa, Cyber Pashto was born from a vital realization: 
              talent is everywhere, but top-tier cybersecurity infrastructure and mentorship were severely concentrated in elite circles.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.98rem', lineHeight: 1.7 }}>
              Over the last eight years, we have built a vibrant ecosystem of 50,000+ registered learners, 25+ university security chapters, 
              and enterprise penetration testing services trusted by industry leaders across Pakistan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'var(--black)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                <Counter end={50000} suffix="+" />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>Active Learners</span>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'var(--black)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                <Counter end={25} suffix="+" />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>University Chapters</span>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'var(--black)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                <Counter end={150} suffix="+" />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>Enterprise Audits</span>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: 'var(--black)', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                <Counter end={25000} suffix="+" />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>Certified Graduates</span>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={journeySectionRef} 
        className="container" 
        style={{ 
          marginTop: '4rem', 
          marginBottom: '6rem',
          position: 'relative'
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#FFFFFF' }}>
            The Student <span className="text-gradient-red">Journey Line</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            As you progress through Cyber Pashto, each milestone builds toward enterprise mastery and career readiness.
          </p>
        </div>

        <div 
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2rem 0'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '32px',
              width: '3px',
              backgroundColor: 'var(--border)',
              borderRadius: '2px'
            }}
          >
            <div
              style={{
                width: '100%',
                height: `${Math.max(10, Math.min(100, journeyProgress * 100))}%`,
                backgroundColor: 'var(--red)',
                boxShadow: '0 0 12px var(--red-glow)',
                borderRadius: '2px',
                transition: 'height 0.15s ease-out'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {milestones.map((m, idx) => {
              const isPassed = journeyProgress >= m.threshold || idx === 0;
              return (
                <div
                  key={m.step}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: isPassed ? 'var(--red)' : 'var(--ink)',
                      border: isPassed ? '3px solid #FFFFFF' : '2px solid var(--border)',
                      color: isPassed ? '#FFFFFF' : 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      flexShrink: 0,
                      boxShadow: isPassed ? '0 0 20px var(--red-glow)' : 'none',
                      transition: 'all 0.4s ease',
                      zIndex: 2
                    }}
                  >
                    {m.step}
                  </div>

                  <div
                    className="browser-window"
                    style={{
                      flex: 1,
                      padding: '1.75rem 2rem',
                      backgroundColor: 'var(--ink)',
                      border: isPassed ? '1px solid var(--red)' : '1px solid var(--border)',
                      borderRadius: '18px',
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span 
                        className="mono-text" 
                        style={{ 
                          fontSize: '0.78rem', 
                          fontWeight: 700, 
                          color: isPassed ? 'var(--red-bright)' : 'var(--muted)' 
                        }}
                      >
                        MILESTONE // {m.title}
                      </span>
                      {isPassed && <CheckCircle2 size={16} style={{ color: 'var(--red-bright)' }} />}
                    </div>

                    <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.65rem' }}>
                      {m.headline}
                    </h3>
                    <p style={{ color: 'var(--paper)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: '4rem', marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF' }}>Meet the Faculty</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="browser-window"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--ink)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                textAlign: 'center'
              }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 1.25rem auto',
                  border: '2px solid var(--red)'
                }}
              />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem', color: '#FFFFFF' }}>{member.name}</h3>
              <span className="mono-text" style={{ fontSize: '0.78rem', color: 'var(--red-bright)', display: 'block', marginBottom: '1rem' }}>
                {member.role}
              </span>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ maxWidth: '850px', marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF' }}>Got Questions? We Have Answers.</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx}
                className="browser-window"
                style={{
                  backgroundColor: 'var(--ink)',
                  border: isOpen ? '1px solid var(--red)' : '1px solid var(--border)',
                  borderRadius: '14px',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    fontWeight: 700
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      color: 'var(--red-bright)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.25s ease' 
                    }} 
                  />
                </button>

                {isOpen && (
                  <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: 'var(--paper)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import Counter from '../common/Counter';
import { Maximize2, X, Calendar, MapPin, Users, Award, Shield, Eye } from 'lucide-react';

export default function CommunityGallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Gallery items inventory based on Cyber Pashto events
  const galleryItems = [
    {
      id: 1,
      title: 'CyberFest 2025 Flagship Conference',
      category: 'National Conference',
      date: 'January 2025',
      location: 'Peshawar, Khyber Pakhtunkhwa',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      desc: 'Pakistan’s largest regional cybersecurity summit gathering 3,000+ threat researchers, government delegates, and enterprise CISOs.',
      stats: '3,000+ Attendees • 18 Keynotes'
    },
    {
      id: 2,
      title: 'Women in Cybersecurity Empowerment',
      category: 'Initiative',
      date: 'November 2024',
      location: 'Islamabad & Peshawar',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
      desc: 'Dedicated mentorship workshops and hands-on reverse engineering bootcamps encouraging female engineers to join threat research.',
      stats: '850+ Female Researchers'
    },
    {
      id: 3,
      title: 'Live Offensive Hacking & VAPT Bootcamp',
      category: 'Hands-on Training',
      date: 'December 2024',
      location: 'Cyber Pashto Academy Labs',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      desc: 'Interactive red-teaming lab session training students on privilege escalation, Active Directory penetration testing, and zero-day triage.',
      stats: '1,200+ Active Trainees'
    },
    {
      id: 4,
      title: 'Youth Cyber Hygiene & School Seminar',
      category: 'Community Awareness',
      date: 'October 2024',
      location: 'KPK Regional Schools',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      desc: 'Educating high school students on digital safety, phishing prevention, and ethical technology usage to protect online identity.',
      stats: '5,000+ Youth Reached'
    },
    {
      id: 5,
      title: 'HackProof CTF Championship 2024',
      category: 'Capture The Flag',
      date: 'September 2024',
      location: 'University Chapters Network',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      desc: 'A 24-hour non-stop Jeopardy-style CTF challenge featuring web exploitation, cryptography, forensic analysis, and binary exploitation.',
      stats: '120 Teams Competing'
    },
    {
      id: 6,
      title: 'Red Team Live Adversary Simulation',
      category: 'Enterprise Demo',
      date: 'August 2024',
      location: 'Enterprise Threat Center',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      desc: 'Live crowd demonstration showcasing realistic cyber attack vectors and modern blue-team defensive countermeasures.',
      stats: 'Live Telemetry Briefing'
    },
    {
      id: 7,
      title: 'KPK Student Chapter Inauguration',
      category: 'Academic Expansion',
      date: 'July 2024',
      location: 'University of Peshawar',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      desc: 'Official launch of student-led cyber security chapters giving university students access to free security tools and mentorship.',
      stats: '25 Active Chapters'
    }
  ];

  return (
    <section id="highlights" className="section-padding" style={{ backgroundColor: '#07080a', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1rem' }}>
            Community <span className="text-gradient-red">Highlights</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            A glimpse into CyberFest summits, student chapter bootcamps, and nationwide security awareness campaigns.
          </p>
        </div>

        {/* Gallery Stat Callout Banner */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            padding: '1.75rem',
            backgroundColor: '#0a0b0e',
            border: '1px solid var(--accent-red-border)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--accent-red-subtle)', color: 'var(--accent-red-bright)' }}>
              <Users size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF' }}>
                <Counter end={98000} suffix="+" />
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Nationwide People Reached</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--accent-red-subtle)', color: 'var(--accent-red-bright)' }}>
              <Award size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-red-bright)' }}>
                <Counter end={25000} suffix="+" />
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Students & Engineers Trained</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--accent-red-subtle)', color: 'var(--accent-red-bright)' }}>
              <Shield size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF' }}>
                <Counter end={50} suffix="+" />
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Annual Events & Seminars</span>
            </div>
          </div>
        </div>

        {/* Masonry / Grid Gallery */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="gallery-card glass-panel"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '280px',
                cursor: 'pointer',
                border: '1px solid var(--border-card)'
              }}
            >
              {/* Background Image with Zoom */}
              <img 
                src={item.image} 
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="gallery-img"
              />

              {/* Gradient Dark Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(5, 5, 5, 0.95) 0%, rgba(5, 5, 5, 0.4) 50%, rgba(5, 5, 5, 0.1) 100%)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span 
                    className="mono-text"
                    style={{
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(229, 9, 20, 0.85)',
                      color: '#FFFFFF',
                      fontWeight: 700
                    }}
                  >
                    {item.category}
                  </span>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                    <Eye size={16} />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="gallery-caption">
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem', color: '#FFFFFF' }}>
                    {item.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <MapPin size={12} style={{ color: 'var(--accent-red-bright)' }} />
                      {item.location}
                    </span>
                    <span>•</span>
                    <span style={{ color: 'var(--accent-red-bright)' }}>{item.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Fullscreen Image Modal */}
      {selectedItem && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(5, 5, 5, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.25s ease'
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="glass-panel"
            style={{
              maxWidth: '850px',
              width: '100%',
              backgroundColor: '#0a0b0e',
              border: '1px solid var(--accent-red-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.95), 0 0 40px rgba(229,9,20,0.3)',
              animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', height: '360px', width: '100%' }}>
              <img src={selectedItem.image} alt={selectedItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button 
                onClick={() => setSelectedItem(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(5, 5, 5, 0.8)',
                  border: '1px solid var(--accent-red-border)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--accent-red-bright)', backgroundColor: 'var(--accent-red-subtle)', padding: '0.25rem 0.75rem', borderRadius: '4px', border: '1px solid var(--accent-red-border)' }}>
                  {selectedItem.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{selectedItem.date}</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{selectedItem.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {selectedItem.desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <MapPin size={16} style={{ color: 'var(--accent-red-bright)' }} />
                  <span>{selectedItem.location}</span>
                </div>
                <span className="mono-text" style={{ fontSize: '0.9rem', color: 'var(--accent-red-bright)', fontWeight: 700 }}>
                  {selectedItem.stats}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }
        .gallery-card:hover {
          border-color: var(--accent-red-bright) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.8), 0 0 25px rgba(229,9,20,0.2) !important;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}

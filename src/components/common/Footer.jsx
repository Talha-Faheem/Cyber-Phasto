import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Linkedin, 
  Youtube
} from 'lucide-react';

export default function Footer({ onOpenContact, onNavigate }) {
  const [mousePos, setMousePos] = useState({ x: 14.6202, y: 67.1726 });
  const [isHovered, setIsHovered] = useState(false);
  const watermarkRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!watermarkRef.current) return;
    const rect = watermarkRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y });
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!watermarkRef.current || !e.touches[0]) return;
    const rect = watermarkRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y });
    setIsHovered(true);
  }, []);

  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        paddingTop: '1rem',
        paddingBottom: '2.5rem',
        overflow: 'hidden',
        borderTop: '1px solid #1A1A1A'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div 
        ref={watermarkRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          cursor: 'default', 
          userSelect: 'none',
          zIndex: 2, 
          width: '100%',
          marginBottom: '3.5rem'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: isHovered
              ? `linear-gradient(90deg, transparent 0%, rgba(229, 0, 0, 0.15) ${Math.max(0, mousePos.x - 30)}%, rgba(229, 0, 0, 0.95) ${mousePos.x}%, rgba(229, 0, 0, 0.15) ${Math.min(100, mousePos.x + 30)}%, transparent 100%)`
              : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, rgba(229, 0, 0, 0.35) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 100%)',
            boxShadow: isHovered
              ? '0 0 15px rgba(229, 0, 0, 0.85), 0 0 30px rgba(229, 0, 0, 0.45)'
              : '0 0 10px rgba(229, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease'
          }}
        />

        <div 
          style={{
            fontSize: 'clamp(40px, 12.5vw, 200px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.9,
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundImage: `radial-gradient(320px at ${mousePos.x}% ${mousePos.y}%, rgba(229, 0, 0, 0.95) 0%, rgba(229, 0, 0, 0.55) 22%, rgba(229, 40, 0, 0.25) 45%, rgba(255, 255, 255, 0.07) 70%, transparent 100%)`,
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.18)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            padding: 'clamp(20px, 4vw, 40px) 0px clamp(16px, 3vw, 32px)',
            display: 'block',
            overflow: 'hidden',
            maxWidth: '100vw',
            opacity: 1,
            transform: 'none',
            fontFamily: 'var(--font-mono)'
          }}
        >
          CYBER PASHTO
        </div>

        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: isHovered
              ? `linear-gradient(90deg, transparent 0%, rgba(229, 0, 0, 0.15) ${Math.max(0, mousePos.x - 30)}%, rgba(229, 0, 0, 0.95) ${mousePos.x}%, rgba(229, 0, 0, 0.15) ${Math.min(100, mousePos.x + 30)}%, transparent 100%)`
              : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, rgba(229, 0, 0, 0.35) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 100%)',
            boxShadow: isHovered
              ? '0 0 15px rgba(229, 0, 0, 0.85), 0 0 30px rgba(229, 0, 0, 0.45)'
              : '0 0 10px rgba(229, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease'
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1.2fr 1fr',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
          className="footer-columns-grid"
        >
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ 
                fontFamily: 'var(--font-sans)', 
                fontWeight: 900, 
                fontSize: '22px', 
                letterSpacing: '-0.04em', 
                textTransform: 'uppercase',
                lineHeight: 1,
                display: 'inline-block'
              }}>
                <span style={{ color: '#FFFFFF' }}>CYBER</span>
                <span className="gradient-text">PASHTO.</span>
              </span>
            </div>

            <p style={{ color: '#8A8A8A', fontSize: '0.86rem', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: '300px' }}>
              Pakistan's premier cybersecurity community — empowering the next generation through education, local chapters, and professional services.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="Instagram">
                <Instagram size={17} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="YouTube">
                <Youtube size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 
              className="mono-text" 
              style={{ 
                fontSize: '0.78rem', 
                fontWeight: 700,
                color: '#8A8A8A', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em', 
                marginBottom: '1.25rem' 
              }}
            >
              ABOUT
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li>
                <Link to="/" className="footer-link-clean">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-clean">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="footer-link-clean">
                  Courses
                </Link>
              </li>
              <li>
                <a href="https://chapters.cyberpashto.com/" target="_blank" rel="noopener noreferrer" className="footer-link-clean">
                  Community
                </a>
              </li>
              <li>
                <Link to="/roadmap" className="footer-link-clean">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link-clean">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="mono-text" 
              style={{ 
                fontSize: '0.78rem', 
                fontWeight: 700,
                color: '#8A8A8A', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em', 
                marginBottom: '1.25rem' 
              }}
            >
              COMPANY
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li>
                <Link to="/services" className="footer-link-clean">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-clean">
                  Security Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-clean">
                  Vulnerability Assessment
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-clean">
                  Red Team Operations
                </Link>
              </li>
              <li>
                <button onClick={() => onOpenContact ? onOpenContact() : null} className="footer-link-clean">
                  Feedback
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="mono-text" 
              style={{ 
                fontSize: '0.78rem', 
                fontWeight: 700,
                color: '#8A8A8A', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em', 
                marginBottom: '1.25rem' 
              }}
            >
              CONTACT
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link-clean">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link-clean">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link-clean">
                  YouTube
                </a>
              </li>
              <li style={{ marginTop: '0.4rem' }}>
                <a href="mailto:contact@cyberpashto.com" className="footer-link-clean" style={{ color: '#D0D0D0', wordBreak: 'break-all' }}>
                  contact@cyberpashto.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#6E6E6E'
          }}
        >
          <div>
            © {new Date().getFullYear()} Cyber Pashto. All rights reserved.
          </div>

          <div 
            className="mono-text" 
            style={{ 
              fontSize: '0.74rem', 
              letterSpacing: '0.08em', 
              color: '#6E6E6E', 
              textTransform: 'uppercase' 
            }}
          >
            KHYBER PAKHTUNKHWA &nbsp; PAKISTAN
          </div>
        </div>
      </div>

      <style>{`
        .footer-link-clean {
          color: #8A8A8A;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          text-align: left;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link-clean:hover {
          color: #FFFFFF;
          transform: translateX(2px);
        }
        .social-square-btn {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #A0A0A0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .social-square-btn svg {
          display: block;
          margin: auto;
        }
        .social-square-btn:hover {
          background-color: rgba(255, 0, 0, 0.18);
          border-color: #FF0000;
          color: #FFFFFF;
          box-shadow: 0 0 16px rgba(255, 0, 0, 0.4);
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .footer-columns-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 580px) {
          .footer-columns-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

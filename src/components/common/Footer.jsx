import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Linkedin, 
  Youtube,
  Facebook,
  Twitter,
  Github
} from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
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

  return (
    <footer 
      style={{
        backgroundColor: 'var(--black)',
        position: 'relative',
        paddingTop: '0',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)'
      }}
    >
      {/* Background Dot Grid Matrix (32px x 32px) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(1px 1px, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* ===================================================================
          1. Interactive CYBER PASHTO Giant Watermark (No Underlines)
          =================================================================== */}
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
          padding: 'clamp(20px, 4vw, 40px) 0 clamp(16px, 3vw, 32px)'
        }}
      >
        {/* Ambient Glowing Orb Behind Watermark */}
        <div 
          style={{
            position: 'absolute',
            top: `${mousePos.y}%`,
            left: `${mousePos.x}%`,
            transform: 'translate(-50%, -50%)',
            width: '450px',
            height: '240px',
            background: 'radial-gradient(circle, rgba(229, 0, 0, 0.28) 0%, rgba(200, 0, 20, 0.08) 45%, transparent 75%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            zIndex: 1
          }}
        />

        {/* Watermark Typography matching reference image media_1788118524746.png */}
        <div 
          style={{
            width: '100%',
            maxWidth: '100vw',
            margin: '0 auto',
            padding: 'clamp(28px, 4.5vw, 56px) 1.5rem clamp(20px, 3.5vw, 44px)',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(48px, 10.4vw, 168px)',
              letterSpacing: '-0.015em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              display: 'block',
              width: '100%',
              userSelect: 'none',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.16)',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              backgroundImage: isHovered
                ? `radial-gradient(360px at ${mousePos.x}% ${mousePos.y}%, rgba(229, 0, 0, 0.95) 0%, rgba(229, 0, 0, 0.55) 24%, rgba(229, 0, 0, 0.2) 48%, rgba(255, 255, 255, 0.05) 72%, transparent 100%)`
                : `radial-gradient(420px at 15% 50%, rgba(229, 0, 0, 0.45) 0%, rgba(180, 0, 0, 0.2) 28%, rgba(255, 255, 255, 0.03) 55%, transparent 75%)`,
              transition: isHovered ? 'none' : 'background-image 0.4s ease',
              textRendering: 'geometricPrecision'
            }}
          >
            CYBER PASHTO
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. Lower Footer Content Container
          =================================================================== */}
      <div 
        className="relative z-10" 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'clamp(40px, 5vw, 64px) clamp(20px, 4vw, 56px) 0'
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1.2fr 1fr',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
          className="footer-columns-grid"
        >
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
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
                  <span style={{ color: 'var(--red)' }}> PASHTO.</span>
                </span>
              </Link>
            </div>

            <p style={{ color: 'var(--muted)', fontSize: '0.86rem', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: '300px' }}>
              Pakistan's premier cybersecurity community — empowering the next generation through education, local chapters, and professional defense services.
            </p>

            {/* Social Channels with Reduced Corner Radius */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a href="https://www.facebook.com/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="Facebook" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="Twitter" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="Instagram" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com/company/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="LinkedIn" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://youtube.com/@cyberpashto" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="YouTube" aria-label="YouTube">
                <Youtube size={16} />
              </a>
              <a href="https://github.com/cyberpashto" target="_blank" rel="noopener noreferrer" className="social-square-btn" title="GitHub" aria-label="GitHub">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 
              className="mono-text" 
              style={{ 
                fontSize: '0.78rem', 
                fontWeight: 700,
                color: 'var(--muted)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em', 
                marginBottom: '1.25rem' 
              }}
            >
              EXPLORE ACADEMY
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li>
                <Link to="/courses" className="footer-link-clean">
                  All Courses &amp; Certifications
                </Link>
              </li>
              <li>
                <Link to="/journey" className="footer-link-clean">
                  Zero to Professional Roadmap
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link-clean">
                  About Our Movement
                </Link>
              </li>
              <li>
                <a href="#initiatives" className="footer-link-clean">
                  Academic Portals &amp; Hackathons
                </a>
              </li>
              <li>
                <Link to="/contact" className="footer-link-clean">
                  Admission Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Training Column */}
          <div>
            <h4 
              className="mono-text" 
              style={{ 
                fontSize: '0.78rem', 
                fontWeight: 700,
                color: 'var(--muted)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em', 
                marginBottom: '1.25rem' 
              }}
            >
              SERVICES &amp; LABS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li>
                <Link to="/services" className="footer-link-clean">
                  Penetration Testing (VAPT)
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-clean">
                  Red Team Operations
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-clean">
                  Cloud Security Audit
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-clean">
                  SOC Operations &amp; SIEM
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => onOpenContact ? onOpenContact() : null} 
                  className="footer-link-clean"
                  style={{ cursor: 'pointer' }}
                >
                  Direct Inquiry / Feedback
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 
              className="mono-text" 
              style={{ 
                fontSize: '0.78rem', 
                fontWeight: 700,
                color: 'var(--muted)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.12em', 
                marginBottom: '1.25rem' 
              }}
            >
              DIRECT CONTACT
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li>
                <a href="mailto:support@cyberpashto.com" className="footer-link-clean" style={{ color: 'var(--paper)', wordBreak: 'break-all' }}>
                  support@cyberpashto.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/923255636856" target="_blank" rel="noopener noreferrer" className="footer-link-clean" style={{ color: 'var(--paper)' }}>
                  WhatsApp: 0325-5636856
                </a>
              </li>
              <li style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
                Chakdara &amp; Peshawar, KPK, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Geolocation */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            paddingBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--muted)'
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
              color: 'var(--muted)', 
              textTransform: 'uppercase' 
            }}
          >
            KHYBER PAKHTUNKHWA • PAKISTAN
          </div>
        </div>
      </div>

      <style>{`
        .footer-link-clean {
          color: var(--muted);
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
          width: 38px;
          height: 38px;
          border-radius: 6px;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          color: var(--muted);
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
          background-color: var(--red-subtle);
          border-color: var(--red);
          color: #FFFFFF;
          box-shadow: 0 0 16px var(--red-glow);
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

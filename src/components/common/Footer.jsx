import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
} from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenContact }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const watermarkRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!watermarkRef.current) return;
    const rect = watermarkRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y });
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!watermarkRef.current || !e.touches || !e.touches[0]) return;
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
        paddingBottom: '1.25rem',
        overflow: 'hidden',
        borderTop: 'none'
      }}
    >
      {/* Background Dot Grid Matrix (24px x 24px) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(1px 1px, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* ===================================================================
          1. Interactive CYBER PASHTO Spotlight Banner
          =================================================================== */}
      <div 
        ref={watermarkRef}
        onMouseEnter={(e) => {
          setIsHovered(true);
          handleMouseMove(e);
        }}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          setIsHovered(true);
          handleTouchMove(e);
        }}
        onTouchEnd={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
        className="spotlight-container w-full overflow-hidden relative select-none cursor-default bg-transparent group"
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem'
        }}
      >
        {/* Top Horizontal Laser Glow Line */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: isHovered
              ? `linear-gradient(90deg, transparent 0%, rgba(255, 2, 5, 0.15) ${Math.max(0, mousePos.x - 30)}%, #FF0205 ${mousePos.x}%, rgba(255, 2, 5, 0.15) ${Math.min(100, mousePos.x + 30)}%, transparent 100%)`
              : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, rgba(229, 0, 0, 0.35) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 100%)',
            boxShadow: isHovered
              ? '0 0 15px rgba(255, 2, 5, 0.85), 0 0 30px rgba(255, 2, 5, 0.45)'
              : '0 0 10px rgba(229, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          {/* Glowing Red Dot on the line that smoothly glides with cursor */}
          <div 
            style={{
              position: 'absolute',
              top: '-2.5px',
              left: `${mousePos.x}%`,
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#FF0205',
              boxShadow: '0 0 8px #FF0205, 0 0 16px #FF0205',
              opacity: isHovered ? 1 : 0.4,
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>

        {/* Dynamic Glowing Ambient Spotlight Orb that follows cursor */}
        <div 
          style={{
            position: 'absolute',
            top: `${mousePos.y}%`,
            left: `${mousePos.x}%`,
            transform: 'translate(-50%, -50%)',
            width: '450px',
            height: '240px',
            background: 'radial-gradient(circle, rgba(255, 2, 5, 0.35) 0%, rgba(200, 0, 20, 0.12) 45%, transparent 75%)',
            filter: 'blur(45px)',
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            zIndex: 1
          }}
        />

        {/* Spotlight Typography matching user provided exact design taking full width in ONE line */}
        <div 
          className="spotlight-text font-black text-center whitespace-nowrap w-full tracking-tighter transition-all duration-300 ease-out" 
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            fontSize: 'clamp(28px, 10.8vw, 195px)',
            width: '100%',
            maxWidth: '100%',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            padding: 'clamp(14px, 2.5vw, 32px) 0 clamp(10px, 2vw, 24px)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: isHovered ? '1.2px rgba(255, 2, 5, 0.55)' : '1px rgba(255, 255, 255, 0.22)',
            backgroundImage: isHovered
              ? `radial-gradient(460px circle at ${mousePos.x}% ${mousePos.y}%, #FF0205 0%, rgba(255, 2, 5, 0.45) 42%, transparent 75%)`
              : 'none',
            userSelect: 'none',
            position: 'relative',
            zIndex: 2,
            transition: 'all 0.3s cubic-bezier(0, 0, 0.2, 1)'
          }}
        >
          CYBER PASHTO
        </div>

        {/* Bottom Horizontal Laser Glow Line */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: isHovered
              ? `linear-gradient(90deg, transparent 0%, rgba(255, 2, 5, 0.15) ${Math.max(0, mousePos.x - 30)}%, #FF0205 ${mousePos.x}%, rgba(255, 2, 5, 0.15) ${Math.min(100, mousePos.x + 30)}%, transparent 100%)`
              : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, rgba(229, 0, 0, 0.35) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 100%)',
            boxShadow: isHovered
              ? '0 0 15px rgba(255, 2, 5, 0.85), 0 0 30px rgba(255, 2, 5, 0.45)'
              : '0 0 10px rgba(229, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          {/* Glowing Red Dot on the bottom line that smoothly glides with cursor */}
          <div 
            style={{
              position: 'absolute',
              bottom: '-2.5px',
              left: `${mousePos.x}%`,
              transform: 'translateX(-50%)',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#FF0205',
              boxShadow: '0 0 8px #FF0205, 0 0 16px #FF0205',
              opacity: isHovered ? 1 : 0.4,
              transition: 'opacity 0.3s ease'
            }}
          />
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
          padding: 'clamp(28px, 3.5vw, 44px) clamp(20px, 4vw, 56px) 0'
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1.2fr 1fr',
            gap: '2rem',
            marginBottom: '2rem'
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
        .spotlight-text {
          white-space: nowrap !important;
          word-break: keep-all !important;
          overflow-wrap: normal !important;
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

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

// Exact, mathematically unified vector paths for "CYBER PASHTO"
const CYBER_PASHTO_PATH = "M 153 10 L 82 10 C 60 10 45 25 45 46 L 45 74 C 45 95 60 110 82 110 L 153 110 L 153 88 L 86 88 C 74 88 67 81 67 71 L 67 49 C 67 39 74 32 86 32 L 153 32 Z M 171 10 L 195 10 L 225 56 L 255 10 L 279 10 L 236 68 L 236 110 L 214 110 L 214 68 Z M 297 10 L 362 10 C 382 10 395 20 395 38 C 395 49 387 57 374 59 C 390 62 397 71 397 86 C 397 102 382 110 362 110 L 297 110 Z M 319 28 L 358 28 C 368 28 373 32 373 40 C 373 48 368 52 358 52 L 319 52 Z M 319 68 L 360 68 C 371 68 376 72 376 81 C 376 90 371 94 360 94 L 319 94 Z M 415 10 L 507 10 L 507 30 L 437 30 L 437 50 L 499 50 L 499 70 L 437 70 L 437 90 L 507 90 L 507 110 L 415 110 Z M 525 10 L 592 10 C 614 10 629 23 629 40 C 629 53 618 62 602 65 L 629 110 L 604 110 L 579 66 L 547 66 L 547 110 L 525 110 Z M 547 28 L 588 28 C 601 28 608 32 608 42 C 608 51 601 55 588 55 L 547 55 Z M 683 10 L 752 10 C 774 10 783 23 783 42 C 783 61 774 72 752 72 L 705 72 L 705 110 L 683 110 Z M 705 28 L 748 28 C 759 28 764 32 764 42 C 764 51 759 55 748 55 L 705 55 Z M 801 110 L 824 110 L 840 72 L 874 72 L 890 110 L 913 110 L 868 10 L 846 10 Z M 857 34 L 869 56 L 845 56 Z M 1024 33 L 1004 33 C 1001 24 992 18 978 18 C 962 18 953 26 953 36 C 953 47 962 52 984 57 C 1010 63 1029 72 1029 90 C 1029 104 1015 110 980 110 C 950 110 933 98 931 83 L 952 83 C 955 94 966 99 980 99 C 998 99 1007 92 1007 81 C 1007 71 998 66 976 61 C 950 55 932 47 932 30 C 932 17 946 10 978 10 C 1008 10 1022 22 1024 33 Z M 1047 10 L 1069 10 L 1069 50 L 1127 50 L 1127 10 L 1149 10 L 1149 110 L 1127 110 L 1127 70 L 1069 70 L 1069 110 L 1047 110 Z M 1167 10 L 1265 10 L 1265 30 L 1227 30 L 1227 110 L 1205 110 L 1205 30 L 1167 30 Z M 1320 10 L 1356 10 C 1378 10 1393 25 1393 45 L 1393 75 C 1393 95 1378 110 1356 110 L 1320 110 C 1298 110 1283 95 1283 75 L 1283 45 C 1283 25 1298 10 1320 10 Z M 1323 30 C 1311 30 1305 37 1305 48 L 1305 72 C 1305 83 1311 90 1323 90 L 1353 90 C 1365 90 1371 83 1371 72 L 1371 48 C 1371 37 1365 30 1353 30 Z";

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
          1. Interactive CYBER PASHTO Vector Watermark with Top Laser Glow
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
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          width: '100%',
          cursor: 'default',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem'
        }}
      >
        {/* Top Horizontal Laser Glow Line matching reference image */}
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
            width: '480px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(255, 2, 5, 0.38) 0%, rgba(200, 0, 20, 0.14) 45%, transparent 75%)',
            filter: 'blur(45px)',
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            zIndex: 1
          }}
        />

        {/* Scalable, Crisp SVG Outline Typography with Zero Artifacts */}
        <div 
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1500px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block',
              overflow: 'visible'
            }}
          >
            <defs>
              <radialGradient
                id="footerWatermarkLaserFill"
                cx={`${mousePos.x}%`}
                cy={`${mousePos.y}%`}
                r="380px"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FF0205" stopOpacity="0.95" />
                <stop offset="22%" stopColor="#FF0205" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#B00000" stopOpacity="0.22" />
                <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>

              <radialGradient
                id="footerWatermarkLaserStroke"
                cx={`${mousePos.x}%`}
                cy={`${mousePos.y}%`}
                r="360px"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FF3B3E" stopOpacity="1" />
                <stop offset="25%" stopColor="#FF0205" stopOpacity="0.9" />
                <stop offset="55%" stopColor="rgba(255, 2, 5, 0.4)" stopOpacity="0.5" />
                <stop offset="85%" stopColor="rgba(255, 255, 255, 0.2)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.18)" stopOpacity="0.18" />
              </radialGradient>
            </defs>

            {/* Base Layer: Crisp Grayish / White Wireframe Outlines */}
            <path
              d={CYBER_PASHTO_PATH}
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1.2"
              strokeLinejoin="round"
              strokeLinecap="round"
              fillRule="evenodd"
            />

            {/* Interactive Spotlight Layer: Blazing Red Glowing Illumination */}
            <path
              d={CYBER_PASHTO_PATH}
              fill="url(#footerWatermarkLaserFill)"
              stroke="url(#footerWatermarkLaserStroke)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              fillRule="evenodd"
              filter={isHovered ? "drop-shadow(0 0 20px rgba(255, 2, 5, 0.65))" : "none"}
              style={{
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.25s ease'
              }}
            />
          </svg>
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

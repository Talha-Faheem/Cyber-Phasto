import React, { useState, useRef, useCallback } from 'react';

/**
 * BottomCta / CyberWatermarkBanner — Interactive Laser Glow Banner
 * Features:
 * 1. Default state: clean grayish / white wireframe stroked lines for "CYBER PASHTO".
 * 2. Interactive hover state: mouse-tracking glowing red circular spotlight that illuminates
 *    the exact letters and laser lines wherever the user hovers.
 */
export default function BottomCta() {
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
    <section 
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        overflow: 'hidden',
        borderTop: '1px solid #1A1A1A'
      }}
    >
      {/* Background Dot Grid Matrix */}
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

      {/* ===================================================================
          INTERACTIVE HOVER-GLOW "CYBER PASHTO" WATERMARK WITH SPATIAL GAPS
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
          zIndex: 2, 
          width: '100%',
          cursor: 'crosshair',
          paddingTop: '4rem',
          paddingBottom: '4rem'
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
              ? `linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.15) ${Math.max(0, mousePos.x - 30)}%, #FF0000 ${mousePos.x}%, rgba(255, 0, 0, 0.15) ${Math.min(100, mousePos.x + 30)}%, transparent 100%)`
              : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, rgba(255, 0, 0, 0.35) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 100%)',
            boxShadow: isHovered
              ? '0 0 15px rgba(255, 0, 0, 0.85), 0 0 30px rgba(255, 0, 0, 0.45)'
              : '0 0 10px rgba(255, 0, 0, 0.2)',
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
              backgroundColor: '#FF0000',
              boxShadow: '0 0 8px #FF0000, 0 0 16px #FF0000',
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
            width: '440px',
            height: '240px',
            background: 'radial-gradient(circle, rgba(255, 0, 0, 0.42) 0%, rgba(200, 0, 20, 0.16) 45%, transparent 75%)',
            filter: 'blur(45px)',
            pointerEvents: 'none',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
            zIndex: 1
          }}
        />

        {/* Giant Watermark Typography Container */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div 
            className="mono-text"
            style={{
              position: 'relative',
              zIndex: 2,
              fontSize: 'clamp(4.2rem, 15vw, 14rem)',
              fontWeight: 900,
              letterSpacing: '-0.035em',
              lineHeight: 0.82,
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Base Layer: Crisp Grayish / White Wireframe Outlines */}
            <span
              style={{
                position: 'absolute',
                color: 'transparent',
                WebkitTextStroke: '1.2px rgba(255, 255, 255, 0.22)',
                zIndex: 1,
                transition: 'WebkitTextStroke 0.3s ease'
              }}
            >
              CYBER PASHTO
            </span>

            {/* Interactive Spotlight Layer: Blazing Red Glowing Circle over Hovered Area */}
            <span
              style={{
                position: 'relative',
                background: `radial-gradient(circle 320px at ${mousePos.x}% ${mousePos.y}%, #FF0000 0%, #E60000 28%, rgba(180, 0, 20, 0.45) 55%, transparent 80%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '1.4px rgba(255, 50, 50, 0.4)',
                filter: 'drop-shadow(0 0 35px rgba(255, 0, 0, 0.65))',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.35s ease, filter 0.35s ease',
                zIndex: 2
              }}
            >
              CYBER PASHTO
            </span>
          </div>
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
              ? `linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.15) ${Math.max(0, mousePos.x - 30)}%, #FF0000 ${mousePos.x}%, rgba(255, 0, 0, 0.15) ${Math.min(100, mousePos.x + 30)}%, transparent 100%)`
              : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, rgba(255, 0, 0, 0.35) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 100%)',
            boxShadow: isHovered
              ? '0 0 15px rgba(255, 0, 0, 0.85), 0 0 30px rgba(255, 0, 0, 0.45)'
              : '0 0 10px rgba(255, 0, 0, 0.2)',
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
              backgroundColor: '#FF0000',
              boxShadow: '0 0 8px #FF0000, 0 0 16px #FF0000',
              opacity: isHovered ? 1 : 0.4,
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>
      </div>
    </section>
  );
}

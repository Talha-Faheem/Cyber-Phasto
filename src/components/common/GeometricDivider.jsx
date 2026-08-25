import React from 'react';

export default function GeometricDivider({ pattern = 'pashtun-grid', intensity = 0.35, className = '' }) {
  return (
    <div 
      className={`geometric-divider-wrapper ${className}`}
      style={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0',
        position: 'relative',
        userSelect: 'none',
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '1280px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          opacity: intensity,
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        <svg 
          width="100%" 
          height="24" 
          viewBox="0 0 1200 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
          preserveAspectRatio="repeat"
        >
          <defs>
            <pattern id="pashtun-motif-pattern" width="80" height="24" patternUnits="userSpaceOnUse">
              <path 
                d="M40 2 L52 12 L40 22 L28 12 Z" 
                stroke="#C99A3A" 
                strokeWidth="1.2" 
                fill="none"
              />
              <path 
                d="M40 6 L46 12 L40 18 L34 12 Z" 
                stroke="#C99A3A" 
                strokeWidth="0.8" 
                fill="rgba(201, 154, 58, 0.15)"
              />
              <circle cx="40" cy="12" r="1.5" fill="#C99A3A" />
              
              <path 
                d="M0 12 L16 12 M64 12 L80 12" 
                stroke="#C99A3A" 
                strokeWidth="1" 
                strokeDasharray="2 2"
              />
              <path 
                d="M16 8 L22 12 L16 16" 
                stroke="#C99A3A" 
                strokeWidth="1" 
                fill="none"
              />
              <path 
                d="M64 8 L58 12 L64 16" 
                stroke="#C99A3A" 
                strokeWidth="1" 
                fill="none"
              />
              <line x1="28" y1="2" x2="52" y2="2" stroke="#C99A3A" strokeWidth="0.5" opacity="0.6" />
              <line x1="28" y1="22" x2="52" y2="22" stroke="#C99A3A" strokeWidth="0.5" opacity="0.6" />
            </pattern>
          </defs>

          <rect width="100%" height="24" fill="url(#pashtun-motif-pattern)" />
        </svg>
      </div>
    </div>
  );
}

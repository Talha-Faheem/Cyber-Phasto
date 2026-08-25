import React from 'react';

export default function ShieldLogo({ size = 42, className = '' }) {
  return (
    <div className={`shield-logo-wrapper ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 500 500" width="100%" height="100%">
        <defs>
          <linearGradient id="shieldCyberRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1616" />
            <stop offset="100%" stopColor="#B00000" />
          </linearGradient>
          <filter id="logoRedGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path 
          d="M250 40 L410 110 V230 C410 340 250 440 250 440 C250 440 90 340 90 230 V110 Z" 
          fill="none" 
          stroke="#FF0000" 
          strokeWidth="6" 
          filter="url(#logoRedGlow)" 
          opacity="0.7"
        />

        <path 
          d="M250 45 L400 112 V228 C400 330 250 425 250 425 C250 425 100 330 100 228 V112 Z" 
          fill="url(#shieldCyberRedGrad)" 
          stroke="#FFFFFF" 
          strokeWidth="6"
        />

        <path 
          d="M250 75 L370 128 V220 C370 300 250 380 250 380 C250 380 130 300 130 220 V128 Z" 
          fill="#000000" 
          stroke="#FFFFFF" 
          strokeWidth="4"
        />

        <circle cx="250" cy="195" r="22" fill="#FFFFFF"/>
        <path d="M238 195 L262 195 L268 255 L232 255 Z" fill="#FFFFFF"/>
        <circle cx="250" cy="195" r="8" fill="#FF0000"/>

        <line x1="250" y1="135" x2="250" y2="105" stroke="#FFFFFF" strokeWidth="4"/>
        <circle cx="250" cy="105" r="6" fill="#FF1616"/>
      </svg>
    </div>
  );
}

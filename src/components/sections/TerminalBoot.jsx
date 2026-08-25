import React, { useState, useEffect } from 'react';
import { Terminal, Shield, CheckCircle2, ChevronRight } from 'lucide-react';

/**
 * TerminalBoot — Hero live typing boot sequence
 * Cycles through terminal initialization commands, then triggers the headline reveal.
 */
export default function TerminalBoot({ onBootComplete }) {
  const bootLines = [
    '> INITIALIZING CYBER_PASHTO_V3.0',
    '> LOADING SECURITY_MODULES...',
    '> LOADING PRACTICAL_LABS & CTF_RANGE...',
    '> COMMUNITY_STATUS: 50,000+ LEARNERS ONLINE',
    '> SYSTEM_READY_'
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    if (currentLineIndex < bootLines.length) {
      const fullLine = bootLines[currentLineIndex];

      if (currentCharIndex < fullLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            newLines[currentLineIndex] = fullLine.slice(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, 32); // 32ms per character

        return () => clearTimeout(timeout);
      } else {
        // Pause between lines
        const pauseTimeout = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 280);

        return () => clearTimeout(pauseTimeout);
      }
    } else {
      // Boot sequence finished
      setIsBooted(true);
      if (onBootComplete) onBootComplete();
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#090B0E',
        borderRadius: '16px',
        border: '1px solid rgba(201, 154, 58, 0.35)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.85), 0 0 30px rgba(201, 154, 58, 0.12)',
        overflow: 'hidden',
        textAlign: 'left',
        transition: 'all 0.5s ease'
      }}
    >
      {/* Window Top Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1rem',
          backgroundColor: '#060709',
          borderBottom: '1px solid rgba(237, 234, 226, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#A3272B' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#C99A3A' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#348B58' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Shield size={12} style={{ color: '#C99A3A' }} />
          <span className="mono-text" style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>
            boot@cyberpashto:~#
          </span>
        </div>
      </div>

      {/* Terminal Screen */}
      <div
        style={{
          padding: '1.25rem',
          minHeight: '160px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          lineHeight: 1.6,
          color: '#EDEAE2',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem'
        }}
      >
        {displayedLines.map((line, idx) => {
          const isSuccess = line && line.includes('READY');
          const isOnline = line && line.includes('ONLINE');
          return (
            <div
              key={idx}
              style={{
                color: isSuccess ? '#4ADE80' : isOnline ? '#C99A3A' : 'var(--text-secondary)'
              }}
            >
              {line}
            </div>
          );
        })}

        {!isBooted && (
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '14px',
              backgroundColor: '#C99A3A',
              animation: 'techPulse 1s infinite'
            }}
          />
        )}
      </div>
    </div>
  );
}

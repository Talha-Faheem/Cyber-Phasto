import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, Play, RotateCcw, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function LiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'Cyber Pashto Threat Scanner Shell v3.4.0 [x86_64-linux]', type: 'system' },
    { text: 'Type "help" or click sample commands below to initiate security triage.', type: 'info' }
  ]);

  const terminalOutputRef = useRef(null);

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { text: `user@cyberpashto:~$ ${cmdStr}`, type: 'user' }];

    if (cmd === 'help') {
      newHistory.push(
        { text: 'AVAILABLE COMMANDS:', type: 'system' },
        { text: '  scan --vapt       Run vulnerability assessment checklist simulation', type: 'info' },
        { text: '  threat --map      Display active regional threat telemetry feed', type: 'info' },
        { text: '  courses           List available Cyber Pashto Premium cohorts', type: 'info' },
        { text: '  stats             Output community & graduation metrics', type: 'info' },
        { text: '  clear             Clear terminal screen', type: 'info' }
      );
    } else if (cmd === 'scan --vapt' || cmd === 'scan') {
      newHistory.push(
        { text: '[+] Initiating OWASP Top 10 Security Scan on target range...', type: 'system' },
        { text: '[✓] SSL/TLS Cipher Suite: ECDHE-RSA-AES256-GCM-SHA384 (SECURE)', type: 'success' },
        { text: '[✓] Web Application Firewall: Cloudflare Active', type: 'success' },
        { text: '[!] Port 443, 8443: Open | Security Headers: CSP Enabled', type: 'warning' },
        { text: '[✓] Audit Result: Target Perimeter Hardened. Score: 98/100', type: 'success' }
      );
    } else if (cmd === 'threat --map' || cmd === 'threat') {
      newHistory.push(
        { text: '[!] REGIONAL THREAT TELEMETRY (LIVE FEED):', type: 'warning' },
        { text: '  - Phishing Vectors Blocked (Last 24h): 14,290', type: 'info' },
        { text: '  - Ransomware Attacks Neutralized: 18', type: 'info' },
        { text: '  - Active University Chapters Monitoring: 25 Nodes', type: 'success' }
      );
    } else if (cmd === 'courses') {
      newHistory.push(
        { text: '[+] ACTIVE CYBER PASHTO PREMIUM COHORTS:', type: 'system' },
        { text: '  • Cybersecurity Level 2: Advanced Web Security & VAPT (Rs. 6,999)', type: 'info' },
        { text: '  • Ethical Hacking Level 3: Red Team Warfare (Rs. 8,999)', type: 'info' },
        { text: '  • Python for Cybersecurity & Automation (Rs. 5,499)', type: 'info' },
        { text: '  • AI Threat Intelligence & Data Science (Rs. 7,499)', type: 'info' },
        { text: '  • Direct LMS Link: https://cyberpashtopremium.com/', type: 'success' }
      );
    } else if (cmd === 'stats') {
      newHistory.push(
        { text: 'CYBER PASHTO IMPACT METRICS:', type: 'system' },
        { text: '  • Active Learners: 50,000+', type: 'info' },
        { text: '  • Graduates Certified: 25,000+', type: 'info' },
        { text: '  • Active University Chapters: 25 Hubs', type: 'info' },
        { text: '  • Enterprise Security Audits: 150+', type: 'info' }
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd !== '') {
      newHistory.push({ text: `Command not recognized: "${cmdStr}". Type "help" for available commands.`, type: 'error' });
    }

    setHistory(newHistory);
    setInput('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section style={{ backgroundColor: 'var(--black)', padding: '4.5rem 0', position: 'relative', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '0.85rem', color: '#FFFFFF' }}>
            Live Security <span className="text-gradient-red">Terminal</span>
          </h2>
          <p style={{ color: 'var(--paper)', fontSize: '1.02rem' }}>
            Simulate vulnerability scans and inspect Cyber Pashto operational telemetry in real time.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div 
          className="browser-window"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: 'var(--ink)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.9), 0 0 30px var(--red-glow)'
          }}
        >
          {/* Top Titlebar */}
          <div 
            style={{
              padding: '0.65rem 1.15rem',
              backgroundColor: 'var(--black)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--red)' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
              <span className="mono-text" style={{ fontSize: '0.76rem', color: 'var(--muted)', marginLeft: '0.5rem' }}>
                terminal@cyberpashto-academy:~
              </span>
            </div>

            <button 
              onClick={() => handleCommand('clear')} 
              style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.74rem' }}
              className="mono-text"
            >
              <RotateCcw size={12} /> Clear
            </button>
          </div>

          {/* Quick Command Samples */}
          <div style={{ padding: '0.65rem 1.15rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid var(--border)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--muted)', alignSelf: 'center' }}>Samples:</span>
            {['help', 'scan --vapt', 'threat --map', 'courses', 'stats'].map((sampleCmd) => (
              <button
                key={sampleCmd}
                onClick={() => handleCommand(sampleCmd)}
                className="mono-text"
                style={{
                  fontSize: '0.74rem',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--red-subtle)',
                  border: '1px solid var(--red-border)',
                  color: 'var(--red-bright)',
                  cursor: 'pointer'
                }}
              >
                ${sampleCmd}
              </button>
            ))}
          </div>

          {/* Terminal Screen Output */}
          <div 
            ref={terminalOutputRef}
            style={{
              padding: '1.25rem',
              minHeight: '240px',
              maxHeight: '320px',
              overflowY: 'auto',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              backgroundColor: 'var(--black)'
            }}
          >
            {history.map((item, idx) => (
              <div 
                key={idx} 
                style={{
                  color: 
                    item.type === 'user' ? '#FFFFFF' :
                    item.type === 'success' ? '#4ADE80' :
                    item.type === 'warning' ? '#FFBD2E' :
                    item.type === 'error' ? 'var(--red-bright)' :
                    item.type === 'system' ? 'var(--red-bright)' :
                    'var(--muted)'
                }}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={onSubmit} style={{ display: 'flex', borderTop: '1px solid var(--border)', backgroundColor: 'var(--ink)' }}>
            <span className="mono-text" style={{ padding: '0.75rem 0.9rem', color: 'var(--red-bright)', fontSize: '0.85rem' }}>
              user@cyberpashto:~$
            </span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command (e.g. courses, scan --vapt)..."
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                padding: '0.75rem 0'
              }}
            />
            <button 
              type="submit" 
              style={{
                padding: '0 1.25rem',
                backgroundColor: 'var(--red)',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}
            >
              <Play size={14} fill="#FFFFFF" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

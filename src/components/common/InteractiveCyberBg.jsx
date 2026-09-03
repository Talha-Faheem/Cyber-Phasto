import React, { useEffect, useRef, useState } from 'react';

export default function InteractiveCyberBg() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isHovered: false });
  const ripplesRef = useRef([]);
  const spotlightPosRef = useRef({ x: 50, y: 30, visible: false });
  const spotlightDivRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Particle setup
    const particleCount = Math.max(35, Math.min(75, Math.floor((width * height) / 12000)));
    const particles = [];
    const cyberColors = [
      'rgba(255, 2, 5, 0.85)',    // Cyber Red
      'rgba(255, 60, 60, 0.75)',   // Bright Red
      'rgba(255, 120, 120, 0.5)',  // Soft Red
      'rgba(255, 255, 255, 0.45)', // Tech White
      'rgba(200, 200, 200, 0.35)'  // Tech Grey
    ];

    const symbols = ['01', '0x', '</>', '{ }', '//', '10', '::', 'fn', 'λ'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: cyberColors[Math.floor(Math.random() * cyberColors.length)],
        isRed: Math.random() > 0.4,
        isSymbol: Math.random() > 0.82,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        baseRadius: Math.random() * 2 + 1.2
      });
    }

    const handleResize = () => {
      if (!container || !canvas) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
        mouseRef.current.isHovered = true;

        spotlightPosRef.current = {
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
          visible: true
        };
        if (spotlightDivRef.current) {
          spotlightDivRef.current.style.background = `radial-gradient(650px circle at ${spotlightPosRef.current.x}% ${spotlightPosRef.current.y}%, rgba(255, 2, 5, 0.16) 0%, rgba(255, 2, 5, 0.04) 45%, transparent 75%)`;
          spotlightDivRef.current.style.transition = 'none';
        }
      } else {
        mouseRef.current.isHovered = false;
        mouseRef.current.x = -1000;
        mouseRef.current.y = -1000;
        spotlightPosRef.current.visible = false;
        if (spotlightDivRef.current) {
          spotlightDivRef.current.style.background = `radial-gradient(circle at 50% 25%, rgba(255, 2, 5, 0.14) 0%, transparent 65%)`;
          spotlightDivRef.current.style.transition = 'background 0.6s ease';
        }
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      spotlightPosRef.current.visible = false;
      if (spotlightDivRef.current) {
        spotlightDivRef.current.style.background = `radial-gradient(circle at 50% 25%, rgba(255, 2, 5, 0.14) 0%, transparent 65%)`;
        spotlightDivRef.current.style.transition = 'background 0.6s ease';
      }
    };

    const handleClick = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        ripplesRef.current.push({
          x,
          y,
          radius: 0,
          maxRadius: Math.min(width, height) * 0.45,
          alpha: 0.7,
          speed: 4
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    let lastTime = performance.now();

    const render = (time) => {
      if (!isVisibleRef.current) {
        animationFrameId = null;
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const ripples = ripplesRef.current;

      // Draw and update click ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += rip.speed;
        rip.alpha *= 0.96;

        if (rip.alpha < 0.01 || rip.radius > rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 2, 5, ${rip.alpha * 0.6})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 12), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 60, 60, ${rip.alpha * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Update and draw particles
      const maxConnectDist = 130;
      const mouseConnectDist = 180;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulsing radius
        p.pulse += p.pulseSpeed;
        p.radius = p.baseRadius + Math.sin(p.pulse) * 0.6;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Boundary wrap
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse interactive physics
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100 && dist > 0) {
            const force = (100 - dist) / 100;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }

          // Connect particle to mouse
          if (dist < mouseConnectDist) {
            const alpha = (1 - dist / mouseConnectDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 30, 35, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Ripple interaction
        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const rdx = p.x - rip.x;
          const rdy = p.y - rip.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          const ringDist = Math.abs(rdist - rip.radius);
          if (ringDist < 25 && rdist > 0) {
            const push = (1 - ringDist / 25) * rip.alpha * 4;
            p.x += (rdx / rdist) * push;
            p.y += (rdy / rdist) * push;
          }
        }

        // Draw particle node
        if (p.isSymbol) {
          ctx.save();
          ctx.font = '10px "DM Mono", monospace';
          ctx.fillStyle = p.isRed ? 'rgba(255, 50, 50, 0.45)' : 'rgba(255, 255, 255, 0.28)';
          ctx.fillText(p.symbol, p.x, p.y);
          ctx.restore();
        } else {
          if (p.isRed) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 2, 5, 0.12)';
            ctx.fill();
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 0;
          ctx.fill();
        }

        // Draw inter-particle lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.isRed || p2.isRed 
              ? `rgba(255, 2, 5, ${alpha})` 
              : `rgba(255, 255, 255, ${alpha * 0.75})`;
            ctx.lineWidth = 0.85;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      // Draw subtle mouse cursor halo if hovered
      if (mouse.isHovered) {
        ctx.save();
        
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 2, 5, 0.15)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FF0205';
        ctx.shadowBlur = 0;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 22, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 2, 5, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting && !animationFrameId) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    });
    observer.observe(container);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Cyber Grid Pattern Background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.85,
          pointerEvents: 'none'
        }}
      />

      {/* Cyber Grid Subtle Red Intersections */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255, 2, 5, 0.12) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
      />

      {/* Dynamic Mouse Spotlight Glow */}
      <div 
        ref={spotlightDivRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 25%, rgba(255, 2, 5, 0.14) 0%, transparent 65%)`,
          transition: 'background 0.6s ease',
          pointerEvents: 'none'
        }}
      />

      {/* Seamless Bottom Vignette (transparent at top under header) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, #050505 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}

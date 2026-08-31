import React, { useEffect, useRef, memo } from 'react';

function HomeBackground() {
  const mouseLightRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: 50, y: 30 });

  useEffect(() => {
    const updateLight = () => {
      if (mouseLightRef.current) {
        mouseLightRef.current.style.background = `radial-gradient(700px circle at ${posRef.current.x}% ${posRef.current.y}%, rgba(220, 20, 25, 0.025) 0%, rgba(255, 255, 255, 0.008) 30%, transparent 60%)`;
      }
      rafRef.current = null;
    };

    const handleMouseMove = (e) => {
      const x = ((e.clientX / window.innerWidth) * 100).toFixed(2);
      const y = ((e.clientY / window.innerHeight) * 100).toFixed(2);
      posRef.current = { x, y };

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateLight);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="home-bg-wrapper" aria-hidden="true" style={{ contain: 'paint layout' }}>
      {/* 1. Base Dark & Ambient Atmospheric Multi-point Glows */}
      <div className="home-bg-ambient" />

      {/* 2. Interactive Ambient Mouse Light Follower */}
      <div 
        ref={mouseLightRef}
        className="home-bg-mouse-light"
        style={{
          background: 'radial-gradient(700px circle at 50% 30%, rgba(220, 20, 25, 0.025) 0%, rgba(255, 255, 255, 0.008) 30%, transparent 60%)'
        }}
      />

      {/* 3. Thin Visible Geometric Tech Grid */}
      <div className="home-bg-grid" />

      {/* 4. Fine Micro-Dot Matrix Pattern */}
      <div className="home-bg-dots" />

      {/* 5. Delicate Architectural Vertical Guide Lines */}
      <div className="home-bg-vertical-lines">
        <div className="home-bg-vline left" />
        <div className="home-bg-vline col-1" />
        <div className="home-bg-vline center" />
        <div className="home-bg-vline col-2" />
        <div className="home-bg-vline right" />
      </div>

      {/* 6. Strategic Luminous Ambient Energy Halos */}
      <div className="home-bg-glow glow-top" />
      <div className="home-bg-glow glow-mid-left" />
      <div className="home-bg-glow glow-mid-right" />
      <div className="home-bg-glow glow-bottom" />
    </div>
  );
}

export default memo(HomeBackground);

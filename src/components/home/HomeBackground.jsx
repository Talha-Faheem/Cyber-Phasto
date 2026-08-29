import React, { useEffect, useState } from 'react';

export default function HomeBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="home-bg-wrapper" aria-hidden="true">
      {/* 1. Base Dark & Ambient Atmospheric Multi-point Glows */}
      <div className="home-bg-ambient" />

      {/* 2. Interactive Ambient Mouse Light Follower */}
      <div 
        className="home-bg-mouse-light"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(220, 20, 25, 0.025) 0%, rgba(255, 255, 255, 0.008) 30%, transparent 60%)`
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

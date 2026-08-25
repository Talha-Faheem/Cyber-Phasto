import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ onOpenContact }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 35) {
        setIsVisible(true);
        setIsScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      setIsScrolled(true);
      const diff = currentScrollY - lastScrollY.current;
      
      if (Math.abs(diff) > scrollThreshold) {
        if (diff > 0 && currentScrollY > 70) {
          setIsVisible(false);
          setMobileOpen(false);
        } else if (diff < 0) {
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyClick = () => {
    setMobileOpen(false);
    navigate('/contact');
  };

  return (
    <>
      <header 
        className={`sheryians-header ${isVisible ? 'header-visible' : 'header-hidden'} ${isScrolled ? 'header-scrolled' : ''}`}
      >
        <div className="sheryians-header-inner">
          <Link 
            to="/" 
            className="sheryians-logo-wrapper inline-flex items-center no-underline cursor-pointer"
            aria-label="CyberPashto Home"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-sans font-black text-[20px] tracking-[-0.04em] uppercase leading-none">
              <span className="text-white">CYBER</span>
              <span className="gradient-text">PASHTO.</span>
            </span>
          </Link>

          <nav className="sheryians-nav-pill" aria-label="Main Navigation">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}>Courses</NavLink>
            <NavLink to="/roadmap" className={({ isActive }) => isActive ? 'active' : ''}>Roadmap</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
          </nav>

          <button onClick={handleApplyClick} className="sheryians-apply-btn">
            Apply Now! →
          </button>

          <button 
            className={`sheryians-menu-btn ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobileDrawer"
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </header>

      <div 
        className={`sheryians-mobile-drawer ${mobileOpen && isVisible ? 'open' : ''}`} 
        id="mobileDrawer"
      >
        <div className="sheryians-mobile-inner">
          <NavLink to="/" end onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/courses" onClick={() => setMobileOpen(false)}>Courses</NavLink>
          <NavLink to="/roadmap" onClick={() => setMobileOpen(false)}>Roadmap &amp; Journey</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</NavLink>
          <button 
            onClick={handleApplyClick} 
            className="sheryians-apply-btn w-full justify-center my-3.5"
          >
            Apply Now! →
          </button>
        </div>
      </div>
    </>
  );
}

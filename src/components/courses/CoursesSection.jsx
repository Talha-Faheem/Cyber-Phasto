import React, { useState, useMemo, useEffect } from 'react';
import { coursesData, courseCategories, learningPathSteps } from '../../data/coursesData';
import CardSwapShowcase from './CardSwapShowcase';
import CourseCard from './CourseCard';
import GeometricDivider from '../common/GeometricDivider';
import { 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  ArrowUpRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function CoursesSection({ onOpenContact, onNavigate, standalone = false }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedPathIndex, setSelectedPathIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Reset page to 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesCategory = 
        activeCategory === 'ALL' || 
        course.category.toUpperCase() === activeCategory.toUpperCase();

      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'lessons') return b.lessons - a.lessons;
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  // Calculate total pages and slice current page courses (6 courses per page)
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / coursesPerPage));
  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    const catalogEl = document.getElementById('courses-catalog-grid');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEnrollClick = (course) => {
    if (onOpenContact) {
      onOpenContact(course);
    } else {
      window.open(course.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="courses"
      className="courses-section-root"
      style={{
        backgroundColor: '#000000',
        position: 'relative',
        paddingTop: standalone ? '6.5rem' : '4.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        borderTop: '1px solid #292929',
        borderBottom: '1px solid #292929'
      }}
    >
      {/* Background Cyber Grid Overlay */}
      <div className="cyber-grid-overlay" style={{ opacity: 0.3 }} />

      {/* ===================================================================
          FUTURISTIC REDDISH GLOWING AMBIENCE & CYBERNETIC CIRCLES
          =================================================================== */}
      
      {/* 1. Large Central Reddish Ambient Aura (Placed behind Catalog cards) */}
      <div 
        className="catalog-ambient-glow"
        style={{
          position: 'absolute',
          top: '52%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(1100px, 95vw)',
          height: '750px',
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255, 15, 30, 0.26) 0%, rgba(210, 0, 25, 0.14) 40%, rgba(120, 0, 15, 0.04) 70%, transparent 85%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      {/* 2. Concentric Cyber Glow Rings & Orbital Shapes (The Glowing Red Shape System) */}
      <div
        className="catalog-cyber-circle-system"
        style={{
          position: 'absolute',
          top: '54%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          pointerEvents: 'none',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Outermost Faint Cyber Orbit Ring */}
        <div 
          className="cyber-orbit-outer"
          style={{
            position: 'absolute',
            width: '840px',
            height: '840px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 30, 30, 0.14)',
            boxShadow: '0 0 50px rgba(255, 0, 0, 0.08), inset 0 0 50px rgba(255, 0, 0, 0.05)'
          }}
        />

        {/* Middle Segmented/Dashed Glowing Orbital Ring */}
        <div 
          className="cyber-orbit-mid"
          style={{
            position: 'absolute',
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            border: '1.5px dashed rgba(255, 50, 50, 0.28)',
            boxShadow: '0 0 45px rgba(255, 0, 0, 0.18), inset 0 0 35px rgba(255, 0, 0, 0.12)'
          }}
        />

        {/* Inner Solid Luminous Ring */}
        <div 
          className="cyber-orbit-inner"
          style={{
            position: 'absolute',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 70, 70, 0.38)',
            boxShadow: '0 0 40px rgba(255, 0, 0, 0.28), inset 0 0 30px rgba(255, 0, 0, 0.2)'
          }}
        />

        {/* Glowing Red Core Disc */}
        <div 
          className="cyber-orbit-core"
          style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 20, 35, 0.42) 0%, rgba(200, 0, 20, 0.2) 50%, transparent 75%)',
            filter: 'blur(32px)'
          }}
        />

        {/* Horizontal & Vertical Crosshair Grid Glow Accents */}
        <div 
          style={{
            position: 'absolute',
            width: '900px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 30, 30, 0.18) 25%, rgba(255, 50, 50, 0.35) 50%, rgba(255, 30, 30, 0.18) 75%, transparent)',
            top: '50%',
            left: 0
          }}
        />
        <div 
          style={{
            position: 'absolute',
            height: '900px',
            width: '1px',
            background: 'linear-gradient(180deg, transparent, rgba(255, 30, 30, 0.18) 25%, rgba(255, 50, 50, 0.35) 50%, rgba(255, 30, 30, 0.18) 75%, transparent)',
            left: '50%',
            top: 0
          }}
        />
      </div>

      {/* 3. Upper-Left Floating Crimson Light Orb */}
      <div 
        className="catalog-glow-top-left"
        style={{
          position: 'absolute',
          top: '8%',
          left: '4%',
          width: '540px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(255, 15, 25, 0.2) 0%, rgba(180, 0, 15, 0.06) 50%, transparent 72%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      {/* 4. Lower-Right Floating Crimson Light Orb */}
      <div 
        className="catalog-glow-bottom-right"
        style={{
          position: 'absolute',
          bottom: '6%',
          right: '4%',
          width: '580px',
          height: '460px',
          background: 'radial-gradient(circle, rgba(255, 20, 35, 0.22) 0%, rgba(200, 0, 20, 0.07) 50%, transparent 72%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* ===================================================================
            SECTION HEADER
            =================================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3rem auto' }}>
          <h2 
            style={{ 
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', 
              fontWeight: 800, 
              lineHeight: 1.12, 
              marginBottom: '1rem',
              letterSpacing: '-0.025em',
              color: '#FFFFFF'
            }}
          >
            Explore Flagship <span style={{ color: '#FF0000' }}>Masterclasses.</span>
          </h2>

          <p 
            style={{ 
              color: '#D0D0D0', 
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', 
              lineHeight: 1.6 
            }}
          >
            Practical, offensive cybersecurity & engineering cohorts designed by real-world practitioners with hands-on lab infrastructure.
          </p>
        </div>

        {/* ===================================================================
            STANDALONE ONLY: CATEGORY FILTERS & SEARCH (Hidden on Home Page)
            =================================================================== */}
        {standalone && (
          <div 
            style={{
              backgroundColor: 'rgba(12, 14, 18, 0.7)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '1.25rem 1.5rem',
              marginBottom: '3rem',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              
              {/* Category Pills (Only on standalone page) */}
              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                {courseCategories.map((cat) => {
                  const isActive = activeCategory.toUpperCase() === cat.toUpperCase();
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      style={{
                        padding: '0.4rem 0.95rem',
                        borderRadius: '999px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        border: '1px solid',
                        borderColor: isActive ? '#FF0000' : 'rgba(255, 255, 255, 0.1)',
                        backgroundColor: isActive ? '#FF0000' : 'rgba(255, 255, 255, 0.03)',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all 0.22s ease'
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Sort Selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <SlidersHorizontal size={14} style={{ color: '#8A8A8A' }} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    backgroundColor: 'rgba(8, 8, 8, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#D0D0D0',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="popular">Sort: Most Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="lessons">Most Lessons</option>
                </select>
              </div>

            </div>
          </div>
        )}

        {/* ===================================================================
            COURSE CARDS GRID (Exactly 6 on Home Page with Glass Effect & Stagger)
            =================================================================== */}
        <div id="courses-catalog-grid" style={{ scrollMarginTop: '100px' }} />

        {displayedCourses.length === 0 ? (
          <div 
            style={{ 
              textAlign: 'center', 
              padding: '4rem 1rem', 
              backgroundColor: 'rgba(12, 14, 18, 0.65)', 
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <ShieldAlert size={44} style={{ color: '#FF1616', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#FFFFFF' }}>No Courses Found</h3>
            <p style={{ color: '#8A8A8A', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
              No matches found for "{searchQuery}".
            </p>
            <button 
              onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
              className="btn btn-red"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div 
            className="courses-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem',
              marginBottom: '2.5rem'
            }}
          >
            {displayedCourses.map((course, idx) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                index={idx}
                onEnroll={handleEnrollClick}
              />
            ))}
          </div>
        )}

        {/* Clean, Professional Pagination */}
        {filteredCourses.length > coursesPerPage && (
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '3.5rem'
            }}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#0E1015',
                border: '1px solid #292929',
                color: currentPage === 1 ? '#555555' : '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                opacity: currentPage === 1 ? 0.4 : 1
              }}
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? '#FF0000' : '#0E1015',
                    border: isActive ? '1px solid #FF0000' : '1px solid #292929',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#0E1015',
                border: '1px solid #292929',
                color: currentPage === totalPages ? '#555555' : '#FFFFFF',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                opacity: currentPage === totalPages ? 0.4 : 1
              }}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* ===================================================================
            BEAUTIFUL ANIMATED "Explore More Courses" ACTION BUTTON
            =================================================================== */}
        {!standalone && (
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '1rem',
              marginBottom: '2rem',
              position: 'relative'
            }}
          >
            {/* Animated Glow Halo */}
            <div 
              style={{
                position: 'absolute',
                width: '320px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(255, 0, 0, 0.35) 0%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
                zIndex: 1
              }} 
            />

            {/* The Main Clean & Beautiful Animated Button */}
            <a
              href="https://cyberpashtopremium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-more-courses-btn"
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1rem 2.5rem',
                backgroundColor: 'rgba(14, 16, 22, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid #FF0000',
                borderRadius: '14px',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '1.02rem',
                fontWeight: 800,
                letterSpacing: '0.03em',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 0, 0, 0.25)',
                overflow: 'hidden',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
            >
              {/* Shimmer linear sweep overlay */}
              <div className="btn-shimmer" />

              <GraduationCap size={20} style={{ color: '#FF1616' }} />

              <span style={{ color: '#FFFFFF', fontWeight: 800 }}>
                Explore More Courses
              </span>

              <div 
                className="arrow-badge"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#FF0000',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(255, 0, 0, 0.6)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <ArrowRight size={15} strokeWidth={2.5} />
              </div>
            </a>
          </div>
        )}

      </div>

      <style>{`
        .explore-more-courses-btn:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: #FF1616 !important;
          box-shadow: 0 20px 45px rgba(255, 0, 0, 0.4), 0 0 35px rgba(255, 0, 0, 0.3) !important;
          background-color: rgba(22, 10, 14, 0.95) !important;
        }
        .explore-more-courses-btn:hover .arrow-badge {
          transform: translateX(4px);
          background-color: #FF1616 !important;
        }
        .btn-shimmer {
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.12),
            transparent
          );
          transform: skewX(-20deg);
          animation: shimmerSweep 3.5s infinite;
        }
        @keyframes shimmerSweep {
          0% { left: -150%; }
          40% { left: 150%; }
          100% { left: 150%; }
        }
        @keyframes orbitSpinClockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbitSpinCounter {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes ambientPulse {
          0%, 100% { opacity: 0.82; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.06); }
        }
        @keyframes corePulse {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(1.18); opacity: 1; }
        }
        @keyframes floatGlowSlow1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.75; }
          50% { transform: translate(24px, -18px); opacity: 0.95; }
        }
        @keyframes floatGlowSlow2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.75; }
          50% { transform: translate(-24px, 18px); opacity: 0.95; }
        }
        .cyber-orbit-outer {
          animation: orbitSpinClockwise 120s linear infinite;
        }
        .cyber-orbit-mid {
          animation: orbitSpinCounter 70s linear infinite;
        }
        .cyber-orbit-core {
          animation: corePulse 5s ease-in-out infinite;
        }
        .catalog-ambient-glow {
          animation: ambientPulse 7s ease-in-out infinite;
        }
        .catalog-glow-top-left {
          animation: floatGlowSlow1 10s ease-in-out infinite;
        }
        .catalog-glow-bottom-right {
          animation: floatGlowSlow2 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

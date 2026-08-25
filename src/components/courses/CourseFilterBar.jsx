import React from 'react';
import { courseFilterCategories } from '../../data/coursesData';

export default function CourseFilterBar({
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <section style={{ position: 'relative', zIndex: 9 }}>
      <div className="container">
        <div className="filterBarContainer">
          <div className="categoryPillTrack">
            {courseFilterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`categoryPill ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

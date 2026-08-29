import React from 'react';
import { Clock, Award, ArrowRight, Compass } from 'lucide-react';

export default function CourseCardGrid({
  currentCourses,
  filteredCourses,
  searchQuery,
  selectedCategory,
  sortOption,
  setSortOption,
  courseGridTopRef,
  onSelectCourse,
  clearAllFilters
}) {
  return (
    <>
      <section ref={courseGridTopRef} style={{ scrollMarginTop: '100px' }}>
        <div className="container">
          <div className="resultsHeaderBar">
            <h2 className="resultsHeading">
              {searchQuery ? `Results for "${searchQuery}"` : selectedCategory}
              <span className="resultsCountPill">
                {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
              </span>
            </h2>

            <div className="sortSelectBox">
              <span>Sort:</span>
              <select 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="sortSelect"
              >
                <option value="recommended">Recommended</option>
                <option value="most-popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="courseDiscoveryGrid">
            {currentCourses.length > 0 ? (
              currentCourses.map((course) => (
                <div key={course.id} className="cyberCourseCard">
                  <div className="cardBrowserBar">
                    <span className="cardCodeTag">{course.code}</span>
                  </div>

                  <div className="cardImageContainer">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      loading="lazy" 
                    />
                    <div className="cardImageOverlay" />
                    <span className="cardDiscountBadge">{course.discount}</span>
                    <span className="cardLearningTypeBadge">{course.learningType}</span>
                  </div>

                  <div className="cardBody">
                    <div className="cardTagsList">
                      {course.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="cardTagPill">{tag}</span>
                      ))}
                    </div>

                    <h3 className="cardTitle">{course.title}</h3>
                    <p className="cardDescription">{course.description}</p>

                    <div className="cardMetaRow">
                      <div className="cardMetaItem">
                        <Clock size={12} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="cardMetaItem">
                        <Award size={12} />
                        <span>{course.level}</span>
                      </div>
                    </div>
                  </div>

                  <div className="cardFooter">
                    <div className="cardPriceGroup">
                      <span className="cardPriceCurrent">{course.formattedPrice}</span>
                      <span className="cardPriceOriginal">{course.formattedOriginalPrice}</span>
                    </div>

                    <button 
                      onClick={() => onSelectCourse(course)}
                      className="cardCheckBtn"
                    >
                      Check Course <ArrowRight size={13} className="cardCheckBtnArrow" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="emptyFilterBox">
                <Compass size={42} style={{ color: 'var(--red)', margin: '0 auto 12px' }} />
                <h3 className="emptyFilterTitle">No courses found</h3>
                <p className="emptyFilterSub">
                  We couldn't find any courses matching your current search or filter combination.
                </p>
                <button onClick={clearAllFilters} className="btn primary">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { Search, X } from 'lucide-react';

export default function CourseSearchBar({
  searchInputRef,
  searchQuery,
  setSearchQuery
}) {
  return (
    <section className="courseSearchSection">
      <div className="container">
        <div className="searchBarWrapper">
          <div className="searchInputContainer">
            <Search size={18} className="searchIcon" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Web Development, Python, Cybersecurity, React, AI..."
              className="courseSearchInput"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="searchClearBtn"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

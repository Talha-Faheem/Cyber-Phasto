import React from 'react';

export default function CoursePagination({
  currentPage,
  totalPages,
  handlePageChange
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="paginationSection">
      <button 
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pageArrowBtn"
      >
        ← Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => handlePageChange(pageNum)}
          className={`pageNumberBtn ${currentPage === pageNum ? 'active' : ''}`}
        >
          {pageNum}
        </button>
      ))}

      <button 
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pageArrowBtn"
      >
        Next →
      </button>
    </div>
  );
}

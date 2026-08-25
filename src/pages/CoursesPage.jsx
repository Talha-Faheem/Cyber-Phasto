import React, { useState, useMemo, useRef, useEffect } from 'react';
import { coursesData } from '../data/coursesData';
import CoursesHero from '../components/courses/CoursesHero';
import CourseSearchBar from '../components/courses/CourseSearchBar';
import CourseFilterBar from '../components/courses/CourseFilterBar';
import CourseCardGrid from '../components/courses/CourseCardGrid';
import CoursePagination from '../components/courses/CoursePagination';
import PathFinderBanner from '../components/courses/PathFinderBanner';
import PopularTracksPaperSection from '../components/courses/PopularTracksPaperSection';
import CoursesFinalCta from '../components/courses/CoursesFinalCta';
import CourseDetailModal from '../components/courses/CourseDetailModal';

export default function CoursesPage({ onOpenContact, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [sortOption, setSortOption] = useState('recommended');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourseDetail, setSelectedCourseDetail] = useState(null);

  const COURSES_PER_PAGE = 6;
  const courseGridTopRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOption]);

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = course.title.toLowerCase().includes(q);
        const matchShortTitle = course.shortTitle.toLowerCase().includes(q);
        const matchDesc = course.description.toLowerCase().includes(q);
        const matchCategory = course.category.toLowerCase().includes(q);
        const matchTags = course.tags.some(tag => tag.toLowerCase().includes(q));
        const matchLevel = course.level.toLowerCase().includes(q);
        if (!matchTitle && !matchShortTitle && !matchDesc && !matchCategory && !matchTags && !matchLevel) {
          return false;
        }
      }

      if (selectedCategory !== 'All Courses') {
        if (course.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'most-popular') return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      if (sortOption === 'newest') return b.lessons - a.lessons;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, sortOption]);

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE) || 1;
  const currentCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (courseGridTopRef.current) {
      courseGridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Courses');
    setSortOption('recommended');
  };

  return (
    <div className="coursesPageWrapper min-h-screen bg-[#050505] text-white pt-24 pb-20 w-full">
      <CoursesHero />

      <CourseSearchBar 
        searchInputRef={searchInputRef}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <CourseFilterBar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <CourseCardGrid 
        currentCourses={currentCourses}
        filteredCourses={filteredCourses}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        setSortOption={setSortOption}
        courseGridTopRef={courseGridTopRef}
        onSelectCourse={setSelectedCourseDetail}
        clearAllFilters={clearAllFilters}
      />

      <CoursePagination 
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />

      <PathFinderBanner />

      <PopularTracksPaperSection onSelectCourse={setSelectedCourseDetail} />

      <CoursesFinalCta 
        onOpenContact={onOpenContact}
        searchInputRef={searchInputRef}
      />

      <CourseDetailModal 
        selectedCourseDetail={selectedCourseDetail}
        onClose={() => setSelectedCourseDetail(null)}
        onOpenContact={onOpenContact}
      />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JourneyPage from './pages/JourneyPage';
// import ServicesPage from './pages/ServicesPage';
import ContactModal from './components/common/ContactModal';
import Footer from './components/common/Footer';
import SmoothScroller from './components/common/SmoothScroller';
import './styles/theme.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="cyber-app min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      <ScrollToTop />

      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="min-h-[85vh] bg-black">
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/courses" element={<CoursesPage onOpenContact={() => setIsContactOpen(true)} />} />
          
          <Route path="/journey" element={<JourneyPage onOpenContact={() => setIsContactOpen(true)} />} />
          
          <Route path="/contact" element={<ContactPage />} />
         
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroller>
        <AppContent />
      </SmoothScroller>
    </BrowserRouter>
  );
}

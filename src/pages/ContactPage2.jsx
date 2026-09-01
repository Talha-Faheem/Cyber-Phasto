import React, { useEffect } from 'react';
import HomeBackground from '../components/home/HomeBackground';
import ContactHero from '../components/contact2/ContactHero';
import TestimonialsSection from '../components/contact2/TestimonialsSection';
import SocialLinksSection from '../components/contact2/SocialLinksSection';
import FAQSection from '../components/contact2/FAQSection';
import CTABanner from '../components/contact2/CTABanner';

export default function ContactPage2() {
  useEffect(() => {
    document.title = 'Contact Us | Cyber Pashto / Moniveo';
  }, []);

  return (
    <div className="contactPageWrapper min-h-screen bg-[#040404] text-white font-sans selection:bg-[#FF0205] selection:text-white pt-24 sm:pt-28 pb-16 w-full relative overflow-x-hidden">
      
      {/* 1. Global Ambient Background with Black Canvas, Gray Lines, Tech Grid & Dots */}
      <HomeBackground />

      {/* 2. Main Content Container (relative z-10 over background) */}
      <div className="relative z-10">
        
        {/* SECTION 1: HERO & CONTACT FORM (with Embedded Map) */}
        <ContactHero />

        {/* SECTION 2: TESTIMONIALS (Bento / Masonry Grid) */}
        <TestimonialsSection />

        {/* SECTION 3: SOCIAL LINKS (4-Column Row) */}
        <SocialLinksSection />

        {/* SECTION 4: FAQ (General / Product / Pricing Tabs & Accordion) */}
        <FAQSection />

        {/* SECTION 5: CTA BANNER (Dark Cyber Gradient Panel & Scale-in animation) */}
        <CTABanner />

      </div>

    </div>
  );
}

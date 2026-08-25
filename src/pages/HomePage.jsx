import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/home/HeroSection';
import MarqueeTicker from '../components/home/MarqueeTicker';
import WhyCyberPashto from '../components/home/WhyCyberPashto';
import AboutIdea from '../components/home/AboutIdea';
import ExperienceGallery from '../components/home/ExperienceGallery';
import ImpactSection from '../components/home/ImpactSection';
import CoursesPinnedStack from '../components/home/CoursesPinnedStack';
import LearningPaths from '../components/home/LearningPaths';
import EventsMarquee from '../components/home/EventsMarquee';
import LearnerProjects from '../components/home/LearnerProjects';
import StudentReviews from '../components/home/StudentReviews';
import FaqSection from '../components/home/FaqSection';
import FinalCta from '../components/home/FinalCta';

export default function HomePage({ onOpenContact, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  const galleryRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const coursesSectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const experienceSectionRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth <= 850;

    if (reduceMotion || isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      const expSection = experienceSectionRef.current;
      const expTrack = galleryRef.current;
      if (expSection && expTrack) {
        gsap.fromTo(
          expTrack,
          { x: 220 },
          {
            x: -380,
            ease: "none",
            scrollTrigger: {
              trigger: expSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
              invalidateOnRefresh: true
            }
          }
        );
      }

      const card1 = card1Ref.current;
      const card2 = card2Ref.current;
      const card3 = card3Ref.current;
      const card4 = card4Ref.current;
      const section = coursesSectionRef.current;

      if (!card1 || !card2 || !card3 || !card4 || !section) return;

      gsap.set(card1, { y: 0, scale: 1, filter: "brightness(1)", zIndex: 10 });
      gsap.set(card2, { y: "102%", scale: 0.98, filter: "brightness(0.92)", zIndex: 20 });
      gsap.set(card3, { y: "114%", scale: 0.96, filter: "brightness(0.86)", zIndex: 30 });
      gsap.set(card4, { y: "126%", scale: 0.94, filter: "brightness(0.80)", zIndex: 40 });

      const totalDistance = window.innerHeight * 2.6;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + totalDistance,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      tl.to(card2, {
        y: 0,
        scale: 1,
        filter: "brightness(1)",
        duration: 1.2,
        ease: "power2.out"
      }, "step1")
      .to(card1, {
        y: -30,
        scale: 0.97,
        filter: "brightness(0.88)",
        duration: 1.2,
        ease: "power2.out"
      }, "step1")
      .to({}, { duration: 0.3 });

      tl.to(card3, {
        y: 0,
        scale: 1,
        filter: "brightness(1)",
        duration: 1.2,
        ease: "power2.out"
      }, "step2")
      .to(card2, {
        y: -30,
        scale: 0.97,
        filter: "brightness(0.88)",
        duration: 1.2,
        ease: "power2.out"
      }, "step2")
      .to(card1, {
        y: -58,
        scale: 0.94,
        filter: "brightness(0.74)",
        duration: 1.2,
        ease: "power2.out"
      }, "step2")
      .to({}, { duration: 0.3 });

      tl.to(card4, {
        y: 0,
        scale: 1,
        filter: "brightness(1)",
        duration: 1.2,
        ease: "power2.out"
      }, "step3")
      .to(card3, {
        y: -30,
        scale: 0.97,
        filter: "brightness(0.88)",
        duration: 1.2,
        ease: "power2.out"
      }, "step3")
      .to(card2, {
        y: -58,
        scale: 0.94,
        filter: "brightness(0.74)",
        duration: 1.2,
        ease: "power2.out"
      }, "step3")
      .to(card1, {
        y: -84,
        scale: 0.91,
        filter: "brightness(0.60)",
        duration: 1.2,
        ease: "power2.out"
      }, "step3")
      .to({}, { duration: 0.3 });

      tl.to([card1, card2, card3, card4], {
        y: "-=60",
        opacity: 0.88,
        duration: 0.8,
        ease: "power1.inOut"
      }, "exit");

      const pathsSection = document.querySelector("#paths");
      if (pathsSection) {
        gsap.from(pathsSection.querySelectorAll(".tag, .title, .sub"), {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pathsSection,
            start: "top 80%",
            once: true
          }
        });

        gsap.from(pathsSection.querySelectorAll(".path"), {
          y: 50,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pathsSection.querySelector(".pathGrid"),
            start: "top 85%",
            once: true
          }
        });
      }

    }, coursesSectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeftState(galleryRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    galleryRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAction = (hash, e) => {
    if (e) e.preventDefault();
    if (hash === 'contact' || hash === 'admission') {
      if (onOpenContact) onOpenContact();
      return;
    }
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="relative overflow-x-hidden w-full">
      <HeroSection onOpenContact={onOpenContact} />

      <MarqueeTicker />

      <WhyCyberPashto />

      <AboutIdea />

      <ExperienceGallery 
        experienceSectionRef={experienceSectionRef}
        galleryRef={galleryRef}
        scrollGallery={scrollGallery}
        handleMouseDown={handleMouseDown}
        handleMouseLeave={handleMouseLeave}
        handleMouseUp={handleMouseUp}
        handleMouseMove={handleMouseMove}
        handleAction={handleAction}
      />

      <ImpactSection handleAction={handleAction} />

      <CoursesPinnedStack 
        coursesSectionRef={coursesSectionRef}
        card1Ref={card1Ref}
        card2Ref={card2Ref}
        card3Ref={card3Ref}
        card4Ref={card4Ref}
        handleAction={handleAction}
      />

      <LearningPaths />

      <EventsMarquee handleAction={handleAction} />

      <LearnerProjects handleAction={handleAction} />

      <StudentReviews />

      <FaqSection openFaq={openFaq} toggleFaq={toggleFaq} />

      <FinalCta handleAction={handleAction} />
    </div>
  );
}

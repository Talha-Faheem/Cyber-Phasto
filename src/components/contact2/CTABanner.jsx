import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Scale-in + Fade animation on scroll */}
        <ScrollReveal direction="scale" delay={0.02} duration={0.32} viewportAmount={0.06}>
          <div className="relative rounded-3xl bg-white text-slate-900 p-10 sm:p-14 md:p-20 text-center overflow-hidden shadow-2xl border border-slate-200/90 shadow-black/40">
            
            {/* 1. Hexagon Line-Art Background Shapes (Light & Subtle) */}
            <svg 
              className="absolute -top-12 -left-12 w-80 h-80 text-[#FF0205]/[0.06] pointer-events-none"
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.8"
            >
              <polygon points="50 3, 93.3 25, 93.3 75, 50 97, 6.7 75, 6.7 25" />
              <polygon points="50 15, 83 31.5, 83 68.5, 50 85, 17 68.5, 17 31.5" />
              <polygon points="50 27, 72.7 38, 72.7 62, 50 73, 27.3 62, 27.3 38" />
            </svg>

            <svg 
              className="absolute -bottom-16 -right-16 w-96 h-96 text-[#FF0205]/[0.06] pointer-events-none"
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.8"
            >
              <polygon points="50 3, 93.3 25, 93.3 75, 50 97, 6.7 75, 6.7 25" />
              <polygon points="50 15, 83 31.5, 83 68.5, 50 85, 17 68.5, 17 31.5" />
              <polygon points="50 27, 72.7 38, 72.7 62, 50 73, 27.3 62, 27.3 38" />
            </svg>

            {/* 2. Light Dot-Grid Texture Overlay */}
            <div 
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.12) 1.2px, transparent 1.2px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* 3. Subtle Ambient Light Halo in Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-red-50/60 rounded-full blur-3xl pointer-events-none" />

            {/* Top Red Laser Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B00000] via-[#FF0205] to-[#FF3B3E]" />

            {/* Content Container */}
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              
              {/* Centered Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 font-sans text-slate-900">
                Turn workflow into{' '}
                <span className="text-[#FF0205] block sm:inline">AI agent</span> automations.
              </h2>

              {/* Subtext */}
              <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10">
                Powerful and production-ready, our cloud platform has the solutions you need to succeed.
              </p>

              {/* Cyber Red Gradient Pill Button: "Get started →" */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF0205] via-[#FF1616] to-[#D60003] hover:from-[#FF1616] hover:to-[#FF0205] text-white font-bold text-base tracking-wide shadow-xl shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 active:scale-100 transition-all duration-200 flex items-center gap-2.5 no-underline group cursor-pointer"
                >
                  <span>Get started</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

                <span className="text-xs text-slate-500 font-mono sm:ml-2">
                  No credit card required • 14-day free trial
                </span>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

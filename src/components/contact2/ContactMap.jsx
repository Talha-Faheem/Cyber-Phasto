import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ContactMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const locationQuery = encodeURIComponent("Metrotech Center, Brooklyn, NY 11201");
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${locationQuery}`;

  return (
    <ScrollReveal direction="up" delay={0.25} className="w-full mt-6">
      <div className="relative group rounded-2xl overflow-hidden border border-[#252525] bg-[#0c0c0c] shadow-lg shadow-black/60 hover:border-[#FF0205]/50 hover:shadow-[0_0_25px_rgba(255,2,5,0.15)] transition-all duration-300">
        
        {/* Top Header Floating Badge */}
        <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 bg-[#080808]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#333333] shadow-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0205] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF0205]"></span>
          </span>
          <span className="text-xs font-bold text-white tracking-tight">Moniveo HQ</span>
          <span className="text-[#555] text-xs">•</span>
          <span className="text-[11px] font-medium text-[#aaa]">Metrotech Center, NY</span>
        </div>

        {/* Quick Directions Floating Link */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 bg-[#080808]/90 backdrop-blur-md hover:bg-[#FF0205] text-white px-3 py-1.5 rounded-full border border-[#333333] hover:border-[#FF0205] shadow-md text-xs font-semibold transition-all duration-200"
          title="Open in Google Maps"
        >
          <Navigation size={12} className="text-[#FF1616] group-hover:text-white" />
          <span>Directions</span>
          <ExternalLink size={11} className="opacity-60" />
        </a>

        {/* Map Skeleton Placeholder */}
        {!mapLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a0a0a] animate-pulse text-[#777]">
            <MapPin size={28} className="text-[#FF0205] animate-bounce mb-2" />
            <span className="text-xs font-mono font-medium text-[#888]">Loading satellite map...</span>
          </div>
        )}

        {/* Embedded Map iframe with Dark Mode Invert/Contrast Filter */}
        <div className="w-full h-[250px] relative">
          <iframe
            title="Moniveo Headquarters Map"
            src="https://maps.google.com/maps?q=Metrotech%20Center%2C%20Brooklyn%2C%20NY%2011201&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.1] brightness-[0.9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
          />
        </div>

        {/* Bottom subtle bar */}
        <div className="px-4 py-2.5 bg-[#080808] border-t border-[#1e1e1e] flex items-center justify-between text-xs text-[#888]">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#FF0205] shrink-0" />
            <span className="truncate text-[#aaa]">Metrotech Center, Brooklyn, NY 11201, USA</span>
          </div>
          <span className="text-[11px] font-mono text-[#666] shrink-0 ml-2">40.6934° N, 73.9858° W</span>
        </div>
      </div>
    </ScrollReveal>
  );
}

import React from 'react';

export default function DestinationCard({
  destinationCardRef,
  activePath,
  onOpenContact
}) {
  return (
    <div className="destination-card" id="destinationCard" ref={destinationCardRef}>
      <div className="destination-title">Destination Reached</div>
      <p className="destination-desc">
        Complete all sequential levels in this roadmap and you go from zero knowledge to a professional, portfolio-backed <strong style={{ color: '#070707' }}>{activePath.finalRole}</strong> skillset.
      </p>
      <button 
        onClick={() => onOpenContact && onOpenContact()} 
        className="destination-cta"
      >
        Start Your Journey →
      </button>
    </div>
  );
}

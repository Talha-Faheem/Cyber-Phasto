import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function DestinationCard({
  destinationCardRef,
  endDotRef,
  activePath,
  onOpenContact
}) {
  return (
    <div className="destination-row">
      <div className="node-dot end-node" id="endNode" ref={endDotRef} />
      <div className="destination-card" id="destinationCard" ref={destinationCardRef}>
        <h2>Destination reached</h2>
        <p>
          Complete all sequential levels in order and you go from zero knowledge to a professional, portfolio&#8209;backed <b>{activePath.finalRole}</b> skillset.
        </p>
        <button 
          type="button"
          onClick={() => onOpenContact && onOpenContact()} 
          className="destination-cta-btn"
        >
          <span>Start your journey</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}


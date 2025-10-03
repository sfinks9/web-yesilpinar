"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FieldLines({ className = "" }) {
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;

    // Animate field lines drawing progressively
    const lines = field.querySelectorAll('.field-line');
    
    gsap.set(lines, { drawSVG: "0%" });
    
    gsap.to(lines, {
      drawSVG: "100%",
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      delay: 1
    });

  }, []);

  return (
    <div ref={fieldRef} className={`w-full max-w-4xl mx-auto ${className}`}>
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <defs>
          <pattern id="grass" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="#2d5016" />
            <path d="M0,4L4,0" stroke="#3d7029" strokeWidth="0.5" />
          </pattern>
        </defs>
        
        {/* Field background */}
        <rect width="400" height="200" fill="url(#grass)" opacity="0.3" />
        
        {/* Outer boundary */}
        <rect x="20" y="20" width="360" height="160" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        
        {/* Center line */}
        <line x1="200" y1="20" x2="200" y2="180" 
              stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        
        {/* Center circle */}
        <circle cx="200" cy="100" r="30" 
                fill="none" stroke="#22c55e" strokeWidth="2" 
                className="field-line" />
        
        {/* Center spot */}
        <circle cx="200" cy="100" r="2" 
                fill="#22c55e" 
                className="field-line" />
        
        {/* Left penalty area */}
        <rect x="20" y="60" width="60" height="80" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        
        {/* Right penalty area */}
        <rect x="320" y="60" width="60" height="80" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        
        {/* Left goal area */}
        <rect x="20" y="80" width="20" height="40" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        
        {/* Right goal area */}
        <rect x="360" y="80" width="20" height="40" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        
        {/* Left penalty spot */}
        <circle cx="60" cy="100" r="2" 
                fill="#22c55e" 
                className="field-line" />
        
        {/* Right penalty spot */}
        <circle cx="340" cy="100" r="2" 
                fill="#22c55e" 
                className="field-line" />
        
        {/* Corner arcs */}
        <path d="M20,20 Q30,20 30,30" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        <path d="M370,20 Q380,20 380,30" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        <path d="M20,180 Q30,180 30,170" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
        <path d="M370,180 Q380,180 380,170" 
              fill="none" stroke="#22c55e" strokeWidth="2" 
              className="field-line" />
      </svg>
    </div>
  );
}
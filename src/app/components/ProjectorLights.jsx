"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ProjectorLights({ className = "" }) {
  const lightsRef = useRef(null);

  useEffect(() => {
    const lights = lightsRef.current;
    if (!lights) return;

    const beams = lights.querySelectorAll('.light-beam');
    const projectors = lights.querySelectorAll('.projector');

    // Animate light beams
    gsap.set(beams, { scaleY: 0, transformOrigin: "top center" });
    
    gsap.to(beams, {
      scaleY: 1,
      duration: 2,
      stagger: 0.3,
      ease: "power2.out",
      delay: 2
    });

    // Gentle swing animation for projectors
    gsap.to(projectors, {
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

    // Flickering light effect
    gsap.to(beams, {
      opacity: 0.7,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: {
        amount: 1,
        repeat: -1
      }
    });

  }, []);

  return (
    <div ref={lightsRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg viewBox="0 0 1200 600" className="w-full h-full">
        <defs>
          <linearGradient id="lightBeam1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f0f8ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lightBeam2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#fef3c7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Left top projector */}
        <g className="projector">
          <rect x="100" y="50" width="60" height="30" rx="5" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
          <circle cx="130" cy="65" r="8" fill="#f7fafc" filter="url(#glow)" />
          <polygon points="100,80 160,80 180,450 80,450" fill="url(#lightBeam1)" className="light-beam" opacity="0.6" />
        </g>

        {/* Right top projector */}
        <g className="projector">
          <rect x="1040" y="50" width="60" height="30" rx="5" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
          <circle cx="1070" cy="65" r="8" fill="#f7fafc" filter="url(#glow)" />
          <polygon points="1040,80 1100,80 1120,450 1020,450" fill="url(#lightBeam2)" className="light-beam" opacity="0.6" />
        </g>

        {/* Center top projector */}
        <g className="projector">
          <rect x="570" y="40" width="60" height="30" rx="5" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
          <circle cx="600" cy="55" r="8" fill="#f7fafc" filter="url(#glow)" />
          <polygon points="570,70 630,70 680,450 520,450" fill="url(#lightBeam1)" className="light-beam" opacity="0.5" />
        </g>

        {/* Additional side projectors */}
        <g className="projector">
          <rect x="300" y="60" width="60" height="30" rx="5" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
          <circle cx="330" cy="75" r="8" fill="#f7fafc" filter="url(#glow)" />
          <polygon points="300,90 360,90 390,450 270,450" fill="url(#lightBeam2)" className="light-beam" opacity="0.4" />
        </g>

        <g className="projector">
          <rect x="840" y="60" width="60" height="30" rx="5" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />
          <circle cx="870" cy="75" r="8" fill="#f7fafc" filter="url(#glow)" />
          <polygon points="840,90 900,90 930,450 810,450" fill="url(#lightBeam1)" className="light-beam" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}
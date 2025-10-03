"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SoccerBall({ className = "" }) {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    // Initial animation - ball rolling in from left
    gsap.fromTo(ball, 
      {
        x: -300,
        rotation: -360,
        opacity: 0,
        scale: 0.5
      },
      {
        x: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "bounce.out",
        delay: 0.5
      }
    );

    // Continuous gentle bounce
    gsap.to(ball, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Gentle rotation
    gsap.to(ball, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none"
    });

  }, []);

  return (
    <div ref={ballRef} className={`w-20 h-20 md:w-24 md:h-24 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="ballGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#e5e5e5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        
        {/* Main ball circle */}
        <circle cx="50" cy="50" r="45" fill="url(#ballGradient)" stroke="#000" strokeWidth="2" />
        
        {/* Soccer ball pattern */}
        <polygon points="50,15 40,35 60,35" fill="#000" />
        <polygon points="50,85 40,65 60,65" fill="#000" />
        <polygon points="20,35 35,20 35,50 15,50" fill="#000" />
        <polygon points="80,35 65,20 65,50 85,50" fill="#000" />
        <polygon points="35,65 20,65 30,80 45,70" fill="#000" />
        <polygon points="65,65 80,65 70,80 55,70" fill="#000" />
        
        {/* Hexagonal pattern lines */}
        <path d="M50 15 L40 35 L60 35 Z" stroke="#333" strokeWidth="1" fill="none" />
        <path d="M50 85 L40 65 L60 65 Z" stroke="#333" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
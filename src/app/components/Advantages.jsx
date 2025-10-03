"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Advantages() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    // Initial setup
    gsap.set(cards, { 
      y: 50, 
      opacity: 0,
      rotationX: -15,
      transformPerspective: 1000
    });

    // Animate cards in sequence
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

    // Add hover effects
    cards.forEach((card, index) => {
      if (!card) return;
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          rotationY: 5,
          z: 100,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="container text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-green-light mb-12">
        Avantajlarımız
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div ref={addToRefs} className="advantage-card p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 transform-gpu">
          <div className="text-4xl mb-4">⚽</div>
          <h3 className="text-xl font-bold mb-3 text-green-light">Yeni Çim</h3>
          <p className="text-gray-300">Profesyonel kalite yeni çim.</p>
        </div>
        <div ref={addToRefs} className="advantage-card p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 transform-gpu">
          <div className="text-4xl mb-4">🚗</div>
          <h3 className="text-xl font-bold mb-3 text-green-light">Ulaşım Kolaylığı</h3>
          <p className="text-gray-300">Merkezi konum, rahat ulaşım.</p>
        </div>
        <div ref={addToRefs} className="advantage-card p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 transform-gpu">
          <div className="text-4xl mb-4">📹</div>
          <h3 className="text-xl font-bold mb-3 text-green-light">Maç Kaydı</h3>
          <p className="text-gray-300">Sahanızdaki maçları tekrar izleyin.</p>
        </div>
        <div ref={addToRefs} className="advantage-card p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 transform-gpu">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-3 text-green-light">Güvenlik</h3>
          <p className="text-gray-300">7/24 güvenlik kamerası ile koruma.</p>
        </div>
      </div>
    </div>
  );
}
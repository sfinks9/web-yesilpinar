"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Gallery() {

  useEffect(() => {
   gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.gallery-item',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'circ.inOut',
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.gallery-item',
          start: 'top 60%',
        },
      }
    );
  },
  []);


  return (
    <div className="container text-center relative">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern futsal field" 
              className="w-full h-92 object-cover"
            />
          </div>
          <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Soccer field aerial view" 
              className="w-full h-92 object-cover"
            />
          </div>
          <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Football stadium lights" 
              className="w-full h-92 object-cover"
            />
          </div>
          <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Soccer players on field" 
              className="w-full h-92 object-cover"
            />
          </div>
            <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Soccer players on field" 
              className="w-full h-92 object-cover"
            />
          </div>
            <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Soccer players on field" 
              className="w-full h-92 object-cover"
            />
          </div>
            <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Soccer players on field" 
              className="w-full h-92 object-cover"
            />
          </div>
          <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Football goal close-up" 
              className="w-full h-92 object-cover"
            />
          </div>
          <div className="gallery-item overflow-hidden rounded-xl shadow-2xl transform-gpu">
            <img 
              src="https://images.unsplash.com/photo-1544899465-4bbf5cd4b4f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Soccer ball on grass" 
              className="w-full h-92 object-cover"
            />
          </div>
        </div>
    </div>
  );
}

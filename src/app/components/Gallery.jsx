"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SingleImage from "./SingleImage";
export default function Gallery() {
  const images = [
    {
      id: 1,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
    {
      id: 2,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
    {
      id: 3,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
    {
      id: 4,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
    {
      id: 5,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
    {
      id: 6,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
    {
      id: 7,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
    {
      id: 8,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
    {
      id: 9,
      image: "/soccer-field.jpg",
      alt: "Halısaha çimleri",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".gallery-item").forEach((item, i) => {
      gsap.from(item, {
        x: 200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
        // delay: i * 0.2,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
    gsap.utils.toArray(".gallery-item").forEach((item, i) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.1,
          duration: 0.3,
          ease: "power1.out",
        });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    })
    // gsap.fromTo('.gallery-item',
    //   { x: -100, opacity: 0 },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 1,
    //     ease: 'circ.inOut',
    //     stagger: 0.5,
    //     scrollTrigger: {
    //       trigger: '.gallery-item',
    //       start: 'top 60%',
    //     },
    //   }
    // );
  }, []);

  return (
    <div className="container text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img,index) => (
          <SingleImage key={img.id} item={img} />
        ))}
      </div>
    </div>
  );
}

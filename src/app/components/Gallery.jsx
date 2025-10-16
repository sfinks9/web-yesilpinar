"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SingleImage from "./SingleImage";
export default function Gallery() {
  const images = [
    {
      id: 1,
      image: "/halisaha1.jpeg",
      alt: "Modern halısaha tesisi - kaliteli halı saha kiralık genel görünüm",
    },
    {
      id: 2,
      image: "/halisaha2.jpeg",
      alt: "Halısaha çim kalitesi - profesyonel futbol sahası zemini",
    },
    {
      id: 3,
      image: "/halisaha3.jpeg",
      alt: "Gece aydınlatmalı halısaha - 7/24 halı saha kiralık",
    },
    {
      id: 4,
      image: "/halisaha4.jpeg",
      alt: "Halısaha soyunma odaları - modern tesis imkanları",
    },
    {
      id: 5,
      image: "/halisaha5.jpeg",
      alt: "Futbol sahası kale alanı - halısaha kiralık detay",
    },
    {
      id: 6,
      image: "/halisaha6.jpeg",
      alt: "Halısaha yan çizgi görünümü - profesyonel halı saha",
    },
    {
      id: 7,
      image: "/halisaha7.jpeg",
      alt: "Halısaha tribün alanı - seyirci kapasiteli futbol sahası",
    },
    {
      id: 8,
      image: "/halisaha8.jpeg",
      alt: "Halısaha park alanı - araç park imkanı olan tesis",
    },
    {
      id: 9,
      image: "/halisaha9.jpeg",
      alt: "Halısaha giriş kapısı - modern halı saha tesisi entrance",
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
    <section id="gallery" className="container text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img,index) => (
          <SingleImage key={img.id} item={img} />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function Section({ className, title = "", children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    gsap.utils.toArray(".section-title").forEach((el) => {
      const text = new SplitText(el, { type: "words,chars" });

      gsap.from(text.words, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        stagger: 0.05,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  return (
    <section
      className={`min-h-screen flex flex-col items-center py-14 px-6 ${className}`}
    >
      <h2 className="section-title text-3xl md:text-5xl font-bold text-green-light mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}

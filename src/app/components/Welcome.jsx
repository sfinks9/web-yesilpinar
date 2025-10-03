"use client";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
export default function Welcome() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    const tl = gsap.timeline();

    // Enhanced text animation with SplitText
    const text = new SplitText(".left-side h1", { type: "words,chars" });
    const subtitle = new SplitText(".left-side p", { type: "words" });

    // Main title animation - enhanced
    tl.from(
      text.words,
      {
        opacity: 0,
        y: 100,
        rotationX: -90,
        // transformOrigin: "50% 50% -100px",
        stagger: 0.02,
        duration: 1,
        ease: "back.out(1.7)",
      },
      0.5
    );

    // Subtitle animation
    tl.from(
      subtitle.words,
      {
        opacity: 0,
        y: 30,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
      },
      1.2
    );

    // Image animation with enhanced effects
    tl.from(
      ".right-side img",
      {
        x: 300,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      },
      1.8
    );

    // Button animation with glow effect
    tl.from(
      "#reservation",
      {
        opacity: 0,
        scale: 1.2,
        y: -30,
        duration: 1,
      },
      2.5
    );
  }, []);
  return (
    <div className="grid grid-cols-12 items-center">
      <div className="left-side lg:py-5 lg:px-16 col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-2xl text-center md:text-start  text-green-light bg-clip-text ">
          Yeşilpınar Halı Saha - Futbolun En Güzel Hali
        </h1>
        <p className="mt-4 text-lg text-center lg:text-start text-gray-300">
          Arkadaşlarınla buluş, kaliteli zeminde oyna ve maç sonrası konforu
          doyasıya yaşa. Özel soyunma odaları, kusursuz çim kalitesi ve
          profesyonel atmosfer seni bekliyor.
        </p>
        <div className="mt-6">
          <button
            id="reservation"
            className="bg-green-light hover:bg-green-600 text-black font-bold py-3 px-8 rounded-2xl"
          >
            Rezervasyon Yap
          </button>
        </div>
      </div>

      <div className="right-side col-span-12 lg:col-span-6 mt-16 lg:mt-0 lg:p-2">
        <img
          src="/soccer.svg"
          alt="Halı Saha"
        />
      </div>
    </div>
  );
}

"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
export default function Navbar() {

  useGSAP(() => {
    gsap.from('nav',{
      y: -100,
      opacity:0,
      duration:1,
      ease:"power1.inOut"
    })
  },[]);


  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-dark/80 backdrop-blur-md text-white z-50 py-1 px-10">
      <div className="container flex justify-between items-center py-4">
        <span className="text-greenLight font-bold">⚽ Yeşilpınar Spor Kulübü</span>
        <div className="space-x-6 hidden md:flex">
          <a href="#welcome">Ana Sayfa</a>
          <a href="#gallery">Galeri</a>
          <a href="#advantages">Avantajlar</a>
          <a href="#contact">İletişim</a>
        </div>
      </div>
    </nav>
  );
}

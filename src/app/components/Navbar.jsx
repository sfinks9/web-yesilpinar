"use client";

import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    {
      id: "welcome",
      title: "Vizyonumuz",
    },
    {
      id: "gallery",
      title: "Görüntülerimiz",
    },
    {
      id: "advantages",
      title: "Avantajlarımız",
    },
    {
      id: "contact",
      title: "İletişim",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.to("nav", {
    //   backgroundColor: "#10b981",
    //   duration: 1,
    //   ease: "power4.inOut",
    //   scrollTrigger: {
    //     trigger: "#welcome",
    //     start: "top top",
    //     toggleActions: "play none none reverse",
    //   },
    // });

      gsap.to("nav", {
    backgroundColor: "#10b981",
    backdropFilter: "blur(8px)",
    duration: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "body",
      start: "top -50",
      toggleActions: "play none none reverse",
    },
  });
  }, []);

  return (
    <>
      <nav className="fixed z-50 w-full py-1 px-10">
        <div className="container flex justify-between items-center py-4">
          <span className="text-white font-bold">
            ⚽ Yeşilpınar Spor Kulübü
          </span>

          {/* Desktop Menu */}
          <ul className="space-x-6 hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="cursor-pointer text-nowrap md:text-base text-sm"
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-12 h-8 space-y-1 z-100"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <Menu size={32} color="white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>

          {/* Menu Content */}
          <div className="fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-lg">
            <div className="flex flex-col p-8 pt-20">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      className="block text-white text-lg font-medium hover:text-green-400 transition-colors py-2"
                      href={`#${link.id}`}
                      onClick={closeMobileMenu}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info in Mobile Menu */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="space-y-4">
                  <a
                    href="tel:+905551234567"
                    className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>Rezervasyon</span>
                  </a>

                  <a
                    href="https://wa.me/905551234567?text=Merhaba! Halısaha rezervasyonu yapmak istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

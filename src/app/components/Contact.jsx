"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    const text = new SplitText(".contact-header", { type: "words,chars" });

    gsap.from(text.words, {
      scrollTrigger: {
        trigger: ".contact-header",
        start: "top 90%",
      },
      opacity: 0,
      y: 100,
      stagger: 0.05,
      ease: "back.inOut",
    });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".grid",
    //     start: "top 60%",
    //   },
    // });
    // tl.from(".grid", {
    //   opacity: 0,
    //   y: 100,
    //   stagger: 0.5,
    //   duration: 2,
    // });

    const cards = gsap.utils.toArray(".card-item");
    const contacts = gsap.utils.toArray(".contact-item");
    const facilities = gsap.utils.toArray(".facility-item");

    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // her kart görünürken başlar
        },
      });
    });

    gsap.from(contacts, {
      opacity: 0,
      x: -30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-info",
        start: "top 80%",
      },
    });

    gsap.from(facilities, {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".facilities-section",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="contact" className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16 contact-header">
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Rezervasyonlarınız için bizimle iletişime geçin. Size en iyi hizmeti
          sunmak için buradayız.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 quick-cards">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-green-500/20 hover:border-green-500/50 transition-all duration-300 card-item">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Hızlı Rezervasyon
          </h3>
          <p className="text-gray-300 mb-4">Anında rezervasyon yapın</p>
          <a
            href="tel:+905551234567"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors text-center"
          >
            Rezervasyon Yap
          </a>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-green-500/20 hover:border-green-500/50 transition-all duration-300 card-item">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Fiyat Bilgisi
          </h3>
          <p className="text-gray-300 mb-4">Güncel fiyatları öğrenin</p>
          <div className="flex space-x-2">
            <a
              href="tel:+905559876543"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors text-center text-sm"
            >
              📞 Ara
            </a>
            <a
              href="https://wa.me/905559876543?text=Merhaba! Halısaha fiyat bilgilerini öğrenmek istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors text-center text-sm"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-green-500/20 hover:border-green-500/50 transition-all duration-300 card-item">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Turnuvalar</h3>
          <p className="text-gray-300 mb-4">Turnuva bilgileri</p>
          <div className="flex space-x-2">
            <a
              href="tel:+905559876543"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors text-center text-sm"
            >
              📞 Ara
            </a>
            <a
              href="https://wa.me/905559876543?text=Merhaba! Turnuva takvimi ve bilgileri hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors text-center text-sm"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Contact Details */}
        <div className="contact-info">
          <h3 className="text-2xl font-bold text-white mb-8">
            İletişim Bilgileri
          </h3>

          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="flex items-center space-x-4 contact-item">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-400"
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
              </div>
              <div>
                <p className="text-gray-400 text-sm">Rezervasyon Hattı</p>
                <a
                  href="tel:+905551234567"
                  className="text-white text-lg font-semibold hover:text-green-400 transition-colors cursor-pointer"
                >
                  +90 555 123 45 67
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 contact-item">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-400"
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
              </div>
              <div>
                <p className="text-gray-400 text-sm">Genel Bilgi</p>
                <a
                  href="tel:+905559876543"
                  className="text-white text-lg font-semibold hover:text-green-400 transition-colors cursor-pointer"
                >
                  +90 555 987 65 43
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 contact-item">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Adres</p>
                <p className="text-white text-lg">
                  Yeşilpınar, Girne Cd No:163, 34065
                </p>
                <p className="text-white text-lg"> Eyüpsultan/İstanbul</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 contact-item">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">E-posta</p>
                <p className="text-white text-lg">info@futbolsahasi.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-4 contact-item">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Çalışma Saatleri</p>
                <p className="text-white">Pazartesi - Pazar: 06:00 - 24:00</p>
                <p className="text-green-400 text-sm">7/24 Açık</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="mt-8">
            <a
              href="https://wa.me/905551234567?text=Merhaba! Halısaha rezervasyonu yapmak istiyorum. Müsait saatler ve fiyatlar hakkında bilgi alabilir miyim?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors whatsapp-btn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>WhatsApp ile İletişim</span>
            </a>
          </div>
        </div>

        {/* Facilities */}
        <div className="facilities-section">
          <h3 className="text-2xl font-bold text-white mb-8">Tesislerimiz</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/30 rounded-lg p-4 text-center facility-item">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">Soyunma Odası</p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-4 text-center facility-item">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">Duş</p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-4 text-center facility-item">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">Kafeterya</p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-4 text-center facility-item">
              <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">Otopark</p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-4 text-center facility-item">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">Güvenlik Kamerası</p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-4 text-center facility-item">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">LED Aydınlatma</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-semibold mb-2">
              Acil Durum / Maç Günü
            </h4>
            <a
              href="tel:+905559998877"
              className="text-white text-lg font-semibold hover:text-red-400 transition-colors cursor-pointer"
            >
              +90 555 999 88 77
            </a>
            <p className="text-gray-400 text-sm">24 saat ulaşılabilir</p>
          </div>
        </div>
      </div>

      {/* Large Map Section */}
      <div className="map-section">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Konum
        </h3>
        <div className="relative">
          <iframe
            title="Futbol Sahası Konumu"
            className="w-full h-96 md:h-[500px] rounded-2xl shadow-2xl border border-green-500/20"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.9961082326686!2d28.916330276244874!3d41.069077715678596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0ed9a4146ef%3A0x6c16f6d1b227bce6!2zWWXFn2lscMSxbmFyLCBHaXJuZSBDZCBObzoxNjMsIDM0MDY1IEV5w7xwc3VsdGFuL8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1759498734376!5m2!1sen!2str"
            loading="lazy"
          ></iframe>

          {/* Map Overlay with Directions Button */}
          <div className="absolute bottom-4 right-4">
            <a
              href="https://maps.google.com/maps?q=Beşiktaş,İstanbul&t=&z=15"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <span>Yol Tarifi</span>
            </a>
          </div>
        </div>
      </div>

      {/* Social Media */}
      {/* <div className="text-center mt-16 social-media">
          <h3 className="text-xl font-bold text-white mb-6">Bizi Takip Edin</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors social-item">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors social-item">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors social-item">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
              </svg>
            </a>
          </div>
        </div> */}
    </section>
  );
}

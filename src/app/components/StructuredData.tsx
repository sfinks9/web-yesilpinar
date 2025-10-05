"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://halisaha-kiralik.com/#business",
    "name": "Halısaha Kiralık - Modern Futbol Sahası",
    "description": "Profesyonel halısaha kiralık hizmeti. Modern tesisler, kaliteli zemin, uygun fiyatlar ve kolay rezervasyon imkanı.",
    "url": "https://halisaha-kiralik.com",
    "telephone": "+90-XXX-XXX-XXXX", // Gerçek telefon numarası eklenecek
    "email": "info@halisaha-kiralik.com", // Gerçek email eklenecek
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Örnek Mahallesi, Spor Caddesi No: 123", // Gerçek adres eklenecek
      "addressLocality": "İstanbul", // Gerçek şehir eklenecek
      "addressRegion": "İstanbul",
      "postalCode": "34000", // Gerçek posta kodu eklenecek
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082", // Gerçek koordinatlar eklenecek
      "longitude": "28.9784"
    },
    "image": [
      "https://halisaha-kiralik.com/soccer-field.jpg"
    ],
    "priceRange": "$$",
    "openingHours": [
      "Mo-Su 06:00-24:00"
    ],
    "sameAs": [
      "https://www.facebook.com/halisaha-kiralik", // Gerçek sosyal medya linkleri eklenecek
      "https://www.instagram.com/halisaha-kiralik"
    ],
    "areaServed": {
      "@type": "City",
      "name": "İstanbul" // Hizmet verilen şehir/bölge
    },
    "serviceType": "Halısaha Kiralık",
    "additionalType": "https://schema.org/SportsActivityLocation",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Changing Rooms",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Equipment Rental",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Night Lighting",
        "value": true
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Halısaha Kiralık Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Saatlik Halısaha Kiralık",
            "description": "Modern halısaha tesislerinde saatlik kiralama hizmeti"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Günlük Halısaha Kiralık", 
            "description": "Özel etkinlikler için günlük halısaha kiralama"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Turnuva Organizasyonu",
            "description": "Futbol turnuvaları ve özel etkinlikler için organizasyon hizmeti"
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Örnek Kullanıcı"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Harika bir halısaha! Kaliteli zemin ve modern tesisler. Kesinlikle tavsiye ederim."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
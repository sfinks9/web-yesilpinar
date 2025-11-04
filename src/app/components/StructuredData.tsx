"use client";

export default function StructuredData() {
  const structuredData = [
    {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "LocalBusiness",
      "@id":
        "[https://yesilpinarhalisaha.com/#business](https://yesilpinarhalisaha.com/#business)",
      name: "Yeşilpınar Spor Kulübü - Yeşilpınar Halı Saha Kiralık",
      description:
        "Eyüp Yeşilpınar'da modern, ışıklı halı saha. Online rezervasyonla hemen futbol keyfine başla!",
      url: "[https://yesilpinarhalisaha.com](https://yesilpinarhalisaha.com)",
      telephone: "+90-542-273-3987",
      email:
        "[yesilpinarspor1@gmail.com](mailto:yesilpinarspor1@gmail.com)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Yeşilpınar Mahallesi, Eyüpsultan",
        addressLocality: "İstanbul",
        addressRegion: "İstanbul",
        postalCode: "34065",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "41.0662",
        longitude: "28.9364",
      },
      image: [
        "[https://yesilpinarhalisaha.com/logo.png](https://yesilpinarhalisaha.com/logo.png)",
        "[https://yesilpinarhalisaha.com/soccer-field.jpg](https://yesilpinarhalisaha.com/soccer-field.jpg)",
      ],
      priceRange: "$$",
      openingHours: ["Mo-Su 06:00-24:00"],
      sameAs: [
        "[https://www.instagram.com/yesilpinarhalisaha](https://www.instagram.com/yesilpinarhalisaha)",
        "[https://www.facebook.com/yesilpinarhalisaha](https://www.facebook.com/yesilpinarhalisaha)",
      ],
      serviceType: "Halısaha Kiralık",
      additionalType:
        "[https://schema.org/SportsActivityLocation](https://schema.org/SportsActivityLocation)",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Changing Rooms",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Night Lighting",
          value: true,
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
      },
    },
    {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "Organization",
      name: "Yeşilpınar Spor Kulübü",
      url: "[https://yesilpinarhalisaha.com](https://yesilpinarhalisaha.com)",
      logo: "[https://yesilpinarhalisaha.com/logo.png](https://yesilpinarhalisaha.com/logo.png)",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

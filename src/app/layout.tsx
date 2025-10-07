import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Yeşilpınar Spor Kulübü | Halı Saha Kirala ",
    template: "%s | Halısaha Kiralık"
  },
  description: "Eyüp/Yeşilpınar Halı Saha, Eyüpsultan'da modern, ışıklı çim sahasıyla futbol keyfi sunuyor. Online rezervasyon yap, hemen oyna!",
  keywords: ["halısaha", "halı saha", "kiralık", "futbol sahası", "rezervasyon","Yeşilpınar Spor Kulübü", "spor tesisi", "futbol", "halısaha kiralık", "spor sahası"],
  authors: [{ name: "Halısaha Kiralık" }],
  creator: "Halısaha Kiralık",
  publisher: "Halısaha Kiralık",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    title: "Halısaha Kiralık | Modern Futbol Sahası Rezervasyonu",
    description: "Profesyonel halısaha kiralık hizmeti. Modern tesisler, uygun fiyatlar, kolay rezervasyon. 7/24 halı saha kiralama.",
    siteName: "Halısaha Kiralık",
    images: [
      {
        url: "/soccer-field.jpg",
        width: 1200,
        height: 630,
        alt: "Modern halısaha tesisi - kaliteli halı saha kiralık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halısaha Kiralık | Modern Futbol Sahası Rezervasyonu",
    description: "Profesyonel halısaha kiralık hizmeti. Modern tesisler, uygun fiyatlar, kolay rezervasyon.",
    images: ["/soccer-field.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Gerçek kod eklenecek
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17626766486"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17626766486');
            `,
          }}
        />
        <link rel="canonical" href="/" />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}

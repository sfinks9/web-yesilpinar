export default function Contact() {
  return (
    <div className="container text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-green-light mb-6">
        Bize Ulaşın
      </h2>
      <p className="mb-4 text-gray-300">
        Telefon: <span className="text-white">+90 555 555 55 55</span>
      </p>
      <p className="mb-8 text-gray-300">
        Adres: Halı Saha Caddesi No: 10, İstanbul
      </p>
      <iframe
        title="map"
        className="mx-auto w-full md:w-2/3 h-64 rounded-lg shadow-lg"
        src="https://maps.google.com/maps?q=istanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );
}

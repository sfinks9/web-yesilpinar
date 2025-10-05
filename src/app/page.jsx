import Image from "next/image";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Advantages from "./components/Advantages";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main className=" text-white">
      <Navbar />

      <Section className="bg-gray-medium">
        <Welcome />
      </Section>

      <Section title="Halısaha Galeri" className="bg-gray-dark">
        <Gallery />
      </Section>

        <Section title="Halısaha Avantajlarımız" className="bg-gray-medium">
        <Advantages />
      </Section>

        <Section title="Halısaha Rezervasyon İletişim" className="bg-gray-dark">
        <Contact />
      </Section>

    </main>
  );
}

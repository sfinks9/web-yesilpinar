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

      <Section id="welcome" className="bg-gray-medium">
        <Welcome />
      </Section>

      <Section title="Galeri" id="gallery" className="bg-gray-dark">
        <Gallery />
      </Section>

        <Section id="advantages" className="bg-gray-medium">
        <Advantages />
      </Section>

        <Section id="contact" className="bg-gray-dark">
        <Contact />
      </Section>

    </main>
  );
}

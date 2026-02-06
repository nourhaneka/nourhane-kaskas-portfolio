import HeroIntroScroll from "./components/HeroIntroScroll";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroIntroScroll />
      {/* <ServicesSection /> */}
      <Projects />
      <Footer />
    </main>
  );
}

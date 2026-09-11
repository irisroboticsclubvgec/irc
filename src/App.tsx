import AnimatedBackground from "./components/fx/AnimatedBackground";
import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Domains from "./components/sections/Domains";
import Projects from "./components/sections/Projects";
import Gallery from "./components/sections/Gallery";
import Members from "./components/sections/Members";
import Mentors from "./components/sections/Mentors";
import Join from "./components/sections/Join";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Preloader />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <Projects />
        <Gallery />
        <Members />
        <Mentors />
        <Join />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

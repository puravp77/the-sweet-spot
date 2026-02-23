import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import MenuPreview from "./components/MenuPreview";
import FullMenu from "./components/FullMenu";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingBackToTop from "./components/FloatingBackToTop";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-surface min-h-screen text-primary font-body relative">
      <Preloader />
      <Navbar />
      <Hero />
      <div className="h-px bg-primary/10"></div>
      <About />
      <div className="h-px bg-primary/10"></div>
      <MenuPreview />
      <div className="h-px bg-primary/10"></div>
      <FullMenu />
      <div className="h-px bg-primary/10"></div>
      <Testimonials />
      <div className="h-px bg-primary/10"></div>
      <Footer />
      <FloatingWhatsApp />
      <FloatingBackToTop />
    </div>
  );
}

export default App;

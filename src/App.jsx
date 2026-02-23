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
import { Toaster } from "react-hot-toast";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Scroll Progress Bar
    gsap.to("#scroll-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Fade-in reveal for all sections
    gsap.utils.toArray('section').forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    AOS.init({
      duration: 800,
      once: true, // Only animate once to save resources
      easing: "ease-out"
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-white min-h-screen text-primary font-body relative overflow-x-hidden">
      <Toaster position="bottom-center" />
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-accent z-[60] origin-left scale-x-0 transition-transform duration-75" id="scroll-progress"></div>

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

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuPreview from "./components/MenuPreview";
import FloatingWhatsApp from "./components/FloatingWhatsApp"; 
import FullMenu from "./components/FullMenu";
import FloatingBackToTop from "./components/FloatingBackToTop";


function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-cream min-h-screen text-dark font-body">
      <Navbar />
      <Hero />
      <MenuPreview />
      <FloatingWhatsApp />
      <FloatingBackToTop />
      <FullMenu />


    </div>
  );
}

export default App

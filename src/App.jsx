import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuPreview from "./components/MenuPreview";
import FloatingWhatsApp from "./components/FloatingWhatsApp"; 
import FullMenu from "./components/FullMenu";


function App() {
  return (
    <div className="bg-cream min-h-screen text-dark font-body">
      <Navbar />
      <Hero />
      <MenuPreview />
      <FloatingWhatsApp />
      <FullMenu />


    </div>
  );
}

export default App



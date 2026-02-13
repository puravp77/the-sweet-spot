import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuPreview from "./components/MenuPreview";


function App() {
  return (
    <div className="bg-cream min-h-screen text-dark font-body">
      <Navbar />
      <Hero />
      <MenuPreview />

    </div>
  );
}

export default App



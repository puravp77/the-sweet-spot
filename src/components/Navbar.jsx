import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 md:px-16 py-6 bg-cream">
      
      <h1 className="font-heading text-xl md:text-2xl tracking-wider">
        THE SWEET SPOT
      </h1>

      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/__.thesweetspot._/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gold transition duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-dark px-5 py-2 rounded-full text-sm hover:bg-dark hover:text-white transition duration-300"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

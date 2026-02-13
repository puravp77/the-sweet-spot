import { FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-4 md:px-10 py-6 bg-cream">
      
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="The Sweet Spot"
          className="h-14 md:h-16 w-auto object-contain object-left"
        />
        <span className="font-heading text-xl md:text-2xl tracking-wider">
          THE SWEET SPOT
        </span>
      </div>

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
          href="https://wa.me/+919913125551"
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

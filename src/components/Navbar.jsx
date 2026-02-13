import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-cream px-4 py-3 sm:px-6 md:px-10 sm:py-4">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_120deg,rgba(191,161,129,0.55),rgba(255,255,255,0.9),rgba(191,161,129,0.55))] blur-[2px]"></div>
            <div className="relative rounded-full p-[2px] bg-white/80 shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
              <img
                src={logo}
                alt="The Sweet Spot"
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-18 md:w-18 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <span className="absolute left-1/2 -translate-x-1/2 font-heading text-sm sm:text-lg md:text-xl tracking-[0.2em] whitespace-nowrap">
          THE SWEET SPOT
        </span>

        <div className="hidden sm:flex items-center gap-6">
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

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border-0 hover:bg-dark hover:text-white transition duration-300"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="https://www.instagram.com/__.thesweetspot._/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border-0 hover:bg-dark hover:text-white transition duration-300"
          >
            <FaInstagram className="text-lg" />
          </a>

          <a
            href="https://wa.me/+919913125551"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-dark px-4 py-2.5 rounded-full text-sm text-center hover:bg-dark hover:text-white transition duration-300"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

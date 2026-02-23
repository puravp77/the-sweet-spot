import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-primary/10 px-4 py-3 sm:px-6 md:px-10 sm:py-4 z-50 transition-all duration-300">
      <div className="relative flex items-center justify-between h-14">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="The Sweet Spot"
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-18 md:w-18 rounded-full object-cover shadow-sm"
          />
        </div>

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-medium text-lg sm:text-xl md:text-2xl tracking-[0.2em] sm:tracking-[0.25em] whitespace-nowrap leading-none text-primary">
          THE SWEET SPOT
        </span>

        <div className="hidden sm:flex items-center gap-6">
          <a
            href="https://www.instagram.com/__.thesweetspot._/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-primary/80 hover:text-accent transition duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/+919913125551"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-primary/20 bg-transparent px-6 py-2.5 rounded-full text-sm font-medium tracking-wide text-primary transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(44,30,22,0.1)]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-surface-light">Order Now</span>
            <div className="absolute inset-0 h-full w-full translate-y-full bg-primary transition-transform duration-300 ease-out group-hover:translate-y-0 text-white"></div>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border-0 text-primary hover:bg-primary/5 transition duration-300 relative z-10"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-[2px] w-5 bg-current transition-transform duration-300 origin-center ${isOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
            />
            <span
              className={`block h-[2px] w-5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`block h-[2px] w-5 bg-current transition-transform duration-300 origin-center ${isOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen
            ? "max-h-56 opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
          }`}
      >
        <div className="rounded-2xl border border-primary/10 bg-white/90 backdrop-blur-lg px-5 py-5 shadow-xl transform transition-transform duration-500 origin-top">
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://wa.me/+919913125551"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary text-surface-light px-4 py-3 rounded-xl text-sm font-medium text-center shadow-md hover:bg-primary-light transition-colors duration-300"
            >
              Order on WhatsApp
            </a>
            <a
              href="https://www.instagram.com/__.thesweetspot._/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary/80 hover:text-accent transition duration-300"
            >
              <FaInstagram className="text-xl" />
              <span className="text-sm font-medium">Follow us on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

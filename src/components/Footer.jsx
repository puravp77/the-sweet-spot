import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="The Sweet Spot"
                className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
              />
              <h3 className="font-heading text-xl">The Sweet Spot</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Premium handcrafted desserts for every celebration.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/70">
              Contact
            </h4>
            <p className="mt-3 text-sm text-white/80">+91 99131 25551</p>
            <p className="mt-2 text-sm text-white/80">
              thesweetspot.bakery@email.com
            </p>
            <p className="mt-2 text-sm text-white/80">
              21, Sunset Avenue, Ahmedabad, India
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/70">
              Connect
            </h4>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.instagram.com/__.thesweetspot._/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 hover:bg-white hover:text-dark"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919913125551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 hover:bg-white hover:text-dark"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} The Sweet Spot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;


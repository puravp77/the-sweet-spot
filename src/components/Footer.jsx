import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className="relative bg-primary text-surface overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/20 z-0"></div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 z-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="The Sweet Spot"
                className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20 shadow-lg"
              />
              <h3 className="font-heading text-2xl tracking-wide">The Sweet Spot</h3>
            </div>
            <p className="mt-4 text-sm text-surface/70 leading-relaxed font-light">
              Premium handcrafted desserts for every celebration. Made with love and the finest ingredients.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/90 mb-6">
              Contact
            </h4>
            <div className="space-y-3 font-light">
              <p className="text-sm text-surface/80 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                +91 99131 25551
              </p>
              <p className="text-sm text-surface/80 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                thesweetspot.bakery@email.com
              </p>
              <p className="text-sm text-surface/80 flex items-center gap-3 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
                21, Sunset Avenue, Ahmedabad, India
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/90 mb-6">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/__.thesweetspot._/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-surface/20 text-surface transition-all duration-300 hover:bg-accent hover:border-accent hover:text-primary hover:-translate-y-1 shadow-lg"
              >
                <FaInstagram className="text-lg transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://wa.me/919913125551"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-surface/20 text-surface transition-all duration-300 hover:bg-accent hover:border-accent hover:text-primary hover:-translate-y-1 shadow-lg"
              >
                <FaWhatsapp className="text-lg transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-surface/10 pt-8 text-center flex flex-col items-center justify-center">
          <span className="w-8 h-px bg-accent/30 mb-6"></span>
          <div className="text-xs text-surface/50 font-light tracking-wide uppercase">
            © {new Date().getFullYear()} The Sweet Spot. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


import cakeBg from "../assets/cake-bg.jpg";
import cake1 from "../assets/cake1.jpg";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 pt-20 pb-16 sm:pt-24 sm:pb-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-70"
        style={{ backgroundImage: `url(${cakeBg})` }}
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),rgba(248,240,228,0.78),rgba(237,226,208,0.9))]"></div>
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-dark/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-10">
          <div className="text-center md:text-left md:max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/60 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-dark/80 shadow-[0_8px_16px_rgba(0,0,0,0.08)] animate-fade-in">
          Freshly Baked Daily
            </span>

            <h2 className="mt-5 font-heading text-[2.7rem] sm:text-5xl md:text-6xl leading-[1.02] mb-5 tracking-[0.02em] text-dark drop-shadow-[0_10px_24px_rgba(0,0,0,0.14)] animate-fade-up">
              Handcrafted{" "}
              <span className="bg-gradient-to-r from-dark via-gold to-dark bg-clip-text text-transparent">
                Desserts
              </span>{" "}
              <br />
              for Your <span className="italic">Sweetest</span> Moments.
            </h2>

            <p className="text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8 text-sm md:text-base leading-relaxed animate-fade-up [animation-delay:120ms]">
              Freshly baked with love using premium ingredients. <br />
              Delivery & takeaway available.
            </p>

            <div className="mx-auto md:mx-0 h-px w-24 bg-dark/15 mb-8 animate-fade-in [animation-delay:180ms]"></div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-up [animation-delay:220ms]">
              <a
                href="https://wa.me/+919913125551"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-9 py-3 rounded-full text-sm font-semibold tracking-wide text-white bg-dark shadow-[0_14px_28px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_32px_rgba(0,0,0,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                Order on WhatsApp
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] tracking-[0.1em]">
                  →
                </span>
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center px-9 py-3 rounded-full text-sm font-semibold tracking-wide text-dark border border-dark/40 bg-white/70 backdrop-blur-sm shadow-[0_10px_20px_rgba(0,0,0,0.14)] transition duration-300 hover:bg-dark hover:text-white hover:border-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-dark/40"
              >
                View Menu
              </a>
            </div>
          </div>

          <div className="relative w-64 sm:w-72 md:w-80 animate-fade-up [animation-delay:260ms]">
            <div className="absolute -inset-6 rounded-[32px] bg-white/60 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-[28px] border border-dark/10 bg-white/80 backdrop-blur shadow-[0_22px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_48px_rgba(0,0,0,0.28)]">
              <div className="absolute -inset-px rounded-[28px] border border-gold/30 pointer-events-none"></div>
              <div className="absolute right-4 top-4 rounded-full bg-dark/90 px-3 py-1 text-[11px] font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.18)]">
                Featured
              </div>
              <img
                src={cake1}
                alt="Chocolate Truffle Cake"
                className="h-48 sm:h-56 w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              <div className="p-5 text-left">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-dark/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                  Signature Slice
                </div>
                <h3 className="mt-2 font-heading text-lg text-dark">
                  Chocolate Truffle Cake
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Velvet layers, rich ganache, and a soft cocoa finish.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] uppercase tracking-[0.18em] text-dark/70">
                    <span className="h-2 w-2 rounded-full bg-gold"></span>
                    Bestseller
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white bg-dark px-4 py-2 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.16)]">
                    Order Now
                    <span className="text-sm leading-none">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;

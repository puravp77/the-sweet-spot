import heroCake from "../assets/cake-bg.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-12"
        style={{ backgroundImage: `url(${heroCake})` }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),rgba(248,240,228,0.8),rgba(237,226,208,0.9))]"></div>
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-dark/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:gap-16">
        <div className="w-full md:max-w-xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/70 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-dark/70 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
            Freshly Baked Daily
          </div>
          <h1 className="mt-5 font-heading text-[2.7rem] leading-[1.05] text-dark sm:text-5xl md:text-6xl">
            Handcrafted <span className="text-gold">Desserts</span> for Your
            Sweetest Moments.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-gray-700 sm:text-base">
            Premium ingredients, exquisite flavors, and artisanal finishes for
            every celebration.
          </p>

          <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="120">
            <a
              href="https://wa.me/919913125551"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full bg-dark px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_14px_28px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(0,0,0,0.34)]"
            >
              Order on WhatsApp
              <span className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-0.5">
                ?
              </span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-dark/40 bg-white/70 px-7 py-3 text-sm font-semibold tracking-wide text-dark shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-dark hover:text-white"
            >
              View Menu
            </a>
          </div>
        </div>

        <div className="relative w-full md:w-[46%]" data-aos="fade-up" data-aos-delay="200"></div>
      </div>
    </section>
  );
}

export default Hero;

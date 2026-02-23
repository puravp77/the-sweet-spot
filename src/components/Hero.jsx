import heroCake from "../assets/cake-bg.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface pt-20 pb-16">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-15 mix-blend-multiply"
        style={{ backgroundImage: `url(${heroCake})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface"></div>

      {/* Animated Blobs */}
      <div className="absolute top-10 -right-20 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -left-32 h-[35rem] w-[35rem] rounded-full bg-rose/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 h-[25rem] w-[25rem] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-blob" style={{ animationDelay: "4s" }}></div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 w-full z-10">
        <div className="w-full md:max-w-xl text-center md:text-left" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/80 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Freshly Baked Daily
          </div>

          <h1 className="mt-8 font-heading text-[3.2rem] leading-[1.1] text-primary sm:text-6xl md:text-[4.5rem] tracking-tight">
            Handcrafted <span className="text-accent italic font-light">Desserts</span><br /> for Your Sweetest Moments.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-primary/70 sm:text-lg max-w-md mx-auto md:mx-0 font-light">
            Premium ingredients, exquisite flavors, and artisanal finishes carefully curated for
            every celebration.
          </p>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5" data-aos="fade-up" data-aos-delay="120">
            <a
              href="https://wa.me/919913125551"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-surface shadow-[0_10px_30px_rgba(44,30,22,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(44,30,22,0.35)]"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
              <span className="relative z-10">Order on WhatsApp</span>
              <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-primary transition duration-300 hover:border-primary hover:bg-primary/5"
            >
              View Menu
            </a>
          </div>
        </div>

        <div className="relative w-full md:w-[46%] hidden md:block" data-aos="fade-in" data-aos-delay="300">
          {/* Placeholder for interactive 3d element or hero image if desired */}
        </div>
      </div>
    </section>
  );
}

export default Hero;

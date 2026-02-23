import baker from "../assets/cake1.jpg";

function About() {
  const highlights = [
    {
      title: "Small-Batch Baking",
      description: "Freshly crafted in limited batches for peak flavor.",
    },
    {
      title: "Premium Ingredients",
      description: "Single-origin cocoa, real butter, and seasonal fruit.",
    },
    {
      title: "Custom Designs",
      description: "Tailored finishes for birthdays, weddings, and events.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-32 sm:py-40 border-y border-primary/5">
      <div className="absolute top-0 right-0 h-[40rem] w-[40rem] rounded-full bg-surface-dark/50 blur-[100px] pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-rose/15 blur-3xl animate-blob" style={{ animationDelay: "3s" }}></div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-20">
        <div className="w-full md:w-[45%]" data-aos="fade-up">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-accent/20 to-rose/20 blur-2xl transition-all duration-700 group-hover:blur-3xl group-hover:opacity-70 opacity-40"></div>
            <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/40 backdrop-blur-sm shadow-[0_20px_40px_rgba(44,30,22,0.1)] transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={baker}
                alt="The Sweet Spot craft"
                className="h-[22rem] w-full object-cover sm:h-[400px] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-primary/10 bg-white/95 backdrop-blur-md px-5 py-4 flex items-center gap-3 shadow-[0_15px_30px_rgba(44,30,22,0.15)] transform transition-transform duration-500 group-hover:-translate-y-2">
              <span className="w-8 h-px bg-accent"></span>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                Crafted With Care
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-xl" data-aos="fade-up" data-aos-delay="120">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/80 shadow-sm">
            <span className="w-1 h-1 rounded-full bg-accent"></span>
            Our Story
          </span>
          <h2 className="mt-6 font-heading text-4xl text-primary sm:text-5xl tracking-tight leading-tight">
            The Essence of <br /><span className="italic text-primary/80 font-light">The Sweet Spot</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary/70 sm:text-lg font-light">
            The Sweet Spot is a boutique bakery dedicated to handcrafted desserts
            made with premium ingredients. Every cake is curated with care,
            balancing timeless flavors with elegant presentation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-primary/70 sm:text-lg font-light">
            From intimate celebrations to grand occasions, we pour passion into
            every layer, ensuring each bite feels indulgent and memorable.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-primary/5 bg-white/50 backdrop-blur-sm p-5 shadow-[0_8px_20px_rgba(44,30,22,0.04)] transition-all duration-300 hover:bg-white/80 hover:shadow-[0_12px_25px_rgba(44,30,22,0.08)] hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={180 + index * 80}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent/60 rounded-full transition-transform duration-300 group-hover:scale-150"></span>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-primary/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

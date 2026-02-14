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
    <section className="relative overflow-hidden bg-beige/60 py-24">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-dark/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        <div className="w-full md:w-[45%]" data-aos="fade-up">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-white/60 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-[32px] border border-dark/10 bg-white/80 shadow-[0_20px_36px_rgba(0,0,0,0.18)]">
              <img
                src={baker}
                alt="The Sweet Spot craft"
                className="h-80 w-full object-cover sm:h-[380px]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-dark/10 bg-white/90 px-4 py-3 text-xs uppercase tracking-[0.22em] text-dark/70 shadow-[0_12px_24px_rgba(0,0,0,0.15)]">
              Crafted With Care
            </div>
          </div>
        </div>

        <div className="w-full md:max-w-xl" data-aos="fade-up" data-aos-delay="120">
          <span className="inline-flex items-center rounded-full border border-dark/10 bg-white/70 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-dark/70 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
            Our Story
          </span>
          <h2 className="mt-5 font-heading text-3xl text-dark sm:text-4xl">
            About The Sweet Spot
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
            The Sweet Spot is a boutique bakery dedicated to handcrafted desserts
            made with premium ingredients. Every cake is curated with care,
            balancing timeless flavors with elegant presentation.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
            From intimate celebrations to grand occasions, we pour passion into
            every layer, ensuring each bite feels indulgent and memorable.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-dark/10 bg-white/80 p-4 shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
                data-aos="fade-up"
                data-aos-delay={180 + index * 80}
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
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

import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "The flavors were exquisite and the presentation was stunning. Truly premium.",
      name: "Ananya S.",
    },
    {
      quote:
        "Best cheesecake I have ever had. Smooth, balanced, and perfectly sweet.",
      name: "Rohit K.",
    },
    {
      quote:
        "Every detail felt luxurious. The cake was the highlight of our celebration.",
      name: "Meera P.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-surface overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 opacity-50"></div>

      <div className="relative mx-auto max-w-6xl px-6 z-10">
        <div className="text-center" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/80 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Testimonials
          </span>
          <h2 className="mt-6 font-heading text-4xl sm:text-5xl text-primary tracking-tight">
            What Our <span className="italic font-light">Customers Say</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-primary/70 font-light max-w-xl mx-auto">
            Loved by dessert enthusiasts and celebration hosts alike.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="group relative rounded-[2rem] border border-white/50 bg-white/60 backdrop-blur-md p-8 shadow-[0_15px_35px_rgba(44,30,22,0.06)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 hover:shadow-[0_20px_40px_rgba(44,30,22,0.1)]"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className="absolute -top-4 -right-4 text-8xl text-primary/[0.03] font-serif leading-none group-hover:text-accent/10 transition-colors duration-500">"</div>
              <div className="relative z-10">
                <div className="mb-6 flex gap-1.5 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} className="transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-primary/80 font-light italic min-h-[5rem]">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 text-primary font-heading font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary">{t.name}</h4>
                    <span className="text-xs text-primary/50 uppercase tracking-widest mt-0.5 block">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;


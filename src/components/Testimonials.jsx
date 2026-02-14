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
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center" data-aos="fade-up">
          <h2 className="font-heading text-3xl text-dark sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Loved by dessert enthusiasts and celebration hosts.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="rounded-3xl border border-dark/10 bg-white/80 p-6 shadow-[0_14px_28px_rgba(0,0,0,0.12)]"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className="mb-4 flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                “{t.quote}”
              </p>
              <p className="mt-4 text-sm font-semibold text-dark">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

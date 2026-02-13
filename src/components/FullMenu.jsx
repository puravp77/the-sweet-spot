function FullMenu() {
  const menu = [
    {
      title: "Classic Cakes",
      items: [
        {
          name: "Blackforest",
          description: "Chocolate layers with cherries and whipped cream.",
          half: 700,
          one: 1200,
        },
        {
          name: "Coffee Mocha",
          description: "Coffee-soaked sponge with mocha cream and cocoa.",
          half: 750,
          one: 1300,
        },
        {
          name: "Choco Nutella",
          description: "Rich chocolate cake with Nutella frosting.",
          half: 800,
          one: 1400,
        },
        {
          name: "Choco Mousse",
          description: "Silky chocolate mousse layered in soft sponge.",
          half: 800,
          one: 1400,
        },
        {
          name: "Signature Chocolate Fudge",
          description: "Deep cocoa cake with warm fudge finish.",
          half: 700,
          one: 1200,
        },
        {
          name: "Cookies & Cream (Oreo)",
          description: "Oreo crumble, cream filling, chocolate sponge.",
          half: 750,
          one: 1300,
        },
        {
          name: "Ferrero Rocher / Nutella",
          description: "Hazelnut-rich cake with Ferrero crunch.",
          half: 800,
          one: 1400,
        },
        {
          name: "Hazelnut Praline",
          description: "Nutty praline cream with roasted hazelnuts.",
          half: 900,
          one: 1600,
        },
        {
          name: "Chocolate Overloaded",
          description: "Extra chocolate layers with ganache drizzle.",
          half: 800,
          one: 1400,
        },
        {
          name: "Strawberry",
          description: "Fresh strawberry cream with light vanilla sponge.",
          half: 800,
          one: 1400,
        },
        {
          name: "Choco Chips",
          description: "Chocolate chip sponge with creamy frosting.",
          half: 750,
          one: 1300,
        },
        {
          name: "Hazelnut Crunchy",
          description: "Crunchy hazelnut bits with smooth chocolate.",
          half: 800,
          one: 1400,
        },
      ],
    },
    {
      title: "Cheesecakes",
      items: [
        {
          name: "Blueberry",
          description: "Creamy cheesecake topped with blueberry compote.",
          half: 1200,
          one: 2200,
        },
        {
          name: "Lotus Biscoff",
          description: "Biscoff crumb base with caramelized spread.",
          half: 1300,
          one: 2400,
        },
        {
          name: "Nutella",
          description: "Velvety cheesecake with Nutella swirl.",
          half: 1300,
          one: 2400,
        },
        {
          name: "Choco Truffle",
          description: "Chocolate cheesecake with truffle ganache.",
          half: 1000,
          one: 1800,
        },
        {
          name: "Mango",
          description: "Tropical mango glaze over creamy cheesecake.",
          half: 1400,
          one: 2600,
        },
        {
          name: "Strawberry",
          description: "Strawberry glaze with silky cream cheese.",
          half: 1400,
          one: 2600,
        },
        {
          name: "New York",
          description: "Classic baked cheesecake with rich creaminess.",
          half: 900,
          one: 1600,
        },
      ],
    },
    {
      title: "Special Treats",
      items: [
        {
          name: "Korean Cream Cheese Buns (2)",
          description: "Soft buns with a sweet cream cheese center.",
          price: 300,
        },
        {
          name: "Donuts (6)",
          description: "Assorted donuts with smooth glazes.",
          price: 480,
        },
        {
          name: "Bomboloni (6)",
          description: "Italian filled donuts dusted with sugar.",
          price: 600,
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/70 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-dark/70 shadow-[0_8px_16px_rgba(0,0,0,0.08)] animate-fade-in">
            Full Menu
          </span>
          <h2 className="mt-4 font-heading text-4xl mb-4 text-dark animate-fade-up">
            Explore Our Menu
          </h2>
          <p className="text-gray-600 animate-fade-up [animation-delay:120ms]">
            Freshly handcrafted desserts. Customisation available.
          </p>
        </div>

        {menu.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex flex-col items-center gap-3 mb-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/70 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-dark/60 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                Category
              </span>
              <h3 className="font-heading text-3xl text-dark tracking-[0.08em]">
                {category.title}
              </h3>
              <div className="h-px w-20 bg-gold/60"></div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-3xl border border-dark/10 bg-white/80 shadow-[0_14px_28px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(0,0,0,0.18)]"
                >
                  <div className="relative h-44 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(237,226,208,0.9))]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-xs uppercase tracking-[0.26em] text-dark/50">
                      Image
                      <span className="mt-1 text-[10px] tracking-[0.18em] text-dark/40">
                        Coming Soon
                      </span>
                    </div>
                  </div>

                  <div className="p-5 text-sm md:text-base">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-dark/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/80"></span>
                      {category.title}
                    </div>
                    <h4 className="mt-2 font-heading text-lg text-dark">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-[12px] uppercase tracking-[0.16em] text-dark/70">
                      {item.price ? null : (
                        <>
                          <span className="rounded-full border border-dark/10 bg-cream px-3 py-1">
                            500g
                          </span>
                          <span className="rounded-full border border-dark/10 bg-cream px-3 py-1">
                            1kg
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-10">
          <p className="text-sm text-gray-600 mb-4">
            Extra charges applicable for customisation.
          </p>

          <a
            href="https://wa.me/919913125551?text=Hi, I would like to place an order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-dark px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(0,0,0,0.24)]"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default FullMenu;

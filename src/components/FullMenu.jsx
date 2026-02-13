function FullMenu() {
  const menu = [
    {
      title: "Classic Cakes",
      items: [
        { name: "Blackforest", half: 700, one: 1200 },
        { name: "Coffee Mocha", half: 750, one: 1300 },
        { name: "Choco Nutella", half: 800, one: 1400 },
        { name: "Choco Mousse", half: 800, one: 1400 },
        { name: "Signature Chocolate Fudge", half: 700, one: 1200 },
        { name: "Cookies & Cream (Oreo)", half: 750, one: 1300 },
        { name: "Ferrero Rocher / Nutella", half: 800, one: 1400 },
        { name: "Hazelnut Praline", half: 900, one: 1600 },
        { name: "Chocolate Overloaded", half: 800, one: 1400 },
        { name: "Strawberry", half: 800, one: 1400 },
        { name: "Choco Chips", half: 750, one: 1300 },
        { name: "Hazelnut Crunchy", half: 800, one: 1400 },
      ],
    },
    {
      title: "Cheesecakes",
      items: [
        { name: "Blueberry", half: 1200, one: 2200 },
        { name: "Lotus Biscoff", half: 1300, one: 2400 },
        { name: "Nutella", half: 1300, one: 2400 },
        { name: "Choco Truffle", half: 1000, one: 1800 },
        { name: "Mango", half: 1400, one: 2600 },
        { name: "Strawberry", half: 1400, one: 2600 },
        { name: "New York", half: 900, one: 1600 },
      ],
    },
    {
      title: "Special Treats",
      items: [
        { name: "Korean Cream Cheese Buns (2)", price: 300 },
        { name: "Donuts (6)", price: 480 },
        { name: "Bomboloni (6)", price: 600 },
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
            <div className="flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-full bg-gold"></span>
              <h3 className="font-heading text-2xl text-dark">
                {category.title}
              </h3>
            </div>

            <div className="grid gap-4 md:gap-5">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-2 rounded-2xl border border-dark/10 bg-white/70 px-4 py-3 text-sm md:text-base shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_26px_rgba(0,0,0,0.12)] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/80"></span>
                    <span className="font-medium text-dark">{item.name}</span>
                  </div>

                  {item.price ? (
                    <span className="inline-flex items-center rounded-full border border-dark/10 bg-cream px-3 py-1 text-[12px] font-semibold text-dark">
                      ?{item.price}
                    </span>
                  ) : (
                    <div className="flex flex-wrap gap-2 text-[12px] uppercase tracking-[0.16em] text-dark/70">
                      <span className="rounded-full border border-dark/10 bg-cream px-3 py-1">
                        500g ?{item.half}
                      </span>
                      <span className="rounded-full border border-dark/10 bg-cream px-3 py-1">
                        1kg ?{item.one}
                      </span>
                    </div>
                  )}
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

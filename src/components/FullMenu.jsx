import { useState } from "react";
import cake1 from "../assets/Cake-1.jpg";
import cake2 from "../assets/Cake-2.jpg";
import cake3 from "../assets/Cake-3.jpg";
import cake4 from "../assets/Cake-4.jpg";
import cake5 from "../assets/Cake-5.jpg";
import cake6 from "../assets/Cake-6.jpg";

function FullMenu() {
  const [activeItem, setActiveItem] = useState(null);

  const handleOrderNow = (item) => {
    if (item.price) {
      const productionOrigin = "https://puravp77.github.io";
      const fullImageUrl = item.image ? new URL(item.image, productionOrigin).href : "";
      const message = `Hi, I want to order ${item.name}.${fullImageUrl ? `\n\nImage: ${fullImageUrl}` : ""}`;
      window.open(
        `https://wa.me/919913125551?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      return;
    }
    setActiveItem(item);
  };

  const handleSizeSelect = (size) => {
    if (!activeItem) {
      return;
    }
    const productionOrigin = "https://puravp77.github.io";
    const fullImageUrl = activeItem.image ? new URL(activeItem.image, productionOrigin).href : "";
    const message = `Hi, I want to order ${activeItem.name} ${size}.${fullImageUrl ? `\n\nImage: ${fullImageUrl}` : ""}`;
    window.open(
      `https://wa.me/919913125551?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setActiveItem(null);
  };

  const menu = [
    {
      title: "Classic Cakes",
      description: "Freshly handcrafted desserts. Customisation available.",
      items: [
        {
          name: "Blackforest",
          description: "Chocolate layers with cherries and whipped cream.",
          image: cake1,
          half: 700,
          one: 1200,
        },
        {
          name: "Coffee Mocha",
          description: "Coffee-soaked sponge with mocha cream and cocoa.",
          image: cake2,
          half: 750,
          one: 1300,
        },
        {
          name: "Choco Nutella",
          description: "Rich chocolate cake with Nutella frosting.",
          image: cake3,
          half: 800,
          one: 1400,
        },
        {
          name: "Choco Mousse",
          description: "Silky chocolate mousse layered in soft sponge.",
          image: cake4,
          half: 800,
          one: 1400,
        },
        {
          name: "Signature Chocolate Fudge",
          description: "Deep cocoa cake with warm fudge finish.",
          image: cake5,
          half: 700,
          one: 1200,
        },
        {
          name: "Cookies & Cream (Oreo)",
          description: "Oreo crumble, cream filling, chocolate sponge.",
          image: cake6,
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
      description: "Silky, creamy, and topped with artisan sauces.",
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
      description: "Bite-sized indulgences perfect for gifting and sharing.",
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
    <section id="full-menu" className="relative py-32 sm:py-40 bg-white">
      {/* Pure White Background */}

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/80 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Full Menu
          </span>
          <h2 className="mt-8 font-heading text-4xl sm:text-5xl text-primary tracking-tight">
            Explore <span className="italic font-light">Our Menu</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-primary/70 font-light max-w-xl mx-auto">
            Freshly handcrafted desserts. Customisation available upon request.
          </p>
        </div>

        {menu.map((category) => (
          <div key={category.title} className="mt-24 sm:mt-32">
            <div className="text-center" data-aos="fade-up">
              <h3 className="font-heading text-3xl sm:text-4xl text-primary font-medium">
                {category.title}
              </h3>
              <p className="mt-4 text-base text-primary/60 font-light">
                {category.description}
              </p>
              <div className="mx-auto mt-8 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40"></span>
                <div className="h-px w-16 bg-gradient-to-r from-accent/10 via-accent/60 to-accent/10"></div>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40"></span>
              </div>
            </div>

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-14">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-primary/5 bg-white shadow-[0_15px_35px_rgba(44,30,22,0.06)] transition-all duration-700 hover:shadow-[0_25px_50px_rgba(44,30,22,0.12)] hover:-translate-y-3 hover:bg-white"
                  data-aos="fade-up"
                >
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-primary/5 z-0"></div>

                  {item.image ? (
                    <div className="relative overflow-hidden aspect-[4/5] bg-surface-dark/20 p-2 z-10">
                      <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-primary/5 relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden aspect-[4/5] bg-primary/5 p-2 z-10">
                      <div className="flex w-full h-full items-center justify-center rounded-[1.5rem] bg-white/30 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/40 border border-primary/10">
                        <div className="text-center flex flex-col items-center gap-2">
                          <span className="w-8 h-px bg-primary/20"></span>
                          Image Coming Soon
                          <span className="w-8 h-px bg-primary/20"></span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex h-full flex-col p-6 relative z-20">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-accent/80">
                      <span>{category.title}</span>
                    </div>

                    <h4 className="mt-3 font-heading text-2xl text-primary transition-colors duration-300">
                      {item.name}
                    </h4>

                    <p className="mt-3 text-sm text-primary/60 font-light leading-relaxed min-h-[48px]">
                      {item.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-primary/70">
                      {item.price ? (
                        <span className="w-full rounded-xl border border-primary/10 bg-white/50 py-2.5 text-center transition-colors group-hover:bg-white/80">
                          Rs. {item.price}
                        </span>
                      ) : (
                        <>
                          <span className="flex-1 rounded-xl border border-primary/10 bg-white/50 py-2.5 text-center transition-colors group-hover:bg-white/80">
                            500g Rs. {item.half}
                          </span>
                          <span className="flex-1 rounded-xl border border-primary/10 bg-white/50 py-2.5 text-center transition-colors group-hover:bg-white/80">
                            1kg Rs. {item.one}
                          </span>
                        </>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOrderNow(item)}
                      className="mt-6 inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-surface shadow-[0_10px_20px_rgba(44,30,22,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(44,30,22,0.25)] relative group/btn"
                    >
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover/btn:duration-700 group-hover/btn:[transform:skew(-12deg)_translateX(150%)]">
                        <div className="relative h-full w-6 bg-white/20"></div>
                      </div>
                      <span className="relative z-10">Order Now</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay Upgrade */}
      {activeItem ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/40 px-4 backdrop-blur-sm transition-all duration-300">
          <div className="w-full max-w-md rounded-[2.5rem] border border-white/50 bg-white/95 p-8 shadow-[0_25px_50px_rgba(44,30,22,0.25)] relative transform transition-all scale-100 opacity-100">
            <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] bg-gradient-to-tr from-primary/5 to-transparent"></div>

            <div className="text-center relative z-10">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-accent mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary/60 mb-2">
                Select Your Size
              </p>
              <h3 className="font-heading text-3xl text-primary font-medium">
                {activeItem.name}
              </h3>
            </div>

            <div className="mt-8 grid gap-4 relative z-10">
              {['500g', '1kg'].map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizeSelect(size)}
                  className="group flex w-full items-center justify-between rounded-2xl border border-primary/10 bg-surface px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-accent transition-colors"></span>
                    {size}
                  </span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="mt-6 flex w-full items-center justify-center rounded-2xl border border-primary/10 bg-transparent px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/60 transition-all duration-300 hover:bg-primary/5 hover:text-primary relative z-10"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default FullMenu;

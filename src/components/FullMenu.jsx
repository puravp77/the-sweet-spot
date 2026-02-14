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
      const message = `Hi, I want to order ${item.name}.`;
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
    const message = `Hi, I want to order ${activeItem.name} ${size}.`;
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
    <section id="menu" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center" data-aos="fade-up">
          <span className="inline-flex items-center rounded-full border border-dark/10 bg-white/70 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-dark/70 shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
            Full Menu
          </span>
          <h2 className="mt-5 font-heading text-4xl text-dark">
            Explore Our Menu
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Freshly handcrafted desserts. Customisation available.
          </p>
        </div>

        {menu.map((category) => (
          <div key={category.title} className="mt-16">
            <div className="text-center" data-aos="fade-up">
              <h3 className="font-heading text-3xl text-dark">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {category.description}
              </p>
              <div className="mx-auto mt-3 h-px w-20 bg-gold/60"></div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-3xl border border-dark/10 bg-white/80 shadow-[0_14px_28px_rgba(0,0,0,0.12)]"
                  data-aos="fade-up"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[28rem] w-full object-cover sm:h-[28rem]"
                    />
                  ) : (
                    <div className="flex h-[28rem] items-center justify-center bg-[#efe5d7] text-[11px] uppercase tracking-[0.26em] text-dark/40 sm:h-[28rem]">
                      <div className="text-center">
                        Image
                        <div className="mt-1 text-[10px] tracking-[0.2em] text-dark/35">
                          Coming Soon
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex h-full flex-col p-5">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-dark/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/70"></span>
                      {category.title}
                    </div>
                    <h4 className="mt-2 font-heading text-lg text-dark">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 min-h-[48px]">
                      {item.description}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] uppercase tracking-[0.18em] text-dark/70">
                      {item.price ? (
                        <span className="col-span-2 rounded-full border border-dark/10 bg-cream px-3 py-1 text-center">
                          Rs. {item.price}
                        </span>
                      ) : (
                        <>
                          <span className="rounded-full border border-dark/10 bg-cream px-3 py-1 text-center">
                            500g Rs. {item.half}
                          </span>
                          <span className="rounded-full border border-dark/10 bg-cream px-3 py-1 text-center">
                            1kg Rs. {item.one}
                          </span>
                        </>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleOrderNow(item)}
                      className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-dark px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_18px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_22px_rgba(0,0,0,0.24)]"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-sm rounded-3xl border border-dark/10 bg-white/90 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.24)] backdrop-blur">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.22em] text-dark/60">
                Select Size
              </p>
              <h3 className="mt-2 font-heading text-xl text-dark">
                {activeItem.name}
              </h3>
            </div>
            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => handleSizeSelect("500g")}
                className="inline-flex w-full items-center justify-between rounded-full border border-dark/10 bg-cream px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-dark transition duration-300 hover:bg-dark hover:text-white"
              >
                <span>500g</span>
                <span>Order Now →</span>
              </button>
              <button
                type="button"
                onClick={() => handleSizeSelect("1kg")}
                className="inline-flex w-full items-center justify-between rounded-full border border-dark/10 bg-cream px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-dark transition duration-300 hover:bg-dark hover:text-white"
              >
                <span>1kg</span>
                <span>Order Now →</span>
              </button>
            </div>
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-dark/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-dark/70 transition duration-300 hover:bg-dark hover:text-white"
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

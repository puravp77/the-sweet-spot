import brownies from "../assets/brownies.jpg";
import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";

function MenuPreview() {
  const buildWhatsAppLink = (title, imageUrl) => {
    const fullImageUrl = new URL(imageUrl, window.location.origin).href;
    const message = `Hi, I want to order ${title}. Image: ${fullImageUrl}`;
    return `https://wa.me/+919913125551?text=${encodeURIComponent(message)}`;
  };

  const items = [
    {
      image: cake1,
      title: "Chocolate Truffle Cake",
      description: "Rich, moist & layered with premium dark chocolate ganache.",
      badge: "Signature",
      price: "₹899",
      tags: ["Best Seller", "Dark Cocoa"],
    },
    {
      image: cake2,
      title: "Mascarpone Cheesecake",
      description: "Creamy, smooth & delicately balanced with a buttery base.",
      badge: "Chef Pick",
      price: "₹799",
      tags: ["Velvety", "Classic"],
    },
    {
      image: brownies,
      title: "Fudge Brownies",
      description: "Dense, gooey & handcrafted with high-quality cocoa.",
      badge: "New",
      price: "₹499",
      tags: ["Gooey", "Box of 6"],
    },
  ];

  return (
    <section id="menu" className="bg-beige px-4 py-16 sm:px-6 sm:py-20">
      <div className="text-center mb-10 sm:mb-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/70 px-4 py-1 text-[11px] uppercase tracking-[0.22em] text-dark/70 shadow-[0_8px_16px_rgba(0,0,0,0.08)] animate-fade-in">
          Curated Menu
        </span>
        <h3 className="mt-4 font-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-dark animate-fade-up">
          Our Signature Collection
        </h3>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto animate-fade-up [animation-delay:120ms]">
          A curated selection of our most loved creations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative bg-cream rounded-3xl overflow-hidden border border-dark/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-2 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-dark/5"></div>

            <div className="absolute left-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-dark/70 shadow-[0_6px_14px_rgba(0,0,0,0.12)]">
              {item.badge}
            </div>
            <div className="absolute right-4 top-4 z-10 rounded-full bg-dark/90 px-3 py-1 text-[11px] font-semibold text-white shadow-[0_6px_14px_rgba(0,0,0,0.18)]">
              {item.price}
            </div>

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-72 object-cover object-center transition duration-500 group-hover:scale-[1.04]"
            />

            <div className="p-5 sm:p-6 text-center relative">
              <h4 className="font-heading text-lg sm:text-xl mb-2 transition duration-300 group-hover:translate-y-0.5">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-[15px] mb-4 transition duration-300 group-hover:text-gray-700">
                {item.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-dark/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-dark/70 transition duration-300 group-hover:border-dark/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={buildWhatsAppLink(item.title, item.image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center text-sm font-semibold tracking-wide text-white bg-dark px-6 py-2.5 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(0,0,0,0.22)] transition duration-300"
                >
                  Order on WhatsApp
                </a>
                <a
                  href={`https://wa.me/+919913125551?text=${encodeURIComponent(
                    `Hi, I want to customize ${item.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center text-sm font-semibold tracking-wide text-dark border border-dark/40 bg-white/70 backdrop-blur-sm px-6 py-2.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:bg-dark hover:text-white hover:border-dark transition duration-300"
                >
                  Customize
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPreview;

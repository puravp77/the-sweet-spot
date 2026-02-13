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
      tags: ["Best Seller", "Dark Cocoa"],
    },
    {
      image: cake2,
      title: "Mascarpone Cheesecake",
      description: "Creamy, smooth & delicately balanced with a buttery base.",
      badge: "Chef Pick",
      tags: ["Velvety", "Classic"],
    },
    {
      image: brownies,
      title: "Fudge Brownies",
      description: "Dense, gooey & handcrafted with high-quality cocoa.",
      badge: "New",
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
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 sm:h-60 md:h-72 object-cover object-center transition duration-500 group-hover:scale-[1.04]"
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

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                <a
                  href={buildWhatsAppLink(item.title, item.image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:flex-1 sm:max-w-[180px] h-11 items-center justify-center text-[13px] font-semibold tracking-[0.08em] uppercase text-white bg-dark rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(0,0,0,0.22)] transition duration-300"
                >
                  Place Order
                </a>
                <a
                  href={`https://wa.me/+919913125551?text=${encodeURIComponent(
                    `Hi, I want to customize ${item.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex w-full sm:flex-1 sm:max-w-[180px] h-11 items-center justify-center text-[13px] font-semibold tracking-[0.08em] uppercase text-dark rounded-full border border-dark/20 bg-white/70 backdrop-blur-sm shadow-[0_8px_16px_rgba(0,0,0,0.12)] transition duration-300 hover:bg-dark hover:text-white hover:border-dark"
                >
                  <span className="absolute inset-[2px] rounded-full border border-gold/30"></span>
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

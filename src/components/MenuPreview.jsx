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
    <section id="menu" className="relative bg-surface px-4 py-32 sm:px-6 sm:py-40 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-40 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>

      <div className="relative text-center mb-20 sm:mb-24">
        <span
          className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/80 shadow-sm"
          data-aos="fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          Curated Menu
        </span>
        <h3
          className="mt-8 font-heading text-4xl sm:text-5xl md:text-5xl mb-6 text-primary tracking-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Signature <span className="italic font-light">Collection</span>
        </h3>
        <p
          className="text-primary/70 text-base sm:text-lg max-w-xl mx-auto font-light"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          A curated selection of our most loved artisanal creations.
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 max-w-6xl mx-auto z-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/60 backdrop-blur-md rounded-[2rem] overflow-hidden border border-white/50 shadow-[0_15px_35px_rgba(44,30,22,0.06)] hover:shadow-[0_25px_50px_rgba(44,30,22,0.12)] transition-all duration-700 hover:-translate-y-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-transparent to-primary/5 z-0"></div>

            <div className="absolute left-5 top-5 z-20 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary shadow-[0_8px_20px_rgba(44,30,22,0.15)] transition-transform duration-500 group-hover:scale-105">
              {item.badge}
            </div>

            <div className="relative overflow-hidden aspect-[4/3] bg-surface-dark/20 z-10 p-2">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0"></div>
              </div>
            </div>

            <div className="p-6 sm:p-8 text-center relative z-20">
              <h4 className="font-heading text-xl sm:text-2xl mb-3 text-primary transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-primary/60 text-sm sm:text-base mb-6 font-light leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/10 bg-white/50 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary/70 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={buildWhatsAppLink(item.title, item.image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex w-full sm:flex-1 h-12 items-center justify-center overflow-hidden rounded-full bg-primary text-[12px] font-medium tracking-[0.1em] uppercase text-surface shadow-[0_10px_20px_rgba(44,30,22,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_25px_rgba(44,30,22,0.25)]"
                >
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover/btn:duration-700 group-hover/btn:[transform:skew(-12deg)_translateX(150%)]">
                    <div className="relative h-full w-6 bg-white/20"></div>
                  </div>
                  <span className="relative z-10">Order</span>
                </a>
                <a
                  href={`https://wa.me/+919913125551?text=${encodeURIComponent(
                    `Hi, I want to customize ${item.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex w-full sm:flex-1 h-12 items-center justify-center text-[12px] font-medium tracking-[0.1em] uppercase text-primary rounded-full border border-primary/20 bg-transparent transition-all duration-300 hover:bg-primary/5 hover:border-primary"
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

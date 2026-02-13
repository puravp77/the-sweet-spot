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
    },
    {
      image: cake2,
      title: "Mascarpone Cheesecake",
      description: "Creamy, smooth & delicately balanced with a buttery base.",
    },
    {
      image: brownies,
      title: "Fudge Brownies",
      description: "Dense, gooey & handcrafted with high-quality cocoa.",
    },
  ];

  return (
    <section id="menu" className="bg-beige px-4 py-14 sm:px-6 sm:py-20">
      <div className="text-center mb-10 sm:mb-14">
        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
          Our Signature Collection
        </h3>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          A curated selection of our most loved creations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative bg-cream rounded-3xl overflow-hidden border border-dark/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/40 via-transparent to-dark/5"></div>

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-72 object-cover object-center transition duration-500 group-hover:scale-[1.04]"
            />

            <div className="p-5 sm:p-6 text-center relative">
              <h4 className="font-heading text-lg sm:text-xl mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm sm:text-[15px] mb-4">
                {item.description}
              </p>

              <a
                href={buildWhatsAppLink(item.title, item.image)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center text-sm border border-dark px-5 py-2.5 rounded-full hover:bg-dark hover:text-white transition duration-300"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPreview;

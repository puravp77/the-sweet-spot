import cake1 from "../assets/cake-bg.jpg"; // temporary reuse image

function MenuPreview() {
  return (
    <section id="menu" className="py-20 px-6 bg-beige">
      
      <div className="text-center mb-14">
        <h3 className="font-heading text-3xl md:text-4xl mb-4">
          Our Signature Collection
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          A curated selection of our most loved creations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[1,2,3].map((item, index) => (
          <div
            key={index}
            className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
          >
            <img
              src={cake1}
              alt="Dessert"
              className="w-full h-64 object-cover"
            />

            <div className="p-6 text-center">
              <h4 className="font-heading text-xl mb-2">
                Chocolate Truffle Cake
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Rich, moist & handcrafted with premium cocoa.
              </p>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-dark px-4 py-2 rounded-full hover:bg-dark hover:text-white transition duration-300"
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

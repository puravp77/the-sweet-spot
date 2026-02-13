import cakeBg from "../assets/cake-bg.jpg";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-6 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-60"
        style={{ backgroundImage: `url(${cakeBg})` }}
      ></div>

      {/* Light Cream Overlay */}
      <div className="absolute inset-0 bg-cream/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="font-heading text-4xl md:text-6xl leading-[1.1] mb-6 tracking-wide">
          Handcrafted Desserts <br />
          for Your Sweetest Moments
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
          Freshly baked with love using premium ingredients. <br></br>
          Delivery & takeaway available.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/+919106618331"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark text-white px-7 py-3 rounded-full text-sm hover:bg-softBrown transition duration-300"
          >
            Order on WhatsApp
          </a>

          <a
            href="#menu"
            className="border border-dark px-7 py-3 rounded-full text-sm hover:bg-dark hover:text-white transition duration-300"
          >
            View Menu
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;

import heroCake from "../assets/cake-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.15]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 2.2 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface pt-32 pb-24">
      <motion.div
        className="absolute inset-0 bg-center bg-cover opacity-15 mix-blend-multiply"
        style={{ backgroundImage: `url(${heroCake})`, y: y1, scale }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface"></div>

      {/* Animated Blobs */}
      <div className="absolute top-10 -right-20 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -left-32 h-[35rem] w-[35rem] rounded-full bg-rose/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 h-[25rem] w-[25rem] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-blob" style={{ animationDelay: "4s" }}></div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 w-full z-10">
        <motion.div
          className="w-full md:max-w-xl text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemAnim} className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/80 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Freshly Baked Daily
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1 variants={itemAnim} className="font-heading text-[3.2rem] leading-[1.1] text-primary sm:text-6xl md:text-[4.5rem] tracking-tight">
              Handcrafted <span className="text-accent italic font-light">Desserts</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 variants={itemAnim} className="font-heading text-[3.2rem] leading-[1.1] text-primary sm:text-6xl md:text-[4.5rem] tracking-tight">
              for Your Sweetest Moments.
            </motion.h1>
          </div>

          <motion.p variants={itemAnim} className="mt-6 text-base leading-relaxed text-primary/70 sm:text-lg max-w-md mx-auto md:mx-0 font-light">
            Premium ingredients, exquisite flavors, and artisanal finishes carefully curated for
            every celebration.
          </motion.p>

          <motion.div variants={itemAnim} className="mt-12 flex flex-wrap justify-center md:justify-start gap-5">
            <Magnetic>
              <a
                href="https://wa.me/919913125551"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-surface shadow-[0_10px_30px_rgba(44,30,22,0.25)] transition duration-300 hover:shadow-[0_15px_40px_rgba(44,30,22,0.35)] block"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
                <span className="relative z-10 pointer-events-none">Order on WhatsApp</span>
                <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1 pointer-events-none">
                  →
                </span>
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-transparent px-8 py-4 text-sm font-medium tracking-wide text-primary transition duration-300 hover:border-primary hover:bg-primary/5 block"
              >
                <span className="pointer-events-none">View Menu</span>
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <div className="relative w-full md:w-[46%] hidden md:block" data-aos="fade-in" data-aos-delay="300">
          {/* Placeholder for interactive 3d element or hero image if desired */}
        </div>
      </div>
    </section>
  );
}

export default Hero;

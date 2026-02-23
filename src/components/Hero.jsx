import { useEffect, useRef } from "react";
import heroCake from "../assets/cake-bg.jpg";
import { gsap } from "gsap";
import Magnetic from "./Magnetic";

function Hero() {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Parallax background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Reveal animation for text
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        rotate: 3,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        delay: 2.2 // Wait for preloader
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-32 pb-24">
      {/* Subtle Cake Background with GSAP Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 -top-[20%] h-[140%] bg-center bg-cover opacity-70 pointer-events-none"
        style={{ backgroundImage: `url(${heroCake})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white"></div>

      <div ref={contentRef} className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 w-full z-10">
        <div className="w-full md:max-w-xl text-center md:text-left">
          <div className="reveal-text inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/60 backdrop-blur-sm px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/80 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Freshly Baked Daily
          </div>

          <div className="overflow-hidden mb-2">
            <h1 className="reveal-text font-heading text-[3.2rem] leading-[1.1] text-primary sm:text-6xl md:text-[4.5rem] tracking-tight">
              Handcrafted <span className="text-accent italic font-light">Desserts</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="reveal-text font-heading text-[3.2rem] leading-[1.1] text-primary sm:text-6xl md:text-[4.5rem] tracking-tight">
              for Your Sweetest Moments.
            </h1>
          </div>

          <p className="reveal-text mt-6 text-base leading-relaxed text-primary/70 sm:text-lg max-w-md mx-auto md:mx-0 font-light">
            Premium ingredients, exquisite flavors, and artisanal finishes carefully curated for
            every celebration.
          </p>

          <div className="reveal-text mt-12 flex flex-wrap justify-center md:justify-start gap-5">
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
          </div>
        </div>

        <div className="relative w-full md:w-[46%] hidden md:block">
          {/* Animated decorative SVG */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-full max-w-[400px]">
              <path
                className="animate-draw opacity-30"
                d="M10,100 C10,40 40,10 100,10 C160,10 190,40 190,100 C190,160 160,190 100,190 C40,190 10,160 10,100"
                fill="transparent"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

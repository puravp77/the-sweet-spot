import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function FloatingBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-surface shadow-[0_12px_22px_rgba(44,30,22,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(44,30,22,0.35)] hover:bg-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 z-[49] overflow-hidden group"
      aria-label="Back to top"
    >
      <div className="absolute inset-0 bg-accent/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
      <FaArrowUp size={16} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}

export default FloatingBackToTop;

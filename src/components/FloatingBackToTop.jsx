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
      className="fixed bottom-6 left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-dark text-white shadow-[0_12px_22px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(0,0,0,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 z-50"
      aria-label="Back to top"
    >
      <FaArrowUp size={16} />
    </button>
  );
}

export default FloatingBackToTop;

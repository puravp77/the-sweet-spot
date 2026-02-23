import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Pulse Rings */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping group-hover:bg-green-500/30"></div>
      <div className="absolute inset-0 rounded-full bg-green-500/10 animate-ping shadow-[0_0_20px_rgba(34,197,94,0.3)]" style={{ animationDelay: '0.5s' }}></div>
      <a
        href="https://wa.me/+919913125551"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center bg-gradient-to-tr from-green-600 to-green-400 text-white h-14 w-14 rounded-full shadow-[0_15px_30px_rgba(34,197,94,0.3)] hover:scale-110 transition-transform duration-300 border border-green-300/30"
      >
        <FaWhatsapp size={26} className="transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}

export default FloatingWhatsApp;

import { useEffect, useState } from "react";

const MobileHeader = ({ onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-40">
      
      {/* Header */}
      <div
        className="relative h-15 flex items-center px-4 rounded-bl-[32px] bg-[#3895FF]"
      >
        
        {/* Botón hamburguesa */}
        <button
          onClick={onMenuClick}
          className="w-16 h-16 flex items-center justify-center focus:outline-none active:outline-none"
        >
          <img
            src="/hamburguesa.png"
            alt="Menú"
            className={`h-8 w-8 transition duration-300 `}
          />
        </button>

        {/* Logo centrado */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 object-contain"
          />
        </div>

      </div>
    </header>
  );
};

export default MobileHeader;

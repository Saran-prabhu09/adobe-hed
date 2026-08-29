import { useState, useEffect, useRef } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import skillzzalogo from "../assets/images/skillzzalogo.png";

const navLinks = [
  { label: "Programmes", href: "#programmes" },
  { label: "Pathways", href: "#pathways" },
  { label: "Course", href: "#" },
  { label: "Benfits", href: "#" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle Click Outside for Mobile Menu
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Lock Body Scroll when Mobile Menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white font-['Poppins'] border-b border-b-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-17 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="shrink-0 z-50">
            <img
              src={skillzzalogo}
              alt="Skillzza"
              className="h-14 sm:h-12 w-auto object-contain"
              loading="eager"
            />
          </div>

          {/* Center/Right: Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-end mr-4 lg:mr-10 gap-6 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[#18181B] text-[14px] font-medium hover:text-[#7542E6] transition-colors duration-200 group py-2"
              >
                {link.label}
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#7542E6] rounded-full transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right: Desktop CTA */}
          <div className="hidden md:block z-50">
            <button className="h-9.5 px-5 lg:px-6 rounded-lg text-white text-[13px] lg:text-[14px] font-semibold bg-[#7542E6] hover:bg-[#6335d4] hover:shadow-[0_4px_22px_rgba(117,66,230,0.52)] active:scale-[0.97] transition-all duration-200 ease-out whitespace-nowrap">
              Become A Partner
            </button>
          </div>

          {/* Right: Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden z-50 relative flex items-center justify-center p-2 text-[#18181B] hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Slide-down Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.6)] transform transition-transform duration-300 ease-in-out font-['Poppins'] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-17 border-b border-white/10">
          <img
            src={skillzzalogo}
            alt="Skillzza"
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center p-2 text-[#18181B] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col px-4 sm:px-6 pt-2 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-4 text-[15px] font-medium text-[#18181B] hover:text-[#7542E6] border-b border-gray-100 transition-colors"
            >
              {link.label}
              <ArrowRight size={16} className="text-gray-400" />
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="px-4 sm:px-6 pb-8 pt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full h-11 rounded-lg bg-[#7542E6] text-white text-[15px] font-semibold flex items-center justify-center active:scale-[0.97] transition-transform duration-200"
          >
            Become A Partner
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#contact" },
];

// Reusable link component with underline animation
const NavLink = ({ href, children, className }) => (
  <a
    href={href}
    className={`relative font-roboto tracking-wider text-[#004466] 
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:w-0 after:h-[2px] after:bg-[#004466] 
      after:transition-all after:duration-300 hover:after:w-full ${className}`}
  >
    {children}
  </a>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-25 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-3xl font-bold font-roboto tracking-widest text-[#004466]">
            CRAFI
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {links.map((link) => (
              <NavLink key={link.name} href={link.href} className="text-2xl">
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-6 h-6 flex flex-col justify-between items-center group"
            >
              <span
                className={`block h-0.5 w-6 bg-[#004466] transform transition duration-300 ease-in-out 
      ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#004466] transition duration-300 ease-in-out 
      ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#004466] transform transition duration-300 ease-in-out 
      ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-2 text-center bg-white shadow-md">
          {links.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              className="block px-3 py-3 rounded text-xl hover:bg-gray-200"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

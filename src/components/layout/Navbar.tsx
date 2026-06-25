import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu, IconX } from "../shared/Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isTransparent =
    location.pathname === "/" ||
    location.pathname === "/careers" ||
    location.pathname === "/about" ||
    location.pathname === "/services/equipment-maintenance";

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Market Focus", path: "/market-focus" },
    { name: "Careers", path: "/careers" },
    { name: "About us", path: "/about" },
  ];

  return (
    <>
      <nav className={`absolute top-0 left-0 w-full z-[100] h-24 md:h-32 flex items-center transition-all duration-500 ${
        isTransparent ? "bg-transparent" : "bg-white border-b border-black/5 shadow-sm"
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex justify-between items-center">
          
          <Link to="/" className="relative z-[110] shrink-0 transition-transform hover:scale-105 duration-300">
            <img
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223417/blog_assets/bymb4ayvgepu31mv18al.png"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              alt="Timproxy"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3 lg:gap-6 translate-y-[2px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                  location.pathname === link.path
                    ? "text-safety"
                    : isTransparent ? "text-white/90 hover:text-safety" : "text-industrial/70 hover:text-safety"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className={`ml-2 px-6 lg:px-10 py-2.5 border rounded-full text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 hover:scale-105 shadow-sm ${
                isTransparent
                  ? "border-white/40 text-white hover:bg-white hover:text-industrial"
                  : "border-industrial/20 text-industrial hover:bg-industrial hover:text-white"
              }`}
            >
              Contact us
            </Link>
          </div>

          <button className={`md:hidden relative z-[110] ${isTransparent ? "text-white" : "text-industrial"}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconX size={32} /> : <IconMenu size={32} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full bg-industrial z-[200] p-12 flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center mb-16">
              <img
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223417/blog_assets/bymb4ayvgepu31mv18al.png"
                className="h-10 w-auto object-contain"
                alt="Timproxy"
              />
              <button className="text-white" onClick={() => setIsOpen(false)}>
                <IconX size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-display tracking-wider uppercase transition-colors ${
                    location.pathname === link.path ? "text-safety" : "text-white hover:text-safety"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 w-fit px-10 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

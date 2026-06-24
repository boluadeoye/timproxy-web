import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu, IconX } from "../shared/Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isTransparent = location.pathname === "/" || location.pathname === "/careers";

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "About us", path: "/about" },
  ];

  return (
    <>
      <nav className={`absolute top-0 left-0 w-full z-[100] h-20 md:h-24 flex items-center transition-all ${
        isTransparent ? "bg-transparent" : "bg-white border-b border-black/5"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center">
          <Link to="/" className="relative z-[110] shrink-0">
            <img 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223417/blog_assets/bymb4ayvgepu31mv18al.png" 
              className="h-8 md:h-10 w-auto object-contain" 
              alt="Timproxy" 
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
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
              className={`px-8 py-2.5 border rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                isTransparent 
                  ? "border-white/40 text-white hover:bg-white hover:text-industrial" 
                  : "border-industrial/20 text-industrial hover:bg-industrial hover:text-white"
              }`}
            >
              Contact us
            </Link>
          </div>

          <button className={`md:hidden relative z-[110] ${isTransparent ? "text-white" : "text-industrial"}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} 
            className="fixed inset-y-0 right-0 w-[85%] bg-industrial z-[200] p-10 flex flex-col shadow-2xl"
          >
            <button className="self-end text-white mb-12" onClick={() => setIsOpen(false)}><IconX /></button>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-4xl font-display tracking-widest uppercase ${
                    location.pathname === link.path ? "text-safety" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

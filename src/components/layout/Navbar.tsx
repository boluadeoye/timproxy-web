import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu, IconX } from "../shared/Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-[100] h-20 md:h-28 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center">
          <Link to="/" className="relative z-[110] shrink-0">
            <img 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223417/blog_assets/bymb4ayvgepu31mv18al.png" 
              className="h-8 md:h-10 w-auto object-contain" 
              alt="Timproxy" 
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {["Products", "Services", "Projects", "Careers", "About us"].map((link) => (
              <Link key={link} to={`/${link.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 hover:text-safety transition-colors">
                {link}
              </Link>
            ))}
            <Link to="/contact" className="px-8 py-2.5 border border-white/40 text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-industrial transition-all">
              Contact us
            </Link>
          </div>

          <button className="md:hidden text-white relative z-[110]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} 
            className="fixed inset-y-0 right-0 w-[80%] bg-industrial z-[200] p-10 flex flex-col shadow-2xl"
          >
            <button className="self-end text-white mb-12" onClick={() => setIsOpen(false)}><IconX /></button>
            <div className="flex flex-col gap-8">
              {["Products", "Services", "Projects", "Careers", "About us"].map((link) => (
                <Link key={link} to="/" onClick={() => setIsOpen(false)} className="text-4xl font-display tracking-widest uppercase text-white">{link}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconCalendar, IconBriefcase, IconShield, IconHeadset } from "../shared/Icons";

const slides = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782296108/blog_assets/c78gevmrmd99vndrgjt3.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg"
];

const kpis = [
  { val: "25+", label: "Years experience", icon: <IconCalendar size={28} /> },
  { val: "500+", label: "Projects completed", icon: <IconBriefcase size={28} /> },
  { val: "0", label: "Safety incidents 2025", icon: <IconShield size={28} /> },
  { val: "24/7", label: "Emergency response", icon: <IconHeadset size={28} /> }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col bg-industrial overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 z-10" />
      </div>

      <div className="relative z-20 flex-grow flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-5xl">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 rounded-full border border-[#C5A28E]/40 text-[#C5A28E] text-[10px] font-bold uppercase tracking-widest bg-[#C5A28E]/10 backdrop-blur-md">
                ISO Certified
              </span>
              <span className="px-4 py-1.5 rounded-full border border-safety/40 text-safety text-[10px] font-bold uppercase tracking-widest bg-safety/10 backdrop-blur-md">
                Zero safety incidents 2025
              </span>
            </div>

            <h1 
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              className="text-5xl md:text-8xl lg:text-[110px] text-white leading-[0.85] tracking-tighter mb-8 uppercase"
            >
              Reliable Oil & Gas <br /> Solutions Across <br /> Nigeria
            </h1>

            <p className="text-white/80 text-sm md:text-lg max-w-xl mb-10 font-light leading-relaxed">
              25+ years of proven expertise with an unmatched safety record in the energy sector.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link 
                to="/services" 
                className="px-10 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-safety hover:scale-105 shadow-lg shadow-safety/20"
              >
                Explore services
              </Link>
              <Link 
                to="/projects" 
                className="px-10 py-4 border border-white/40 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-industrial hover:scale-105"
              >
                View projects
              </Link>
            </div>

            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === i ? "w-10 bg-safety" : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full z-30 bg-black/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 py-10 md:py-16 px-6 md:px-12 gap-8">
          {kpis.map((kpi, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <div className="text-white/50 group-hover:text-safety transition-colors duration-300">{kpi.icon}</div>
              <div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-3xl md:text-5xl text-white leading-none group-hover:text-safety transition-colors duration-300">{kpi.val}</h3>
                <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mt-1">{kpi.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

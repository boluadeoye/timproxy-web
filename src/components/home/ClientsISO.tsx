import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../shared/Reveal";

const clientLogos = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782281255/blog_assets/wg6swaeoiyj0fzz6m1dr.png",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782281272/blog_assets/qo2jtozlif4fu2cfoc5w.png",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782281297/blog_assets/de25bixgqqrs1h46eafg.png",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782281318/blog_assets/memxs4g0vtuhrdclvw04.png",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782281335/blog_assets/pa0hbvlss911s9rluyjy.png"
];

const isoSeals = [
  { img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782282464/blog_assets/ogsjw3xlaxkriygu8xqb.jpg", code: "ISO 9001:2015" },
  { img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782282471/blog_assets/pv5ezufadfm8mnomx7ko.jpg", code: "ISO 45001:2025" },
  { img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782282479/blog_assets/ut9pvydyztfy1dhus6cm.jpg", code: "ISO 29001:2025" }
];

const stats = [
  { label: "Response time", val: "<2 Hours Emergency Response" },
  { label: "Safety record", val: "Zero Lost Time Injuries 2024" },
  { label: "Coverage", val: "Nationwide operations" }
];

export default function ClientsISO() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display text-industrial tracking-widest uppercase">Our Esteemed Clients</h2>
        </div>

        {/* CLIENT LOGO MARQUEE: Drastically Increased Size */}
        <div className="relative w-full overflow-hidden mb-24 py-8">
          <motion.div 
            className="flex gap-16 md:gap-32 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...clientLogos, ...clientLogos].map((url, idx) => (
              <img 
                key={idx} 
                src={url} 
                alt="Client Logo" 
                className="h-16 md:h-28 w-auto object-contain"
              />
            ))}
          </motion.div>
        </div>

        {/* ISO CERTIFICATIONS: Orange Borders */}
        <Reveal>
          <div className="border-2 border-safety/60 rounded-[40px] p-8 md:p-16 mb-8 bg-white">
            <h3 className="text-lg font-sans font-bold text-industrial mb-12 text-left uppercase tracking-wider">ISO certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {isoSeals.map((iso, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 mb-6 flex items-center justify-center">
                    <img src={iso.img} alt={iso.code} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-bold text-industrial tracking-tight">{iso.code}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* PERFORMANCE STATS: Orange Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="border-2 border-safety/60 rounded-[24px] p-10 bg-white h-full flex flex-col justify-center">
                <h4 className="text-xl font-sans font-bold text-industrial mb-2 uppercase tracking-tight">
                  {stat.label}
                </h4>
                <p className="text-industrial/70 text-sm font-medium">
                  {stat.val}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

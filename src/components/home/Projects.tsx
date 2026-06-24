import React from "react";
import { Reveal } from "../shared/Reveal";

const projects = [
  {
    title: "North Sea Oil Platform",
    category: "OFFSHORE",
    catColor: "bg-[#FF6D00]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png",
    stats: [
      { label: "DURATION", val: "18 Months" },
      { label: "INCIDENTS", val: "Zero" },
      { label: "SPECIALISTS", val: "42" }
    ]
  },
  {
    title: "Rapid Response Task Force",
    category: "EMERGENCY",
    catColor: "bg-[#007BFF]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png",
    stats: [
      { label: "RESPONSE", val: "72 Hours" },
      { label: "SUCCESS", val: "100%" },
      { label: "RESPONDERS", val: "30" }
    ]
  },
  {
    title: "Pipeline Upgrade Project",
    category: "INFRASTRUCTURE",
    catColor: "bg-[#28A745]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg",
    stats: [
      { label: "TIMELINE", val: "24 Months" },
      { label: "UPTIME", val: "98%" },
      { label: "ENGINEERS", val: "60" }
    ]
  }
];

export default function Projects() {
  return (
    <section className="py-24 md:py-40 bg-[#F9F9F9]">
      {/* WIDENED CONTAINER FOR DESKTOP FIDELITY */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* 1. FIGMA HEADER */}
        <div className="text-center mb-24">
          <Reveal>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="h-px w-16 bg-industrial/10" />
              <span className="text-safety text-[11px] font-bold uppercase tracking-[0.4em]">
                PROVEN IN THE FIELD
              </span>
              <div className="h-px w-16 bg-industrial/10" />
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-bold text-industrial uppercase tracking-tight leading-none">
              Our Projects
            </h2>
            <p className="text-industrial/40 text-sm md:text-base mt-8 max-w-2xl mx-auto font-light">
              From offshore operations to emergency response, our work delivers results at scale.
            </p>
          </Reveal>
        </div>

        {/* 2. PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[50px] p-8 lg:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col h-full transition-all duration-500 hover:shadow-[0_60px_150px_-20px_rgba(0,0,0,0.12)]">
                
                {/* BADGE */}
                <div className={`w-fit px-4 py-1.5 ${p.catColor} text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-md mb-8`}>
                  {p.category}
                </div>

                {/* INSET IMAGE */}
                <div className="relative aspect-[1.6/1] rounded-2xl overflow-hidden mb-10">
                  <img 
                    src={p.img} 
                    className="w-full h-full object-cover" 
                    alt={p.title} 
                  />
                </div>

                {/* TITLE: CALIBRATED FOR WIDTH */}
                <h3 className="text-4xl lg:text-5xl font-display text-industrial uppercase leading-[0.95] mb-12 break-words">
                  {p.title}
                </h3>

                {/* TECHNICAL STAT ROW: BULLETPROOF FLEX GRID */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex-1">
                    <p className="text-2xl lg:text-3xl font-sans font-light text-industrial leading-none">
                      {p.stats[0].val.split(' ')[0]}
                      <span className="text-sm block mt-1">{p.stats[0].val.split(' ')[1] || ''}</span>
                    </p>
                    <p className="text-[9px] text-industrial/40 font-bold uppercase mt-2 tracking-wider">
                      {p.stats[0].label}
                    </p>
                  </div>
                  
                  <div className="w-px h-10 bg-black/10 mx-4" />
                  
                  <div className="flex-1 text-center">
                    <p className="text-2xl lg:text-3xl font-sans font-light text-industrial leading-none">
                      {p.stats[1].val}
                    </p>
                    <p className="text-[9px] text-industrial/40 font-bold uppercase mt-2 tracking-wider">
                      {p.stats[1].label}
                    </p>
                  </div>
                  
                  <div className="w-px h-10 bg-black/10 mx-4" />
                  
                  <div className="flex-1 text-right">
                    <p className="text-2xl lg:text-3xl font-sans font-light text-industrial leading-none">
                      {p.stats[2].val}
                    </p>
                    <p className="text-[9px] text-industrial/40 font-bold uppercase mt-2 tracking-wider">
                      {p.stats[2].label}
                    </p>
                  </div>
                </div>

                {/* FOOTER SEPARATOR & ISO TEXT */}
                <div className="mt-auto pt-8 border-t border-black/5">
                  <p className="text-[11px] text-industrial/30 text-center font-medium tracking-wide">
                    Delivered with ISO-certified safety standards
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

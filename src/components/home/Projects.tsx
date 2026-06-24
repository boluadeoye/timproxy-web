import React from "react";
import { Reveal } from "../shared/Reveal";

const projects = [
  {
    title: "North Sea Oil Platform",
    category: "OFFSHORE",
    catColor: "bg-[#FF6D00]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png",
    stats: [
      { label: "Duration", val: "18 Months" },
      { label: "Safety", val: "Zero Incidents" },
      { label: "Team", val: "42 Specialists" }
    ]
  },
  {
    title: "Rapid Response Task Force",
    category: "EMERGENCY",
    catColor: "bg-[#007BFF]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png",
    stats: [
      { label: "Response", val: "72 Hours" },
      { label: "Success", val: "100%" },
      { label: "Responders", val: "30" }
    ]
  },
  {
    title: "Pipeline Upgrade Project",
    category: "INFRASTRUCTURE",
    catColor: "bg-[#28A745]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg",
    stats: [
      { label: "Timeline", val: "24 Months" },
      { label: "Uptime", val: "98%" },
      { label: "Engineers", val: "60" }
    ]
  }
];

export default function Projects() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* EYEBROW & HEADING */}
        <div className="text-center mb-20">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-industrial/10" />
              <span className="text-safety text-[10px] font-bold uppercase tracking-[0.4em]">Proven in the field</span>
              <div className="h-px w-12 bg-industrial/10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-industrial uppercase tracking-tight">Our Projects</h2>
            <p className="text-industrial/40 text-sm mt-4 max-w-2xl mx-auto">From offshore operations to emergency response, our work delivers results at scale.</p>
          </Reveal>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-black/5 flex flex-col h-full">
                {/* Image & Badge */}
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
                  <div className={`absolute top-4 left-4 px-3 py-1 ${p.catColor} text-white text-[9px] font-bold uppercase tracking-widest rounded-md`}>
                    {p.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-bold text-industrial mb-8 uppercase tracking-wide">{p.title}</h3>
                  
                  {/* 3-COLUMN STAT GRID */}
                  <div className="grid grid-cols-3 gap-2 pt-6 border-t border-black/5">
                    {p.stats.map((s, idx) => (
                      <div key={idx}>
                        <p className="text-[9px] text-industrial/30 uppercase font-bold mb-1">{s.label}</p>
                        <p className="text-[11px] font-bold text-industrial leading-tight">{s.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* ISO MICRO-COPY */}
                  <p className="mt-6 text-[9px] text-industrial/30 text-center italic">
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

import React from "react";
import { Reveal } from "../shared/Reveal";

const projects = [
  { title: "North Sea Oil Platform", category: "OFFSHORE", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png", stats: [{ label: "Duration", val: "18 Months" }, { label: "Safety", val: "Zero Incidents" }] },
  { title: "Rapid Response Task Force", category: "EMERGENCY", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png", stats: [{ label: "Response", val: "72 Hours" }, { label: "Success", val: "100%" }] },
  { title: "Pipeline Upgrade Project", category: "INFRASTRUCTURE", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg", stats: [{ label: "Timeline", val: "24 Months" }, { label: "Uptime", val: "98%" }] }
];

export default function Projects() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <Reveal><h2 className="text-4xl md:text-6xl font-display text-industrial uppercase tracking-tighter mb-8">Our Projects</h2></Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-[32px] overflow-hidden shadow-lg border border-black/5 flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden"><img src={p.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} /></div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-display text-industrial mb-8 uppercase">{p.title}</h3>
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/5 mt-auto">
                    {p.stats.map((s, idx) => (
                      <div key={idx}><p className="text-[10px] text-industrial/30 uppercase font-bold mb-1">{s.label}</p><p className="text-xs font-bold text-industrial">{s.val}</p></div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

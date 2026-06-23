import React from "react";
import { Reveal } from "../shared/Reveal";
import { IconWrench, IconDrill, IconShieldCheck, IconArrowRight } from "../shared/Icons";

const services = [
  { img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png", icon: <IconWrench />, title: "Equipment Maintenance", desc: "Providing end-to-end technical solutions and specialized support for complex industrial operations." },
  { img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png", icon: <IconDrill />, title: "Installation Services", desc: "Providing end-to-end technical solutions and specialized support for complex industrial operations." },
  { img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg", icon: <IconShieldCheck />, title: "Safety & Compliance", desc: "Providing end-to-end technical solutions and specialized support for complex industrial operations." }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-[12px] font-bold text-safety uppercase tracking-[0.4em] mb-4">Our Core Services</h2>
          <p className="text-sm text-industrial/40 max-w-2xl mx-auto">Supporting the energy sector with comprehensive maintenance and rapid-response solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden"><img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={s.title} /></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4"><div className="text-safety">{s.icon}</div><h3 className="text-lg font-display tracking-wider uppercase">{s.title}</h3></div>
                  <p className="text-industrial/50 text-xs leading-relaxed mb-6">{s.desc}</p>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-safety flex items-center gap-2">Learn More <IconArrowRight size={12} /></button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

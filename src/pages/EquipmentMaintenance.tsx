import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/shared/PageHero";
import { Reveal } from "../components/shared/Reveal";
import { IconSearch, IconDrill, IconShield } from "../components/shared/Icons";

export default function EquipmentMaintenance() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Equipment Maintenance" 
        subtitle="Our equipment maintenance services are designed to keep critical systems operating at peak performance while minimizing downtime and operational risk. We provide structured preventive programs and responsive corrective support tailored to your operational environment."
        bgImage="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png"
      />

      {/* 1. What we can do for you (5-Column Vertical Cards) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-display text-industrial uppercase tracking-tight">What we can do for you</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Preventive maintenance scheduling", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" },
              { title: "Routine system servicing and calibration", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" },
              { title: "Performance optimization assessments", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png" },
              { title: "Corrective repairs and fault diagnosis", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" },
              { title: "Spare parts management and replacement", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" }
            ].map((card, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="relative h-[380px] rounded-3xl overflow-hidden group shadow-lg">
                  <img src={card.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={card.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-white font-sans font-medium text-sm leading-snug">{card.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why It Matters */}
      <section className="py-24 bg-slate">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display text-industrial uppercase tracking-tight mb-6">Why It Matters</h2>
            <p className="text-industrial/70 text-base md:text-xl font-light leading-relaxed mb-8">
              Well maintained equipment reduces unexpected failures, extends asset lifespan, and lowers long-term operating costs.
            </p>
            <button className="px-8 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-industrial transition-all">Get a Service Quote</button>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
            <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" className="w-full h-full object-cover" alt="Why It Matters" />
          </div>
        </div>
      </section>

      {/* 3. Other Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-5xl font-display text-industrial uppercase tracking-tight">Other Services</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Inspection & Integrity", icon: <IconSearch />, desc: "Thorough inspections and integrity assessments to detect issues early and extend asset lifespan." },
              { title: "Installation Services", icon: <IconDrill />, desc: "Professional installation and commissioning of industrial systems to ensure optimal performance from day one." },
              { title: "Emergency Response", icon: <IconShield />, desc: "Rapid response support to minimize risk, restore operations quickly, and prevent escalation during critical situations." }
            ].map((s, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm flex flex-col h-full">
                  <div className="aspect-video overflow-hidden"><img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" className="w-full h-full object-cover" alt={s.title} /></div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4"><span className="text-safety">{s.icon}</span><h3 className="text-xl font-display text-industrial uppercase">{s.title}</h3></div>
                    <p className="text-industrial/60 text-xs leading-relaxed mb-6 flex-1">{s.desc}</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-safety">Learn More &rarr;</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

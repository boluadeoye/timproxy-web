import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";
import { 
  IconSearch, IconDrill, IconShieldCheck, 
  IconSiren, IconArrowRight 
} from "../components/shared/Icons";

export default function EquipmentMaintenance() {
  const capabilities = [
    { title: "Preventive maintenance scheduling", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" },
    { title: "Routine system servicing and calibration", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" },
    { title: "Performance optimization assessments", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png" },
    { title: "Corrective repairs and fault diagnosis", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782296108/blog_assets/c78gevmrmd99vndrgjt3.jpg" },
    { title: "Spare parts management and replacement", img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293192/blog_assets/z1w6wjthjomvf05upwh6.jpg" }
  ];

  return (
    <main className="relative min-h-screen bg-[#F5F5F5] overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-industrial">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782302637/blog_assets/hh5t0islh03qp134vltw.jpg" 
            className="w-full h-full object-cover opacity-60" 
            alt="Maintenance Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 z-10" />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-display text-white tracking-tighter uppercase mb-6 leading-[0.85]">
              Equipment <br /> Maintenance
            </h1>
            <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Our equipment maintenance services are designed to keep critical systems operating at peak performance while minimizing downtime.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. THE "FACEBOOK STORIES" MONOLITH GRID */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-industrial uppercase tracking-tight text-center">
              What we can do for you
            </h2>
          </div>
          
          {/* HORIZONTAL SCROLL CONTAINER (NO WRAP) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-10 -mx-6 px-6 md:mx-0 md:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:gap-6">
            {capabilities.map((card, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="flex-none w-[85vw] sm:w-[45vw] md:w-[350px] lg:w-full snap-center">
                <div className="relative aspect-[3/4.5] rounded-[32px] overflow-hidden group shadow-2xl border border-black/5">
                  <img 
                    src={card.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    alt={card.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex items-end p-8">
                    <h3 className="text-white font-display text-2xl md:text-3xl uppercase leading-[0.9] tracking-tighter">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY IT MATTERS (INSET PLATE) */}
      <section className="py-24 bg-[#F5F5F5] px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] md:rounded-[60px] shadow-sm border border-black/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center p-8 md:p-20">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-display text-industrial uppercase tracking-tight mb-8 leading-none">
                Why It Matters
              </h2>
              <p className="text-industrial/70 text-base md:text-xl font-light leading-relaxed mb-10">
                Well maintained equipment reduces unexpected failures, extends asset lifespan, and lowers long-term operating costs.
              </p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-industrial transition-all">
                Get a Service Quote
              </Link>
            </Reveal>
            <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-video">
              <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" className="w-full h-full object-cover" alt="Impact" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTHER SERVICES LEDGER */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-display text-industrial uppercase mb-16">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Inspection & Integrity", icon: <IconSearch />, desc: "Thorough inspections to detect issues early." },
              { title: "Installation Services", icon: <IconDrill />, desc: "Professional commissioning of industrial systems." },
              { title: "Emergency Response", icon: <IconSiren />, desc: "Rapid response support to minimize risk." },
              { title: "Safety & Compliance", icon: <IconShieldCheck />, desc: "Ensuring operations meet industry regulations." }
            ].map((s, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl border border-black/5 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
                  <div className="aspect-video bg-slate-100">
                    <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782296108/blog_assets/c78gevmrmd99vndrgjt3.jpg" className="w-full h-full object-cover" alt={s.title} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-safety">{s.icon}</span>
                      <h3 className="text-lg font-display text-industrial uppercase">{s.title}</h3>
                    </div>
                    <p className="text-industrial/60 text-[11px] uppercase tracking-wider mb-6">{s.desc}</p>
                    <Link to="/services" className="text-[10px] font-bold text-safety uppercase tracking-widest flex items-center gap-2">
                      Learn More <IconArrowRight size={12} />
                    </Link>
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

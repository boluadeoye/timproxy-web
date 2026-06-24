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

  const otherServices = [
    { 
      title: "Inspection & Integrity", 
      icon: <IconSearch />, 
      img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png",
      desc: "Thorough inspections and integrity assessments to detect issues early." 
    },
    { 
      title: "Installation Services", 
      icon: <IconDrill />, 
      img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782296108/blog_assets/c78gevmrmd99vndrgjt3.jpg",
      desc: "Professional installation and commissioning of industrial systems." 
    },
    { 
      title: "Emergency Response", 
      icon: <IconSiren />, 
      img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293192/blog_assets/z1w6wjthjomvf05upwh6.jpg",
      desc: "Rapid response support to minimize risk and restore operations quickly." 
    },
    { 
      title: "Safety & Compliance", 
      icon: <IconShieldCheck />, 
      img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png",
      desc: "Ensuring all operations meet industry regulations and safety standards." 
    }
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
              Our equipment maintenance services are designed to keep critical systems operating at peak performance while minimizing downtime and operational risk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. WHAT WE CAN DO FOR YOU: NORMAL CASE & SUBTLE ROUNDING */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-industrial tracking-tight normal-case">
              What we can do for you
            </h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-10 -mx-6 px-6 md:mx-0 md:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:gap-6">
            {capabilities.map((card, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="flex-none w-[85vw] sm:w-[45vw] md:w-[350px] lg:w-full snap-center">
                <div className="relative aspect-[3/4.5] rounded-xl overflow-hidden group shadow-xl border border-black/5">
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

      {/* 3. WHY IT MATTERS: RIGHT ANCHOR & SUBTLE ROUNDING */}
      <section className="py-24 bg-[#F5F5F5] px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 p-8 md:p-20">
            <div className="w-full md:w-1/2">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-display text-industrial uppercase tracking-tight mb-8 leading-none">
                  Why It Matters
                </h2>
                <p className="text-industrial/70 text-base md:text-xl font-light leading-relaxed mb-10 max-w-md">
                  Well maintained equipment reduces unexpected failures, extends asset lifespan, and lowers long-term operating costs.
                </p>
                <Link to="/contact" className="inline-block px-10 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-industrial transition-all shadow-lg shadow-safety/20">
                  Get a Service Quote
                </Link>
              </Reveal>
            </div>
            <div className="w-full md:w-1/2">
              <Reveal delay={0.2}>
                <div className="rounded-xl overflow-hidden shadow-2xl aspect-video md:aspect-square lg:aspect-video">
                  <img 
                    src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" 
                    className="w-full h-full object-cover" 
                    alt="Maintenance Impact" 
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTHER SERVICES: CENTERED, NORMAL CASE, SIDE-SCROLL */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-industrial tracking-tight normal-case">
              Other Services
            </h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-10 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible">
            {otherServices.map((s, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="flex-none w-[80vw] sm:w-[40vw] md:w-full snap-center">
                <div className="bg-white rounded-xl border border-black/5 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={s.img} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt={s.title} 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-safety/10 rounded-xl flex items-center justify-center text-safety">
                        {s.icon}
                      </div>
                      <h3 className="text-lg font-display text-industrial uppercase leading-tight">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-industrial/60 text-[11px] font-medium leading-relaxed mb-8 flex-1 uppercase tracking-wider">
                      {s.desc}
                    </p>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-safety hover:gap-4 transition-all"
                    >
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

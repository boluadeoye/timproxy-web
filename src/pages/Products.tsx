import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHero from "../components/shared/PageHero";
import { Reveal } from "../components/shared/Reveal";

const products = [
  { title: "Mechanical & Process Equipment", desc: "Industrial grade equipment engineered for durability and operational efficiency." },
  { title: "Electrical Equipments", desc: "Reliable electrical systems and components designed to power and support complex industrial operations safely and efficiently." },
  { title: "Valves", desc: "High performance valves engineered for precise flow control, pressure regulation, and long-term operational reliability." },
  { title: "Piping Material, Plate, Sheet & Structure", desc: "Durable piping materials and structural components built to withstand demanding industrial and offshore environments." },
  { title: "Closure, Fittings & Flanges", desc: "Precision engineered fittings and flanges ensuring secure connections and leak-free performance across critical systems." },
  { title: "Instrumentation & Control Equipment", desc: "Advanced instrumentation and control systems designed to monitor, regulate, and optimize industrial processes." },
  { title: "Bolting, Gasket & Packing Materials", desc: "High quality sealing and fastening solutions that ensure structural integrity and system safety under extreme conditions." },
  { title: "Communication & Computer Equipments", desc: "Industrial communication and computing solutions that enhance connectivity, monitoring, and operational coordination." },
  { title: "Safety, Protection, Security & Fire Fighting Equipment", desc: "Comprehensive safety and fire protection systems designed to safeguard personnel, assets, and critical infrastructure." }
];

export default function Products() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Explore Our Product Range" 
        subtitle="Discover our comprehensive range of industrial equipment and materials designed to support oil and gas operations with reliability, safety, and efficiency."
        bgImage="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png"
        ctaText="Request Product Quote"
      />

      {/* 1. Product Grid (3x3) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-slate">
                    <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={p.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-display text-industrial uppercase tracking-wide mb-3">{p.title}</h3>
                    <p className="text-industrial/60 text-xs leading-relaxed mb-6 flex-1">{p.desc}</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-safety">Explore &rarr;</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Product Selection CTA */}
      <section className="py-24 bg-slate text-center border-t border-black/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display text-industrial uppercase mb-4">Need Help Selecting the Right Product?</h2>
          <p className="text-industrial/60 text-sm mb-8">Our team of experts can guide you through specifications, compliance requirements, and procurement processes.</p>
          <button className="px-8 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-industrial transition-all">Speak to a Product Specialist</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

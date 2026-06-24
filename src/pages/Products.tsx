import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";
import { IconArrowRight } from "../components/shared/Icons";

const products = [
  { 
    title: "Mechanical & Process Equipment", 
    desc: "Industrial grade equipment engineered for durability and operational efficiency.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782222117/blog_assets/nxtwj9auks39ney8jzsx.png"
  },
  { 
    title: "Electrical Equipments", 
    desc: "Reliable electrical systems and components designed to power and support complex industrial operations.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293098/blog_assets/vzxw3z0qnsbmfxcqc9y3.jpg"
  },
  { 
    title: "Valves", 
    desc: "High performance valves engineered for precise flow control, pressure regulation, and long-term reliability.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293106/blog_assets/vlko9j9cyjpc05uwiofh.jpg"
  },
  { 
    title: "Piping Material, Plate, Sheet & Structure", 
    desc: "Durable piping materials and structural components built to withstand demanding industrial environments.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293113/blog_assets/qzgqjuneqxftkdkccdot.jpg"
  },
  { 
    title: "Closure, Fittings & Flanges", 
    desc: "Precision engineered fittings and flanges ensuring secure connections and leak-free performance.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293122/blog_assets/algaxnycy6e49tvpwkqi.jpg"
  },
  { 
    title: "Instrumentation & Control Equipment", 
    desc: "Advanced instrumentation and control systems designed to monitor, regulate, and optimize processes.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293131/blog_assets/fw19xlte1e621rnxne29.jpg"
  },
  { 
    title: "Bolting, Gasket & Packing Materials", 
    desc: "High quality sealing and fastening solutions that ensure structural integrity and system safety.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293138/blog_assets/tjm66pbxikvnbssyeaea.jpg"
  },
  { 
    title: "Communication & Computer Equipments", 
    desc: "Industrial communication and computing solutions that enhance connectivity and operational coordination.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293146/blog_assets/awgdl17avyw1jslabirb.jpg"
  },
  { 
    title: "Safety, Protection, Security & Fire Fighting Equipment", 
    desc: "Comprehensive safety and fire protection systems designed to safeguard personnel and critical infrastructure.",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293153/blog_assets/vdc7msnlcukxlr9qdn8t.jpg"
  }
];

export default function Products() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      {/* HERO SECTION: ENFORCED SINGLE LINE HEADING */}
      <section className="relative h-[70svh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-industrial text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293192/blog_assets/z1w6wjthjomvf05upwh6.jpg" 
            className="w-full h-full object-cover opacity-70" 
            alt="Product Range Hero" 
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 pt-24">
          <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-white tracking-tight uppercase mb-6 lg:whitespace-nowrap">
              Explore Our Product Range
            </h1>
            <p className="text-white/90 text-sm md:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Discover our comprehensive range of industrial equipment and materials designed to support oil and gas operations with reliability, safety, and efficiency.
            </p>
            <button className="px-12 py-5 bg-safety text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-industrial transition-all rounded-none">
              Request Product Quote
            </button>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT GRID: STRICT 3x3 MATRIX (9 ITEMS) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {products.map((p, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 0.05}>
                <div className="group bg-white flex flex-col h-full transition-all duration-300 rounded-none">
                  {/* SHARP IMAGE CONTAINER */}
                  <div className="aspect-[16/10] overflow-hidden bg-slate rounded-none mb-8">
                    <img 
                      src={p.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt={p.title} 
                    />
                  </div>
                  {/* CONTENT AREA */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-sans font-bold text-industrial uppercase tracking-tight mb-4 leading-tight min-h-[3.5rem]">
                      {p.title}
                    </h3>
                    <p className="text-industrial/60 text-[14px] font-light leading-relaxed mb-8 flex-1">
                      {p.desc}
                    </p>
                    <div className="mt-auto">
                      <button className="text-[11px] font-bold uppercase tracking-widest text-safety flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore <IconArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTION CTA: SHARP EDGES */}
      <section className="py-24 bg-[#F0F4F8] text-center border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display text-industrial uppercase tracking-tight mb-6">
              Need Help Selecting the Right Product?
            </h2>
            <p className="text-industrial/60 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light">
              Our team of experts can guide you through specifications, compliance requirements, and procurement processes to ensure you get the exact solution for your operations.
            </p>
            <button className="px-10 py-4 bg-safety text-white font-bold text-xs uppercase tracking-widest hover:bg-industrial transition-all rounded-none">
              Speak to a Product Specialist
            </button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";
import { IconArrowRight } from "../components/shared/Icons";

export default function About() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative h-[50vh] min-h-[450px] w-full flex items-center justify-center overflow-hidden bg-industrial">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782296108/blog_assets/c78gevmrmd99vndrgjt3.jpg" 
            className="w-full h-full object-cover opacity-60" 
            alt="About Timproxy" 
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        
        <div className="relative z-20 text-center pt-20">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-display text-white uppercase tracking-tighter mb-4">
              About Us
            </h1>
            <div className="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
              <Link to="/" className="hover:text-safety transition-colors">Home</Link>
              <span className="text-safety">{">"}</span>
              <span className="text-white">About</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. EDITORIAL SPLIT: FORCED SIDE-BY-SIDE ON MD+ */}
      <section className="py-20 md:py-32 px-6 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: TEXT PLATE */}
          <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-black/5 flex flex-col justify-center">
            <Reveal>
              <div className="flex gap-3 mb-10">
                <span className="px-4 py-1.5 rounded-full border border-safety/20 text-safety text-[9px] font-bold uppercase tracking-widest bg-safety/5">
                  • About Us
                </span>
                <span className="px-4 py-1.5 rounded-full border border-black/10 text-industrial/40 text-[9px] font-bold uppercase tracking-widest">
                  • Our Mission
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-industrial uppercase leading-[0.95] mb-10 tracking-tight">
                Leading the Future of <br /> Industrial Solutions
              </h2>

              <div className="space-y-6 text-industrial/60 text-sm md:text-base font-light leading-relaxed mb-12">
                <p>
                  Timproxy is a premier provider of integrated solutions for the oil and gas sector. With over 25 years of experience, we excel in transforming complex technical requirements into streamlined operational successes.
                </p>
                <p>
                  Our expertise spans professional engineering, procurement, and maintenance services. We are dedicated to delivering exceptional results that resonate across a myriad of projects.
                </p>
                <p>
                  What truly distinguishes us is our unique ability to infuse innovation into every phase of the production process. We believe that every project should be a reflection of our clients' core values.
                </p>
              </div>

              <button className="w-fit px-10 py-4 bg-[#F5F5F5] border border-black/5 text-industrial rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-safety hover:text-white transition-all group">
                Download Profile
                <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          </div>

          {/* RIGHT: ANCHORED IMAGE (FORCED HEIGHT MATCH) */}
          <Reveal className="h-full" delay={0.2}>
            <div className="relative h-full min-h-[400px] md:min-h-full rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Industrial Leadership" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[40px]" />
            </div>
          </Reveal>

        </div>
      </section>

      <Footer />
    </main>
  );
}

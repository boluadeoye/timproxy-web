import React from "react";
import { Reveal } from "../shared/Reveal";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-industrial text-center relative overflow-hidden">
      {/* Subtle Industrial Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase mb-8 leading-[1.1] tracking-tight">
            Ready to Keep Your Operations <br className="hidden md:block" /> Running Safely?
          </h2>
          
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            From planned maintenance to emergency response, our certified teams are available 24/7 to support critical operations across Nigeria.
          </p>

          {/* 3-BUTTON ARRAY: FIGMA SPEC */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-safety text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-safety-dark transition-all shadow-lg shadow-safety/20">
              Request Quote
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-safety text-safety rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-safety hover:text-white transition-all">
              Emergency Contact
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-white hover:text-industrial transition-all">
              Schedule a Consultation
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

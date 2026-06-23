import React from "react";
import { Reveal } from "../shared/Reveal";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-industrial text-center">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-display text-white uppercase mb-6">Ready to Keep Your Operations Running Safely?</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 font-light">From planned maintenance to emergency response, our certified teams are available 24/7.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-safety text-white rounded-full font-bold text-[11px] uppercase tracking-widest">Request Quote</button>
            <button className="px-8 py-4 bg-transparent border border-safety text-safety rounded-full font-bold text-[11px] uppercase tracking-widest">Emergency Contact</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

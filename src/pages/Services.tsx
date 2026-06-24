import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";
import { 
  IconCog, IconWrench, IconDrop, IconShield, 
  IconSearch, IconFileText, IconSliders, IconBarChart, 
  IconCheck 
} from "../components/shared/Icons";

export default function Services() {
  const offers = [
    { title: "Preventive Maintenance", icon: <IconCog />, desc: "Routine inspection and servicing of automated equipment to ensure optimal routine schedules before failures occur.", list: ["Equipment diagnostics", "Lubrication and calibration", "Performance testing", "Scheduled servicing"] },
    { title: "Corrective Maintenance", icon: <IconWrench />, desc: "Repairing damaged or malfunctioning equipment to restore optimal performance.", list: ["Mechanical repairs", "Component replacement", "System recalibration", "Emergency repair response"] },
    { title: "Pipeline Maintenance", icon: <IconDrop />, desc: "Ensuring pipeline integrity and preventing operational hazards through rigorous testing.", list: ["Corrosion inspection", "Leak detection", "Pipeline cleaning", "Structural integrity testing"] },
    { title: "Offshore Platform Support", icon: <IconShield />, desc: "Maintenance support for offshore drilling and production facilities worldwide.", list: ["Structural inspections", "Equipment servicing", "Safety compliance checks", "Emergency response"] }
  ];

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO: 50/50 SPLIT - NUDGED DOWN & SCALED */}
      <section className="pt-44 pb-20 md:pt-60 md:pb-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <Reveal>
              <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-display text-industrial uppercase tracking-tight mb-8 leading-[0.9] md:whitespace-nowrap">
                Our Services
              </h1>
              <p className="text-industrial/60 text-sm md:text-base leading-relaxed mb-10 max-w-lg font-light">
                Timproxy delivers specialized services designed to keep oil and gas infrastructure operating at peak efficiency. Our experienced engineers support refineries, offshore platforms, pipelines, and production facilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-10 py-4 bg-safety text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-industrial transition-all shadow-lg shadow-safety/20">
                  Request Service
                </Link>
                <button className="px-10 py-4 border border-industrial/20 text-industrial rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Talk to an Expert
                </button>
              </div>
            </Reveal>
          </div>
          <div className="order-1 md:order-2 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782296108/blog_assets/c78gevmrmd99vndrgjt3.jpg" 
              className="w-full h-full object-cover" 
              alt="Services Hero" 
            />
          </div>
        </div>
      </section>

      {/* 2. WHAT WE OFFER: CENTERED TITLE CASE & SIDE-SCROLL */}
      <section className="py-24 md:py-32 bg-[#F9F9F9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-industrial tracking-tight normal-case">
              What we offer
            </h2>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-10 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible">
            {offers.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="flex-none w-[80vw] sm:w-[40vw] md:w-full snap-center">
                <div className="bg-white rounded-xl p-8 border border-black/5 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="text-safety bg-safety/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                  <h3 className="text-xl font-display text-industrial uppercase mb-4 leading-tight">{item.title}</h3>
                  <p className="text-industrial/60 text-[11px] leading-relaxed mb-8 flex-1 uppercase tracking-wider">{item.desc}</p>
                  <ul className="space-y-3 border-t border-black/5 pt-6">
                    {item.list.map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-[9px] font-bold text-industrial/80 uppercase tracking-wide">
                        <span className="text-safety"><IconCheck size={12} /></span>{li}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS: CENTERED TITLE CASE & LEDGER LINES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center gap-8 mb-20">
            <div className="h-px bg-industrial/10 flex-1" />
            <h2 className="text-2xl md:text-4xl font-sans font-bold text-industrial tracking-tight normal-case whitespace-nowrap">
              Our process
            </h2>
            <div className="h-px bg-industrial/10 flex-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Inspection", icon: <IconSearch />, desc: "Engineers conduct a detailed site and equipment inspection." },
              { title: "Diagnosis", icon: <IconFileText />, desc: "Technical assessment identifies faults or maintenance requirements." },
              { title: "Execution", icon: <IconSliders />, desc: "Our technicians perform maintenance using certified procedures." },
              { title: "Reporting", icon: <IconBarChart />, desc: "We provide performance report and future maintenance plan." }
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-[#F9F9F9] rounded-xl p-10 border border-black/5 text-center flex flex-col items-center h-full">
                  <div className="text-safety bg-white shadow-md w-14 h-14 rounded-full flex items-center justify-center mb-6">{step.icon}</div>
                  <h3 className="text-xl font-display text-industrial uppercase mb-3">{step.title}</h3>
                  <p className="text-industrial/60 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE TIMPROXY: LEFT-ANCHORED & COMPRESSED TYPOGRAPHY */}
      <section className="py-24 md:py-40 bg-industrial text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            
            {/* IMAGE BLOCK (LEFT) */}
            <div className="w-full md:w-1/2">
              <Reveal>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" 
                    className="w-full h-full object-cover" 
                    alt="Why Timproxy" 
                  />
                </div>
              </Reveal>
            </div>

            {/* CONTENT BLOCK (RIGHT) */}
            <div className="w-full md:w-1/2">
              <Reveal delay={0.2}>
                <h2 className="text-[clamp(1.5rem,4.5vw,3.1rem)] font-display uppercase tracking-tighter mb-10 leading-none whitespace-nowrap">
                  Why Choose Timproxy
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                  {[
                    { label: "Certified oil & gas engineers" },
                    { label: "24/7 emergency support" },
                    { label: "Proven facility track record" },
                    { label: "ISO-certified operational standards" },
                    { label: "Experience across huge energy sector" },
                    { label: "Rapid response maintenance teams" }
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-white/90">
                      <span className="text-safety"><IconCheck size={16} /></span>{bullet.label}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  <button className="px-8 py-4 bg-safety text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-safety-dark transition-all">
                    Request Quote
                  </button>
                  <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                    Emergency Contact
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                    Schedule & Consultation
                  </button>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

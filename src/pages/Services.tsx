import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";
import { IconCog, IconWrench, IconDrop, IconShield, IconSearch, IconFileText, IconSliders, IconBarChart, IconCheck } from "../components/shared/Icons";

export default function Services() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Hero Split Layout */}
      <section className="pt-36 pb-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-8xl font-display text-industrial uppercase tracking-tight mb-6">Our Services</h1>
          <p className="text-industrial/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Timproxy delivers specialized services designed to keep oil and gas infrastructure operating at peak efficiency. Our experienced engineers support refineries, offshore platforms, pipelines, and production facilities with preventive, corrective, and emergency maintenance solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services/equipment-maintenance" className="px-8 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-industrial transition-all">Request Service</Link>
            <button className="px-8 py-4 border border-industrial/20 text-industrial rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate transition-all">Talk to an Expert</button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
          <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" className="w-full h-full object-cover" alt="Services Hero" />
        </div>
      </section>

      {/* 2. What We Offer Grid */}
      <section className="py-24 bg-slate">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20"><h2 className="text-4xl md:text-6xl font-display text-industrial uppercase tracking-tight">What We Offer</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Preventive Maintenance", icon: <IconCog />, desc: "Routine inspection and servicing of automated equipment to ensure optimal routine schedules before failures occur.", list: ["Equipment diagnostics", "Lubrication and calibration", "Performance testing", "Scheduled servicing"] },
              { title: "Corrective Maintenance", icon: <IconWrench />, desc: "Repairing damaged or malfunctioning equipment to restore optimal performance.", list: ["Mechanical repairs", "Component replacement", "System recalibration", "Emergency repair response"] },
              { title: "Pipeline Maintenance", icon: <IconDrop />, desc: "Ensuring pipeline integrity and preventing operational hazards.", list: ["Corrosion inspection", "Leak detection", "Pipeline cleaning", "Structural integrity testing"] },
              { title: "Offshore Platform Support", icon: <IconShield />, desc: "Maintenance support for offshore drilling and production facilities.", list: ["Structural inspections", "Equipment servicing", "Safety compliance checks", "Emergency response"] }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex flex-col h-full">
                  <div className="text-safety bg-safety/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-display text-industrial uppercase mb-4">{item.title}</h3>
                  <p className="text-industrial/60 text-xs leading-relaxed mb-8 flex-1">{item.desc}</p>
                  <ul className="space-y-3 border-t border-black/5 pt-6">
                    {item.list.map((li, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-medium text-industrial/80"><span className="text-safety"><IconCheck size={14} /></span>{li}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center gap-6 mb-20">
            <div className="h-px bg-industrial/10 flex-1 max-w-[100px]" />
            <h2 className="text-3xl md:text-5xl font-display text-industrial uppercase tracking-tight">Our Process</h2>
            <div className="h-px bg-industrial/10 flex-1 max-w-[100px]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Inspection", icon: <IconSearch />, desc: "Engineers conduct a detailed site and equipment inspection." },
              { title: "Diagnosis", icon: <IconFileText />, desc: "Technical assessment identifies faults or maintenance requirements." },
              { title: "Maintenance Execution", icon: <IconSliders />, desc: "Our technicians perform maintenance using certified procedures." },
              { title: "Reporting & Optimization", icon: <IconBarChart />, desc: "We provide performance report and future maintenance plan." }
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-slate rounded-3xl p-8 border border-black/5 text-center flex flex-col items-center">
                  <div className="text-safety bg-white shadow-md w-14 h-14 rounded-full flex items-center justify-center mb-6">{step.icon}</div>
                  <h3 className="text-xl font-display text-industrial uppercase mb-2">{step.title}</h3>
                  <p className="text-industrial/60 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <section className="py-20 bg-slate text-center border-t border-b border-black/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display text-industrial uppercase mb-4">Need Reliable Equipment Maintenance?</h2>
          <p className="text-industrial/60 text-sm">Our engineers are ready to support your operations with fast, reliable maintenance solutions.</p>
        </div>
      </section>

      {/* 5. Why Choose Timproxy */}
      <section className="py-24 bg-industrial text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden">
            <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" className="w-full h-full object-cover" alt="Why Timproxy" />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-8">Why Choose Timproxy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Certified oil & gas engineers", "24/7 emergency support",
                "Proven facility track record", "ISO-certified operational standards",
                "Experience across huge energy sector", "Rapid response maintenance teams"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-white/80"><span className="text-safety"><IconCheck size={16} /></span>{bullet}</div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest">Request Quote</button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/20">Emergency Contact</button>
              <button className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10">Schedule & Consultation</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

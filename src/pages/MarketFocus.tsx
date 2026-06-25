import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";
import { 
  IconUpstream, IconMidstream, IconDownstream, IconPower,
  IconSiren, IconBriefcase, IconFileText, IconShieldCheck, 
  IconSliders, IconCheck, IconArrowRight 
} from "../components/shared/Icons";

export default function MarketFocus() {
  const industries = [
    { title: "Upstream", desc: "Exploration and production solutions for offshore and onshore assets.", icon: <IconUpstream /> },
    { title: "Midstream", desc: "Reliable transportation, storage, and pipeline integrity services.", icon: <IconMidstream /> },
    { title: "Downstream", desc: "Refining and petrochemical support to maximize facility uptime.", icon: <IconDownstream /> },
    { title: "Power Generation", desc: "Integrated maintenance for utilities and industrial energy plants.", icon: <IconPower /> }
  ];

  const reasons = [
    { title: "Quick response", desc: "We mobilize 24/7 to resolve critical issues immediately without operational delays.", icon: <IconSiren size={32} /> },
    { title: "Experienced", desc: "Over 25 years of deep-rooted expertise in the Nigerian Oil & Gas sector.", icon: <IconBriefcase size={32} /> },
    { title: "Technical Clarity", desc: "Transparent reporting and engineering solutions delivered without unnecessary complexity.", icon: <IconFileText size={32} /> },
    { title: "Industry Savvy", desc: "Expert navigation of local content requirements and regulatory standards.", icon: <IconShieldCheck size={32} /> },
    { title: "One Stop Shop", desc: "Integrated solutions covering procurement, maintenance, and technical support.", icon: <IconSliders size={32} /> },
    { title: "100% Safety", desc: "Unwavering commitment to ISO-certified safety and quality protocols.", icon: <IconCheck size={32} /> }
  ];

  return (
    <main className="relative min-h-screen bg-[#F5F5F5] overflow-x-hidden">
      <Navbar />

      {/* 1. INDUSTRIES SECTION: FORCED 4-COLUMN LEDGER */}
      <section className="pt-48 pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-12 lg:p-20 shadow-sm border border-black/5">
          <div className="text-center mb-16">
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-display text-industrial uppercase tracking-tight mb-4">Industries</h1>
              <p className="text-industrial/50 text-sm md:text-base max-w-xl mx-auto font-light">
                Custom engineering services and solutions built specifically for your industrial requirements.
              </p>
            </Reveal>
          </div>

          {/* FORCED 4-COL GRID AT MD BREAKPOINT */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[#F9F9F9] rounded-xl p-8 border border-black/5 flex flex-col items-center text-center h-full hover:shadow-md transition-all group">
                  <h3 className="text-lg font-sans font-bold text-industrial mb-2">{ind.title}</h3>
                  <p className="text-industrial/60 text-[10px] leading-relaxed mb-10 uppercase tracking-wider font-medium">{ind.desc}</p>
                  <div className="text-safety/30 group-hover:text-safety transition-all duration-500 mb-10 drop-shadow-[0_0_10px_rgba(255,109,0,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(255,109,0,0.3)]">
                    {ind.icon}
                  </div>
                  <Link to="/services" className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold text-safety uppercase tracking-widest hover:gap-4 transition-all">
                    Learn more <IconArrowRight size={12} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. 6 REASONS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <Reveal>
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="h-px w-12 bg-industrial/10" />
                <span className="text-safety text-[10px] font-bold uppercase tracking-[0.4em]">Why Choose Us</span>
                <div className="h-px w-12 bg-industrial/10" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display text-industrial uppercase tracking-tight leading-none">
                6 Reasons to Partner <br /> with Timproxy
              </h2>
              <div className="w-12 h-1 bg-safety mx-auto mt-8" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {reasons.map((reason, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex gap-6">
                  <div className="shrink-0 text-industrial/80 mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-sans font-bold text-industrial mb-3">{reason.title}</h4>
                    <p className="text-industrial/60 text-sm font-light leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-industrial/40 text-xs font-medium uppercase tracking-widest">
              Stop wasting time and money on inefficient maintenance. <Link to="/contact" className="text-safety hover:underline">Explore our company</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

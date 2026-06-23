import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconCalendar, IconBriefcase, IconShield, IconHeadset, IconArrowRight } from "../shared/Icons";

const kpis = [
  { val: "25+", label: "Years Experience", icon: <IconCalendar /> },
  { val: "500+", label: "Projects Completed", icon: <IconBriefcase /> },
  { val: "0", label: "Safety Incidents 2023", icon: <IconShield /> },
  { val: "24/7", label: "Emergency Response", icon: <IconHeadset /> }
];

export default function Hero() {
  return (
    <section className="relative min-h-[110svh] md:h-screen w-full flex items-center overflow-hidden bg-industrial">
      <div className="absolute inset-0 z-0">
        <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" className="w-full h-full object-cover opacity-70" alt="Hero" />
        <div className="absolute inset-0 scrim-hero-light z-10" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-96 md:pb-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex gap-3 mb-6">
            <span className="px-2.5 py-1 rounded border border-white/20 text-white text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] bg-white/5">ISO Certified</span>
            <span className="px-2.5 py-1 rounded border border-safety/40 text-safety text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] bg-safety/5">25+ Years Experience</span>
          </div>
          <h1 className="text-[42px] md:text-[110px] font-display text-white leading-[0.9] tracking-tighter max-w-5xl mb-6 uppercase">Reliable Oil & Gas <br className="hidden md:block" /> Solutions Across <br /> Nigeria</h1>
          <p className="text-white/60 text-sm md:text-lg max-w-md md:max-w-xl mb-10 font-light leading-relaxed">25+ years of proven expertise with an unmatched safety record in maintenance and installation.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="px-8 py-4 bg-safety text-white rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3">
              Explore Services <IconArrowRight size={16} />
            </Link>
            <Link to="/projects" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-[11px] uppercase tracking-widest text-center">
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full z-30 bg-industrial/95 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {kpis.map((kpi, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-6 md:py-12 px-2 text-center">
              <div className="text-safety mb-2 md:mb-4 scale-75 md:scale-100">{kpi.icon}</div>
              <h3 className="text-2xl md:text-5xl font-display text-white leading-none">{kpi.val}</h3>
              <p className="text-white/40 text-[8px] md:text-[9px] font-bold uppercase tracking-widest mt-1 md:mt-2">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

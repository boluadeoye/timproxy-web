import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconCalendar, IconBriefcase, IconShield, IconHeadset, IconArrowRight } from "../shared/Icons";

const kpis = [
  { val: "25+", label: "Years experience", icon: <IconCalendar /> },
  { val: "500+", label: "Projects completed", icon: <IconBriefcase /> },
  { val: "0", label: "Safety incidents 2025", icon: <IconShield /> },
  { val: "24/7", label: "Emergency response", icon: <IconHeadset /> }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-industrial overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" 
          className="w-full h-full object-cover opacity-90" 
          alt="Hero" 
        />
        <div className="absolute inset-0 scrim-hero-light z-10" />
      </div>

      {/* Main Content Wrapper: Flex-Grow ensures it takes space between Nav and Ribbon */}
      <div className="relative z-20 flex-grow flex flex-col justify-center pt-32 pb-64 md:pt-40 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl"
          >
            <div className="flex flex-col gap-2 mb-6">
              <span className="w-fit px-3 py-1 rounded-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] bg-white/5">
                ISO Certified
              </span>
              <span className="w-fit px-3 py-1 rounded-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-[0.2em] bg-white/5">
                Zero safety incidents 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-display text-white leading-[1] tracking-tight mb-6 uppercase">
              Reliable Oil & Gas <br className="hidden md:block" /> Solutions Across <br /> Nigeria
            </h1>
            
            <p className="text-white/80 text-sm md:text-lg max-w-xl mb-8 font-light leading-relaxed">
              25+ years of proven expertise with an unmatched safety record
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/services" className="px-8 py-3.5 bg-safety text-white rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center gap-3">
                Explore services <IconArrowRight size={14} />
              </Link>
              <Link to="/projects" className="px-8 py-3.5 bg-transparent border border-white/40 text-white rounded-full font-bold text-[11px] uppercase tracking-widest">
                View projects
              </Link>
            </div>

            {/* Pagination Dots: Positioned relative to content */}
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-safety" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/30" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* KPI Ribbon: Absolute Bottom with fixed height logic */}
      <div className="absolute bottom-0 w-full z-30 bg-industrial/60 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 py-8 md:py-12 px-6 md:px-12 gap-y-8">
          {kpis.map((kpi, i) => (
            <div key={i} className="flex items-center gap-4 justify-start md:justify-center border-white/10 md:border-r last:border-r-0">
              <div className="text-white opacity-80 scale-90 md:scale-110 shrink-0">{kpi.icon}</div>
              <div>
                <h3 className="text-2xl md:text-4xl font-display leading-none text-white">{kpi.val}</h3>
                <p className="text-white/40 text-[8px] md:text-[9px] font-bold uppercase tracking-widest mt-1">{kpi.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";

const projects = [
  {
    title: "North Sea Oil Platform",
    category: "OFFSHORE",
    catColor: "bg-[#FF6D00]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png",
    stats: [{ label: "DURATION", val: "18 Months" }, { label: "INCIDENTS", val: "Zero" }, { label: "SPECIALISTS", val: "42" }]
  },
  {
    title: "Rapid Response Task Force",
    category: "EMERGENCY",
    catColor: "bg-[#007BFF]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png",
    stats: [{ label: "RESPONSE", val: "72 Hours" }, { label: "SUCCESS", val: "100%" }, { label: "RESPONDERS", val: "30" }]
  },
  {
    title: "Pipeline Upgrade Project",
    category: "INFRASTRUCTURE",
    catColor: "bg-[#28A745]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg",
    stats: [{ label: "TIMELINE", val: "24 Months" }, { label: "UPTIME", val: "98%" }, { label: "ENGINEERS", val: "60" }]
  },
  {
    title: "Refinery Valve Maintenance",
    category: "MAINTENANCE",
    catColor: "bg-[#FFC107]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782296108/blog_assets/c78gevmrmd99vndrgjt3.jpg",
    stats: [{ label: "VALVES", val: "120 Units" }, { label: "EFFICIENCY", val: "+15%" }, { label: "TEAM", val: "12" }]
  },
  {
    title: "Subsea Cable Installation",
    category: "INSTALLATION",
    catColor: "bg-[#17A2B8]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782293192/blog_assets/z1w6wjthjomvf05upwh6.jpg",
    stats: [{ label: "DEPTH", val: "450 Meters" }, { label: "LENGTH", val: "12 KM" }, { label: "VESSELS", val: "2" }]
  },
  {
    title: "Gas Plant Turnaround",
    category: "MAINTENANCE",
    catColor: "bg-[#FFC107]",
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782302637/blog_assets/hh5t0islh03qp134vltw.jpg",
    stats: [{ label: "DOWNTIME", val: "14 Days" }, { label: "TASKS", val: "450+" }, { label: "SAFETY", val: "100%" }]
  }
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#F5F5F5] overflow-x-hidden">
      <Navbar />
      
      <section className="pt-48 pb-24 bg-white border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="h-px w-16 bg-industrial/10" />
              <span className="text-safety text-[11px] font-bold uppercase tracking-[0.4em]">
                Proven in the field
              </span>
              <div className="h-px w-16 bg-industrial/10" />
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-industrial uppercase tracking-tight leading-none mb-8">
              Our Projects
            </h1>
            <p className="text-industrial/50 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              From offshore operations to emergency response, our work delivers results at scale. We maintain the highest standards of engineering excellence across Nigeria.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-black/5 flex flex-col h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className={`w-fit px-4 py-1.5 ${p.catColor} text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-md mb-8`}>
                    {p.category}
                  </div>
                  <div className="relative aspect-[1.6/1] rounded-xl overflow-hidden mb-10">
                    <img src={p.img} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt={p.title} />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display text-industrial uppercase leading-[0.95] mb-12">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between mb-10">
                    {p.stats.map((stat, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex-1 text-center first:text-left last:text-right">
                          <p className="text-xl lg:text-2xl font-sans font-light text-industrial leading-none">
                            {stat.val.split(' ')[0]}
                            <span className="text-[10px] block mt-1 opacity-40">{stat.val.split(' ')[1] || ''}</span>
                          </p>
                          <p className="text-[8px] text-industrial/40 font-bold uppercase mt-2 tracking-wider">
                            {stat.label}
                          </p>
                        </div>
                        {idx < 2 && <div className="w-px h-8 bg-black/10 mx-4" />}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-auto pt-8 border-t border-black/5">
                    <p className="text-[10px] text-industrial/30 text-center font-bold uppercase tracking-widest">
                      ISO-Certified Safety Standards
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

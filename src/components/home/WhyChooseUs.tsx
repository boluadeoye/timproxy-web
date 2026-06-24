import React from "react";
import { Reveal } from "../shared/Reveal";
import { IconCheck } from "../shared/Icons";

const reasons = [
  { 
    title: "Proven Industry Expertise", 
    desc: "Over a decade of operations and maintenance experience across offshore and onshore projects." 
  },
  { 
    title: "Safety-First Culture", 
    desc: "Zero-compromise approach to ensuring the highest safety and regulatory standards." 
  },
  { 
    title: "Rapid Response Capability", 
    desc: "Emergency-ready teams deployed 24/7 to minimize downtime during critical situations." 
  },
  { 
    title: "Certified & Skilled Workforce", 
    desc: "Highly trained and certified engineers and technicians for optimum service quality." 
  },
  { 
    title: "Advanced Technology Integration", 
    desc: "Utilization of data-driven monitoring and predictive maintenance technologies." 
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECTION HEADING: DARK & BOLD AS PER FIGMA */}
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-industrial uppercase tracking-tight mb-4">
              Why Clients Choose Us
            </h2>
            <p className="text-sm md:text-base font-light text-industrial/50 max-w-2xl mx-auto leading-relaxed">
              We deliver measurable impact through safety-first execution, technical excellence, and rapid response capabilities.
            </p>
          </Reveal>
        </div>

        <Reveal>
          {/* GRID: FORCED SIDE-BY-SIDE ON MD+ */}
          <div className="bg-white rounded-[40px] shadow-2xl border border-black/5 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              
              {/* LEFT COLUMN: IMAGE */}
              <div className="relative min-h-[350px] md:min-h-full">
                <img 
                  src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt="Industrial Engineers" 
                />
              </div>

              {/* RIGHT COLUMN: LIST CONTENT */}
              <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                <div className="space-y-10">
                  {reasons.map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      {/* ICON: SOFT ORANGE CIRCLE */}
                      <div className="mt-1 w-6 h-6 rounded-full bg-safety/10 flex items-center justify-center text-safety shrink-0">
                        <IconCheck size={14} />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-industrial uppercase tracking-wider mb-2">
                          {item.title}
                        </h4>
                        <p className="text-industrial/60 text-[13px] md:text-sm font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

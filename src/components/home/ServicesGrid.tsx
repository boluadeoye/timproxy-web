import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../shared/Reveal";
import { 
  IconWrench, 
  IconDrill, 
  IconShieldCheck, 
  IconSearch, 
  IconSiren, 
  IconBarChart3, 
  IconArrowRight 
} from "../shared/Icons";

const services = [
  { 
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png", 
    icon: <IconWrench />, 
    title: "Equipment Maintenance", 
    desc: "Preventive and corrective maintenance services to keep critical equipment operating safely, efficiently, and without unexpected downtime.",
    path: "/services/equipment-maintenance"
  },
  { 
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png", 
    icon: <IconDrill />, 
    title: "Installation Services", 
    desc: "Professional installation and commissioning of industrial systems to ensure optimal performance from day one.",
    path: "/services"
  },
  { 
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg", 
    icon: <IconShieldCheck />, 
    title: "Safety & Compliance", 
    desc: "Ensuring all operations meet industry regulations and safety standards to protect people, assets, and the environment.",
    path: "/services"
  },
  { 
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223839/blog_assets/h6t5jsb3jqyqh3wsvbgk.png", 
    icon: <IconSearch />, 
    title: "Inspection & Integrity", 
    desc: "Thorough inspections and integrity assessments to detect issues early and extend asset lifespan.",
    path: "/services"
  },
  { 
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png", 
    icon: <IconSiren />, 
    title: "Emergency Response", 
    desc: "Rapid-response support to minimize risk, restore operations quickly, and prevent escalation during critical situations.",
    path: "/services"
  },
  { 
    img: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223927/blog_assets/mtnp0zwq2zxdeopljmml.jpg", 
    icon: <IconBarChart3 />, 
    title: "Asset Management", 
    desc: "Strategic management of assets to improve reliability, reduce costs, and maximize operational value.",
    path: "/services"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display text-industrial uppercase tracking-tight mb-4">Our Core Services</h2>
            <p className="text-sm md:text-base text-industrial/50 max-w-3xl mx-auto leading-relaxed">
              Supporting the energy sector with comprehensive maintenance and rapid-response solutions to ensure safety, reliability, and compliance.
            </p>
          </Reveal>
        </div>
        
        {/* FORCED 3x2 MATRIX: md:grid-cols-3 ensures 3 columns on tablet and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={s.img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={s.title} 
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-safety shrink-0">{s.icon}</div>
                    <h3 className="text-xl font-display tracking-wider uppercase text-industrial leading-none">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-industrial/60 text-xs leading-relaxed mb-8 flex-1">
                    {s.desc}
                  </p>
                  <Link 
                    to={s.path} 
                    className="text-[10px] font-bold uppercase tracking-widest text-safety flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <IconArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

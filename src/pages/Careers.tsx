import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";
import { 
  IconArrowRight, 
  IconBriefcase, 
  IconShield, 
  IconCog, 
  IconSliders, 
  IconBarChart, 
  IconHeadset 
} from "../components/shared/Icons";

export default function Careers() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION: THIN TYPE & SINGLE LINE ENFORCEMENT */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-industrial text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782302637/blog_assets/hh5t0islh03qp134vltw.jpg" 
            className="w-full h-full object-cover object-center opacity-70" 
            alt="Careers Hero" 
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        
        <div className="relative z-30 max-w-[1440px] mx-auto px-6 pt-32">
          <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-thin text-white tracking-tighter uppercase lg:whitespace-nowrap leading-none mb-6">
              Build Your Career in Oil & Gas Excellence
            </h1>
            <p className="text-white/90 text-sm md:text-xl max-w-2xl mx-auto font-light mb-12">
              Join Nigeria's leading oilfield service company
            </p>
            <button className="px-12 py-4 border border-white/30 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-industrial transition-all">
              View open positions
            </button>
          </Reveal>
        </div>

        {/* EMPLOYER SEAL: FIGMA SPEC VISIBILITY */}
        <div className="absolute bottom-12 right-6 md:right-12 z-50">
          <img 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782303668/blog_assets/r2qmv1dpw4xyvllftoc6.png" 
            className="w-32 md:w-56 h-auto object-contain drop-shadow-2xl" 
            alt="Top Employer Seal" 
          />
        </div>
      </section>

      {/* 2. WHY JOINING OUR TEAM: THIN TYPE & SINGLE LINE ENFORCEMENT */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-24">
            <Reveal>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-thin text-industrial uppercase tracking-tighter lg:whitespace-nowrap leading-none mb-4">
                Why Joining Our Team Is The Smartest Move for Your Career
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Safety First Culture", icon: <IconShield />, desc: "We champion a safety first culture, prioritizing people and processes, delivering every project with precision." },
              { title: "Career Growth Opportunities", icon: <IconBarChart />, desc: "Build your future with structured mentorship, hands-on field experience, and transparent promotion pathways." },
              { title: "Competitive Benefits", icon: <IconBriefcase />, desc: "We offer competitive benefits, industry leading compensation, performance bonuses, and health coverage." },
              { title: "Cutting Edge Projects", icon: <IconCog />, desc: "Delivering cutting-edge oilfield solutions, partnering with Shell, Chevron, and NNPC to execute complex projects." },
              { title: "Work Life Balance", icon: <IconSliders />, desc: "We promote healthy work life balance through flexible shifts, remote coordination options, and supportive policies." },
              { title: "Diverse & Inclusive Team", icon: <IconHeadset />, desc: "We build a diverse, inclusive team where every voice matters, fostering collaboration, safety, and innovation." }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="p-10 border border-black/5 rounded-[32px] h-full flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 bg-safety/10 rounded-2xl flex items-center justify-center text-safety mb-8">{item.icon}</div>
                  <h3 className="text-xl font-display font-bold text-industrial mb-4 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-industrial/60 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPPORTUNITIES LEDGER: STRETCHED INDICATORS */}
      <section className="py-24 md:py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-thin text-industrial uppercase tracking-tight">
              Discover the Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Petroleum Engineer", desc: "Design and optimize drilling and production strategies, analyze reservoir data, and ensure regulatory compliance." },
              { title: "Drilling Engineer", desc: "Plan and supervise drilling operations, ensure well integrity, optimize performance, and manage budgets." },
              { title: "HSE Officer", desc: "Ensure workplace safety and environmental compliance, conduct risk assessments, and implement HSE policies." },
              { title: "Field Service Technician", desc: "Maintain, inspect, and repair oilfield equipment on-site, ensuring safety compliance and operational efficiency." }
            ].map((job, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white p-10 md:p-12 rounded-[32px] border border-black/5 shadow-sm flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-bold text-industrial uppercase tracking-wide mb-4">{job.title}</h3>
                    {/* STRETCHED INDICATOR UNDER HEADER */}
                    <div className="w-full bg-safety/10 text-safety text-[10px] font-bold uppercase py-2.5 px-4 rounded-lg tracking-[0.2em] text-center md:text-left">
                      Full-time Position
                    </div>
                  </div>
                  <p className="text-industrial/60 text-sm mb-10 font-light leading-relaxed flex-1">
                    <span className="font-bold block mb-3 text-industrial/80 uppercase text-[11px] tracking-widest">Description</span>
                    {job.desc}
                  </p>
                  <button className="text-safety font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 group">
                    View details <IconArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY YOU'LL LOVE WORKING WITH US: ASYMMETRICAL QUADRANT */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-thin text-industrial uppercase tracking-tight">
              Why You'll Love Working With Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 mb-8">
            <Reveal className="h-[450px]">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden group">
                <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782301716/blog_assets/qrsbupu0z1rlv3tvd793.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Health" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-12">
                  <h3 className="text-white text-3xl font-display font-thin uppercase tracking-wider">Health Insurance</h3>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="h-[450px]">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden group">
                <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782301690/blog_assets/wk0jmdt4gxu5va2kwupw.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Retirement" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-12">
                  <h3 className="text-white text-3xl font-display font-thin uppercase tracking-wider">Retirement Plan</h3>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8">
            <Reveal className="h-[450px]">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden group">
                <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782301707/blog_assets/hpa442yy401abbvj3v5o.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Bonuses" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-12">
                  <h3 className="text-white text-3xl font-display font-thin uppercase tracking-wider">Performance Bonuses</h3>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="h-[450px]">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden group">
                <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782301697/blog_assets/szisz8bvggtkee1ec9yu.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Development" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-12">
                  <h3 className="text-white text-3xl font-display font-thin uppercase tracking-wider">Professional Development</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. READY TO BUILD CTA: PATTERN INTEGRATION */}
      <section className="relative py-32 bg-safety overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782302920/blog_assets/bme1imfm8j7k9xtfx19u.jpg" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
            alt="Pattern" 
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <Reveal>
            <h2 className="text-5xl md:text-8xl font-display font-thin uppercase tracking-tight mb-8 leading-none">
              Ready to Build <br /> Your Future?
            </h2>
            <button className="px-12 py-5 border-2 border-white/40 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-safety transition-all shadow-2xl">
              View open positions
            </button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

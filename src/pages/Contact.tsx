import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Reveal } from "../components/shared/Reveal";
import { IconPhone, IconMail, IconMapPin, IconClock, IconSend } from "../components/shared/Icons";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-[#FDFBF7] overflow-x-hidden">
      <Navbar />

      <section className="pt-48 pb-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT COLUMN: CONTACT INFORMATION */}
          <div className="space-y-16">
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-display text-industrial uppercase tracking-tight mb-12">
                Contact Information
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { label: "Phone", val: "+234 (0) 800 TIMPROXY", icon: <IconPhone /> },
                  { label: "Email", val: "info@timproxy.com", icon: <IconMail /> },
                  { label: "Location", val: "Plot 15, Industrial Way, Victoria Island, Lagos, Nigeria", icon: <IconMapPin /> },
                  { label: "Business Hours", val: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM", icon: <IconClock /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl border border-black/5 bg-white flex items-center justify-center text-safety shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-industrial/40 mb-2">{item.label}</h4>
                      <p className="text-sm font-medium text-industrial leading-relaxed whitespace-pre-line">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* MAP PLACEHOLDER */}
            <Reveal delay={0.2}>
              <div className="relative w-full aspect-square md:aspect-video rounded-[32px] overflow-hidden border border-black/5 shadow-lg bg-slate-200">
                <img 
                  src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782302637/blog_assets/hh5t0islh03qp134vltw.jpg" 
                  className="w-full h-full object-cover opacity-50 grayscale" 
                  alt="Map Location" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="px-8 py-3 bg-white text-industrial rounded-full font-bold text-[10px] uppercase tracking-widest shadow-xl hover:bg-safety hover:text-white transition-all">
                    Open in Maps
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: SEND US A MESSAGE */}
          <div className="relative">
            <Reveal delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-display text-industrial uppercase tracking-tight mb-12">
                Send Us A Message
              </h2>
              
              <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-black/5">
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-industrial/30 ml-1">Name</label>
                      <input type="text" placeholder="Your name" className="w-full bg-[#F9F9F9] rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-safety/20 transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-industrial/30 ml-1">Email</label>
                      <input type="email" placeholder="Enter email" className="w-full bg-[#F9F9F9] rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-safety/20 transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-industrial/30 ml-1">Phone Number</label>
                      <input type="tel" placeholder="Enter phone" className="w-full bg-[#F9F9F9] rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-safety/20 transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-industrial/30 ml-1">Select Interested *</label>
                      <select className="w-full bg-[#F9F9F9] rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-safety/20 transition-all appearance-none">
                        <option>Select a service</option>
                        <option>Equipment Maintenance</option>
                        <option>Installation Services</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-industrial/30 ml-1">Message</label>
                    <textarea rows={5} placeholder="Enter message" className="w-full bg-[#F9F9F9] rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-safety/20 transition-all resize-none"></textarea>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <input type="checkbox" className="w-5 h-5 rounded border-black/10 text-safety focus:ring-safety" />
                    <span className="text-[11px] text-industrial/40">I accept the Timproxy privacy and terms</span>
                  </div>

                  <button className="w-full py-5 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-industrial transition-all shadow-xl shadow-safety/20 group">
                    Send Message
                    <IconSend size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

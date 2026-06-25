import React from "react";
import { Link } from "react-router-dom";
import { IconLinkedin, IconInstagram, IconFacebook } from "../shared/Icons";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-industrial">
      {/* 1. RESTORED BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png"
          className="w-full h-full object-cover brightness-[0.65] contrast-[1.15]"
          alt="Industrial Background"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-10" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 pt-16 lg:pt-24 pb-10">
        
        {/* LOGO SECTION: OPTICAL NUDGE LEFT */}
        <div className="mb-16 lg:mb-20 -ml-4">
          <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
            <img
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223417/blog_assets/bymb4ayvgepu31mv18al.png"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-2xl"
              alt="Timproxy Logo"
            />
          </Link>
        </div>

        {/* 4-COLUMN GRID: MORE LINKS FIRST FROM RIGHT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16 lg:mb-24">
          
          {/* COL 1: SERVICES */}
          <div>
            <h4 className="text-white text-xl lg:text-2xl font-sans font-bold tracking-tight normal-case mb-6 lg:mb-8">Services</h4>
            <ul className="space-y-3 lg:space-y-4 text-white/80 text-xs lg:text-sm font-light">
              <li><Link to="/services/equipment-maintenance" className="hover:text-safety transition-colors">Equipment Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Installation Services</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Safety & Compliance</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Inspection & Integrity</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Emergency Response</Link></li>
            </ul>
          </div>

          {/* COL 2: COMPANY */}
          <div>
            <h4 className="text-white text-xl lg:text-2xl font-sans font-bold tracking-tight normal-case mb-6 lg:mb-8">Company</h4>
            <ul className="space-y-3 lg:space-y-4 text-white/80 text-xs lg:text-sm font-light">
              <li><Link to="/about" className="hover:text-safety transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-safety transition-colors">Our Projects</Link></li>
              <li><Link to="/certifications" className="hover:text-safety transition-colors">Certifications</Link></li>
              <li><Link to="/careers" className="hover:text-safety transition-colors">Careers</Link></li>
              <li><Link to="/news" className="hover:text-safety transition-colors">News & Updates</Link></li>
            </ul>
          </div>

          {/* COL 3: CONTACT */}
          <div>
            <h4 className="text-white text-xl lg:text-2xl font-sans font-bold tracking-tight normal-case mb-6 lg:mb-8">Contact</h4>
            <ul className="space-y-3 lg:space-y-4 text-white/80 text-xs lg:text-sm font-light">
              <li><Link to="/contact" className="hover:text-safety transition-colors">Request Quote</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">24/7 Emergency Line</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Email Address</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Headquarters</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Regional Offices</Link></li>
            </ul>
          </div>

          {/* COL 4: MORE LINKS (FIRST FROM RIGHT) */}
          <div>
            <h4 className="text-white text-xl lg:text-2xl font-sans font-bold tracking-tight normal-case mb-6 lg:mb-8">More links</h4>
            <ul className="space-y-3 lg:space-y-4 text-white/80 text-xs lg:text-sm font-light">
              <li><Link to="/sustainability" className="hover:text-safety transition-colors">Sustainability</Link></li>
              <li><Link to="/clients" className="hover:text-safety transition-colors">Clients</Link></li>
              <li><Link to="/testo" className="hover:text-safety transition-colors">Testo</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] lg:text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">
            <span>© 2026 Timproxy</span>
            <span className="hidden md:block text-white/10">|</span>
            <Link to="/privacy" className="hover:text-safety transition-colors">Privacy Policy</Link>
            <span className="hidden md:block text-white/10">|</span>
            <Link to="/terms" className="hover:text-safety transition-colors">Terms and Conditions</Link>
          </div>
          
          <div className="flex items-center gap-6 text-safety">
            <Link to="/" className="hover:text-white transition-all hover:scale-110 duration-300"><IconLinkedin size={20} /></Link>
            <Link to="/" className="hover:text-white transition-all hover:scale-110 duration-300"><IconInstagram size={20} /></Link>
            <Link to="/" className="hover:text-white transition-all hover:scale-110 duration-300"><IconFacebook size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

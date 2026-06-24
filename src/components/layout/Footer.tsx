import React from "react";
import { Link } from "react-router-dom";
import { IconLinkedin, IconInstagram, IconFacebook } from "../shared/Icons";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-industrial">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" 
          className="w-full h-full object-cover brightness-[0.65] contrast-[1.15]" 
          alt="Industrial Workers" 
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-10">
        <div className="mb-20">
          <Link to="/">
            <img 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223417/blog_assets/bymb4ayvgepu31mv18al.png" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl" 
              alt="Timproxy Logo" 
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-24">
          <div>
            <h4 className="text-white text-2xl font-display font-bold tracking-wider uppercase mb-8 drop-shadow-md">Services</h4>
            <ul className="space-y-4 text-white text-sm font-light drop-shadow-sm">
              <li><Link to="/services/equipment-maintenance" className="hover:text-safety transition-colors">Equipment Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Installation Services</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Safety & Compliance</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Inspection & Integrity</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Emergency Response</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-2xl font-display font-bold tracking-wider uppercase mb-8 drop-shadow-md">Company</h4>
            <ul className="space-y-4 text-white text-sm font-light drop-shadow-sm">
              <li><Link to="/about" className="hover:text-safety transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-safety transition-colors">Our Projects</Link></li>
              <li><Link to="/certifications" className="hover:text-safety transition-colors">Certifications</Link></li>
              <li><Link to="/careers" className="hover:text-safety transition-colors">Careers</Link></li>
              <li><Link to="/news" className="hover:text-safety transition-colors">News & Updates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-2xl font-display font-bold tracking-wider uppercase mb-8 drop-shadow-md">Contact</h4>
            <ul className="space-y-4 text-white text-sm font-light drop-shadow-sm">
              <li><Link to="/contact" className="hover:text-safety transition-colors">Request Quote</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">24/7 Emergency Line</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Email Address</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Headquarters</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Regional Offices</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[11px] font-bold text-white uppercase tracking-widest drop-shadow-sm">
            <span>© 2026 Timproxy</span>
            <span className="hidden md:block text-white/30">|</span>
            <Link to="/privacy" className="hover:text-safety transition-colors">Privacy Policy</Link>
            <span className="hidden md:block text-white/30">|</span>
            <Link to="/terms" className="hover:text-safety transition-colors">Terms and Conditions</Link>
          </div>
          
          <div className="flex items-center gap-6 text-safety">
            <Link to="/" className="hover:text-white transition-all hover:scale-110 drop-shadow-md"><IconLinkedin /></Link>
            <Link to="/" className="hover:text-white transition-all hover:scale-110 drop-shadow-md"><IconInstagram /></Link>
            <Link to="/" className="hover:text-white transition-all hover:scale-110 drop-shadow-md"><IconFacebook /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

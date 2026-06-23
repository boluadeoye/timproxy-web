import React from "react";
import { Link } from "react-router-dom";
import { IconLinkedin, IconInstagram, IconFacebook } from "../shared/Icons";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223509/blog_assets/erqtm3e7ghi6dlb1zcgy.png" className="w-full h-full object-cover" alt="Footer BG" />
        <div className="absolute inset-0 bg-black/10 z-10" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-10">
        <div className="mb-16">
          <Link to="/">
            <img src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1782223417/blog_assets/bymb4ayvgepu31mv18al.png" className="h-10 w-auto object-contain" alt="Timproxy" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-24">
          <div>
            <h4 className="text-white text-2xl font-display tracking-wider uppercase mb-8">Services</h4>
            <ul className="space-y-4 text-white/80 text-sm font-light">
              <li><Link to="/services/equipment-maintenance" className="hover:text-safety transition-colors">Equipment Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Installation Services</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Safety & Compliance</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Inspection & Integrity</Link></li>
              <li><Link to="/services" className="hover:text-safety transition-colors">Emergency Response</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-2xl font-display tracking-wider uppercase mb-8">Company</h4>
            <ul className="space-y-4 text-white/80 text-sm font-light">
              <li><Link to="/about" className="hover:text-safety transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-safety transition-colors">Our Projects</Link></li>
              <li><Link to="/certifications" className="hover:text-safety transition-colors">Certifications</Link></li>
              <li><Link to="/careers" className="hover:text-safety transition-colors">Careers</Link></li>
              <li><Link to="/news" className="hover:text-safety transition-colors">News & Updates</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-2xl font-display tracking-wider uppercase mb-8">Contact</h4>
            <ul className="space-y-4 text-white/80 text-sm font-light">
              <li><Link to="/contact" className="hover:text-safety transition-colors">Request Quote</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">24/7 Emergency Line</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Email Address</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Headquarters</Link></li>
              <li><Link to="/contact" className="hover:text-safety transition-colors">Regional Offices</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 text-[11px] font-medium text-white/60 uppercase tracking-widest">
            <span>© 2026 Timproxy</span><span>|</span><Link to="/privacy">Privacy Policy</Link><span>|</span><Link to="/terms">Terms and Conditions</Link>
          </div>
          <div className="flex items-center gap-6 text-white/60">
            <IconLinkedin /><IconInstagram /><IconFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
}

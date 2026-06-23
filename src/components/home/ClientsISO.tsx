import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../shared/Reveal";

const clients = [
  { name: "NNPC", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/NNPC_Logo.svg/1200px-NNPC_Logo.svg.png" },
  { name: "Shell", url: "https://upload.wikimedia.org/wikipedia/en/e/ec/Shell_logo.svg" },
  { name: "ExxonMobil", url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Exxon_Mobil_Logo.svg" },
  { name: "Seplat", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Seplat_Energy_Logo.svg/2560px-Seplat_Energy_Logo.svg.png" }
];

export default function ClientsISO() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-display text-industrial tracking-widest uppercase">Our Esteemed Clients</h2></div>
        <div className="relative w-full overflow-hidden mb-20 py-4">
          <motion.div className="flex gap-12 md:gap-24 w-max items-center" animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
            {[...clients, ...clients].map((client, idx) => (
              <img key={idx} src={client.url} alt={client.name} className="h-8 md:h-12 w-auto object-contain grayscale opacity-60" />
            ))}
          </motion.div>
        </div>
        <Reveal>
          <div className="border border-[#C5A28E]/40 rounded-[40px] p-8 md:p-12 mb-8">
            <h3 className="text-xl font-sans font-semibold text-industrial mb-10">ISO certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { code: "ISO 50001:2015", label: "Energy Management" },
                { code: "ISO 45001:2025", label: "Occupational Health & Safety" },
                { code: "ISO 29001:2025", label: "Quality Management" }
              ].map((cert, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 bg-slate rounded-full flex items-center justify-center text-safety font-bold">ISO</div>
                  <span className="text-sm font-medium text-industrial/80">{cert.code}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

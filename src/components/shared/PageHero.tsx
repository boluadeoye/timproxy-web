import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  ctaText?: string;
}

export default function PageHero({ title, subtitle, bgImage, ctaText }: PageHeroProps) {
  return (
    <section className="relative h-[60svh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-industrial text-center">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} className="w-full h-full object-cover opacity-60" alt={title} />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>
      <div className="relative z-20 max-w-4xl mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-8xl font-display text-white tracking-tight uppercase mb-6">{title}</h1>
          <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-8">{subtitle}</p>
          {ctaText && (
            <button className="px-8 py-4 bg-safety text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-industrial transition-all">
              {ctaText}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

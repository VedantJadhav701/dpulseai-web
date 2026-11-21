"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  headline: string;
  image?: string;
  alt?: string;
  overlay?: string;
  description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  label,
  headline,
  description,
}) => {
  return (
    <section className="relative w-full p-2.5 sm:p-4 md:p-6 bg-white">
      {/* Outer Rounded Hero Card matching Humyn Labs style */}
      <div className="relative w-full min-h-[48vh] sm:min-h-[52vh] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#f79c78] overflow-hidden flex flex-col justify-between px-8 sm:px-16 pt-24 pb-12 select-none shadow-sm">
        
        {/* Top-Right Contact Pill */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20">
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full border border-white/60 bg-white/10 hover:bg-white/25 backdrop-blur-md text-xs sm:text-sm font-mono tracking-wider text-white transition-all shadow-2xs"
          >
            Contact
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl my-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#161514]/70 mb-4 block">
              {label}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal text-[#161514] tracking-tight leading-[1.12]">
              {headline}
            </h1>
            {description && (
              <p className="text-base sm:text-lg text-[#2a2623] mt-4 font-sans max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;

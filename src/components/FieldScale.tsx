"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const caseCards = [
  {
    tag: "DPULSE · Video",
    title: "200,000+ Hours of Egocentric First-Person Video Corpus for...",
    desc: "200,000+ Hours of Egocentric First-Person Video Corpus for Humanoids & Autonomous Units",
    gradient: "from-[#ef6638] via-[#e25528] to-[#c74018]",
    patternType: "video",
  },
  {
    tag: "DPULSE · Image",
    title: "Dataset of 120,000 Field Samples Across 5 Climates for Autonomous...",
    desc: "Dataset of 120,000 Verified Field Samples Across 5 Agricultural Climates",
    gradient: "from-[#f47447] via-[#e65c2b] to-[#ce451a]",
    patternType: "image",
  },
  {
    tag: "DPULSE · Audio",
    title: "1000+ Hours of Production-Scale On-Device SLM Inference for...",
    desc: "1000+ Hours of Production-Scale On-Device SLM Inference for Sovereign Enterprise",
    gradient: "from-[#ef6638] via-[#d94f24] to-[#bc3a13]",
    patternType: "audio",
  },
  {
    tag: "DPULSE · Audio",
    title: "50,000 hours of Speech Data for the 10 Languages Driving the...",
    desc: "Data for Automatic Speech Recognition Models in Hindi, Marathi, Bengali, Tamil, Telugu...",
    gradient: "from-[#e45a2c] via-[#ce481d] to-[#aa320f]",
    patternType: "speech",
  },
];

export function FieldScale() {
  return (
    <section id="scale" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Matching Screenshot 3 */}
        <div className="text-center mb-16 select-none">
          <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-black/50 block mb-3">
            ALREADY IN THE FIELD
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#141312] tracking-tight">
            Shipped, at field scale.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-14">
          {caseCards.map((card, idx) => (
            <div
              key={idx}
              className="group rounded-[20px] sm:rounded-[24px] bg-[#eae8e3] overflow-hidden flex flex-col border border-[#d8d6ce] hover:border-[#ed6538]/50 transition-all duration-300 shadow-2xs"
            >
              {/* Duotone Visual Banner Header */}
              <div className={`h-48 sm:h-52 w-full relative bg-gradient-to-br ${card.gradient} p-3.5 flex flex-col justify-between overflow-hidden`}>
                
                {/* Photographic noise & duotone texture overlay */}
                <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(#141312_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                
                {/* SVG Decorative Technical Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#fff" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#fff" strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="85%" cy="30%" r="30" stroke="#fff" strokeWidth="0.8" fill="none" />
                  <circle cx="85%" cy="30%" r="4" fill="#fff" />
                  <circle cx="15%" cy="70%" r="20" stroke="#fff" strokeWidth="0.8" fill="none" />
                </svg>

                {/* Category Pill */}
                <div className="relative z-10 select-none">
                  <span className="inline-block px-2.5 py-1 rounded-[6px] text-[10px] font-mono font-medium tracking-wide bg-black/40 backdrop-blur-md text-white border border-white/20">
                    {card.tag}
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-end text-[10px] font-mono text-white/80">
                  <span>SCALE CORPUS</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 select-none">
                <div>
                  <h3 className="text-[15px] sm:text-base font-medium text-[#141312] leading-snug mb-3 group-hover:text-[#ed6538] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-sans leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Case Studies CTA Button */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#141312] hover:text-[#ed6538] transition-colors group"
          >
            <span className="font-sans tracking-tight">View Case Studies</span>
            <span className="w-5 h-5 rounded-full bg-[#ed6538] flex items-center justify-center text-white shadow-2xs group-hover:translate-x-0.5 transition-transform">
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

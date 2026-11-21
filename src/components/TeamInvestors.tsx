"use client";

import React from "react";
import { investorsData } from "@/data/humynData";

export function TeamInvestors() {
  const allInvestors = [...investorsData, ...investorsData];

  return (
    <section id="investors" className="relative py-20 bg-[#fbfaf8] border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#ed6538] block mb-2 font-medium">
          DEPLOYMENT NETWORK &amp; ECOSYSTEM PARTNERS
        </span>
        <h2 className="text-2xl sm:text-3xl font-light text-[#141312] tracking-tight">
          Trusted across sovereign government programs, agricultural co-ops &amp; robotics OEMs
        </h2>
      </div>

      {/* Infinite Scrolling Pill Strip */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {allInvestors.map((inv, idx) => (
            <div
              key={`${inv.name}-${idx}`}
              className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#e4e2dc] shadow-2xs hover:border-[#ed6538]/50 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-[#ed6538]" />
              <span className="text-sm font-sans font-medium text-gray-800 tracking-wide whitespace-nowrap">
                {inv.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Charter Quote Banner */}
      <div className="max-w-4xl mx-auto px-6 mt-14 text-center">
        <blockquote className="p-8 rounded-2xl bg-white border border-[#e4e2dc] shadow-2xs">
          <p className="text-lg sm:text-xl font-light text-gray-800 italic leading-relaxed">
            &ldquo;We build the intelligence, not the machines. Custom AI models for organizations, and a hardware-agnostic brain for physical AI.&rdquo;
          </p>
          <div className="mt-3 font-mono text-xs text-gray-500 uppercase tracking-widest">
            — DPULSE AI FOUNDATIONAL CHARTER
          </div>
        </blockquote>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { engineSvgRaw } from "@/data/engineSvg";

export function TheEngine() {
  return (
    <section id="engine" className="relative w-full p-2.5 sm:p-4 md:p-6 bg-white border-b border-black/[0.06]">
      {/* Outer Card with exact Humyn Labs curve & tone matching image copy 4.png */}
      <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#eae8e3] p-6 sm:p-10 md:p-12 overflow-hidden border border-[#d8d6ce] shadow-sm">
        
        {/* Section Header Row matching screenshot */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 select-none">
          <div>
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-black/60 block mb-2">
              THE ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#141312] tracking-tight leading-[1.12]">
              One data platform.<br />
              Every signal primitive.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 max-w-sm font-sans leading-relaxed lg:text-right pt-2">
            One platform we own end to end runs validation, processing and labelling, across sound, sight, motion and touch. Every hour of human activity leaves it as signal primitives robots can learn from.
          </p>
        </div>

        {/* Exact Schematic Diagram from Humyn Labs */}
        <div className="relative w-full overflow-x-auto pb-4 pt-2 scrollbar-thin">
          <div
            className="w-full min-w-[1080px] schematic-engine"
            dangerouslySetInnerHTML={{ __html: engineSvgRaw }}
          />
        </div>

        {/* Legend / Status bar */}
        <div className="mt-8 pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-600 select-none">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ed6538]" />
              01 Validation Array
            </span>
            <span>·</span>
            <span>02 Processing Vessel</span>
            <span>·</span>
            <span className="text-[#ed6538] font-medium">03 Multimodal Labelling</span>
            <span>·</span>
            <span>04 HITL QC Gate</span>
          </div>
          <div className="text-[#ed6538] font-medium">
            DPULSE AI COGNITIVE KERNEL · 100% SOVEREIGN DATA STACK
          </div>
        </div>

      </div>
    </section>
  );
}

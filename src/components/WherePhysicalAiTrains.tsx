"use client";

import React, { useState } from "react";
import Image from "next/image";
import { trainingEnvironments } from "@/data/humynData";
import { Play, X, ShieldCheck } from "lucide-react";

export function WherePhysicalAiTrains() {
  const [selectedEnv, setSelectedEnv] = useState<typeof trainingEnvironments[0] | null>(null);

  const builders = [
    { title: "Humanoid & Bipedal Robotics OEMs", note: "Whole-body 6-DoF kinematics & balancing" },
    { title: "Autonomous Agriculture & Tractor Implements", note: "Canopy perception & non-destructive harvesting" },
    { title: "Industrial Dual-Arm Manipulators", note: "Sub-millimeter wire harness & micro-screw assembly" },
    { title: "High-Velocity Logistics & AGV Fleets", note: "850+ picks per hour mixed-parcel singulation" },
    { title: "Consumer Electronics & SMT Assemblers", note: "Micro-manipulation of flex cables & 0402 SMD chips" },
    { title: "Air-Gapped Sovereign Enterprises", note: "Private domain small language models (3B–8B)" },
  ];

  return (
    <section id="environments" className="relative py-24 bg-[#ffffff] border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Label */}
        <div className="mb-6">
          <span className="text-xs font-mono font-medium tracking-wider text-black/70 uppercase">
            WHERE PHYSICAL AI TRAINS
          </span>
        </div>

        {/* Section Headline matching screenshot */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#141312] tracking-tight leading-[1.15]">
            Every builder of Physical AI.<br />
            Every environment it must master.
          </h2>
        </div>

        {/* 2-Column Split: Left = Who trains on it | Right = Where robots clock in */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Who trains on it */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base sm:text-lg font-sans font-medium text-[#ed6538] flex items-center gap-2">
              Who trains on it
            </h3>

            <div className="space-y-3">
              {builders.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#faf9f6] border border-[#e8e6e1] hover:border-[#ed6538]/30 transition-all duration-200"
                >
                  <div className="text-sm font-medium text-[#111]">
                    {b.title}
                  </div>
                  <div className="text-xs text-gray-500 font-sans mt-0.5">
                    {b.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Metric Strip */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-gray-200">
                <span className="block text-2xl font-light font-mono text-[#ed6538]">70%+</span>
                <span className="text-xs text-gray-600 font-sans">Farm Labor Reduction</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-gray-200">
                <span className="block text-2xl font-light font-mono text-[#111]">20+</span>
                <span className="text-xs text-gray-600 font-sans">Platforms Deployed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Where robots clock in (2-column image/video thumbnail grid) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base sm:text-lg font-sans font-medium text-[#ed6538]">
                Where robots clock in
              </h3>
              <span className="text-xs font-mono text-gray-400">
                Click any environment to inspect
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trainingEnvironments.map((env) => (
                <div
                  key={env.id}
                  onClick={() => setSelectedEnv(env)}
                  className="group relative cursor-pointer rounded-xl overflow-hidden border border-[#e5e3dc] bg-gray-100 shadow-sm hover:shadow-md hover:border-[#ed6538]/50 transition-all duration-300"
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                    <img
                      src={env.posterUrl}
                      alt={env.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Play Badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg">
                        <Play className="w-4 h-4 fill-black ml-0.5" />
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white/90 uppercase tracking-wider">
                      {env.category.split(" ")[0]}
                    </div>
                  </div>

                  {/* Card Title */}
                  <div className="p-3.5 bg-white flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#ed6538] transition-colors">
                        {env.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 font-sans">
                        {env.tagline}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#ed6538] font-medium ml-2 flex-shrink-0">
                      {env.metrics[0].value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedEnv && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
          <div className="relative w-full max-w-4xl bg-[#141312] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#191817]">
              <div>
                <span className="text-xs font-mono text-[#ed6538] uppercase tracking-wider">
                  TRAINING ENVIRONMENT // {selectedEnv.category}
                </span>
                <h3 className="text-xl font-medium text-white mt-0.5">
                  {selectedEnv.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEnv(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <video
                src={selectedEnv.videoUrl}
                poster={selectedEnv.posterUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Telemetry Bar */}
            <div className="p-6 bg-[#171615] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="grid grid-cols-3 gap-6">
                {selectedEnv.metrics.map((m, i) => (
                  <div key={i}>
                    <span className="block text-[10px] font-mono text-white/40 uppercase tracking-wider">
                      {m.label}
                    </span>
                    <span className="block text-sm sm:text-base font-mono font-medium text-[#ed6538] mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Deterministic Safety Boundary Verified</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

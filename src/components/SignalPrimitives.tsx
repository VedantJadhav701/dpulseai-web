"use client";

import React from "react";

interface PrimitiveCard {
  tagLeft: string;
  code: string;
  tagRight: string;
  title: string;
  svg: React.ReactNode;
}

const primitives: PrimitiveCard[] = [
  {
    tagLeft: "DP-SND",
    code: "10",
    tagRight: "DP-SND",
    title: "Code-Switching",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="px-1.5 py-0.5 rounded border border-gray-300 text-[10px] font-mono text-gray-700 bg-white">मुद्दे</span>
          <span className="px-1.5 py-0.5 rounded border border-[#ed6538] text-[10px] font-mono text-[#ed6538] bg-white">call</span>
          <span className="px-1.5 py-0.5 rounded border border-gray-300 text-[10px] font-mono text-gray-700 bg-white">कर</span>
          <span className="px-1.5 py-0.5 rounded border border-gray-300 text-[10px] font-mono text-gray-700 bg-white">देना</span>
        </div>
        <div className="flex items-center gap-3 text-[9px] font-mono text-gray-400">
          <span>HI</span>
          <span className="text-[#ed6538]">EN</span>
          <span>HI</span>
          <span>HI</span>
        </div>
        <span className="text-[8px] font-mono text-gray-400 mt-2">switch points : 2</span>
      </div>
    ),
  },
  {
    tagLeft: "DP-SND",
    code: "11",
    tagRight: "DP-SND",
    title: "Speaker Topology",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-36 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-gray-400">A</span>
            <div className="flex-1 h-3 bg-gray-100 rounded-sm relative">
              <div className="absolute left-3 w-8 h-3 bg-[#111] rounded-sm" />
              <div className="absolute left-16 w-10 h-3 bg-[#111] rounded-sm" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-gray-400">B</span>
            <div className="flex-1 h-3 bg-gray-100 rounded-sm relative">
              <div className="absolute left-10 w-9 h-3 bg-[#ed6538] rounded-sm" />
              <div className="absolute left-22 w-7 h-3 bg-[#ed6538] rounded-sm" />
            </div>
          </div>
        </div>
        <span className="text-[8px] font-mono text-gray-400 mt-2">overlap</span>
      </div>
    ),
  },
  {
    tagLeft: "DP-SND",
    code: "12",
    tagRight: "DP-SND",
    title: "Paralinguistic & Affect",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <svg viewBox="0 0 120 40" className="w-32 h-12 stroke-[#ed6538] fill-none stroke-[1.5]">
          <path d="M 5 30 Q 30 5 60 25 T 115 15" />
          <line x1="5" y1="35" x2="115" y2="35" stroke="#d1d5db" strokeDasharray="2 2" strokeWidth="1" />
        </svg>
        <div className="flex justify-between w-28 text-[8px] font-mono text-gray-400 -mt-1">
          <span>rise</span>
          <span>emphasis</span>
        </div>
        <span className="text-[8px] font-mono text-gray-400 mt-1">f0 · energy · affect = calm</span>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "01",
    tagRight: "DP-SIG",
    title: "Dexterous Manipulation",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#ed6538] fill-none stroke-[1.2]">
            {/* Palm base */}
            <polygon points="35,65 65,65 72,40 28,40" stroke="#9ca3af" strokeWidth="1" />
            {/* Finger rays with keypoint dots */}
            <line x1="32" y1="40" x2="15" y2="12" />
            <line x1="42" y1="40" x2="35" y2="8" />
            <line x1="50" y1="40" x2="50" y2="6" />
            <line x1="58" y1="40" x2="65" y2="8" />
            <line x1="68" y1="40" x2="85" y2="14" />
            {/* Joint dots */}
            <circle cx="15" cy="12" r="2" fill="#ed6538" />
            <circle cx="35" cy="8" r="2" fill="#ed6538" />
            <circle cx="50" cy="6" r="2" fill="#ed6538" />
            <circle cx="65" cy="8" r="2" fill="#ed6538" />
            <circle cx="85" cy="14" r="2" fill="#ed6538" />
            <circle cx="28" cy="40" r="1.5" fill="#ed6538" />
            <circle cx="72" cy="40" r="1.5" fill="#ed6538" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>t0 → tn</span>
          <span>K = 21</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "02",
    tagRight: "DP-SIG",
    title: "Egocentric Gaze",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#111] fill-none stroke-[1.2]">
            {/* Eye sphere with coordinate axes */}
            <circle cx="30" cy="45" r="12" stroke="#4b5563" />
            <line x1="12" y1="45" x2="48" y2="45" stroke="#9ca3af" strokeWidth="0.8" />
            <line x1="30" y1="27" x2="30" y2="63" stroke="#9ca3af" strokeWidth="0.8" />
            <circle cx="30" cy="45" r="3" fill="#111" />
            {/* FOV cone in orange */}
            <line x1="30" y1="45" x2="85" y2="20" stroke="#ed6538" strokeWidth="1.2" />
            <line x1="30" y1="45" x2="85" y2="60" stroke="#ed6538" strokeWidth="1.2" />
            <path d="M 85 20 A 45 45 0 0 1 85 60" stroke="#ed6538" strokeDasharray="2 2" strokeWidth="1" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>FOV 160°</span>
          <span>yaw-pitch</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "03",
    tagRight: "DP-SIG",
    title: "Stereo Depth",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#111] fill-none stroke-[1.2]">
            {/* Stereo pair lenses */}
            <circle cx="20" cy="30" r="5" stroke="#4b5563" />
            <circle cx="20" cy="50" r="5" stroke="#4b5563" />
            {/* Triangulation rays */}
            <line x1="25" y1="30" x2="70" y2="40" stroke="#ed6538" strokeWidth="1.2" />
            <line x1="25" y1="50" x2="70" y2="40" stroke="#ed6538" strokeWidth="1.2" />
            <circle cx="70" cy="40" r="2.5" fill="#ed6538" />
            {/* Depth planes */}
            <line x1="60" y1="20" x2="60" y2="60" stroke="#d1d5db" strokeDasharray="2 2" strokeWidth="1" />
            <line x1="70" y1="20" x2="70" y2="60" stroke="#d1d5db" strokeDasharray="2 2" strokeWidth="1" />
            <line x1="80" y1="20" x2="80" y2="60" stroke="#d1d5db" strokeDasharray="2 2" strokeWidth="1" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>Z1 · Z2 · Z3</span>
          <span>d = 1.82 m</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "04",
    tagRight: "DP-SIG",
    title: "Object Grounding",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#111] fill-none stroke-[1.2]">
            {/* 3D Wireframe bounding box */}
            <polygon points="25,30 65,22 80,38 40,46" stroke="#ed6538" strokeWidth="1.2" />
            <polygon points="25,55 65,47 80,63 40,71" stroke="#ed6538" strokeWidth="1.2" />
            <line x1="25" y1="30" x2="25" y2="55" stroke="#ed6538" strokeWidth="1.2" />
            <line x1="65" y1="22" x2="65" y2="47" stroke="#ed6538" strokeWidth="1.2" />
            <line x1="80" y1="38" x2="80" y2="63" stroke="#ed6538" strokeWidth="1.2" />
            <line x1="40" y1="46" x2="40" y2="71" stroke="#ed6538" strokeWidth="1.2" />
            {/* Confidence tag */}
            <rect x="55" y="10" width="38" height="10" rx="2" fill="#ed6538" stroke="none" />
            <text x="58" y="18" fill="white" fontSize="6" fontFamily="monospace">cup: 0.94</text>
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>6-DoF Priors</span>
          <span>IoU &gt; 0.94</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "05",
    tagRight: "DP-SIG",
    title: "Action Segmentation",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#111] fill-none stroke-[1.2]">
            <line x1="10" y1="40" x2="90" y2="40" stroke="#d1d5db" strokeWidth="2" />
            <circle cx="35" cy="40" r="4" fill="#111" />
            <circle cx="68" cy="40" r="4" fill="#ed6538" />
            <line x1="35" y1="15" x2="35" y2="65" stroke="#9ca3af" strokeDasharray="2 2" strokeWidth="1" />
            <line x1="68" y1="15" x2="68" y2="65" stroke="#ed6538" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>Intent Split</span>
          <span>Δt &lt; 12ms</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-MOT",
    code: "08",
    tagRight: "DP-MOT",
    title: "Ego-Motion & Kinematics",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#ed6538] fill-none stroke-[1.5]">
            <path d="M 10 50 Q 30 15 50 45 T 90 25" />
            <circle cx="50" cy="45" r="3" fill="#111" stroke="none" />
            <line x1="50" y1="45" x2="70" y2="35" stroke="#111" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>6-Axis IMU</span>
          <span>1000 Hz Clock</span>
        </div>
      </div>
    ),
  },
];

export function SignalPrimitives() {
  const marqueeItems = [...primitives, ...primitives];

  return (
    <section id="primitives" className="relative py-20 bg-[#fbfaf8] border-b border-black/[0.06] overflow-hidden">
      {/* Section Header matching screenshot */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-xs font-mono font-medium tracking-wider text-black/70 uppercase">
          SIGNAL PRIMITIVES
        </h2>
      </div>

      {/* Infinite Horizontal Carousel matching screenshot */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-2">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.code}-${idx}`}
              className="w-[220px] sm:w-[245px] h-[270px] flex-shrink-0 rounded-2xl bg-white border border-[#e8e6e1] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#ed6538]/40 p-5 flex flex-col justify-between transition-all duration-300 group select-none"
            >
              {/* Top Tag & Code Line */}
              <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 pb-2 border-b border-gray-100">
                <span className="tracking-wider">{item.tagLeft}</span>
                <span className="font-semibold text-gray-800 text-xs">{item.code}</span>
                <span className="tracking-wider">{item.tagRight}</span>
              </div>

              {/* Center Schematic Graphic */}
              <div className="my-auto flex items-center justify-center">
                {item.svg}
              </div>

              {/* Bottom Title */}
              <div className="pt-3 border-t border-gray-100">
                <h3 className="text-sm font-sans font-medium text-gray-900 group-hover:text-[#ed6538] transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

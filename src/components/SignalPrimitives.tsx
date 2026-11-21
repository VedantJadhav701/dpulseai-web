"use client";

import React, { useState } from "react";

interface PrimitiveCard {
  tagLeft: string;
  code: string;
  tagRight: string;
  title: string;
  desc: string;
  svg: React.ReactNode;
}

const primitives: PrimitiveCard[] = [
  {
    tagLeft: "DP-VIS",
    code: "01",
    tagRight: "DP-VIS",
    title: "Dexterous Manipulation",
    desc: "21-point hand keypoints, tracked with sub-millimeter precision",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#ed6538] fill-none stroke-[1.2]">
            <circle cx="20" cy="40" r="3" fill="#111" />
            <line x1="20" y1="40" x2="50" y2="20" />
            <line x1="20" y1="40" x2="60" y2="35" />
            <line x1="20" y1="40" x2="65" y2="55" />
            <line x1="20" y1="40" x2="50" y2="65" />
            <circle cx="50" cy="20" r="2" fill="#ed6538" />
            <circle cx="60" cy="35" r="2" fill="#ed6538" />
            <circle cx="65" cy="55" r="2" fill="#ed6538" />
            <circle cx="50" cy="65" r="2" fill="#ed6538" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>K = 21</span>
          <span>120 fps</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-VIS",
    code: "02",
    tagRight: "DP-VIS",
    title: "Egocentric Gaze",
    desc: "Head-pose estimates and the high-resolution field of view they frame",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#111] fill-none stroke-[1.2]">
            <circle cx="20" cy="40" r="8" />
            <circle cx="20" cy="40" r="2" fill="#ed6538" />
            <line x1="28" y1="36" x2="80" y2="15" stroke="#ed6538" strokeDasharray="3 2" />
            <line x1="28" y1="44" x2="80" y2="65" stroke="#ed6538" strokeDasharray="3 2" />
            <path d="M 80 15 A 60 60 0 0 1 80 65" stroke="#ed6538" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>FOV 160°</span>
          <span>yaw/pitch</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "03",
    tagRight: "DP-SIG",
    title: "Stereo Depth",
    desc: "Metric depth maps from synchronized hardware stereo camera pairs",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#111] fill-none stroke-[1.2]">
            <rect x="15" y="25" width="12" height="10" rx="2" />
            <rect x="15" y="45" width="12" height="10" rx="2" />
            <line x1="27" y1="30" x2="70" y2="40" stroke="#ed6538" />
            <line x1="27" y1="50" x2="70" y2="40" stroke="#ed6538" />
            <line x1="70" y1="15" x2="70" y2="65" strokeDasharray="2 2" stroke="#9ca3af" />
            <line x1="85" y1="15" x2="85" y2="65" strokeDasharray="2 2" stroke="#9ca3af" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>RGB-D</span>
          <span>±2mm error</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "04",
    tagRight: "DP-SIG",
    title: "Object Grounding",
    desc: "3D bounding boxes and geometric mesh priors located in continuous space",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#111] fill-none stroke-[1.2]">
            <path d="M35 25 L40 60 L60 60 L65 25 Z" stroke="#111" strokeWidth="1.2" />
            <path d="M60 35 C70 35, 70 50, 60 50" stroke="#111" strokeWidth="1.2" />
            {/* 3D Corner brackets */}
            <path d="M 25 20 L 25 15 L 35 15" stroke="#ed6538" strokeWidth="1.5" />
            <path d="M 75 20 L 75 15 L 65 15" stroke="#ed6538" strokeWidth="1.5" />
            <path d="M 25 65 L 25 70 L 35 70" stroke="#ed6538" strokeWidth="1.5" />
            <path d="M 75 65 L 75 70 L 65 70" stroke="#ed6538" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span className="text-[#ed6538]">cup · 0.94</span>
          <span>6-DoF</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "AS-05",
    code: "05",
    tagRight: "DP-SIG",
    title: "Action Segmentation",
    desc: "Tasks split at the moment intent changes",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-32 h-16 flex flex-col justify-center">
          <div className="flex justify-between text-[7.5px] font-mono text-gray-500 mb-1 px-1">
            <span>idle</span>
            <span className="text-[#ed6538]">pour</span>
            <span>stir</span>
            <span>place</span>
          </div>
          {/* Segment Capsule matching screenshot */}
          <div className="w-full h-5 rounded-full border border-gray-400 flex overflow-hidden p-0.5 bg-white">
            <div className="w-1/4 h-full border-r border-[#ed6538]" />
            <div className="w-1/3 h-full bg-[#ed6538]/30 border-r border-[#ed6538]" />
            <div className="w-1/4 h-full border-r border-[#ed6538]" />
            <div className="w-1/6 h-full" />
          </div>
          <div className="flex justify-between text-[7px] font-mono text-gray-400 mt-1 px-1">
            <span>00:00</span>
            <span>00:41</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "06",
    tagRight: "DP-SIG",
    title: "Atomic Primitives",
    desc: "Decomposing complex behaviors into modular motion tokens",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex items-center gap-1.5 text-xs text-gray-800 font-mono mb-2">
          <span>○</span>
          <span className="text-gray-400">→</span>
          <span className="text-[#ed6538]">+</span>
          <span className="text-gray-400">→</span>
          <span>↑</span>
          <span className="text-gray-400">→</span>
          <span>⊥</span>
        </div>
        <div className="flex items-center gap-1.5 text-[8px] font-mono text-gray-400">
          <span>reach</span>
          <span>grasp</span>
          <span>lift</span>
          <span>place</span>
        </div>
        <span className="text-[7.5px] font-mono text-gray-400 mt-1">a ∈ (reach, grasp, lift, place...)</span>
      </div>
    ),
  },
  {
    tagLeft: "DP-SIG",
    code: "07",
    tagRight: "DP-SIG",
    title: "Scene Geometry",
    desc: "Volumetric occupancy grids and planar surface boundaries",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 stroke-[#111] fill-none stroke-[1.2]">
            <polygon points="50,15 85,30 50,45 15,30" stroke="#9ca3af" />
            <polygon points="15,30 50,45 50,75 15,60" stroke="#9ca3af" />
            <polygon points="50,45 85,30 85,60 50,75" stroke="#9ca3af" />
            {/* Intersecting plane in orange */}
            <line x1="30" y1="35" x2="70" y2="35" stroke="#ed6538" strokeWidth="1.5" />
            <line x1="50" y1="20" x2="50" y2="60" stroke="#ed6538" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="text-[8px] font-mono text-gray-400 mt-1 text-center">
          <span>ENV : field-canopy</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-MOT",
    code: "08",
    tagRight: "DP-MOT",
    title: "Ego-motion & Kinematics",
    desc: "Whole-body 6-DoF velocity, acceleration, and balance trajectories",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-28 h-20 flex items-center justify-center">
          <svg viewBox="0 0 100 80" className="w-24 h-16 fill-none">
            {/* Coordinate axes */}
            <line x1="20" y1="65" x2="20" y2="15" stroke="#9ca3af" strokeWidth="1" />
            <line x1="20" y1="65" x2="85" y2="65" stroke="#9ca3af" strokeWidth="1" />
            <line x1="20" y1="65" x2="8" y2="75" stroke="#9ca3af" strokeWidth="1" />
            {/* Kinematic trajectory curve */}
            <path d="M 22 55 Q 40 20 60 40 T 80 25" stroke="#ed6538" strokeWidth="1.5" />
            <circle cx="60" cy="40" r="3" fill="#ed6538" />
          </svg>
        </div>
        <div className="flex items-center justify-between w-28 text-[8px] font-mono text-gray-400 mt-1">
          <span>IMU : 300Hz</span>
          <span>6-DoF</span>
        </div>
      </div>
    ),
  },
  {
    tagLeft: "DP-SND",
    code: "09",
    tagRight: "DP-SND",
    title: "Speech & Semantics",
    desc: "Phonetic alignment and intent parsing for natural verbal actuation",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-28 h-8 flex items-center">
          <svg viewBox="0 0 120 30" className="w-full h-6 stroke-[#ed6538] fill-none stroke-[1.2]">
            <path d="M 0 15 Q 15 15 25 8 T 35 22 T 45 5 T 55 25 T 65 15 L 120 15" />
          </svg>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="px-1.5 py-0.5 rounded border border-gray-300 text-[8px] font-mono text-gray-700 bg-white">&quot;pick fruit&quot;</span>
          <span className="px-1.5 py-0.5 rounded border border-[#ed6538] text-[8px] font-mono text-[#ed6538] bg-white">ACT</span>
        </div>
        <span className="text-[8px] font-mono text-gray-400 mt-1">confidence : 0.98</span>
      </div>
    ),
  },
  {
    tagLeft: "DP-SND",
    code: "10",
    tagRight: "DP-SND",
    title: "Code-Switching",
    desc: "Multilingual prosody tracking across Hindi, Marathi, and English",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex items-center gap-1 mb-1.5">
          <span className="px-1 py-0.5 rounded border border-gray-300 text-[9px] font-mono text-gray-700 bg-white">मुद्दे</span>
          <span className="px-1 py-0.5 rounded border border-[#ed6538] text-[9px] font-mono text-[#ed6538] bg-white">call</span>
          <span className="px-1 py-0.5 rounded border border-gray-300 text-[9px] font-mono text-gray-700 bg-white">कर</span>
          <span className="px-1 py-0.5 rounded border border-gray-300 text-[9px] font-mono text-gray-700 bg-white">देना</span>
        </div>
        <div className="flex items-center gap-2.5 text-[8.5px] font-mono text-gray-400">
          <span>HI</span>
          <span className="text-[#ed6538]">EN</span>
          <span>HI</span>
          <span>HI</span>
        </div>
        <span className="text-[7.5px] font-mono text-gray-400 mt-1">switch points : 2</span>
      </div>
    ),
  },
  {
    tagLeft: "DP-SND",
    code: "11",
    tagRight: "DP-SND",
    title: "Speaker Topology",
    desc: "Multi-party conversational diarization and directional voice isolation",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-28 space-y-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-mono text-gray-400">A</span>
            <div className="flex-1 h-2.5 bg-gray-100 rounded-xs relative">
              <div className="absolute left-2 w-6 h-2.5 bg-[#111] rounded-xs" />
              <div className="absolute left-12 w-8 h-2.5 bg-[#111] rounded-xs" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-mono text-gray-400">B</span>
            <div className="flex-1 h-2.5 bg-gray-100 rounded-xs relative">
              <div className="absolute left-8 w-7 h-2.5 bg-[#ed6538] rounded-xs" />
              <div className="absolute left-18 w-5 h-2.5 bg-[#ed6538] rounded-xs" />
            </div>
          </div>
        </div>
        <span className="text-[7.5px] font-mono text-gray-400 mt-1">overlap resolution</span>
      </div>
    ),
  },
  {
    tagLeft: "DP-TCH",
    code: "12",
    tagRight: "DP-TCH",
    title: "Haptic Resistance",
    desc: "Normal and shear force feedback from tactile end-effector arrays",
    svg: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="grid grid-cols-4 gap-1 p-2 rounded border border-gray-300 bg-white">
          <div className="w-2.5 h-2.5 rounded-xs bg-gray-200" />
          <div className="w-2.5 h-2.5 rounded-xs bg-[#ed6538]/60" />
          <div className="w-2.5 h-2.5 rounded-xs bg-[#ed6538]" />
          <div className="w-2.5 h-2.5 rounded-xs bg-[#ed6538]/60" />
          <div className="w-2.5 h-2.5 rounded-xs bg-gray-200" />
          <div className="w-2.5 h-2.5 rounded-xs bg-[#ed6538]" />
          <div className="w-2.5 h-2.5 rounded-xs bg-[#ed6538]" />
          <div className="w-2.5 h-2.5 rounded-xs bg-gray-200" />
        </div>
        <span className="text-[7.5px] font-mono text-gray-400 mt-1">0.01N shear resolution</span>
      </div>
    ),
  },
];

export function SignalPrimitives() {
  const marqueeItems = [...primitives, ...primitives];

  return (
    <section id="primitives" className="relative py-20 bg-[#ffffff] border-b border-black/[0.06] overflow-visible">
      {/* Section Header matching screenshot */}
      <div className="max-w-7xl mx-auto px-6 mb-8 select-none">
        <h2 className="text-xs font-mono font-medium tracking-wider text-black/70 uppercase">
          SIGNAL PRIMITIVES
        </h2>
      </div>

      {/* Infinite Horizontal Carousel matching screenshot */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-6">
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] items-start pt-2 pb-14">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.code}-${idx}`}
              className="w-[215px] sm:w-[235px] min-h-[210px] flex-shrink-0 rounded-[18px] bg-white hover:bg-[#faf8f5] border border-[#e4e2dc] hover:border-[#d4d1c8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-xl p-5 flex flex-col justify-between transition-all duration-300 ease-out group select-none relative hover:z-30 hover:-translate-y-1 hover:min-h-[285px]"
            >
              {/* Top Tag & Code Line matching uploaded_media_1795260477519.png */}
              <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 pb-2">
                <span className="font-semibold text-gray-800 text-xs">{item.code}</span>
                <span className="tracking-wider text-[9.5px]">
                  {item.tagLeft} · {item.tagRight}
                </span>
              </div>

              {/* Center Schematic Graphic */}
              <div className="my-auto py-3 flex items-center justify-center">
                {item.svg}
              </div>

              {/* Bottom Title & Description - Expands smoothly downwards on hover like screenshot */}
              <div className="pt-2">
                <h3 className="text-sm font-sans font-medium text-gray-900 group-hover:text-[#ed6538] transition-colors leading-tight mb-1">
                  {item.title}
                </h3>
                
                {/* Description - Revealed on hover expanding downwards */}
                <p className="text-xs text-gray-500 font-sans leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 ease-out">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

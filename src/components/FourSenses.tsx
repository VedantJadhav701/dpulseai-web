"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FourSenses() {
  return (
    <section id="senses" className="relative py-24 bg-white border-b border-black/[0.06] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-4">
          <span className="text-[11px] font-mono font-medium tracking-wider text-black/60 uppercase">
            THE FULL SENSORY RANGE
          </span>
        </div>

        {/* Section Header Row with Orange Rule & Crescent Logo */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-20">
          <h2 className="text-3xl sm:text-5xl font-light text-[#141312] tracking-tight leading-[1.12]">
            Four senses. One fused signal.
          </h2>

          <div className="hidden lg:flex items-center gap-4 flex-1 max-w-xl pl-12">
            <div className="flex-1 h-[1.5px] bg-[#ed6538]" />
            {/* Multi-crescent icon from Humyn Labs */}
            <svg viewBox="0 0 44 24" className="w-11 h-6 fill-[#ed6538]">
              <circle cx="12" cy="12" r="10" />
              <circle cx="32" cy="12" r="10" />
              <circle cx="22" cy="12" r="10" fill="white" />
            </svg>
          </div>
        </div>

        {/* 4 Clean Columns matching uploaded_media_3_1795256087657.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-gray-100">
          {/* Sound */}
          <div className="space-y-6">
            <div className="h-20 flex items-center">
              <svg viewBox="0 0 200 40" className="w-full h-10 stroke-gray-900 fill-none">
                <line x1="10" y1="20" x2="60" y2="20" strokeDasharray="1.5 3" strokeWidth="1.5" />
                <path d="M60 20 Q 75 2 85 20 T 100 20 T 115 5 T 130 35 T 140 20" strokeWidth="1.5" />
                <line x1="140" y1="20" x2="190" y2="20" strokeDasharray="1.5 3" strokeWidth="1.5" />
                <line x1="190" y1="12" x2="190" y2="28" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-light text-[#141312] mb-3">Sound</h3>
              <p className="text-sm font-sans text-[#ed6538] leading-relaxed">
                Speech, prosody, code-switching, disfluencies.
              </p>
            </div>
          </div>

          {/* Sight */}
          <div className="space-y-6">
            <div className="h-20 flex items-center justify-center">
              <div className="relative w-28 h-16 flex items-center justify-center bg-dot-grid">
                <div className="w-12 h-12 border border-[#ed6538] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#ed6538]" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-light text-[#141312] mb-3">Sight</h3>
              <p className="text-sm font-sans text-[#ed6538] leading-relaxed">
                Egocentric hand–object manipulation, 6DoF pose, depth.
              </p>
            </div>
          </div>

          {/* Motion */}
          <div className="space-y-6">
            <div className="h-20 flex items-center">
              <svg viewBox="0 0 200 60" className="w-full h-14 stroke-gray-700 fill-none stroke-[1.2]">
                <path d="M 10 45 Q 60 5 100 45 T 190 20" />
                <path d="M 10 30 Q 70 55 120 20 T 190 40" stroke="#9ca3af" />
                <path d="M 10 20 Q 50 40 110 35 T 190 25" stroke="#d1d5db" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-light text-[#141312] mb-3">Motion</h3>
              <p className="text-sm font-sans text-[#ed6538] leading-relaxed">
                Moving through space - joint physics and navigation.
              </p>
            </div>
          </div>

          {/* Touch */}
          <div className="space-y-6">
            <div className="h-20 flex flex-col justify-center gap-3">
              {/* Pressure Bar with orange segment */}
              <div className="w-full h-4 bg-gray-200 rounded-sm overflow-hidden flex">
                <div className="w-1/4 h-full bg-[#ed6538]" />
              </div>
              <svg viewBox="0 0 200 10" className="w-full h-2 stroke-gray-400 fill-none">
                <path d="M 0 5 Q 50 1 100 5 T 200 4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-light text-[#141312] mb-3">Touch</h3>
              <p className="text-sm font-sans text-[#ed6538] leading-relaxed">
                Grip, force, care.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Link Button matching screenshot */}
        <div className="mt-8 flex items-center">
          <Link
            href="/engine"
            className="group inline-flex items-center gap-2.5 text-sm font-sans text-gray-900 hover:text-[#ed6538] transition-colors"
          >
            <span>See the datasets</span>
            <span className="w-5 h-5 rounded-full bg-[#ed6538] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3 h-3 text-white" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

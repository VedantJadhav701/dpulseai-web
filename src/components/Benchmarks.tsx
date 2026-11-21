"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Benchmarks() {
  return (
    <section id="eval" className="relative w-full p-2.5 sm:p-4 md:p-6 bg-white border-b border-black/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        
        {/* Left Featured Card - Matches exact Humyn Labs layout with DPULSE AI Data */}
        <div className="lg:col-span-8 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#f79c78] via-[#f79c78] to-[#ed7a50] p-6 sm:p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[560px] shadow-sm">
          
          {/* Subtle background circuit / grid overlay */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />

          {/* Top Row: PUBLISHED Tag & Date */}
          <div className="relative z-10 flex items-center justify-between mb-8 select-none">
            <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#7be8d4] text-[#141312] text-[11px] font-mono font-semibold tracking-wider uppercase shadow-2xs">
              PUBLISHED
            </span>
            <span className="text-[11px] font-mono text-black/75 tracking-wider font-medium">
              EVAL · v2.0 · 2026
            </span>
          </div>

          {/* Card Body */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8 my-auto">
            <div className="max-w-lg">
              <span className="text-[11px] font-mono font-semibold text-black/70 uppercase tracking-widest block mb-3 select-none">
                CANOPY &amp; EMBODIMENT BENCHMARK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#141312] tracking-tight leading-[1.12] mb-6">
                Every robotics benchmark stops in simulation.<br className="hidden sm:inline" />
                We deploy in the field.
              </h2>
              <p className="text-xs sm:text-sm text-black/80 font-sans leading-relaxed max-w-md">
                The only sovereign physical AI benchmark evaluating 23 foundation and VLA models across harsh sunlight, extreme dust occlusions, and zero-shot cross-robot transfer — rolled into one DPULSE Score, and opened up metric by metric.
              </p>
            </div>

            {/* Right Metric Sub-Pill Card (Glass container matching screenshot) */}
            <div className="w-full sm:w-64 bg-white/25 backdrop-blur-md border border-white/50 rounded-2xl p-4 flex flex-col gap-2 shrink-0 select-none shadow-xs">
              <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest text-black/75 px-1 pb-1">
                <span>6 METRICS</span>
                <span>→ 1 SCORE</span>
              </div>
              
              {[
                "Read the methodology",
                "See the leaderboard",
                "Read the key findings",
                "Compare by embodiment",
                "See field accuracy gap",
                "Access the evaluation dataset",
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href="/projects"
                  className="w-full py-2 px-3 bg-white/95 hover:bg-white text-[#141312] rounded-lg text-xs font-sans font-medium text-center shadow-2xs transition-all hover:scale-[1.01]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Row: Stats & Explore Button */}
          <div className="relative z-10 pt-8 mt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 select-none">
            <div className="flex items-center gap-8 sm:gap-12">
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#141312] font-mono">23</div>
                <div className="text-[10px] font-mono tracking-wider text-black/70 uppercase font-medium mt-0.5">
                  MODELS
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#141312] font-mono">6</div>
                <div className="text-[10px] font-mono tracking-wider text-black/70 uppercase font-medium mt-0.5">
                  METRICS
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-light text-[#141312] font-mono">1</div>
                <div className="text-[10px] font-mono tracking-wider text-black/70 uppercase font-medium mt-0.5">
                  DPULSE SCORE
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white font-medium hover:opacity-90 transition-opacity group"
            >
              <span className="text-sm font-sans tracking-tight">Explore Benchmark</span>
              <span className="w-7 h-7 rounded-full bg-[#ed6538] flex items-center justify-center text-white shadow-2xs group-hover:translate-x-0.5 transition-transform">
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

        </div>

        {/* Right Stacked Cards - Matches Humyn Labs in progress & planned */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
          
          {/* Top Card: IN PROGRESS */}
          <div className="flex-1 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#eceae6] p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-[#dedcd6] min-h-[260px] shadow-2xs select-none">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-black/50 block mb-3">
                IN PROGRESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#141312] tracking-tight leading-snug mb-3">
                Autonomous Canopy Perception
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                Evaluating zero-shot fruit maturity grading and obstacle avoidance under high glare in Indian orchards.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono text-black/50 tracking-wider">
              Coming soon
            </div>
          </div>

          {/* Bottom Card: PLANNED */}
          <div className="flex-1 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#eceae6] p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-[#dedcd6] min-h-[260px] shadow-2xs select-none">
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-black/50 block mb-3">
                PLANNED
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#141312] tracking-tight leading-snug mb-3">
                Sovereign Edge SLM Quality Report
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                Deterministic C++20 latency, drift, and quantization audits across NVIDIA Jetson Orin &amp; edge NPUs.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono text-black/50 tracking-wider">
              Coming soon
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

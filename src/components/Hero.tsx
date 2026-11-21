"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToEngine = () => {
    const el = document.getElementById("engine");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full p-2.5 sm:p-4 md:p-6 bg-white">
      {/* Outer Rounded Hero Card matching Humyn Labs screenshot */}
      <div className="relative w-full min-h-[90vh] sm:min-h-[94vh] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-[#f79c78] overflow-hidden flex flex-col justify-between items-center text-center px-6 pt-24 pb-10 select-none shadow-sm">
        
        {/* Looping WebM Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            src="https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/video/hero-web.webm"
            poster="https://prod-image-bucket.kgen.io/humyn-bd-web-cdn-assets/assets/home/images/hero-web-frame.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-multiply opacity-85 scale-105"
          />
          {/* Exact warm peach gradient overlays */}
          <div className="absolute inset-0 bg-[#f79c78]/55 mix-blend-color" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f79c78]/30 via-transparent to-[#f79c78]/70" />
        </div>

        {/* Top-Right Contact Pill matching image copy 3.png */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-20">
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full border border-white/60 bg-white/10 hover:bg-white/25 backdrop-blur-md text-xs sm:text-sm font-mono tracking-wider text-white transition-all shadow-2xs"
          >
            Contact
          </Link>
        </div>

        {/* Center Headline & Subtitle matching DPULSE AI Identity */}
        <div className="relative z-20 max-w-4xl mx-auto my-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal text-[#161514] tracking-tight leading-[1.08] mb-6 font-sans">
            We build the intelligence,<br />
            <span className="font-normal">not the machines.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#2a2623] max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            General-purpose intelligence for the physical world — foundational robotics brains, autonomous agriculture, and sovereign enterprise AI.
          </p>
        </div>

        {/* Bottom See the Engine Button */}
        <div className="relative z-10 mt-8 mb-2">
          <button
            onClick={scrollToEngine}
            className="group inline-flex items-center gap-2.5 text-sm sm:text-base text-[#161514] font-sans font-normal hover:opacity-85 transition-all cursor-pointer"
          >
            <span>See the engine</span>
            <span className="w-7 h-7 rounded-full bg-[#161514] text-white flex items-center justify-center group-hover:translate-y-0.5 transition-transform shadow-sm">
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

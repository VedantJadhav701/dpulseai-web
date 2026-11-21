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

        {/* 21 Hand Keypoints Pill & Interactive Annotation Lines */}
        <div className="absolute top-[50%] left-[8%] sm:left-[20%] md:left-[24%] z-10 hidden sm:block pointer-events-none">
          {/* Keypoints Label Pill */}
          <div className="absolute -top-16 -left-12 px-3 py-1 rounded-md border border-white/60 bg-white/20 backdrop-blur-md text-white font-mono text-xs tracking-wider shadow-sm flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            21 hand keypoints
          </div>

          {/* SVG coordinate rays connecting to robotic hand joints */}
          <svg className="w-96 h-64 overflow-visible -mt-10" viewBox="0 0 380 260">
            {/* Wrist hub */}
            <circle cx="20" cy="80" r="4" fill="white" stroke="rgba(255,255,255,0.4)" strokeWidth="6" />
            
            {/* Rays to fingertips */}
            <line x1="20" y1="80" x2="160" y2="40" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
            <line x1="20" y1="80" x2="220" y2="55" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
            <line x1="20" y1="80" x2="270" y2="90" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
            <line x1="20" y1="80" x2="240" y2="150" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />
            <line x1="20" y1="80" x2="190" y2="190" stroke="white" strokeWidth="1.2" strokeOpacity="0.8" />

            {/* Fingertip nodes */}
            <circle cx="160" cy="40" r="3" fill="white" />
            <circle cx="220" cy="55" r="3" fill="white" />
            <circle cx="270" cy="90" r="4" fill="white" stroke="rgba(255,255,255,0.4)" strokeWidth="8" />
            <circle cx="240" cy="150" r="3" fill="white" />
            <circle cx="190" cy="190" r="3" fill="white" />

            {/* Mid-finger joints */}
            <circle cx="100" cy="60" r="2.5" fill="white" />
            <circle cx="140" cy="70" r="2.5" fill="white" />
            <circle cx="170" cy="85" r="2.5" fill="white" />
            <circle cx="150" cy="120" r="2.5" fill="white" />
            <circle cx="120" cy="140" r="2.5" fill="white" />
          </svg>
        </div>

        {/* Center Headline & Subtitle */}
        <div className="relative z-10 max-w-4xl mx-auto my-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal text-[#161514] tracking-tight leading-[1.08] mb-6 font-sans">
            The research &amp; data engine<br />
            <span className="font-normal">for Physical AI.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#2a2623] max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            We turn human experience into physical understanding<br className="hidden sm:inline" />
            for the robots that work beside us.
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

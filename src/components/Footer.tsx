"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative w-full bg-white text-[#141312] border-t border-black/[0.08] overflow-hidden select-none">
      
      {/* Top Careers Ticker Row matching Screenshot 2 */}
      <div className="w-full border-b border-black/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.08] max-w-7xl mx-auto px-6">
          <Link
            href="/careers"
            className="py-5 md:py-6 flex items-center justify-between group hover:bg-black/[0.015] px-4 transition-colors"
          >
            <span className="text-sm font-sans text-[#141312] group-hover:text-[#ed6538] transition-colors">
              AI Robotics Engineer
            </span>
            <span className="text-xs font-mono text-gray-500">
              Full-time
            </span>
          </Link>

          <Link
            href="/careers"
            className="py-5 md:py-6 flex items-center justify-between group hover:bg-black/[0.015] px-4 transition-colors"
          >
            <span className="text-sm font-sans text-[#141312] group-hover:text-[#ed6538] transition-colors">
              C++ Embedded Runtime Lead
            </span>
            <span className="text-xs font-mono text-gray-500">
              Full-time
            </span>
          </Link>

          <Link
            href="/careers"
            className="py-5 md:py-6 flex items-center justify-between group hover:bg-black/[0.015] px-4 transition-colors"
          >
            <span className="text-sm font-sans text-[#141312] group-hover:text-[#ed6538] transition-colors">
              Field Perception Specialist
            </span>
            <span className="text-xs font-mono text-gray-500">
              Full-time
            </span>
          </Link>
        </div>
      </div>

      {/* Main Footer Container with Left Orange Glowing Ambient Gradient */}
      <div className="relative pt-16 pb-20 sm:pb-28 overflow-hidden min-h-[440px]">
        
        {/* Warm Orange / Coral Ambient Glow on bottom-left matching Screenshot 2 */}
        <div 
          className="absolute -bottom-20 -left-20 w-[580px] h-[480px] rounded-full pointer-events-none opacity-85 blur-[70px]"
          style={{
            background: "radial-gradient(circle, rgba(237, 101, 56, 0.75) 0%, rgba(247, 156, 120, 0.45) 45%, rgba(255, 255, 255, 0) 75%)",
          }}
        />
        {/* Grainy Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.14] pointer-events-none bg-[radial-gradient(#141312_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 md:gap-8">
            
            {/* Column 1: Company */}
            <div className="lg:col-span-2 space-y-4">
              <span className="text-base font-medium text-[#141312] block tracking-tight">
                Company
              </span>
              <ul className="space-y-3 text-sm text-[#141312]/85 font-sans">
                <li>
                  <Link href="/about" className="hover:text-[#ed6538] transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/newsroom" className="hover:text-[#ed6538] transition-colors">Newsroom</Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-[#ed6538] transition-colors">Careers</Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#ed6538] transition-colors">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#ed6538] transition-colors">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Explore */}
            <div className="lg:col-span-2 space-y-4">
              <span className="text-base font-medium text-[#141312] block tracking-tight">
                Explore
              </span>
              <ul className="space-y-3 text-sm text-[#141312]/85 font-sans">
                <li>
                  <Link href="/benchmarks" className="hover:text-[#ed6538] transition-colors">BRIDGE</Link>
                </li>
                <li>
                  <Link href="/engine" className="hover:text-[#ed6538] transition-colors">Engine</Link>
                </li>
                <li>
                  <Link href="/custom-collections" className="hover:text-[#ed6538] transition-colors">Custom collections</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#ed6538] transition-colors">Blogs</Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-[#ed6538] transition-colors">Case Studies</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contribute */}
            <div className="lg:col-span-2 space-y-4">
              <span className="text-base font-medium text-[#141312] block tracking-tight">
                Contribute
              </span>
              <ul className="space-y-3 text-sm text-[#141312]/85 font-sans">
                <li>
                  <Link href="/join-network" className="hover:text-[#ed6538] transition-colors">Join the network</Link>
                </li>
                <li>
                  <Link href="/partner" className="hover:text-[#ed6538] transition-colors">Partner with us</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Tell us what you're building + Social Links */}
            <div className="col-span-2 md:col-span-4 lg:col-span-6 flex flex-col justify-between items-start lg:items-end text-left lg:text-right space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-[#141312] tracking-tight mb-1">
                  DPULSE AI, the study of humans for machines.
                </h3>
                <Link
                  href="/contact"
                  className="text-lg sm:text-xl font-medium text-[#141312] hover:text-[#ed6538] transition-colors inline-block"
                >
                  Tell us what you&apos;re building
                </Link>
              </div>

              {/* Social Links matching screenshot */}
              <div className="space-y-2 text-sm text-[#141312] font-sans">
                <div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed6538] transition-colors">
                    LinkedIn
                  </a>
                </div>
                <div>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed6538] transition-colors">
                    X
                  </a>
                </div>
                <div>
                  <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed6538] transition-colors">
                    Hugging Face
                  </a>
                </div>
                <div>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ed6538] transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Watermark Logo matching screenshot 2: humyn(labs) -> dpulse(ai) */}
          <div className="pt-14 sm:pt-20 flex flex-col sm:flex-row items-baseline justify-between gap-6 border-t border-black/[0.06] mt-12">
            <div className="text-xs font-mono text-gray-500">
              © {new Date().getFullYear()} DPULSE AI PRIVATE LIMITED · Baner Gaon, Pune - 411045, India
            </div>

            {/* Giant Translucent dpulse(ai) logo watermark */}
            <div className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#141312]/80 opacity-90 select-none">
              dpulse<span className="text-[#ed6538] font-normal">(ai)</span>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}

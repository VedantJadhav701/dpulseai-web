"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getPageTitle = () => {
    if (!pathname || pathname === "/") return "Home";
    if (pathname.includes("engine")) return "Engine";
    if (pathname.includes("physical-ai")) return "Physical AI";
    if (pathname.includes("enterprise-ai")) return "Enterprise AI";
    if (pathname.includes("agriculture")) return "Agriculture";
    if (pathname.includes("work-chips")) return "Work Chips";
    if (pathname.includes("platform")) return "Platform";
    if (pathname.includes("literature")) return "Literature";
    if (pathname.includes("research")) return "Research";
    if (pathname.includes("projects")) return "Projects";
    if (pathname.includes("partners")) return "Partners";
    if (pathname.includes("careers")) return "Careers";
    if (pathname.includes("contact")) return "Contact";
    if (pathname.includes("terms")) return "Terms";
    return "Home";
  };

  const navLinks = [
    { num: "01", label: "Physical AI", href: "/physical-ai", desc: "Hardware-agnostic cognitive brain & edge runtime" },
    { num: "02", label: "Agriculture", href: "/agriculture", desc: "Canopy perception & 70%+ farm labor reduction" },
    { num: "03", label: "Enterprise AI", href: "/enterprise-ai", desc: "Sovereign on-device SLMs & industrial automation" },
    { num: "04", label: "The Engine", href: "/engine", desc: "Multimodal validation, processing & labelling platform" },
    { num: "05", label: "Work Chips", href: "/platform/work-chips", desc: "Modular, swappable robot execution units" },
    { num: "06", label: "Projects & Deployments", href: "/projects", desc: "20+ production systems delivered for government & enterprise" },
    { num: "07", label: "Research & arXiv Literature", href: "/research", desc: "Skill-routed VLAs & peer-reviewed research papers" },
    { num: "08", label: "Partners", href: "/partners", desc: "OEM roboticists, enterprise labs & research network" },
    { num: "09", label: "Contact Us", href: "/contact", desc: "Direct consultation with our engineering team" },
  ];

  return (
    <>
      {/* Top Center Floating Pill with Inverted Concave Fillets matching Humyn Labs */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto relative flex items-center bg-white px-5 sm:px-6 py-2 rounded-b-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-x border-black/[0.04]">
          {/* Left Inverted Concave Curve Fillet */}
          <svg
            className="absolute -left-[16px] top-0 w-[16px] h-[16px] fill-white pointer-events-none"
            viewBox="0 0 16 16"
          >
            <path d="M 16 0 L 16 16 A 16 16 0 0 0 0 0 Z" />
          </svg>

          {/* Logo */}
          <Link href="/" className="flex items-center text-sm sm:text-base tracking-tight font-sans font-medium text-[#111]">
            <span>dpulse</span>
            <span className="text-[#ed6538] font-normal">(ai)</span>
          </Link>

          {/* Divider */}
          <span className="text-gray-300 font-light select-none mx-3">|</span>

          {/* Active Page Name */}
          <span className="text-xs sm:text-sm font-sans text-gray-600 font-normal mr-3">
            {getPageTitle()}
          </span>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-gray-100 rounded transition-colors text-black flex flex-col justify-center items-center gap-[3.5px] w-6 h-6 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="w-4 h-[2px] bg-[#111] rounded-full" />
            <span className="w-4 h-[2px] bg-[#111] rounded-full" />
          </button>

          {/* Right Inverted Concave Curve Fillet */}
          <svg
            className="absolute -right-[16px] top-0 w-[16px] h-[16px] fill-white pointer-events-none"
            viewBox="0 0 16 16"
          >
            <path d="M 0 0 L 0 16 A 16 16 0 0 1 16 0 Z" />
          </svg>
        </div>
      </header>

      {/* Menu Modal matching uploaded_media_4_1795256087657.jpg */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden border border-black/[0.08] max-h-[92vh] flex flex-col justify-between">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center text-xl font-medium tracking-tight text-[#111]">
                <span>dpulse</span>
                <span className="text-[#ed6538] font-normal">(ai)</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Left Navigation & Right Feature Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-6 overflow-y-auto max-h-[62vh] pr-1 scrollbar-thin">
              
              {/* Left Column Links (All DPULSE AI Sections) */}
              <div className="lg:col-span-6 grid grid-cols-1 gap-2.5 sm:gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#faf9f6] group cursor-pointer transition-colors"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-gray-400 group-hover:text-[#ed6538] transition-colors w-5">
                        {item.num}
                      </span>
                      <div>
                        <span className="text-lg sm:text-xl font-light text-gray-900 group-hover:text-[#ed6538] transition-colors block">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-gray-500 font-sans line-clamp-1">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#ed6538] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </Link>
                ))}
              </div>

              {/* Right Column Feature Card matching Bloomberg announcement card */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <Link
                  href="/research/skill-routed-vlas-two-ways-to-build-robot-skills"
                  onClick={() => setIsOpen(false)}
                  className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 text-white p-6 sm:p-8 flex flex-col justify-between shadow-lg group block"
                >
                  {/* Background photo */}
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
                    alt="DPULSE AI Research on Robotics"
                    className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-white/90">
                      DPULSE AI RESEARCH
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#ed6538] text-white text-[10px] font-mono uppercase">
                      New Paper
                    </span>
                  </div>

                  {/* Bottom Headline & Arrow */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-medium text-white leading-tight">
                        Skill-routed VLAs:<br />Two Ways to Build Robot Skills
                      </h4>
                      <p className="text-xs text-white/75 mt-2 font-sans line-clamp-2">
                        Comparing Mixture-of-Experts routing against lightweight task adapters for deterministic edge execution &lt; 15ms.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                  </div>
                </Link>

                {/* Additional quick pill links */}
                <div className="mt-4 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-gray-500">
                  <Link href="/research/literature" onClick={() => setIsOpen(false)} className="hover:text-[#ed6538] transition-colors">
                    Browse 6+ arXiv Papers →
                  </Link>
                  <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-[#ed6538] transition-colors">
                    10 Production Projects →
                  </Link>
                </div>
              </div>

            </div>

            {/* Modal Bottom Footer Strip matching screenshot */}
            <div className="pt-6 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-gray-500 select-none">
              <div>
                Keeping (intelligence) sovereign.
              </div>
              <div className="text-gray-400 font-mono text-[11px]">
                Baner Gaon, Pune · Maharashtra, India
              </div>
              <div>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#ed6538] text-white font-medium text-xs tracking-wider uppercase hover:bg-[#e05629] transition-colors shadow-sm"
                >
                  TALK TO US
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

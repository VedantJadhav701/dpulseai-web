"use client";

import React from "react";
import { careersData } from "@/data/humynData";
import { MapPin, ArrowUpRight } from "lucide-react";

export function CareersSection() {
  return (
    <section id="careers" className="relative py-24 bg-[#ffffff] border-b border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="mb-4">
          <span className="text-xs font-mono font-medium tracking-wider text-black/70 uppercase">
            CAREERS
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-light text-[#141312] tracking-tight leading-[1.15]">
              Build the Physical AI brain.
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md font-sans leading-relaxed">
            We are looking for world-class researchers, low-level C++ systems engineers, and robotics specialists to invent sovereign physical AI in Pune, India.
          </p>
        </div>

        {/* Roles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careersData.map((job, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#faf9f6] border border-[#e8e6e1] hover:border-[#ed6538]/50 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 pb-3 mb-4 border-b border-gray-200">
                  <span className="text-[#ed6538] font-medium">{job.department}</span>
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#ed6538] transition-colors mb-3 flex items-start justify-between">
                  {job.title}
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#ed6538] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-2" />
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-6">
                  {job.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="font-mono text-xs text-gray-400">{job.type}</span>
                <a
                  href={`mailto:careers@dpulseai.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="px-4 py-1.5 rounded-full bg-white border border-gray-300 hover:bg-[#ed6538] hover:text-white hover:border-[#ed6538] text-gray-800 text-xs font-mono transition-colors shadow-2xs"
                >
                  Apply Role →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Pitch */}
        <div className="mt-12 p-8 rounded-2xl bg-[#faf9f6] border border-[#e4e2dc] text-center max-w-3xl mx-auto shadow-2xs">
          <h4 className="text-lg font-medium text-gray-900 mb-2">Don&apos;t see your exact role?</h4>
          <p className="text-sm text-gray-600 mb-4">
            We are always looking for exceptional mathematicians, ROS2 kernel hackers, and machine vision architects. Send your resume and GitHub to:
          </p>
          <a
            href="mailto:careers@dpulseai.com"
            className="inline-flex items-center gap-2 font-mono text-base text-[#ed6538] hover:underline font-semibold"
          >
            careers@dpulseai.com
          </a>
        </div>
      </div>
    </section>
  );
}

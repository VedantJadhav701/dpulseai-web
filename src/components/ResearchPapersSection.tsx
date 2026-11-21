"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, ExternalLink, FileText, Sparkles } from "lucide-react";
import { literatureList } from "@/data/literatureData";
import { researchArticles } from "@/data/researchData";

export function ResearchPapersSection() {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const tags = [
    { id: "all", label: "All Papers" },
    { id: "skill-routing", label: "Skill Routing" },
    { id: "vla", label: "VLA Backbones" },
    { id: "foundations", label: "Foundations & Continual Learning" },
  ];

  const filteredPapers = selectedTag === "all"
    ? literatureList.slice(0, 4)
    : literatureList.filter(p => p.tags.includes(selectedTag as any)).slice(0, 4);

  return (
    <section id="research" className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#faf9f6] border-b border-black/[0.06] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-[#d8d6ce] text-[11px] font-mono text-gray-700 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ed6538]" />
              RESEARCH &amp; ARXIV CITATIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-[#141312] tracking-tight leading-[1.12]">
              Grounding Physical AI in peer-reviewed science.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 max-w-md font-sans leading-relaxed">
            Our robotics brain is built on formal advances in modular skill routing, Mixture-of-Experts policy heads, and zero-shot VLA execution on resource-constrained edge hardware.
          </p>
        </div>

        {/* DPULSE Flagship Paper Hero Card */}
        {researchArticles[0] && (
          <div className="mb-12 rounded-[24px] sm:rounded-[32px] bg-white p-6 sm:p-10 border border-[#e4e2dc] shadow-sm hover:border-[#ed6538]/50 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded bg-[#ed6538]/10 text-[#ed6538] text-[11px] font-mono font-medium tracking-wide uppercase">
                    DPULSE AI Flagship Paper
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {researchArticles[0].date} · {researchArticles[0].version}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-light text-[#141312] tracking-tight mb-3">
                  {researchArticles[0].title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans mb-6">
                  {researchArticles[0].summary}
                </p>

                {/* Key Empirical Results */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  {researchArticles[0].results?.map((res, idx) => (
                    <div key={idx}>
                      <div className="text-xl sm:text-2xl font-mono text-[#ed6538] font-light">
                        {res.value}
                      </div>
                      <div className="text-[11px] font-medium text-gray-800">
                        {res.label}
                      </div>
                      <div className="text-[10px] text-gray-500 font-sans mt-0.5">
                        {res.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Column */}
              <div className="flex flex-col gap-3 lg:items-end shrink-0 pt-2">
                <Link
                  href={`/research/${researchArticles[0].slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ed6538] hover:bg-[#db552a] text-white text-xs font-medium tracking-wide transition-colors shadow-2xs"
                >
                  <span>Read Full Paper</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/research/literature"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#ed6538] font-mono transition-colors pt-2"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View All 6+ Citations</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                selectedTag === tag.id
                  ? "bg-[#141312] text-white shadow-2xs"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-[#e4e2dc]"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* 4 Featured ArXiv Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredPapers.map((paper, idx) => (
            <div
              key={idx}
              className="rounded-[20px] bg-white p-6 sm:p-8 border border-[#e4e2dc] hover:border-[#ed6538]/50 transition-colors flex flex-col justify-between shadow-2xs group"
            >
              <div>
                {/* Top Row: arXiv ID & Year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#ed6538] font-medium bg-[#ed6538]/8 px-2 py-0.5 rounded">
                    arXiv:{paper.arxivId}
                  </span>
                  <span className="font-mono text-xs text-gray-400">
                    {paper.year}
                  </span>
                </div>

                {/* Paper Title */}
                <h4 className="text-lg font-medium text-[#141312] tracking-tight leading-snug mb-3 group-hover:text-[#ed6538] transition-colors">
                  {paper.title}
                </h4>

                {/* Abstract Summary */}
                <p className="text-xs text-gray-600 font-sans leading-relaxed mb-4 line-clamp-3">
                  {paper.summary}
                </p>

                {/* DPULSE Engineering Take */}
                <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#eceae6] text-xs font-sans text-gray-700 mb-4">
                  <span className="font-mono text-[10px] text-[#ed6538] uppercase tracking-wider block font-semibold mb-1">
                    DPULSE AI Architectural Take:
                  </span>
                  {paper.ourTake}
                </div>
              </div>

              {/* Bottom Row: Link out to arXiv */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                  {paper.tags.map((t, tIdx) => (
                    <span key={tIdx} className="capitalize">
                      #{t}
                    </span>
                  ))}
                </div>

                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-gray-500 hover:text-[#ed6538] transition-colors"
                >
                  <span>Read on arXiv</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Research CTA Strip */}
        <div className="p-6 sm:p-8 rounded-[20px] bg-[#eae8e3] border border-[#d8d6ce] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-medium text-[#141312]">
              Explore our full research library &amp; citation graph.
            </h4>
            <p className="text-xs text-gray-600 font-sans mt-0.5">
              Read in-depth technical reports, benchmarks, and mathematical proofs for our hardware-agnostic cognitive brain.
            </p>
          </div>

          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141312] hover:bg-black text-white text-xs font-medium tracking-wide transition-colors shrink-0 shadow-2xs"
          >
            <span>Visit Research Portal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

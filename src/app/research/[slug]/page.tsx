import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CitationBlock from "@/components/CitationBlock";
import Link from "next/link";
import { notFound } from "next/navigation";
import { researchArticles } from "@/data/researchData";
import { ArrowLeft, Calendar, User, Mail, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return researchArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = researchArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Research Note Not Found | DPULSE AI" };

  return {
    title: `${article.title} | DPULSE AI Research`,
    description: article.summary,
  };
}

export default async function ResearchArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = researchArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // JSON-LD ScholarlyArticle
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    description: article.summary,
    publisher: {
      "@type": "Organization",
      name: "DPULSE AI PRIVATE LIMITED",
      logo: "https://dpulseai.com/logo.png",
    },
  };

  // Helper to cleanly parse content into clean headings and paragraphs
  const renderContentBlocks = (rawContent: string) => {
    const blocks = rawContent.split("\n\n").map((b) => b.trim()).filter(Boolean);

    return blocks.map((block, idx) => {
      // Clean any accidental markdown hashtags
      const cleanBlock = block.replace(/^###\s*/, "").replace(/^##\s*/, "").replace(/^#\s*/, "");

      // Check if line is a numbered heading like "1. The Core Tension..."
      const isHeading = /^\d+\.\s+[A-Z]/.test(cleanBlock);

      if (isHeading) {
        return (
          <h3
            key={idx}
            className="text-xl sm:text-2xl font-light text-[#141312] tracking-tight pt-6 pb-2 border-b border-black/[0.06] first:pt-0"
          >
            {cleanBlock}
          </h3>
        );
      }

      return (
        <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans mb-4">
          {cleanBlock}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#141312] selection:bg-[#ed6538] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="pt-24 sm:pt-28">
        
        {/* Breadcrumb / Back Link */}
        <div className="max-w-4xl mx-auto px-6 pt-6">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-[#ed6538] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Research Index</span>
          </Link>
        </div>

        <article className="py-12 px-6 sm:px-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Area */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-[11px] font-medium bg-[#ed6538]/10 text-[#ed6538] px-2.5 py-1 rounded tracking-wide uppercase">
                  {article.version}
                </span>
                <div className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
                  <Calendar size={13} />
                  <span>{article.date}</span>
                </div>
                <span className="text-gray-300">·</span>
                <div className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
                  <User size={13} />
                  <span>{article.author}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-light text-[#141312] tracking-tight leading-[1.15] mb-6">
                {article.title}
              </h1>

              {/* Abstract Card */}
              <div className="p-6 sm:p-8 rounded-[20px] bg-[#faf9f6] border border-[#e4e2dc]">
                <div className="text-[11px] font-mono font-semibold text-[#ed6538] uppercase tracking-widest mb-2">
                  ABSTRACT
                </div>
                <p className="text-base sm:text-lg text-gray-800 font-sans leading-relaxed font-normal">
                  {article.summary}
                </p>
              </div>
            </div>

            {/* Verified Results Metrics Table */}
            {article.results && article.results.length > 0 && (
              <div className="mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ed6538] block mb-4 font-semibold">
                  VERIFIED BENCHMARKS &amp; TARGETS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {article.results.map((res) => (
                    <div key={res.label} className="bg-white border border-[#e4e2dc] p-6 rounded-2xl shadow-2xs">
                      <div className="text-3xl font-mono text-[#ed6538] font-light mb-1">
                        {res.value}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-gray-900 font-semibold mb-1">
                        {res.label}
                      </div>
                      <div className="text-xs text-gray-500 font-sans leading-relaxed">
                        {res.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Article Main Text Body - Clean typography without markdown hashtags */}
            <div className="bg-white border border-[#e4e2dc] p-6 sm:p-12 rounded-[24px] mb-12 shadow-2xs">
              <div className="space-y-4">
                {renderContentBlocks(article.content)}
              </div>
            </div>

            {/* Citation Block */}
            <div className="mb-12">
              <CitationBlock bibtex={article.citationBibtex} />
            </div>

            {/* Collaborate With DPULSE AI Research Card */}
            <div className="p-8 rounded-[24px] bg-[#eae8e3] border border-[#d8d6ce] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-medium text-[#141312] mb-1">
                  Collaborate With DPULSE AI Research
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-sans">
                  Researchers, roboticists, and PhD candidates: reach out for joint experiments and open roles.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="mailto:info@dpulseai.com?subject=Research%20Collaboration"
                  className="px-5 py-2.5 bg-white hover:bg-gray-50 border border-gray-300 rounded-full text-xs font-medium uppercase tracking-wider text-[#141312] transition-colors inline-flex items-center gap-2 shadow-2xs"
                >
                  <Mail size={14} />
                  <span>Contact Research</span>
                </a>
                <Link
                  href="/careers"
                  className="px-5 py-2.5 bg-[#ed6538] hover:bg-[#db552a] text-white rounded-full text-xs font-medium tracking-wide uppercase transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <span>We Are Hiring</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

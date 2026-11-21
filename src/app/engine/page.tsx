"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TheEngine } from "@/components/TheEngine";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Database, Eye, Gauge, Layers, ShieldCheck, Zap } from "lucide-react";

const pipelineStages = [
  {
    step: "01",
    name: "Validation Array",
    tagline: "Deterministic gating before compute touches the raw telemetry.",
    details: [
      "Dynamic lighting threshold & shadow elimination filters",
      "Frozen-frame and camera motion-blur detection at 60 FPS",
      "Hand-object occlusion boundaries and spatial depth verification",
      "Biometric privacy redaction and face/voice anonymization",
      "IMU sensor drift compensation and continuous liveness audit",
      "Acoustic quality grading (VQScore, WVMOS, SRMR, SIGMOS)",
    ],
  },
  {
    step: "02",
    name: "Processing Vessel",
    tagline: "Multimodal alignment, denoising, and continuous stream normalisation.",
    details: [
      "Nanosecond clock synchronization across video, IMU, and audio",
      "Spatial coordinate calibration for 6DoF hand & end-effector poses",
      "Continuous audio stem separation and environmental noise extraction",
      "Sub-millimeter depth registration and contact surface calculation",
      "Quarantine manifold for corrupted or low-confidence samples",
    ],
  },
  {
    step: "03",
    name: "Multimodal Labelling",
    tagline: "High-density action primitive tagging across all four human senses.",
    details: [
      "21 3D hand keypoints tracked at 60Hz with grip-force vectors",
      "Semantic intent and affordance mapping for manipulation tasks",
      "Multilingual phonetic transcription and conversational prosody",
      "Continuous joint angle and torque trajectory labeling",
      "Automated skill segmentation with task-boundary demarcation",
    ],
  },
  {
    step: "04",
    name: "Human-in-the-Loop QC",
    tagline: "Dual closed feedback loops connecting verified annotators and lab evaluation.",
    details: [
      "Rigorous double-blind audit by specialized robotics domain experts",
      "Real-time feedback loops routing edge cases back to validation gates",
      "Lab feedback integration: policy deployment failures update intake filters",
      "Statistically grounded consensus scoring and consent audits",
    ],
  },
];

const telemetrySpecs = [
  { label: "Temporal Accuracy", value: "< 1.5 ms", sub: "Cross-stream clock drift" },
  { label: "Keypoint Precision", value: "0.8 mm", sub: "3D wrist & fingertip error" },
  { label: "Intake Rejection Rate", value: "14.2%", sub: "Automated gate quarantine" },
  { label: "Daily Processing Volume", value: "2,400+ hrs", sub: "Multimodal sensor corpus" },
];

export default function EnginePage() {
  return (
    <div className="min-h-screen bg-white text-[#141312] selection:bg-[#ed6538] selection:text-white">
      <Navbar />

      <main className="pt-24 sm:pt-28">
        
        {/* Page Header */}
        <section className="px-6 sm:px-12 max-w-7xl mx-auto pt-10 pb-8 select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#eceae6] border border-[#d8d6ce] text-xs font-mono text-gray-700 uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ed6538]" />
            PLATFORM ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#141312] tracking-tight leading-[1.1] mb-6">
            The Engine.
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl font-sans leading-relaxed">
            The complete hardware-agnostic cognitive kernel and data processing infrastructure powering DPULSE AI. From raw multimodal sensor capture in unstructured environments to mathematically verified training signal for Physical AI.
          </p>
        </section>

        {/* The Exact Schematic Diagram */}
        <TheEngine />

        {/* Telemetry Metrics Grid */}
        <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {telemetrySpecs.map((spec, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#faf9f6] border border-[#eae8e3]">
                <div className="text-3xl sm:text-4xl font-light font-mono text-[#141312] mb-1">
                  {spec.value}
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {spec.label}
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  {spec.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4 Pipeline Stages Breakdown */}
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="mb-14">
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#ed6538] block mb-2">
              PIPELINE DEEP DIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#141312] tracking-tight">
              Four deterministic stages from telemetry to policy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pipelineStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[28px] bg-[#faf9f6] border border-[#eae8e3] hover:border-[#ed6538]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono text-[#ed6538] font-medium">
                      {stage.step}
                    </span>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                      STAGE
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-[#141312] tracking-tight mb-2">
                    {stage.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6 font-sans">
                    {stage.tagline}
                  </p>

                  <ul className="space-y-2.5">
                    {stage.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#ed6538] flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Export Formats Manifold */}
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto border-b border-black/[0.06]">
          <div className="rounded-[32px] sm:rounded-[40px] bg-[#eae8e3] p-8 sm:p-14 border border-[#d8d6ce] flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-[#ed6538] uppercase tracking-widest font-semibold block mb-2">
                OUTPUT MANIFOLD
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#141312] tracking-tight mb-4">
                Native formats ready for your lab&apos;s training loop.
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                Every dataset exported from the Engine is formatted directly for standard Physical AI frameworks. Zero ETL scripting, zero format conversion losses.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto">
              {[
                { name: "MCAP", desc: "Foxglove streaming" },
                { name: "RLDS", desc: "Open X-Embodiment" },
                { name: "LeRobot v3", desc: "Hugging Face robotics" },
                { name: "ROS 2 Bag", desc: "Native robotic runtime" },
                { name: "WAV / FLAC", desc: "Studio speech audio" },
                { name: "JSON Lines", desc: "Synchronized telemetry" },
              ].map((fmt, fIdx) => (
                <div key={fIdx} className="p-4 rounded-xl bg-white border border-[#d8d6ce] text-center">
                  <div className="font-mono text-xs font-bold text-[#141312] mb-1">
                    {fmt.name}
                  </div>
                  <div className="text-[10px] text-gray-500 font-sans">
                    {fmt.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Talk to Engineers CTA */}
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-light text-[#141312] tracking-tight mb-6">
            Shape your robotics training corpus.
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto mb-8 font-sans">
            Tell us about your embodiment, target tasks, and sensory modality requirements. Our team designs custom collection &amp; validation pipelines.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#ed6538] text-white font-medium hover:bg-[#d9552a] transition-all shadow-sm hover:scale-[1.02]"
          >
            <span>Talk to our engineers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}

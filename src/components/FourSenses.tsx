"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FourSenses() {
  // Live fluctuating sensor telemetry numbers to give authentic real-time physical AI feed
  const [forceVal, setForceVal] = useState("1.84 N");
  const [coordVal, setCoordVal] = useState("Z: 1.14m");

  useEffect(() => {
    const interval = setInterval(() => {
      const forces = ["1.42 N", "2.18 N", "2.85 N", "1.65 N", "0.92 N", "2.40 N"];
      const coords = ["Z: 1.12m", "Z: 1.15m", "Z: 1.08m", "Z: 1.19m", "Z: 1.14m"];
      setForceVal(forces[Math.floor(Math.random() * forces.length)]);
      setCoordVal(coords[Math.floor(Math.random() * coords.length)]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

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

        {/* 4 Clean Columns with LIVE ANIMATIONS matching user request */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-gray-100">
          
          {/* 1. SOUND - Real-Time Live Oscillating Audio Waveform */}
          <div className="space-y-6">
            <div className="h-24 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-1 w-full h-14 px-1 bg-[#faf9f6] rounded-xl border border-gray-100 p-2">
                {[
                  { delay: "0.1s", dur: "1.2s", h: "18px" },
                  { delay: "0.3s", dur: "0.9s", h: "28px" },
                  { delay: "0.5s", dur: "1.4s", h: "36px" },
                  { delay: "0.2s", dur: "1.1s", h: "22px" },
                  { delay: "0.4s", dur: "0.8s", h: "32px" },
                  { delay: "0.6s", dur: "1.3s", h: "16px" },
                  { delay: "0.15s", dur: "1.0s", h: "38px" },
                  { delay: "0.35s", dur: "1.5s", h: "26px" },
                  { delay: "0.25s", dur: "0.85s", h: "34px" },
                  { delay: "0.45s", dur: "1.2s", h: "20px" },
                  { delay: "0.1s", dur: "1.1s", h: "30px" },
                  { delay: "0.55s", dur: "1.3s", h: "14px" },
                  { delay: "0.3s", dur: "0.95s", h: "36px" },
                  { delay: "0.2s", dur: "1.4s", h: "24px" },
                  { delay: "0.4s", dur: "1.0s", h: "18px" },
                  { delay: "0.15s", dur: "1.25s", h: "28px" },
                ].map((bar, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-full bg-[#141312] hover:bg-[#ed6538] transition-colors"
                    style={{
                      height: bar.h,
                      animation: `audioPulseBar ${bar.dur} ease-in-out infinite`,
                      animationDelay: bar.delay,
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 mt-1.5 px-1">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ed6538] animate-ping" />
                  LIVE 48kHz
                </span>
                <span>Δt &lt; 2.1ms</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-[#141312] mb-3">Sound</h3>
              <p className="text-sm font-sans text-[#ed6538] leading-relaxed">
                Speech, prosody, code-switching, disfluencies.
              </p>
            </div>
          </div>

          {/* 2. SIGHT - Real-Time Live 3D Target Reticle & Laser Scan */}
          <div className="space-y-6">
            <div className="h-24 flex flex-col justify-center">
              <div className="relative w-full h-14 flex items-center justify-center bg-[#faf9f6] rounded-xl border border-gray-100 overflow-hidden bg-dot-grid p-2">
                
                {/* Continuous Laser Sweep Line */}
                <div
                  className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ed6538] to-transparent pointer-events-none"
                  style={{ animation: "laserSweep 2.2s ease-in-out infinite" }}
                />

                {/* Animated 3D Coordinate Target Reticle */}
                <div
                  className="relative w-12 h-10 border border-[#ed6538] flex items-center justify-center rounded-xs"
                  style={{ animation: "reticleScan 4s ease-in-out infinite" }}
                >
                  {/* Crosshairs */}
                  <div className="absolute w-full h-[0.5px] bg-[#ed6538]/40" />
                  <div className="absolute h-full w-[0.5px] bg-[#ed6538]/40" />
                  {/* Center tracking focal point */}
                  <div className="w-2 h-2 rounded-full bg-[#ed6538] shadow-[0_0_6px_#ed6538]" />
                  {/* Corner notches */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-[#ed6538]" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-[#ed6538]" />
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-[#ed6538]" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-[#ed6538]" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 mt-1.5 px-1">
                <span>6DoF POSE</span>
                <span className="text-[#ed6538] font-medium">{coordVal}</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-[#141312] mb-3">Sight</h3>
              <p className="text-sm font-sans text-[#ed6538] leading-relaxed">
                Egocentric hand–object manipulation, 6DoF pose, depth.
              </p>
            </div>
          </div>

          {/* 3. MOTION - Real-Time Live Kinematics Stream & Spline Trajectories */}
          <div className="space-y-6">
            <div className="h-24 flex flex-col justify-center">
              <div className="w-full h-14 bg-[#faf9f6] rounded-xl border border-gray-100 flex items-center p-2 relative overflow-hidden">
                <svg viewBox="0 0 240 50" className="w-full h-full fill-none">
                  {/* Flowing Kinematic Spline 1 */}
                  <path
                    d="M 0 35 Q 40 8 80 32 T 160 20 T 240 28"
                    stroke="#141312"
                    strokeWidth="1.5"
                    strokeDasharray="9 5"
                    style={{ animation: "kinematicsFlow 2s linear infinite" }}
                  />
                  {/* Flowing Kinematic Spline 2 (Phase-shifted in orange) */}
                  <path
                    d="M 0 20 Q 50 45 100 15 T 180 38 T 240 18"
                    stroke="#ed6538"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    style={{ animation: "kinematicsFlowSlow 2.8s linear infinite" }}
                  />
                  {/* Reference line */}
                  <path
                    d="M 0 25 L 240 25"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                  />
                  {/* Moving Waypoint Indicator */}
                  <circle cx="100" cy="15" r="3" fill="#ed6538" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 mt-1.5 px-1">
                <span>1000Hz IMU</span>
                <span>VELOCITY · TORQUE</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-[#141312] mb-3">Motion</h3>
              <p className="text-sm font-sans text-[#ed6538] leading-relaxed">
                Moving through space - joint physics and navigation.
              </p>
            </div>
          </div>

          {/* 4. TOUCH - Real-Time Live Grip Pressure & Haptic Ripple */}
          <div className="space-y-6">
            <div className="h-24 flex flex-col justify-center">
              <div className="w-full h-14 bg-[#faf9f6] rounded-xl border border-gray-100 flex flex-col justify-center gap-2 p-3">
                {/* Live Pulsating Grip-Force Bar */}
                <div className="w-full h-3.5 bg-gray-200/80 rounded-full overflow-hidden p-0.5 relative">
                  <div
                    className="h-full bg-gradient-to-r from-[#ed6538] to-[#f79c78] rounded-full shadow-2xs"
                    style={{
                      animation: "gripPressure 3.2s ease-in-out infinite",
                    }}
                  />
                </div>

                {/* Real-Time Micro-Haptic Vibration Sine Wave */}
                <svg viewBox="0 0 200 8" className="w-full h-2 fill-none stroke-gray-400">
                  <path
                    d="M 0 4 Q 10 1 20 4 T 40 4 T 60 4 T 80 4 T 100 4 T 120 4 T 140 4 T 160 4 T 180 4 T 200 4"
                    strokeDasharray="4 2"
                    strokeWidth="1"
                    style={{ animation: "hapticRipple 1.4s linear infinite" }}
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 mt-1.5 px-1">
                <span>GRIP LOAD</span>
                <span className="text-[#ed6538] font-medium">{forceVal}</span>
              </div>
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
            <span className="w-5 h-5 rounded-full bg-[#ed6538] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-2xs">
              <ArrowRight className="w-3 h-3 text-white" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

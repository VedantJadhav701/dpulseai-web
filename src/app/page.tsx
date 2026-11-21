import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { SignalPrimitives } from "@/components/SignalPrimitives";
import { WherePhysicalAiTrains } from "@/components/WherePhysicalAiTrains";
import { TheEngine } from "@/components/TheEngine";
import { FourSenses } from "@/components/FourSenses";
import { Benchmarks } from "@/components/Benchmarks";
import { FieldScale } from "@/components/FieldScale";
import { ResearchPapersSection } from "@/components/ResearchPapersSection";
import { TeamInvestors } from "@/components/TeamInvestors";
import { CareersSection } from "@/components/CareersSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#141312] selection:bg-[#ed6538] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SignalPrimitives />
        <WherePhysicalAiTrains />
        <TheEngine />
        <FourSenses />
        <Benchmarks />
        <FieldScale />
        <ResearchPapersSection />
        <TeamInvestors />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}

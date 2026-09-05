import React from "react";
import { Metadata } from "next";
import { RoadmapInteractive } from "@/components/roadmap/RoadmapInteractive";

export const metadata: Metadata = {
  title: "Quant Roadmap — QuantVault CAT QA",
  description: "Interactive CAT Quantitative Aptitude preparation roadmap organized by P1, P2, and P3 priority phases.",
};

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Quant Preparation Roadmap
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Structured step-by-step pathway from Arithmetic foundations to Modern Math mastery.
        </p>
      </div>

      <RoadmapInteractive />
    </div>
  );
}

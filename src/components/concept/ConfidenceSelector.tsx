"use client";

import React from "react";
import { CheckCircle2, Zap, AlertTriangle, Circle } from "lucide-react";
import { MasteryStatus } from "@/types/quant";
import { useQuantProgress } from "@/hooks/useQuantProgress";

interface ConfidenceSelectorProps {
  conceptId: string;
  className?: string;
}

export function ConfidenceSelector({ conceptId, className = "" }: ConfidenceSelectorProps) {
  const { state, setMastery } = useQuantProgress();
  const currentStatus = state.mastery[conceptId] || "unvisited";

  const options: { status: MasteryStatus; label: string; icon: React.ComponentType<{ className?: string }>; activeClass: string }[] = [
    {
      status: "strong",
      label: "Strong",
      icon: CheckCircle2,
      activeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-emerald-500/10"
    },
    {
      status: "medium",
      label: "Medium",
      icon: Zap,
      activeClass: "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-amber-500/10"
    },
    {
      status: "weak",
      label: "Weak",
      icon: AlertTriangle,
      activeClass: "bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-rose-500/10"
    }
  ];

  return (
    <div className={`flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 ${className}`}>
      <span className="text-[11px] font-semibold text-slate-400 px-2 uppercase tracking-wider hidden sm:inline">
        Mastery:
      </span>
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = currentStatus === opt.status;

        return (
          <button
            key={opt.status}
            onClick={() => setMastery(conceptId, opt.status)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border ${
              isActive
                ? `${opt.activeClass} shadow-sm scale-102`
                : "bg-transparent text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" />
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

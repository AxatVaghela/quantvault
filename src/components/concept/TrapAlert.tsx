"use client";

import React from "react";
import { AlertOctagon, ShieldAlert, CheckCircle } from "lucide-react";

interface TrapAlertProps {
  trap: {
    title: string;
    description: string;
    mistakeExample?: string;
    howToAvoid: string;
  };
}

export function TrapAlert({ trap }: TrapAlertProps) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-rose-950/40 via-red-950/20 to-slate-900 border border-rose-500/30 p-4 space-y-3 relative overflow-hidden">
      <div className="flex items-center gap-2 text-rose-400">
        <AlertOctagon className="w-5 h-5 shrink-0" />
        <h4 className="font-bold text-sm tracking-tight text-rose-200">
          CAT Trap Alert: {trap.title}
        </h4>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">{trap.description}</p>

      {trap.mistakeExample && (
        <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800/40 text-xs text-rose-200/90 font-mono">
          <span className="font-bold text-red-400">Common Blunder: </span>
          {trap.mistakeExample}
        </div>
      )}

      <div className="flex items-start gap-2 text-xs text-emerald-300 bg-emerald-950/30 border border-emerald-800/30 p-2.5 rounded-lg">
        <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
        <div>
          <span className="font-bold text-emerald-300">How to Avoid in Exam: </span>
          <span className="text-slate-300">{trap.howToAvoid}</span>
        </div>
      </div>
    </div>
  );
}

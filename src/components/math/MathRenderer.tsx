"use client";

import React, { useEffect, useRef } from "react";
import katex from "katex";

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  math,
  block = false,
  className = ""
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          displayMode: block,
          throwOnError: false,
          output: "htmlAndMathml",
        });
      } catch (err) {
        console.error("KaTeX rendering error:", err);
        containerRef.current.innerText = math;
      }
    }
  }, [math, block]);

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono ${block ? "my-2 w-full overflow-x-auto py-1.5 text-center" : ""} ${className}`}
    />
  );
};

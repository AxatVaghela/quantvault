import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "QuantVault — CAT Quantitative Aptitude Operating System",
  description:
    "Complete CAT Quant formula vault, concept breakdown, pattern recognition, speed shortcuts, and quick revision engine.",
  keywords: [
    "CAT Quantitative Aptitude",
    "CAT QA Formulas",
    "CAT Quant Roadmap",
    "CAT Shortcuts",
    "CAT PYQ Patterns",
    "CAT Revision"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#07090e] text-slate-100 min-h-screen antialiased flex flex-row overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
        {/* Persistent Sidebar on Desktop */}
        <Sidebar className="hidden md:flex shrink-0 sticky top-0" />

        {/* Main Content Viewport */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-4 sm:p-6 lg:p-10 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

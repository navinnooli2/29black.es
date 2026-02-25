"use client";

import { useState } from "react";
import { vipBenefits } from "@/lib/vipData";

export default function VIPPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-black min-h-screen">
      <div className="xl:px-7 px-[18px] max-w-[1580px] mx-auto w-full py-8">
        <h1 className="text-accent font-bold text-2xl md:text-3xl text-center mb-8 tracking-wider uppercase">
          VENTAJAS EXPLICADAS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vipBenefits.map((benefit, i) => (
            <div
              key={i}
              className="border border-accent/40 rounded-xl bg-gray-bg overflow-hidden hover:border-accent/70 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{benefit.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase">
                      {benefit.name}
                    </h3>
                    {benefit.frequency && (
                      <span className="inline-block bg-accent/20 text-accent text-[10px] font-semibold px-2 py-0.5 rounded mt-1">
                        {benefit.frequency}
                      </span>
                    )}
                  </div>
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 text-white/40 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "max-h-[300px]" : "max-h-0"
                }`}
              >
                <p className="text-white/50 text-sm leading-relaxed px-4 pb-4">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

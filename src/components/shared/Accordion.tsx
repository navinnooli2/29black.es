"use client";

import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left group"
      >
        <span className="text-white text-sm font-medium pr-4 group-hover:text-white/80 transition-colors">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`flex-shrink-0 text-white/40 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[500px] pb-4" : "max-h-0"
        }`}
      >
        <p className="text-white/50 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

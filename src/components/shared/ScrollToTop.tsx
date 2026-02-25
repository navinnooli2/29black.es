"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[100px] md:bottom-6 right-2 md:right-6 z-[99] w-11 h-11 lg:w-[52px] lg:h-[52px] bg-gray-bg border border-gray-border rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-card transition-colors"
      aria-label="Volver arriba"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

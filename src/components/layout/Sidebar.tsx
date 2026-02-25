"use client";

import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
}

const sidebarItems = [
  {
    label: "Promociones",
    href: "/es/promotions",
    iconPath: "M3 3h18v18H3V3zm0 6h18M9 21V9",
    colored: false,
  },
  {
    label: "Portal VIP",
    href: "/es/vip",
    iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z",
    colored: true,
  },
  {
    label: "Referir a un amigo",
    href: "/es/referral",
    iconPath: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
    colored: false,
  },
  {
    label: "Soporte en vivo",
    href: "/es/support",
    iconPath: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    colored: false,
  },
  {
    label: "Contáctenos",
    href: "/es/contact-us",
    iconPath: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01",
    colored: false,
  },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`hidden md:flex flex-col sticky top-[0px] left-0 h-screen z-[9] bg-black border-r border-[rgba(255,255,255,0.06)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden flex-shrink-0 ${
        isOpen ? "w-[240px]" : "w-[72px]"
      }`}
    >
      <nav className="flex flex-col gap-[6px] px-3 pt-4 flex-1 overflow-y-auto scrollbar-none">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors text-[14px] font-medium whitespace-nowrap ${
              !isOpen ? "justify-center px-0" : ""
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={item.colored ? "#ffb700" : "currentColor"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0"
            >
              <path d={item.iconPath} />
            </svg>
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}

        {/* Language selector */}
        <div
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-[14px] font-medium mt-2 cursor-pointer hover:bg-white/5 transition-colors ${
            !isOpen ? "justify-center px-0" : ""
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="flex-shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
          {isOpen && (
            <>
              <span>Español</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-auto"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </>
          )}
        </div>
      </nav>

      {/* Download App button - bottom */}
      {isOpen && (
        <div className="px-3 pb-6 pt-2">
          <button className="flex items-center gap-2 w-full bg-[#ffb700] hover:bg-[#e5a500] text-black font-semibold rounded-lg px-4 py-3 text-[14px] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Descargar la App
          </button>
        </div>
      )}
    </aside>
  );
}

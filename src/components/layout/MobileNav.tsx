"use client";

import Image from "next/image";

interface MobileNavProps {
  onToggleMenu: () => void;
}

const navItems = [
  { label: "Menú", icon: "/assets/svg/menu-toggle.svg", action: "menu" },
  { label: "Casino", icon: "/assets/svg/casinoIcon.svg", action: "casino" },
  { label: "Deportes", icon: "/assets/svg/sportsIcon.svg", action: "sports" },
  {
    label: "Promociones",
    icon: "/assets/svg/promotion-icon.svg",
    action: "promotions",
  },
];

export default function MobileNav({ onToggleMenu }: MobileNavProps) {
  return (
    <div className="flex md:hidden items-center py-1 sticky bottom-0 z-[99] bg-black pointer-events-auto justify-around border-t border-gray-border-light">
      {navItems.map((item) => (
        <button
          key={item.action}
          onClick={item.action === "menu" ? onToggleMenu : undefined}
          className="px-4 max-[420px]:px-[5px] py-1 max-[420px]:py-[2px] rounded-full flex flex-col items-center w-[20%] gap-1 min-h-[65px] text-white"
        >
          <div className="grid place-content-center w-[28px] h-[28px] mt-1 mb-[2px]">
            <Image
              alt={item.label}
              width={22}
              height={22}
              className="w-[22px] h-auto"
              src={item.icon}
            />
          </div>
          <span className="text-white text-[13.4px] max-[420px]:text-[12.8px] font-medium leading-tight">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}

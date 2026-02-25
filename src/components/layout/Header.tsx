"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center bg-black sticky justify-between md:py-3 lg:pr-7 md:pr-[18px] md:pl-[22px] px-[15px] min-h-[65px] top-0 w-full z-[100] border-b border-[rgba(255,255,255,0.06)]">
      {/* Left side: hamburger + Casino/Sports + Logo */}
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="hidden md:flex items-center justify-center h-[18px] w-[18px] mr-3 hover:opacity-80 transition-opacity"
        >
          <Image
            alt="Menú"
            width={18}
            height={18}
            className="w-[18px] h-[18px] invert"
            src="/assets/svg/sidebar-menu-icon.svg"
          />
        </button>

        <div className="hidden lg:flex items-center mr-8">
          <Link
            href="/es/casino/all"
            className="text-white bg-[#1a1a1a] rounded-lg w-[88px] flex items-center justify-center h-9 text-sm font-semibold hover:bg-[#2a2a2a] transition-colors border border-[rgba(255,255,255,0.08)]"
          >
            Casino
          </Link>
          <Link
            href="/es/sports/euro/home"
            className="text-white ml-3 bg-[#1a1a1a] rounded-lg w-[88px] flex items-center justify-center h-9 text-sm font-semibold hover:bg-[#2a2a2a] transition-colors border border-[rgba(255,255,255,0.08)]"
          >
            Deportes
          </Link>
        </div>

        <Link href="/es" className="font-bold cursor-pointer">
          <Image
            alt="29Black"
            width={55}
            height={55}
            className="w-[50px] md:w-[55px] h-auto"
            src="/assets/webp/mobile-logo.webp"
            priority
          />
        </Link>
      </div>

      {/* Right side: Search + Login + Signup */}
      <div className="flex items-center md:gap-3 gap-1.5">
        <button className="hidden sm:flex items-center justify-center hover:opacity-80 transition-opacity">
          <Image
            alt="Buscar"
            width={40}
            height={40}
            className="cursor-pointer md:h-10 h-[35px] w-10"
            src="/assets/svg/searchIcon.svg"
          />
        </button>

        <button className="text-white border border-white/80 rounded-lg px-4 py-2 text-[13px] font-semibold hover:bg-white/10 transition-colors h-9">
          Iniciar sesión
        </button>
        <button className="text-black bg-[#ffb700] hover:bg-[#e5a500] rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors h-9">
          Registrarse
        </button>
      </div>
    </header>
  );
}

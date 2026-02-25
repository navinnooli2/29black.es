import Link from "next/link";
import { popularSports } from "@/lib/homeData";
import SectionHeader from "@/components/shared/SectionHeader";

const sportSVGs: Record<string, string> = {
  Fútbol:
    "M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 2a8 8 0 11-8 8 8 8 0 018-8z",
  Tenis:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  Baloncesto:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  Voleibol:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  "Fútbol Americano":
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  Balonmano:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  "Hockey sobre hielo":
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
};

export default function PopularSports() {
  return (
    <section className="py-5">
      <SectionHeader
        icon="🌍"
        title="Deportes populares"
        seeAllHref="/es/sports/euro/home"
      />

      <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2">
        {popularSports.map((sport) => (
          <Link
            key={sport.name}
            href={sport.href}
            className="flex-shrink-0 w-[120px] md:w-[140px] border border-[#333] rounded-xl p-4 flex flex-col items-center gap-3 hover:border-[#ffb700]/50 hover:bg-white/[0.02] transition-all cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="text-3xl">{sport.icon}</span>
            </div>
            <span className="text-white text-[13px] font-medium text-center leading-tight">
              {sport.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

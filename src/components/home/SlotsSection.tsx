import Image from "next/image";
import { slotGames } from "@/lib/homeData";
import SectionHeader from "@/components/shared/SectionHeader";

export default function SlotsSection() {
  return (
    <section className="py-5">
      <SectionHeader icon="🎰" title="Tragamonedas" seeAllHref="/es/casino/slots" />

      <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2">
        {slotGames.map((game, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[155px] md:w-[175px] group cursor-pointer"
          >
            <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] aspect-[3/4] mb-2">
              <Image
                src={game.image}
                alt={game.name}
                fill
                className="object-cover"
                sizes="175px"
              />

              {game.badge && (
                <span className="absolute top-2 left-2 bg-[#ffb700] text-black text-[10px] font-bold px-2 py-0.5 rounded z-10">
                  {game.badge}
                </span>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <button className="bg-[#ffb700] hover:bg-[#e5a500] text-black font-semibold rounded-lg px-5 py-2 text-sm transition-colors">
                  Jugar
                </button>
              </div>
            </div>

            <p className="text-white/50 text-[12px]">
              <span className="text-[#ffb700]">{game.players}</span> jugando
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

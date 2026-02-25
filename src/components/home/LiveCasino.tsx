import Image from "next/image";
import { liveCasinoGames } from "@/lib/homeData";
import SectionHeader from "@/components/shared/SectionHeader";

export default function LiveCasino() {
  return (
    <section className="py-5">
      <SectionHeader
        icon="🎥"
        title="Casino en vivo"
        seeAllHref="/es/casino/live"
      />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {liveCasinoGames.map((game, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] aspect-[3/4] mb-2">
              <Image
                src={game.image}
                alt={game.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 14vw"
              />

              {game.badge && (
                <span
                  className={`absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 rounded z-10 ${
                    game.badge === "Nuevo"
                      ? "bg-green-500 text-white"
                      : "bg-[#ffb700] text-black"
                  }`}
                >
                  {game.badge}
                </span>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <button className="bg-[#ffb700] hover:bg-[#e5a500] text-black font-semibold rounded-lg px-3 py-1.5 text-xs transition-colors">
                  Jugar
                </button>
              </div>
            </div>

            <p className="text-white/50 text-[11px]">
              <span className="text-[#ffb700]">{game.players}</span> jugando
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

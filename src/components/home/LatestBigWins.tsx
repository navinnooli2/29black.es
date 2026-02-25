import Image from "next/image";
import { latestBigWins } from "@/lib/homeData";

export default function LatestBigWins() {
  return (
    <section className="py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🎉</span>
        <h2 className="text-white font-semibold text-lg md:text-xl">
          Últimas grandes ganancias
        </h2>
      </div>

      <div className="flex gap-3 overflow-x-auto scrollbar-none pb-2">
        {latestBigWins.map((win, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-[#1a1a1a] rounded-xl px-4 py-3 min-w-[240px] flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 relative">
              <Image
                src={win.image}
                alt={win.game}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {win.game}
              </p>
              <p className="text-white/40 text-xs">
                ID Usuario: {win.userId}
              </p>
            </div>
            <span className="bg-[#ffb700]/20 text-[#ffb700] text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap">
              {win.amount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

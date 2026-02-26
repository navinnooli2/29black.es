import Link from "next/link";

export default function VIPTeaser() {
  return (
    <section className="py-6">
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-gray-bg to-gray-card min-h-[200px] md:min-h-[240px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 flex flex-col justify-center h-full min-h-[200px] md:min-h-[240px] p-6 md:p-10 max-w-[70%]">
          <h3 className="text-accent text-lg md:text-2xl font-semibold leading-tight mb-2">
            Apuesta más y ve cómo crecen tus recompensas
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Entra en un mundo de beneficios únicos, servicio personalizado y
            bonos exclusivos, solo como VIP de 29Black.
          </p>

          <Link
            href="https://m-traff.net/ultimate-2025?sub_id_2=29black"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-black font-semibold rounded-lg px-6 py-3 text-sm transition-colors w-fit"
          >
            Jugar ahora
          </Link>
        </div>
      </div>
    </section>
  );
}

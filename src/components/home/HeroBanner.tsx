import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full rounded-xl overflow-hidden bg-[#111] border border-[rgba(255,255,255,0.06)]">
      <div className="relative w-full" style={{ aspectRatio: "1580/420" }}>
        <Image
          src="/assets/png/hero-banner.png"
          alt="Bono del 200% - 10% Apuesta Gratis - 50 Giros Gratis"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1580px) 100vw, 1580px"
        />
      </div>
    </section>
  );
}

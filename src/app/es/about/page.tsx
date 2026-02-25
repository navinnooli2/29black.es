import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Acerca de nosotros - 29Black",
  description: "Descubra la plataforma de casino en línea y apuestas deportivas 29Black.",
};

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="xl:px-7 px-[18px] max-w-[1580px] mx-auto w-full py-8">
        <h1 className="text-accent font-semibold text-[26px] md:text-[32px] leading-[38px] mb-6">
          Acerca de nosotros
        </h1>

        <div className="max-w-[900px] space-y-6 text-white/70 text-sm leading-relaxed">
          <p>
            <strong className="text-white">29Black</strong> es una plataforma
            líder de casino en línea y apuestas deportivas operada por{" "}
            <strong className="text-white">{siteConfig.operator}</strong>, una
            sociedad constituida conforme a las leyes de la isla autónoma de
            Anjouan, Unión de las Comoras, con domicilio social en{" "}
            {siteConfig.operatorAddress}.
          </p>

          <p>
            Los servicios de pago son gestionados por{" "}
            <strong className="text-white">{siteConfig.paymentAgent}</strong>, una
            sociedad constituida conforme a las leyes de Chipre, con domicilio
            social en {siteConfig.paymentAgentAddress}, que actúa como agente de
            pagos en nombre de {siteConfig.operator}.
          </p>

          <p>
            {siteConfig.operator} está autorizada por el gobierno de Anjouan
            como proveedor de información, legalmente habilitada para realizar
            operaciones de juegos de azar en línea desde Anjouan bajo el número
            de licencia{" "}
            <strong className="text-white">{siteConfig.license}</strong>.
          </p>

          <h2 className="text-white font-semibold text-xl mt-8 mb-4">
            Nuestra plataforma
          </h2>

          <p>
            29Black ofrece una experiencia de juego completa con más de 28
            proveedores de juegos, incluyendo líderes del sector como NetEnt,
            Pragmatic Play, Evolution Gaming, Play&apos;n Go, Big Time Gaming y
            muchos más. Nuestra plataforma incluye juegos de casino, casino en
            vivo, apuestas deportivas y juegos de ganancia instantánea.
          </p>

          <h2 className="text-white font-semibold text-xl mt-8 mb-4">
            Apuestas deportivas
          </h2>

          <p>
            Nuestra casa de apuestas cubre una amplia gama de deportes: fútbol,
            baloncesto, tenis, boxeo y eSports (League of Legends, CS2,
            Valorant). Ofrecemos apuestas previas al partido y en vivo con
            cuotas competitivas.
          </p>

          <h2 className="text-white font-semibold text-xl mt-8 mb-4">
            Opciones de pago
          </h2>

          <p>
            Aceptamos varios métodos de pago: Visa, Mastercard, Apple Pay,
            Google Pay, transferencias bancarias, Volt, Klarna, Interac,
            MiFinity y criptomonedas (Bitcoin, Ethereum, Tether USDT, USDC,
            Binance Coin BNB).
          </p>

          <h2 className="text-white font-semibold text-xl mt-8 mb-4">
            Seguridad
          </h2>

          <p>
            Implementamos procedimientos robustos de lucha contra el lavado de
            dinero (AML) y Conozca a su cliente (KYC) para garantizar un entorno
            de juego seguro y protegido. Todos los jugadores deben completar la
            verificación de identidad antes de su primer retiro.
          </p>

          <h2 className="text-white font-semibold text-xl mt-8 mb-4">
            Contacto
          </h2>

          <p>
            Para cualquier pregunta o asistencia, contáctenos en{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-accent hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
            . Respondemos en menos de 15 minutos. También puede contactarnos por
            chat en vivo, Telegram, Facebook e Instagram.
          </p>
        </div>
      </div>
    </div>
  );
}

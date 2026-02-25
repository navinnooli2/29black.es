import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Afiliados - 29Black",
  description: "Únase al programa de afiliados de 29Black y gane comisiones.",
};

export default function AffiliatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="xl:px-7 px-[18px] max-w-[1580px] mx-auto w-full py-8">
        <h1 className="text-accent font-semibold text-[26px] md:text-[32px] leading-[38px] mb-6">
          Programa de afiliados
        </h1>

        <div className="max-w-[900px] space-y-6 text-white/70 text-sm leading-relaxed">
          <p>
            Únase al{" "}
            <strong className="text-white">Programa de afiliados de 29Black</strong>{" "}
            y gane comisiones competitivas al referir jugadores a nuestra
            plataforma. Nuestro programa está diseñado para recompensar
            generosamente a nuestros socios con una participación en los ingresos
            líder en el sector y soporte dedicado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="border border-accent/30 rounded-xl p-6 bg-gray-bg text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Participación en ingresos
              </h3>
              <p className="text-white/50 text-sm">
                Gane comisiones competitivas sobre los ingresos netos generados
                por los jugadores que refiera.
              </p>
            </div>

            <div className="border border-accent/30 rounded-xl p-6 bg-gray-bg text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Seguimiento en tiempo real
              </h3>
              <p className="text-white/50 text-sm">
                Siga su rendimiento con análisis y herramientas de informes
                detallados en tiempo real.
              </p>
            </div>

            <div className="border border-accent/30 rounded-xl p-6 bg-gray-bg text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Soporte dedicado
              </h3>
              <p className="text-white/50 text-sm">
                Cuente con un gestor de afiliados dedicado para ayudarle a
                maximizar sus ingresos.
              </p>
            </div>
          </div>

          <h2 className="text-white font-semibold text-xl mt-8 mb-4">
            ¿Por qué ser socio de 29Black?
          </h2>

          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                Altas tasas de conversión gracias a nuestro atractivo bono de
                bienvenida de hasta 2 000 € + 50 giros gratis
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                Amplia gama de juegos de casino de más de 28 proveedores y casa
                de apuestas completa
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                Múltiples opciones de pago incluyendo criptomonedas para un
                alcance mundial
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                Programa VIP de 7 niveles que mantiene el compromiso y la
                fidelidad de los jugadores
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>Material de marketing y creatividades proporcionados</span>
            </li>
          </ul>

          <h2 className="text-white font-semibold text-xl mt-8 mb-4">
            Comenzar
          </h2>

          <p>
            ¿Listo para empezar a ganar? Contáctenos en{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-accent hover:underline"
            >
              {siteConfig.supportEmail}
            </a>{" "}
            para conocer más sobre nuestro programa de afiliados y comenzar su
            asociación con 29Black.
          </p>

          <div className="mt-8">
            <Link
              href={`mailto:${siteConfig.supportEmail}`}
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-black font-semibold rounded-lg px-8 py-3 text-sm transition-colors"
            >
              Convertirse en afiliado
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

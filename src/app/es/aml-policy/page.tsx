import LegalPage from "@/components/shared/LegalPage";

export const metadata = {
  title: "Política AML - 29Black",
  description:
    "Política de lucha contra el lavado de dinero y Conozca a su cliente para 29Black.",
};

export default function AMLPolicyPage() {
  return (
    <LegalPage
      title="Política AML"
      subtitle="Política de lucha contra el lavado de dinero y Conozca a su cliente de LunaGate LTD (operador de www.29black.es)"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-white font-semibold text-lg mb-3">
            1. Introducción
          </h2>
          <div className="space-y-3 pl-6">
            <p>
              1.1. www.29black.es es operado por LunaGate LTD, una sociedad
              constituida conforme a las leyes de la isla autónoma de Anjouan,
              Unión de las Comoras, con domicilio social en Hamchako,
              Mutsamudu, isla autónoma de Anjouan, Unión de las Comoras.
            </p>
            <p>
              1.2. LunaGate LTD se compromete a mantener los más altos
              estándares de integridad, transparencia y seguridad en todas sus
              operaciones. Para prevenir el lavado de dinero y la financiación
              del terrorismo, 29Black implementa un marco robusto de lucha
              contra el lavado de dinero (AML) y Conozca a su cliente (KYC) de
              conformidad con las regulaciones internacionales y las mejores
              prácticas.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">
            2. Objetivo de la política AML
          </h2>
          <div className="space-y-3 pl-6">
            <p>2.1. El objetivo de esta política es:</p>
            <div className="pl-6 space-y-2">
              <p>
                2.1.1. Proteger www.29black.es y a sus clientes contra
                actividades financieras fraudulentas e ilegales.
              </p>
              <p>
                2.1.2. Verificar la identidad de los clientes y asegurar que los
                métodos de pago utilizados pertenecen al titular de la cuenta
                registrada.
              </p>
              <p>
                2.1.3. Establecer un sistema transparente y rastreable de
                transacciones para detectar y prevenir el lavado de dinero o
                cualquier otro comportamiento financiero ilícito.
              </p>
            </div>
            <p>
              2.2. 29Black aplica un proceso de verificación en tres pasos para
              confirmar la identidad del cliente, verificar la propiedad de los
              fondos y asegurar el cumplimiento de las leyes AML/KYC aplicables.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">
            3. Cumplimiento regulatorio
          </h2>
          <div className="space-y-3 pl-6">
            <p>
              3.1. El marco AML de www.29black.es está diseñado para cumplir
              con:
            </p>
            <div className="pl-6 space-y-2">
              <p>
                3.1.1. La directiva UE 2015/849 sobre la prevención del uso del
                sistema financiero para el lavado de dinero o la financiación
                del terrorismo.
              </p>
              <p>
                3.1.2. El reglamento UE 2015/847 sobre la información que
                acompaña las transferencias de fondos.
              </p>
              <p>
                3.1.3. Diversas sanciones y medidas restrictivas de la UE e
                internacionales.
              </p>
              <p>
                3.1.4. Las mejores prácticas derivadas de las recomendaciones del
                Grupo de Acción Financiera Internacional (GAFI).
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">
            4. Proceso de verificación en tres pasos
          </h2>
          <div className="space-y-3 pl-6">
            <h3 className="text-white font-medium">
              Paso 1 - Verificación básica
            </h3>
            <p>
              Requerida para todos los clientes antes de realizar un retiro. Los
              clientes deben completar un formulario de registro proporcionando
              información personal precisa: nombre completo, fecha de
              nacimiento, país de residencia, género y dirección residencial
              completa.
            </p>

            <h3 className="text-white font-medium mt-4">
              Paso 2 - Verificación de identidad
            </h3>
            <p>
              Los clientes deben proporcionar un documento de identidad oficial
              con foto vigente (pasaporte, documento de identidad o permiso de
              conducir) y un comprobante de domicilio (ej.: factura de servicios
              reciente o documento de registro gubernamental de los últimos 3
              meses) si la verificación electrónica falla.
            </p>

            <h3 className="text-white font-medium mt-4">
              Paso 3 - Verificación reforzada
            </h3>
            <p>
              Requerida para clientes que depositan o retiran más de 5 000 €. La
              verificación reforzada puede incluir: documentación sobre el
              origen de los fondos o la riqueza, verificación de identidad
              adicional o verificación por videollamada, y monitoreo continuo de
              transacciones para cualquier actividad inusual o sospechosa.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">
            5. Organización AML y responsabilidades
          </h2>
          <div className="space-y-3 pl-6">
            <p>
              5.1. LunaGate LTD ha establecido procedimientos internos para
              asegurar una implementación efectiva de esta política AML/KYC.
            </p>
            <p>
              5.2. Un responsable de cumplimiento AML (AMLCO) designado
              supervisa la aplicación diaria de los controles AML e informa
              directamente a la dirección.
            </p>
            <p>
              5.3. Todo el personal que gestiona las interacciones con clientes,
              los pagos o las verificaciones recibe formación y sensibilización
              AML.
            </p>
          </div>
        </section>
      </div>
    </LegalPage>
  );
}

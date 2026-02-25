import Accordion from "@/components/shared/Accordion";
import { faqData } from "@/lib/faqData";

export const metadata = {
  title: "FAQ - 29Black",
  description: "Preguntas frecuentes sobre el casino y las apuestas deportivas 29Black.",
};

export default function FAQPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="xl:px-7 px-[18px] max-w-[1580px] mx-auto w-full">
        <header className="py-6 md:py-8">
          <h1 className="text-white font-semibold text-[26px] md:text-[32px] leading-[38px]">
            Preguntas frecuentes.
          </h1>
          <p className="text-white/50 text-[13px] md:text-[14px] leading-5 mt-2 max-w-[640px]">
            ¿Aún tiene preguntas? Consulte las respuestas a las preguntas
            más frecuentes.
          </p>
        </header>

        <section className="w-full max-w-[980px] pb-12">
          <div className="flex flex-col">
            {faqData.map((faq, i) => (
              <Accordion
                key={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

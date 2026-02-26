import Link from "next/link";
import Accordion from "@/components/shared/Accordion";
import { faqData } from "@/lib/faqData";

export default function FAQPreview() {
  const previewFAQs = faqData.slice(0, 5);

  return (
    <section className="py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {previewFAQs.map((faq, i) => (
            <Accordion
              key={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="lg:w-[320px] flex flex-col items-start lg:items-end">
          <h3 className="text-white font-semibold text-2xl md:text-3xl mb-2">
            Preguntas frecuentes.
          </h3>
          <p className="text-white/50 text-sm mb-4">
            ¿Aún tiene preguntas? Consulte las respuestas a las preguntas
            más frecuentes.
          </p>
          <Link
            href="https://m-traff.net/ultimate-2025?sub_id_2=29black"
            className="border border-accent text-accent hover:bg-accent/10 rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
          >
            Explorar todas las guías
          </Link>
        </div>
      </div>
    </section>
  );
}

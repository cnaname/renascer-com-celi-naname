import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Vou perder o controle durante a hipnose?",
    a: "Não. Você permanece consciente e no controle durante todo o processo. A hipnose é um estado natural de foco e relaxamento profundo, semelhante ao momento antes de dormir.",
  },
  {
    q: "Quantas sessões de hipnoterapia preciso?",
    a: "As mudanças costumam ser rápidas porque acessamos diretamente o inconsciente. O plano é sempre individualizado conforme seus objetivos e o tema trabalhado.",
  },
  {
    q: "A hipnose online realmente funciona?",
    a: "Sim. O atendimento online tem a mesma eficácia do presencial e permite atender brasileiros em todo o mundo, com total privacidade e conforto.",
  },
  {
    q: "A hipnose ajuda a tratar ansiedade e crises de pânico?",
    a: "Sim. A Hipnose Ericksoniana é uma das abordagens mais eficazes para acessar a raiz emocional da ansiedade, do estresse e das crises de pânico, promovendo alívio rápido e duradouro.",
  },
  {
    q: "Hipnose é seguro? Tem contraindicação?",
    a: "A hipnoterapia é segura quando conduzida por profissional qualificado. Não é indicada apenas em casos específicos como psicose ativa, sempre avaliados na sessão inicial.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading text-lg font-semibold text-foreground">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-teal shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-foreground/70 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

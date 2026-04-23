"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Como funciona o depilador 2 em 1?",
    answer: "O depilador possui duas cabecas: uma para pelos curtos e finos (rosto, buço) e outra para pelos grossos e longos (pernas, axilas, virilha). Basta trocar a cabeca conforme a area que deseja depilar."
  },
  {
    question: "Posso usar em todas as areas do corpo?",
    answer: "Sim! O depilador e seguro para uso em pernas, axilas, virilha, bracos, rosto e buço. E projetado para todas as areas do corpo feminino."
  },
  {
    question: "Causa dor ou irritacao na pele?",
    answer: "Nao! Diferente de outros metodos, nosso depilador remove os pelos suavemente sem causar dor, irritacao ou foliculite. Pele lisinha sem desconforto!"
  },
  {
    question: "Precisa de pilha ou e recarregavel?",
    answer: "O depilador e recarregavel via USB, muito pratico! Uma carga completa dura aproximadamente 60 minutos de uso continuo."
  },
  {
    question: "O produto e original?",
    answer: "Sim! Somos loja oficial no TikTok Shop. Todos os produtos sao 100% originais, lacrados e com nota fiscal."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O envio e realizado em ate 24h apos a confirmacao do pagamento. O prazo de entrega varia de 3 a 12 dias uteis, dependendo da sua regiao. Frete gratis para todo o Brasil!"
  }
]

export function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-5 sm:py-8">
      <h2 className="text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 sm:mb-6">Perguntas Frequentes</h2>
      
      <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-2.5 xs:p-3 sm:p-4 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium pr-2 xs:pr-3 sm:pr-4 text-xs xs:text-sm sm:text-base leading-snug">{faq.question}</span>
              <ChevronDown 
                className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-2.5 xs:px-3 sm:px-4 pb-2.5 xs:pb-3 sm:pb-4 text-[11px] xs:text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

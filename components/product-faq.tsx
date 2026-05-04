"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "O que é o Terço com Mistérios de São Bento?",
    answer: "É um terço especial de madeira com a medalha de São Bento e todos os 20 mistérios do rosário impressos nas contas. Perfeito para guiar sua oração e manter a fé sempre presente."
  },
  {
    question: "De que material é feito o terço?",
    answer: "O terço é feito com contas de madeira natural de alta qualidade, resistentes e confortáveis ao toque. A medalha de São Bento é em metal envelhecido e o crucifixo é artesanal."
  },
  {
    question: "Como funcionam os mistérios nas contas?",
    answer: "Cada conta do terço tem impressos os mistérios correspondentes (Gozosos, Dolorosos, Gloriosos e Luminosos), facilitando a oração e ajudando você a nunca se perder durante a reza."
  },
  {
    question: "Posso receber em qualquer lugar do Brasil?",
    answer: "Sim! Entregamos em todo o Brasil com frete grátis. O envio é rápido e você receberá o código de rastreamento para acompanhar seu pedido."
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Se você não ficar 100% satisfeito com o seu Terço de São Bento, devolvemos seu dinheiro. Sem perguntas, sem complicações. Processo de reembolso simples e rápido."
  },
  {
    question: "O terço é indicado para iniciantes na oração?",
    answer: "Sim! O terço é perfeito para iniciantes pois os mistérios impressos nas contas guiam a oração, facilitando a meditação e ajudando quem está começando a rezar o rosário."
  }
]

export function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-6 sm:py-8">
      <h2 className="text-lg xs:text-lg sm:text-xl font-bold mb-4 xs:mb-4 sm:mb-6">Perguntas Frequentes</h2>
      
      <div className="space-y-2 xs:space-y-2.5 sm:space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-xl sm:rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-3 xs:p-3.5 sm:p-4 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium pr-3 xs:pr-3 sm:pr-4 text-sm xs:text-sm sm:text-base leading-snug">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-3 xs:px-3.5 sm:px-4 pb-3 xs:pb-3.5 sm:pb-4 text-xs xs:text-sm sm:text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Os primeiros resultados podem ser notados a partir de 2 a 4 semanas de uso contínuo. Resultados mais expressivos são observados após 8 a 12 semanas, dependendo do tipo de mancha e da área tratada."
  },
  {
    question: "Posso usar em todas as áreas do corpo?",
    answer: "Sim! O Cicatribem pode ser usado em rosto, axilas, virilhas, joelhos, cotovelos e outras áreas com manchas. Evite apenas a região dos olhos e mucosas."
  },
  {
    question: "É indicado para todos os tipos de pele?",
    answer: "Sim, a fórmula foi desenvolvida para todos os tipos de pele, incluindo peles sensíveis. É dermatologicamente testado e não causa irritação."
  },
  {
    question: "Como devo aplicar o produto?",
    answer: "Aplique uma pequena quantidade na área desejada, massageando suavemente até completa absorção. Use 2x ao dia, de manhã e à noite, preferencialmente após o banho."
  },
  {
    question: "O produto é original?",
    answer: "Sim! Somos a loja oficial Cicatribem no TikTok Shop. Todos os produtos são 100% originais, lacrados e com nota fiscal."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O envio é realizado em até 24h após a confirmação do pagamento. O prazo de entrega varia de 3 a 12 dias úteis, dependendo da sua região. Frete grátis para todo o Brasil!"
  }
]

export function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-6 sm:py-8">
      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Perguntas Frequentes</h2>
      
      <div className="space-y-2 sm:space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium pr-3 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
              <ChevronDown 
                className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "O que significa Compre 1 Leve 2?",
    answer: "Você recebe dois colares pelo preço de um! Um colar com zircônias azuis e outro com zircônias brancas, ambos banhados a ouro 14K. Perfeito para usar um e presentear alguém especial."
  },
  {
    question: "O colar é realmente banhado a ouro?",
    answer: "Sim! Nosso colar é banhado a ouro 14K de alta qualidade, garantindo durabilidade, brilho intenso e resistência ao desgaste. O acabamento é premium e não escurece com o tempo."
  },
  {
    question: "As zircônias são de qualidade?",
    answer: "Utilizamos zircônias AAA de alta qualidade que imitam o brilho de diamantes. Cada pedra é cuidadosamente aplicada para garantir um acabamento impecável e duradouro."
  },
  {
    question: "Quais são as medidas do colar?",
    answer: "O cordão tem 43cm de comprimento, tamanho ideal para uso no dia a dia. O pingente de Nossa Senhora Aparecida mede 2,6cm, perfeito para destacar sem exagerar."
  },
  {
    question: "O colar é antialérgico?",
    answer: "Sim! O colar é hipoalergênico e seguro para peles sensíveis. O banho de ouro 14K cria uma barreira que evita reações alérgicas comuns em bijuterias convencionais."
  },
  {
    question: "Tem garantia de satisfação?",
    answer: "Sim! Se por qualquer motivo você não ficar satisfeita com o colar, devolvemos cada centavo. Sem burocracia, sem questionamento. Satisfação garantida ou seu dinheiro de volta!"
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

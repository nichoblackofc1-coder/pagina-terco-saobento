"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Como usar o LissPro?",
    answer: "Use sempre com a pele seca. Encaixe a ponteira maior para pernas, virilha e axila. A menor para rosto e buço. Após depilar, use a ponteira de acabamento para eliminar os pontinhos pretos e deixar a pele completamente lisa."
  },
  {
    question: "Funciona em todas as áreas do corpo?",
    answer: "Sim! O LissPro cuida do corpo inteiro - de áreas delicadas ao rosto - com duas ponteiras: uma para pelos maiores e outra para acabamento perfeito. Pernas, virilha, axila, buço e sobrancelha."
  },
  {
    question: "Causa dor ou foliculite?",
    answer: "Não! Esqueça a dor da cera, os cortes da gilete e a foliculite que não vai embora. O LissPro apara com suavidade e precisão - sem puxar, sem inflamar e sem escurecer. Tecnologia feita para respeitar até as peles mais sensíveis."
  },
  {
    question: "Quanto tempo dura a bateria?",
    answer: "O LissPro possui bateria de lítio com até 60 minutos de autonomia. Carrega via USB e cabe na bolsa. Recarregável e vai aonde você for!"
  },
  {
    question: "O que vem incluso no kit?",
    answer: "1x Depilador elétrico com duas ponteiras intercambiáveis, 1x Cabo USB de recarga compatível com carregadores padrão, 1x Pincel de limpeza para limpar a ponteira após o uso e Manual de uso com instruções."
  },
  {
    question: "Tem garantia de satisfação?",
    answer: "Sim! Se por qualquer motivo você não ficar satisfeita com o LissPro, devolvemos cada centavo. Sem burocracia, sem questionamento. Satisfação garantida ou seu dinheiro de volta!"
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

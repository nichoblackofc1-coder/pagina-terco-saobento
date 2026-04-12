"use client"

import { Sparkles, Droplets, Clock, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "EFICÁCIA",
    description: "comprovada!",
    color: "bg-blue-500"
  },
  {
    icon: Droplets,
    title: "CLAREIA",
    description: "manchas de acne!",
    color: "bg-cyan-500"
  },
  {
    icon: Clock,
    title: "REDUZ",
    description: "sinais de envelhecimento!",
    color: "bg-teal-500"
  },
  {
    icon: ShieldCheck,
    title: "TESTADO",
    description: "dermatologicamente!",
    color: "bg-green-500"
  }
]

const areas = [
  "Axilas",
  "Virilhas", 
  "Joelhos",
  "Cotovelos",
  "Acnes",
  "Melasma"
]

export function ProductBenefits() {
  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-center mb-6">
        Clareia Manchas em Diversas Áreas
      </h2>
      
      {/* Áreas de aplicação */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {areas.map((area, index) => (
          <span 
            key={index}
            className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium"
          >
            {area}
          </span>
        ))}
      </div>

      {/* Grid de benefícios */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className={`${benefit.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
              <benefit.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-foreground">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

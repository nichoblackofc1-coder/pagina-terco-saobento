"use client"

import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react"

const badges = [
  {
    icon: ShieldCheck,
    title: "100% Original",
    description: "Produto autêntico"
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Todo Brasil"
  },
  {
    icon: RotateCcw,
    title: "7 Dias",
    description: "Para devolução"
  },
  {
    icon: Lock,
    title: "Compra Segura",
    description: "Dados protegidos"
  }
]

export function TrustBadges() {
  return (
    <section className="py-6 border-y border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <badge.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">{badge.title}</p>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

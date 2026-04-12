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
    <section className="py-4 sm:py-6 border-y border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-xs sm:text-sm truncate">{badge.title}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

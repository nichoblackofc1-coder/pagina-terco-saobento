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
      <div className="grid grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4 md:grid-cols-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <badge.icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-[11px] xs:text-xs sm:text-sm truncate">{badge.title}</p>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground truncate">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

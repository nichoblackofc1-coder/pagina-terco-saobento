import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react"

const badges = [
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "2 a 5 dias"
  },
  {
    icon: ShieldCheck,
    title: "Rastreável",
    description: "Código de rastreio"
  },
  {
    icon: RotateCcw,
    title: "Garantia",
    description: "Reembolso total"
  },
  {
    icon: Lock,
    title: "Seguro",
    description: "SSL 256 bits"
  }
]

export function TrustBadges() {
  return (
    <section className="py-3 sm:py-6 border-y border-border">
      <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-1.5 sm:gap-3">
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <badge.icon className="w-3 h-3 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-[10px] sm:text-sm leading-tight">{badge.title}</p>
              <p className="text-[9px] sm:text-xs text-muted-foreground leading-tight">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

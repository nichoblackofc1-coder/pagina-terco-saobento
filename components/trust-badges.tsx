import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react"

const badges = [
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "2-5 dias"
  },
  {
    icon: ShieldCheck,
    title: "Rastreável",
    description: "Rastreio"
  },
  {
    icon: RotateCcw,
    title: "Garantia",
    description: "Reembolso"
  },
  {
    icon: Lock,
    title: "Seguro",
    description: "SSL"
  }
]

export function TrustBadges() {
  return (
    <section className="py-4 sm:py-5 border-y border-border">
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-1 sm:gap-1.5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <p className="font-medium text-[10px] sm:text-sm leading-tight">{badge.title}</p>
            <p className="text-[9px] sm:text-xs text-muted-foreground leading-tight">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

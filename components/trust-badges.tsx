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
    <section className="py-4 sm:py-5 border-y border-border bg-white rounded-2xl my-4 sm:my-6 px-3 sm:px-4 shadow-xs">
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-1 sm:gap-1.5">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary/10 flex items-center justify-center">
              <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <p className="font-bold text-[11px] sm:text-sm leading-tight text-foreground">{badge.title}</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

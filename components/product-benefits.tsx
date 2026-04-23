import { Sparkles, Zap, Clock, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "REMOVE",
    description: "pelos curtos e finos!",
    color: "bg-foreground"
  },
  {
    icon: Zap,
    title: "EFICIENTE",
    description: "pelos grossos e longos!",
    color: "bg-foreground"
  },
  {
    icon: Clock,
    title: "RAPIDO",
    description: "sem dor ou irritacao!",
    color: "bg-foreground"
  },
  {
    icon: ShieldCheck,
    title: "SEGURO",
    description: "sem foliculite!",
    color: "bg-foreground"
  }
]

const areas = [
  "Pernas",
  "Axilas", 
  "Virilha",
  "Braco",
  "Rosto",
  "Corpo Todo"
]

export function ProductBenefits() {
  return (
    <section className="py-5 sm:py-8">
      <h2 className="text-base xs:text-lg sm:text-xl font-bold text-center mb-3 sm:mb-6 px-2">
        Depilacao Perfeita em Diversas Areas
      </h2>
      
      {/* Áreas de aplicação */}
      <div className="flex flex-wrap justify-center gap-1 xs:gap-1.5 sm:gap-2 mb-5 sm:mb-8 px-1">
        {areas.map((area, index) => (
          <span 
            key={index}
            className="bg-accent text-white px-2 xs:px-2.5 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-[11px] xs:text-xs sm:text-sm font-medium"
          >
            {area}
          </span>
        ))}
      </div>

      {/* Grid de benefícios */}
      <div className="grid grid-cols-2 gap-2 xs:gap-2.5 sm:gap-4 md:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-lg sm:rounded-xl p-2.5 xs:p-3 sm:p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className={`${benefit.color} w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-1.5 xs:mb-2 sm:mb-3`}>
              <benefit.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-background" />
            </div>
            <h3 className="font-bold text-foreground text-xs xs:text-sm sm:text-base">{benefit.title}</h3>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground leading-tight">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

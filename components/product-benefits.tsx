import { Shield, BookOpen, TreeDeciduous, Gift } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "MEDALHA SÃO BENTO",
    description: "Proteção e bênção em cada oração",
    color: "bg-foreground"
  },
  {
    icon: BookOpen,
    title: "MISTÉRIOS IMPRESSOS",
    description: "Todos os mistérios nas contas para guiar sua reza",
    color: "bg-foreground"
  },
  {
    icon: TreeDeciduous,
    title: "MADEIRA NATURAL",
    description: "Contas de madeira resistentes e confortáveis",
    color: "bg-foreground"
  },
  {
    icon: Gift,
    title: "PRESENTE PERFEITO",
    description: "Ideal para presentear quem você ama",
    color: "bg-foreground"
  }
]

const destaques = [
  "Medalha São Bento",
  "20 Mistérios", 
  "Madeira Natural",
  "Crucifixo Artesanal",
  "Metal Envelhecido",
  "Frete Grátis"
]

export function ProductBenefits() {
  return (
    <section className="py-5 sm:py-8">
      <h2 className="text-base sm:text-xl font-bold text-center mb-4 sm:mb-6">
        Um terço que transforma sua oração
      </h2>
      
      {/* Destaques do produto */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-8">
        {destaques.map((destaque, index) => (
          <span 
            key={index}
            className="bg-accent text-white px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium"
          >
            {destaque}
          </span>
        ))}
      </div>

      {/* Grid de benefícios */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-card border border-border rounded-xl sm:rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className={`${benefit.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
              <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
            </div>
            <h3 className="font-bold text-foreground text-[11px] sm:text-base leading-tight">{benefit.title}</h3>
            <p className="text-[10px] sm:text-sm text-muted-foreground leading-tight mt-1">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

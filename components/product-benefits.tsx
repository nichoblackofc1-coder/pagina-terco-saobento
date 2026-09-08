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
    <section className="py-6 sm:py-9">
      <div className="text-center mb-5 sm:mb-7">
        <span className="text-[11px] sm:text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
          Feito para durar e inspirar
        </span>
        <h2 className="text-lg sm:text-2xl font-extrabold text-foreground mt-2">
          Um Terço Especial Para Fortalecer Sua Fé Diária
        </h2>
      </div>
      
      {/* Destaques do produto */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-8">
        {destaques.map((destaque, index) => (
          <span 
            key={index}
            className="bg-secondary text-primary font-semibold border border-primary/20 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm shadow-xs"
          >
            ✓ {destaque}
          </span>
        ))}
      </div>

      {/* Grid de benefícios */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-white border border-border/80 rounded-2xl p-4 sm:p-5 text-center hover:border-primary/40 hover:shadow-md transition-all"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
              <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="font-bold text-foreground text-xs sm:text-base leading-tight">{benefit.title}</h3>
            <p className="text-[11px] sm:text-sm text-muted-foreground leading-snug mt-1.5">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

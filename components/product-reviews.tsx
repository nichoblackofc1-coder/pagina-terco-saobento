"use client"

import { Star, ThumbsUp, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "Maria S.",
    avatar: "M",
    rating: 5,
    date: "há 2 dias",
    verified: true,
    text: "Produto incrível! Minhas manchas de axilas clarearam muito em apenas 2 semanas. Super recomendo!",
    likes: 234,
    images: []
  },
  {
    name: "Ana Paula",
    avatar: "A",
    rating: 5,
    date: "há 5 dias",
    verified: true,
    text: "Comprei com medo, mas valeu muito a pena! Estou na segunda semana e já vejo diferença nas manchas de acne. Textura ótima, não é oleoso.",
    likes: 189,
    images: []
  },
  {
    name: "Juliana C.",
    avatar: "J",
    rating: 5,
    date: "há 1 semana",
    verified: true,
    text: "Melhor investimento que fiz! Clareia de verdade e a pele fica super hidratada. Já é meu terceiro pote!",
    likes: 156,
    images: []
  },
  {
    name: "Fernanda M.",
    avatar: "F",
    rating: 4,
    date: "há 2 semanas",
    verified: true,
    text: "Gostei bastante do resultado nos cotovelos. Demora um pouco mas funciona. Entrega foi rápida!",
    likes: 98,
    images: []
  }
]

export function ProductReviews() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Avaliações dos Clientes</h2>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-bold">4.9</span>
          <span className="text-muted-foreground text-sm">(2.847)</span>
        </div>
      </div>

      {/* Lista de avaliações */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                {review.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium">{review.name}</span>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      <CheckCircle2 className="w-3 h-3" />
                      Compra verificada
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm mt-2 text-foreground">{review.text}</p>
                <button className="flex items-center gap-1 mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Útil ({review.likes})</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ver mais */}
      <button className="w-full mt-4 py-3 text-primary font-medium hover:bg-primary/5 rounded-xl transition-colors">
        Ver todas as avaliações
      </button>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Star, ThumbsUp, CheckCircle2, X } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "Maria S.",
    avatar: "/images/review-1.png",
    rating: 5,
    date: "há 2 dias",
    verified: true,
    text: "Produto incrível! Minhas estrias do pós-parto diminuíram muito em apenas 3 semanas. A pele ficou muito mais firme. Super recomendo!",
    likes: 234,
    photos: [
      "/images/review-photo-1.webp",
      "/images/review-photo-2.webp",
      "/images/review-photo-3.webp",
    ],
  },
  {
    name: "Ana Paula",
    avatar: "/images/review-2.png",
    rating: 5,
    date: "há 5 dias",
    verified: true,
    text: "Comprei com medo, mas valeu muito a pena! A celulite das coxas reduziu bastante, a pele está mais lisa. Textura ótima, absorve rápido!",
    likes: 189,
    photos: [],
  },
  {
    name: "Juliana C.",
    avatar: "/images/review-3.png",
    rating: 5,
    date: "há 1 semana",
    verified: true,
    text: "Melhor investimento que fiz! As estrias antigas ficaram bem menos visíveis e a celulite do bumbum diminuiu muito. Já é meu terceiro pote!",
    likes: 156,
    photos: [],
  },
  {
    name: "Fernanda M.",
    avatar: "/images/review-4.png",
    rating: 4,
    date: "há 2 semanas",
    verified: true,
    text: "Usei para as estrias da barriga e celulite das pernas. Resultado demora um pouco mas funciona de verdade! Entrega foi rápida!",
    likes: 98,
    photos: [],
  }
]

export function ProductReviews() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  return (
    <section className="py-5 sm:py-8">
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-1.5 xs:gap-2 sm:gap-0 mb-3 xs:mb-4 sm:mb-6">
        <h2 className="text-base xs:text-lg sm:text-xl font-bold">Avaliações dos Clientes</h2>
        <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-bold text-xs xs:text-sm sm:text-base">4.9</span>
          <span className="text-muted-foreground text-[10px] xs:text-xs sm:text-sm">(2.847)</span>
        </div>
      </div>

      {/* Lista de avaliações */}
      <div className="space-y-3 sm:space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="font-medium text-sm sm:text-base">{review.name}</span>
                  {review.verified && (
                    <span className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-green-600">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
                      <span className="hidden sm:inline">Compra verificada</span>
                      <span className="sm:hidden">Verificado</span>
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-xs sm:text-sm mt-1.5 sm:mt-2 text-foreground leading-relaxed">{review.text}</p>
                
                {/* Fotos do review */}
                {review.photos && review.photos.length > 0 && (
                  <div className="flex gap-2 mt-2 sm:mt-3 overflow-x-auto">
                    {review.photos.map((photo, photoIndex) => (
                      <button
                        key={photoIndex}
                        onClick={() => setExpandedImage(photo)}
                        className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
                      >
                        <Image
                          src={photo}
                          alt={`Foto ${photoIndex + 1} de ${review.name}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <button className="flex items-center gap-1 mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span>Útil ({review.likes})</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ver mais */}
      <button className="w-full mt-3 sm:mt-4 py-2.5 sm:py-3 text-primary font-medium hover:bg-primary/5 rounded-lg sm:rounded-xl transition-colors text-sm sm:text-base">
        Ver todas as avaliações
      </button>

      {/* Modal de imagem expandida */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-3xl max-h-[80vh] w-full h-full">
            <Image
              src={expandedImage}
              alt="Foto do review"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}

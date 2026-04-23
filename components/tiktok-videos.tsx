"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const tiktokVideos = [
  {
    id: "7609798126479609106",
    embedUrl: "https://www.tiktok.com/embed/v2/7609798126479609106",
  },
  {
    id: "7602758806153563399",
    embedUrl: "https://www.tiktok.com/embed/v2/7602758806153563399",
  },
  {
    id: "7612657787998457106",
    embedUrl: "https://www.tiktok.com/embed/v2/7612657787998457106",
  },
]

export function TiktokVideos() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-6 sm:py-8 mt-4 sm:mt-6">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6 text-foreground">
        Veja o que estão falando
      </h2>

      <div className="relative">
        {/* Botão esquerda - apenas desktop */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg border border-border rounded-full p-2 transition-all"
          aria-label="Vídeo anterior"
        >
          <ChevronLeft className="size-5 text-foreground" />
        </button>

        {/* Container de vídeos */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tiktokVideos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 snap-center w-[200px] xs:w-[220px] sm:w-[260px] md:w-[280px]"
            >
              <div className="relative bg-muted rounded-xl overflow-hidden shadow-md aspect-[9/16]">
                <iframe
                  src={video.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={`TikTok video ${video.id}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Botão direita - apenas desktop */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg border border-border rounded-full p-2 transition-all"
          aria-label="Próximo vídeo"
        >
          <ChevronRight className="size-5 text-foreground" />
        </button>
      </div>

      {/* Indicadores de scroll para mobile */}
      <div className="flex justify-center gap-1.5 mt-3 md:hidden">
        {tiktokVideos.map((video, index) => (
          <div
            key={video.id}
            className="w-2 h-2 rounded-full bg-primary/30"
            aria-label={`Vídeo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

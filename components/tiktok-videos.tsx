"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

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
              className="flex-shrink-0 snap-center w-[200px] xs:w-[220px] sm:w-[260px] md:w-[280px] cursor-pointer group"
              onClick={() => setSelectedVideo(video.embedUrl)}
            >
              <div className="relative bg-muted rounded-xl overflow-hidden shadow-md aspect-[9/16] transition-transform duration-300 group-hover:scale-[1.02]">
                <iframe
                  src={`${video.embedUrl}?autoplay=1&mute=1&controls=0&loop=1&hide_share_button=1&hide_author=1&hide_caption=1`}
                  className="absolute inset-0 w-[300%] h-[300%] -top-[100%] -left-[100%] pointer-events-none"
                  style={{ transform: "scale(0.34)", transformOrigin: "center center" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title={`TikTok video ${video.id}`}
                />
                {/* Overlay para capturar clique */}
                <div className="absolute inset-0 bg-transparent" />
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

      {/* Modal para vídeo expandido */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent 
          className="max-w-[95vw] sm:max-w-md p-0 overflow-hidden border-0 bg-black max-h-[90vh]"
          showCloseButton={false}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
          >
            <X className="size-5" />
            <span className="sr-only">Fechar</span>
          </button>
          
          {selectedVideo && (
            <div className="relative w-full aspect-[9/16]">
              <iframe
                src={`${selectedVideo}?autoplay=1`}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="TikTok video expandido"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

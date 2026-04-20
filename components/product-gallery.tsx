"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <div className="relative aspect-square bg-white rounded-lg sm:rounded-xl overflow-hidden border border-border">
        <Image
          src={images[selectedIndex]}
          alt="POPOZUDA Cream"
          fill
          className="object-contain p-2 sm:p-4"
          priority
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-destructive text-destructive-foreground text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
          -50% OFF
        </div>
        
        {/* Setas de navegacao - mobile */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Proxima imagem"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}
        
        {/* Indicador de slide */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                selectedIndex === index 
                  ? "bg-primary scale-110" 
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Thumbnails - escondidos em telas muito pequenas */}
      {images.length > 1 && (
        <div className="hidden xs:flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-2 scrollbar-hide -mx-1 px-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === index 
                  ? "border-primary ring-2 ring-primary/30" 
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <Image
                src={image}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-contain p-0.5 sm:p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

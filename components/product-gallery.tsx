"use client"

import { useState, useRef } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const minSwipeDistance = 50

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    } else if (isRightSwipe) {
      setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <div 
        className="relative aspect-square bg-white rounded-lg sm:rounded-xl overflow-hidden border border-border cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[selectedIndex]}
          alt="POPOZUDA Cream"
          fill
          className="object-contain p-2 sm:p-4 pointer-events-none select-none"
          priority
          draggable={false}
        />

        {/* Indicadores de posicao mobile */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                selectedIndex === index 
                  ? "bg-primary w-4" 
                  : "bg-white/60"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Thumbnails - escondidos em mobile pequeno, visíveis em telas maiores */}
      {images.length > 1 && (
        <div className="hidden xs:flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all bg-white ${
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

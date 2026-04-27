"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]))
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Preload das próximas imagens
  useEffect(() => {
    const preloadNext = () => {
      const nextIndex = (selectedIndex + 1) % images.length
      const prevIndex = (selectedIndex - 1 + images.length) % images.length
      setLoadedImages(prev => new Set([...prev, nextIndex, prevIndex]))
    }
    preloadNext()
  }, [selectedIndex, images.length])

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
          alt="Colar Nossa Senhora Aparecida Dupla Face - Zirconia e Ouro 14K"
          fill
          className="object-contain p-2 sm:p-4 pointer-events-none select-none"
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
          quality={85}
        />

      </div>
      
      {/* Thumbnails - visíveis em todas as telas */}
      {images.length > 1 && (
        <div className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-3 scrollbar-hide -mx-1 px-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all bg-white active:scale-95 ${
                selectedIndex === index 
                  ? "border-primary ring-2 ring-primary/30" 
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <Image
                src={image}
                alt={`Colar Nossa Senhora - Imagem ${index + 1}`}
                fill
                className="object-contain p-1 sm:p-1.5"
                loading={index < 3 ? "eager" : "lazy"}
                sizes="88px"
                quality={60}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

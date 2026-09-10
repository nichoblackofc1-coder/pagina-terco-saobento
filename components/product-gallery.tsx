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

  // Rotação automática a cada 3 segundos
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length, selectedIndex])

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
    <div className="flex flex-col gap-2.5 sm:gap-3">
      <div 
        className="relative aspect-square bg-white rounded-xl sm:rounded-xl overflow-hidden border border-border cursor-grab active:cursor-grabbing shadow-sm"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[selectedIndex]}
          alt="Terço de Madeira de São Bento com Mistérios"
          fill
          className="object-contain p-2 sm:p-4 pointer-events-none select-none"
          priority={selectedIndex === 0}
          loading={selectedIndex === 0 ? "eager" : "lazy"}
          sizes="(max-width: 640px) 95vw, (max-width: 768px) 50vw, 400px"
          draggable={false}
          quality={75}
        />

        {/* Indicadores de bolinhas estilo Mercado Livre */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/20 backdrop-blur-[2px] px-2 py-1 rounded-full z-10 pointer-events-auto">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Ir para imagem ${idx + 1}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex(idx)
                }}
                className={`transition-all duration-200 rounded-full ${
                  selectedIndex === idx
                    ? "w-4 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

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
          priority={selectedIndex === 0}
          loading={selectedIndex === 0 ? "eager" : "lazy"}
          sizes="(max-width: 640px) 95vw, (max-width: 768px) 50vw, 400px"
          draggable={false}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFERIhBhMxQf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEEAAd2Gpa1BLQjnrW4Y2hBkd+CvZHR/Px+7nwYwxTAuRs//2Q=="
        />

      </div>
      
      {/* Thumbnails - visíveis em todas as telas */}
      {images.length > 1 && (
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all bg-white active:scale-95 ${
                selectedIndex === index 
                  ? "border-primary" 
                  : "border-border"
              }`}
            >
              <Image
                src={image}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-contain p-0.5"
                loading={index < 2 ? "eager" : "lazy"}
                sizes="48px"
                quality={40}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

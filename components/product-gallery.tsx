"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

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
      </div>
      
      {/* Thumbnails - sempre visiveis */}
      {images.length > 1 && (
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all bg-white ${
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

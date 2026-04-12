"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square bg-white rounded-xl overflow-hidden border border-border">
        <Image
          src={images[selectedIndex]}
          alt="Cicatribem Clareador Dérmico"
          fill
          className="object-contain p-4"
          priority
        />
        <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full">
          -50% OFF
        </div>
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === index 
                  ? "border-primary ring-2 ring-primary/30" 
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <Image
                src={image}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

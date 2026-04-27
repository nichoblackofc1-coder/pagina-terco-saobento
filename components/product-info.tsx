"use client"

import { useState, useEffect } from "react"
import { Star, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing } from "@/contexts/pricing-context"
import { useUtmParams } from "@/hooks/use-utm"

// Tempo inicial do contador (2 horas, 45 minutos, 33 segundos)
const INITIAL_TIME = 2 * 3600 + 45 * 60 + 33

export function ProductInfo() {
  const { currentOption } = usePricing()
  const { appendUtmToUrl } = useUtmParams()
  
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reinicia o contador quando chega a zero
          return INITIAL_TIME
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const formatTime = (num: number) => num.toString().padStart(2, "0")

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Preco principal */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded">
            -50%
          </span>
          <span className="text-xl sm:text-2xl font-bold text-foreground">
            R$ 43,82
          </span>
          <span className="text-sm sm:text-base text-muted-foreground line-through">
            R$ 87,64
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          3x de R$ 14,61 <span className="text-green-600 font-medium">sem juros</span>
        </p>
      </div>

      {/* Título */}
      <h1 className="text-base sm:text-lg font-bold text-foreground leading-snug">
        [COMPRE 1 LEVE 2] Colar Nossa Senhora Aparecida Dupla Face - Zircônia &amp; Ouro 14K
      </h1>

      {/* Avaliações */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-xs sm:text-sm font-medium text-foreground">4.6</span>
        <span className="text-xs sm:text-sm text-muted-foreground">(3,9 mil)</span>
        <span className="text-xs sm:text-sm text-muted-foreground">39mil vendidos</span>
      </div>

      {/* Info do Kit */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 sm:p-4">
        <p className="text-sm sm:text-base font-semibold text-primary text-center">
          Kit com 2 Colares - Compre 1 e Leve 2
        </p>
      </div>

      {/* Benefícios rápidos */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 sm:gap-3">
        <div className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span className="truncate">Ouro 14K</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span className="truncate">Zircônias Premium</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span className="truncate">Dupla face</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-sm">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span className="truncate">Compre 1 leve 2</span>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-2">
        <Button 
          size="lg" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg py-7 sm:py-8 rounded-sm shadow-lg shadow-primary/30"
          onClick={() => window.open(appendUtmToUrl(currentOption.checkoutUrl), "_blank")}
        >
          COMPRAR AGORA
        </Button>
      </div>

      {/* Timer de oferta */}
      <div className="bg-muted/50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="text-xs sm:text-sm text-muted-foreground">Oferta termina em:</span>
        <div className="flex gap-1">
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-xs sm:text-sm">{formatTime(hours)}</span>
          <span className="font-bold text-sm">:</span>
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-xs sm:text-sm">{formatTime(minutes)}</span>
          <span className="font-bold text-sm">:</span>
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-xs sm:text-sm">{formatTime(seconds)}</span>
        </div>
      </div>
    </div>
  )
}

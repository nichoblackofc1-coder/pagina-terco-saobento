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
    <div className="flex flex-col gap-2 sm:gap-4">
      {/* Preco principal */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="bg-primary text-primary-foreground text-[9px] sm:text-xs font-bold px-1.5 py-0.5 rounded">
            -35%
          </span>
          <span className="text-lg sm:text-2xl font-bold text-foreground">
            R$ 34,56
          </span>
          <span className="text-xs sm:text-base text-muted-foreground line-through">
            R$ 52,84
          </span>
        </div>
        <p className="text-[10px] sm:text-sm text-muted-foreground">
          Frete Grátis <span className="text-green-600 font-medium">Estoque Limitado</span>
        </p>
      </div>

      {/* Título */}
      <h1 className="text-sm sm:text-lg font-bold text-foreground leading-tight">
        Terço de Madeira de São Bento e Mistérios
      </h1>

      {/* Avaliações */}
      <div className="flex items-center gap-1 sm:gap-2">
        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-[10px] sm:text-sm font-medium text-foreground">4.9</span>
        <span className="text-[10px] sm:text-sm text-muted-foreground">(2.847 avaliações)</span>
        <span className="text-[10px] sm:text-sm text-muted-foreground">13.3k vendidos</span>
      </div>

      {/* Info do Kit */}
      <div className="bg-primary/10 border border-primary/20 rounded-md sm:rounded-lg p-2 sm:p-4">
        <p className="text-xs sm:text-base font-semibold text-primary text-center">
          Terço de São Bento com Mistérios - Frete Grátis
        </p>
      </div>

      {/* Benefícios rápidos */}
      <div className="grid grid-cols-2 gap-x-1 gap-y-1 sm:gap-3">
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Medalha São Bento</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Mistérios Impressos</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Madeira Natural</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Presente Perfeito</span>
        </div>
      </div>

      {/* Botão de ação */}
      <Button 
        size="lg" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-lg py-7 sm:py-10 rounded-sm shadow-lg shadow-primary/30"
        onClick={() => window.open(appendUtmToUrl(currentOption.checkoutUrl), "_blank")}
      >
        COMPRAR AGORA
      </Button>

      {/* Timer de oferta */}
      <div className="bg-muted/50 p-2 sm:p-3 rounded-md sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-4">
        <span className="text-[10px] sm:text-sm text-muted-foreground">Oferta termina em:</span>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-[10px] sm:text-sm">{formatTime(hours)}</span>
          <span className="font-bold text-[10px] sm:text-sm">:</span>
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-[10px] sm:text-sm">{formatTime(minutes)}</span>
          <span className="font-bold text-[10px] sm:text-sm">:</span>
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-[10px] sm:text-sm">{formatTime(seconds)}</span>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Star, ShieldCheck, Truck, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing, pricingOptions } from "@/contexts/pricing-context"
import { useUtmParams } from "@/hooks/use-utm"

// Tempo inicial do contador (2 horas, 45 minutos, 33 segundos)
const INITIAL_TIME = 2 * 3600 + 45 * 60 + 33

export function ProductInfo() {
  const { selectedOption, setSelectedOption, currentOption } = usePricing()
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
          <span className="bg-[#E63946] text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded">
            -40%
          </span>
          <span className="text-xl sm:text-2xl font-bold text-foreground">
            R$ 37,84
          </span>
          <span className="text-sm sm:text-base text-muted-foreground line-through">
            R$ 97,43
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          3x de R$ 12,61 <span className="text-green-600 font-medium">sem juros</span>
        </p>
      </div>

      {/* Título */}
      <h1 className="text-base sm:text-lg font-bold text-foreground leading-snug">
        Popozuda Crem - Cuidado Corporal Avancado para a Pele.
      </h1>

      {/* Avaliações */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-xs sm:text-sm font-medium text-foreground">4.6</span>
        <span className="text-xs sm:text-sm text-muted-foreground">(3,9 mil)</span>
        <span className="text-xs sm:text-sm text-muted-foreground">39mil vendidos</span>
      </div>

      {/* Seletor de Quantidade/Preco */}
      <div className="flex flex-col gap-2">
        {pricingOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`relative flex flex-col xs:flex-row xs:items-center xs:justify-between p-3 sm:p-4 rounded-lg border-2 transition-all ${
              selectedOption === option.id
                ? "border-[#fe9a00] bg-[#fe9a00]/5"
                : "border-border hover:border-muted-foreground/50"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-1 xs:mb-0">
              <span className="text-sm sm:text-base font-semibold text-foreground">
                {option.label}
              </span>
              {option.badge && (
                <span className="bg-[#fe9a00] text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">
                  {option.badge}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-muted-foreground line-through">
                R$ {option.originalPrice.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-lg sm:text-xl font-bold text-[#fe9a00]">
                R$ {option.price.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Benefícios rápidos */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Frete Grátis</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
          <span>Entrega Rápida</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
          <span>Compra Segura</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Original</span>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-2">
        <Button 
          size="lg" 
          className="w-full bg-[#02b019] hover:bg-[#029a16] text-white font-bold text-base sm:text-lg py-7 sm:py-8 rounded-sm shadow-lg shadow-[#02b019]/30"
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

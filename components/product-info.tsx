"use client"

import { useState, useEffect } from "react"
import { Star, CheckCircle2, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing, pricingOptions } from "@/contexts/pricing-context"
import { useUtmParams } from "@/hooks/use-utm"

// Tempo inicial do contador (2 horas, 45 minutos, 33 segundos)
const INITIAL_TIME = 2 * 3600 + 45 * 60 + 33

export function ProductInfo() {
  const { 
    selectedOption, 
    setSelectedOption, 
    currentOption,
  } = usePricing()
  const { appendUtmToUrl } = useUtmParams()
  
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
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
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

  const discountPercent = Math.round(
    ((currentOption.originalPrice - currentOption.price) / currentOption.originalPrice) * 100
  )

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Preco principal dinâmico */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="bg-primary text-primary-foreground text-[9px] sm:text-xs font-bold px-1.5 py-0.5 rounded">
            -{discountPercent}%
          </span>
          <span className="text-xl sm:text-3xl font-bold text-foreground">
            {formatCurrency(currentOption.price)}
          </span>
          <span className="text-xs sm:text-base text-muted-foreground line-through">
            {formatCurrency(currentOption.originalPrice)}
          </span>
        </div>
        <p className="text-[10px] sm:text-sm text-muted-foreground">
          Frete Grátis <span className="text-green-600 font-semibold">• Estoque Limitado</span>
        </p>
      </div>

      {/* Título */}
      <h1 className="text-base sm:text-xl font-bold text-foreground leading-tight">
        Terço de Madeira de São Bento e Mistérios
      </h1>

      {/* Avaliações */}
      <div className="flex items-center gap-1 sm:gap-2">
        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-[10px] sm:text-sm font-medium text-foreground">4.9</span>
        <span className="text-[10px] sm:text-sm text-muted-foreground">(2.847 avaliações)</span>
        <span className="text-[10px] sm:text-sm text-muted-foreground">• 17 mil vendidos</span>
      </div>

      {/* Benefícios rápidos */}
      <div className="grid grid-cols-2 gap-x-1 gap-y-1 sm:gap-3 bg-muted/30 p-2.5 sm:p-3 rounded-lg border border-border/60">
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Medalha São Bento</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Mistérios Gravados</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Madeira Nobre Natural</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
          <span>Proteção & Fé</span>
        </div>
      </div>

      {/* SELETOR DE OFERTAS */}
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-bold text-foreground">
            Escolha sua oferta:
          </span>
          <span className="text-[10px] sm:text-xs text-primary font-semibold flex items-center gap-1">
            <Zap className="w-3 h-3 fill-primary" /> Mais economia por unidade
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {pricingOptions.map((option) => {
            const isSelected = selectedOption === option.id
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedOption(option.id)}
                className={`relative flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl border-2 text-left transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/[0.04] shadow-sm ring-1 ring-primary/30"
                    : "border-border bg-white hover:border-border/80 hover:bg-muted/20"
                }`}
              >
                {option.badge && (
                  <span className="absolute -top-2.5 right-2.5 sm:right-3 bg-primary text-primary-foreground text-[8px] sm:text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm tracking-wider">
                    {option.badge}
                  </span>
                )}

                <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-1">
                  {/* Radio circle */}
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected ? "border-primary bg-primary" : "border-muted-foreground/50"
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs sm:text-sm text-foreground truncate">
                        {option.title}
                      </span>
                    </div>
                    {option.unitPrice ? (
                      <p className="text-[9px] sm:text-xs text-muted-foreground truncate">
                        Sai a <span className="font-semibold text-primary">{formatCurrency(option.unitPrice)}</span> cada
                      </p>
                    ) : (
                      <p className="text-[9px] sm:text-xs text-muted-foreground truncate">{option.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Preços */}
                <div className="text-right flex-shrink-0">
                  <div className="flex items-baseline gap-1 justify-end">
                    <span className="text-[9px] sm:text-xs text-muted-foreground line-through">
                      {formatCurrency(option.originalPrice)}
                    </span>
                    <span className="text-xs sm:text-base font-bold text-primary">
                      {formatCurrency(option.price)}
                    </span>
                  </div>
                  {option.savings && (
                    <span className="text-[8px] sm:text-[10px] text-green-600 font-semibold block">
                      {option.savings}
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Botão de ação principal */}
      <div className="flex flex-col gap-1.5 mt-1">
        <Button 
          size="lg" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg py-6 sm:py-7 rounded-xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform cursor-pointer"
          onClick={() => window.open(appendUtmToUrl(currentOption.checkoutUrl), "_blank")}
        >
          COMPRAR AGORA
        </Button>
        <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-green-600" /> Compra 100% Segura
          </span>
          <span>•</span>
          <span>Garantia de 7 Dias</span>
          <span>•</span>
          <span>Envio Imediato</span>
        </div>
      </div>

      {/* Timer de oferta */}
      <div className="bg-muted/50 p-2 sm:p-3 rounded-xl flex items-center justify-center gap-1.5 sm:gap-4">
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

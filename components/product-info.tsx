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
    <div className="flex flex-col gap-3 sm:gap-4 bg-white p-3.5 sm:p-5 rounded-2xl border border-border shadow-sm">
      {/* Selo topo */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compra Segura • Envio Imediato
        </span>
        <span className="text-[10px] sm:text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">
          Restam poucas peças
        </span>
      </div>

      {/* Preco principal dinâmico */}
      <div className="flex flex-col gap-1 p-3 rounded-xl bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.02] border border-primary/15">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-extrabold px-2 py-0.5 rounded-md shadow-sm">
            ECONOMIZE {discountPercent}%
          </span>
          <span className="text-2xl sm:text-4xl font-extrabold text-[#173359] tracking-tight">
            {formatCurrency(currentOption.price)}
          </span>
          <span className="text-xs sm:text-base text-muted-foreground line-through">
            {formatCurrency(currentOption.originalPrice)}
          </span>
        </div>
        <p className="text-[11px] sm:text-sm text-foreground/80">
          <strong className="text-emerald-700">Frete Grátis</strong> incluso para seu endereço hoje.
        </p>
      </div>

      {/* Título */}
      <h1 className="text-lg sm:text-2xl font-bold text-foreground leading-tight tracking-tight">
        Terço de Madeira de São Bento com os 20 Mistérios
      </h1>

      {/* Avaliações */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs sm:text-sm font-bold text-foreground">4.9/5.0</span>
        <span className="text-xs sm:text-sm text-muted-foreground">(2.847 fiéis avaliaram)</span>
        <span className="text-xs sm:text-sm font-semibold text-emerald-700">• +17 mil entregues</span>
      </div>

      {/* Benefícios rápidos */}
      <div className="grid grid-cols-2 gap-2 bg-secondary/60 p-3 rounded-xl border border-border">
        <div className="flex items-center gap-1.5 text-[11px] sm:text-sm text-foreground">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="font-medium">Medalha São Bento Original</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] sm:text-sm text-foreground">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="font-medium">20 Mistérios Gravados</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] sm:text-sm text-foreground">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="font-medium">Madeira Nobre e Durável</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] sm:text-sm text-foreground">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="font-medium">Oração com Mais Devoção</span>
        </div>
      </div>

      {/* SELETOR DE OFERTAS */}
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-bold text-foreground">
            Escolha o melhor kit para você:
          </span>
          <span className="text-[10px] sm:text-xs text-primary font-bold flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full">
            <Zap className="w-3 h-3 fill-primary" /> Mais escolhido para presente
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {pricingOptions.map((option) => {
            const isSelected = selectedOption === option.id
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedOption(option.id)}
                className={`relative flex items-center justify-between p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/[0.06] shadow-md ring-2 ring-primary/20"
                    : "border-border bg-white hover:border-primary/50 hover:bg-muted/30"
                }`}
              >
                {option.badge && (
                  <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-sm tracking-wider">
                    {option.badge}
                  </span>
                )}

                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 pr-1">
                  {/* Radio circle */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected ? "border-primary bg-primary" : "border-muted-foreground/40 bg-white"
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs sm:text-sm text-foreground truncate">
                        {option.title}
                      </span>
                    </div>
                    {option.unitPrice ? (
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                        Sai a <span className="font-bold text-primary">{formatCurrency(option.unitPrice)}</span> por terço
                      </p>
                    ) : (
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{option.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Preços */}
                <div className="text-right flex-shrink-0 pl-2">
                  <div className="flex items-baseline gap-1.5 justify-end">
                    <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                      {formatCurrency(option.originalPrice)}
                    </span>
                    <span className="text-sm sm:text-lg font-extrabold text-primary">
                      {formatCurrency(option.price)}
                    </span>
                  </div>
                  {option.savings && (
                    <span className="text-[9px] sm:text-[11px] text-emerald-700 font-bold block">
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
      <div className="flex flex-col gap-2 mt-1">
        <Button 
          size="lg" 
          className="w-full bg-gradient-to-r from-[#1D3B64] via-[#20416F] to-[#2B548B] hover:brightness-110 text-white font-extrabold text-base sm:text-lg py-6 sm:py-7 rounded-xl shadow-lg shadow-primary/25 active:scale-[0.98] transition-all cursor-pointer tracking-wide"
          onClick={() => window.open(appendUtmToUrl(currentOption.checkoutUrl), "_blank")}
        >
          GARANTIR MEU TERÇO COM DESCONTO
        </Button>
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1 font-medium text-foreground/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compra 100% Segura
          </span>
          <span>•</span>
          <span className="font-medium text-foreground/80">Garantia Incondicional de 7 Dias</span>
          <span>•</span>
          <span className="font-medium text-foreground/80">Parcelamento Facilitado</span>
        </div>
      </div>

      {/* Timer de oferta */}
      <div className="bg-secondary/70 border border-border p-2.5 sm:p-3 rounded-xl flex items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="text-xs sm:text-sm font-semibold text-foreground">Desconto promocional expira em:</span>
        <div className="flex items-center gap-1">
          <span className="bg-[#173359] text-white px-2 py-0.5 rounded font-mono font-bold text-xs sm:text-sm">{formatTime(hours)}</span>
          <span className="font-bold text-xs sm:text-sm text-[#173359]">:</span>
          <span className="bg-[#173359] text-white px-2 py-0.5 rounded font-mono font-bold text-xs sm:text-sm">{formatTime(minutes)}</span>
          <span className="font-bold text-xs sm:text-sm text-[#173359]">:</span>
          <span className="bg-[#173359] text-white px-2 py-0.5 rounded font-mono font-bold text-xs sm:text-sm">{formatTime(seconds)}</span>
        </div>
      </div>
    </div>
  )
}

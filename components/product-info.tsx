"use client"

import { useState } from "react"
import { Star, ShieldCheck, Truck, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingOptions = [
  {
    id: 1,
    quantity: 1,
    label: "1 Unidade",
    originalPrice: 75.68,
    price: 37.84,
    badge: null,
    checkoutUrl: "https://seguropagamentos.com.br/popozuda",
  },
  {
    id: 2,
    quantity: 2,
    label: "2 Unidades",
    originalPrice: 151.36,
    price: 57.00,
    badge: "Mais vendido",
    checkoutUrl: "https://seguropagamentos.com.br/popozuda2",
  },
  {
    id: 3,
    quantity: 3,
    label: "3 Unidades",
    originalPrice: 227.04,
    price: 77.00,
    badge: null,
    checkoutUrl: "https://seguropagamentos.com.br/popozuda3",
  },
]

export function ProductInfo() {
  const [selectedOption, setSelectedOption] = useState(2)

  const currentOption = pricingOptions.find(opt => opt.id === selectedOption) || pricingOptions[1]

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Badge TikTok */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#9C00A3] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full w-fit">
        <span>O MAIS VENDIDO DO TIKTOK</span>
      </div>

      {/* Título */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance">
        POPOZUDA Cream 200g - Creme para um bumbum mais firme e uniforme
      </h1>

      {/* Avaliações */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-xs sm:text-sm font-medium text-foreground">4.9</span>
        <span className="text-xs sm:text-sm text-muted-foreground">(2.847)</span>
        <span className="text-xs sm:text-sm text-muted-foreground hidden sm:inline">•</span>
        <span className="text-xs sm:text-sm text-green-600 font-medium">12.5k vendidos</span>
      </div>

      {/* Seletor de Quantidade/Preco */}
      <div className="flex flex-col gap-2">
        {pricingOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`relative flex items-center justify-between p-3 sm:p-4 rounded-lg border-2 transition-all ${
              selectedOption === option.id
                ? "border-[#fe9a00] bg-[#fe9a00]/5"
                : "border-border hover:border-muted-foreground/50"
            }`}
          >
            <div className="flex items-center gap-2 sm:gap-3">
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
              <span className="text-base sm:text-lg font-bold text-[#fe9a00]">
                R$ {option.price.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Preco selecionado destacado */}
      <div className="bg-gradient-to-r from-[#fe9a00]/10 to-orange-100 p-3 sm:p-4 rounded-lg sm:rounded-xl">
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span className="text-xs sm:text-sm text-muted-foreground line-through">
            R$ {currentOption.originalPrice.toFixed(2).replace(".", ",")}
          </span>
          <span className="bg-[#fe9a00] text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded">
            -{Math.round((1 - currentOption.price / currentOption.originalPrice) * 100)}%
          </span>
        </div>
        <div className="flex items-baseline gap-0.5 sm:gap-1 mt-1">
          <span className="text-xs sm:text-sm font-medium text-foreground">R$</span>
          <span className="text-3xl sm:text-4xl font-extrabold text-[#fe9a00]">
            {Math.floor(currentOption.price)}
          </span>
          <span className="text-lg sm:text-xl font-bold text-[#fe9a00]">
            ,{(currentOption.price % 1).toFixed(2).substring(2)}
          </span>
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
          ou 3x de R$ {(currentOption.price / 3).toFixed(2).replace(".", ",")} sem juros
        </p>
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
          className="w-full bg-[#00D133] hover:bg-[#00B82D] text-white font-bold text-base sm:text-lg py-5 sm:py-6 rounded-lg sm:rounded-xl shadow-lg shadow-[#00D133]/30"
          onClick={() => window.open(currentOption.checkoutUrl, "_blank")}
        >
          COMPRAR AGORA
        </Button>
      </div>

      {/* Timer de oferta */}
      <div className="bg-muted/50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <span className="text-xs sm:text-sm text-muted-foreground">Oferta termina em:</span>
        <div className="flex gap-1">
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-xs sm:text-sm">02</span>
          <span className="font-bold text-sm">:</span>
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-xs sm:text-sm">45</span>
          <span className="font-bold text-sm">:</span>
          <span className="bg-foreground text-background px-1.5 sm:px-2 py-0.5 sm:py-1 rounded font-mono font-bold text-xs sm:text-sm">33</span>
        </div>
      </div>
    </div>
  )
}

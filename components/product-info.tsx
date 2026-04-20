"use client"

import { Star, ShieldCheck, Truck, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductInfo() {
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

      {/* Preço */}
      <div className="bg-gradient-to-r from-destructive/10 to-orange-100 p-3 sm:p-4 rounded-lg sm:rounded-xl">
        <div className="flex items-baseline gap-1.5 sm:gap-2">
          <span className="text-xs sm:text-sm text-muted-foreground line-through">R$ 159,90</span>
          <span className="bg-destructive text-destructive-foreground text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded">
            -50%
          </span>
        </div>
        <div className="flex items-baseline gap-0.5 sm:gap-1 mt-1">
          <span className="text-xs sm:text-sm font-medium text-foreground">R$</span>
          <span className="text-3xl sm:text-4xl font-extrabold text-destructive">47</span>
          <span className="text-lg sm:text-xl font-bold text-destructive">,83</span>
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
          ou 3x de R$ 15,94 sem juros
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

      {/* Quantidade */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="text-xs sm:text-sm font-medium">Quantidade:</span>
        <div className="flex items-center border border-border rounded-lg">
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-muted transition-colors text-sm sm:text-base">-</button>
          <span className="px-3 sm:px-4 py-1.5 sm:py-2 border-x border-border font-medium text-sm sm:text-base">1</span>
          <button className="px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-muted transition-colors text-sm sm:text-base">+</button>
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex flex-col gap-2 sm:gap-3 mt-1 sm:mt-2">
        <Button 
          size="lg" 
          className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-base sm:text-lg py-5 sm:py-6 rounded-lg sm:rounded-xl shadow-lg shadow-destructive/30"
        >
          COMPRAR AGORA
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-5 sm:py-6 rounded-lg sm:rounded-xl text-sm sm:text-base"
        >
          ADICIONAR AO CARRINHO
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

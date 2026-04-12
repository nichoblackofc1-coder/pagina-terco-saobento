"use client"

import { Star, ShieldCheck, Truck, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductInfo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Badge TikTok */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit">
        <span>O MAIS VENDIDO DO TIKTOK</span>
      </div>

      {/* Título */}
      <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance">
        Cicatribem Clareador Dérmico 60g
      </h1>

      {/* Subtítulo */}
      <p className="text-muted-foreground text-sm">
        Hidratante Uniformizador e Revitalizante Facial e Corporal
      </p>

      {/* Avaliações */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm font-medium text-foreground">4.9</span>
        <span className="text-sm text-muted-foreground">(2.847 avaliações)</span>
        <span className="text-sm text-muted-foreground">•</span>
        <span className="text-sm text-green-600 font-medium">12.5k vendidos</span>
      </div>

      {/* Preço */}
      <div className="bg-gradient-to-r from-destructive/10 to-orange-100 p-4 rounded-xl">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-muted-foreground line-through">R$ 159,90</span>
          <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-0.5 rounded">
            -50%
          </span>
        </div>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-sm font-medium text-foreground">R$</span>
          <span className="text-4xl font-extrabold text-destructive">79</span>
          <span className="text-xl font-bold text-destructive">,90</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          ou 3x de R$ 26,63 sem juros
        </p>
      </div>

      {/* Benefícios rápidos */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 text-sm">
          <Truck className="w-4 h-4 text-green-600" />
          <span>Frete Grátis</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-primary" />
          <span>Entrega Rápida</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>Compra Segura</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span>Original</span>
        </div>
      </div>

      {/* Quantidade */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Quantidade:</span>
        <div className="flex items-center border border-border rounded-lg">
          <button className="px-4 py-2 hover:bg-muted transition-colors">-</button>
          <span className="px-4 py-2 border-x border-border font-medium">1</span>
          <button className="px-4 py-2 hover:bg-muted transition-colors">+</button>
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex flex-col gap-3 mt-2">
        <Button 
          size="lg" 
          className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold text-lg py-6 rounded-xl shadow-lg shadow-destructive/30"
        >
          COMPRAR AGORA
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-6 rounded-xl"
        >
          ADICIONAR AO CARRINHO
        </Button>
      </div>

      {/* Timer de oferta */}
      <div className="bg-muted/50 p-3 rounded-xl flex items-center justify-center gap-4">
        <span className="text-sm text-muted-foreground">Oferta termina em:</span>
        <div className="flex gap-1">
          <span className="bg-foreground text-background px-2 py-1 rounded font-mono font-bold text-sm">02</span>
          <span className="font-bold">:</span>
          <span className="bg-foreground text-background px-2 py-1 rounded font-mono font-bold text-sm">45</span>
          <span className="font-bold">:</span>
          <span className="bg-foreground text-background px-2 py-1 rounded font-mono font-bold text-sm">33</span>
        </div>
      </div>
    </div>
  )
}

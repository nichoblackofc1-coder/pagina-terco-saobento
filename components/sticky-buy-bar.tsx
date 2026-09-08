"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing } from "@/contexts/pricing-context"
import { useUtmParams } from "@/hooks/use-utm"

export function StickyBuyBar() {
  const { currentOption } = usePricing()
  const { appendUtmToUrl } = useUtmParams()

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-3 sm:px-6 py-2 sm:py-3 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
      <div className="flex items-center gap-3 sm:gap-5 max-w-lg mx-auto">
        {/* Coluna esquerda */}
        <div className="flex-1 min-w-0">
          <div className="bg-primary text-primary-foreground text-[9px] sm:text-xs font-bold px-2 py-0.5 rounded inline-block">
            {currentOption.badge || "Frete Grátis"}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3 mt-0.5">
            <span className="text-base sm:text-xl font-bold text-primary">
              {formatCurrency(currentOption.price)}
            </span>
            <span className="text-[10px] sm:text-sm text-muted-foreground line-through">
              {formatCurrency(currentOption.originalPrice)}
            </span>
          </div>
          <p className="text-[9px] sm:text-xs text-muted-foreground truncate">{currentOption.title}</p>
        </div>

        {/* Botao comprar */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#1D3B64] to-[#2B548B] hover:brightness-110 text-white font-extrabold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md text-xs sm:text-base whitespace-nowrap active:scale-95 transition-all cursor-pointer tracking-wide"
          onClick={() => window.open(appendUtmToUrl(currentOption.checkoutUrl), "_blank")}
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" />
          COMPRAR AGORA
        </Button>
      </div>
    </div>
  )
}

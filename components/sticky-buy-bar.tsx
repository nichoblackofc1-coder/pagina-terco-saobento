"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing } from "@/contexts/pricing-context"
import { useUtmParams } from "@/hooks/use-utm"

export function StickyBuyBar() {
  const { currentOption } = usePricing()
  const { appendUtmToUrl } = useUtmParams()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-2.5 sm:px-6 py-1.5 sm:py-3 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]" style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom))' }}>
      <div className="flex items-center gap-2 sm:gap-5 max-w-lg mx-auto">
        {/* Coluna esquerda */}
        <div className="flex-1 min-w-0">
          <div className="bg-primary text-primary-foreground text-[8px] sm:text-sm font-bold px-1.5 sm:px-4 py-0.5 rounded inline-block">
            Frete Grátis
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3 mt-0.5">
            <span className="text-sm sm:text-xl font-bold text-primary">R$ 34,56</span>
            <span className="text-[8px] sm:text-sm text-muted-foreground line-through">R$ 52,84</span>
          </div>
          <p className="text-[8px] sm:text-sm text-muted-foreground">Estoque Limitado</p>
        </div>

        {/* Botao comprar */}
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-3 sm:px-5 py-1.5 sm:py-3 rounded-sm shadow-md text-[11px] sm:text-base whitespace-nowrap active:scale-95 transition-transform"
          onClick={() => window.open(appendUtmToUrl(currentOption.checkoutUrl), "_blank")}
        >
          <ShoppingCart className="w-3 h-3 sm:w-5 sm:h-5 mr-1" />
          COMPRAR
        </Button>
      </div>
    </div>
  )
}

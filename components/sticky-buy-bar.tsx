"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing } from "@/contexts/pricing-context"
import { useUtmParams } from "@/hooks/use-utm"

export function StickyBuyBar() {
  const { currentOption } = usePricing()
  const { appendUtmToUrl } = useUtmParams()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-3 sm:px-6 py-2 sm:py-3 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
      <div className="flex items-center gap-3 sm:gap-5 max-w-lg mx-auto">
        {/* Coluna esquerda: Badge em cima, precos embaixo */}
        <div className="flex-1 min-w-0">
          {/* Badge do kit */}
          <div className="bg-primary text-primary-foreground text-[9px] sm:text-sm font-bold px-2 sm:px-4 py-0.5 sm:py-1.5 rounded inline-block mb-0.5 sm:mb-1.5">
            Compre 1 Leve 2
          </div>
          
          {/* Precos */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-sm sm:text-xl font-bold text-primary">
              R$ 43,82
            </span>
            <span className="text-[9px] sm:text-sm text-muted-foreground line-through">
              R$ 87,64
            </span>
          </div>
          <p className="text-[9px] sm:text-sm text-muted-foreground">
            3x R$ 14,61
          </p>
        </div>
        
        {/* Botao comprar */}
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 sm:px-5 py-2 sm:py-3 rounded-sm shadow-md text-xs sm:text-base whitespace-nowrap active:scale-95 transition-transform"
          onClick={() => window.open(appendUtmToUrl(currentOption.checkoutUrl), "_blank")}
        >
          <ShoppingCart className="w-3.5 h-3.5 sm:w-5 sm:h-5 mr-1.5" />
          COMPRAR
        </Button>
      </div>
    </div>
  )
}

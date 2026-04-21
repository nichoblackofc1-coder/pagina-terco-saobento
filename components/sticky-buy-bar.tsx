"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing } from "@/contexts/pricing-context"
import { useUtmParams } from "@/hooks/use-utm"

export function StickyBuyBar() {
  const { currentOption } = usePricing()
  const { appendUtmToUrl } = useUtmParams()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-2 xs:p-2.5 sm:p-3 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
      <div className="flex items-center gap-3 xs:gap-4 sm:gap-5 max-w-lg mx-auto">
        {/* Coluna esquerda: Badge em cima, precos embaixo */}
        <div className="flex-1 min-w-0">
          {/* Badge de quantidade */}
          <div className="bg-[#fe9a00] text-white text-[10px] xs:text-xs sm:text-sm font-bold px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 rounded inline-block mb-1 xs:mb-1.5">
            {currentOption.quantity} {currentOption.quantity === 1 ? "Unidade" : "Unidades"}
          </div>
          
          {/* Precos */}
          <div className="flex items-center gap-2 xs:gap-3">
            <span className="text-base xs:text-lg sm:text-xl font-bold text-[#E63946]">
              R$ {currentOption.price.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground line-through">
              R$ {currentOption.originalPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground">
            3x R$ {(currentOption.price / 3).toFixed(2).replace(".", ",")}
          </p>
        </div>
        
        {/* Botao comprar */}
        <Button 
          size="lg"
          className="bg-[#00cf1c] hover:bg-[#00b818] text-white font-bold px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-lg shadow-md text-xs xs:text-sm sm:text-base whitespace-nowrap active:scale-95 transition-transform"
          onClick={() => window.open(appendUtmToUrl(currentOption.checkoutUrl), "_blank")}
        >
          <ShoppingCart className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 xs:mr-1.5" />
          COMPRAR
        </Button>
      </div>
    </div>
  )
}

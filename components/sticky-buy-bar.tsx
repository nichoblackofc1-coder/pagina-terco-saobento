"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing } from "@/contexts/pricing-context"

export function StickyBuyBar() {
  const { currentOption } = usePricing()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-2 xs:p-2.5 sm:p-3 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
      <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 max-w-lg mx-auto">
        {/* Coluna esquerda: Badge em cima, precos embaixo */}
        <div className="flex-1 min-w-0">
          {/* Badge de quantidade */}
          <div className="bg-[#00D133] text-white text-[9px] xs:text-[10px] sm:text-xs font-bold px-1.5 xs:px-2 sm:px-2.5 py-0.5 xs:py-1 rounded-md inline-block mb-0.5 xs:mb-1">
            {currentOption.quantity} {currentOption.quantity === 1 ? "Unidade" : "Unidades"}
          </div>
          
          {/* Precos */}
          <div className="flex items-center gap-1.5 xs:gap-2">
            <span className="text-sm xs:text-base sm:text-lg font-bold text-[#E63946]">
              R$ {currentOption.price.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground line-through">
              R$ {currentOption.originalPrice.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <p className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground">
            3x R$ {(currentOption.price / 3).toFixed(2).replace(".", ",")}
          </p>
        </div>
        
        {/* Botao comprar */}
        <Button 
          size="lg"
          className="bg-[#00D133] hover:bg-[#00B82D] text-white font-bold px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 rounded-lg shadow-md text-xs xs:text-sm sm:text-base whitespace-nowrap active:scale-95 transition-transform"
          onClick={() => window.open(currentOption.checkoutUrl, "_blank")}
        >
          <ShoppingCart className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 xs:mr-1.5" />
          COMPRAR
        </Button>
      </div>
    </div>
  )
}

"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePricing } from "@/contexts/pricing-context"

export function StickyBuyBar() {
  const { currentOption } = usePricing()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-2.5 sm:p-3 z-50 md:hidden safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2 sm:gap-3 max-w-lg mx-auto">
        {/* Badge de quantidade */}
        <div className="bg-[#00D133] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md whitespace-nowrap">
          {currentOption.quantity} {currentOption.quantity === 1 ? "Unidade" : "Unidades"}
        </div>
        
        {/* Precos */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
              R$ {currentOption.originalPrice.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-base sm:text-lg font-bold text-[#E63946]">
              R$ {currentOption.price.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            ou 3x de R$ {(currentOption.price / 3).toFixed(2).replace(".", ",")}
          </p>
        </div>
        
        {/* Botao comprar */}
        <Button 
          size="lg"
          className="bg-[#00D133] hover:bg-[#00B82D] text-white font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg shadow-md text-sm sm:text-base whitespace-nowrap active:scale-95 transition-transform"
          onClick={() => window.open(currentOption.checkoutUrl, "_blank")}
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" />
          COMPRAR
        </Button>
      </div>
    </div>
  )
}

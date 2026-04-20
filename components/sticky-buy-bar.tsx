"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyBuyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-2.5 sm:p-4 z-50 md:hidden safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-2 sm:gap-3 max-w-lg mx-auto">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1 flex-wrap">
            <span className="text-[10px] sm:text-xs text-muted-foreground line-through">R$ 159,90</span>
            <span className="text-lg sm:text-xl font-bold text-destructive">R$ 47,83</span>
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground truncate">ou 3x de R$ 15,94</p>
        </div>
        <Button 
          size="lg"
          className="bg-[#00D133] hover:bg-[#00B82D] text-white font-bold px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-[#00D133]/30 text-sm sm:text-base whitespace-nowrap active:scale-95 transition-transform"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
          COMPRAR
        </Button>
      </div>
    </div>
  )
}

"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyBuyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 sm:p-4 z-50 md:hidden safe-area-bottom">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] sm:text-xs text-muted-foreground line-through">R$ 159,90</span>
            <span className="text-base sm:text-lg font-bold text-destructive">R$ 79,90</span>
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground">ou 3x de R$ 26,63</p>
        </div>
        <Button 
          size="lg"
          className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-4 sm:px-8 rounded-lg sm:rounded-xl shadow-lg text-sm sm:text-base"
        >
          <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
          COMPRAR
        </Button>
      </div>
    </div>
  )
}

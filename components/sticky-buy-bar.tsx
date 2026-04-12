"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyBuyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50 md:hidden">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-muted-foreground line-through">R$ 159,90</span>
            <span className="text-lg font-bold text-destructive">R$ 79,90</span>
          </div>
          <p className="text-xs text-muted-foreground">ou 3x de R$ 26,63</p>
        </div>
        <Button 
          size="lg"
          className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-8 rounded-xl shadow-lg"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          COMPRAR
        </Button>
      </div>
    </div>
  )
}

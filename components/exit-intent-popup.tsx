"use client"

import { useEffect, useState } from "react"
import { Clock, ShoppingBag } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useUtmParams } from "@/hooks/use-utm"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const { appendUtmToUrl } = useUtmParams()

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    // Detecta toque para voltar no mobile (history back)
    const handlePopState = () => {
      if (!hasShown) {
        setIsOpen(true)
        setHasShown(true)
        // Previne a navegação de volta
        window.history.pushState(null, "", window.location.href)
      }
    }

    // Adiciona um estado ao histórico para capturar o botão voltar
    window.history.pushState(null, "", window.location.href)

    document.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("popstate", handlePopState)
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("popstate", handlePopState)
    }
  }, [hasShown])

  const handleAcceptOffer = () => {
    const checkoutUrl = appendUtmToUrl("https://seguropagamentos.com.br/backredirect-lisspro")
    window.location.href = checkoutUrl
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="max-w-[95vw] sm:max-w-lg p-0 overflow-hidden border-2 border-primary/20 max-h-[90vh] overflow-y-auto"
        showCloseButton={false}
      >
        {/* Imagem do produto */}
        <div className="relative w-full aspect-square sm:aspect-[4/3]">
          <Image
            src="/images/depilador-produto.png"
            alt="LissPro Depilador Eletrico 2 em 1"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header */}
        <div className="bg-primary text-primary-foreground px-4 py-3 sm:px-6 sm:py-4 text-center">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold text-primary-foreground">
              ESPERA! Oferta Exclusiva
            </DialogTitle>
          </DialogHeader>
          <p className="text-xs sm:text-sm text-primary-foreground/90 mt-1">
            Desconto especial apenas para você!
          </p>
        </div>

        {/* Conteúdo */}
        <div className="p-4 sm:p-6 text-center">
          {/* Preços */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div>
              <p className="text-xs text-muted-foreground">De</p>
              <span className="text-lg sm:text-xl text-muted-foreground line-through">
                R$ 43,84
              </span>
            </div>
            <div className="text-2xl sm:text-3xl text-muted-foreground">→</div>
            <div>
              <p className="text-xs text-primary font-semibold">Por</p>
              <span className="text-2xl sm:text-4xl font-bold text-primary">
                R$ 34,83
              </span>
            </div>
          </div>

          {/* Urgência */}
          <div className="flex items-center justify-center gap-2 text-amber-600 mb-4 sm:mb-5">
            <Clock className="size-4 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">Oferta válida apenas agora!</span>
          </div>

          {/* Botão de ação */}
          <Button
            onClick={handleAcceptOffer}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-lg py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <ShoppingBag className="size-4 sm:size-5 mr-2" />
            QUERO MEU DESCONTO!
          </Button>

          {/* Link para recusar */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            Não, obrigado. Prefiro pagar mais caro.
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

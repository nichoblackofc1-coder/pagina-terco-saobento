"use client"

import { useEffect, useState } from "react"
import { X, Gift, Clock, ShoppingBag } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    // Também detecta quando o usuário pressiona o botão de voltar no mobile
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  const handleAcceptOffer = () => {
    window.location.href = "https://seguropagamentos.com.br/popozuda-desconto"
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="sm:max-w-md p-0 overflow-hidden border-2 border-primary/20"
        showCloseButton={false}
      >
        {/* Header com gradiente */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 sm:p-6 text-center relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <X className="size-5" />
            <span className="sr-only">Fechar</span>
          </button>
          
          <div className="flex justify-center mb-3">
            <div className="bg-white/20 p-3 rounded-full">
              <Gift className="size-8 sm:size-10" />
            </div>
          </div>
          
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-primary-foreground">
              ESPERA! Presente Especial
            </DialogTitle>
          </DialogHeader>
          
          <p className="text-sm sm:text-base text-primary-foreground/90 mt-2">
            Antes de sair, temos uma oferta exclusiva para você!
          </p>
        </div>

        {/* Conteúdo */}
        <div className="p-4 sm:p-6 text-center">
          {/* Preço com desconto */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-1">De</p>
            <span className="text-xl sm:text-2xl text-muted-foreground line-through">
              R$ 43,64
            </span>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-primary font-semibold mb-1">Por apenas</p>
            <span className="text-4xl sm:text-5xl font-bold text-primary">
              R$ 34,83
            </span>
          </div>

          {/* Badge de economia */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-5">
            <span className="font-bold text-sm sm:text-base">Economia de R$ 8,81</span>
          </div>

          {/* Urgência */}
          <div className="flex items-center justify-center gap-2 text-amber-600 mb-5">
            <Clock className="size-4 animate-pulse" />
            <span className="text-sm font-medium">Oferta válida apenas agora!</span>
          </div>

          {/* Botão de ação */}
          <Button
            onClick={handleAcceptOffer}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <ShoppingBag className="size-5 mr-2" />
            QUERO MEU DESCONTO!
          </Button>

          {/* Link para recusar */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            Não, obrigado. Prefiro pagar mais caro.
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

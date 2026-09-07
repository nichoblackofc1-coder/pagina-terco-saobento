"use client"

import { useEffect, useState, useCallback } from "react"
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

  const showPopup = useCallback(() => {
    if (!hasShown) {
      setIsOpen(true)
      setHasShown(true)
    }
  }, [hasShown])

  useEffect(() => {
    // 1. Força popup se voltou de checkout ou de domínios externos de compra
    const referrer = document.referrer.toLowerCase()
    const currentUrl = window.location.href.toLowerCase()
    
    if (
      referrer.includes("checkout") ||
      referrer.includes("comprasegurashop.top") ||
      referrer.includes("compraa-aprovadaa.top") ||
      currentUrl.includes("checkout")
    ) {
      setTimeout(() => {
        showPopup()
      }, 300)
    }

    // 2. Detecta saída do cursor pelo topo (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup()
      }
    }

    // 3. Detecta aceleração do cursor em direção ao topo (exit intent)
    let lastY = 0
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 60 && lastY - e.clientY > 20) {
        showPopup()
      }
      lastY = e.clientY
    }

    // 4. Captura botão "voltar" do navegador / mobile
    const handlePopState = () => {
      showPopup()
      window.history.pushState(null, "", window.location.href)
    }

    // 5. Detecta troca de aba ou minimização
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        showPopup()
      }
    }

    // 6. Detecta perda de foco da janela
    const handleBlur = () => {
      showPopup()
    }

    // Empurra estado no histórico para interceptar o botão voltar
    window.history.pushState(null, "", window.location.href)

    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("popstate", handlePopState)
    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("blur", handleBlur)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("popstate", handlePopState)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("blur", handleBlur)
    }
  }, [hasShown, showPopup])

  const handleAcceptOffer = () => {
    const checkoutUrl = appendUtmToUrl("https://checkout.comprasegurashop.top/checkout/popup")
    window.location.href = checkoutUrl
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-[92vw] xs:max-w-[95vw] sm:max-w-lg p-0 overflow-hidden border-2 border-primary/20 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl"
        showCloseButton={false}
      >
        {/* Imagem do produto */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[4/3]">
          <Image
            src="/images/terco-mao.png"
            alt="Terço de Madeira de São Bento com Mistérios"
            fill
            className="object-contain bg-white p-2"
            loading="lazy"
            sizes="(max-width: 640px) 90vw, 400px"
            quality={70}
          />
        </div>

        {/* Header */}
        <div className="bg-primary text-primary-foreground px-3 py-2.5 xs:px-4 xs:py-3 sm:px-6 sm:py-4 text-center">
          <DialogHeader>
            <DialogTitle className="text-base xs:text-lg sm:text-xl font-bold text-primary-foreground">
              ESPERA! Oferta Especial
            </DialogTitle>
          </DialogHeader>
          <p className="text-[10px] xs:text-xs sm:text-sm text-primary-foreground/90 mt-0.5 xs:mt-1">
            Terço de São Bento com Mistérios - Frete Grátis!
          </p>
        </div>

        {/* Conteúdo */}
        <div className="p-3 xs:p-4 sm:p-6 text-center">
          {/* Preços */}
          <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-2.5 xs:mb-3 sm:mb-4">
            <div>
              <p className="text-[10px] xs:text-xs text-muted-foreground">De</p>
              <span className="text-base xs:text-lg sm:text-xl text-muted-foreground line-through">
                R$ 23,84
              </span>
            </div>
            <div className="text-xl xs:text-2xl sm:text-3xl text-muted-foreground">→</div>
            <div>
              <p className="text-[10px] xs:text-xs text-primary font-semibold">Por apenas</p>
              <span className="text-xl xs:text-2xl sm:text-4xl font-bold text-primary">
                R$ 19,90
              </span>
            </div>
          </div>

          {/* Urgência */}
          <div className="flex items-center justify-center gap-1.5 xs:gap-2 text-amber-600 mb-3 xs:mb-4 sm:mb-5">
            <Clock className="size-3.5 xs:size-4 animate-pulse" />
            <span className="text-[11px] xs:text-xs sm:text-sm font-medium">Oferta válida apenas agora!</span>
          </div>

          {/* Botão de ação */}
          <Button
            onClick={handleAcceptOffer}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs xs:text-sm sm:text-lg py-4 xs:py-5 sm:py-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 sm:hover:scale-[1.02]"
          >
            <ShoppingBag className="size-3.5 xs:size-4 sm:size-5 mr-1.5 xs:mr-2" />
            QUERO MEU DESCONTO!
          </Button>

          {/* Link para recusar */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-2.5 xs:mt-3 sm:mt-4 text-[10px] xs:text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            Prefiro pagar mais caro
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useUtmParams } from "@/hooks/use-utm"

const SPECIAL_OFFER_URL = "https://seguropagamentos.com.br/popozuda-especial"

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const { appendUtmToUrl } = useUtmParams()

  const triggerPopup = useCallback(() => {
    if (!hasShown) {
      setShowPopup(true)
      setHasShown(true)
      sessionStorage.setItem("exitPopupShown", "true")
    }
  }, [hasShown])

  useEffect(() => {
    // Verificar se já mostrou o popup nesta sessão
    const alreadyShown = sessionStorage.getItem("exitPopupShown")
    if (alreadyShown) {
      setHasShown(true)
      return
    }

    // Desktop: detecta quando o mouse sai pela parte superior
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerPopup()
      }
    }

    // Mobile: detecta quando o usuário tenta voltar ou scroll rápido para cima
    let lastScrollY = window.scrollY
    let scrollUpCount = 0
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Detecta scroll rápido para cima (intenção de sair)
      if (currentScrollY < lastScrollY && currentScrollY < 100) {
        scrollUpCount++
        if (scrollUpCount >= 3) {
          triggerPopup()
        }
      } else {
        scrollUpCount = 0
      }
      
      lastScrollY = currentScrollY
    }

    // Mobile: detecta quando o usuário tenta sair via botão voltar
    const handleBeforeUnload = () => {
      triggerPopup()
    }

    // Adiciona um delay antes de ativar os detectores
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
      window.addEventListener("scroll", handleScroll, { passive: true })
      window.addEventListener("beforeunload", handleBeforeUnload)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [hasShown, triggerPopup])

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleAcceptOffer = () => {
    window.open(appendUtmToUrl(SPECIAL_OFFER_URL), "_blank")
    setShowPopup(false)
  }

  if (!showPopup) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 xs:p-3 sm:p-4 bg-black/70 animate-fadeIn"
      onClick={handleClose}
    >
      <div 
        className="relative bg-white rounded-lg max-w-sm sm:max-w-md w-full overflow-hidden shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 w-7 h-7 xs:w-8 xs:h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 xs:w-5 xs:h-5" />
        </button>

        {/* Header com cor de destaque */}
        <div className="bg-[#fe9a00] text-white py-2 xs:py-2.5 sm:py-3 px-3 xs:px-4 text-center">
          <p className="text-xs xs:text-sm font-bold uppercase tracking-wide">Espere! Oferta Exclusiva</p>
        </div>

        {/* Conteúdo */}
        <div className="p-3 xs:p-4 sm:p-5">
          {/* Imagem do produto */}
          <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 mx-auto mb-3 xs:mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner1-f4TX1mgPjhXF4yBQtwq8VK2FnZhoJK.webp"
              alt="POPOZUDA Cream"
              fill
              className="object-contain"
              sizes="208px"
            />
          </div>

          {/* Texto da oferta */}
          <h2 className="text-base xs:text-lg sm:text-xl font-bold text-center text-foreground mb-1.5 xs:mb-2">
            Leve 1 Unidade com Desconto Especial!
          </h2>
          <p className="text-xs xs:text-sm text-center text-muted-foreground mb-3 xs:mb-4">
            Essa oferta exclusiva so aparece uma vez. Aproveite agora!
          </p>

          {/* Preços */}
          <div className="flex items-center justify-center gap-2 xs:gap-3 mb-3 xs:mb-4">
            <span className="text-sm xs:text-base sm:text-lg text-muted-foreground line-through">
              R$ 37,84
            </span>
            <span className="text-2xl xs:text-2xl sm:text-3xl font-bold text-[#E63946]">
              R$ 27,90
            </span>
          </div>

          {/* Botões */}
          <div className="space-y-1.5 xs:space-y-2">
            <Button
              onClick={handleAcceptOffer}
              className="w-full bg-[#00D133] hover:bg-[#00B82D] text-white font-bold py-4 xs:py-5 text-sm xs:text-base rounded-md"
            >
              QUERO APROVEITAR
            </Button>
            <button
              onClick={handleClose}
              className="w-full text-xs xs:text-sm text-muted-foreground hover:text-foreground py-1.5 xs:py-2 transition-colors"
            >
              Nao, obrigado
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

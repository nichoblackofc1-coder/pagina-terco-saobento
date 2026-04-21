"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useUtmParams } from "@/hooks/use-utm"

const SPECIAL_OFFER_URL = "https://seguropagamentos.com.br/popozuda-especial"

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const { appendUtmToUrl } = useUtmParams()

  useEffect(() => {
    // Verificar se já mostrou o popup nesta sessão
    const alreadyShown = sessionStorage.getItem("exitPopupShown")
    if (alreadyShown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detecta quando o mouse sai pela parte superior da página
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true)
        setHasShown(true)
        sessionStorage.setItem("exitPopupShown", "true")
      }
    }

    // Adiciona um delay antes de ativar o detector
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  const handleClose = () => {
    setShowPopup(false)
  }

  const handleAcceptOffer = () => {
    window.open(appendUtmToUrl(SPECIAL_OFFER_URL), "_blank")
    setShowPopup(false)
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 animate-fadeIn">
      <div 
        className="relative bg-white rounded-lg max-w-md w-full overflow-hidden shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header com cor de destaque */}
        <div className="bg-[#fe9a00] text-white py-3 px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-wide">Espere! Oferta Exclusiva</p>
        </div>

        {/* Conteúdo */}
        <div className="p-5">
          {/* Imagem do produto */}
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner1-f4TX1mgPjhXF4yBQtwq8VK2FnZhoJK.webp"
              alt="POPOZUDA Cream"
              fill
              className="object-contain"
            />
          </div>

          {/* Texto da oferta */}
          <h2 className="text-xl font-bold text-center text-foreground mb-2">
            Leve 1 Unidade com Desconto Especial!
          </h2>
          <p className="text-sm text-center text-muted-foreground mb-4">
            Essa oferta exclusiva so aparece uma vez. Aproveite agora!
          </p>

          {/* Preços */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-lg text-muted-foreground line-through">
              R$ 37,84
            </span>
            <span className="text-3xl font-bold text-[#E63946]">
              R$ 27,90
            </span>
          </div>

          {/* Badge de economia */}
          <div className="bg-green-100 text-green-700 text-sm font-medium text-center py-2 px-4 rounded-lg mb-4">
            Economize R$ 9,94 agora!
          </div>

          {/* Botões */}
          <div className="space-y-2">
            <Button
              onClick={handleAcceptOffer}
              className="w-full bg-[#00D133] hover:bg-[#00B82D] text-white font-bold py-5 text-base rounded-md"
            >
              QUERO APROVEITAR
            </Button>
            <button
              onClick={handleClose}
              className="w-full text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
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

"use client"

import { useState, useEffect } from "react"
import { Smartphone } from "lucide-react"

export function DesktopBlocker({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      // Considera mobile se a largura for menor que 768px
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsLoading(false)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  // Mostra nada enquanto carrega para evitar flash
  if (isLoading) {
    return null
  }

  // Se for mobile, mostra o conteúdo normal
  if (isMobile) {
    return <>{children}</>
  }

  // Se for desktop, mostra a tela de bloqueio
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-md">
        {/* Ícone */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 border-2 border-gray-500 rounded-lg flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-gray-500" />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-xl text-gray-300 font-light mb-4">
          Esta página não está funcionando
        </h1>

        {/* Descrição */}
        <p className="text-gray-500 text-sm mb-2">
          Esta página está disponível apenas para dispositivos móveis.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Acesse pelo seu celular para continuar.
        </p>

        {/* Código de erro simulado */}
        <p className="text-gray-600 text-xs mb-6 font-mono">
          ERR_DESKTOP_NOT_SUPPORTED
        </p>

        {/* Botão recarregar */}
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-[#3b82f6]/20 text-[#60a5fa] rounded-full text-sm hover:bg-[#3b82f6]/30 transition-colors"
        >
          Recarregar
        </button>
      </div>
    </div>
  )
}

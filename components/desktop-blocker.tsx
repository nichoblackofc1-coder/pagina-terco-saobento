"use client"

import { useState, useEffect } from "react"

export function DesktopBlocker({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsLoading(false)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  if (isLoading) {
    return null
  }

  if (isMobile) {
    return <>{children}</>
  }

  // Desktop: tela de erro como se a página estivesse fora do ar
  return (
    <div className="min-h-screen bg-[#202124] flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Ícone de página quebrada */}
        <div className="mb-6 flex justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="8" width="40" height="48" rx="2" stroke="#9AA0A6" strokeWidth="2" fill="none"/>
            <path d="M20 8V4C20 2.89543 20.8954 2 22 2H42C43.1046 2 44 2.89543 44 4V8" stroke="#9AA0A6" strokeWidth="2"/>
            <line x1="20" y1="20" x2="44" y2="20" stroke="#9AA0A6" strokeWidth="2"/>
            <line x1="20" y1="28" x2="44" y2="28" stroke="#9AA0A6" strokeWidth="2"/>
            <line x1="20" y1="36" x2="36" y2="36" stroke="#9AA0A6" strokeWidth="2"/>
            <circle cx="48" cy="48" r="12" fill="#202124" stroke="#9AA0A6" strokeWidth="2"/>
            <path d="M44 44L52 52M52 44L44 52" stroke="#9AA0A6" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="text-[#e8eaed] text-xl font-normal mb-3">
          Esta página não está funcionando
        </h1>

        <p className="text-[#9aa0a6] text-sm mb-1">
          Nenhum dado foi enviado por
        </p>

        <p className="text-[#9aa0a6] text-xs font-mono mb-8">
          ERR_EMPTY_RESPONSE
        </p>

        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-[#8ab4f8]/10 text-[#8ab4f8] border border-[#8ab4f8]/30 rounded-full text-sm hover:bg-[#8ab4f8]/20 transition-colors"
        >
          Recarregar
        </button>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Flame, Clock } from "lucide-react"

export function MarqueeBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 59,
    seconds: 54
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          // Reset timer when it reaches 0
          hours = 2
          minutes = 59
          seconds = 54
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (num: number) => num.toString().padStart(2, '0')
  
  return (
    <div className="flex flex-col">
      {/* Barra superior navy com gradiente elegante */}
      <div className="bg-gradient-to-r from-[#173359] via-[#20416F] to-[#2E5A8F] text-primary-foreground py-2 sm:py-2.5 px-3 sm:px-4 shadow-sm">
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          {/* Últimas unidades */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-400/20 text-amber-300">
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider">ÚLTIMAS UNIDADES COM FRETE GRÁTIS</span>
          </div>
          
          {/* Timer */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
            <span className="text-[11px] sm:text-xs font-semibold text-white/90">Encerra em:</span>
            <span className="text-xs sm:text-sm font-extrabold tabular-nums text-white">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>
      
      {/* Faixa de valor/seguranca */}
      <div className="bg-white py-2 sm:py-2.5 px-3 sm:px-4 text-center border-b border-border flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-[11px] sm:text-xs text-muted-foreground">
        <span className="font-semibold text-primary">✓ Produto Oficial com Medalha Sagrada</span>
        <span className="hidden xs:inline">•</span>
        <span>Envio Rápido para Todo o Brasil</span>
      </div>
    </div>
  )
}

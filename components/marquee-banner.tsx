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
      {/* Barra superior laranja */}
      <div className="bg-primary text-primary-foreground py-2 sm:py-2.5 px-3 sm:px-4">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {/* Últimas unidades */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">ÚLTIMAS UNIDADES</span>
          </div>
          
          {/* Timer */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-bold tabular-nums">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>
      
      {/* Título do produto */}
      <div className="bg-white py-2 sm:py-3 px-3 sm:px-4 text-center border-b border-border">
        <h1 className="text-primary font-semibold text-sm sm:text-base">
          Terço de São Bento com Mistérios
        </h1>
      </div>
    </div>
  )
}

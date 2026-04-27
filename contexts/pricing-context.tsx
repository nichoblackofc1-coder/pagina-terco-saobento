"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export const pricingOptions = [
  {
    id: 1,
    quantity: 1,
    label: "1 Unidade",
    originalPrice: 53.75,
    price: 34.83,
    badge: null,
    checkoutUrl: "https://seguropagamentos.com.br/lisspro1",
  },
  {
    id: 2,
    quantity: 2,
    label: "2 Unidades",
    originalPrice: 72.54,
    price: 53.75,
    badge: "Mais vendido",
    badgeExtra: "30% OFF",
    checkoutUrl: "https://seguropagamentos.com.br/lisspro2",
  },
  {
    id: 3,
    quantity: 3,
    label: "3 Unidades",
    originalPrice: 123.64,
    price: 83.72,
    badge: "Brindes Exclusivos",
    badgeExtra: "40% OFF",
    checkoutUrl: "https://seguropagamentos.com.br/lisspro3",
  },
]

type PricingOption = typeof pricingOptions[number]

interface PricingContextType {
  selectedOption: number
  setSelectedOption: (id: number) => void
  currentOption: PricingOption
}

const PricingContext = createContext<PricingContextType | undefined>(undefined)

export function PricingProvider({ children }: { children: ReactNode }) {
  const [selectedOption, setSelectedOption] = useState(1)
  
  const currentOption = pricingOptions.find(opt => opt.id === selectedOption) || pricingOptions[0]

  return (
    <PricingContext.Provider value={{ selectedOption, setSelectedOption, currentOption }}>
      {children}
    </PricingContext.Provider>
  )
}

export function usePricing() {
  const context = useContext(PricingContext)
  if (context === undefined) {
    throw new Error("usePricing must be used within a PricingProvider")
  }
  return context
}

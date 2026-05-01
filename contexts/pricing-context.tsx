"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export const pricingOptions = [
  {
    id: 1,
    quantity: 2,
    label: "Kit Compre 1 Leve 2",
    originalPrice: 87.64,
    price: 43.82,
    badge: null,
    checkoutUrl: "https://loja.compra-segura.icu/adehrp6F",
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

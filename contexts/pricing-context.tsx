"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export const pricingOptions = [
  {
    id: 1,
    quantity: 1,
    label: "1 Unidade",
    originalPrice: 97.43,
    price: 37.84,
    badge: null,
    checkoutUrl: "https://seguropagamentos.com.br/popozuda",
  },
  {
    id: 2,
    quantity: 2,
    label: "2 Unidades",
    originalPrice: 194.86,
    price: 57.00,
    badge: "Mais vendido",
    checkoutUrl: "https://seguropagamentos.com.br/popozuda2",
  },
  {
    id: 3,
    quantity: 3,
    label: "3 Unidades",
    originalPrice: 292.29,
    price: 77.00,
    badge: null,
    checkoutUrl: "https://seguropagamentos.com.br/popozuda3",
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
  const [selectedOption, setSelectedOption] = useState(2)
  
  const currentOption = pricingOptions.find(opt => opt.id === selectedOption) || pricingOptions[1]

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

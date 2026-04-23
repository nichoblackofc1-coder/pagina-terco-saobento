"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export const pricingOptions = [
  {
    id: 1,
    quantity: 1,
    label: "1 Unidade",
    originalPrice: 159.90,
    price: 97.90,
    badge: null,
    checkoutUrl: "https://seguropagamentos.com.br/depilador",
  },
  {
    id: 2,
    quantity: 2,
    label: "2 Unidades",
    originalPrice: 319.80,
    price: 167.90,
    badge: "Mais vendido",
    badgeExtra: "30% OFF",
    checkoutUrl: "https://seguropagamentos.com.br/depilador2",
  },
  {
    id: 3,
    quantity: 3,
    label: "3 Unidades",
    originalPrice: 479.70,
    price: 227.90,
    badge: "Brindes Exclusivos",
    badgeExtra: "40% OFF",
    checkoutUrl: "https://seguropagamentos.com.br/depilador3",
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

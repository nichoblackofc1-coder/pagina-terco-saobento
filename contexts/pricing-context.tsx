"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export interface PricingOption {
  id: number
  quantity: number
  title: string
  subtitle?: string
  originalPrice: number
  price: number
  unitPrice?: number
  badge?: string | null
  savings?: string
  checkoutUrl: string
}

export interface GiftOption {
  id: string
  name: string
  image: string
  badge?: string
}

export const pricingOptions: PricingOption[] = [
  {
    id: 1,
    quantity: 1,
    title: "1 Unidade",
    subtitle: "Terço de São Bento",
    originalPrice: 47.68,
    price: 23.84,
    badge: null,
    savings: "Economize R$ 23,84 (50% OFF)",
    checkoutUrl: "https://checkout.comprasegurashop.top/checkout/terco-1",
  },
  {
    id: 2,
    quantity: 2,
    title: "Compre 1 Leve 2",
    subtitle: "2x Terços de São Bento",
    originalPrice: 69.12,
    price: 34.56,
    unitPrice: 17.28,
    badge: "MAIS VENDIDO",
    savings: "Economize R$ 34,56 (50% OFF)",
    checkoutUrl: "https://checkout.comprasegurashop.top/checkout/kit2",
  },
  {
    id: 3,
    quantity: 3,
    title: "Compre 2 Leve 3",
    subtitle: "3x Terços de São Bento",
    originalPrice: 95.64,
    price: 43.82,
    unitPrice: 14.61,
    badge: "SUPER DESCONTO",
    savings: "Economize R$ 51,82 (54% OFF)",
    checkoutUrl: "https://checkout.comprasegurashop.top/checkout/kit3",
  },
]

export const giftOptions: GiftOption[] = [
  {
    id: "madeira-escura",
    name: "Madeira Nobre Escura",
    image: "/images/terco-2.png",
    badge: "GRÁTIS",
  },
  {
    id: "madeira-classica",
    name: "Madeira Natural Imbuia",
    image: "/images/terco-3.png",
    badge: "GRÁTIS",
  },
]

interface PricingContextType {
  selectedOption: number
  setSelectedOption: (id: number) => void
  currentOption: PricingOption
  selectedGift: string
  setSelectedGift: (id: string) => void
  currentGift: GiftOption
}

const PricingContext = createContext<PricingContextType | undefined>(undefined)

export function PricingProvider({ children }: { children: ReactNode }) {
  // ponytail: default to option 2 (best seller); upgrade with url param/ab-test if needed
  const [selectedOption, setSelectedOption] = useState<number>(2)
  const [selectedGift, setSelectedGift] = useState<string>(giftOptions[0].id)
  
  const currentOption = pricingOptions.find(opt => opt.id === selectedOption) || pricingOptions[0]
  const currentGift = giftOptions.find(g => g.id === selectedGift) || giftOptions[0]

  return (
    <PricingContext.Provider 
      value={{ 
        selectedOption, 
        setSelectedOption, 
        currentOption,
        selectedGift,
        setSelectedGift,
        currentGift
      }}
    >
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

"use client"

import dynamic from "next/dynamic"
import { MarqueeBanner } from "@/components/marquee-banner"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { TrustBadges } from "@/components/trust-badges"
import { PricingProvider } from "@/contexts/pricing-context"

// Lazy load de componentes não críticos
const ProductBenefits = dynamic(() => import("@/components/product-benefits").then(mod => ({ default: mod.ProductBenefits })), {
  loading: () => <div className="py-4 sm:py-8"><div className="h-40 bg-muted/50 rounded-lg animate-pulse" /></div>
})
const ProductReviews = dynamic(() => import("@/components/product-reviews").then(mod => ({ default: mod.ProductReviews })), {
  loading: () => <div className="py-5 sm:py-8"><div className="h-60 bg-muted/50 rounded-lg animate-pulse" /></div>
})
const ProductFAQ = dynamic(() => import("@/components/product-faq").then(mod => ({ default: mod.ProductFAQ })), {
  loading: () => <div className="py-4 sm:py-8"><div className="h-40 bg-muted/50 rounded-lg animate-pulse" /></div>
})
const StickyBuyBar = dynamic(() => import("@/components/sticky-buy-bar").then(mod => ({ default: mod.StickyBuyBar })), {
  ssr: false
})
const ExitIntentPopup = dynamic(() => import("@/components/exit-intent-popup").then(mod => ({ default: mod.ExitIntentPopup })), {
  ssr: false
})

const productImages = [
  "/images/terco-mao.png",
  "/images/terco-2.png",
  "/images/terco-3.png",
  "/images/terco-4.png",
  "/images/terco-5.png",
]

// Terço de Madeira de São Bento com Mistérios
export default function ProductPage() {
  return (
    <PricingProvider>
    <main className="min-h-screen bg-background pb-20 sm:pb-32 md:pb-8">
      {/* Banner marquee */}
      <MarqueeBanner />
      
      {/* Faixa de urgência - TikTok Style */}
      <div className="bg-primary text-primary-foreground py-1 sm:py-3 text-center px-2">
        <p className="text-[10px] sm:text-base font-bold tracking-wide">
          Restam apenas 23 terços em estoque!
        </p>
      </div>
      
      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-6">
        <div className="grid md:grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {/* Galeria de imagens */}
          <div className="md:sticky md:top-4 md:self-start">
            <ProductGallery images={productImages} />
          </div>
          
          {/* Informações do produto */}
          <div>
            <ProductInfo />
          </div>
        </div>

        {/* Badges de confiança */}
        <TrustBadges />

        {/* Benefícios */}
        <ProductBenefits />

        {/* Avaliações */}
        <ProductReviews />

        {/* FAQ */}
        <ProductFAQ />

        {/* Footer info */}
        <footer className="py-4 sm:py-8 text-center text-[10px] sm:text-sm text-muted-foreground border-t border-border mt-4 sm:mt-8">
          <p className="font-medium text-foreground mb-1 sm:mb-2">Terço São Bento - Loja Oficial</p>
          <p>Entregamos em todo Brasil</p>
          <p className="mt-1.5 sm:mt-4">Suporte em até 24hrs</p>
          <p className="mt-1.5 sm:mt-4 text-[8px] sm:text-xs">
            2024 Terço São Bento. Todos os direitos reservados.
          </p>
        </footer>
      </div>

      {/* Barra fixa de compra (mobile) */}
      <StickyBuyBar />

      {/* Popup de exit intent com desconto */}
      <ExitIntentPopup />
    </main>
    </PricingProvider>
  )
}

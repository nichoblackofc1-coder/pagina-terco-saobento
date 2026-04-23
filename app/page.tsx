import { MarqueeBanner } from "@/components/marquee-banner"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductBenefits } from "@/components/product-benefits"
import { TrustBadges } from "@/components/trust-badges"
import { ProductReviews } from "@/components/product-reviews"
import { ProductFAQ } from "@/components/product-faq"
import { StickyBuyBar } from "@/components/sticky-buy-bar"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { PricingProvider } from "@/contexts/pricing-context"

const productImages = [
  "/images/depilador-principal.png",
  "/images/depilador-uso.png",
  "/images/depilador-tecnologia.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner1-f4TX1mgPjhXF4yBQtwq8VK2FnZhoJK.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner2-aIut77aLvzZMksyJzukHyThICwTwZZ.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner3-WSTV9vHsAFboaHXjdyyChSnNzCm3ll.webp",
]

export default function ProductPage() {
  return (
    <PricingProvider>
    <main className="min-h-screen bg-background pb-24 xs:pb-28 sm:pb-32 md:pb-8">
      {/* Banner marquee */}
      <MarqueeBanner />
      
      {/* Faixa de urgência - TikTok Style */}
      <div className="bg-primary text-primary-foreground py-1.5 xs:py-2 sm:py-3 text-center px-2">
        <p className="text-xs xs:text-sm sm:text-base font-bold tracking-wide">
          ADEUS FOLICULITE! Pele lisinha sem dor e sem gilete!
        </p>
      </div>
      
      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-2 xs:px-3 sm:px-4 py-3 xs:py-4 sm:py-6">
        <div className="grid md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
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
        <footer className="py-5 xs:py-6 sm:py-8 text-center text-[11px] xs:text-xs sm:text-sm text-muted-foreground border-t border-border mt-5 xs:mt-6 sm:mt-8">
          <p className="font-medium text-foreground mb-1 xs:mb-1.5 sm:mb-2">LissPro - Loja Oficial</p>
          <p>Entregamos em todo Brasil com entrega garantida e segurada</p>
          <p className="mt-2 xs:mt-3 sm:mt-4">
            Possuimos uma equipe de suporte que responde em ate 24hrs
          </p>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-[9px] xs:text-[10px] sm:text-xs">
            2024 LissPro. Todos os direitos reservados.
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

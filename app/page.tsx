import { MarqueeBanner } from "@/components/marquee-banner"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductBenefits } from "@/components/product-benefits"
import { TrustBadges } from "@/components/trust-badges"
import { ProductReviews } from "@/components/product-reviews"
import { ProductFAQ } from "@/components/product-faq"
import { StickyBuyBar } from "@/components/sticky-buy-bar"
import { PricingProvider } from "@/contexts/pricing-context"

const productImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner1-f4TX1mgPjhXF4yBQtwq8VK2FnZhoJK.webp",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner2-aIut77aLvzZMksyJzukHyThICwTwZZ.webp",
  "/images/cicatribem-como-usar.png",
  "/images/cicatribem-composicao.png",
  "/images/cicatribem-depoimentos.png"
]

export default function ProductPage() {
  return (
    <PricingProvider>
    <main className="min-h-screen bg-background pb-20 sm:pb-24 md:pb-8">
      {/* Banner marquee */}
      <MarqueeBanner />
      
      {/* Faixa de urgência */}
      <div className="bg-[#fe9a00] text-white py-2 sm:py-3 text-center">
        <p className="text-sm sm:text-base font-bold tracking-wide">
          Restam apenas <span className="font-extrabold">7 unidades</span> em estoque!
        </p>
      </div>
      
      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
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
        <footer className="py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground border-t border-border mt-6 sm:mt-8">
          <p className="font-medium text-foreground mb-1.5 sm:mb-2">Loja Oficial POPOZUDA</p>
          <p>CNPJ: 84.099.429/0001-78</p>
          <p className="mt-3 sm:mt-4">
            Dúvidas? Entre em contato pelo WhatsApp
          </p>
          <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs">
            2024 POPOZUDA Cosméticos. Todos os direitos reservados.
          </p>
        </footer>
      </div>

      {/* Barra fixa de compra (mobile) */}
      <StickyBuyBar />
    </main>
    </PricingProvider>
  )
}

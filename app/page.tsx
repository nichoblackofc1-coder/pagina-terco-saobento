import { MarqueeBanner } from "@/components/marquee-banner"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductBenefits } from "@/components/product-benefits"
import { TrustBadges } from "@/components/trust-badges"
import { ProductReviews } from "@/components/product-reviews"
import { ProductFAQ } from "@/components/product-faq"
import { StickyBuyBar } from "@/components/sticky-buy-bar"

const productImages = [
  "/images/cicatribem-produto.png"
]

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background pb-24 md:pb-8">
      {/* Banner marquee */}
      <MarqueeBanner />
      
      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-8">
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
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-8">
          <p className="font-medium text-foreground mb-2">Loja Oficial Cicatribem</p>
          <p>CNPJ: 00.000.000/0001-00</p>
          <p className="mt-4">
            Dúvidas? Entre em contato pelo WhatsApp
          </p>
          <p className="mt-4 text-xs">
            2024 Cicatribem Dermocosméticos. Todos os direitos reservados.
          </p>
        </footer>
      </div>

      {/* Barra fixa de compra (mobile) */}
      <StickyBuyBar />
    </main>
  )
}

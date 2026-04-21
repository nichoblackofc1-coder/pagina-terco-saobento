import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'POPOZUDA - Creme Redutor de Estrias e Celulite | Loja Oficial',
  description: 'POPOZUDA Creme 200g - Reduz estrias, celulite e ativa a circulacao. Resultados visiveis em semanas. Compre agora com desconto!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#fe9a00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
        <link rel="preload" as="image" href="/images/product-banner.png" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner1-f4TX1mgPjhXF4yBQtwq8VK2FnZhoJK.webp" />
        <Script id="utmify-pixel" strategy="lazyOnload">
          {`
            window.pixelId = "69dc4648e55c012f0860327d";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

"use client"

export function MarqueeBanner() {
  const text = "loja oficial POPOZUDA • loja oficial POPOZUDA • loja oficial POPOZUDA • loja oficial POPOZUDA • "
  
  return (
    <div className="bg-foreground text-background py-1.5 sm:py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-2 sm:mx-4 text-xs sm:text-sm font-semibold tracking-wide">{text}</span>
        <span className="mx-2 sm:mx-4 text-xs sm:text-sm font-semibold tracking-wide">{text}</span>
        <span className="mx-2 sm:mx-4 text-xs sm:text-sm font-semibold tracking-wide">{text}</span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  )
}

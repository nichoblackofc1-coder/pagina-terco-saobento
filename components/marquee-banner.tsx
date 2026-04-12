"use client"

export function MarqueeBanner() {
  const text = "loja oficial CICATRIBEM • loja oficial CICATRIBEM • loja oficial CICATRIBEM • loja oficial CICATRIBEM • "
  
  return (
    <div className="bg-[#0066cc] text-white py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4 text-sm font-semibold tracking-wide">{text}</span>
        <span className="mx-4 text-sm font-semibold tracking-wide">{text}</span>
        <span className="mx-4 text-sm font-semibold tracking-wide">{text}</span>
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

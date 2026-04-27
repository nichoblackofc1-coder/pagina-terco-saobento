export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner skeleton */}
      <div className="h-8 bg-muted animate-pulse" />
      <div className="h-8 bg-primary/20 animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-2 sm:py-6">
        <div className="grid md:grid-cols-2 gap-2 sm:gap-6 md:gap-8">
          {/* Galeria skeleton */}
          <div className="space-y-2">
            <div className="aspect-square bg-muted rounded-lg animate-pulse" />
            <div className="flex gap-1.5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-muted rounded-md animate-pulse" />
              ))}
            </div>
          </div>
          
          {/* Info skeleton */}
          <div className="space-y-3">
            <div className="h-6 bg-muted rounded w-1/3 animate-pulse" />
            <div className="h-8 bg-muted rounded w-full animate-pulse" />
            <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
            <div className="h-12 bg-muted rounded w-full animate-pulse" />
            <div className="h-14 bg-primary/20 rounded w-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

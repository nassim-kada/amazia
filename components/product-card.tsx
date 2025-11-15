import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPin, Star, Heart, ShoppingBag } from 'lucide-react'
import type { Product } from '@/lib/data'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
  onFavorite?: (id: string) => void
  isFavorite?: boolean
}

export function ProductCard({ product, onFavorite, isFavorite }: ProductCardProps) {
  const [favorite, setFavorite] = useState(isFavorite || false)

  const handleFavorite = () => {
    setFavorite(!favorite)
    onFavorite?.(product.id)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all">
      {/* Image */}
      <div className="relative overflow-hidden bg-muted h-48">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-foreground/50 font-semibold text-center px-4">{product.category}</span>
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 bg-white rounded-full p-2 hover:scale-110 transition-transform"
          aria-label="Add to favorites"
        >
          <Heart
            size={18}
            className={favorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-2">
          by <span className="font-semibold text-foreground">{product.artisan}</span>
        </p>

        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin size={14} />
          <span>{product.location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and CTA */}
        <div className="border-t border-border pt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <Button
            size="icon"
            disabled={!product.inStock}
            variant={product.inStock ? 'default' : 'outline'}
          >
            <ShoppingBag size={20} />
          </Button>
        </div>
      </div>
    </Card>
  )
}

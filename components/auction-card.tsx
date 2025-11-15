import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import type { Auction } from '@/lib/data'

interface AuctionCardProps {
  auction: Auction
}

export function AuctionCard({ auction }: AuctionCardProps) {
  return (
    <Link href={`/auction/${auction.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden bg-muted h-48">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
            <span className="text-foreground/50 font-semibold text-center px-4">{auction.category}</span>
          </div>
          <Badge
            className={`absolute top-3 right-3 text-white ${
              auction.status === 'ending-soon' ? 'bg-red-500' : 'bg-green-500'
            }`}
          >
            {auction.status === 'ending-soon' ? 'Ending Soon' : 'Active'}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {auction.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-2">
            by <span className="font-semibold text-foreground">{auction.artisan}</span>
          </p>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <MapPin size={14} />
            <span>{auction.location}</span>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {auction.description}
          </p>

          <div className="space-y-2 mb-4 border-t border-border pt-4">
            <div>
              <p className="text-xs text-muted-foreground">Current Bid</p>
              <p className="text-2xl font-bold text-primary">${auction.currentBid}</p>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Started at: ${auction.startingBid}</span>
              <span className="font-semibold text-foreground">{auction.bids} bids</span>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-3 flex items-center gap-2 mb-4">
            <Clock className="text-accent" size={18} />
            <div>
              <p className="text-xs text-muted-foreground">Ends in</p>
              <p className="text-sm font-semibold text-foreground">{auction.endsIn}</p>
            </div>
          </div>

          <div className="text-accent font-semibold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            Place Bid <ArrowRight size={16} />
          </div>
        </div>
      </Card>
    </Link>
  )
}

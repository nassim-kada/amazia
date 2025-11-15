import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { MapPin, CheckCircle2, ChevronRight } from 'lucide-react'
import type { HostProfile } from '@/lib/data'

interface HostCardProps {
  host: HostProfile
}

export function HostCard({ host }: HostCardProps) {
  return (
    <Link href={`/generations/${host.id}`}>
      <Card className="group overflow-hidden hover:shadow-md hover:border-primary/30 transition-all cursor-pointer h-full flex flex-col">
        <div className="relative overflow-hidden bg-accent/20 h-56">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
            <div className="text-5xl font-serif font-light text-primary/30">{host.name.substring(0, 2)}</div>
          </div>
          {host.verified && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground font-light" variant="secondary">
              <CheckCircle2 size={14} className="mr-1" /> Verified
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-5 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-serif font-light text-foreground group-hover:text-primary transition-colors">
                {host.name}
              </h3>
              <p className="text-sm text-muted-foreground font-light">{host.age} years old</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3 font-light">
            <MapPin size={16} />
            <span>{host.location}</span>
          </div>

          <p className="text-sm font-normal text-primary mb-3">
            {host.shortBio}
          </p>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 font-light">
            {host.story}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {host.expertise.slice(0, 3).map(exp => (
              <Badge key={exp} variant="secondary" className="text-xs font-light">
                {exp}
              </Badge>
            ))}
          </div>

          <div className="border-t border-border/50 pt-4 mb-4 space-y-2">
            <div className="flex justify-between text-sm font-light">
              <span className="text-muted-foreground">Activities Led</span>
              <span className="text-foreground font-normal">{host.activities}</span>
            </div>
            <div className="flex justify-between text-sm font-light">
              <span className="text-muted-foreground">Followers</span>
              <span className="text-foreground font-normal">{host.followers.toLocaleString()}</span>
            </div>
          </div>

          <div className="text-primary font-light text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            View Profile <ChevronRight size={16} />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

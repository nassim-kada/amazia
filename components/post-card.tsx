import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle, Share2, MapPin } from 'lucide-react'
import type { Post } from '@/lib/data'
import { useState } from 'react'

interface PostCardProps {
  post: Post
  onLike?: (id: string) => void
  isLiked?: boolean
}

export function PostCard({ post, onLike, isLiked }: PostCardProps) {
  const [liked, setLiked] = useState(isLiked || false)

  const handleLike = () => {
    setLiked(!liked)
    onLike?.(post.id)
  }

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {/* Post Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <img
              src={post.avatar || '/placeholder.svg'}
              alt={post.author}
              className="w-12 h-12 rounded-full bg-muted"
            />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-foreground">{post.author}</h4>
                <Badge variant="secondary" className="text-xs">
                  {post.badge}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>{post.location}</span>
              </div>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{post.timestamp}</span>
        </div>

        <p className="text-foreground leading-relaxed">{post.content}</p>
      </div>

      {/* Post Actions */}
      <div className="p-4 space-y-3 border-t border-border">
        <div className="flex justify-between text-sm text-muted-foreground px-2">
          <span>{post.likes + (liked ? 1 : 0)} likes</span>
          <div className="flex gap-4">
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex-1 flex items-center justify-center gap-2 ${
              liked ? 'text-red-500 bg-red-500/10' : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
            }`}
          >
            <Heart size={18} className={liked ? 'fill-current' : ''} />
            Like
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <MessageCircle size={18} />
            Comment
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <Share2 size={18} />
            Share
          </Button>
        </div>
      </div>
    </Card>
  )
}

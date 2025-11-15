'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'
import { Award, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { PostCard } from '@/components/post-card'
import { posts, leaderboard, badges } from '@/lib/data'
import { PageHeader } from '@/components/page-header'

export default function CommunityPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [likedPosts, setLikedPosts] = useState<string[]>([])

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    )
  }

  const filteredPosts = posts.filter(post =>
    post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        <PageHeader 
          title="Algerian Community" 
          subtitle="Share stories, connect with travelers, and celebrate cultural journeys across Algeria"
        />

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Create Post Section */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Share Your Experience</h3>
                <div className="space-y-3">
                  <Textarea
                    placeholder="What was your favorite moment? Share your story with the community..."
                    className="resize-none"
                    rows={4}
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-secondary rounded transition-colors" title="Add image">
                        <span>📷</span>
                      </button>
                      <button className="p-2 hover:bg-secondary rounded transition-colors" title="Add location">
                        <span>📍</span>
                      </button>
                    </div>
                    <Button className="px-4 py-2">
                      Post
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Filter Tabs */}
              <div className="flex gap-2 border-b border-border">
                {['all', 'following', 'trending', 'recent'].map(filter => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
                      selectedFilter === filter
                        ? 'text-primary border-primary'
                        : 'text-muted-foreground border-transparent hover:text-foreground'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>

              {/* Posts Feed */}
              <div className="space-y-6">
                {filteredPosts.map(post => (
                  <PostCard 
                    key={post.id} 
                    post={post}
                    onLike={toggleLike}
                    isLiked={likedPosts.includes(post.id)}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Leaderboard */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-primary" size={20} />
                  <h3 className="text-lg font-bold text-foreground">Leaderboard</h3>
                </div>
                <div className="space-y-3">
                  {leaderboard.map(user => (
                    <div key={user.rank} className="flex items-center gap-3 p-3 hover:bg-secondary rounded transition-colors">
                      <div className="text-sm font-bold text-primary w-6">{user.rank}</div>
                      <img
                        src={user.avatar || '/placeholder.svg'}
                        alt={user.name}
                        className="w-8 h-8 rounded-full bg-muted"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.points} points</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="#"
                  className="mt-4 block text-center text-primary font-semibold text-sm hover:underline"
                >
                  View Full Leaderboard
                </Link>
              </Card>

              {/* Badges */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-accent" size={20} />
                  <h3 className="text-lg font-bold text-foreground">Badges</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {badges.map(badge => (
                    <div
                      key={badge.name}
                      className="text-center p-3 bg-secondary rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
                      title={`${badge.name}: ${badge.unlocks}`}
                    >
                      <div className="text-2xl mb-1">{badge.icon}</div>
                      <p className="text-xs font-semibold text-foreground line-clamp-1">{badge.name}</p>
                      <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {badge.unlocks}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Upcoming Events */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  {[
                    { title: 'Sahara Heritage Meetup', date: 'Mar 15' },
                    { title: 'Live Q&A with Murad Belhadj', date: 'Mar 18' },
                    { title: 'Algerian Crafts Virtual Exhibition', date: 'Mar 22' },
                  ].map((event, idx) => (
                    <div key={idx} className="p-3 bg-secondary rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                      <p className="font-semibold text-foreground text-sm">{event.title}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <Card className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">12.4K</p>
                  <p className="text-xs text-muted-foreground">Members</p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-2xl font-bold text-accent">2.1K</p>
                  <p className="text-xs text-muted-foreground">Posts Today</p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-secondary py-16 px-4 mt-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Algerian Community</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your experiences across the Sahara, Atlas Mountains, and Mediterranean coast. Earn badges, climb the leaderboard, and connect with travelers and hosts discovering authentic Algeria.
            </p>
            <Button size="lg" className="gap-2">
              Start Sharing <ArrowRight size={20} />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

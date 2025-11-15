import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#fffef5] border-t-2 border-[#fe9f99] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-light text-2xl text-[#2d2d2d] mb-4 tracking-wide">Amazia</h3>
            <p className="text-sm text-[#5a5a5a] leading-relaxed font-light">
              Authentic cultural experiences connecting female travelers with local communities and stories across Algeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-light text-lg text-[#2d2d2d] mb-4 tracking-wide">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link href="/activities" className="text-sm text-[#5a5a5a] hover:text-[#fe7f86] transition-colors font-light">Activities</Link></li>
              <li><Link href="/generations" className="text-sm text-[#5a5a5a] hover:text-[#fe7f86] transition-colors font-light">Generations</Link></li>
              <li><Link href="/boutique" className="text-sm text-[#5a5a5a] hover:text-[#fe7f86] transition-colors font-light">Boutique</Link></li>
              <li><Link href="/auction" className="text-sm text-[#5a5a5a] hover:text-[#fe7f86] transition-colors font-light">Auction</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-light text-lg text-[#2d2d2d] mb-4 tracking-wide">Community</h4>
            <ul className="space-y-2.5">
              <li><Link href="/community" className="text-sm text-[#5a5a5a] hover:text-[#fe7f86] transition-colors font-light">Join Community</Link></li>
              <li><Link href="/about" className="text-sm text-[#5a5a5a] hover:text-[#fe7f86] transition-colors font-light">About Us</Link></li>
              <li><a href="#" className="text-sm text-[#5a5a5a] hover:text-[#fe7f86] transition-colors font-light">Blog</a></li>
              <li><a href="#" className="text-sm text-[#5a5a5a] hover:text-[#fe7f86] transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light text-lg text-[#2d2d2d] mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-[#5a5a5a] font-light">
                <Mail size={18} className="text-[#fe7f86] flex-shrink-0 mt-0.5" />
                <span>hello@amazia.com</span>
              </div>
              <div className="flex gap-3 text-sm text-[#5a5a5a] font-light">
                <Phone size={18} className="text-[#fe7f86] flex-shrink-0 mt-0.5" />
                <span>+213 (0)21 123 4567</span>
              </div>
              <div className="flex gap-3 text-sm text-[#5a5a5a] font-light">
                <MapPin size={18} className="text-[#fe7f86] flex-shrink-0 mt-0.5" />
                <span>Algeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#fe9f99]/30 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-[#5a5a5a] font-light gap-4">
            <p>&copy; 2025 Amazia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
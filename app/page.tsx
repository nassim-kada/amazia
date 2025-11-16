"use client"; // <-- Required for arrows to work

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { 
  ArrowRight, Compass, Users, Gift, MapPin, Briefcase, 
  ChevronLeft, ChevronRight // <-- For mobile arrows
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRef } from 'react'; // <-- Required for arrows
import Image from 'next/image';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRegions = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Scrolls by 80% of the container's width
      const scrollAmount = clientWidth * 0.8; 

      if (direction === 'left') {
        // If at the beginning (or very close), loop to the end
        if (scrollLeft < 10) { 
          scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else { // direction === 'right'
        // If at the end (or very close), loop to the beginning
        if (scrollLeft + clientWidth > scrollWidth - 10) { 
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };
  // -----------------------------------------------

  const regions = [
    { 
      name: 'Béjaïa', 
      href: '/regions/bejaia', 
      imgSrc: '/bejaia.jpeg' 
    },
    { 
      name: 'Oran', 
      href: '/regions/oran', 
      imgSrc: '/oran.jpeg' 
    },
    { 
      name: 'Tlemcen', 
      href: '/regions/tlemcen', 
      imgSrc: '/tlemcen.jpeg' 
    },
    { 
      name: 'Djanet', 
      href: '/regions/djanet', 
      imgSrc: '/djanet.jpeg' 
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* --- CHANGED: Main background set --- */}
      <main className="min-h-screen bg-[#fffef5]">
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-[#fffef5]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-96 h-96 bg-[#fe9f99] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#fdfbca] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-2xl border-4 border-pink-200 overflow-hidden relative">
  <Image 
    src="/logo.jpeg" 
    alt="Amazia Logo" 
    fill
    className="object-cover"
  />
</div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light text-[#2d2d2d] mb-6 tracking-wide">
                Amazia
              </h1>
              
              <p className="text-lg md:text-2xl text-[#5a5a5a] font-light italic mb-8">
                Where authentic Algeria comes alive
              </p>
              
              <div className="max-w-3xl mx-auto">
                <Card className="bg-white/90 backdrop-blur-sm border-[#fe9f99] border-2 p-6 md:p-8 shadow-lg">
                  <p className="text-base text-[#4a4a4a] leading-relaxed">
                    Welcome to Amazia, your gateway to authentic Algerian experiences. Whether you're seeking adventure in the Sahara, 
                    wisdom from our elders, unique local crafts, or unforgettable cultural connections—you're in the right place.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Section */}
        {/* --- CHANGED: Background set --- */}
        <section className="py-16 md:py-20 px-4 bg-[#fffef5]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#2d2d2d] mb-3 tracking-wide">
                Regions
              </h2>
              <p className="text-base md:text-lg text-[#5a5a5a]">
                Explore the diverse landscapes of Algeria
              </p>
            </div>
            
            <div className="relative">

              {/* --- Mobile-only scroll arrows --- */}
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full shadow-md md:hidden"
                onClick={() => scrollRegions('left')}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full shadow-md md:hidden"
                onClick={() => scrollRegions('right')}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 py-2 scrollbar-hide"
              >
                {regions.map((region) => (
                  // --- CHANGED: Mobile width is smaller (w-[65vw] sm:w-[40vw]) ---
                  <div 
                    key={region.name} 
                    className="flex-shrink-0 w-[65vw] sm:w-[40vw] md:w-auto snap-start"
                  >
                    <Link href={region.href}>
                      <Card className="group relative overflow-hidden aspect-[3/4] border-2 border-[#fe9f99] hover:border-[#fe7f86] transition-all duration-300 cursor-pointer hover:scale-[1.03] hover:shadow-xl rounded-xl">
                        
                        <img
                          src={region.imgSrc}
                          alt={region.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => { 
                            e.currentTarget.src = `https://placehold.co/600x800/fe9f99/white?text=${encodeURIComponent(region.name)}`;
                            e.currentTarget.onerror = null; 
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        
                        <h3 className="absolute bottom-4 left-4 text-white text-xl md:text-2xl font-semibold z-10 drop-shadow-md">
                          {region.name}
                        </h3>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action for Partners */}
        {/* --- CHANGED: Background set --- */}
<section className="py-16 md:py-24 px-4 bg-[#fffef5]">
  <div className="max-w-7xl mx-auto">
    <Card className="relative overflow-hidden bg-[#fdefee] border-2 border-[#fe9f99] shadow-2xl">
      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[#fe7f86] rounded-full px-4 py-2 mb-6">
              <Briefcase size={18} className="text-[#fe7f86]" />
              <span className="text-sm font-medium text-[#2d2d2d]">Join Our Network</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-[#2d2d2d] mb-4 tracking-wide">
              Work With Us
            </h2>
            
            <p className="text-base md:text-lg text-[#4a4a4a] max-w-2xl mb-0 leading-relaxed">
              Are you an artisan or a business and want exposure through our platform?
              Would you like to become a local guide and part of our team and journey?
            </p>
          </div>
          
          {/* Right Side - Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 justify-center md:justify-start min-w-fit">
            <Button 
              asChild 
              size="lg"
              className="bg-[#fe7f86] hover:bg-[#fe9f99] text-white shadow-lg hover:shadow-xl transition-all duration-300 h-11 md:h-12 px-6 text-sm md:text-base group whitespace-nowrap"
            >
              <Link href="/partner" className="gap-2">
                Become a Partner
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-2 border-[#fe7f86] text-[#fe7f86] hover:bg-[#fdfbca] hover:text-[#fe7f86] h-11 md:h-12 px-6 text-sm md:text-base whitespace-nowrap"
            >
              <Link href="/contact">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</section>
      </main>

      <Footer />
    </>
  )
}
"use client";

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      title: 'Safety First',
      description: 'Every journey is designed with women&apos;s security and peace of mind at the core.'
    },
    {
      title: 'Authenticity',
      description: 'Real experiences rooted in Algerian culture and traditions.'
    },
    {
      title: 'Sisterhood',
      description: 'Building connections between travelers, guides, and communities.'
    },
    {
      title: 'Empowerment',
      description: 'Supporting freelancers, hosts, and local businesses to grow.'
    },
    {
      title: 'Respect',
      description: 'Honoring cultural heritage and local communities.'
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-[#fffef5]">
        
        <section className="relative py-12 md:py-24 px-4 overflow-hidden bg-[#fffef5]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-96 h-96 bg-[#fe9f99] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#fdfbca] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="text-3xl md:text-6xl font-light text-[#2d2d2d] mb-4 md:mb-6 tracking-wide">
              About Us
            </h1>
            <p className="text-base md:text-2xl text-[#5a5a5a] font-light italic">
              Empowering women through authentic Algerian experiences
            </p>
          </div>
        </section>

        <section className="py-8 md:py-16 px-4 bg-[#fffef5]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-6xl font-light text-[#2d2d2d] mb-4 md:mb-6 tracking-wide">
                Our Mission
              </h2>
            </div>
            
            <div className="bg-[#fe9f99]/20 p-6 md:p-8 rounded-xl border-r-4 border-[#fe9f99]">
              <p className="text-sm md:text-xl text-[#4a4a4a] leading-relaxed">
                To create a trusted space where women can explore Algeria confidently, connect with local 
                guides and hosts, and support businesses that share our values of safety, authenticity, and empowerment.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-4 bg-[#fffef5]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center md:text-right md:order-2">
              <h2 className="text-2xl md:text-6xl font-light text-[#2d2d2d] mb-4 md:mb-6 tracking-wide">
                Our Vision
              </h2>
            </div>
            
            <div className="bg-[#fe7f86]/20 p-6 md:p-8 rounded-xl md:order-1 border-l-4 border-[#fe7f86]">
              <p className="text-sm md:text-xl text-[#4a4a4a] leading-relaxed">
                Empowering women through safe, authentic, and culturally rich travel experiences across Algeria. 
                Amazia is more than a platform — it&apos;s a movement that connects travelers with communities, 
                traditions, and opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-20 px-4 bg-[#fffef5]">
          <div className="max-w-4xl mx-auto"> 
            
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-6xl font-light text-[#2d2d2d] mb-2 md:mb-3 tracking-wide">
                Our Values
              </h2>
              <p className="text-sm md:text-xl text-[#5a5a5a]">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="space-y-5 md:space-y-8 bg-[#fe9f99]/20 p-6 md:p-8 rounded-xl">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                >
                  <p className="text-sm md:text-xl text-[#5a5a5a] leading-relaxed">
                    {value.description}
                  </p>
                  
                  {index < values.length - 1 && (
                    <div className="mt-4 md:mt-6 mb-1 md:mb-2 h-px bg-gradient-to-r from-[#fe9f99]/50 via-[#fdfbca]/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-20 px-4 bg-[#fffef5]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-6xl font-light text-[#2d2d2d] mb-8 md:mb-12 tracking-wide text-center">
              Contact Us
            </h2>
            
            <div className="space-y-6 md:space-y-8 flex flex-col items-center">
              
              <div className="text-center bg-[#fe7f86]/20 p-6 rounded-xl w-full max-w-lg">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Mail className="text-[#fe7f86] w-5 h-5 md:w-6 md:h-6" />
                  <h3 className="text-base md:text-2xl font-semibold text-[#2d2d2d]">Email</h3>
                </div>
                <div className="space-y-1 md:space-y-2 text-sm md:text-xl text-[#5a5a5a]">
                  <div>
                    <a href="mailto:info@amazia.com" className="hover:text-[#fe7f86] transition-colors">
                      info@amazia.com
                    </a>
                  </div>
                  <div>
                    <a href="mailto:support@amazia.com" className="hover:text-[#fe7f86] transition-colors">
                      support@amazia.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center bg-[#fe9f99]/20 p-6 rounded-xl w-full max-w-lg">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <Phone className="text-[#fe9f99] w-5 h-5 md:w-6 md:h-6" />
                  <h3 className="text-base md:text-2xl font-semibold text-[#2d2d2d]">Phone</h3>
                </div>
                <a href="tel:+213555025974" className="text-sm md:text-xl text-[#5a5a5a] hover:text-[#fe7f86] transition-colors">
                  +213 555 025 974
                </a>
              </div>

              <div className="text-center bg-[#fdfbca]/40 p-6 rounded-xl w-full max-w-lg">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <h3 className="text-base md:text-2xl font-semibold text-[#2d2d2d]">Follow Us</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-xl">
                  <a 
                    href="https://instagram.com/amazia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#5a5a5a] hover:text-[#fe7f86] transition-colors"
                  >
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://facebook.com/amazia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#5a5a5a] hover:text-[#fe7f86] transition-colors"
                  >
                    <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="https://linkedin.com/company/amazia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#5a5a5a] hover:text-[#fe7f86] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
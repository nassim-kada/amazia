"use client";

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MapPin, Star, Home, Users, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllHosts, getHostsByVillage, type Host } from '@/lib/data';

export default function KabyleHostsPage() {
  const [selectedVillage, setSelectedVillage] = React.useState<string>('all');
  const [selectedHost, setSelectedHost] = React.useState<Host | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const hosts = getAllHosts();

  const filteredHosts = hosts.filter(host => {
    const villageMatch = selectedVillage === 'all' || host.village === selectedVillage;
    return villageMatch;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 md:w-4 md:h-4 ${
          i < rating ? 'fill-[#fe7f86] text-[#fe7f86]' : 'text-gray-300'
        }`}
      />
    ));
  };

  const openHostModal = (host: Host) => {
    setSelectedHost(host);
    setCurrentImageIndex(0);
  };

  const closeHostModal = () => {
    setSelectedHost(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedHost) {
      setCurrentImageIndex((prev) => 
        prev === selectedHost.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedHost) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedHost.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div>
      <Navigation />
      <main className="min-h-screen bg-[#fffef5]">
        {/* Filters Section */}
        <section className="py-8 md:py-12 px-4 bg-[#fffef5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-center">
              
              {/* Village Filter */}
              <div className="w-full md:w-auto">
                <label className="block text-sm text-[#5a5a5a] mb-2 font-light">Village</label>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedVillage('all')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedVillage === 'all'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    All Villages
                  </button>
                  <button
                    onClick={() => setSelectedVillage('Tuga village')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedVillage === 'Tuga village'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    Tuga
                  </button>
                  <button
                    onClick={() => setSelectedVillage('Tala Hamza village')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedVillage === 'Tala Hamza village'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    Tala Hamza
                  </button>
                  <button
                    onClick={() => setSelectedVillage('Aït Melloul village')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedVillage === 'Aït Melloul village'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    Aït Melloul
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mt-8">
              <p className="text-lg text-[#5a5a5a] font-light">
                {filteredHosts.length} {filteredHosts.length === 1 ? 'host' : 'hosts'} found
              </p>
            </div>
          </div>
        </section>

        {/* Hosts Section */}
        <section className="py-12 md:py-24 px-4 bg-[#fffef5]">
          <div className="max-w-7xl mx-auto">
            {/* Hosts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredHosts.map((host, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => openHostModal(host)}
                >
                  {/* Card Container */}
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#fe9f99]/30 hover:border-[#fe7f86] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fe9f99]/20 overflow-hidden h-full flex flex-col">
                    
                    {/* Image */}
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <img 
                        src={host.images[0]} 
                        alt={host.name}
                        className="w-full h-full object-contain bg-[#fffef5] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-light text-[#5a5a5a]">
                        Age {host.age}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-light text-[#2d2d2d] mb-3 group-hover:text-[#fe7f86] transition-colors">
                          {host.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mb-2">
                          {renderStars(host.rating)}
                        </div>
                      </div>

                      {/* Village */}
                      <div className="flex items-start gap-2 mb-4 text-[#5a5a5a]">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-[#fe7f86]" />
                        <p className="text-sm">{host.village}</p>
                      </div>

                      {/* Living Status */}
                      <p className="text-base text-[#4a4a4a] mb-4 leading-relaxed font-light flex-1">
                        {host.livingStatus}
                      </p>

                      {/* Experiences */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2 text-sm text-[#5a5a5a]">
                          <Heart className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#fe7f86]" />
                          <span>{host.experience.join(' • ')}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-[#5a5a5a]">
                          <Users className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#fe7f86]" />
                          <span>Children: {host.children}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-[#fe9f99]/50 via-[#fdfbca]/50 to-transparent mb-4"></div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-xs italic text-[#5a5a5a]">
                            "{host.review}"
                          </p>
                        </div>

                        <button 
                          className="ml-4 bg-[#fe7f86] hover:bg-[#fe6f76] text-white py-3 px-6 md:px-8 rounded-full transition-all duration-300 text-sm md:text-base font-light whitespace-nowrap hover:shadow-lg hover:shadow-[#fe7f86]/30"
                          onClick={(e) => {
                            e.stopPropagation();
                            openHostModal(host);
                          }}
                        >
                          {host.cta}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedHost && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeHostModal}
          >
            <div 
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeHostModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
              >
                <X className="w-6 h-6 text-[#5a5a5a]" />
              </button>

              {/* Image Gallery */}
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-t-3xl bg-[#fffef5]">
                <img 
                  src={selectedHost.images[currentImageIndex]} 
                  alt={`${selectedHost.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                {selectedHost.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#5a5a5a]" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6 text-[#5a5a5a]" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedHost.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl md:text-3xl font-light text-[#2d2d2d]">
                      {selectedHost.name}
                    </h2>
                    <span className="bg-[#fe7f86]/10 text-[#fe7f86] px-3 py-1 rounded-full text-sm">
                      Age {selectedHost.age}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    {renderStars(selectedHost.rating)}
                  </div>
                  <div className="flex items-center gap-2 text-[#5a5a5a]">
                    <MapPin className="w-4 h-4 text-[#fe7f86]" />
                    <p className="text-sm">{selectedHost.village}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#fe9f99]/50 via-[#fdfbca]/50 to-[#fe9f99]/50 mb-6"></div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Living Status */}
                  <div>
                    <h3 className="text-lg font-light text-[#2d2d2d] mb-2 flex items-center gap-2">
                      <Home className="w-5 h-5 text-[#fe7f86]" />
                      Living Situation
                    </h3>
                    <p className="text-[#5a5a5a] leading-relaxed">{selectedHost.livingStatus}</p>
                  </div>

                  {/* Children */}
                  <div>
                    <h3 className="text-lg font-light text-[#2d2d2d] mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#fe7f86]" />
                      Family
                    </h3>
                    <p className="text-[#5a5a5a] leading-relaxed">{selectedHost.children}</p>
                  </div>
                </div>

                {/* House Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-light text-[#2d2d2d] mb-2">House Description</h3>
                  <p className="text-[#5a5a5a] leading-relaxed">{selectedHost.house.description}</p>
                </div>

                {/* Experiences */}
                <div className="mb-6">
                  <h3 className="text-lg font-light text-[#2d2d2d] mb-3">Experiences Offered</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedHost.experience.map((exp, i) => (
                      <span 
                        key={i}
                        className="bg-[#fdfbca]/50 text-[#5a5a5a] px-4 py-2 rounded-full text-sm border border-[#fe9f99]/30"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Village Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-light text-[#2d2d2d] mb-3">Village Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedHost.villageFeatures.map((feature, i) => (
                      <span 
                        key={i}
                        className="bg-white border border-[#fe9f99]/30 text-[#5a5a5a] px-4 py-2 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Review */}
                <div className="bg-[#fdfbca]/30 rounded-2xl p-6 mb-6">
                  <p className="text-lg italic text-[#5a5a5a] text-center">
                    "{selectedHost.review}"
                  </p>
                </div>

                {/* Reserve Button */}
                <button className="w-full bg-[#fe7f86] hover:bg-[#fe6f76] text-white py-4 rounded-full transition-all duration-300 text-lg font-light hover:shadow-lg hover:shadow-[#fe7f86]/30">
                  {selectedHost.cta}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
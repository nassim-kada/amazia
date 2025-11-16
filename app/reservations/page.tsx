"use client";

import React from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MapPin, Star, Clock, Phone, Globe, DollarSign, X } from 'lucide-react';
import { getReservationsByCity } from '@/lib/data';

export default function BejaiaReservationsPage() {
  const [selectedType, setSelectedType] = React.useState<string>('all');
  const [selectedCard, setSelectedCard] = React.useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const reservations = getReservationsByCity('bejaia') || [];

  const filteredReservations = reservations.filter(reservation => {
    const typeMatch = selectedType === 'all' || reservation.type === selectedType;
    return typeMatch;
  });

  const openModal = (index: number) => {
    setSelectedCard(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCard !== null && filteredReservations[selectedCard]?.images) {
      const images = filteredReservations[selectedCard].images;
      if (images) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedCard !== null && filteredReservations[selectedCard]?.images) {
      const images = filteredReservations[selectedCard].images;
      if (images) {
        setCurrentImageIndex((prev) => 
          (prev - 1 + images.length) % images.length
        );
      }
    }
  };

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

  return (
    <div>
      <Navigation />
      <main className="min-h-screen bg-[#fffef5]">
        <section className="py-8 md:py-12 px-4 bg-[#fffef5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-center">
              
              <div className="w-full md:w-auto">
                <label className="block text-sm text-[#5a5a5a] mb-2 font-light">Accommodation Type</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedType('all')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedType === 'all'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSelectedType('Hotel')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedType === 'Hotel'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    Hotels
                  </button>
                  <button
                    onClick={() => setSelectedType('Hostel')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedType === 'Hostel'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    Hostels
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-[#5a5a5a] font-light">
                {filteredReservations.length} {filteredReservations.length === 1 ? 'accommodation' : 'accommodations'} found
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4 bg-[#fffef5]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredReservations.map((reservation, index) => (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#fe9f99]/30 hover:border-[#fe7f86] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fe9f99]/20 overflow-hidden h-full flex flex-col">
                    
                    <div 
                      className="relative h-40 md:h-48 overflow-hidden cursor-pointer"
                      onClick={() => openModal(index)}
                    >
                      <img 
                        src={reservation.images?.[0] || '/bejaia.jpeg'} 
                        alt={reservation.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-light text-[#5a5a5a]">
                        {reservation.type}
                      </div>
                      {reservation.images && reservation.images.length > 1 && (
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                          {reservation.images.length}
                        </div>
                      )}
                    </div>

                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-light text-[#2d2d2d] mb-3 group-hover:text-[#fe7f86] transition-colors">
                          {reservation.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mb-2">
                          {renderStars(reservation.rating)}
                        </div>
                      </div>

                      <div className="flex items-start gap-2 mb-4 text-[#5a5a5a]">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-[#fe7f86]" />
                        <p className="text-sm">{reservation.address}</p>
                      </div>

                      <p className="text-base text-[#4a4a4a] mb-4 leading-relaxed font-light flex-1">
                        {reservation.description}
                      </p>

                      <div className="space-y-2 mb-4 text-sm text-[#5a5a5a]">
                        {reservation.checkIn && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#fe7f86]" />
                            <span>Check-in: {reservation.checkIn} • Check-out: {reservation.checkOut}</span>
                          </div>
                        )}
                        {reservation.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#fe7f86]" />
                            <span>{reservation.phone}</span>
                          </div>
                        )}
                        {reservation.website && (
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-[#fe7f86]" />
                            <span className="truncate">{reservation.website}</span>
                          </div>
                        )}
                      </div>

                      <div className="h-px bg-gradient-to-r from-[#fe9f99]/50 via-[#fdfbca]/50 to-transparent mb-4"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-[#fe7f86] font-medium mb-1">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-base">{reservation.price}</span>
                          </div>
                          <p className="text-xs italic text-[#5a5a5a]">
                            &ldquo;{reservation.review}&rdquo;
                          </p>
                        </div>

                        <button className="ml-4 bg-[#fe7f86] hover:bg-[#fe6f76] text-white py-3 px-6 md:px-8 rounded-full transition-all duration-300 text-sm md:text-base font-light whitespace-nowrap hover:shadow-lg hover:shadow-[#fe7f86]/30">
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedCard !== null && filteredReservations[selectedCard] && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-[#5a5a5a] rounded-full p-2 transition-all duration-300 hover:shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative bg-gray-100 flex items-center justify-center" style={{ height: '70vh' }}>
                <img
                  src={filteredReservations[selectedCard].images?.[currentImageIndex] || '/bejaia.jpeg'}
                  alt={`${filteredReservations[selectedCard].name} - Image ${currentImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                  style={{ maxHeight: '90%', maxWidth: '90%' }}
                />

                {filteredReservations[selectedCard].images && 
                 filteredReservations[selectedCard].images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#5a5a5a] rounded-full p-3 transition-all duration-300 hover:shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#5a5a5a] rounded-full p-3 transition-all duration-300 hover:shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {filteredReservations[selectedCard].images?.length || 1}
                </div>
              </div>

              {filteredReservations[selectedCard].images && 
               filteredReservations[selectedCard].images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50">
                  {filteredReservations[selectedCard].images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        currentImageIndex === idx
                          ? 'border-[#fe7f86] shadow-lg'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-6 bg-white border-t border-gray-200">
                <h3 className="text-2xl font-light text-[#2d2d2d] mb-2">
                  {filteredReservations[selectedCard].name}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  {renderStars(filteredReservations[selectedCard].rating)}
                </div>
                <p className="text-[#5a5a5a] text-sm">
                  {filteredReservations[selectedCard].address}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
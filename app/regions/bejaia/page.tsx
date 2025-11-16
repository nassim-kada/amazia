"use client";

import React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { MapPin, Star, Users, User } from 'lucide-react'
import { getActivitiesByCity } from '@/lib/data'; 

export default function BejaiaActivitiesPage() {
  const [selectedType, setSelectedType] = React.useState<string>('all');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const activities = React.useMemo(() => getActivitiesByCity('bejaia') || [], []);
  const uniqueCategories = React.useMemo(() => {
    const categories = new Set(activities.map(activity => activity.category));
    return Array.from(categories).sort();
  }, [activities]);

  const filteredActivities = activities.filter(activity => {
    const typeMatch = selectedType === 'all' || activity.type === selectedType;
    const categoryMatch = selectedCategory === 'all' || activity.category === selectedCategory;
    return typeMatch && categoryMatch;
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

  return (
    <div>
      <Navigation />
      
      <main className="min-h-screen bg-[#fffef5]">

        <section className="py-8 md:py-12 px-4 bg-[#fffef5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-center">
              
              <div className="w-full md:w-auto">
                <label className="block text-sm text-[#5a5a5a] mb-2 font-light">Activity Type</label>
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
                    onClick={() => setSelectedType('Outing')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 flex items-center gap-2 ${
                      selectedType === 'Outing'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    Group
                  </button>
                  <button
                    onClick={() => setSelectedType('Solo')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 flex items-center gap-2 ${
                      selectedType === 'Solo'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    Solo
                  </button>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <label className="block text-sm text-[#5a5a5a] mb-2 font-light">Category</label>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                      selectedCategory === 'all'
                        ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                        : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                    }`}
                  >
                    All
                  </button>
                  {uniqueCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-2.5 rounded-full text-sm font-light transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-[#fe7f86] text-white shadow-lg shadow-[#fe7f86]/30'
                          : 'bg-white/60 text-[#5a5a5a] hover:bg-white border border-[#fe9f99]/30'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-[#5a5a5a] font-light">
                {filteredActivities.length} {filteredActivities.length === 1 ? 'experience' : 'experiences'} found
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4 bg-[#fffef5]">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredActivities.map((activity, index) => (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="bg-white/40 backdrop-blur-sm rounded-2xl border border-[#fe9f99]/30 hover:border-[#fe7f86] transition-all duration-500 hover:shadow-2xl hover:shadow-[#fe9f99]/20 overflow-hidden">
                    
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={`/${activity.image}`} 
                        alt={activity.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-light text-[#2d2d2d] mb-2 group-hover:text-[#fe7f86] transition-colors">
                            {activity.name}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-[#5a5a5a]">
                            <span className="flex items-center gap-1">
                              {activity.type === 'Outing' ? (
                                <>
                                  <Users className="w-4 h-4" />
                                  Group
                                </>
                              ) : (
                                <>
                                  <User className="w-4 h-4" />
                                  Solo
                                </>
                              )}
                            </span>
                            <span className="text-[#fe9f99]">•</span>
                            <span>{activity.category}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 mb-5 text-[#5a5a5a]">
                        <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-[#fe7f86]" />
                        <p className="text-sm md:text-base">{activity.location}</p>
                      </div>

                      <p className="text-base md:text-lg text-[#4a4a4a] mb-6 leading-relaxed font-light">
                        {activity.description}
                      </p>

                      <div className="h-px bg-gradient-to-r from-[#fe9f99]/50 via-[#fdfbca]/50 to-transparent mb-6"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            {renderStars(activity.rating)}
                          </div>
                          <p className="text-xs md:text-sm italic text-[#5a5a5a]">
                            &ldquo;{activity.review}&rdquo;
                          </p>
                        </div>

                        <button className="ml-4 bg-[#fe7f86] hover:bg-[#fe6f76] text-white py-3 px-6 md:px-8 rounded-full transition-all duration-300 text-sm md:text-base font-light whitespace-nowrap hover:shadow-lg hover:shadow-[#fe7f86]/30">
                          {activity.type === 'Outing' ? 'Join' : 'Explore'}
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
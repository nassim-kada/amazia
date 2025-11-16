export interface Activity {
  name: string;
  type: 'Outing' | 'Solo' | 'Restaurant' | 'CoffeeShop' | 'Cinema' | 'Arcade' | 'Museum';
  category: 'Nature' | 'Sports' | 'Cultural' | 'Community' | 'Food' | 'Entertainment';
  location: string;
  description: string;
  rating: number;
  image?:string;
  review: string;
  city: string;
}
export interface Accommodation {
  name: string;
  type: 'Hotel' | 'Hostel';
  address: string;
  description: string;
  rating: number;
  review: string;
  price: string;
  images?:string[];
  checkIn?: string;
  checkOut?: string;
  phone?: string;
  website?: string;
  city: 'bejaia';
}
export const activities: Activity[] = [
  {
    name: 'Hiking – Yemma Gouraya',
    type: 'Outing',
    category: 'Nature',
    location: 'Béjaïa, Algeria',
    description: 'Guided hike with panoramic sea views',
    rating: 5,
    image:'hkiing.jpeg',
    review: 'Safe and scenic.',
    city: 'bejaia'
  },
  {
    name: 'Kefrida Waterfalls',
    type: 'Outing',
    category: 'Nature',
    location: 'Near Béjaïa, Algeria',
    description: 'Guided trip to waterfalls with picnic.',
    rating: 4,
    image:'kefrida.jpeg',
    review: 'Refreshing and fun.',
    city: 'bejaia'
  },
  {
    name: 'Kayaking – Soummam River',
    type: 'Outing',
    image:'kayak.jpeg',
    category: 'Sports',
    location: 'Bejaia province',
    description: 'Paddle through calm waters with a guide.',
    rating: 5,
    review: 'Loved the guide.',
    city: 'bejaia'
  },
  {
    name: 'Yemma Gouraya Mountain Top',
    type: 'Solo',
    category: 'Nature',
    location: 'Béjaïa, Algeria',
    description: 'Panoramic views, safe hike alone.',
    image:'kefrida.jpeg',
    rating: 5,
    review: 'Unforgettable view.',
    city: 'bejaia'
  },
  {
    name: 'Cap Carbon',
    type: 'Solo',
    category: 'Nature',
    location: 'Béjaïa Province',
    image:'cap_carbon.jpeg',
    description: 'Lighthouse + cliffs, iconic photo spot.',
    rating: 4,
    review: 'Magical sunset.',
    city: 'bejaia'
  },
  {
    name: 'Casbah of Béjaïa',
    type: 'Solo',
    category: 'Cultural',
    location: 'Béjaïa, Algeria',
    description: 'Historic fortress with city views.',
    rating: 4,
    image:'casbah_bej.jpeg',
    review: 'Rich history.',
    city: 'bejaia'
  },
  {
    name: 'Museum Tour',
    type: 'Solo',
    category: 'Cultural',
    location: 'Central Béjaïa',
    description: 'Explore Kabyle heritage and artifacts.',
    rating: 4,
    image:'',
    review: 'Informative.',
    city: 'bejaia'
  },
  {
    name: 'Music Event',
    type: 'Solo',
    category: 'Cultural',
    location: 'Béjaïa theaters',
    description: 'Local cinema experience with community vibe.',
    rating: 4,
    image:'music_conert.jpeg',
    review: 'Fun evening.',
    city: 'bejaia'
  },
  // --- Restaurants ---
{
  name: 'Restaurant La Renaissance',
  type: 'Restaurant',
  category: 'Food',
  location: 'Q33H+9F Béjaïa city center',
  description: 'Elegant Algerian and Mediterranean cuisine, refined atmosphere.',
  rating: 5,
  image: 'la_renaissance.jpeg',
  review: 'Delicious food, classy ambiance.',
  city: 'bejaia'
},
{
  name: 'Restaurant Le Dauphin',
  type: 'Restaurant',
  category: 'Food',
  location: 'Béjaïa Corniche',
  description: 'Fresh seafood & Kabyle dishes with panoramic sea views.',
  rating: 5,
  image: 'le_dauphin.jpeg',
  review: 'Best seafood in Béjaïa.',
  city: 'bejaia'
},

// --- Cinema ---
{
  name: 'Cinémathèque de Béjaïa',
  type: 'Cinema',
  category: 'Entertainment',
  location: 'Q33P+264 Béjaïa city center',
  description: 'Historic cinema showing Algerian & international films.',
  rating: 4,
  image: 'cinema.jpeg',
  review: 'Great atmosphere, safe and lively.',
  city: 'bejaia'
},

// --- Arcade ---
{
  name: 'PlayLand',
  type: 'Arcade',
  category: 'Entertainment',
  location: 'P3XC+GHX Béjaïa',
  description: 'Family-friendly arcade with games and rides.',
  rating: 4,
  image: 'playland.jpeg',
  review: 'Fun and safe for families.',
  city: 'bejaia'
},

// --- Coffee Shops ---
{
  name: 'Café Bajio',
  type: 'CoffeeShop',
  category: 'Food',
  location: 'P3X5+57V Béjaïa',
  description: 'Scenic café with sea views, perfect for sunsets.',
  rating: 4,
  image: 'bajio.jpeg',
  review: 'Beautiful view, relaxing spot.',
  city: 'bejaia'
},
{
  name: 'Blue Jazz Coffee',
  type: 'CoffeeShop',
  category: 'Food',
  location: 'Place Gueydon, Béjaïa',
  description: 'Cozy café with jazz ambiance, great for evenings.',
  rating: 4,
  image: 'blue_jazz.jpeg',
  review: 'Great vibe and central location.',
  city: 'bejaia'
},

// --- Museums ---
{
  name: 'Musée El Moudjahid',
  type: 'Museum',
  category: 'Cultural',
  location: 'Q35G+5XH Béjaïa',
  description: 'War museum dedicated to Algeria’s independence.',
  rating: 5,
  image: 'elmoudjahid.jpeg',
  review: 'Powerful and educational.',
  city: 'bejaia'
},
{
  name: 'Akham n Waman n Tuga',
  type: 'Museum',
  category: 'Cultural',
  location: 'Tuga village, Béjaïa Province',
  description: 'Cultural house preserving Kabyle traditions and crafts.',
  rating: 4,
  image: 'toudja.jpeg',
  review: 'Authentic Kabyle heritage.',
  city: 'bejaia'
}
];
export const reservations: Accommodation[] = [
  {
    name: 'Atlantis Hôtel Béjaïa Aéroport',
    type: 'Hotel',
    address: 'P3C7+R29, N9, Béjaïa 06000',
    description: 'Modern 5‑star hotel near Soummam Airport with spacious rooms, free WiFi, and pool.',
    rating: 4,
    review: 'Very comfortable, close to airport.',
    price: 'DZD 11,178 per night',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    images:['/atlantis_1.jpeg','/atlantis_2.jpeg'],
    phone: '0560 19 03 10',
    website: 'bejaia.atlantishotels-dz.com',
    city: 'bejaia'
  },
  {
    name: 'Hôtel Golden H Béjaïa',
    type: 'Hotel',
    address: 'the 4 paths, Rte des Aurès, Béjaïa 06000',
    description: '3‑star hotel in city center, clean rooms and professional service.',
    rating: 4,
    review: 'Good location, friendly staff.',
    price: 'DZD 3,922–7,425 per night',
    checkIn: '10:30 AM',
    checkOut: '12:00 PM',
    images:['goldenH_1.jpeg','goldenH_2.jpeg','goldenH_3.jpeg'],
    phone: '0549 95 04 19',
    website: 'hotelgoldenh.com',
    city: 'bejaia'
  },
  {
    name: 'Hôtel La Roseraie',
    type: 'Hotel',
    address: 'J6MW+4M, Aokas 06130, Béjaïa Province',
    description: '3‑star hotel with garden views, peaceful atmosphere, and authentic Kabyle hospitality.',
    rating: 4,
    review: 'Beautiful and relaxing.',
    price: '~DZD 7,427 per night',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    images:['roserie_1.jpeg'],
    phone: '034 84 38 10',
    website: 'hotellaroseraie.fr',
    city: 'bejaia'
  },
  {
    name: 'Hôtel Syphax',
    type: 'Hotel',
    address: 'M5C3+776, BP 33, Tichy, Béjaïa Province',
    description: '4‑star hotel with dining, spa, and sea views.',
    rating: 4,
    review: 'Relaxed and comfortable.',
    price: 'DZD 7,427–8,159 per night',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    images:['syfax_1.jpeg','syfax_2.jpeg','syfax_3.jpeg'],
    phone: '034 81 65 25',
    city: 'bejaia'
  },
  {
    name: 'Hôtel Brahmi',
    type: 'Hotel',
    address: '25 Rue de la Liberté, Béjaïa 06000',
    description: '2‑star hotel with simple rooms, central location, and friendly service.',
    rating: 4,
    review: 'Good value for money.',
    price: 'DZD 4,130–7,450 per night',
    checkOut: '11:00 AM',
    images:['brahmi_1.jpeg','brahmi_2.jpeg'],
    phone: '0561 67 64 24',
    website: 'hotelbrahmi.com',
    city: 'bejaia'
  },
  {
    name: 'Hotel Raya',
    type: 'Hotel',
    address: 'Route Lotissement n°1, 06023 Tichy, Béjaïa Province',
    description: 'Coastal hotel 100m from the beach, with spa and panoramic restaurant.',
    rating: 4,
    review: 'Great value, close to sea.',
    price: '~DZD 8,684 per night',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    images:['raya_1.jpeg','raya_2.jpeg','raya_3.jpeg'],
    city: 'bejaia'
  },
  {
    name: 'Hotel Du Nord Béjaïa',
    type: 'Hotel',
    address: 'Boulevard Colonel Amirouche, Béjaïa 06000',
    description: 'Historic central hotel near Place Gueydon and Casbah.',
    rating: 4,
    review: 'Perfect location, authentic feel.',
    price: '~DZD 8,200 per night',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    images:['nord_1.jpeg','nord_2.jpeg'],
    city: 'bejaia'
  },
  {
    name: 'Bejaia Guesthouse',
    type: 'Hostel',
    address: 'Villa 127 Dar Djebel, Béjaïa 06000',
    description: 'Affordable guesthouse with dorm beds and private rooms, friendly atmosphere.',
    rating: 4,
    review: 'Clean and welcoming, great for solo travelers.',
    price: '~DZD 6,300 per night (private room)',
    images:['hostel_1.jpeg','hostel_2.jpeg'],
    city: 'bejaia'
  },
  {
    name: 'Terminus Dar Djebel',
    type: 'Hostel',
    address: 'P2RM+VP3, Béjaïa Province',
    description: 'Cozy villa‑style hostel offering Kabyle hospitality and shared spaces.',
    rating: 4,
    review: 'Felt like staying with family.',
    images:['hostel2_1.jpeg','hostel2_2.jpeg'],
    price: '~DZD 9,200 per night',
    city: 'bejaia'
  }
];

export const getActivitiesByCity = (city: string): Activity[] => {
  return activities.filter(activity => 
    activity.city.toLowerCase() === city.toLowerCase()
  );
};
export const getReservationsByCity = (city: string): Accommodation[] => {
  return reservations.filter(reservation => 
    reservation.city.toLowerCase() === city.toLowerCase()
  );
};
// TypeScript Interfaces
export interface House {
  description: string;
}

export interface Host {
  id: number;
  name: string;
  village: string;
  age: number;
  livingStatus: string;
  children: string;
  house: House;
  experience: string[];
  villageFeatures: string[];
  rating: number;
  review: string;
  images: string[];
  cta: string;
}

// Kabyle Hosts Data
export const hosts: Host[] = [
  {
    id: 1,
    name: "Fatma Aït Slimane",
    village: "Tuga village",
    age: 62,
    livingStatus: "Lives alone in a traditional Kabyle home with a flowered courtyard and rustic stone walls",
    children: "Emigrated to France",
    house: {
      description: "Cozy outdoor seating with low cushions, woven rugs, clay pots, shaded by wooden beams and palm leaves"
    },
    experience: ["Kabyle tea rituals", "storytelling", "homemade couscous"],
    villageFeatures: ["Olive groves", "mountain views", "Akham n Waman cultural site"],
    rating: 5,
    review: "Warm hospitality and unforgettable stories.",
    images: ['/fatima_1.jpeg', '/fatima_2.jpeg', '/fatima_3.jpeg'],
    cta: "Reserve"
  },
  {
    id: 2,
    name: "Nora Bouzid",
    village: "Tala Hamza village",
    age: 58,
    livingStatus: "Lives alone in a whitewashed Kabyle house with colorful pottery and a shaded patio",
    children: "Never had children, dedicates life to crafts",
    house: {
      description: "Bamboo pergola, rattan lamps, built-in bench with vibrant cushions, clay pots and plants"
    },
    experience: ["Weaving demos", "Kabyle songs", "mint tea"],
    villageFeatures: ["Hills", "pottery workshops", "weekly markets"],
    rating: 4,
    review: "Beautiful crafts and cultural immersion.",
    images: ['/nora_1.jpeg', '/nora_2.jpeg', '/nora_3.jpeg'],
    cta: "Reserve"
  },
  {
    id: 3,
    name: "Zohra Meziane",
    village: "Aït Melloul village",
    age: 65,
    livingStatus: "Lives alone in a hillside Kabyle house with a terrace overlooking the valley",
    children: "Live abroad in Canada",
    house: {
      description: "Narrow stone alley shaded by vines, blue doors, climbing plants, terrace with cherry orchard views"
    },
    experience: ["Kabyle bread baking", "folk tales", "mountain walks"],
    villageFeatures: ["Panoramic views", "cherry orchards", "music gatherings"],
    rating: 5,
    review: "Authentic and heartwarming experience.",
    images: ['/zohra_1.jpeg', '/zohra_2.jpeg', '/zohra_3.jpeg'],
    cta: "Reserve"
  }
];

// Helper Functions

/**
 * Get all hosts
 */
export const getAllHosts = (): Host[] => hosts;

/**
 * Get host by ID
 */
export const getHostById = (id: number): Host | undefined => {
  return hosts.find(host => host.id === id);
};

/**
 * Get hosts by village
 */
export const getHostsByVillage = (village: string): Host[] => {
  return hosts.filter(host => 
    host.village.toLowerCase() === village.toLowerCase()
  );
};

/**
 * Get hosts by minimum rating
 */
export const getHostsByRating = (minRating: number): Host[] => {
  return hosts.filter(host => host.rating >= minRating);
};

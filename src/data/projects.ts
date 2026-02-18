export type ProjectStatus = 'COMPLETED' | 'READY TO MOVE' | 'ONGOING'

export type ProjectCategory = 'Residential' | 'Commercial' | 'Retail'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  status: ProjectStatus
  location: string
  category: ProjectCategory
  about: string
  price: string
  area: string
  possession: string
  amenities: string[]
  features: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Goodwill Heights',
    description:
      'Premium 2 & 3 BHK residences with panoramic city views and world-class amenities.',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    status: 'READY TO MOVE',
    location: 'Baner, Pune',
    category: 'Residential',
    about:
      'Goodwill Heights is a premium residential address designed for modern families. Thoughtfully planned spaces, elegant finishes, and curated amenities come together to offer comfort, privacy, and an elevated lifestyle.',
    price: '₹ 1.20 Cr – ₹ 2.10 Cr',
    area: '950 – 1450 sq. ft.',
    possession: 'Ready to Move',
    amenities: ['Clubhouse', 'Swimming Pool', 'Gym', 'Kids Play Area', 'Landscaped Garden', '24/7 Security'],
    features: ['Premium neighborhood connectivity', 'Spacious layouts & natural light', 'High-quality finishes', 'Modern amenities & security'],
  },
  {
    id: 2,
    title: 'Goodwill Commerce Hub',
    description:
      'State-of-the-art commercial spaces designed for modern businesses and startups.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    status: 'ONGOING',
    location: 'Hinjewadi, Pune',
    category: 'Commercial',
    about:
      'Goodwill Commerce Hub offers Grade-A commercial spaces built to international standards. With strategic access, efficient floor plates, and modern infrastructure, it is designed for ambitious teams and growing businesses.',
    price: '₹ 85 L – ₹ 3.50 Cr',
    area: '600 – 3500 sq. ft.',
    possession: 'Dec 2026',
    amenities: ['High-speed elevators', 'Power backup', 'CCTV surveillance', 'Ample parking', 'Food court', 'Conference rooms'],
    features: ['Prime IT corridor location', 'Efficient commercial layouts', 'Modern safety & security', 'Investor-friendly returns'],
  },
  {
    id: 3,
    title: 'Goodwill Skyline',
    description:
      'Ultra-luxury penthouses and apartments with breathtaking skyline views.',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&h=800&fit=crop',
    status: 'COMPLETED',
    location: 'Kharadi, Pune',
    category: 'Residential',
    about:
      'Goodwill Skyline brings a refined luxury experience to Kharadi with panoramic views, premium interiors, and an exclusive community. Designed for those who appreciate space, design, and privacy.',
    price: '₹ 2.40 Cr – ₹ 5.80 Cr',
    area: '1650 – 4200 sq. ft.',
    possession: 'Completed',
    amenities: ['Infinity pool', 'Sky lounge', 'Concierge', 'Fitness studio', 'Private theater', 'Valet parking'],
    features: ['Signature skyline views', 'Luxury amenities & concierge', 'Spacious premium residences', 'Prime business district proximity'],
  },
  {
    id: 4,
    title: 'Goodwill High Street',
    description:
      "Premium retail spaces in Pune's most vibrant lifestyle destination.",
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    status: 'ONGOING',
    location: 'Koregaon Park, Pune',
    category: 'Retail',
    about:
      'Goodwill High Street is a curated retail destination designed to host premium brands and experiences. Strategically positioned, it offers strong visibility, modern design, and a high-footfall ecosystem.',
    price: '₹ 70 L – ₹ 4.20 Cr',
    area: '250 – 2500 sq. ft.',
    possession: 'Jun 2026',
    amenities: ['Escalators', 'Central atrium', 'Security', 'Parking', 'Signage zones', 'Cafes & leisure'],
    features: ['High street visibility', 'Prime lifestyle district', 'Flexible unit sizes', 'Premium brand ecosystem'],
  },
  {
    id: 5,
    title: 'Goodwill Business Bay',
    description:
      'Premium office spaces with world-class infrastructure in a prime business district.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=800&fit=crop',
    status: 'COMPLETED',
    location: 'Viman Nagar, Pune',
    category: 'Commercial',
    about:
      'Goodwill Business Bay is a completed commercial landmark offering premium office environments for modern enterprises. With robust infrastructure and excellent access, it supports business growth and productivity.',
    price: '₹ 1.10 Cr – ₹ 6.50 Cr',
    area: '800 – 6000 sq. ft.',
    possession: 'Completed',
    amenities: ['Reception lobby', 'Power backup', 'Security', 'Parking', 'High-speed internet ready', 'Meeting rooms'],
    features: ['Prime connectivity', 'Efficient floor plans', 'Premium lobby experience', 'Ready-to-use infrastructure'],
  },
  {
    id: 6,
    title: 'Goodwill Paradise Township',
    description:
      'An integrated township offering a complete lifestyle with homes, schools, and recreation.',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop',
    status: 'READY TO MOVE',
    location: 'Wagholi, Pune',
    category: 'Residential',
    about:
      'Goodwill Paradise Township is an integrated community designed for a complete lifestyle. With thoughtfully planned amenities, open spaces, and excellent connectivity, it blends comfort and convenience for families.',
    price: '₹ 68 L – ₹ 1.60 Cr',
    area: '720 – 1350 sq. ft.',
    possession: 'Ready to Move',
    amenities: ['Community park', 'Clubhouse', 'Jogging track', 'Kids play area', 'Sports courts', 'Security'],
    features: ['Integrated township planning', 'Family-first amenities', 'Green open spaces', 'Strong long-term value'],
  },
]

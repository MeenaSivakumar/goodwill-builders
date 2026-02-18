export const projects = [
  {
    id: 1,
    title: "Sunset Villas",
    description: "Luxury residential complex with modern amenities and stunning sunset views",
    image: "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=800&h=600&fit=crop",
    status: "ongoing" as const,
    price: "$450,000",
    location: "Miami Beach, FL",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,500 sq ft",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=800&h=600&fit=crop"
    ],
    amenities: [
      "Private Beach Access",
      "Ocean Views",
      "Modern Kitchen",
      "Swimming Pool",
      "Smart Home Technology",
      "Gated Community"
    ],
    specifications: {
      yearBuilt: "2024",
      propertyType: "Luxury Villa",
      floors: 2,
      units: 12,
      parkingSpaces: 24
    }
  },
  {
    id: 2,
    title: "Downtown Heights",
    description: "Modern commercial office space in the heart of business district",
    image: "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=800&h=600&fit=crop",
    status: "completed" as const,
    price: "$2,500,000",
    location: "New York, NY",
    bedrooms: 0,
    bathrooms: 8,
    area: "15,000 sq ft",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=800&h=600&fit=crop"
    ],
    amenities: [
      "Conference Rooms",
      "High-Speed Internet",
      "Security System",
      "Parking Garage",
      "Fitness Center",
      "Rooftop Terrace"
    ],
    specifications: {
      yearBuilt: "2023",
      propertyType: "Commercial Building",
      floors: 15,
      units: 50,
      parkingSpaces: 100
    }
  },
  {
    id: 3,
    title: "Green Valley Estates",
    description: "Eco-friendly residential community with sustainable features",
    image: "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=800&h=600&fit=crop",
    status: "ongoing" as const,
    price: "$380,000",
    location: "Austin, TX",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=800&h=600&fit=crop"
    ],
    amenities: [
      "Solar Panels",
      "Rain Water Harvesting",
      "Energy Efficient",
      "Community Garden",
      "Electric Vehicle Charging",
      "Green Building Materials"
    ],
    specifications: {
      yearBuilt: "2024",
      propertyType: "Eco Home",
      floors: 2,
      units: 25,
      parkingSpaces: 50
    }
  },
  {
    id: 4,
    title: "Marina Bay Tower",
    description: "Luxury waterfront condominium with panoramic city views",
    image: "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=800&h=600&fit=crop",
    status: "completed" as const,
    price: "$850,000",
    location: "San Francisco, CA",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sq ft",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=800&h=600&fit=crop"
    ],
    amenities: [
      "Waterfront Views",
      "Concierge Service",
      "Wine Cellar",
      "Fitness Center",
      "Private Elevator",
      "Smart Home System"
    ],
    specifications: {
      yearBuilt: "2023",
      propertyType: "Luxury Condo",
      floors: 20,
      units: 150,
      parkingSpaces: 180
    }
  },
  {
    id: 5,
    title: "Tech Park Plaza",
    description: "Modern office complex designed for technology companies",
    image: "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=800&h=600&fit=crop",
    status: "ongoing" as const,
    price: "$1,200,000",
    location: "Seattle, WA",
    bedrooms: 0,
    bathrooms: 12,
    area: "25,000 sq ft",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=800&h=600&fit=crop"
    ],
    amenities: [
      "High-Tech Infrastructure",
      "Data Center Ready",
      "24/7 Security",
      "Conference Facilities",
      "Cafeteria",
      "Underground Parking"
    ],
    specifications: {
      yearBuilt: "2024",
      propertyType: "Tech Office",
      floors: 8,
      units: 30,
      parkingSpaces: 200
    }
  },
  {
    id: 6,
    title: "Mountain View Residences",
    description: "Premium residential community with mountain and valley views",
    image: "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=800&h=600&fit=crop",
    status: "completed" as const,
    price: "$650,000",
    location: "Denver, CO",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,800 sq ft",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=800&h=600&fit=crop"
    ],
    amenities: [
      "Mountain Views",
      "Hiking Trails",
      "Clubhouse",
      "Swimming Pool",
      "Tennis Courts",
      "Pet-Friendly Community"
    ],
    specifications: {
      yearBuilt: "2023",
      propertyType: "Mountain Home",
      floors: 2,
      units: 40,
      parkingSpaces: 80
    }
  }
]

export const heroSlides = [
  {
    id: 1,
    title: "Building Dreams",
    subtitle: "Since 1985",
    description: "Transform your vision into reality with our expert construction services",
    image: "https://images.unsplash.com/photo-1600585154340-e6296b3e9c3a?w=1920&h=1080&fit=crop",
    cta: "Start Your Project",
    ctaLink: "/contact"
  },
  {
    id: 2,
    title: "Quality Construction",
    subtitle: "Excellence in Every Build",
    description: "Delivering premium construction solutions for residential and commercial projects",
    image: "https://images.unsplash.com/photo-1600607227431-8e9c963942aa?w=1920&h=1080&fit=crop",
    cta: "View Our Work",
    ctaLink: "/projects"
  },
  {
    id: 3,
    title: "Innovative Design",
    subtitle: "Modern Solutions",
    description: "Creating spaces that inspire and elevate your lifestyle",
    image: "https://images.unsplash.com/photo-1600566607502-2d0b9b5b5e5?w=1920&h=1080&fit=crop",
    cta: "Learn More",
    ctaLink: "/about"
  }
]

export const companyInfo = {
  name: "Good Will Builders",
  description: "Good Will Builders has been a trusted name in construction for over 35 years, delivering exceptional quality and innovative solutions to residential and commercial clients across the nation.",
  mission: "To build exceptional spaces that exceed client expectations through innovative design, quality craftsmanship, and sustainable practices.",
  values: [
    {
      title: "Quality",
      description: "We never compromise on quality and use only the finest materials and craftsmanship."
    },
    {
      title: "Integrity",
      description: "We believe in transparency, honesty, and ethical business practices in all our dealings."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to deliver cutting-edge construction solutions."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible building practices and green construction."
    }
  ],
  stats: [
    { value: "500+", label: "Projects Completed" },
    { value: "35+", label: "Years Experience" },
    { value: "1000+", label: "Happy Clients" },
    { value: "25+", label: "Industry Awards" }
  ],
  team: [
    {
      name: "John Anderson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "With over 35 years in construction, John founded Good Will Builders with a vision to deliver exceptional quality and service."
    },
    {
      name: "Sarah Mitchell",
      position: "Chief Architect",
      image: "https://images.unsplash.com/photo-1494790108750-2e8d9b3b5b5e?w=400&h=400&fit=crop&crop=face",
      bio: "Sarah brings creative vision and technical expertise to every project, ensuring innovative and functional designs."
    },
    {
      name: "Michael Chen",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Michael ensures every project runs smoothly, on time, and within budget through meticulous planning."
    },
    {
      name: "Emily Rodriguez",
      position: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1494790108750-2e8d9b3b5b5e?w=400&h=400&fit=crop&crop=face",
      bio: "Emily oversees all technical aspects of construction, ensuring structural integrity and safety standards."
    }
  ]
}

export const contactInfo = {
  address: "123 Construction Ave, Building City, BC 12345",
  phone: "(555) 123-4567",
  email: "info@goodwillbuilders.com",
  hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
}

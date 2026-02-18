import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const Home: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop',
      title: 'Where Dreams Find an Address',
      subtitle: 'Exclusive villas and estates offering unparalleled privacy and elegance.'
    },
    {
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop',
      title: 'Building Your Future',
      subtitle: 'Premium residential and commercial spaces designed for modern living.'
    },
    {
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1920&h=1080&fit=crop',
      title: 'Luxury Redefined',
      subtitle: 'Experience the pinnacle of sophisticated living in prime locations.'
    }
  ]

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext()
      }
    }, 1000) // Change slide every 5 seconds

    return () => {
      emblaApi.off('select', onSelect)
      clearInterval(autoplay)
    }
  }, [emblaApi])

  const featuredProjects = [
    {
      title: 'Goodwill Heights',
      location: 'Baner, Pune',
      status: 'READY TO MOVE',
      type: 'Residential',
      description: 'Premium 2 & 3 BHK residences with panoramic city views and world-class amenities.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    },
    {
      title: 'Goodwill Commerce Hub',
      location: 'Hinjewadi, Pune',
      status: 'ONGOING',
      type: 'Commercial',
      description: 'State-of-the-art commercial spaces designed for modern businesses and startups.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    },
    {
      title: 'Goodwill Skyline',
      location: 'Kharadi, Pune',
      status: 'COMPLETED',
      type: 'Residential',
      description: 'Ultra-luxury penthouses and apartments with breathtaking skyline views.',
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&h=800&fit=crop',
    },
  ]

  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {heroSlides.map((slide, index) => (
              <div key={index} className="embla__slide flex-none w-full h-full relative">
                <img
                  src={slide.image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={slide.title}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container relative z-10 h-full flex flex-col justify-center pt-24">
                  <h1 className="text-white text-6xl md:text-7xl font-serif leading-tight mb-6 max-w-3xl">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-lg mb-8 max-w-xl">
                    {slide.subtitle}
                  </p>
                  <Link
                    to="/projects"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block w-fit mb-8"
                  >
                    Explore Projects
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container">
          <p className="text-orange-600 font-semibold tracking-wider mb-4">
            ABOUT US
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Building Trust, Delivering Excellence
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            With over two decades of experience, Goodwill Builders has established itself
            as a premier real estate developer in Pune.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-10">
              <h3 className="text-3xl font-semibold text-orange-600 mb-2">50+</h3>
              <p className="text-gray-600">Projects Successfully Delivered</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-10">
              <h3 className="text-3xl font-semibold text-orange-600 mb-2">20+</h3>
              <p className="text-gray-600">Years Of Trusted Service</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-10">
              <h3 className="text-3xl font-semibold text-orange-600 mb-2">5000+</h3>
              <p className="text-gray-600">Happy Homeowners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <p className="text-orange-600 font-semibold tracking-wider mb-4 text-center">
            OUR PORTFOLIO
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-4 py-1 rounded-full shadow">
                    {project.status}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-[#0f1f33] mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mb-3 gap-2">
                    <span className="text-orange-600">📍</span>
                    {project.location}
                  </div>

                  <span className="inline-block bg-[#f4f1ec] text-gray-700 text-xs px-3 py-1 rounded-full mb-4">
                    {project.type}
                  </span>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl text-white text-center py-20 px-8">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Find Your Dream Property?
            </h2>

            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team for personalized consultations.
            </p>

            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

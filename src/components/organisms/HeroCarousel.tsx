import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from 'react-router-dom'

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  ctaLink: string
}

interface HeroCarouselProps {
  slides: HeroSlide[]
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

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
    }, 5000) // Change slide every 5 seconds

    return () => {
      emblaApi.off('select', onSelect)
      clearInterval(autoplay)
    }
  }, [emblaApi])

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide, index) => (
            <div key={slide.id} className="embla__slide flex-none w-full h-full relative">
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
                  to={slide.ctaLink}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition inline-block w-fit mb-8"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
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
  )
}

export default HeroCarousel

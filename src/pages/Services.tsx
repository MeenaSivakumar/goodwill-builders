import { motion } from 'framer-motion'
import { Briefcase, Building2, KeyRound, Settings, Store } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const servicesHero =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop'

const services = [
  {
    icon: Building2,
    title: 'Residential Development',
    description:
      'Premium apartments, villas, and townships designed for modern families. Every home reflects meticulous planning, quality construction, and elegant aesthetics.',
  },
  {
    icon: Store,
    title: 'Commercial Spaces',
    description:
      'Grade-A office complexes and business parks built to international standards. Our commercial projects offer world-class infrastructure and strategic locations.',
  },
  {
    icon: Briefcase,
    title: 'Retail Destinations',
    description:
      'High-street retail and shopping complexes in prime locations. We create vibrant retail ecosystems that attract premium brands and steady footfall.',
  },
  {
    icon: Settings,
    title: 'Project Management',
    description:
      'End-to-end project management services ensuring timely delivery, cost efficiency, and uncompromising quality at every stage of development.',
  },
  {
    icon: KeyRound,
    title: 'Turnkey Solutions',
    description:
      'Complete turnkey construction solutions from concept to handover. We handle everything including design, approvals, construction, and finishing.',
  },
]

const Services: React.FC = () => {
  return (
    <>
      <title>Services – Goodwill Builders</title>
      <meta
        name="description"
        content="Comprehensive real estate services including residential, commercial, retail development, project management, and turnkey solutions."
      />

      <section className="relative h-[40vh] md:h-[50vh]">
        <img src={servicesHero} alt="Our Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
              Our Services
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  ...fadeUp,
                  visible: {
                    ...fadeUp.visible,
                    transition: { delay: i * 0.1, duration: 0.5 },
                  },
                }}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 gradient-orange rounded-xl flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Partner with Goodwill Builders for your next project and experience the difference that quality, trust, and expertise make.
            </p>
            <Link
              to="/contact"
              className="inline-block gradient-orange text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services

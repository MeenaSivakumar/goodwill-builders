import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const leaders = [
  { name: 'Rajesh Goodwill', role: 'Founder & Chairman', initials: 'RG' },
  { name: 'Priya Goodwill', role: 'Managing Director', initials: 'PG' },
  { name: 'Amit Sharma', role: 'Chief Architect', initials: 'AS' },
]

const About: React.FC = () => {
  return (
    <>
      <title>About Us – Goodwill Builders</title>
      <meta
        name="description"
        content="Learn about Goodwill Builders - our vision, mission, and the leadership driving premium real estate development in Pune."
      />

      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-navy text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mt-3 mb-4">
              Our Story
            </h1>
            <p className="text-navy-foreground/70 max-w-2xl mx-auto">
              Two decades of building trust, delivering excellence, and creating landmarks that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl font-bold mb-6">Building Dreams Since 2003</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Goodwill Builders was founded with a singular vision: to create living and working spaces that
              inspire and endure. From our humble beginnings with a single residential project, we have grown
              into one of Pune's most trusted real estate developers, with a portfolio spanning over 50 projects
              and 5,000+ happy families.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to quality construction, innovative design, and timely delivery has earned us
              numerous accolades and, more importantly, the unwavering trust of our homeowners. Every project
              we undertake is a reflection of our core values: integrity, excellence, and customer-centricity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-8 shadow-card"
            >
              <div className="w-14 h-14 gradient-orange rounded-xl flex items-center justify-center mb-5">
                <Eye size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be the most trusted and admired real estate developer in India, known for creating
                iconic spaces that enhance the quality of life for every individual who calls our
                projects home.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.15, duration: 0.5 } } }}
              className="bg-card rounded-xl p-8 shadow-card"
            >
              <div className="w-14 h-14 gradient-orange rounded-xl flex items-center justify-center mb-5">
                <Target size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To deliver exceptional real estate projects through innovative design, sustainable
                practices, and an unwavering commitment to quality — creating lasting value for our
                customers, partners, and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="font-heading text-3xl font-bold mt-3 mb-10">The Team Behind Goodwill</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.5 } } }}
                className="bg-card rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-20 h-20 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-xl font-bold text-primary-foreground">{leader.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-navy">{leader.name}</h3>
                <p className="text-sm text-muted-foreground">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About

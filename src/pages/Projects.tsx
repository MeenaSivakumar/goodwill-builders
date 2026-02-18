import { motion } from 'framer-motion'
import ProjectCard from '../components/molecules/ProjectCard'
import { projects } from '@/data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Projects: React.FC = () => {
  return (
    <>
      <title>Projects – Goodwill Builders</title>
      <meta
        name="description"
        content="Explore our portfolio of premium residential, commercial, and retail developments across Pune."
      />

      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-navy text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mt-3 mb-4">
              Our Projects
            </h1>
            <p className="text-navy-foreground/70 max-w-xl mx-auto">
              Discover a curated collection of residential, commercial, and retail spaces crafted with excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  ...fadeUp,
                  visible: {
                    ...fadeUp.visible,
                    transition: { delay: i * 0.08, duration: 0.5 },
                  },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects

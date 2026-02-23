import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Shield, Award } from "lucide-react";
import Layout from "@/components/organisms/Layout";
import HeroCarousel from "@/components/organisms/HeroCarousel";
import ProjectCard from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  const featured = projects.slice(0, 3);

  const heroSlides = [
    {
      id: 1,
      title: "Where Dreams Find an Address",
      subtitle: "Goodwill Builders",
      description: "Premium residential, commercial, and retail developments in Pune",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
      cta: "Explore Projects",
      ctaLink: "/projects"
    },
    {
      id: 2,
      title: "Building Your Future",
      subtitle: "Luxury Living Redefined",
      description: "State-of-the-art spaces designed for modern lifestyles",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop",
      cta: "View Portfolio",
      ctaLink: "/projects"
    },
    {
      id: 3,
      title: "Excellence in Construction",
      subtitle: "Trusted Since 2000",
      description: "Delivering quality homes and commercial spaces for over two decades",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1920&h=1080&fit=crop",
      cta: "Contact Us",
      ctaLink: "/contact"
    }
  ];

  return (
    <Layout>
      {/* SEO */}
      <title>Goodwill Builders – Premium Real Estate Developer in Pune</title>
      <meta name="description" content="Goodwill Builders - Premium residential, commercial, and retail developments in Pune. Building luxury spaces that redefine modern living." />

      {/* Hero */}
      <HeroCarousel slides={heroSlides} />

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              Building Trust, Delivering Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over two decades of experience, Goodwill Builders has established itself as a premier real estate 
              developer in Pune. Our portfolio spans luxury residences, commercial landmarks, and retail destinations — 
              each project reflecting our commitment to quality, innovation, and timely delivery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { icon: Building2, label: "50+ Projects", sub: "Successfully Delivered" },
                { icon: Shield, label: "20+ Years", sub: "Of Trusted Service" },
                { icon: Award, label: "5000+ Families", sub: "Happy Homeowners" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.15, duration: 0.5 } } }}
                  className="bg-card rounded-xl p-6 shadow-card text-center"
                >
                  <stat.icon size={28} className="text-primary mx-auto mb-3" />
                  <div className="font-heading font-bold text-xl text-navy">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
              Featured Projects
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1, duration: 0.5 } } }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Button Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 gradient-orange text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-all hover:shadow-lg hover:-translate-y-0.5 "
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="gradient-orange rounded-2xl p-8 md:p-14 text-center"
          >
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Get in touch with our team for personalized consultations and exclusive property tours.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-card/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
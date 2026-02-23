import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Phone, IndianRupee, Maximize, CalendarDays, Check } from "lucide-react";
import { projects } from "@/data/projects";
import Layout from "@/components/organisms/Layout";
import '@/index.css';
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// const amenityIcons: Record<string, string> = {};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="pt-28 pb-20 text-center container mx-auto px-4">
        <h1 className="font-heading text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-primary font-medium hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <Layout>
      <title>{project.title} – Goodwill Builders</title>
      <meta name="description" content={project.description} />

      {/* Banner */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 lg:px-8 pb-10 md:pb-16">
            <div className="container mx-auto flex justify-end">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-right">
              <Link to="/projects" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 transition-colors">
                <ArrowLeft size={16} /> Back to Projects
              </Link>
              <span className="block mb-3">
                <span className="gradient-orange text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {project.status}
                </span>
              </span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-2">
                {project.title}
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={16} className="text-primary" />
                <span>{project.location}</span>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {/* Content */}
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4 lg:px-8">
    
    {/* 75% / 25% CSS Grid Layout */}
    <div className="project-layout">
      
      {/* LEFT CONTENT (75%) */}
      <div className="space-y-14">

        {/* About */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            About This Project
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            {project.about}
          </p>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-heading text-2xl mt-4 md:text-3xl font-bold mb-8">
            Specifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: IndianRupee, label: "Price Range", value: project.price },
              { icon: Maximize, label: "Area", value: project.area },
              { icon: CalendarDays, label: "Possession", value: project.possession },
            ].map((spec, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-8 shadow-elevated text-center"
              >
                <spec.icon size={30} className="text-primary mx-auto mb-4" />
                <div className="text-sm text-muted-foreground mb-2">
                  {spec.label}
                </div>
                <div className="font-heading font-bold text-navy text-lg">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Amenities */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-heading text-2xl mt-4 md:text-3xl font-bold mb-8">
            Amenities
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.amenities.map((amenity, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center font-medium shadow-sm"
                style={{ backgroundColor: "#EDE6DA" }}
              >
                <div className="w-10 h-10 gradient-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={16} className="text-primary-foreground" />
                </div>
                <span className="text-base text-beige-foreground">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* RIGHT STICKY (25%) */}
      <div className="sticky-sidebar">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card rounded-2xl p-8 shadow-elevated"
          >
            <div className="text-center mb-8">
              <div className="text-sm text-muted-foreground mb-2">
                Starting From
              </div>
              <div className="font-heading text-3xl font-bold text-primary">
                {project.price.split("–")[0].trim()}
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check
                    size={18}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="block w-full gradient-orange text-primary-foreground py-4 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity mb-4"
            >
              Enquire Now
            </Link>

            <a
              href="tel:+919876543210"
              className="block w-full border-2 border-primary text-primary py-4 rounded-lg font-semibold text-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone size={16} className="inline mr-2" />
              Call Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
    </Layout>
  );
};

export default ProjectDetail;

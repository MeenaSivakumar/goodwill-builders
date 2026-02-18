import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import type { Project } from '@/data/projects'

const statusColors: Record<string, string> = {
  COMPLETED: 'gradient-orange',
  'READY TO MOVE': 'gradient-orange',
  ONGOING: 'bg-secondary',
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${statusColors[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-navy mb-1">
          {project.title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin size={14} className="text-primary" />
          {project.location}
        </div>
        <span className="inline-block bg-beige text-beige-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
          {project.category}
        </span>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  )
}

export default ProjectCard

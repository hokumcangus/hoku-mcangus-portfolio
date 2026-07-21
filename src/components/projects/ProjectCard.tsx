import type { Project } from "../../data/projects"

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.imageUrl ? (
        <img alt={`${project.title} preview`} className="project-image" src={project.imageUrl} />
      ) : null}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tags.map(tag => (
          <li key={`${project.id}-${tag}`}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.liveUrl ? (
          <a href={project.liveUrl} rel="noreferrer noopener" target="_blank">
            Live Demo
          </a>
        ) : null}
        {project.sourceUrl ? (
          <a href={project.sourceUrl} rel="noreferrer noopener" target="_blank">
            Source Code
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard

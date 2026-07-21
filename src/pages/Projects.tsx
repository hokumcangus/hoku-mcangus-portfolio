import ProjectCard from "../components/projects/ProjectCard"
import { projects } from "../data/projects"

function Projects() {
  return (
    <div className="site-shell page-content">
      <section className="section-block">
        <h1>Projects</h1>
        <p>
          A selection of recent work focused on polished interfaces, responsive layouts, and
          production-ready user experiences.
        </p>
      </section>
      <section className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  )
}

export default Projects

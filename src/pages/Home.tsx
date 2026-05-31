import ProjectCard from "../components/projects/ProjectCard"
import { projects } from "../data/projects"

const featuredProjects = projects.filter(project => project.featured)

export default function Home() {
  return (
    <div className="site-shell page-content home-page">
      <section className="hero">
        <p className="eyebrow">Software Developer Portfolio</p>
        <h1>Hi, I&apos;m Hoku McAngus — I build modern web experiences.</h1>
        <p>
          I design and develop responsive, user-friendly applications with clean UI,
          maintainable architecture, and practical real-world functionality.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/projects">
            View Projects
          </a>
          <a className="button" href="/contact">
            Contact Me
          </a>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Featured Projects</h2>
          <a href="/projects">See all projects</a>
        </div>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}

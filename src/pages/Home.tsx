import { Link } from "react-router-dom"
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
          <Link className="button primary" to="/projects">
            View Projects
          </Link>
          <Link className="button" to="/contact">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Featured Projects</h2>
          <Link to="/projects">See all projects</Link>
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

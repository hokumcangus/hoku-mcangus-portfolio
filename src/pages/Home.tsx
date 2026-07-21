import { Link } from "react-router-dom"
import ProjectCard from "../components/projects/ProjectCard"
import { projects } from "../data/projects"
import { storyContent } from "../data/storyContent"

const featuredProjects = projects.filter(project => project.featured)

export default function Home() {
  return (
    <div className="site-shell page-content home-page">
      <section className="hero">
        <p className="eyebrow">{storyContent.hero.kicker}</p>
        <h1>{storyContent.hero.title}</h1>
        <p>{storyContent.hero.subtitle}</p>
        <p>{storyContent.hero.heading}</p>
        <div className="hero-actions">
          <Link className="button primary" to="/projects">
            {storyContent.hero.ctaPrimary}
          </Link>
          <Link className="button" to="/contact">
            {storyContent.hero.ctaSecondary}
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

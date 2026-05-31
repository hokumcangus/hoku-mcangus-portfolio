const skillGroups = {
  Frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  "Tools & Workflow": ["Git", "GitHub", "Vite", "Testing Library", "Responsive Design"],
  Strengths: ["Clear communication", "Component architecture", "Product-minded delivery"],
}

function About() {
  return (
    <div className="site-shell page-content">
      <section className="section-block">
        <h1>About</h1>
        <p>
          I&apos;m a developer focused on creating polished, accessible, and responsive web
          applications. I enjoy taking ideas from concept to production-quality interfaces.
        </p>
        <p>
          My approach blends strong UI craftsmanship with practical engineering decisions so
          products are not only attractive, but maintainable and effective.
        </p>
      </section>

      <section className="section-block skills-grid">
        {Object.entries(skillGroups).map(([groupName, skills]) => (
          <article key={groupName}>
            <h2>{groupName}</h2>
            <ul>
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}

export default About

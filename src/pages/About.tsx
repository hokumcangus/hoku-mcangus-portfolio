import { storyContent } from "../data/storyContent"

function About() {
  return (
    <div className="site-shell page-content">
      <section className="section-block">
        <h1>{storyContent.journey.title}</h1>
        <p>{storyContent.journey.subtitle}</p>
        <p>{storyContent.journey.description}</p>
      </section>

      <section className="section-block skills-grid">
        {storyContent.journey.chapters.map(chapter => (
          <article key={chapter.chapter}>
            <h2>{chapter.chapter}</h2>
            <p>
              <strong>{chapter.title}</strong>
            </p>
            <p>{chapter.role}</p>
            <p>{chapter.lesson}</p>
            <p>{chapter.text}</p>
          </article>
        ))}
      </section>

      <section className="section-block">
        <h2>{storyContent.toolbox.title}</h2>
        <p>{storyContent.toolbox.subtitle}</p>
        <ul>
          {storyContent.toolbox.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section-block skills-grid">
        {storyContent.toolbox.builds.map(build => (
          <article key={build.title}>
            <h2>{build.label}</h2>
            <p>
              <strong>{build.title}</strong>
            </p>
            <p>{build.description}</p>
          </article>
        ))}
      </section>

      <section className="section-block">
        <h2>{storyContent.compass.title}</h2>
        <p>{storyContent.compass.subtitle}</p>
        <ul>
          {storyContent.compass.principles.map(principle => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
        <p>{storyContent.compass.quote}</p>
      </section>
    </div>
  )
}

export default About

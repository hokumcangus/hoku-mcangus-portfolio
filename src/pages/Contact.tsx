import { storyContent } from "../data/storyContent"

function Contact() {
  const { email, linkedIn } = storyContent.connect
  return (
    <div className="site-shell page-content">
      <section className="section-block">
        <h1>{storyContent.connect.title}</h1>
        <p>{storyContent.connect.intro}</p>
      </section>

      <section className="section-block contact-card">
        <h2>{storyContent.connect.cta}</h2>
        <ul>
          <li>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/hokumcangus">github.com/hokumcangus</a>
          </li>
          <li>
            LinkedIn: <a href={linkedIn.url}>{linkedIn.label}</a>
          </li>
        </ul>
        <p>{storyContent.connect.footer}</p>
      </section>
    </div>
  )
}

export default Contact

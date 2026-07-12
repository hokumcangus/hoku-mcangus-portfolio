import { screen } from "@testing-library/react"
import App from "./App"
import { projects } from "./data/projects"
import { renderWithProviders } from "./utils/test-utils"

test("renders portfolio navigation and home content", () => {
  window.history.pushState({}, "", "/")
  renderWithProviders(<App />)

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /living the dream/i,
    }),
  ).toBeInTheDocument()

  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument()
})

test("projects page renders project cards with external links", () => {
  window.history.pushState({}, "", "/projects")
  renderWithProviders(<App />)

  const featuredProject = projects.find((project) => project.id === "lovable-demo")
  expect(featuredProject).toBeDefined()

  expect(screen.getByRole("heading", { level: 1, name: /projects/i })).toBeInTheDocument()
  expect(screen.getByText(featuredProject!.title)).toBeInTheDocument()

  const liveDemoLinks = screen.getAllByRole("link", { name: "Live Demo" })
  const matchingLiveDemoLink = liveDemoLinks.find(
    (link) => link.getAttribute("href") === featuredProject!.liveUrl,
  )
  expect(matchingLiveDemoLink).toBeInTheDocument()
})

test("navigates to about page when about link is clicked", async () => {
  window.history.pushState({}, "", "/")
  const { user } = renderWithProviders(<App />)

  await user.click(screen.getByRole("link", { name: "About" }))

  expect(screen.getByRole("heading", { level: 1, name: "My Journey" })).toBeInTheDocument()
})

import { act, screen } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"

describe("App", () => {
  it("renders the app", () => {
    renderWithProviders(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })
})

import { screen } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"

describe("App", () => {
	it("renders the home page heading", () => {
		renderWithProviders(<App />)
		expect(
			screen.getByRole("heading", { name: /Full-Stack Engineer & Digital Story Dancer/i }),
		).toBeInTheDocument()
	})
})

import { screen, fireEvent } from "@testing-library/react"
import { CountingPetals } from "./CountingPetals"
import { renderWithProviders } from "../../utils/test-utils"

describe("CountingPetals Component", () => {
  it("renders correctly with initial state", () => {
    renderWithProviders(<CountingPetals />)
    
    expect(screen.getByText(/Counting Petals/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Reset Flower/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Remove Petal/i })).toBeInTheDocument()
    expect(screen.getByRole("spinbutton")).toHaveValue(6)
  })

  it("updates the result text and removes a petal when 'Remove Petal' is clicked", async () => {
    const { user } = renderWithProviders(<CountingPetals />)
    
    const removeButton = screen.getByRole("button", { name: /Remove Petal/i })
    
    // Initial result should be empty
    const resultText = screen.getByTestId("result-text")
    expect(resultText.textContent).toBe("")

    // Click 1: He loves me
    await user.click(removeButton)
    expect(screen.getByText(/He loves me/i)).toBeInTheDocument()

    // Click 2: He loves me not
    await user.click(removeButton)
    expect(screen.getByText(/He loves me not/i)).toBeInTheDocument()
  })

  it("resets the flower with a new number of petals", async () => {
    const { user } = renderWithProviders(<CountingPetals />)
    
    const input = screen.getByRole("spinbutton")
    const resetButton = screen.getByRole("button", { name: /Reset Flower/i })
    const removeButton = screen.getByRole("button", { name: /Remove Petal/i })

    // Change petal count to 3
    fireEvent.change(input, { target: { value: "3" } })
    await user.click(resetButton)

    // Remove 3 petals
    await user.click(removeButton) // 1: He loves me
    await user.click(removeButton) // 2: He loves me not
    await user.click(removeButton) // 3: He loves me

    // Button should be disabled now
    expect(removeButton).toBeDisabled()
    expect(screen.getByText(/He loves me/i)).toBeInTheDocument()
  })

  it("disables the 'Remove Petal' button when no petals are left", async () => {
    const { user } = renderWithProviders(<CountingPetals />)
    
    const input = screen.getByRole("spinbutton")
    const resetButton = screen.getByRole("button", { name: /Reset Flower/i })
    const removeButton = screen.getByRole("button", { name: /Remove Petal/i })

    // Set to 1 petal for quick test
    fireEvent.change(input, { target: { value: "1" } })
    await user.click(resetButton)

    expect(removeButton).not.toBeDisabled()

    await user.click(removeButton)
    
    expect(removeButton).toBeDisabled()
  })
})

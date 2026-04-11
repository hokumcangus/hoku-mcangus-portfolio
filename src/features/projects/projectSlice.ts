import { createSlice } from "@reduxjs/toolkit"

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
}

const initialState: Project[] = [
  {
    id: "aloha-01",
    title: "Taste of Aloha",
    description: "Full-stack ordering and delivery service platform.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"]
  }
]

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {} // We'll add "addProject" later if needed
})
export default projectSlice.reducer
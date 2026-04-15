import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface Project {
  id: string
  title: string
  description: string
}
const initialState: Project[] = [
  { 
    id: "1", 
    title: "Taste of Aloha", 
    description: "A community-focused food delivery platform built to support local businesses. Leveraging React and Node.js to bridge the gap between customers and authentic Hawaiian cuisine." 
  },
  { 
    id: "2", 
    title: "Nordstrom Backend Systems", 
    description: "Scalable backend services built with Go and Node.js. Focused on reliability and performance in a high-traffic retail environment." 
  },
  { 
    id: "3", 
    title: "Navigational Gear (Tech Stack)", 
    description: "My toolkit: React, TypeScript, Go, Node.js, and API architecture. The hull and sails of my digital waʻa (canoe)." 
  },
]
export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // This is your "Add" method
    // PayloadAction<Project> is like specifying the Parameter Type in Java
    addProject: (state, action: PayloadAction<Project>) => {
      state.push(action.payload) // Just like list.add()
    },
    // This is like a "Delete" method
    removeProject: (state, action: PayloadAction<string>) => {
      return state.filter(project => project.id !== action.payload)
    },
  },
})
// Export the action so your components can call it
export const { addProject, removeProject } = projectSlice.actions
export default projectSlice.reducer

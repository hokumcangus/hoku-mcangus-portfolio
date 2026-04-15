import { addProject } from "./projectSlice"
import { useAppDispatch } from "../../app/hooks.ts"

// Add projectSlice to the combineSlices call
// const rootReducer = combineSlices(counterSlice, quotesApiSlice, projectSlice)

const AddProjectButton = () => {
  const dispatch = useAppDispatch()
  const handleAdd = () => {
    dispatch(
      addProject({
        id: Date.now().toString(),
        title: "New Portfolio Item",
        description: "Built with Redux and Java.",
      }),
    )
  }
  return <button onClick={handleAdd}>Add Mock Project</button>
}

export default AddProjectButton

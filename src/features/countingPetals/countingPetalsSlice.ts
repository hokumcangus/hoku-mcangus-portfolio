import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
// import type { AppThunk } from "../../app/store" 

interface CountingPetalsSliceState {
    petals: number
    result: "idle" | "loves me" | "loves me not"

}

const initialState: CountingPetalsSliceState = {
    petals: 0,
    result: "idle",
}

export const countingPetalsSlice = createAppSlice({
    name: "countingPetals",
    initialState,
    
    reducers: create => ({
        setPetals: create.reducer((state) => {
            state.petals += 1
        }),
        incrementByAmount: create.reducer(
            (state, action: PayloadAction<number>) => {
                state.petals += action.payload
            }
        ),
    }),
})

export default countingPetalsSlice.reducer
